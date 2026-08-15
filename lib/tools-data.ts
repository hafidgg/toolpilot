export interface ToolMeta {
  slug: string;
  title: string;
  shortDescription: string;
}

export interface CategoryMeta {
  slug: string;
  label: string;
  description: string;
  tools: ToolMeta[];
}

export const categories: CategoryMeta[] = [
  {
    slug: "text-tools",
    label: "Text Tools",
    description:
      "Count, convert, and clean up text before it goes anywhere — captions, scripts, comments, or copy.",
    tools: [
      {
        slug: "character-counter",
        title: "Character Counter",
        shortDescription:
          "Check your draft against X, Instagram, TikTok, LinkedIn, and more — all at once.",
      },
      {
        slug: "word-counter",
        title: "Word Counter",
        shortDescription:
          "Instant word, character, and sentence counts, plus estimated reading time.",
      },
      {
        slug: "emoji-counter",
        title: "Emoji Counter",
        shortDescription:
          "Paste any text to count emojis, see a breakdown, and check character usage.",
      },
      {
        slug: "reading-time-calculator",
        title: "Reading Time Calculator",
        shortDescription:
          "Estimate how long an article or script takes to read aloud or silently.",
      },
      {
        slug: "line-counter",
        title: "Line Counter",
        shortDescription: "Count lines, blank lines, and non-empty lines in any block of text.",
      },
      {
        slug: "text-case-converter",
        title: "Text Case Converter",
        shortDescription:
          "Switch between UPPERCASE, lowercase, Title Case, Sentence case, and camelCase instantly.",
      },
      {
        slug: "text-diff-checker",
        title: "Text Diff Checker",
        shortDescription:
          "Compare two blocks of text and see exactly what was added, removed, or unchanged.",
      },
      {
        slug: "duplicate-line-remover",
        title: "Duplicate Line Remover",
        shortDescription: "Clean up a list by removing repeated lines while keeping the original order.",
      },
      {
        slug: "find-and-replace",
        title: "Find and Replace Tool",
        shortDescription:
          "Replace every instance of a word or phrase in a block of text, with case and whole-word options.",
      },
      {
        slug: "word-frequency-counter",
        title: "Word Frequency Counter",
        shortDescription:
          "See which words appear most often in your text, with common stopwords optionally excluded.",
      },
      {
        slug: "remove-line-breaks",
        title: "Remove Line Breaks",
        shortDescription: "Merge multi-line text into a single block, or clean up paragraph spacing.",
      },
      {
        slug: "lorem-ipsum-generator",
        title: "Lorem Ipsum Generator",
        shortDescription: "Generate placeholder text for mockups and layout testing.",
      },
      {
        slug: "acronym-generator",
        title: "Acronym Generator",
        shortDescription: "Turn any phrase into its acronym from the first letter of each word.",
      },
    ],
  },
  {
    slug: "youtube-tools",
    label: "YouTube Tools",
    description:
      "Check titles, descriptions, tags, and thumbnails against what YouTube actually displays.",
    tools: [
      {
        slug: "youtube-title-checker",
        title: "YouTube Title Checker",
        shortDescription:
          "See a live search-result preview and get warned before your title gets cut off.",
      },
      {
        slug: "youtube-description-checker",
        title: "YouTube Description Checker",
        shortDescription:
          "Check your description against the ~150-character preview cutoff and 5,000-character limit.",
      },
      {
        slug: "youtube-tag-generator",
        title: "YouTube Tag Generator",
        shortDescription:
          "Turn a title or keyword list into a clean, comma-separated tag list under the 500-character limit.",
      },
      {
        slug: "thumbnail-size-checker",
        title: "Thumbnail Size Checker",
        shortDescription:
          "Upload an image to check its dimensions and aspect ratio against YouTube's 1280×720 spec.",
      },
      {
        slug: "youtube-thumbnail-downloader",
        title: "YouTube Thumbnail Downloader",
        shortDescription: "Get direct links to every resolution of a video's thumbnail image.",
      },
      {
        slug: "youtube-video-id-extractor",
        title: "YouTube Video ID Extractor",
        shortDescription: "Pull the 11-character video ID out of any YouTube URL format.",
      },
      {
        slug: "youtube-timestamp-generator",
        title: "YouTube Timestamp Link Generator",
        shortDescription: "Turn a video URL and a timestamp into a direct link that jumps to that moment.",
      },
      {
        slug: "youtube-channel-id-finder",
        title: "YouTube Channel ID Finder",
        shortDescription: "Extract the handle, channel ID, or custom URL slug from any channel link.",
      },
    ],
  },
  {
    slug: "social-media-tools",
    label: "Social Media Tools",
    description:
      "Format captions and hashtags the way each platform actually expects them.",
    tools: [
      {
        slug: "hashtag-formatter",
        title: "Hashtag Formatter",
        shortDescription:
          "Turn keywords into clean, correctly cased hashtags ready to paste.",
      },
      {
        slug: "tiktok-caption-counter",
        title: "TikTok Caption Counter",
        shortDescription: "Check your caption against TikTok's 150-character limit as you type.",
      },
      {
        slug: "instagram-caption-formatter",
        title: "Instagram Caption Formatter",
        shortDescription:
          "Add clean line breaks and a hashtag divider so your caption renders the way you wrote it.",
      },
      {
        slug: "linkedin-post-formatter",
        title: "LinkedIn Post Formatter",
        shortDescription:
          "Preview how your line breaks and spacing will actually render in a LinkedIn post.",
      },
      {
        slug: "twitter-thread-splitter",
        title: "Twitter/X Thread Splitter",
        shortDescription: "Split long-form text into numbered, 280-character thread posts automatically.",
      },
      {
        slug: "bio-character-counter",
        title: "Bio Character Counter",
        shortDescription: "Check your bio against Instagram, TikTok, X, YouTube, and LinkedIn limits at once.",
      },
      {
        slug: "pinterest-pin-checker",
        title: "Pinterest Pin Description Checker",
        shortDescription: "Check your pin title and description against Pinterest's character limits.",
      },
    ],
  },
  {
    slug: "seo-web-tools",
    label: "SEO & Web Tools",
    description:
      "Small utilities for the technical side of publishing — slugs, meta tags, and tracking links.",
    tools: [
      {
        slug: "url-slug-generator",
        title: "URL Slug Generator",
        shortDescription: "Convert any title into a clean, lowercase, hyphenated URL slug.",
      },
      {
        slug: "meta-description-checker",
        title: "Meta Description Checker",
        shortDescription:
          "Check your meta description length against the ~155-character search snippet cutoff.",
      },
      {
        slug: "keyword-density-checker",
        title: "Keyword Density Checker",
        shortDescription:
          "See how often a keyword or phrase appears in your text, as a percentage of total words.",
      },
      {
        slug: "og-preview",
        title: "Open Graph Preview",
        shortDescription:
          "Paste a URL to preview how it'll look when shared on social media.",
      },
      {
        slug: "file-name-optimizer",
        title: "File Name Optimizer",
        shortDescription:
          "Clean up image and video file names into SEO-friendly, hyphenated formats.",
      },
      {
        slug: "utm-link-builder",
        title: "UTM Link Builder",
        shortDescription: "Build campaign-tagged links for accurate traffic tracking in Analytics.",
      },
      {
        slug: "robots-txt-generator",
        title: "Robots.txt Generator",
        shortDescription: "Build a valid robots.txt file with allow/disallow rules and a sitemap reference.",
      },
      {
        slug: "og-tag-generator",
        title: "Open Graph Tag Generator",
        shortDescription: "Generate the og: and twitter: meta tags to paste into your own page's head.",
      },
      {
        slug: "faq-schema-generator",
        title: "FAQ Schema Generator",
        shortDescription: "Turn a list of questions and answers into valid FAQPage JSON-LD structured data.",
      },
      {
        slug: "readability-checker",
        title: "Readability Checker",
        shortDescription: "Check your text's Flesch Reading Ease score and estimated grade level.",
      },
    ],
  },
];

// Editorial pick for now — swap to real analytics-driven ranking once the
// site has traffic data to base "popular" on.
export const popularToolSlugs = [
  "character-counter",
  "youtube-title-checker",
  "youtube-thumbnail-downloader",
  "hashtag-formatter",
  "word-counter",
  "readability-checker",
];

export function getAllTools(): (ToolMeta & { categorySlug: string; categoryLabel: string })[] {
  return categories.flatMap((cat) =>
    cat.tools.map((t) => ({ ...t, categorySlug: cat.slug, categoryLabel: cat.label }))
  );
}

export function getCategoryBySlug(slug: string): CategoryMeta | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getPopularTools(): (ToolMeta & { categorySlug: string; categoryLabel: string })[] {
  const all = getAllTools();
  return popularToolSlugs
    .map((slug) => all.find((t) => t.slug === slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));
}
