// Rough emoji-detection regex covering the common Unicode emoji ranges.
const EMOJI_REGEX =
  /(\p{Emoji_Presentation}|\p{Extended_Pictographic})(\u200D(\p{Emoji_Presentation}|\p{Extended_Pictographic}))*/gu;

export interface EmojiCountResult {
  totalCharacters: number;
  emojiCount: number;
  textCharacters: number;
  uniqueEmojis: { emoji: string; count: number }[];
}

export function countEmojis(input: string): EmojiCountResult {
  const matches = input.match(EMOJI_REGEX) ?? [];
  const counts = new Map<string, number>();
  for (const m of matches) {
    counts.set(m, (counts.get(m) ?? 0) + 1);
  }
  const uniqueEmojis = Array.from(counts.entries())
    .map(([emoji, count]) => ({ emoji, count }))
    .sort((a, b) => b.count - a.count);

  return {
    totalCharacters: Array.from(input).length,
    emojiCount: matches.length,
    textCharacters: Array.from(input).length - matches.join("").length,
    uniqueEmojis,
  };
}

export interface PlatformLimit {
  key: string;
  label: string;
  limit: number;
  note?: string;
  /** true only when the limit was confirmed on the platform's own help pages */
  verified: boolean;
}

export const UNVERIFIED_LIMIT_LABEL = "commonly cited, check in the app";

export const PLATFORM_LIMITS: PlatformLimit[] = [
  { key: "x", label: "X (Twitter) Post", limit: 280, verified: false },
  { key: "instagram", label: "Instagram Caption", limit: 2200, verified: false },
  { key: "tiktok", label: "TikTok Caption", limit: 150, note: "video caption, not bio", verified: false },
  { key: "facebook", label: "Facebook Post", limit: 63206, verified: false },
  { key: "linkedin", label: "LinkedIn Post", limit: 3000, verified: true },
  { key: "youtube-desc", label: "YouTube Description", limit: 5000, verified: true },
  { key: "threads", label: "Threads Post", limit: 500, verified: false },
];

export function charCount(text: string): number {
  return Array.from(text).length;
}

export const YOUTUBE_TITLE_LIMIT = 100;
export const YOUTUBE_DESCRIPTION_LIMIT = 5000;
/** Approximate preview before "show more"; YouTube documents no figure. */
export const YOUTUBE_DESCRIPTION_PREVIEW = 157;
export const UNDOCUMENTED_PREVIEW_LABEL = "approximate, varies by device (not documented by YouTube)";

export interface YoutubeTitleResult {
  length: number;
  status: "good" | "tight" | "too-long" | "over-limit";
  message: string;
}

// The 60/70 tiers are a rule of thumb; only the 100-character limit is official
// (https://support.google.com/youtube/answer/57404).
export function checkYoutubeTitle(title: string): YoutubeTitleResult {
  const length = charCount(title);
  if (length === 0) {
    return { length, status: "good", message: "Start typing your title." };
  }
  if (length > YOUTUBE_TITLE_LIMIT) {
    return {
      length,
      status: "over-limit",
      message: `Over YouTube's official 100-character title limit by ${length - YOUTUBE_TITLE_LIMIT}. Shorten it before uploading.`,
    };
  }
  if (length <= 60) {
    return {
      length,
      status: "good",
      message: "Short titles tend to be safer. How much shows varies by device and isn't documented by YouTube.",
    };
  }
  if (length <= 70) {
    return {
      length,
      status: "tight",
      message: "Rule of thumb: getting long. Some screens may shorten it; YouTube doesn't document where.",
    };
  }
  return {
    length,
    status: "too-long",
    message: "Within YouTube's 100-character limit, but long by our rule of thumb. Put the key words first.",
  };
}

export interface YoutubeDescriptionResult {
  length: number;
  previewStatus: "good" | "tight" | "too-long";
  previewMessage: string;
  totalStatus: "good" | "too-long";
  totalMessage: string;
}

