export interface GuideSection {
  heading: string;
  paragraphs: string[];
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  categorySlug: string; // links to a category in lib/tools-data.ts for the tool directory
  publishedAt: string;
  intro: string[];
  sections: GuideSection[];
  faq: GuideFaq[];
}

export const guides: Guide[] = [
  {
    slug: "youtube-tools-guide",
    title: "The Ultimate Guide to YouTube Creator Tools",
    description:
      "Everything a YouTube creator needs to know about titles, descriptions, tags, and thumbnails — plus the free tools to check each one.",
    categorySlug: "youtube-tools",
    publishedAt: "2026-08-02",
    intro: [
      "A YouTube video succeeds or fails based on a handful of metadata decisions made before a single view happens: the title, the thumbnail, the first line of the description, and the tags attached behind the scenes. None of these are complicated on their own, but each has specific technical limits that are easy to get wrong without realizing it — a title that runs past the 100-character limit, a thumbnail that's the wrong resolution, a tag list that silently drops entries past the character limit.",
      "This guide walks through what each piece of metadata actually does, the limits that govern it, and the free tools on this site that check each one before you publish.",
    ],
    sections: [
      {
        heading: "Titles: written for a 60-character window",
        paragraphs: [
          "YouTube allows up to 100 characters in a title. How many of them show in search, suggestions or on mobile isn't documented by YouTube and varies by device. A rule of thumb: put the part of the title that actually explains the video within the first 60 characters, so it still makes sense if the rest is cut.",
          "Check any draft title against this cutoff with the YouTube Title Checker, which shows a live search-result preview as you type.",
        ],
      },
      {
        heading: "Descriptions: the opening does the real work",
        paragraphs: [
          "A YouTube description can run up to 5,000 characters, but only around the first ~157 characters (approximate; varies by device and not documented by YouTube) show before a viewer has to click \"show more.\" Links, key context, and your strongest pitch for the video should live in that first stretch — everything after it is there for viewers who are already engaged enough to expand the box.",
          "The YouTube Description Checker flags roughly where that approximate preview cutoff lands in your draft.",
        ],
      },
      {
        heading: "Tags: minor for ranking, still worth doing correctly",
        paragraphs: [
          "YouTube has said tags play a smaller role than titles and descriptions, mainly helping with misspellings of your main keywords. They're still worth adding, and the commonly cited constraint is that all your tags combined, including the commas between them, can't exceed 500 characters (we couldn't confirm this on YouTube Help, so check in YouTube Studio).",
          "The YouTube Tag Generator builds a tag list from your keyword ideas and stops adding tags at that 500-character boundary, so no tag is cut off mid-list.",
        ],
      },
      {
        heading: "Thumbnails: 16:9, at least 640 px wide, 3840×2160 preferred",
        paragraphs: [
          "YouTube's Help Center lists 3840×2160 as the preferred thumbnail resolution, at a 16:9 aspect ratio, with 640 pixels as the minimum width — anything at or above that minimum is accepted, and higher is better. Files must be JPG or PNG, up to 2 MB from mobile or 50 MB from desktop. A thumbnail outside that ratio gets cropped unpredictably across different placements — search results, suggested videos, and the mobile app can all crop differently.",
          "Upload any draft thumbnail to the Thumbnail Size Checker to confirm both the resolution and the aspect ratio before you set it live.",
        ],
      },
      {
        heading: "Utility tools: IDs, timestamps, and thumbnails after publishing",
        paragraphs: [
          "Beyond pre-publish checks, a few small utilities solve recurring annoyances: the YouTube Video ID Extractor pulls the video ID out of common link formats, the YouTube Channel ID Finder reads whichever channel identifier a link contains (a handle link gives the handle, not the ID), the YouTube Timestamp Link Generator builds a direct link to a specific moment in a video, and the YouTube Thumbnail Downloader gives you direct links to a published video's thumbnail at every available resolution.",
        ],
      },
    ],
    faq: [
      {
        question: "Do I need to use every tool on every video?",
        answer:
          "No — the title and thumbnail checks matter most since they drive the click. Description and tag checks take seconds and are worth doing as a habit, but they carry less weight than getting the title and thumbnail right.",
      },
      {
        question: "How often does YouTube change these limits?",
        answer:
          "Character limits and thumbnail specs are generally stable for long stretches, but they do change occasionally. If a check here doesn't match what you observe on YouTube, let us know through the contact page.",
      },
      {
        question: "Do these tools require a YouTube account or API key?",
        answer:
          "No — every tool in this guide runs without logging in or connecting a YouTube account. You paste in text, a URL, or an image, and get a result immediately.",
      },
    ],
  },
  {
    slug: "social-media-tools-guide",
    title: "The Ultimate Guide to Social Media Formatting Tools",
    description:
      "How character limits, caption formatting, and bio length actually work across Instagram, TikTok, X, LinkedIn, and Pinterest.",
    categorySlug: "social-media-tools",
    publishedAt: "2026-08-02",
    intro: [
      "Every social platform enforces text limits differently — some are hard caps that block you from typing further, others quietly fold your text behind a \"see more\" link once you pass an unwritten threshold. Writing well for social media means knowing which kind of limit you're up against before you start drafting, not after you paste your caption in and watch it get cut off.",
      "This guide covers the practical formatting rules for each major platform and links to the free tool that checks each one.",
    ],
    sections: [
      {
        heading: "Hard limits vs. soft cutoffs",
        paragraphs: [
          "X and TikTok enforce hard limits — commonly cited as 280 and 150 characters respectively (check in the app) — where the composer simply won't accept more text. Instagram, LinkedIn, and Facebook work differently: their full limits are generous (LinkedIn documents 3,000 characters; the figures often quoted for Instagram and Facebook aren't on an official page we could verify, so check in the app), but only a fraction of that shows before a \"more\" link appears. Writing for a hard-limit platform means editing until it fits; writing for a soft-cutoff platform means front-loading the hook into the visible preview window.",
          "Check any draft against seven platforms at once with the Character Counter.",
        ],
      },
      {
        heading: "Bios follow a stricter, separate set of limits",
        paragraphs: [
          "Profile bios are consistently shorter than post limits — Instagram's bio is commonly cited at 150 characters versus 2,200 for a caption, and TikTok's bio at just 80 (check both in the app). A bio is meant to be scanned instantly on a profile page, which is why every platform keeps it tight.",
          "The Bio Character Counter checks a single draft against Instagram, TikTok, X, YouTube, and LinkedIn bio limits simultaneously.",
        ],
      },
      {
        heading: "Hashtags and captions have their own formatting conventions",
        paragraphs: [
          "Multi-word hashtags need CamelCase formatting (#SmallBusinessTips, not #smallbusinesstips) for screen readers to announce each word correctly — the Hashtag Formatter handles this automatically. On Instagram specifically, creators commonly separate the caption from the hashtag block with a stack of single dots so the hashtags fall below the \"more\" fold; the Instagram Caption Formatter builds this structure for you.",
          "TikTok's commonly cited 150-character caption limit (check in the app) is tight enough that it's worth checking separately from a general character counter — the TikTok Caption Counter tracks it in real time as you type.",
        ],
      },
      {
        heading: "Long-form text needs restructuring, not just trimming",
        paragraphs: [
          "LinkedIn posts fold behind \"see more\" after roughly 210 characters on mobile (approximate, varies by device; not documented by LinkedIn) — the LinkedIn Post Formatter shows roughly where that falls in your draft. For genuinely long-form ideas meant for X, the Twitter/X Thread Splitter breaks text into numbered, 280-character posts automatically, without ever cutting a post in the middle of a word.",
        ],
      },
      {
        heading: "Pinterest is a different game entirely",
        paragraphs: [
          "Pinterest pin titles allow 100 characters and descriptions allow 800, per Pinterest's Review Pin specs — and unlike most social platforms, Pinterest's search leans heavily on the actual text in your description, so using more of that space with relevant keywords tends to help discovery rather than just being extra typing. The Pinterest Pin Description Checker confirms both fields fit before you publish.",
        ],
      },
    ],
    faq: [
      {
        question: "Should I write one caption and reuse it everywhere?",
        answer:
          "You can, but it's worth checking it against the tightest limit in your posting list first — usually TikTok's 150 characters or X's 280, both commonly cited figures to check in the app — since it's easier to expand a short caption for a generous platform than to compress a long one under a tight deadline.",
      },
      {
        question: "Do these limits change often?",
        answer:
          "Occasionally — platforms have expanded character limits for some account tiers in the past. These tools reflect standard limits at the time of writing; report anything that looks outdated through the contact page.",
      },
    ],
  },
  {
    slug: "seo-tools-guide",
    title: "The Ultimate Guide to SEO & Web Tools for Creators",
    description:
      "The small technical details — slugs, meta tags, structured data, and readability — that affect whether content gets found.",
    categorySlug: "seo-web-tools",
    publishedAt: "2026-08-02",
    intro: [
      "Search engine optimization has a reputation for being either mysterious or overhyped, but a meaningful slice of it is just mechanical hygiene: clean URLs, accurate meta tags, readable copy, and structured data that helps search engines understand a page. None of it guarantees rankings, but skipping it removes easy, avoidable friction between your content and the people searching for it.",
      "This guide covers the technical fundamentals and the free tools that handle each one.",
    ],
    sections: [
      {
        heading: "URLs and file names: small details that add up",
        paragraphs: [
          "Google recommends \"using hyphens (-) instead of underscores (_) to separate words in your URLs\", which is why hyphenated, lowercase slugs are the convention. The URL Slug Generator converts any title into that format automatically, turning underscores into hyphens. The same logic applies to image and video file names — a descriptive, hyphenated name gives search engines more context than a default camera export name, which the File Name Optimizer handles while preserving the original file extension.",
        ],
      },
      {
        heading: "Meta descriptions and Open Graph tags control how links look when shared",
        paragraphs: [
          "A meta description doesn't directly affect rankings, but it's often the deciding factor in whether someone clicks your result over a competitor's — and Google has no fixed length limit, but truncates the snippet as needed, typically to fit the device width; around 155 characters is a common rule of thumb for staying fully visible. The Meta Description Checker shows a live Google search preview as you write.",
          "Open Graph tags control how a link looks when shared on social platforms, in Slack, or in messaging apps — without them, shares often show a blank or generic preview. Build them with the Open Graph Tag Generator, then verify an already-published page's tags with the Open Graph Preview tool.",
        ],
      },
      {
        heading: "Structured data helps search engines understand your content",
        paragraphs: [
          "FAQ schema (a specific JSON-LD format) marks up a section of your page as questions and answers using schema.org's FAQPage type. Google stopped showing FAQ rich results in Search in May 2026, so it no longer adds expandable questions to Google listings, but it is still valid structured data that other consumers may read. The FAQ Schema Generator builds valid FAQPage JSON-LD from a list of questions and answers you provide.",
        ],
      },
      {
        heading: "Content quality: keyword usage and readability",
        paragraphs: [
          "Keyword density — how often a target phrase appears relative to total word count — is a much smaller ranking signal today than it once was, but checking it is still useful as a sanity check against accidental keyword stuffing; the Keyword Density Checker shows that percentage directly. Readability matters more for keeping readers on the page: the Readability Checker scores text using the Flesch Reading Ease formula, which weighs sentence length and word complexity to estimate how easy a passage is to read.",
          "For sites that need it, the Robots.txt Generator builds a valid robots.txt file with allow and disallow rules plus a sitemap reference, ready to place at your domain root.",
        ],
      },
    ],
    faq: [
      {
        question: "Do I need all of these to rank well?",
        answer:
          "No single one guarantees rankings — they remove avoidable friction and technical mistakes, which matters most when combined with genuinely useful content. Treat this as hygiene, not a magic formula.",
      },
      {
        question: "Where should I start if I'm only going to do one thing?",
        answer:
          "A clean, descriptive meta description is usually the highest-leverage single change, since it directly affects whether someone clicks your result in search — everything else compounds from there.",
      },
    ],
  },
  {
    slug: "text-tools-guide",
    title: "The Ultimate Guide to Text Tools for Writers and Creators",
    description:
      "Word counts, reading time, case conversion, and cleanup utilities that handle the small text-editing tasks that eat up time.",
    categorySlug: "text-tools",
    publishedAt: "2026-08-02",
    intro: [
      "Most writing workflows involve a handful of small, repetitive text tasks that don't need a full word processor: counting words against a brief, converting case, cleaning up a pasted list, or comparing two drafts to see what changed. These tools are built to do exactly one of those jobs each, quickly, without opening a heavier app.",
    ],
    sections: [
      {
        heading: "Counting: words, characters, and lines",
        paragraphs: [
          "The Word Counter covers the basics — words, characters, sentences, paragraphs, and an estimated reading time — for matching a brief's word-count target. The Reading Time Calculator does the same reading-time math with adjustable speed presets, useful for estimating a script's spoken length. The Line Counter is a narrower tool for lists and code-like text, reporting total, blank, and non-empty lines separately.",
        ],
      },
      {
        heading: "Cleanup: duplicates, line breaks, and find-and-replace",
        paragraphs: [
          "Pasted lists often carry duplicate entries — the Duplicate Line Remover strips them while preserving the original order. Text copied from a PDF often breaks every line unnecessarily; the Remove Line Breaks tool merges it back into a clean paragraph, or preserves intentional paragraph gaps depending on which mode you choose. For batch edits across a longer document, the Find and Replace Tool handles case-sensitive and whole-word matching in one pass.",
        ],
      },
      {
        heading: "Comparing and analyzing text",
        paragraphs: [
          "The Text Diff Checker compares two versions of a text line by line and highlights exactly what was added, removed, or unchanged — useful for reviewing edits without re-reading the whole passage. The Word Frequency Counter surfaces which words repeat most often in a piece of writing, with common stopwords optionally excluded, which is handy for spotting overused words or checking topical focus at a glance.",
        ],
      },
      {
        heading: "Formatting utilities",
        paragraphs: [
          "The Text Case Converter switches between UPPERCASE, lowercase, Title Case, Sentence case, and camelCase without retyping anything. The Emoji Counter breaks down emoji usage in a piece of text, including which specific emoji repeat. For placeholder content during design work, the Lorem Ipsum Generator produces adjustable-length filler text, and the Acronym Generator turns any phrase into its acronym from the first letter of each word.",
        ],
      },
    ],
    faq: [
      {
        question: "Is my text ever stored or sent to a server?",
        answer:
          "No — every text tool on this page runs entirely in your browser using JavaScript. Nothing you type is transmitted anywhere.",
      },
      {
        question: "Which tool should I use to prep text for a word-count-limited brief?",
        answer:
          "Start with the Word Counter to check your total against the target, then use the Reading Time Calculator if the brief also specifies a spoken or reading duration rather than just a word count.",
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
