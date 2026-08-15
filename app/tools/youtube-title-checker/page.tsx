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
    "Check your YouTube title length against search and mobile truncation limits, with a live search-result preview.",
  alternates: { canonical: "/tools/youtube-title-checker" },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Title Length Checker — Avoid Truncation",
    description: "Check your YouTube title length against search and mobile truncation limits, with a live search-result preview.",
  },
};

const howToSteps = [
  { text: "Type your draft title into the box." },
  { text: "Watch the character count and color indicator update as you type." },
  { text: "Check the search-result preview to see how it'll actually appear." },
  { text: "Rewrite if the indicator turns amber or red — that means truncation is likely." },
];

const exampleItems = [
  {
    title: "A title that fits safely",
    input: "How I Edited This Video in 10 Minutes",
    output: "38 characters — green, fits in full everywhere.",
  },
  {
    title: "A title in the risk zone",
    input: "How I Edited This Entire YouTube Video in Under 10 Minutes Using Only Free Tools",
    output: "82 characters — red, will visibly cut off in most placements.",
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
      "YouTube allows up to 100 characters in a title field, but this tool flags the more practical ~60-character threshold where search and suggested-video placements actually start truncating.",
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
        Type your title and see a live preview of how it&apos;ll appear in
          search results, with a warning before it gets cut off.
      </ToolPageHeader>

      <div className="mt-10">
        <YoutubeTitleChecker />
      </div>

      <article className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">What is a YouTube title checker?</h2>
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <p>
            A YouTube title checker measures your draft title against the
            character limits that actually govern how much of it appears in
            search results and suggested videos — not the 100-character
            field limit YouTube technically allows, but the shorter,
            practical threshold before truncation kicks in.
          </p>
        </div>

        <h2 className="h2-section mb-4 mt-10">
          Where the 60-character rule comes from
        </h2>
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <p>
            YouTube allows titles up to 100 characters, but search results
            and suggested-video panels don&apos;t display anywhere near that
            much. Desktop search results generally show around 60 to 70
            characters before truncating with an ellipsis; on mobile,
            where the majority of watch time happens, that shrinks further.
          </p>
          <p>
            The practical implication is that anything after roughly
            character 60 is a gamble — it might show, or it might get cut,
            depending on the viewer&apos;s device and where your video
            appears (search versus suggested versus a playlist). Front-load
            the part of your title that actually explains the video; treat
            anything past 60 characters as a bonus that some viewers will
            see and others won&apos;t.
          </p>
          <p>
            This checker mirrors that threshold: green means you&apos;re safely
            within what most placements display in full, amber means
            you&apos;re in the zone where mobile truncation becomes likely,
            and red means the title will visibly cut off in most placements.
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
          <p>The 60–70 character truncation thresholds shown here are based on commonly observed YouTube behavior, not an officially published YouTube specification. Actual truncation can vary slightly by device, placement, and font rendering.</p>
        </div>
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="youtube-tools" currentSlug="youtube-title-checker" />
      </div>
      <div className="mt-6 max-w-2xl">
        <RelatedGuide href="/blog/youtube-title-length-guide" title="The Real YouTube Title Length Limit (It's Not 100 Characters)" type="article" />
      </div>
    </div>
  );
}