export function checkYoutubeDescription(description: string): YoutubeDescriptionResult {
  const length = charCount(description);
  let previewStatus: "good" | "tight" | "too-long" = "good";
  let previewMessage = `Within the ~${YOUTUBE_DESCRIPTION_PREVIEW}-character preview before "show more" — ${UNDOCUMENTED_PREVIEW_LABEL}.`;

  if (length > 100 && length <= YOUTUBE_DESCRIPTION_PREVIEW) {
    previewStatus = "tight";
    previewMessage = `Close to the ~${YOUTUBE_DESCRIPTION_PREVIEW}-character preview before "show more" — ${UNDOCUMENTED_PREVIEW_LABEL}.`;
  } else if (length > YOUTUBE_DESCRIPTION_PREVIEW) {
    previewStatus = "too-long";
    previewMessage = `Past the ~${YOUTUBE_DESCRIPTION_PREVIEW}-character preview, so the rest may sit behind "show more" — ${UNDOCUMENTED_PREVIEW_LABEL}.`;
  } else if (length === 0) {
    previewMessage = "Start typing your description.";
  }

  const over = length > YOUTUBE_DESCRIPTION_LIMIT;
  return {
    length,
    previewStatus,
    previewMessage,
    totalStatus: over ? "too-long" : "good",
    totalMessage: over
      ? `Over YouTube's official 5,000-character description limit by ${(length - YOUTUBE_DESCRIPTION_LIMIT).toLocaleString("en-US")}.`
      : "Within YouTube's official 5,000-character description limit.",
  };
}

export function generateYoutubeTags(input: string): { tags: string[]; totalLength: number; overLimit: boolean } {
  const raw = input
    .split(/[\n,]+/)
    .map((w) => w.trim())
    .filter(Boolean);

  const tags: string[] = [];
  let totalLength = 0;

  for (const word of raw) {
    // YouTube counts tags joined with commas toward the 500-character limit
    const addLength = word.length + (tags.length > 0 ? 1 : 0);
    if (totalLength + addLength > 500) break;
    tags.push(word);
    totalLength += addLength;
  }

  return { tags, totalLength, overLimit: raw.length > tags.length };
}

export type HashtagStyle = "lowercase" | "camelcase";

