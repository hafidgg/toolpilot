import type { Metadata } from "next";
import YoutubeDescriptionChecker from "@/components/calculators/YoutubeDescriptionChecker";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "YouTube Description Checker — Preview & Character Limit",
  description:
    "Check your YouTube description against the official 5,000-character limit and an approximate preview before \"show more\".",
  alternates: { canonical: "/tools/youtube-description-checker" },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Description Checker — Preview & Character Limit",
    description: "Check your YouTube description against the official 5,000-character limit and an approximate preview before \"show more\".",
  },
};

const faqItems = [
  {
    question: "How much of a description shows before \"show more\"?",
    answer:
      "YouTube doesn't document a figure. This checker uses about 157 characters as an approximate preview, which varies by device. Put your most important information — links, key details — at the start either way.",
  },
  {
    question: "What's the actual maximum description length?",
    answer:
      "5,000 characters. YouTube Help states that \"Video descriptions have a character limit of 5,000 characters\", and the checker flags anything longer.",
  },
];

export default function YoutubeDescriptionCheckerPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="YouTube Tools"
        categoryHref="/categories/youtube-tools"
        title="YouTube Description Checker"
      >
        Check your description against YouTube&apos;s 5,000-character limit
          and an approximate preview before &quot;show more&quot; (varies by device).
      </ToolPageHeader>

      <div className="mt-10">
        <YoutubeDescriptionChecker />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="youtube-tools" currentSlug="youtube-description-checker" />
      </div>
    </div>
  );
}
