export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: "Text Tools" | "YouTube Tools" | "Social Media Tools" | "SEO & Web Tools";
  publishedAt: string; // ISO date
  readTime: string;
  relatedTool: { href: string; label: string };
  content: ContentBlock[];
}

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const h = (text: string): ContentBlock => ({ type: "heading", text });

export const blogPosts: BlogPost[] = [
  {
    slug: "how-many-emojis-is-too-many",
    title: "How Many Emojis Is Too Many in a Caption?",
    description:
      "What the data suggests about emoji use in social captions, and where engagement tends to drop off.",
    category: "Text Tools",
    publishedAt: "2026-06-15",
    readTime: "4 min read",
    relatedTool: {
      href: "/tools/emoji-counter",
      label: "Emoji Counter",
    },
    content: [
      p(
        "Emojis improve scroll-stop rate and make captions easier to skim — up to a point. Past that point, they start working against you, and the threshold is lower than most creators expect."
      ),
      h("Where the drop-off tends to happen"),
      p(
        "A handful of well-placed emoji — typically one to five per caption — tend to correlate with slightly higher engagement across most platforms, largely because they break up text and add visual anchors that help the eye parse a caption quickly. Past roughly five to seven emoji in a single caption, the pattern tends to reverse: the text starts reading as cluttered or spammy, and engagement metrics plateau or dip."
      ),
      h("It depends heavily on platform norms"),
      p(
        "What reads as appropriate varies a lot by platform and niche. A beauty or lifestyle Instagram caption with six or seven emoji can read as on-brand and energetic; the same density in a LinkedIn post reads as unprofessional. There's no single universal number — the more useful habit is checking your emoji count against the tone of the account and the platform before publishing, not against a fixed rule."
      ),
      h("The character-count trap"),
      p(
        "Emojis count against character limits the same way letters do, and some are stored as multiple Unicode code points, meaning they can cost more than one character each. A caption that looks short in the composer can quietly consume a large share of your available characters before you've written a single real word — worth checking before you hit a platform's cutoff mid-sentence."
      ),
      p(
        "The practical approach: draft your caption text first, add emoji deliberately at the points where they add emphasis or break up a wall of text, then check the total count. If you're past seven or eight, that's usually a sign to trim rather than a hard rule you're breaking."
      ),
    ],
  },
  {
    slug: "youtube-title-length-guide",
    title: "The Real YouTube Title Length Limit (It's Not 100 Characters)",
    description:
      "YouTube allows 100-character titles, but search results and mobile screens show far less. Here's the number that actually matters.",
    category: "YouTube Tools",
    publishedAt: "2026-06-22",
    readTime: "4 min read",
    relatedTool: {
      href: "/tools/youtube-title-checker",
      label: "YouTube Title Checker",
    },
    content: [
      p(
        "YouTube's title field accepts up to 100 characters, and plenty of creators write titles that use most of that space. The problem is that almost nowhere on the platform actually displays 100 characters of a title before cutting it off."
      ),
      h("Where the truncation actually happens"),
      p(
        "Desktop search results and suggested-video panels generally show somewhere around 60 to 70 characters before adding an ellipsis. Mobile screens, where most watch time happens, often show even less — sometimes closer to 40 characters in a suggested-video thumbnail row."
      ),
      h("What this means for how you write titles"),
      p(
        "Front-load the part of the title that explains what the video actually is. If your title is a question, a number, and a promise (\"How I Edited This in 10 Minutes\"), make sure the core of that idea lands within the first 60 characters — anything after that is a bonus some viewers will see and others won't."
      ),
      p(
        "A useful habit: write your title, then read only the first 60 characters back to yourself. If that fragment alone still makes sense and sounds compelling, the full title will perform fine regardless of where it gets cut."
      ),
    ],
  },
  {
    slug: "how-to-write-hashtags-that-work",
    title: "How to Write Hashtags That Actually Get Found",
    description:
      "What Instagram and YouTube document about hashtags (limits, allowed characters, where they show), plus formatting choices that are judgment calls.",
    category: "Social Media Tools",
    publishedAt: "2026-06-29",
    readTime: "2 min read",
    relatedTool: {
      href: "/tools/hashtag-formatter",
      label: "Hashtag Formatter",
    },
    content: [
      p(
        "Use a few hashtags that are directly relevant, with no spaces or symbols, and stay within each platform's documented limit: up to 5 on an Instagram post; on YouTube, more than 60 and all of them are ignored. Everything beyond those documented rules, such as capitalization or picking broad versus niche tags, is a judgment call, and this post labels it that way."
      ),
      h("What Instagram documents"),
      p(
        "Instagram's [hashtag help page](https://help.instagram.com/351460621611097) says: \"You can use up to 5 tags on a post.\" \"Numbers are allowed in hashtags\", but \"spaces and special characters, such as $ or %, won't work.\" Hashtags can go \"in the caption or comments of your post\", and on a public account the post \"will be visible on the corresponding hashtag page\"; posts from private accounts won't appear there publicly. Advice that quotes a 30-hashtag limit is out of date."
      ),
      h("What YouTube documents"),
      p(
        "YouTube's [hashtag policy](https://support.google.com/youtube/answer/6390658) says hashtags have \"no spaces\", that \"if a video or playlist has more than 60 hashtags, we'll ignore each hashtag on that content\", and that \"up to three hashtags that are considered most engaging will appear by your video title.\" It also says: \"Don't add hashtags that are not directly related to the video or playlist.\""
      ),
      h("Worked example"),
      p(
        "Our [Hashtag Formatter](/tools/hashtag-formatter) turns \"small business tips, coffee shop, latte art, cafe life, barista\" into #SmallBusinessTips #CoffeeShop #LatteArt #CafeLife #Barista. That's 5 tags, exactly Instagram's documented maximum, and 59 characters including the spaces between tags. The lowercase version (#smallbusinesstips …) is the same length. Input with symbols shows the character rule in action: \"$5 deals\" becomes #5Deals and \"100% cotton\" becomes #100Cotton, because $ and % don't work in hashtags while numbers do."
      ),
      h("Judgment calls (not platform rules)"),
      p(
        "CamelCase (#SmallBusinessTips) is easier for people to read. It's also common accessibility advice, on the grounds that screen readers can separate the words, but we haven't verified that against an official source. Neither help page above mentions capitalization, so whether a platform treats #CoffeeShop and #coffeeshop as the same tag is something we couldn't verify. Choosing relevant, specific tags over the most popular ones is our opinion; YouTube's rule against unrelated hashtags is the closest official statement."
      ),
      p(
        "For caption and post length limits, see our [character limits reference](/blog/social-media-character-limits-guide) rather than numbers repeated here."
      ),
    ],
  },
  {
    slug: "meta-description-best-practices",
    title: "How to Write a Meta Description That Earns the Click",
    description:
      "Why there's no fixed length limit, what Google actually displays, and how to write a description that competes for attention in search results.",
    category: "SEO & Web Tools",
    publishedAt: "2026-07-06",
    readTime: "3 min read",
    relatedTool: {
      href: "/tools/meta-description-checker",
      label: "Meta Description Checker",
    },
    content: [
      p(
        "Write a short, accurate summary of that specific page, and put the most important point first. Google sets no length limit, but it truncates long snippets to fit the screen and may show different text from the page instead of your description."
      ),
      h("What Google's documentation actually says"),
      p(
        "Google's [snippet documentation](https://developers.google.com/search/docs/appearance/snippet) states that \"there's no limit on how long a meta description can be\", but that \"the snippet is truncated in Google Search results as needed, typically to fit the device width.\" There is no official character count. The ~155 characters our checker uses is a rule of thumb for keeping the main point visible, not a Google cutoff."
      ),
      p(
        "The same page says \"snippets are primarily created from the page content itself\", and that Google \"sometimes uses the meta description HTML element if it might give users a more accurate description of the page.\" A description raises the odds that your wording is shown, but there is no guarantee."
      ),
      h("What a good description contains"),
      p(
        "Google's guidance boils down to three points. Describe the page itself: a description \"generally informs and interests users with a short, relevant summary.\" Make it unique, because \"identical or similar descriptions on every page of a site aren't helpful.\" And don't write keyword lists, since \"long strings of keywords don't give users a clear idea of the page's content.\" The documentation also notes a description doesn't have to be a full sentence; page-specific facts like a price, an author or a duration work too."
      ),
      h("Worked example"),
      p(
        "Here is what our [Meta Description Checker](/tools/meta-description-checker) returns for four drafts. Google's own \"better\" example, \"Learn how to cook eggs with this complete guide in 1 hour or less.\", is 66 characters, so the checker flags it as short (under 120). That's not wrong: it's a reminder you have room, not a penalty. Google's keyword-list counter-example (\"Sewing supplies, yarn, colored pencils…\") is 82 characters. It's also short, but the real problem is the keyword list, and no length check will catch that."
      ),
      p(
        "A draft for a checker tool page, \"Free online meta description checker: count characters, see a live Google-style preview, and spot drafts likely to be cut off on narrow screens.\", is 144 characters, within the rule of thumb. A longer version with \"as you type\", \"search\" and \"mobile\" added reaches 179 characters and is flagged as likely to be truncated. The extra words added nothing a reader needs, so the 144-character version is the better one anyway."
      ),
      h("Common mistakes"),
      p(
        "Reusing one boilerplate description across many pages. Stuffing in keywords. Treating 155 characters as a hard limit and cutting a useful detail to hit it. Expecting the description to change rankings. Google's snippet documentation presents it as a summary shown in results and doesn't describe it as a ranking factor."
      ),
    ],
  },
  {
    slug: "how-to-improve-readability-score",
    title: "How to Improve Your Content's Readability Score",
    description:
      "What the Flesch Reading Ease score actually measures, why it matters for web content, and five concrete edits that raise it.",
    category: "SEO & Web Tools",
    publishedAt: "2026-07-13",
    readTime: "6 min read",
    relatedTool: {
      href: "/tools/readability-checker",
      label: "Readability Checker",
    },
    content: [
      p(
        "Readability scores get dismissed by some writers as a vanity metric, but the underlying signal is real: content that's easier to read gets skimmed more successfully, retains more of its audience past the first paragraph, and translates better across a wider range of reading contexts — including the growing share of traffic that reads on a phone screen in short bursts."
      ),
      h("What the score is actually measuring"),
      p(
        "The Flesch Reading Ease formula weighs two variables: average sentence length and average syllables per word. It doesn't know anything about your topic, argument quality, or accuracy — a technically brilliant paragraph can score poorly just because its sentences run long and its vocabulary is dense. That's a feature, not a bug, for the purpose it serves: it flags mechanical complexity, which is a different problem from conceptual complexity, and one you can usually fix without dumbing down the idea itself."
      ),
      h("Five edits that reliably raise the score"),
      p(
        "Split compound sentences. A sentence joined by \"and\" or \"which\" in the middle can almost always become two shorter sentences without losing meaning — and shorter sentences are the single biggest lever in the formula."
      ),
      p(
        "Swap multi-syllable words for common alternatives where they mean the same thing: \"utilize\" becomes \"use,\" \"facilitate\" becomes \"help,\" \"subsequently\" becomes \"then.\" This isn't about sounding simple-minded — it's about removing friction that doesn't add precision."
      ),
      p(
        "Cut throat-clearing openers. Phrases like \"It is important to note that\" or \"In order to\" add syllables and sentence length without adding information. Deleting them almost always improves both readability and pace."
      ),
      p(
        "Break up list-like sentences into actual bullet points. A sentence trying to hold four examples separated by commas reads as one long, syllable-heavy unit to the formula, even though a bulleted list conveys the same information more clearly to a human reader."
      ),
      p(
        "Read the piece aloud. Sentences that make you run out of breath before the period are usually the ones dragging the score down — this catches issues the formula measures indirectly but a human ear catches immediately."
      ),
      h("Where a lower score is actually fine"),
      p(
        "Technical documentation, legal content, and academic or scientific writing for a specialist audience will naturally score lower, and forcing them into an easy-reading register can strip out necessary precision. Readability targets make the most sense for general-audience blog content, marketing copy, and anything meant to be skimmed rather than studied."
      ),
    ],
  },
  {
    slug: "social-media-character-limits-guide",
    title: "Social Media Character Limits (Verified)",
    description:
      "Post, title and hashtag limits checked against official help pages, with the verification date, and clear flags on the numbers we couldn't verify.",
    category: "Social Media Tools",
    publishedAt: "2026-07-20",
    readTime: "3 min read",
    relatedTool: {
      href: "/tools/character-counter",
      label: "Character Counter",
    },
    content: [
      p(
        "We could verify these limits against official help pages: LinkedIn posts allow up to 3,000 characters; YouTube video titles 100 and descriptions 5,000; Instagram posts at most 5 hashtags; YouTube ignores every hashtag on a video that has more than 60. For X, Instagram captions and bios, Threads, Facebook and TikTok we couldn't verify a figure from an official page, so check the current limit in the app itself."
      ),
      p("Limits last verified: 2026-11-01. Platforms change these numbers, so the date matters."),
      h("Verified limits"),
      p(
        "LinkedIn post: 3,000 characters. LinkedIn's [help page on posting](https://www.linkedin.com/help/linkedin/answer/a528176) says \"Posts can contain up to 3,000 characters\", and suggests writing an article instead for anything longer."
      ),
      p(
        "YouTube video title: 100 characters. YouTube video description: 5,000 characters. From YouTube's [help page on video details](https://support.google.com/youtube/answer/57404): \"Video titles have a character limit of 100 characters\" and \"Video descriptions have a character limit of 5,000 characters.\""
      ),
      p(
        "Instagram hashtags: up to 5 per post. Instagram's [hashtag help page](https://help.instagram.com/351460621611097) says \"You can use up to 5 tags on a post\", and that if you include more than 5, \"your comment won't post.\" Older advice quoting 30 hashtags is out of date."
      ),
      p(
        "YouTube hashtags: more than 60 cancels all of them. YouTube's [hashtag policy](https://support.google.com/youtube/answer/6390658) says \"If a video or playlist has more than 60 hashtags, we'll ignore each hashtag on that content.\""
      ),
      h("Not verified: check in the app"),
      p(
        "X, Instagram captions and bios, Threads, Facebook and TikTok. X's help center blocked our requests, and Instagram's caption and bio limits weren't stated on any help page we could load. For Threads, Facebook and TikTok we found no official page stating a current figure. The [Character Counter](/tools/character-counter) still shows commonly cited limits for these platforms, but treat them as approximate until you've confirmed them in the composer."
      ),
      h("Worked example: what counts as a character"),
      p(
        "Our Character Counter counts Unicode code points. \"New post is live 🚀\" counts as 18 characters, while JavaScript's string length reports 19, because the rocket emoji takes two UTF-16 units. Platforms don't all count emoji, accented letters or links the same way, and none of the pages above documents its counting method. If you're within a few characters of a limit, the platform's own composer is the final word."
      ),
      h("How to use this"),
      p(
        "Draft for the tightest limit you'll publish to, then expand for the roomier platforms. Expanding a short message is easier than cutting a long one. Other posts on this site link here rather than repeating the numbers, so this page is where the figures get updated."
      ),
    ],
  },
  {
    slug: "find-youtube-video-id-and-thumbnail",
    title: "How to Find Any YouTube Video's ID and Thumbnail URL",
    description:
      "Every YouTube URL format contains the same 11-character video ID — here's how to extract it and use it to pull thumbnail images directly.",
    category: "YouTube Tools",
    publishedAt: "2026-07-27",
    readTime: "4 min read",
    relatedTool: {
      href: "/tools/youtube-thumbnail-downloader",
      label: "YouTube Thumbnail Downloader",
    },
    content: [
      p(
        "Every YouTube video has a unique 11-character ID, regardless of which URL format led you there — a standard watch link, a youtu.be short link, a Shorts link, or an embed URL all encode the same underlying ID differently."
      ),
      h("Where the ID hides in each URL format"),
      p(
        "In a standard watch URL like youtube.com/watch?v=dQw4w9WgXcQ, the ID is the value after v=. In a short youtu.be link, it's the path segment right after the domain. In a Shorts link, it follows /shorts/, and in an embed URL, it follows /embed/. All four point to the exact same video and the exact same ID."
      ),
      h("What the ID is actually used for"),
      p(
        "Beyond just identifying the video, the ID is the key input for a handful of practical tasks: embedding the video on your own site, querying the YouTube Data API for video details, and — usefully — constructing a direct link to the video's thumbnail image without needing any API access at all."
      ),
      h("Thumbnails follow a predictable public URL pattern"),
      p(
        "YouTube serves thumbnail images from a public, unauthenticated URL built entirely from the video ID: img.youtube.com/vi/{video ID}/maxresdefault.jpg for the highest resolution, with hqdefault, mqdefault, and default as smaller fallback sizes. Because this pattern is public, no login or API key is required to fetch a thumbnail once you have the ID."
      ),
      p(
        "One practical catch: not every video has a maxresdefault image generated, particularly older or lower-resolution uploads. If the top-resolution link doesn't load, stepping down to sddefault or hqdefault almost always works."
      ),
      h("A faster path than manual extraction"),
      p(
        "Manually spotting the ID inside a long URL with tracking parameters attached is easy to get wrong. Pasting the full URL into a dedicated video ID extractor handles all four formats consistently, and a thumbnail downloader takes it one step further by generating all five resolution links at once."
      ),
    ],
  },
  {
    slug: "instagram-caption-dot-trick",
    title: "The Instagram Caption Dot Trick, Explained",
    description:
      "Why creators separate their caption from hashtags with a stack of single dots, and whether it's still worth doing.",
    category: "Social Media Tools",
    publishedAt: "2026-08-03",
    readTime: "4 min read",
    relatedTool: {
      href: "/tools/instagram-caption-formatter",
      label: "Instagram Caption Formatter",
    },
    content: [
      p(
        "Scroll through enough Instagram captions and you'll notice a pattern: a caption, then a short stack of single dots on their own lines, then a block of hashtags at the very bottom. This is the \"dot trick,\" and it's been a creator convention for years — the reasoning behind it is more practical than aesthetic."
      ),
      h("What problem it's solving"),
      p(
        "Instagram folds captions behind a \"more\" link after roughly the first two to three lines. Hashtags placed directly under a caption, with no separation, either eat into that visible preview space or create a visually cluttered wall of text right where a reader's eye lands first. The dot stack pushes the hashtag block down far enough that it sits entirely behind the fold, keeping the visible preview focused on the actual caption."
      ),
      h("Why dots specifically, and not just blank lines"),
      p(
        "Instagram's caption field collapses multiple consecutive blank lines when the post is published, which would undo the spacing. A single dot (or similar minimal character) on its own line prevents that collapse, since each line technically contains content — the visual effect is the same as a blank line, but it survives Instagram's formatting."
      ),
      h("Is it still necessary?"),
      p(
        "It's a workaround for a platform quirk, not a requirement — plenty of high-performing accounts skip it entirely and place hashtags directly under the caption or in the first comment instead. The dot trick matters most when you want the caption itself to be the only thing visible before someone taps \"more,\" which is a stylistic choice rather than a strict best practice."
      ),
      p(
        "The most common alternative is posting hashtags as the first comment rather than in the caption at all, which keeps the caption completely clean without needing any spacing workaround, though some evidence suggests hashtags in the caption itself may carry slightly more search weight than the same tags in a comment."
      ),
    ],
  },
  {
    slug: "word-count-without-padding",
    title: "How to Hit an Exact Word Count Without Padding",
    description:
      "Practical ways to add real length to a piece of writing without resorting to filler phrases that pad the count but weaken the writing.",
    category: "Text Tools",
    publishedAt: "2026-08-03",
    readTime: "5 min read",
    relatedTool: { href: "/tools/word-counter", label: "Word Counter" },
    content: [
      p(
        "A word-count target from a client, professor, or publication brief is meant as a proxy for depth — the assumption is that covering a topic properly takes roughly that many words. The problem shows up when a draft comes in short: the fastest fix, adding filler phrases and redundant sentences, is also the one that makes the writing worse, not just longer."
      ),
      h("What padding actually looks like"),
      p(
        "Padding tends to fall into a few recognizable patterns: restating a point in slightly different words a paragraph after making it, adding qualifying phrases like \"it is worth noting that\" or \"in today's world\" that carry no information, and expanding a single example into three near-identical ones. All three technically raise the word count while making the piece slower and less useful to read — a reader who's paying attention notices the repetition even if a word counter doesn't."
      ),
      h("Where real length actually comes from"),
      p(
        "Short drafts are usually short because they're missing a layer, not because the sentences are too terse. Adding a concrete example, a counterargument you haven't addressed, a specific number or data point in place of a vague claim, or a brief explanation of why something matters — not just what it is — all add genuine length because they add genuine content."
      ),
      p(
        "A useful test: read back any paragraph you're considering expanding and ask whether a reader would learn something new from the addition, or whether they'd just be reading the same idea a second time in different words. If it's the latter, that paragraph isn't the place to add length."
      ),
      h("When you're structurally short, not just light on detail"),
      p(
        "Sometimes a draft is short because it's missing an entire section a thorough treatment of the topic would include — a setup, a limitations discussion, a practical example section. In that case, the fix isn't padding individual sentences; it's identifying the missing section and writing it properly, which tends to close a length gap faster and more naturally than sentence-level expansion ever does."
      ),
    ],
  },
  {
    slug: "title-case-vs-sentence-case",
    title: "Title Case vs. Sentence Case: When Each One Actually Matters",
    description:
      "The difference isn't just style — title case and sentence case signal different things about formality and where text will appear.",
    category: "Text Tools",
    publishedAt: "2026-08-03",
    readTime: "4 min read",
    relatedTool: { href: "/tools/text-case-converter", label: "Text Case Converter" },
    content: [
      p(
        "Title Case capitalizes the first letter of most words in a phrase; Sentence case capitalizes only the first word (and proper nouns). Both are correct in different contexts, and mixing them inconsistently within the same piece of content is one of the more common small polish issues in published writing."
      ),
      h("Where Title Case is the convention"),
      p(
        "Headlines, book and movie titles, and navigation labels traditionally use Title Case — it's a visual signal that a phrase is a title or label rather than a full sentence. Style guides differ on whether to capitalize short connecting words like \"a,\" \"the,\" or \"of,\" which is why two publications can format the same headline slightly differently and both be internally consistent."
      ),
      h("Where Sentence case has become the norm"),
      p(
        "Interface design and a growing share of web content has shifted toward Sentence case for headings and buttons — \"Save your changes\" instead of \"Save Your Changes.\" It reads as less formal and less shouty, which is why many product interfaces and blogs default to it even in places that would have used Title Case a decade ago."
      ),
      h("The practical rule"),
      p(
        "Match the convention of the surrounding content rather than picking per-heading. A site that uses Sentence case for its navigation and buttons but Title Case for blog post headlines will read as inconsistent even if each individual choice is defensible on its own — pick one convention per content type and apply it uniformly."
      ),
    ],
  },
  {
    slug: "why-urls-and-filenames-matter-for-seo",
    title: "Why Your URLs and File Names Actually Affect SEO",
    description:
      "Clean, descriptive URLs and file names are a small technical detail with an outsized effect on how search engines parse a page.",
    category: "SEO & Web Tools",
    publishedAt: "2026-08-03",
    readTime: "5 min read",
    relatedTool: { href: "/tools/url-slug-generator", label: "URL Slug Generator" },
    content: [
      p(
        "It's easy to treat a URL as plumbing — something that just needs to work, not something worth thinking about. But both URLs and file names are text that search engines read as a signal about what a page or image contains, on top of their obvious job of being a working link."
      ),
      h("What search engines read into a URL"),
      p(
        "A URL like example.com/blog/post-847 tells a search engine nothing about the content behind it. A URL like example.com/blog/position-size-calculator-guide gives it a real signal before it even crawls the page, and it gives a human scanning search results or a shared link the same context. Google has confirmed hyphens are treated as word separators in URLs, while underscores generally are not — which is the entire reason hyphenated slugs became the standard convention."
      ),
      h("File names carry the same signal for images"),
      p(
        "A photo saved as IMG_4821.jpg tells a search engine nothing. The same photo saved as orange-tabby-cat-sleeping.jpg gives context that, combined with descriptive alt text, helps that image surface in image search — a channel that's easy to ignore but drives real traffic for visually-oriented content."
      ),
      h("Where this matters most"),
      p(
        "The effect is small on a per-page or per-image basis, but it compounds across a site with many pages and many images, and it costs nothing to do correctly from the start. Retrofitting URLs after a site has been live for a while creates its own problem — changing a URL breaks existing links and requires a redirect to avoid losing the SEO value already built up, so it's far cheaper to get the naming right before publishing than to fix it after."
      ),
    ],
  },
  {
    slug: "faq-schema-still-worth-it",
    title: "Is FAQ Schema Still Worth Adding in 2026?",
    description:
      "Google stopped showing FAQ rich results on May 7, 2026. What that means for FAQPage markup, and the few cases where adding it still makes sense.",
    category: "SEO & Web Tools",
    publishedAt: "2026-08-03",
    readTime: "2 min read",
    relatedTool: { href: "/tools/faq-schema-generator", label: "FAQ Schema Generator" },
    content: [
      p(
        "Not for Google rich results: Google no longer shows the FAQ rich result in Search, so FAQPage markup won't get you expandable questions under your listing. It can still be worth keeping if it's already in place and matches a real FAQ on the page, but don't add it expecting a visible change in Google."
      ),
      h("What changed, with dates"),
      p(
        "According to Google's [Search Central changelog](https://developers.google.com/search/updates), the feature had already been restricted in September 2023, when it was \"only shown for well-known, authoritative government and health websites.\" On May 8, 2026, Google announced the deprecation: \"This feature will no longer appear in Google Search starting May 7, 2026.\" On June 15, 2026, it removed the documentation, noting that \"the FAQ rich result feature is no longer shown in Google Search results.\""
      ),
      h("What FAQPage markup still is"),
      p(
        "FAQPage remains a valid type on schema.org, defined as \"a WebPage presenting one or more 'Frequently asked questions'\" ([schema.org/FAQPage](https://schema.org/FAQPage)). What ended is one Google display feature, not the schema type."
      ),
      h("Worked example"),
      p(
        "For a single made-up question, \"Do you ship internationally?\", with the answer \"Yes, to 40 countries. Shipping times are listed at checkout.\", our [FAQ Schema Generator](/tools/faq-schema-generator) produces a JSON-LD object with \"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", and a mainEntity array holding one Question whose acceptedAnswer is an Answer containing that text. That is the whole structure. Each question and answer must also appear as visible text on the page, otherwise the markup describes content that isn't there."
      ),
      h("When it's still reasonable, and when to skip it"),
      p(
        "Our judgment, not a documented benefit: keeping existing FAQPage markup on a genuine FAQ section is cheap and harmless, and other consumers of schema.org data may read it. We found no Google documentation of a ranking benefit, and no official statement from any AI answer system that it uses FAQPage, so we don't claim either."
      ),
      p(
        "Skip it if you'd be adding it only for the Google rich result, which no longer exists, or if it means inventing an FAQ section the page doesn't need. Time spent there is better spent on the content itself."
      ),
    ],
  },
  {
    slug: "keyword-density-myth",
    title: "Keyword Density Is Mostly a Myth — Here's What Still Matters",
    description:
      "Google publishes no ideal keyword density. What its spam policies say about keyword stuffing, the density formula, and a worked example.",
    category: "SEO & Web Tools",
    publishedAt: "2026-08-03",
    readTime: "3 min read",
    relatedTool: { href: "/tools/keyword-density-checker", label: "Keyword Density Checker" },
    content: [
      p(
        "There is no ideal keyword density. Google publishes no target percentage, and its spam policies name the opposite problem: repeating words so often that the text sounds unnatural."
      ),
      h("What Google actually says"),
      p(
        "Google's [spam policies](https://developers.google.com/search/docs/essentials/spam-policies) define keyword stuffing as \"the practice of filling a web page with keywords or numbers in an attempt to manipulate rankings in Google Search results.\" One of the listed examples is \"repeating the same words or phrases so often that it sounds unnatural.\" The policy describes what to avoid. It doesn't set a percentage, and we found no Google documentation recommending one. The familiar \"1–2%\" figure is folklore, not guidance."
      ),
      h("The formula"),
      p(
        "Density = (occurrences of the phrase × words in the phrase) ÷ total words × 100. That's the formula our [Keyword Density Checker](/tools/keyword-density-checker) uses. Multiplying by the phrase's word count means a two-word phrase repeated six times counts as twelve of the total words."
      ),
      h("Worked example"),
      p(
        "A stuffed sample: \"Best coffee grinder for home: our coffee grinder guide reviews every coffee grinder. If you need a coffee grinder, this coffee grinder list has the best coffee grinder deals.\" That's 29 words, with \"coffee grinder\" appearing 6 times. Using the tool's formula, occurrences × words in the phrase ÷ total words × 100, density = 6 × 2 ÷ 29 × 100 = 41.379%. Read it aloud and it's exactly what Google's example describes."
      ),
      p(
        "A natural sample (46 words): \"A burr grinder crushes beans between two plates, so every particle comes out close to the same size. That consistency matters for espresso, where uneven grounds extract unevenly and taste sour and bitter at once. Blade grinders are cheaper but chop beans into dust and chunks.\""
      ),
      p(
        "This paragraph never contains the exact phrase \"coffee grinder\", so its density for that phrase is 0 × 2 ÷ 46 × 100 = 0%, even though it's clearly about coffee grinders. For the single word \"grinder\", the tool finds 2 matches (\"burr grinder\" and \"Blade grinders\"; it matches text inside longer words, so \"grinders\" counts), giving 2 × 1 ÷ 46 × 100 = 4.348%. Neither number says anything about quality. What makes the paragraph useful is that it explains something."
      ),
      h("What a density check is still good for"),
      p(
        "Our judgment: use a density check as a smell test for accidental repetition, for example a phrase that crept into every sentence during editing. A high number is a prompt to reread the text; a low number is not a sign the page is under-optimized."
      ),
    ],
  },
  {
    slug: "tiktok-character-limits-guide",
    title: "TikTok's Character Limits Nobody Tells You About",
    description:
      "Beyond the well-known 150-character caption limit, TikTok enforces separate, shorter limits for bios and other fields that catch creators off guard.",
    category: "Social Media Tools",
    publishedAt: "2026-08-03",
    readTime: "4 min read",
    relatedTool: { href: "/tools/tiktok-caption-counter", label: "TikTok Caption Counter" },
    content: [
      p(
        "TikTok's 150-character caption limit is well-documented, but it's not the only length constraint on the platform, and the others are easy to hit by surprise since they're rarely mentioned in the same breath as the caption limit."
      ),
      h("The bio limit is much tighter than the caption limit"),
      p(
        "A TikTok bio is capped at 80 characters — barely more than half the caption limit, and short enough that even a brief, casual self-description can run over without careful editing. Because the bio is one of the first things a potential follower reads on a profile, it's worth treating that 80-character budget as valuable, not an afterthought."
      ),
      h("Display names have their own separate limit"),
      p(
        "A TikTok display name (distinct from the @username) is limited to roughly 30 characters, which affects how much of a brand name or tagline can realistically fit before it gets cut off in the app's UI across different screen sizes."
      ),
      h("Why this matters more on TikTok than on some other platforms"),
      p(
        "TikTok's interface displays less profile text at once compared to platforms like Instagram or LinkedIn, so exceeding these shorter limits doesn't just risk truncation — it can mean the text never gets typed in successfully at all, since some fields enforce a hard character cap the same way the caption field does. Checking your bio and display name against these limits before you're mid-edit in the app saves the friction of rewriting on the fly."
      ),
    ],
  },
  {
    slug: "blog-post-to-twitter-thread",
    title: "How to Turn a Blog Post Into a Twitter/X Thread",
    description:
      "Repurposing long-form writing into a thread isn't just chopping it into 280-character pieces — here's what actually changes.",
    category: "Social Media Tools",
    publishedAt: "2026-08-03",
    readTime: "5 min read",
    relatedTool: { href: "/tools/twitter-thread-splitter", label: "Twitter/X Thread Splitter" },
    content: [
      p(
        "Turning an existing article into a thread is a common way to repurpose content, but a thread that's just the article chopped into 280-character chunks usually reads worse than either the original article or a thread written for the format from the start."
      ),
      h("The first post has to work as a standalone hook"),
      p(
        "An article's opening paragraph is often written to set context; a thread's opening post has to earn the tap to expand and read further, competing directly against every other post in someone's timeline. Rewriting the first post as a clear, specific hook — not just the article's first sentence — matters more than any other single edit in the adaptation."
      ),
      h("Each post should be a complete thought, not a mid-sentence cut"),
      p(
        "An article's sentences are written to flow into each other across paragraph breaks that don't exist in a thread — each post needs to make sense read on its own, since threads often get quote-tweeted or screenshotted one post at a time, disconnected from the rest of the sequence. This usually means restructuring around one idea per post rather than mechanically splitting by character count."
      ),
      h("Trim supporting detail that worked in long-form but drags in a thread"),
      p(
        "An article can support a claim with two or three examples in a row; a thread reader's patience for that same repetition is much shorter, since each additional post is a fresh decision to keep scrolling. Keep the strongest single example per point and cut the rest, even if the original article included all three."
      ),
      p(
        "The mechanical part — fitting text under 280 characters per post — is the easy part to automate. The rewriting judgment about what to cut, restructure, and lead with is what actually determines whether the thread performs."
      ),
    ],
  },
  {
    slug: "pinterest-seo-vs-google-seo",
    title: "Why Pinterest SEO Works Differently Than Google SEO",
    description:
      "Pinterest is a visual search engine with its own ranking logic — optimizing for it takes a different approach than typical web SEO.",
    category: "Social Media Tools",
    publishedAt: "2026-08-03",
    readTime: "5 min read",
    relatedTool: { href: "/tools/pinterest-pin-checker", label: "Pinterest Pin Description Checker" },
    content: [
      p(
        "Pinterest functions less like a social feed and more like a visual search engine — users go there actively searching for ideas, which means Pinterest's ranking logic has more in common with Google than with Instagram or TikTok's engagement-driven feeds, but the specifics differ in ways that matter for how you write pin descriptions."
      ),
      h("Text still matters heavily, unlike some visual platforms"),
      p(
        "Because Pinterest's search relies on the text attached to a pin — the title, description, and any text detected in the image itself — a pin with a thin or generic description is harder to surface than one with a specific, keyword-relevant description, even if the image itself is strong. This is different from platforms where the image or video carries almost the entire weight and captions are treated as an afterthought."
      ),
      h("Pins have a long search lifespan"),
      p(
        "Unlike a tweet or an Instagram post that's mostly seen in the hours after posting, a well-optimized pin can keep generating traffic for months or years after it's published, since Pinterest search surfaces old pins just as readily as new ones if they match a search query well. This changes the incentive: it's worth spending real effort on a pin's description and title, since the payoff compounds over a much longer window than most social content."
      ),
      h("Board context adds another ranking signal"),
      p(
        "Which board a pin is saved to, and what other pins live on that board, gives Pinterest additional context about the topic — a well-organized, topically consistent board can help pins on it rank better than the same pin saved to a mismatched or disorganized board. This is a layer of optimization that has no real equivalent on Instagram or TikTok."
      ),
    ],
  },
  {
    slug: "what-robots-txt-actually-does",
    title: "What robots.txt Actually Does (and Doesn't Do) for SEO",
    description:
      "robots.txt is one of the most misunderstood SEO files — it controls crawling, not indexing, and mixing those up causes real mistakes.",
    category: "SEO & Web Tools",
    publishedAt: "2026-08-03",
    readTime: "5 min read",
    relatedTool: { href: "/tools/robots-txt-generator", label: "Robots.txt Generator" },
    content: [
      p(
        "robots.txt is a plain-text file at a site's root that tells well-behaved crawlers which parts of a site they're allowed to visit. It's a simple, decades-old standard, but the single most common misunderstanding about it causes real, avoidable SEO mistakes."
      ),
      h("Disallow controls crawling, not indexing"),
      p(
        "Blocking a page in robots.txt tells crawlers not to visit that page — it does not guarantee the page stays out of search results. If other pages link to a disallowed URL, search engines can still index that URL based on the link context alone, sometimes showing it in results with no description, since the crawler was never allowed in to read the actual content. To reliably keep a page out of search results, the correct tool is a noindex meta tag on the page itself, which requires crawlers to be allowed in to read that instruction."
      ),
      h("What robots.txt is actually good for"),
      p(
        "It's the right tool for keeping crawlers away from pages that provide no SEO value and waste crawl budget — internal search result pages, admin areas, staging environments, or duplicate content generated by URL parameters. For a small site, crawl budget rarely matters in practice, but for a large site with thousands of pages, directing crawlers away from low-value URLs helps them spend more time on pages that matter."
      ),
      h("The sitemap reference is worth including"),
      p(
        "Adding a Sitemap: line to robots.txt is a low-effort way to point crawlers directly to your sitemap.xml, giving them a clear map of every page you want indexed rather than relying entirely on them discovering pages through internal links."
      ),
    ],
  },
  {
    slug: "why-link-previews-look-broken",
    title: "Why Your Link Preview Looks Broken When You Share It",
    description:
      "Missing images, wrong titles, or a blank preview when sharing a link almost always trace back to missing or incorrect Open Graph tags.",
    category: "SEO & Web Tools",
    publishedAt: "2026-08-03",
    readTime: "4 min read",
    relatedTool: { href: "/tools/og-tag-generator", label: "Open Graph Tag Generator" },
    content: [
      p(
        "Paste a link into X, LinkedIn, Slack, or iMessage and most platforms build a preview card automatically — a title, description, and image pulled from the page itself. When that preview shows a blank box, a random unrelated image, or no image at all, the cause is almost always missing or incomplete Open Graph meta tags on the page, not a bug in the platform generating the preview."
      ),
      h("How the preview actually gets built"),
      p(
        "When a link is shared, the platform's server briefly visits the URL and looks for a specific set of meta tags in the page's HTML head — og:title, og:description, and og:image chief among them. If those tags are missing, most platforms fall back to the page's regular <title> tag and meta description, and if there's no og:image, the preview often shows no image at all rather than guessing one from the page content."
      ),
      h("Why a page can look fine but still preview badly"),
      p(
        "A page can render perfectly for a human visitor while still missing Open Graph tags entirely, since these tags are invisible in the browser and only read by sharing platforms and crawlers — there's no visual symptom on the page itself to signal the problem. This is why link preview issues often go unnoticed for a long time; nothing about visiting the page directly reveals it."
      ),
      h("Caching makes fixes look like they didn't work"),
      p(
        "Most platforms cache a link's preview the first time it's shared and won't re-fetch it for a while, even after the underlying meta tags are fixed. If a preview still looks broken after adding correct tags, the fix likely worked — the platform is just showing a stale cached version, and most platforms offer a debugging tool (like Facebook's Sharing Debugger or X's Card Validator) that forces a re-fetch."
      ),
    ],
  },
  {
    slug: "how-long-should-youtube-description-be",
    title: "How Long Should a YouTube Description Actually Be?",
    description:
      "The 5,000-character limit rarely matters — what matters is the roughly 150 characters most viewers ever see.",
    category: "YouTube Tools",
    publishedAt: "2026-08-10",
    readTime: "4 min read",
    relatedTool: {
      href: "/tools/youtube-description-checker",
      label: "YouTube Description Checker",
    },
    content: [
      p(
        "YouTube allows up to 5,000 characters in a video description, which leads a lot of creators to either leave the field nearly empty or fill it with a wall of links and keywords on the assumption that more is better. Neither approach reflects how the field actually gets used."
      ),
      h("What's visible without a click"),
      p(
        "Only the first roughly 150 characters show before a viewer has to tap \"show more.\" That means the realistic budget for anything you want guaranteed to be seen — a hook, a key link, a call to action — is much closer to a tweet than to a full page of text."
      ),
      h("What the rest of the space is actually for"),
      p(
        "Everything past that preview still has a job: timestamps for chapter navigation, links to related videos or resources, credits, and context that helps YouTube's system understand what the video covers. It's read by a smaller, more engaged slice of your audience, and by YouTube's indexing — not wasted space, just lower-priority space than the first 150 characters."
      ),
      h("A structure that works for most channels"),
      p(
        "Lead with one or two sentences that stand alone as a pitch for the video, place your most important link right after that opening (some viewers only read that far), then use the remaining space for timestamps, secondary links, and any required disclosures. Padding the opening with keywords instead of an actual hook tends to hurt more than it helps, since it wastes the one part of the description almost everyone actually reads."
      ),
    ],
  },
  {
    slug: "utm-parameters-explained",
    title: "UTM Parameters Explained: Source, Medium, and Campaign",
    description:
      "What each UTM parameter actually tracks, and the naming mistakes that quietly break Analytics reports.",
    category: "SEO & Web Tools",
    publishedAt: "2026-08-10",
    readTime: "5 min read",
    relatedTool: {
      href: "/tools/utm-link-builder",
      label: "UTM Link Builder",
    },
    content: [
      p(
        "UTM parameters are small tags appended to a URL that tell Google Analytics (or any analytics platform that reads them) where a visit came from. They don't change what the page shows — they're purely a tracking label attached to the link."
      ),
      h("The three that matter most"),
      p(
        "Source identifies the specific origin of the traffic — a platform or publication, like \"newsletter\" or \"instagram.\" Medium is the general category that source belongs to, like \"email\" or \"social.\" Campaign identifies the specific push the link belongs to, like \"spring-launch\" or \"black-friday-2026.\" Together, they let you filter traffic by exactly which link drove a visit, not just which site."
      ),
      h("The naming mistake that breaks reports silently"),
      p(
        "Analytics platforms treat UTM values as case-sensitive and exact-match — \"Newsletter,\" \"newsletter,\" and \"news-letter\" will all show up as three separate sources in your reports, splitting what should be one clean data set into fragments. The fix is entirely about discipline: pick a naming convention (lowercase, hyphenated is the common standard) and use it identically every time, ideally from a shared reference sheet if more than one person creates links."
      ),
      h("When not to bother with UTMs"),
      p(
        "Internal links between pages on your own site don't need UTM tags — analytics tools already track internal navigation natively, and adding UTM parameters to internal links can actually corrupt session data by making the platform think a new session started. UTMs are for links that live somewhere outside your own site: social posts, emails, ads, and other external placements."
      ),
    ],
  },
  {
    slug: "right-youtube-thumbnail-size",
    title: "The Right YouTube Thumbnail Size (And Why It's Not Just One Number)",
    description:
      "3840×2160 is YouTube's current recommendation, but resolution, aspect ratio, and file size all matter separately — here's what each one actually affects.",
    category: "YouTube Tools",
    publishedAt: "2026-08-10",
    readTime: "3 min read",
    relatedTool: {
      href: "/tools/thumbnail-size-checker",
      label: "Thumbnail Size Checker",
    },
    content: [
      h("Quick answer"),
      p(
        "For a regular video, YouTube's preferred thumbnail is 3840×2160 pixels at 16:9, in JPG or PNG. The minimum width is 640 pixels, and the file must be under 2 MB if you upload from mobile or 50 MB from desktop."
      ),
      p(
        "Those figures come from YouTube's [custom thumbnail help page](https://support.google.com/youtube/answer/72431). Resolution, ratio, file size and format are separate checks, and an image can pass one and fail another."
      ),
      h("Resolution: preferred vs minimum"),
      p(
        "The help page says the image \"should be as large as possible\" and lists \"a resolution of 3840 x 2160 pixels for videos and 2160 x 3840 for Shorts\", \"with a minimum width of 640 pixels for videos.\" 3840×2160 is the preference, not a requirement: a 1280×720 or 1920×1080 image is above the minimum and is accepted."
      ),
      h("Aspect ratio"),
      p(
        "For videos, the page says \"try to upload a thumbnail with an aspect ratio of 16:9\"; for Shorts, 9:16. It also warns that \"vertical videos with 16:9 custom thumbnails will be replaced by an auto-generated 4:5 thumbnail.\" How an off-ratio image is displayed in each placement isn't documented there, so treat 16:9 as the safe choice rather than relying on how YouTube adapts other shapes."
      ),
      h("File size and format"),
      p(
        "The limits depend on the device you upload from: \"Mobile: 2 MB for video thumbnails\" and \"Desktop: 50MB for video, Shorts, and podcast thumbnails.\" Formats are \"JPG or PNG.\" A full-size 3840×2160 PNG can easily be over 2 MB, which only matters if you upload from your phone."
      ),
      h("Worked example"),
      p(
        "We ran four images through the same logic as our [Thumbnail Size Checker](/tools/thumbnail-size-checker). A 3840×2160 PNG of 6.4 MB passes resolution, ratio and format but gets a warning on file size: over the 2 MB mobile limit, under the 50 MB desktop limit. A 1280×720 JPG of 350 KB passes everything, with a note that higher resolution is better. A 1080×1080 square JPG passes resolution but gets a 16:9 warning. A 600×338 GIF fails twice: it's below the 640 px minimum width, and GIF isn't JPG or PNG."
      ),
      h("When this doesn't apply"),
      p(
        "Shorts and podcasts have their own specs on the same help page (Shorts: 2160×3840 preferred, 9:16, minimum height 640 px; podcast playlists: 1:1). To upload a custom thumbnail at all, the help page says \"your account must be verified\", linking to YouTube's account verification step at youtube.com/verify. That's an account check, not the verification badge some channels show next to their name. YouTube can change these specs, so check the help page if a value here doesn't match what you see in YouTube Studio."
      ),
    ],
  },
  {
    slug: "linkedin-post-that-doesnt-get-buried",
    title: "How to Write a LinkedIn Post That Doesn't Get Buried",
    description:
      "The first two lines determine whether a LinkedIn post gets read at all — here's how the \"see more\" fold actually works.",
    category: "Social Media Tools",
    publishedAt: "2026-08-10",
    readTime: "4 min read",
    relatedTool: {
      href: "/tools/linkedin-post-formatter",
      label: "LinkedIn Post Formatter",
    },
    content: [
      p(
        "LinkedIn allows up to 3,000 characters in a post, but the feed only shows roughly the first 210 characters before folding the rest behind \"see more.\" Most posts that underperform aren't badly written overall — they just don't survive that first fold."
      ),
      h("What has to happen in the first two lines"),
      p(
        "The opening needs to work as a complete, standalone reason to keep reading, not a slow windup. Posts that open with scene-setting (\"Last week I was reflecting on...\") burn the entire visible budget before making a single point, while posts that open with the actual claim, question, or result give the reader something to decide on before they even have to tap."
      ),
      h("Line breaks change how the fold lands"),
      p(
        "LinkedIn's feed counts characters toward the fold, but visual line breaks affect how much of your opening thought is visible at once. A post with short, deliberate line breaks in the opening can put a complete, punchy idea entirely above the fold, while the same character count written as one dense paragraph might cut off mid-sentence."
      ),
      h("What's actually below the fold"),
      p(
        "The 3,000-character ceiling is generous enough for real depth — a full argument, a story with a payoff, a detailed breakdown. That space isn't wasted if the opening earned the click to expand; it's simply not what determines whether that click happens in the first place. Treat the first 210 characters as the pitch and everything after as the content the pitch was for."
      ),
    ],
  },
  {
    slug: "what-makes-a-good-social-bio",
    title: "What Makes a Good Social Media Bio (In About 150 Characters)",
    description:
      "Every platform gives you less room for a bio than a caption — here's how to use that tight space well.",
    category: "Social Media Tools",
    publishedAt: "2026-08-10",
    readTime: "4 min read",
    relatedTool: {
      href: "/tools/bio-character-counter",
      label: "Bio Character Counter",
    },
    content: [
      p(
        "A profile bio has to do more work per character than almost any other piece of writing a creator produces — Instagram gives it 150 characters, TikTok gives it 80, and in that space it has to answer \"who is this and why should I follow\" for a stranger who's spending about two seconds deciding."
      ),
      h("What actually earns a follow in that space"),
      p(
        "A bio that lists credentials or job titles answers a different question than the one a visitor is asking. What tends to work better is a specific, concrete description of what someone will get by following — the topic, the format, the value — rather than a general statement of identity. \"Daily budgeting tips for freelancers\" tells a visitor more in five words than \"Finance enthusiast | Entrepreneur\" does in six."
      ),
      h("Why shorter platforms force better writing"),
      p(
        "TikTok's 80-character bio limit — barely half of Instagram's — is tight enough that there's no room for a throwaway phrase. Writing the TikTok version first and then expanding for platforms with more room tends to produce a sharper bio everywhere, since the constraint forces every word to justify its place before you have the luxury of adding more."
      ),
      h("The line update most creators skip"),
      p(
        "A bio written once at account creation and never revisited stops reflecting what the account is actually about after a few months of posting. Since it costs nothing to edit and takes seconds to check against a platform's limit, treating the bio as something to revisit every few months — not a one-time setup task — keeps it doing its job as the account evolves."
      ),
    ],
  },
  {
    slug: "youtube-channel-handle-vs-id",
    title: "YouTube Channel Handle vs. Channel ID: What's the Difference?",
    description:
      "A channel's @handle and its underlying channel ID serve different purposes, and only one of them can change.",
    category: "YouTube Tools",
    publishedAt: "2026-08-10",
    readTime: "3 min read",
    relatedTool: {
      href: "/tools/youtube-channel-id-finder",
      label: "YouTube Channel ID Finder",
    },
    content: [
      p(
        "Every YouTube channel has two different identifiers that serve completely different purposes, and confusing them is a common source of broken integrations and dead links: the @handle, and the channel ID."
      ),
      h("The @handle is the human-facing one"),
      p(
        "A handle — like @mkbhd — is the short, memorable identifier shown in a channel's URL and used for mentions and search. Channels can change their handle (within YouTube's rules on frequency), which makes it a reasonable thing to put on a business card, but not something to hardcode into a system that needs to keep working if the channel ever updates it."
      ),
      h("The channel ID is the permanent, system-facing one"),
      p(
        "A channel ID — a string starting with \"UC\" followed by 22 characters — is assigned once and never changes for the life of the channel, even if the handle, the display name, or the channel's entire branding is updated later. This is the identifier the YouTube Data API expects, and the one that should be used anywhere a link or integration needs to reliably point at the same channel indefinitely."
      ),
      h("Where each one actually matters"),
      p(
        "For a link you're sharing casually — a video description, a social bio — the handle-based URL is fine and more readable. For anything programmatic — an API integration, a scraper, a database record meant to persist — the channel ID is the safer choice, precisely because it's the one part of a channel's identity that's guaranteed not to change."
      ),
    ],
  },
  {
    slug: "reading-time-vs-word-count",
    title: "Reading Time vs. Word Count: Which Should You Actually Track?",
    description:
      "A word count target and a reading time target measure different things, and mixing them up leads to the wrong edit.",
    category: "Text Tools",
    publishedAt: "2026-08-10",
    readTime: "4 min read",
    relatedTool: {
      href: "/tools/reading-time-calculator",
      label: "Reading Time Calculator",
    },
    content: [
      p(
        "Word count and reading time are related but not interchangeable, and briefs that specify one when they actually mean the other lead writers to optimize for the wrong thing."
      ),
      h("Word count measures length; reading time measures density too"),
      p(
        "Two 1,000-word pieces can take very different amounts of time to read if one is packed with short, simple sentences and the other is dense with long sentences and technical vocabulary. Word count treats both as identical; reading time, calculated from actual reading-speed research, reflects the real difference in how long each one takes to get through."
      ),
      h("When word count is the right target"),
      p(
        "Publications with strict length requirements, academic submissions, and SEO briefs built around competitor content length are genuinely asking for a word count — the number itself is the constraint, regardless of how dense or light the writing is."
      ),
      h("When reading time is the right target"),
      p(
        "Video scripts, podcast outlines, and anything meant to fill a specific time slot are better measured in reading or speaking time, since the actual constraint is duration, not word count — a script that hits a word count target but runs long because of complex phrasing will blow through its time slot regardless of how well it matched the brief on paper."
      ),
      p(
        "When in doubt about which a brief actually wants, checking both takes seconds and avoids the more expensive mistake of submitting work that technically meets a numeric target while missing the actual constraint the number was meant to represent."
      ),
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}