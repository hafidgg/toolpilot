import type { Metadata } from "next";
import HashtagFormatter from "@/components/calculators/HashtagFormatter";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";
import RelatedGuide from "@/components/RelatedGuide";
import HowToUse from "@/components/HowToUse";
import Examples from "@/components/Examples";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Hashtag Formatter — Clean, Consistent Hashtags",
  description:
    "Turn keywords or phrases into properly formatted hashtags in lowercase or CamelCase, ready to paste into any caption.",
  alternates: { canonical: "/tools/hashtag-formatter" },
  twitter: {
    card: "summary_large_image",
    title: "Hashtag Formatter — Clean, Consistent Hashtags",
    description: "Turn keywords or phrases into properly formatted hashtags in lowercase or CamelCase, ready to paste into any caption.",
  },
};

const howToSteps = [
  { text: "Paste your keywords or phrases, one per line or separated by commas." },
  { text: "Choose a style: lowercase or CamelCase." },
  { text: "Review the generated hashtags." },
  { text: "Copy all of them at once with the Copy button." },
];

const exampleItems = [
  {
    title: "Lowercase, single words",
    input: "marketing, travel, coffee",
    output: "#marketing #travel #coffee",
  },
  {
    title: "CamelCase, multi-word phrases",
    input: "small business tips, content creator",
    output: "#SmallBusinessTips #ContentCreator",
  },
];

const faqItems = [
  {
    question: "Is this hashtag formatter free?",
    answer:
      "Yes, completely free with no signup and no limit on how many hashtags you can generate.",
  },
  {
    question: "Which style should I use, lowercase or CamelCase?",
    answer:
      "For single-word hashtags, lowercase is the norm. For multi-word hashtags, CamelCase is more readable and more accessible, since screen readers can announce each capitalized word separately.",
  },
  {
    question: "Does it work on mobile?",
    answer:
      "Yes — it works the same way on a phone browser as on desktop.",
  },
  {
    question: "Is my input stored anywhere?",
    answer:
      "No. The formatting happens entirely in your browser using JavaScript — nothing you paste is sent to a server.",
  },
];

export default function HashtagFormatterPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="Social Media Tools"
        categoryHref="/categories/social-media-tools"
        title="Hashtag Formatter"
      >
        Paste a list of keywords or phrases and get clean, correctly
          formatted hashtags back — no stray spaces, no punctuation, no
          manual retyping.
      </ToolPageHeader>

      <div className="mt-10">
        <HashtagFormatter />
      </div>

      <article className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">What is a hashtag formatter?</h2>
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <p>
            A hashtag formatter takes a list of keywords or phrases and
            converts them into properly formatted hashtags — stripping
            spaces and punctuation, and applying either lowercase or
            CamelCase capitalization. Content creators use it to turn
            keyword research into ready-to-paste hashtags without manually
            retyping each one.
          </p>
        </div>

        <h2 className="h2-section mb-4 mt-10">
          CamelCase vs lowercase, and when it matters
        </h2>
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <p>
            A hashtag with more than one word has no spaces internally, which
            means a phrase like &quot;small business tips&quot; becomes
            unreadable as one run-together word unless you capitalize each
            word — #SmallBusinessTips instead of #smallbusinesstips.
            CamelCase formatting matters most for accessibility: screen
            readers can correctly announce each word in a CamelCase hashtag,
            but read an all-lowercase run-on hashtag as a single garbled
            string.
          </p>
          <p>
            Single-word hashtags don&apos;t have this problem, which is why
            lowercase is still the norm for short tags like #marketing or
            #travel. The distinction is really about word count: one word,
            lowercase is fine; multiple words, CamelCase is the more
            accessible and more readable choice.
          </p>
          <p>
            This formatter strips punctuation and extra whitespace
            automatically, so you can paste in messy, comma-separated
            keyword research and get a clean hashtag block back in either
            style, ready to paste directly into your caption.
          </p>
        </div>
      </article>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">How to use the hashtag formatter</h2>
        <HowToUse steps={howToSteps} />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">Examples</h2>
        <Examples items={exampleItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">Frequently asked questions</h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="social-media-tools" currentSlug="hashtag-formatter" />
      </div>
      <div className="mt-6 max-w-2xl">
        <RelatedGuide href="/blog/how-to-write-hashtags-that-work" title="How to Write Hashtags That Actually Get Found" type="article" />
      </div>
    </div>
  );
}
