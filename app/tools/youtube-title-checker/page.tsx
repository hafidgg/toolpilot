import type { Metadata } from "next";
import YoutubeTitleChecker from "@/components/calculators/YoutubeTitleChecker";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";
import RelatedGuide from "@/components/RelatedGuide";
import HowToUse from "@/components/HowToUse";
import Examples from "@/components/Examples";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "YouTube Title Length Checker — Avoid Truncation",
  description:
    "Check your YouTube title against the official 100-character limit and a 60-character rule of thumb, with a live search-result preview.",
  alternates: { canonical: "/tools/youtube-title-checker" },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Title Length Checker — Avoid Truncation",
    description: "Check your YouTube title against the official 100-character limit and a 60-character rule of thumb, with a live search-result preview.",
  },
};

const howToSteps = [
  { text: "Type your draft title into the box." },
  { text: "Watch the character count and color indicator update as you type." },
  { text: "Check the search-result preview to see how it'll actually appear." },
  { text: "Amber or red is our rule of thumb for long titles; a red \"over limit\" warning means it exceeds YouTube's 100-character limit." },
];

const exampleItems = [
  {
    title: "A title that fits safely",
    input: "How I Edited This Video in 10 Minutes",
    output: "38 characters — green, short by our rule of thumb.",
  },
  {
    title: "A long title",
    input: "How I Edited This Entire YouTube Video in Under 10 Minutes Using Only Free Tools",
    output: "82 characters — red: within YouTube's 100-character limit, but long by our rule of thumb.",
  },
];

const faqItems = [
  {
    question: "Is this YouTube title checker free?",
    answer:
      "Yes, completely free with no signup and no limit on how many titles you can check.",
  },
  {
    question: "Do I need a YouTube account to use this?",
    answer:
      "No — this tool doesn't connect to YouTube or your channel at all. You just type a title and see the preview.",
  },
  {
    question: "Does it work on mobile?",
    answer:
      "Yes, it works the same way on a phone browser as on desktop.",
  },
  {
    question: "Is my title stored or sent anywhere?",
    answer:
      "No. Everything is calculated in your browser using JavaScript — nothing you type is transmitted to a server.",
  },
  {
    question: "What character limit does this check against?",
    answer:
      "YouTube's official limit is 100 characters (YouTube Help: \"Video titles have a character limit of 100 characters\"), and titles over it are flagged. The 60- and 70-character tiers are a rule of thumb: YouTube doesn't document how much of a title shows in search, suggestions or on mobile.",
  },
];

export default function YoutubeTitleCheckerPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="YouTube Tools"
        categoryHref="/categories/youtube-tools"
        title="YouTube Title Length Checker"
      >
        Type your title to check it against YouTube&apos;s 100-character
          limit and a rule of thumb for length, with a live preview.
      </ToolPageHeader>

      <div className="mt-10">
        <YoutubeTitleChecker />
      </div>

      <article className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">What is a YouTube title checker?</h2>
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <p>
            A YouTube title checker counts the characters in your draft title
            and checks it against YouTube&apos;s official 100-character limit.
            It also applies a rule of thumb for length, because how much of
            a title is displayed isn&apos;t documented by YouTube.
          </p>
        </div>

        <h2 className="h2-section mb-4 mt-10">
          About the 60-character rule of thumb
        </h2>
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <p>
            YouTube Help states that &quot;Video titles have a character limit
            of 100 characters&quot;. It doesn&apos;t say how many of those
            characters appear in search results, suggested videos or on a
            phone, and that likely varies by device and placement.
          </p>
          <p>
            Short titles tend to be safer, so this checker uses a rule of
            thumb: green up to 60 characters, amber from 61 to 70, red above
            70. Those tiers are our heuristic, not YouTube&apos;s. A red
            &quot;over limit&quot; warning is different: it means the title
            is longer than YouTube&apos;s official 100-character limit.
            Whatever the length, put the words that explain the video first.
          </p>
        </div>
      </article>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">How to use the title checker</h2>
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
        <h2 className="h2-section mb-4">Limitations</h2>
        <div className="space-y-3 text-sm text-muted leading-relaxed">
          <p>Only the 100-character limit is official. The 60- and 70-character tiers are a rule of thumb, not a YouTube specification; how much of a title shows varies by device and placement and isn&apos;t documented by YouTube. The preview box is an illustration, not a reproduction of YouTube&apos;s layout.</p>
        </div>
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="youtube-tools" currentSlug="youtube-title-checker" />
      </div>
      <div className="mt-6 max-w-2xl">
        <RelatedGuide href="/blog/youtube-title-length-guide" title="YouTube Title Length Limit: 100 Characters" type="article" />
      </div>
    </div>
  );
}