export function formatHashtags(
  raw: string,
  style: HashtagStyle
): string[] {
  const words = raw
    .split(/[\n,]+/)
    .map((w) => w.trim())
    .filter(Boolean);

  return words.map((phrase) => {
    const cleaned = phrase.replace(/[^a-zA-Z0-9\s]/g, "");
    const parts = cleaned.split(/\s+/).filter(Boolean);
    if (parts.length === 0) return "";

    if (style === "camelcase") {
      const joined = parts
        .map((p) => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
        .join("");
      return `#${joined}`;
    }
    return `#${parts.join("").toLowerCase()}`;
  }).filter(Boolean);
}

export function formatInstagramCaption(caption: string, hashtags: string): string {
  const cleanCaption = caption.trimEnd();
  const cleanHashtags = hashtags.trim();
  if (!cleanHashtags) return cleanCaption;

  // Standard creator convention: caption, then several blank "." lines,
  // then hashtags — pushes hashtags below the "more" fold.
  const divider = Array.from({ length: 4 }).map(() => ".").join("\n.\n");
  return `${cleanCaption}\n.\n${divider}\n${cleanHashtags}`;
}

export interface LinkedInPreviewResult {
  length: number;
  status: "good" | "tight" | "too-long";
  message: string;
}

export function checkLinkedInPost(text: string): LinkedInPreviewResult {
  const length = charCount(text);
  if (length === 0) {
    return { length, status: "good", message: "Start typing your post." };
  }
  if (length <= 210) {
    return {
      length,
      status: "good",
      message: "Within the ~210-character \"see more\" preview (approximate, varies by device; not documented by LinkedIn).",
    };
  }
  if (length <= 3000) {
    return {
      length,
      status: "tight",
      message: "Likely folded behind \"see more\" — put your hook in the first ~210 characters (approximate, varies by device; not documented by LinkedIn).",
    };
  }
  return {
    length,
    status: "too-long",
    message: "Over LinkedIn's 3,000-character post limit.",
  };
}

export interface WordCountResult {
  words: number;
  characters: number;
  charactersNoSpaces: number;
  sentences: number;
  paragraphs: number;
  readingTimeSeconds: number;
}

export function countWords(text: string): WordCountResult {
  const trimmed = text.trim();
  const words = trimmed === "" ? 0 : trimmed.split(/\s+/).length;
  const characters = Array.from(text).length;
  const charactersNoSpaces = Array.from(text.replace(/\s/g, "")).length;
  const sentences =
    trimmed === "" ? 0 : (trimmed.match(/[.!?]+(\s|$)/g) ?? []).length || (trimmed ? 1 : 0);
  const paragraphs =
    trimmed === "" ? 0 : trimmed.split(/\n\s*\n/).filter((p) => p.trim()).length;
  // Average adult silent reading speed ~200 wpm
  const readingTimeSeconds = Math.round((words / 200) * 60);

  return { words, characters, charactersNoSpaces, sentences, paragraphs, readingTimeSeconds };
}

export function formatReadingTime(seconds: number): string {
  if (seconds < 60) return `${seconds} sec`;
  const minutes = Math.floor(seconds / 60);
  const remSeconds = seconds % 60;
  return remSeconds > 0 ? `${minutes} min ${remSeconds} sec` : `${minutes} min`;
}

export interface LineCountResult {
  totalLines: number;
  nonEmptyLines: number;
  blankLines: number;
}

export function countLines(text: string): LineCountResult {
  if (text === "") return { totalLines: 0, nonEmptyLines: 0, blankLines: 0 };
  const lines = text.split("\n");
  const blankLines = lines.filter((l) => l.trim() === "").length;
  return {
    totalLines: lines.length,
    nonEmptyLines: lines.length - blankLines,
    blankLines,
  };
}

export type TextCase =
  | "uppercase"
  | "lowercase"
  | "title"
  | "sentence"
  | "camel";

export function convertTextCase(text: string, targetCase: TextCase): string {
  if (!text) return "";

  switch (targetCase) {
    case "uppercase":
      return text.toUpperCase();
    case "lowercase":
      return text.toLowerCase();
    case "title":
      return text
        .toLowerCase()
        .replace(/\b\w/g, (c) => c.toUpperCase());
    case "sentence":
      return text
        .toLowerCase()
        .replace(/(^\s*\w|[.!?]\s+\w)/g, (c) => c.toUpperCase());
    case "camel": {
      const words = text
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .trim()
        .split(/\s+/)
        .filter(Boolean);
      return words
        .map((w, i) =>
          i === 0
            ? w.toLowerCase()
            : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
        )
        .join("");
    }
    default:
      return text;
  }
}

export interface RemoveDuplicatesResult {
  output: string;
  removedCount: number;
}

export function removeDuplicateLines(
  text: string,
  caseSensitive: boolean
): RemoveDuplicatesResult {
  const lines = text.split("\n");
  const seen = new Set<string>();
  const output: string[] = [];
  let removedCount = 0;

  for (const line of lines) {
    const key = caseSensitive ? line : line.toLowerCase();
    if (seen.has(key)) {
      removedCount += 1;
      continue;
    }
    seen.add(key);
    output.push(line);
  }

  return { output: output.join("\n"), removedCount };
}

export interface FindReplaceOptions {
  caseSensitive: boolean;
  wholeWord: boolean;
}

export function findAndReplace(
  text: string,
  find: string,
  replace: string,
  options: FindReplaceOptions
): { output: string; count: number } {
  if (!find) return { output: text, count: 0 };

  const escaped = find.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = options.wholeWord ? `\\b${escaped}\\b` : escaped;
  const flags = options.caseSensitive ? "g" : "gi";
  const regex = new RegExp(pattern, flags);

  const matches = text.match(regex);
  const output = text.replace(regex, replace);

  return { output, count: matches ? matches.length : 0 };
}

export type DiffLineType = "same" | "added" | "removed";

export interface DiffLine {
  type: DiffLineType;
  text: string;
}

// Simple line-based LCS diff — sufficient for comparing short-to-medium
// blocks of text (captions, titles, short drafts).
export function diffLines(a: string, b: string): DiffLine[] {
  const linesA = a.split("\n");
  const linesB = b.split("\n");
  const m = linesA.length;
  const n = linesB.length;

  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      dp[i][j] =
        linesA[i] === linesB[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }

  const result: DiffLine[] = [];
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (linesA[i] === linesB[j]) {
      result.push({ type: "same", text: linesA[i] });
      i += 1;
      j += 1;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      result.push({ type: "removed", text: linesA[i] });
      i += 1;
    } else {
      result.push({ type: "added", text: linesB[j] });
      j += 1;
    }
  }
  while (i < m) {
    result.push({ type: "removed", text: linesA[i] });
    i += 1;
  }
  while (j < n) {
    result.push({ type: "added", text: linesB[j] });
    j += 1;
  }

  return result;
}

