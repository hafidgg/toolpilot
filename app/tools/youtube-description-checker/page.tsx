import type { Metadata } from "next";
import YoutubeDescriptionChecker from "@/components/calculators/YoutubeDescriptionChecker";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "YouTube Description Checker — Preview & Character Limit",
  description:
    "Check your YouTube description against the preview cutoff before \"show more\" and the 5,000-character total limit.",
  alternates: { canonical: "/tools/youtube-description-checker" },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Description Checker — Preview & Character Limit",
    description: "Check your YouTube description against the preview cutoff before \"show more\" and the 5,000-character total limit.",
  },
};

const faqItems = [
  {
    question: "Why does the preview cut off so early?",
    answer:
      "YouTube shows roughly the first 150–157 characters of a description before folding the rest behind a \"show more\" link. Put your most important information — links, key details — in that first stretch.",
  },
  {
    question: "What's the actual maximum description length?",
    answer:
      "YouTube allows up to 5,000 characters in a video description, far more than what's visible without clicking \"show more.\"",
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
        See exactly how much of your description shows before viewers have
          to click &quot;show more.&quot;
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
