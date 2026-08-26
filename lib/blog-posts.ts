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
      "Formatting, capitalization, and volume — the practical details of hashtags that most guides skip.",
    category: "Social Media Tools",
    publishedAt: "2026-06-29",
    readTime: "4 min read",
    relatedTool: {
      href: "/tools/hashtag-formatter",
      label: "Hashtag Formatter",
    },
    content: [
      p(
        "Hashtags work as a discovery mechanism — a way for someone who isn't already following you to find your post through a topic they're browsing. That only works if the hashtag is formatted correctly and matches how people actually search."
      ),
      h("Capitalization isn't just cosmetic"),
      p(
        "A multi-word hashtag written in CamelCase, like #SmallBusinessTips, is functionally identical to #smallbusinesstips for search purposes — platforms treat hashtags as case-insensitive. The real reason to use CamelCase is accessibility: screen readers can correctly announce each word in a CamelCase hashtag, but often read an all-lowercase run-on as one long, garbled string."
      ),
      h("How many is too many"),
      p(
        "Instagram allows up to 30 hashtags per post, but posts using somewhere in the 3–5 range often perform just as well, since a wall of hashtags can look spammy and doesn't necessarily reach more of the right audience. Quality and relevance of each tag matters more than hitting a maximum count."
      ),
      p(
        "Mix specificity levels: one or two broad tags for volume, a few mid-size niche tags where you can realistically rank, and one branded or community tag specific to you. A hashtag with millions of posts is nearly impossible to be seen in; one with only a few hundred might not have any real search volume at all."
      ),
    ],
  },
  {
    slug: "meta-description-best-practices",
    title: "How to Write a Meta Description That Earns the Click",
    description:
      "Length limits, what Google actually displays, and how to write a description that competes for attention in search results.",
    category: "SEO & Web Tools",
    publishedAt: "2026-07-06",
    readTime: "4 min read",
    relatedTool: {
      href: "/tools/meta-description-checker",
      label: "Meta Description Checker",
    },
    content: [
      p(
        "A meta description doesn't directly influence search rankings, but it's often the deciding factor in whether someone clicks your result over a competitor's. Think of it as ad copy that you write once and Google displays for free, indefinitely."
      ),
      h("The length that actually matters"),
      p(
        "Google typically displays somewhere around 150 to 160 characters of a meta description before truncating with an ellipsis, though the exact cutoff varies by device and how the snippet wraps. Aiming for roughly 120 to 155 characters gives you room to make a complete point without risking a mid-sentence cutoff."
      ),
      h("Google sometimes ignores it entirely"),
      p(
        "If Google decides a different passage from your page content better answers the searcher's specific query, it will generate its own snippet instead of using your meta description. Writing a strong, specific description improves your odds of it being used, but it isn't a guarantee."
      ),
      p(
        "The descriptions that earn clicks tend to state a clear, specific benefit rather than a vague summary — naming what the reader will learn or get, rather than just restating the title in different words."
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
    title: "The Complete Guide to Social Media Character Limits",
    description:
      "Every major platform's post and bio character limits in one place, and what actually happens when you go over.",
    category: "Social Media Tools",
    publishedAt: "2026-07-20",
    readTime: "5 min read",
    relatedTool: {
      href: "/tools/character-counter",
      label: "Character Counter",
    },
    content: [
      p(
        "Every platform enforces a character limit differently — some hard-cap what you can type at all, others let you type freely but fold the excess behind a \"see more\" link. Knowing which behavior you're dealing with changes how you should write."
      ),
      h("Hard limits vs soft cutoffs"),
      p(
        "X enforces a genuine hard limit at 280 characters — the composer simply won't let you type past it. TikTok's 150-character caption limit works the same way. These are the platforms where going over isn't an option; you have to edit down before you can post at all."
      ),
      p(
        "Instagram, Facebook, and LinkedIn work differently. Their true limits are generous — Instagram allows 2,200 characters, LinkedIn allows 3,000 — but the visible preview is much shorter before a \"more\" link appears, usually somewhere between 125 and 210 characters depending on the platform and device. Here, the practical limit isn't the platform's rule; it's how much of your text a reader will see before deciding whether to expand it."
      ),
      h("Why this distinction matters for how you write"),
      p(
        "For hard-limit platforms, the whole message has to fit — prioritize cutting anything non-essential. For soft-cutoff platforms, put the complete thought or hook in that visible preview window, and treat everything after the fold as optional depth for readers who are already engaged enough to tap \"more.\""
      ),
      h("Bios follow a separate, stricter set of limits"),
      p(
        "Profile bios are consistently shorter than post limits across every platform — Instagram's bio caps at 150 characters versus 2,200 for a caption, and TikTok's bio caps at just 80. The logic is the same everywhere: a bio is meant to be scanned in a glance on a profile page, not read like a post."
      ),
      h("A quick reference"),
      p(
        "X posts: 280 characters, hard limit. TikTok captions: 150 characters, hard limit. Threads posts: 500 characters, hard limit. Instagram captions: 2,200 characters allowed, roughly 125 visible before folding. LinkedIn posts: 3,000 characters allowed, roughly 210 visible before folding. Facebook posts: over 63,000 characters allowed, but engagement tends to drop sharply past about 80 characters even though nothing forces a cutoff."
      ),
      p(
        "Rather than memorizing all of this, the practical habit is to draft in whichever platform has the tightest limit for your use case, then adapt outward — it's much easier to expand a message than to compress one that's already over."
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
      "Google scaled back which sites get FAQ rich results in search. Here's what that means for whether the markup is still worth the effort.",
    category: "SEO & Web Tools",
    publishedAt: "2026-08-03",
    readTime: "4 min read",
    relatedTool: { href: "/tools/faq-schema-generator", label: "FAQ Schema Generator" },
    content: [
      p(
        "FAQ schema — a structured data format that marks up a section of a page as questions and answers — used to reliably produce an expandable rich result directly in Google's search listings, taking up extra visual space and often boosting click-through rate. Google has since narrowed which sites qualify for that treatment, which raises a fair question: is it still worth adding?"
      ),
      h("What changed"),
      p(
        "Google now limits the FAQ rich result primarily to well-known, authoritative sites for certain query types, rather than displaying it broadly for any page with valid markup. For most smaller or newer sites, adding FAQ schema no longer guarantees the visual rich result it once did."
      ),
      h("Why it's still worth doing anyway"),
      p(
        "Structured data serves a second purpose beyond the visual rich result: it helps search engines and AI-driven answer systems parse the actual content of a page more reliably, which can support how a page gets surfaced in ways that aren't limited to the classic blue-link rich result. Valid FAQ markup also costs nothing to add if the content already exists as genuine questions and answers on the page — the downside risk of adding it is close to zero even without a guaranteed visual payoff."
      ),
      h("When to skip it"),
      p(
        "Don't manufacture a fake FAQ section purely to add the schema — Google's guidelines explicitly discourage marking up content that isn't genuinely presented as FAQ content on the page itself, and doing so risks the markup being ignored or the page being viewed as manipulative. Add it where a real FAQ section already serves your readers, not as a standalone SEO trick."
      ),
    ],
  },
  {
    slug: "keyword-density-myth",
    title: "Keyword Density Is Mostly a Myth — Here's What Still Matters",
    description:
      "Why hitting a specific keyword percentage stopped being a meaningful SEO strategy, and what to focus on instead.",
    category: "SEO & Web Tools",
    publishedAt: "2026-08-03",
    readTime: "4 min read",
    relatedTool: { href: "/tools/keyword-density-checker", label: "Keyword Density Checker" },
    content: [
      p(
        "Keyword density — the percentage of a page's total words made up by a target keyword — was a meaningful ranking signal in early search engines that relied heavily on literal text matching. Modern search engines use semantic understanding that recognizes synonyms, related concepts, and intent, which has significantly reduced how much a specific density percentage matters."
      ),
      h("Why the old advice persists anyway"),
      p(
        "Keyword density tools are simple to build and the concept is easy to explain, which is why \"aim for 1–2% density\" advice still circulates widely even though it doesn't reflect how modern ranking systems actually evaluate content. Following a strict density target today is more likely to produce awkward, repetitive writing than to improve rankings."
      ),
      h("What checking density is still useful for"),
      p(
        "The genuinely useful case for a density checker isn't hitting a target — it's catching the opposite problem: accidental keyword stuffing, where a phrase gets repeated so often that the writing starts to read unnaturally. If a check comes back showing a keyword at 6–8% density, that's a signal to revise for readability, not evidence you're under-optimized if it's lower."
      ),
      h("What to focus on instead"),
      p(
        "Covering a topic thoroughly, using related terms and synonyms naturally as a human writer would, and structuring content so it directly answers the questions a searcher likely has all matter more than any density percentage. If content reads naturally and thoroughly covers what someone searching the topic would want to know, density tends to land in a reasonable range on its own without deliberate targeting."
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
      "1280×720 is the target, but resolution, aspect ratio, and file size all matter separately — here's what each one actually affects.",
    category: "YouTube Tools",
    publishedAt: "2026-08-10",
    readTime: "4 min read",
    relatedTool: {
      href: "/tools/thumbnail-size-checker",
      label: "Thumbnail Size Checker",
    },
    content: [
      h("Quick answer"),
      p(
        "1280×720 resolution · 16:9 aspect ratio · 2MB maximum file size — those three numbers cover it, but each one fails independently for a different reason. Here's what each actually affects."
      ),
      p(
        "\"What size should a YouTube thumbnail be\" has a simple headline answer — 1280×720 — but that single number actually bundles together three separate requirements that fail independently: resolution, aspect ratio, and file size."
      ),
      h("Resolution: the minimum that keeps you sharp"),
      p(
        "1280×720 is YouTube's recommended resolution, with 640 pixels as an absolute floor. Uploading below that minimum risks a soft, blurry thumbnail once YouTube's various placements (search results, suggested videos, TV app) scale it — and once a channel builds a habit of low-resolution thumbnails, it reads as low-effort even if the video content is strong."
      ),
      h("Aspect ratio: the one that gets silently cropped"),
      p(
        "YouTube expects a 16:9 aspect ratio. Upload something off-ratio — a square Instagram export, for instance — and YouTube doesn't reject it; it crops it to fit, often cutting off exactly the part of the image (a face, a text overlay) that made the thumbnail work in the first place. This is the failure mode that's easiest to miss, since the thumbnail can look fine in the upload preview and only reveal the cropping once it's live in different placements."
      ),
      h("File size: the one nobody thinks about until it blocks the upload"),
      p(
        "YouTube caps thumbnail uploads at 2MB. A thumbnail exported at full resolution from a modern camera or design tool can exceed that without any obvious visual signal that it's too large — the fix is usually just re-exporting at a reasonable JPEG compression level, which rarely produces a visible quality loss at thumbnail viewing sizes."
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