const STOPWORDS = new Set([
  "the", "a", "an", "and", "or", "but", "is", "are", "was", "were", "be",
  "been", "being", "to", "of", "in", "on", "at", "for", "with", "by",
  "from", "up", "about", "into", "through", "this", "that", "it", "as",
  "i", "you", "we", "they", "he", "she", "my", "your", "our", "their",
]);

export interface WordFrequencyEntry {
  word: string;
  count: number;
}

export function wordFrequency(
  text: string,
  excludeStopwords: boolean
): WordFrequencyEntry[] {
  const words = (text.toLowerCase().match(/[a-z0-9']+/g) ?? []).filter(
    (w) => !excludeStopwords || !STOPWORDS.has(w)
  );

  const counts = new Map<string, number>();
  for (const w of words) {
    counts.set(w, (counts.get(w) ?? 0) + 1);
  }

  return Array.from(counts.entries())
    .map(([word, count]) => ({ word, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 25);
}

export function splitIntoThread(text: string, limit = 280): string[] {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];

  // Reserve space for a " (99/99)" style suffix, added after chunking.
  const reserve = 8;
  const effectiveLimit = limit - reserve;

  const chunks: string[] = [];
  let current = "";

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > effectiveLimit && current) {
      chunks.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) chunks.push(current);

  return chunks.map((chunk, i) => `${chunk} (${i + 1}/${chunks.length})`);
}

export type LineBreakMode = "single-space" | "paragraph";

export function removeLineBreaks(text: string, mode: LineBreakMode): string {
  if (mode === "single-space") {
    return text.replace(/\s*\n\s*/g, " ").trim();
  }
  // Collapse single line breaks within a paragraph, but preserve blank-line
  // paragraph breaks as a single space-separated block per paragraph.
  return text
    .split(/\n\s*\n/)
    .map((para) => para.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean)
    .join("\n\n");
}

const LOREM_WORDS = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing",
  "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore",
  "et", "dolore", "magna", "aliqua", "enim", "ad", "minim", "veniam",
  "quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi",
  "aliquip", "ex", "ea", "commodo", "consequat", "duis", "aute", "irure",
  "in", "reprehenderit", "voluptate", "velit", "esse", "cillum", "fugiat",
  "nulla", "pariatur", "excepteur", "sint", "occaecat", "cupidatat",
  "non", "proident", "sunt", "culpa", "qui", "officia", "deserunt",
  "mollit", "anim", "id", "est", "laborum",
];

function loremSentence(wordCount: number): string {
  const words: string[] = [];
  for (let i = 0; i < wordCount; i++) {
    words.push(LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)]);
  }
  const sentence = words.join(" ");
  return sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".";
}

export function generateLoremIpsum(paragraphCount: number, sentencesPerParagraph: number): string {
  const paragraphs: string[] = [];
  for (let p = 0; p < paragraphCount; p++) {
    const sentences: string[] = [];
    for (let s = 0; s < sentencesPerParagraph; s++) {
      sentences.push(loremSentence(6 + Math.floor(Math.random() * 10)));
    }
    paragraphs.push(sentences.join(" "));
  }
  return paragraphs.join("\n\n");
}

export function generateAcronym(phrase: string): string {
  const words = phrase.trim().split(/\s+/).filter(Boolean);
  return words.map((w) => w.charAt(0).toUpperCase()).join("");
}

export interface BioLimit {
  key: string;
  label: string;
  limit: number;
  verified: boolean;
}

export const BIO_LIMITS: BioLimit[] = [
  { key: "instagram", label: "Instagram Bio", limit: 150, verified: false },
  { key: "tiktok", label: "TikTok Bio", limit: 80, verified: false },
  { key: "x", label: "X (Twitter) Bio", limit: 160, verified: false },
  { key: "youtube", label: "YouTube Channel Description", limit: 1000, verified: false },
  { key: "linkedin", label: "LinkedIn Headline", limit: 220, verified: false },
  { key: "threads", label: "Threads Bio", limit: 150, verified: false },
];

export interface PinterestCheckResult {
  titleLength: number;
  titleStatus: "good" | "too-long";
  descriptionLength: number;
  descriptionStatus: "good" | "too-long";
}

export function checkPinterestPin(title: string, description: string): PinterestCheckResult {
  const titleLength = charCount(title);
  const descriptionLength = charCount(description);
  return {
    titleLength,
    titleStatus: titleLength > 100 ? "too-long" : "good",
    descriptionLength,
    descriptionStatus: descriptionLength > 500 ? "too-long" : "good",
  };
}
