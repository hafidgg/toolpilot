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
    title: "YouTube Title Length Limit: 100 Characters",
    description:
      "YouTube titles can be up to 100 characters. How much shows in search or on mobile isn't documented, so write titles that still work when cut short.",
    category: "YouTube Tools",
    publishedAt: "2026-06-22",
    readTime: "2 min read",
    relatedTool: {
      href: "/tools/youtube-title-checker",
      label: "YouTube Title Checker",
    },
    content: [
      p(
        "A YouTube title can be up to 100 characters, as YouTube Help states. How many of those appear in search results, suggestions or on a phone isn't documented by YouTube, so any \"visible length\" figure is an estimate."
      ),
      h(
        "What YouTube documents"
      ),
      p(
        "From YouTube Help, [Add video details](https://support.google.com/youtube/answer/57404) (retrieved 2 November 2026): \"Video titles have a character limit of 100 characters and cannot include invalid characters.\" The page says nothing about truncation. For other platforms, see our [character limits reference](/blog/social-media-character-limits-guide)."
      ),
      h(
        "What isn't documented"
      ),
      p(
        "Earlier versions of this post gave 60 to 70 characters for desktop and about 40 for mobile. We couldn't find those figures in YouTube's documentation, so they're gone. In our view no single number can be right everywhere anyway: displayed length depends on the surface, the screen width and the characters themselves."
      ),
      h(
        "Worked example"
      ),
      p(
        "Our [YouTube Title Checker](/tools/youtube-title-checker) counts characters and applies a rule of thumb: up to 60 is marked good, 61 to 70 tight, and over 70 too long. Those thresholds are our heuristic, not YouTube's. \"How to Sharpen a Kitchen Knife\" is 30 characters, marked good. \"How to Sharpen a Kitchen Knife With a Whetstone (Beginner Guide, No Jig)\" is 72, marked too long with the message \"Within YouTube's 100-character limit, but long by our rule of thumb.\" \"How to Sharpen a Kitchen Knife With a Whetstone: The Complete Beginner Guide to Angles, Grits and Stropping\" is 107 and gets a separate over-limit status: \"Over YouTube's official 100-character title limit by 7.\""
      ),
      h(
        "Writing for an unknown cut-off"
      ),
      p(
        "Put the words that say what the video is at the start, so the title still makes sense however much of it is shown. Read the first five or six words on their own: if they don't identify the video, reorder. This is our judgment, not a YouTube rule."
      ),
      h(
        "Common mistakes"
      ),
      p(
        "Treating 60 characters as a YouTube limit; it's a rule of thumb. Padding a title to 100 because it's allowed. Relying on a counter alone when you're close to 100: emoji can be counted differently, so confirm in YouTube Studio."
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
      "The Flesch Reading Ease formula as Microsoft documents it, how our checker computes it, and the edits that raise the score, with a worked before-and-after.",
    category: "SEO & Web Tools",
    publishedAt: "2026-07-13",
    readTime: "3 min read",
    relatedTool: {
      href: "/tools/readability-checker",
      label: "Readability Checker",
    },
    content: [
      p(
        "Flesch Reading Ease is calculated only from sentence length and syllables per word, so the score goes up when you use shorter sentences and shorter words. It says nothing about accuracy or structure; treat it as a check on mechanics, not on quality."
      ),
      h(
        "The formula"
      ),
      p(
        "Microsoft Support documents both tests in [Get your document's readability and level statistics](https://support.microsoft.com/en-us/office/get-your-document-s-readability-and-level-statistics-85b4969e-e80a-4777-8dd3-f7fc3c8b3fd2) (retrieved 2 November 2026). Flesch Reading Ease \"rates text on a 100-point scale. The higher the score, the easier it is to understand the document.\" Its formula: \"206.835 – (1.015 x ASL) – (84.6 x ASW)\", where ASL is \"the number of words divided by the number of sentences\" and ASW is \"the number of syllables divided by the number of words\". The page adds: \"For most standard files, you want the score to be between 60 and 70.\""
      ),
      p(
        "Flesch-Kincaid Grade Level, from the same page: \"(.39 x ASL) + (11.8 x ASW) – 15.59\". It \"rates text on a U.S. school grade level\", and \"For most documents, the recommended score is around 7.0 to 8.0.\""
      ),
      h(
        "How our checker computes it"
      ),
      p(
        "Our [Readability Checker](/tools/readability-checker) uses the same Reading Ease constants. It counts words by spaces and sentences by . ! and ?, and estimates syllables with a vowel-group rule rather than a dictionary, so its score can differ a little from Word's for the same text. It shows Reading Ease and a descriptive band, not the grade-level number."
      ),
      h(
        "Worked example"
      ),
      p(
        "Before: \"It is important to note that in order to facilitate the subsequent utilization of the documentation, administrators should carefully evaluate the configuration options, which are described comprehensively in the appendix, before implementing any modifications.\" The checker counts 34 words, 1 sentence and 80 syllables, for a score of -26.7. Grade level from the same counts, by the formula above: 25.4."
      ),
      p(
        "After: \"Before you change any settings, read the options in the appendix. They explain what each one does. This makes the guide easier to use later.\" 25 words, 3 sentences, 33 syllables: a score of 86.7, and a grade level of 3.2. The edits were the ones below: cut the opener, split the sentence, and swap long words for short ones."
      ),
      h(
        "Edits that raise the score"
      ),
      p(
        "These follow directly from the formula. Split long sentences, which lowers words per sentence. Swap long words for short ones that mean the same: use for utilize, help for facilitate, then for subsequently. Cut openers like \"It is important to note that\" and \"in order to\", which add words and syllables without information. Turn a sentence listing several items into a list."
      ),
      h(
        "When a lower score is fine"
      ),
      p(
        "Our judgment: technical, legal and specialist writing often needs precise long terms, and forcing them out can make the text less clear. Use the score to find sentences worth a second look, not as a target to hit at any cost. We found no Google documentation saying readability scores affect rankings, so don't edit for one on that basis."
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
      "Where the video ID sits in watch, youtu.be, Shorts and embed links, and how thumbnail sizes relate to it: what YouTube documents and what it doesn't.",
    category: "YouTube Tools",
    publishedAt: "2026-07-27",
    readTime: "2 min read",
    relatedTool: {
      href: "/tools/youtube-thumbnail-downloader",
      label: "YouTube Thumbnail Downloader",
    },
    content: [
      p(
        "The video ID is the code after v= in a watch link, after youtu.be/ in a short link, after /shorts/ in a Shorts link and after /embed/ in an embed link. Our tools pull it out of all four and build thumbnail links from it."
      ),
      h(
        "Where the ID sits"
      ),
      p(
        "YouTube's [player parameters documentation](https://developers.google.com/youtube/player_parameters) gives the embed format \"https://www.youtube.com/embed/VIDEO_ID\", and YouTube Help's [embed page](https://support.google.com/youtube/answer/171780) describes the ID as \"the series of letters that follows \"embed/\"\". We found no official page that documents the watch, youtu.be or Shorts formats or states the ID's length. IDs are 11 characters in practice, and our extractor assumes that."
      ),
      h(
        "Thumbnail sizes"
      ),
      p(
        "The YouTube Data API's [thumbnails documentation](https://developers.google.com/youtube/v3/docs/thumbnails) lists default (\"120px wide and 90px tall\"), medium (\"320px wide and 180px tall\"), high (\"480px wide and 360px tall\"), standard (\"640px wide and 480px tall\") and maxres (\"1280px wide and 720px tall\"), and says standard and maxres are \"available for some videos\". That's why a max-resolution link sometimes fails."
      ),
      p(
        "The img.youtube.com/vi/{ID}/maxresdefault.jpg pattern our downloader uses isn't on that page. It works without an API key, but it isn't officially documented, so it could change."
      ),
      h(
        "Worked example"
      ),
      p(
        "Our [YouTube Video ID Extractor](/tools/youtube-video-id-extractor) returns dQw4w9WgXcQ for https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=42s&list=PL123, https://youtu.be/dQw4w9WgXcQ?si=abc123, https://www.youtube.com/shorts/dQw4w9WgXcQ and https://www.youtube.com/embed/dQw4w9WgXcQ. The [YouTube Thumbnail Downloader](/tools/youtube-thumbnail-downloader) then builds five links, from https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg (1280×720) down to default.jpg (120×90). A mobile share link where v= isn't the first parameter, such as https://m.youtube.com/watch?feature=share&v=dQw4w9WgXcQ, also returns dQw4w9WgXcQ, and so does a bare ID pasted on its own."
      ),
      h(
        "Common mistakes"
      ),
      p(
        "Assuming a max-resolution thumbnail always exists, when the API docs say it's only available for some videos. Copying tracking parameters along with the ID. Relying on the img.youtube.com pattern for anything critical, since YouTube doesn't document it."
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
      "Close a word-count gap with content a reader needs, not filler. What padding looks like, where real length comes from, and a worked example with counts.",
    category: "Text Tools",
    publishedAt: "2026-08-03",
    readTime: "2 min read",
    relatedTool: { href: "/tools/word-counter", label: "Word Counter" },
    content: [
      p(
        "If a draft is short, add what a reader is missing: a concrete example, a specific detail, an objection you haven't answered, or a whole missing section. Filler phrases raise the count and make the text worse. For web pages, Google says outright that it has no preferred word count."
      ),
      h(
        "What Google says about word count"
      ),
      p(
        "Google Search Central's [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) (retrieved 2 November 2026) lists this among its warning-sign questions: \"Are you writing to a particular word count because you've heard or read that Google has a preferred word count? (No, we don't.)\" A word target from a client, teacher or editor is a real constraint; a target based on what Google supposedly wants isn't."
      ),
      h(
        "What padding looks like"
      ),
      p(
        "Our judgment of the common patterns: restating a point a paragraph after making it; phrases that carry no information, like \"it is worth noting that\" or \"in today's world\"; and stretching one example into three near-identical ones. Each raises the count and slows the reader down."
      ),
      h(
        "Worked example"
      ),
      p(
        "In our [Word Counter](/tools/word-counter), \"It is worth noting that, in today's world, a good example is one of the best ways to explain an idea. Examples help readers understand.\" is 25 words. Its content fits in 10: \"A good example explains an idea faster than a definition.\" Adding an actual example instead gives 31 words: \"A good example explains an idea faster than a definition. Instead of saying a meta description is a summary, show one: a 144-character draft, and the 179-character version our checker flags.\" Both long versions are about the same length; only the second gives the reader something new."
      ),
      h(
        "Where real length comes from"
      ),
      p(
        "Our judgment: short drafts are usually missing a layer, not words. Add a worked example, a number in place of a vague claim, the reason something matters, or a limitation. If the draft is missing a whole section, such as setup, limits or a practical example, write that section rather than stretching sentences."
      ),
      h(
        "Common mistakes"
      ),
      p(
        "Repeating the introduction in the conclusion to add words. Padding every paragraph a little instead of adding one real section. Writing to a length you believe Google prefers. Cutting a needed example to come in under a limit."
      ),
    ],
  },
  {
    slug: "title-case-vs-sentence-case",
    title: "Title Case vs. Sentence Case: When Each One Actually Matters",
    description:
      "What title case and sentence case are, what Microsoft's and Google's style guides say about headings, and why a case converter needs a final check by hand.",
    category: "Text Tools",
    publishedAt: "2026-08-03",
    readTime: "2 min read",
    relatedTool: { href: "/tools/text-case-converter", label: "Text Case Converter" },
    content: [
      p(
        "Title case capitalizes most words (\"A Home to Go Back To\"); sentence case capitalizes the first word and proper nouns (\"A home to go back to\"). Two major freely published style guides, Microsoft's and Google's developer guide, default to sentence case for headings. Whichever you pick, use it consistently for each kind of text."
      ),
      h(
        "What the style guides say"
      ),
      p(
        "The [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/capitalization) (retrieved 2 November 2026): \"Use sentence-style capitalization in most titles and headings: capitalize the first word and lowercase the rest.\" It adds: \"Titles of blog posts, documentation articles, and press releases use sentence-style capitalization.\""
      ),
      p(
        "The [Google developer documentation style guide](https://developers.google.com/style/capitalization) (retrieved 2 November 2026): \"In document titles and headings, use sentence case.\" It also says to \"Capitalize product names as they officially appear\"."
      ),
      h(
        "If you do use title case"
      ),
      p(
        "Microsoft's guide, for \"the rare occasions when title-style capitalization is required\": \"Always capitalize the first and last words.\" \"Don't capitalize a, an, or the unless it's the first word.\" \"Don't capitalize prepositions of four or fewer letters (such as on, to, in, up, down, of, and for) unless the preposition is the first or last word.\" \"Don't capitalize and, but, or, nor, yet, or so unless it's the first word or the last word.\" Other guides keep their own lists of minor words, so follow the one your publication uses."
      ),
      h(
        "Worked example"
      ),
      p(
        "Our [Text Case Converter](/tools/text-case-converter) capitalizes every word in title case. \"a home to go back to\" becomes \"A Home To Go Back To\", while Microsoft's rules give \"A Home to Go Back To\" (its own example). \"the teaching tool you're looking for\" becomes \"The Teaching Tool You'Re Looking For\", with a capital R after the apostrophe. In sentence case, \"how to personalize Windows\" becomes \"How to personalize windows\", because the tool can't tell that Windows is a product name. Use the converter for the bulk change, then fix minor words, contractions and proper nouns by hand."
      ),
      h(
        "Common mistakes"
      ),
      p(
        "Mixing cases between headings on the same page. Lowercasing product and brand names in sentence case. Capitalizing every short word in title case. Trusting an automatic converter's output without a read-through."
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
    readTime: "2 min read",
    relatedTool: { href: "/tools/url-slug-generator", label: "URL Slug Generator" },
    content: [
      p(
        "They matter a little, mostly through readability: Google's documentation recommends readable words in URLs, hyphens rather than underscores between words, and short descriptive image file names. It doesn't present any of this as a big ranking lever, so treat it as cheap hygiene rather than a growth tactic."
      ),
      h(
        "What Google's URL guidance says"
      ),
      p(
        "Google's [URL structure documentation](https://developers.google.com/search/docs/crawling-indexing/url-structure) (retrieved 2 November 2026) says: \"When possible, use readable words rather than long ID numbers in your URLs.\" On separators: \"we recommend using hyphens (-) instead of underscores (_) to separate words in your URLs,\" adding, \"For historical reasons, we don't recommend using underscores.\" The [Search Central changelog](https://developers.google.com/search/updates) lists this clarification on October 23, 2026: \"Updated the URL structure best practices to clarify word separation guidelines using hyphens versus underscores.\""
      ),
      p(
        "On parameters, the same page says: \"Whenever possible, shorten URLs by trimming unnecessary parameters (meaning, parameters that don't change the content).\""
      ),
      h(
        "Image file names"
      ),
      p(
        "Google's [image SEO guide](https://developers.google.com/search/docs/appearance/google-images) says: \"When possible, use filenames that are short, but descriptive,\" and gives the example that \"my-new-black-kitten.jpg is better than IMG00023.JPG.\" The same page calls alt text \"the most important attribute when it comes to providing more metadata for an image,\" so a good file name complements alt text rather than replacing it."
      ),
      h(
        "Worked example"
      ),
      p(
        "Our [URL Slug Generator](/tools/url-slug-generator) turns \"Café Menu: 10 Best Crème Brûlée Recipes (2026)!\" into cafe-menu-10-best-creme-brulee-recipes-2026: lowercase, accents removed, punctuation dropped, spaces turned into hyphens. The [File Name Optimizer](/tools/file-name-optimizer) turns \"IMG_4821 Orange Tabby Cat.JPG\" into img-4821-orange-tabby-cat.jpg. Both tools treat underscores as word separators, the way Google recommends, so my_product_page becomes my-product-page."
      ),
      h(
        "Common mistakes, and when this doesn't apply"
      ),
      p(
        "Renaming live URLs just to make them prettier. If you do change a URL, Google's [site move documentation](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) recommends \"server side permanent redirects from the old URLs to the new URLs,\" using \"HTTP permanent redirects if possible, such as 301 and 308.\" Repeating keywords in a slug makes it less readable, not more (our judgment). And IDs aren't forbidden: the guidance says \"when possible,\" so a shop with numeric product URLs isn't broken."
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
        "This paragraph never contains the exact phrase \"coffee grinder\", so its density for that phrase is 0 × 2 ÷ 46 × 100 = 0%, even though it's clearly about coffee grinders. For the single word \"grinder\", the tool finds 1 match (\"burr grinder\"; it matches whole words only, so \"Blade grinders\" doesn't count), giving 1 × 1 ÷ 46 × 100 = 2.174%. Neither number says anything about quality. What makes the paragraph useful is that it explains something."
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
      "TikTok doesn't publish a caption or bio limit we could verify. Why limits vary, how to check yours in the app, and how to count before you post.",
    category: "Social Media Tools",
    publishedAt: "2026-08-03",
    readTime: "2 min read",
    relatedTool: { href: "/tools/tiktok-caption-counter", label: "TikTok Caption Counter" },
    content: [
      p(
        "We can't give you a number, because we couldn't find an official one: the TikTok help pages we could load don't state a caption or bio character limit. The reliable way to know your limit is to paste a draft into the field in the app and see where it stops you."
      ),
      h(
        "Why we don't quote a figure"
      ),
      p(
        "Numbers for TikTok circulate widely, but we only state platform limits we can confirm on the platform's own help pages. TikTok's [support page on captions](https://support.tiktok.com/en/using-tiktok/creating-videos/adding-captions), fetched on 2 November 2026, didn't list a limit, and we found no other official TikTok page that did. In our judgment, limits are also likely to differ between fields (caption, bio, display name) and to change over time, which is another reason a single quoted figure goes stale."
      ),
      h(
        "How to check the limit yourself"
      ),
      p(
        "Open the field you want to fill in the TikTok app and paste a deliberately long draft. The point where the app stops accepting characters or warns you is your current limit. Check each field separately rather than assuming the caption limit applies to your bio, and recheck after a major app update."
      ),
      h(
        "Worked example: counting before you paste"
      ),
      p(
        "Our [TikTok Caption Counter](/tools/tiktok-caption-counter) counts characters the way people see them. For the caption \"Three knife cuts every home cook should learn first 🔪 #cooking #knifeskills\" it reports 75 characters, while a plain JavaScript .length count gives 76, because the knife emoji is stored as two code units. The counter also shows a target figure, but labels it \"commonly cited, check in the app\", because we couldn't verify it. Use the count to compare drafts, and the app to confirm the limit."
      ),
      h(
        "Common mistakes"
      ),
      p(
        "Treating a number from a blog post, including older versions of this one, as official. Assuming one limit covers every field. Trusting any counter, ours included, over what the app actually accepts: emoji and combined characters can be counted differently. For the limits we could verify on other platforms, see our [social media character limits reference](/blog/social-media-character-limits-guide)."
      ),
    ],
  },
  {
    slug: "blog-post-to-twitter-thread",
    title: "How to Turn a Blog Post Into a Twitter/X Thread",
    description:
      "Splitting an article into posts is the easy part. What to rewrite when you turn a blog post into an X thread, with a worked example from our splitter.",
    category: "Social Media Tools",
    publishedAt: "2026-08-03",
    readTime: "2 min read",
    relatedTool: { href: "/tools/twitter-thread-splitter", label: "Twitter/X Thread Splitter" },
    content: [
      p(
        "Rewrite, don't just chop: give the first post its own hook, make each post one complete thought, and cut supporting detail. The splitting itself is mechanical and a tool can do it; the rewriting is where a thread gets better or worse."
      ),
      h(
        "About the character limit"
      ),
      p(
        "X's help center returned an HTTP 403 error when we tried to fetch it on 2 November 2026, so we can't confirm X's current post limit. Our [Twitter/X Thread Splitter](/tools/twitter-thread-splitter) uses 280 characters, labeled \"commonly cited, check in the app\". Check the limit in X's composer. For the limits we could verify, see our [character limits reference](/blog/social-media-character-limits-guide)."
      ),
      h(
        "The first post needs its own hook"
      ),
      p(
        "An article's first paragraph sets context; a thread's first post has to earn the next tap. Rewrite it as the clearest version of your claim instead of reusing the article's first sentence. This is editorial judgment, not a platform rule."
      ),
      h(
        "One thought per post"
      ),
      p(
        "Posts get read, quoted and shared one at a time, so each should make sense on its own (our judgment). That usually means restructuring around ideas, not character counts."
      ),
      h(
        "Worked example"
      ),
      p(
        "Given a 93-word paragraph about knife sharpening, the splitter produced two posts of 275 and 212 characters, including the \" (1/2)\" and \" (2/2)\" suffixes. It reserves 8 characters for that numbering and splits only between words, but it ignores sentences: post 1 ends \"until you feel a burr along the\" and post 2 starts \"whole edge.\" That's exactly the kind of cut to fix by hand. The splitter counts characters the same way as our other counters, so an emoji counts as one: 100 knife emoji separated by spaces (199 characters) stay in a single post of 205 characters including \" (1/1)\". X's own counting may differ, so check the count in the app."
      ),
      h(
        "Trim the supporting detail"
      ),
      p(
        "An article can back a point with three examples; in a thread each extra post is another reason to stop reading. Keep the strongest example per point (our judgment)."
      ),
      h(
        "Common mistakes"
      ),
      p(
        "Posting the splitter's output without editing it. Leaving a cut in the middle of a sentence. Treating 280 as a verified limit."
      ),
    ],
  },
  {
    slug: "pinterest-seo-vs-google-seo",
    title: "Why Pinterest SEO Works Differently Than Google SEO",
    description:
      "Pinterest's help pages explain how Pin titles and descriptions are used. What they say, what isn't documented, and how to check a Pin before posting.",
    category: "Social Media Tools",
    publishedAt: "2026-08-03",
    readTime: "2 min read",
    relatedTool: { href: "/tools/pinterest-pin-checker", label: "Pinterest Pin Description Checker" },
    content: [
      p(
        "Pinterest documents its own text fields: titles of up to 100 characters and descriptions of up to 800, with descriptions hidden in feeds but used by its algorithm for relevance. Those details, not general web SEO habits, should shape how you write a Pin."
      ),
      h(
        "What Pinterest documents"
      ),
      p(
        "From Pinterest help, [Review Pin specs](https://help.pinterest.com/en/article/review-pin-specs) (retrieved 2 November 2026): titles are \"100 characters max\", and for descriptions you can \"Enter up to 800 characters.\" The page notes that \"Descriptions do not appear when viewing the Pin in the home feed or search feed\" and that \"Descriptions are used by our algorithm to determine relevance for delivery.\""
      ),
      p(
        "Pinterest's [ad specs page](https://help.pinterest.com/en/business/article/pinterest-product-specs) adds, for titles: \"Depending on the device, the first 40 characters may show in people's feeds,\" and for Chinese, Japanese, Korean, Arabic and other double-byte languages, \"only the first 30 characters will show.\" It recommends \"entering a description to help get your Pin or ad in front of the right audience.\""
      ),
      h(
        "How that differs from a web page"
      ),
      p(
        "On Pinterest, the description is never shown in the feed yet still informs delivery, and the title may be cut to about 40 characters in feeds. So put the most descriptive words at the start of the title, and write the description to say what the Pin is and who it's for, rather than as visible copy. That comparison is our judgment, built on the quotes above."
      ),
      h(
        "Worked example"
      ),
      p(
        "In our [Pinterest Pin Checker](/tools/pinterest-pin-checker), the title \"Whetstone Knife Sharpening for Beginners: Angles, Grits and a Simple Coin Trick\" is 79 characters, and its first 40 are exactly \"Whetstone Knife Sharpening for Beginners\", so the part that may show in feeds still describes the Pin. A 218-character description about angles, burrs and stropping passes too; the checker flags descriptions only past the 800 characters Review Pin specs allows."
      ),
      h(
        "What we removed"
      ),
      p(
        "Earlier versions said Pins keep earning traffic for months or years and that board organization helps Pins rank. We couldn't find either claim in Pinterest's help pages, so both are gone."
      ),
      h(
        "Common mistakes"
      ),
      p(
        "Leaving the description empty because it isn't shown in feeds, when Pinterest says it's used for relevance. Putting the key words late in a long title. Assuming a Google SEO tactic carries over without checking Pinterest's own documentation."
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
    readTime: "3 min read",
    relatedTool: { href: "/tools/og-tag-generator", label: "Open Graph Tag Generator" },
    content: [
      p(
        "Usually the page is missing Open Graph tags, or the platform is showing an old cached copy. Add og:title, og:type, og:image and og:url (plus og:description), then use the platform's debugger to re-scrape the URL."
      ),
      h(
        "What the tags are"
      ),
      p(
        "The [Open Graph protocol](https://ogp.me/) defines four required properties: og:title (\"The title of your object as it should appear within the graph\"), og:type, og:image (\"An image URL which should represent your object within the graph\") and og:url (\"The canonical URL of your object\"). og:description is optional: \"A one to two sentence description of your object.\" og:image:width and og:image:height give the image size in pixels, and og:image:alt is \"A description of what is in the image (not a caption).\""
      ),
      h(
        "What the platforms document"
      ),
      p(
        "Facebook: Meta's [webmaster sharing guide](https://developers.facebook.com/docs/sharing/webmasters/) lists og:url, og:title, og:description and og:image as basic tags, and says that without them \"the Facebook Crawler uses internal heuristics to make a best guess about the title, description, and preview image.\" It gives no pixel dimensions there, but advises: \"Specify height and width for your image to ensure that the image loads properly the first time it's shared.\" Accepted og:image:type values are \"image/jpeg, image/gif or image/png.\""
      ),
      p(
        "LinkedIn: its [help page on shared content](https://www.linkedin.com/help/linkedin/answer/a521928) lists og:title, og:image, og:description and og:url, with \"Max file size: 5 MB\", \"Minimum image dimensions: 1200 (w) x 627 (h) pixels\" and \"Recommended ratio: 1.91:1\"."
      ),
      p(
        "X's Cards documentation returned an HTTP 402 error when we tried to fetch it, so we make no claims about X here, and we didn't find official preview documentation for Slack or iMessage."
      ),
      h(
        "Caching: why a fix can look like it failed"
      ),
      p(
        "Meta documents that \"Images are cached based on the URL and won't be updated unless the URL changes,\" so a new image needs a new URL, such as a new file name. Its Sharing Debugger \"will show which meta tags the crawler scrapes as well as any errors or warnings\" and can trigger a fresh scrape. The LinkedIn page we fetched doesn't mention caching, so we don't describe LinkedIn's behavior."
      ),
      h(
        "Worked example"
      ),
      p(
        "Given the title \"Spring Menu\", description \"Twelve new dishes, available from March.\", image https://example.com/og/spring-menu.png, URL https://example.com/spring-menu and site name \"Example Bistro\", our [Open Graph Tag Generator](/tools/og-tag-generator) outputs og:title, og:description, og:image, og:url, og:site_name and og:type (set to website), plus twitter:title, twitter:description, twitter:image and twitter:card (set to summary_large_image). That covers all four required properties. It doesn't output og:image:width, og:image:height or og:image:alt, so add those by hand to follow Meta's first-share advice. To see what a live page exposes, our [OG Preview](/tools/og-preview) tool reads og:title (falling back to the page title), og:description (falling back to the meta description), og:image and og:site_name."
      ),
      h(
        "Common mistakes"
      ),
      p(
        "Replacing an image file but keeping its URL, which Meta says won't refresh the cached image. Using a relative image path: the spec asks for \"an image URL\", and an absolute https URL is the safe choice (our judgment). Adding tags only with JavaScript after the page loads: we found no statement in these docs that crawlers run scripts, so check what the platform's debugger actually sees."
      ),
    ],
  },
  {
    slug: "how-long-should-youtube-description-be",
    title: "How Long Should a YouTube Description Actually Be?",
    description:
      "YouTube allows 5,000 characters in a description. How much shows before \"more\" isn't documented, so put the line and link that matter first.",
    category: "YouTube Tools",
    publishedAt: "2026-08-10",
    readTime: "2 min read",
    relatedTool: {
      href: "/tools/youtube-description-checker",
      label: "YouTube Description Checker",
    },
    content: [
      p(
        "As long as it needs to be, up to YouTube's 5,000-character limit. YouTube doesn't document how much appears before a viewer expands the description, so put the sentence and link that matter most at the very top."
      ),
      h(
        "The documented limit"
      ),
      p(
        "From YouTube Help, [Add video details](https://support.google.com/youtube/answer/57404) (retrieved 2 November 2026): \"Video descriptions have a character limit of 5,000 characters and cannot include invalid characters.\" The page describes the description simply as \"Info that shows below your video.\" Other platforms' limits are in our [character limits reference](/blog/social-media-character-limits-guide)."
      ),
      h(
        "The preview length is approximate"
      ),
      p(
        "Earlier versions of this post said roughly 150 characters show before \"show more\". That figure isn't in YouTube's documentation: treat it as approximate, varying by device and layout. We also removed the claim that the rest of the description helps YouTube understand or rank a video, because we found no YouTube documentation of a ranking effect."
      ),
      h(
        "Worked example"
      ),
      p(
        "Our [YouTube Description Checker](/tools/youtube-description-checker) counts characters against the 5,000 limit and flags the opening against an approximate preview of about 157 characters, which is our heuristic, not a YouTube figure. \"Learn to sharpen a chef's knife on a whetstone in 10 minutes. Free angle guide: https://example.com/angles\" is 106 characters and is marked tight (over 100, under 157). Adding \" Below: chapters, the stones I use, and how to tell when an edge is actually sharp.\" brings it to 189, marked as past the approximate preview, and the checker reports it is \"Within YouTube's official 5,000-character description limit.\" Every preview message carries the label \"approximate, varies by device (not documented by YouTube)\"."
      ),
      h(
        "A structure that works (our judgment)"
      ),
      p(
        "One or two sentences that pitch the video, then the most important link, then everything else: chapters, secondary links, credits and required disclosures. None of this is a YouTube rule; it just puts the most important content where the most people see it."
      ),
      h(
        "Common mistakes"
      ),
      p(
        "Treating 150 or 157 as an exact cut-off. Opening with a block of keywords instead of a sentence a person would read. Pasting long boilerplate into every video until chaptered ones run past 5,000; the checker flags the total."
      ),
    ],
  },
  {
    slug: "utm-parameters-explained",
    title: "UTM Parameters Explained: Source, Medium, and Campaign",
    description:
      "What each UTM parameter means according to Google Analytics Help, which ones to always set, and why inconsistent capitalization splits your reports.",
    category: "SEO & Web Tools",
    publishedAt: "2026-08-10",
    readTime: "2 min read",
    relatedTool: {
      href: "/tools/utm-link-builder",
      label: "UTM Link Builder",
    },
    content: [
      p(
        "UTM parameters are tags added to a link's query string so Google Analytics can attribute a visit to a source, medium and campaign. Google says to always set utm_source, utm_medium and utm_campaign, and that the values are case sensitive."
      ),
      h(
        "The parameters Google Analytics reads"
      ),
      p(
        "From Google Analytics Help, [Collect campaign data with custom URLs](https://support.google.com/analytics/answer/10917952) (retrieved 2 November 2026): utm_source is the \"Referrer, for example: google, newsletter4, billboard\"; utm_medium is the \"Marketing medium, for example: cpc, banner, email\"; utm_campaign is \"Product, slogan, promo code, for example: spring_sale\"; utm_id is the \"Campaign ID\"; utm_term is \"Paid keyword\"; and utm_content is used \"to differentiate creatives.\" The page also lists utm_source_platform, utm_creative_format and utm_marketing_tactic, and notes the last two aren't currently reported in Google Analytics properties."
      ),
      h(
        "Which ones to set"
      ),
      p(
        "The page says that when you add parameters, \"you should always use utm_source, utm_medium, and utm_campaign,\" and warns that \"Missing UTM parameters will result in (not set) values being present in reporting.\" Add utm_term or utm_content when you need to tell keywords or creatives apart."
      ),
      h(
        "Case sensitivity and naming"
      ),
      p(
        "This is documented: \"Parameter values are case sensitive,\" so Google and google count as different values. The best-practice advice is to \"Maintain a strict, case-sensitive naming convention for all fields,\" to \"Use lowercase as a standard practice,\" and to \"Use only one unique utm_source for each distinct platform.\" Keeping a shared sheet of allowed values is our suggestion for teams, not a Google requirement."
      ),
      h(
        "Worked example"
      ),
      p(
        "In our [UTM Link Builder](/tools/utm-link-builder), the URL https://example.com/spring-menu with source newsletter, medium email, campaign spring_sale and content header_button produces https://example.com/spring-menu?utm_source=newsletter&utm_medium=email&utm_campaign=spring_sale&utm_content=header_button. Enter example.com/spring-menu without https:// and the builder returns nothing, because it can't parse that as a full URL."
      ),
      h(
        "Common mistakes, and when not to use UTMs"
      ),
      p(
        "Mixing \"Email\" and \"email\", or \"fb\" and \"facebook\", for the same channel. Leaving out medium or campaign and getting (not set) rows. Tagging links between pages of your own site: in our judgment that credits ordinary navigation to a campaign, so keep UTMs for links placed elsewhere, such as emails, social posts and ads."
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
      "LinkedIn posts can run to 3,000 characters, but only the opening shows before \"see more\". How to write that opening, with a worked example.",
    category: "Social Media Tools",
    publishedAt: "2026-08-10",
    readTime: "2 min read",
    relatedTool: {
      href: "/tools/linkedin-post-formatter",
      label: "LinkedIn Post Formatter",
    },
    content: [
      p(
        "Put your claim, result or question in the first line or two, because that's what people see before deciding to tap \"see more\". LinkedIn allows up to 3,000 characters in a post, but doesn't document how much of it shows before the fold."
      ),
      h(
        "What LinkedIn documents"
      ),
      p(
        "From LinkedIn Help, [Post and share updates](https://www.linkedin.com/help/linkedin/answer/a528176) (retrieved 2 November 2026): \"Posts can contain up to 3,000 characters.\" It adds: \"If your post exceeds 3000 characters, you can instead write an article using LinkedIn's Publishing Platform.\" The page doesn't mention \"see more\" or how much of a post appears in the feed."
      ),
      h(
        "The ~210 figure is approximate"
      ),
      p(
        "The often-quoted 210 characters isn't in any LinkedIn help page we found. Our checker uses it as a rough preview length and labels it \"approximate, varies by device; not documented by LinkedIn\". Line breaks also change what fits, because the preview is a visual space rather than a pure character count (our judgment)."
      ),
      h(
        "Worked example"
      ),
      p(
        "Two openings in our [LinkedIn Post Formatter](/tools/linkedin-post-formatter): \"We cut our onboarding from 14 days to 3. Here's the one change that did it, and the two we tried first that didn't.\" is 115 characters. \"Last week I was reflecting on something that has been on my mind for a while now, and I wanted to share a few thoughts about how our team has been approaching onboarding over the past year.\" is 189. Both fall inside the approximate preview, so the checker marks both good. The count can't tell them apart; only the first gives a reader a reason to tap. A 3,001-character post gets \"Over LinkedIn's 3,000-character post limit.\""
      ),
      h(
        "Common mistakes"
      ),
      p(
        "Opening with scene-setting instead of the point. Treating 210 as an exact cut-off. Squeezing a piece past 3,000 characters when it would work better as a LinkedIn article, as the help page suggests."
      ),
    ],
  },
  {
    slug: "what-makes-a-good-social-bio",
    title: "What Makes a Good Social Media Bio",
    description:
      "Bio limits vary by platform and change over time, so check them in the app. What a short bio needs to say, with a worked example and common mistakes.",
    category: "Social Media Tools",
    publishedAt: "2026-08-10",
    readTime: "2 min read",
    relatedTool: {
      href: "/tools/bio-character-counter",
      label: "Bio Character Counter",
    },
    content: [
      p(
        "A good bio tells a stranger what they'll get by following you, in words specific enough to picture. Bio limits differ by platform and we couldn't verify them on official pages, so check the limit in each app and write the shortest version first."
      ),
      h(
        "Why we don't quote bio limits"
      ),
      p(
        "Bio figures for Instagram, TikTok, X and Threads circulate widely, but we couldn't confirm any of them on an official help page on 2 November 2026: the Instagram help pages we tried loaded without their content, X's help center returned an HTTP 403 error, and we found no TikTok page that states a bio limit. Our [character limits reference](/blog/social-media-character-limits-guide) lists the limits we could verify. To find a bio limit, paste a long draft into the bio field in the app and see where it stops."
      ),
      h(
        "What earns a follow"
      ),
      p(
        "This is our judgment, not platform guidance: a bio that lists titles answers \"who are you?\", while a visitor is asking \"what will I get?\". A concrete promise (topic, format, how often) does more than a label. \"Daily budgeting tips for freelancers\" tells a visitor more than \"Finance enthusiast | Entrepreneur\"."
      ),
      h(
        "Worked example"
      ),
      p(
        "In our [Bio Character Counter](/tools/bio-character-counter), \"Finance enthusiast | Entrepreneur\" is 33 characters. \"Daily budgeting tips for freelancers. New video every Tuesday 📅\" is 63 characters, while a plain JavaScript .length count gives 64, because the emoji takes two code units. The counter shows a bar for each platform, but every limit in it is labeled \"commonly cited, check in the app\", because none is verified. Use it to compare drafts, not to confirm a limit."
      ),
      h(
        "Write the short version first"
      ),
      p(
        "Because limits differ, write the bio for the platform where the app gives you the least room, then expand where there's more. Starting tight forces you to choose the one thing that matters. That's a writing habit, not a platform rule."
      ),
      h(
        "Common mistakes"
      ),
      p(
        "Copying a limit from a blog post, including older versions of this one, instead of checking the app. Listing credentials with no promise. Never revisiting the bio as the account changes. Trusting any counter, ours included, when you're near a limit: emoji and combined characters may be counted differently by the app."
      ),
    ],
  },
  {
    slug: "youtube-channel-handle-vs-id",
    title: "YouTube Channel Handle vs. Channel ID: What's the Difference?",
    description:
      "A handle is the readable @name that becomes a channel's URL and can be changed; the channel ID is what YouTube and its API use to identify the channel.",
    category: "YouTube Tools",
    publishedAt: "2026-08-10",
    readTime: "3 min read",
    relatedTool: {
      href: "/tools/youtube-channel-id-finder",
      label: "YouTube Channel ID Finder",
    },
    content: [
      p(
        "A handle like @youtubecreators is the short, readable name people see, and it doubles as the channel's URL. The channel ID is the identifier YouTube's systems and Data API use. Use the handle in links people read; store the channel ID in anything that has to keep pointing at the same channel."
      ),
      h(
        "What YouTube says a handle is"
      ),
      p(
        "From YouTube Help, [Learn about YouTube handles](https://support.google.com/youtube/answer/11585688) (retrieved 2 November 2026): \"Handles are short and unique channel identifiers that make it easier for you to find and connect with creators on Youtube.\" It adds: \"Your handle will also automatically become the new YouTube URL for your channel,\" giving the example youtube.com/@youtubecreators, and notes that \"Handles aren't case-sensitive.\""
      ),
      h(
        "Handles can change"
      ),
      p(
        "YouTube Help's [Change, view, or hide your handle](https://support.google.com/youtube/answer/15920820) (retrieved 2 November 2026) says: \"You can change your handle twice within a 14-day period.\" After a change, \"we hold your previous handle for 14 days in case you'd like to switch back.\" The handles page also says: \"YouTube reserves the right to change, reclaim, or remove a handle at any time.\" So a handle-based link can stop pointing where you expect."
      ),
      h(
        "What the channel ID is"
      ),
      p(
        "YouTube Help's [Find your YouTube user & channel IDs](https://support.google.com/youtube/answer/3250431) (retrieved 2 November 2026) says: \"Each YouTube channel has a unique user ID and channel ID,\" and \"You can see your channel's user and channel IDs in your advanced account settings on a computer or mobile browser.\" The Data API's [channels resource](https://developers.google.com/youtube/v3/docs/channels) describes the id field as \"The ID that YouTube uses to uniquely identify the channel.\""
      ),
      p(
        "We found no official page that states the ID's exact format or promises it never changes. Channel IDs we've seen start with \"UC\", and our finder recognizes \"UC\" followed by 22 characters; that's our pattern, not a documented rule."
      ),
      h(
        "Which one to use"
      ),
      p(
        "Our judgment: use the handle URL where people read or type it, such as a bio, a video description or a slide. Use the channel ID in API calls, databases and integrations, because the handle can change and the ID is what the API identifies the channel by."
      ),
      h(
        "Worked example"
      ),
      p(
        "Our [YouTube Channel ID Finder](/tools/youtube-channel-id-finder) reads the identifier out of what you paste. https://www.youtube.com/@youtubecreators and a bare @youtubecreators both come back as the handle @youtubecreators. youtube.com/@YouTubeCreators/videos comes back as @YouTubeCreators, which YouTube treats as the same handle since handles aren't case-sensitive. A /c/YouTubeCreators link is reported as a custom URL and a /user/ link as a legacy username. The tool doesn't look up the ID behind a handle; for your own channel, copy it from Advanced settings as the help page describes."
      ),
      h(
        "Common mistakes"
      ),
      p(
        "Hardcoding a handle URL into an integration. Assuming an old handle will keep redirecting after a change. Treating the display name as an identifier. Guessing a channel ID's format instead of copying it from Advanced settings or the API."
      ),
    ],
  },
  {
    slug: "reading-time-vs-word-count",
    title: "Reading Time vs. Word Count: Which Should You Actually Track?",
    description:
      "Reading time is word count divided by an assumed reading speed. How Medium and our calculator compute it, and when each number is the right target.",
    category: "Text Tools",
    publishedAt: "2026-08-10",
    readTime: "2 min read",
    relatedTool: {
      href: "/tools/reading-time-calculator",
      label: "Reading Time Calculator",
    },
    content: [
      p(
        "Track word count when the brief is about length, and reading time only when the constraint is duration. Most reading-time figures, ours included, are just the word count divided by an assumed speed, so they tell you nothing about how dense or difficult the writing is."
      ),
      h(
        "How reading time is calculated"
      ),
      p(
        "Medium documents its method in [Read time](https://help.medium.com/hc/en-us/articles/214991667-Read-time) (retrieved 2 November 2026): \"Read time is based on the average reading speed of an adult (roughly 265 WPM). We take the total word count of a post and translate it into minutes, with an adjustment made for images.\" For Chinese, Japanese and Korean posts, it's \"a function of number of characters (500 characters/min)\"."
      ),
      p(
        "Our [Reading Time Calculator](/tools/reading-time-calculator) defaults to 200 words per minute, with 150 and 250 as alternatives. That 200 is our own assumption, not a figure from an official source, and the tool doesn't adjust for images, sentence length or vocabulary. Two 1,000-word pieces get the same reading time however hard they are to read."
      ),
      h(
        "Worked example"
      ),
      p(
        "For 1,000 words the calculator shows 5 min at 200 wpm, 6 min 40 sec at 150 and 4 min at 250. At Medium's roughly 265 wpm the same text is about 3.8 minutes. For 1,234 words: 6 min 10 sec at 200 wpm. The assumed speed changes the answer by minutes, which is why a reading time without its speed isn't a meaningful target."
      ),
      h(
        "When each one is the right target"
      ),
      p(
        "Our judgment: word count fits publications with length limits, assignments and briefs written in words, where the number itself is the constraint. A duration fits scripts and anything that fills a time slot, but there it's speaking time that matters, so time a read-aloud of the script rather than relying on a reading-speed estimate."
      ),
      h(
        "Common mistakes"
      ),
      p(
        "Quoting a reading time without saying what speed it assumes. Comparing reading times from different sites, which may use different speeds. Treating reading time as a measure of difficulty. Using a silent-reading estimate to time a video script."
      ),
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}