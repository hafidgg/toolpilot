export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "") // strip accents
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export interface FileNameResult {
  optimized: string;
  extension: string;
}

export function optimizeFileName(input: string): FileNameResult {
  const lastDot = input.lastIndexOf(".");
  const hasExtension = lastDot > 0 && lastDot < input.length - 1;
  const namePart = hasExtension ? input.slice(0, lastDot) : input;
  const extension = hasExtension ? input.slice(lastDot + 1).toLowerCase() : "";

  const optimizedName = slugify(namePart);
  return {
    optimized: extension ? `${optimizedName}.${extension}` : optimizedName,
    extension,
  };
}

export interface MetaDescriptionResult {
  length: number;
  status: "too-short" | "good" | "too-long";
  message: string;
}

export function checkMetaDescription(text: string): MetaDescriptionResult {
  const length = Array.from(text).length;
  if (length === 0) {
    return { length, status: "too-short", message: "Start typing your meta description." };
  }
  if (length < 120) {
    return {
      length,
      status: "too-short",
      message: "Under 120 characters — you have room to add more detail.",
    };
  }
  if (length <= 155) {
    return {
      length,
      status: "good",
      message: "Fits within the typical ~155-character search snippet.",
    };
  }
  return {
    length,
    status: "too-long",
    message: "Likely to be truncated in search results.",
  };
}

export interface KeywordDensityResult {
  keyword: string;
  occurrences: number;
  totalWords: number;
  density: number;
}

export function checkKeywordDensity(text: string, keyword: string): KeywordDensityResult | null {
  const cleanKeyword = keyword.trim().toLowerCase();
  if (!cleanKeyword || !text.trim()) return null;

  const words = text.trim().split(/\s+/);
  const totalWords = words.length;

  const keywordWordCount = cleanKeyword.split(/\s+/).length;
  const lowerText = text.toLowerCase();
  const escaped = cleanKeyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const matches = lowerText.match(new RegExp(escaped, "g")) ?? [];

  const occurrences = matches.length;
  const density =
    totalWords > 0 ? ((occurrences * keywordWordCount) / totalWords) * 100 : 0;

  return { keyword: cleanKeyword, occurrences, totalWords, density };
}

export interface UtmParams {
  url: string;
  source: string;
  medium: string;
  campaign: string;
  term?: string;
  content?: string;
}

export function buildUtmLink(params: UtmParams): string | null {
  try {
    const url = new URL(params.url);
    if (params.source) url.searchParams.set("utm_source", params.source);
    if (params.medium) url.searchParams.set("utm_medium", params.medium);
    if (params.campaign) url.searchParams.set("utm_campaign", params.campaign);
    if (params.term) url.searchParams.set("utm_term", params.term);
    if (params.content) url.searchParams.set("utm_content", params.content);
    return url.toString();
  } catch {
    return null;
  }
}

export interface RobotsRule {
  userAgent: string;
  disallow: string[];
  allow: string[];
}

export function buildRobotsTxt(rules: RobotsRule[], sitemapUrl: string): string {
  const blocks = rules.map((rule) => {
    const lines = [`User-agent: ${rule.userAgent || "*"}`];
    for (const path of rule.allow.filter(Boolean)) lines.push(`Allow: ${path}`);
    for (const path of rule.disallow.filter(Boolean)) lines.push(`Disallow: ${path}`);
    return lines.join("\n");
  });

  const output = blocks.join("\n\n");
  return sitemapUrl.trim()
    ? `${output}\n\nSitemap: ${sitemapUrl.trim()}`
    : output;
}

export interface OgTagInput {
  title: string;
  description: string;
  image: string;
  url: string;
  siteName: string;
}

export function buildOgTags(input: OgTagInput): string {
  const lines: string[] = [];
  if (input.title) {
    lines.push(`<meta property="og:title" content="${input.title}" />`);
    lines.push(`<meta name="twitter:title" content="${input.title}" />`);
  }
  if (input.description) {
    lines.push(`<meta property="og:description" content="${input.description}" />`);
    lines.push(`<meta name="twitter:description" content="${input.description}" />`);
  }
  if (input.image) {
    lines.push(`<meta property="og:image" content="${input.image}" />`);
    lines.push(`<meta name="twitter:card" content="summary_large_image" />`);
    lines.push(`<meta name="twitter:image" content="${input.image}" />`);
  }
  if (input.url) {
    lines.push(`<meta property="og:url" content="${input.url}" />`);
  }
  if (input.siteName) {
    lines.push(`<meta property="og:site_name" content="${input.siteName}" />`);
  }
  lines.push(`<meta property="og:type" content="website" />`);
  return lines.join("\n");
}

export interface FaqPair {
  question: string;
  answer: string;
}

export function buildFaqSchema(pairs: FaqPair[]): string {
  const valid = pairs.filter((p) => p.question.trim() && p.answer.trim());
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: valid.map((p) => ({
      "@type": "Question",
      name: p.question,
      acceptedAnswer: { "@type": "Answer", text: p.answer },
    })),
  };
  return JSON.stringify(schema, null, 2);
}

export interface ReadabilityResult {
  fleschScore: number;
  gradeLevel: string;
  words: number;
  sentences: number;
  syllables: number;
}

function countSyllables(word: string): number {
  const w = word.toLowerCase().replace(/[^a-z]/g, "");
  if (w.length <= 3) return 1;
  const matches = w
    .replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "")
    .replace(/^y/, "")
    .match(/[aeiouy]{1,2}/g);
  return matches ? matches.length : 1;
}

export function checkReadability(text: string): ReadabilityResult | null {
  const trimmed = text.trim();
  if (!trimmed) return null;

  const words = trimmed.split(/\s+/).filter(Boolean);
  const sentenceMatches = trimmed.match(/[.!?]+(\s|$)/g);
  const sentences = Math.max(sentenceMatches ? sentenceMatches.length : 1, 1);
  const syllables = words.reduce((sum, w) => sum + countSyllables(w), 0);

  const wordCount = words.length || 1;
  const fleschScore =
    206.835 - 1.015 * (wordCount / sentences) - 84.6 * (syllables / wordCount);

  let gradeLevel = "Very difficult (graduate level)";
  if (fleschScore >= 90) gradeLevel = "Very easy (5th grade)";
  else if (fleschScore >= 80) gradeLevel = "Easy (6th grade)";
  else if (fleschScore >= 70) gradeLevel = "Fairly easy (7th grade)";
  else if (fleschScore >= 60) gradeLevel = "Standard (8th–9th grade)";
  else if (fleschScore >= 50) gradeLevel = "Fairly difficult (10th–12th grade)";
  else if (fleschScore >= 30) gradeLevel = "Difficult (college level)";

  return {
    fleschScore: Math.round(fleschScore * 10) / 10,
    gradeLevel,
    words: wordCount,
    sentences,
    syllables,
  };
}
