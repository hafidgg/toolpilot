import type { Metadata } from "next";
import PinterestPinChecker from "@/components/calculators/PinterestPinChecker";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Pinterest Pin Description Checker",
  description:
    "Check your Pinterest pin title and description against Pinterest's 100 and 500-character limits.",
  alternates: { canonical: "/tools/pinterest-pin-checker" },
  twitter: {
    card: "summary_large_image",
    title: "Pinterest Pin Description Checker",
    description: "Check your Pinterest pin title and description against Pinterest's 100 and 500-character limits.",
  },
};

const faqItems = [
  {
    question: "What are Pinterest's actual limits?",
    answer:
      "Pin titles allow up to 100 characters, and pin descriptions allow up to 500 characters.",
  },
  {
    question: "Does the description length affect Pinterest SEO?",
    answer:
      "Pinterest's search relies heavily on text — a well-written, keyword-relevant description helps your pin surface in search and related-pin recommendations, so it's worth using more of the available space rather than leaving it minimal.",
  },
];

export default function PinterestPinCheckerPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="Social Media Tools"
        categoryHref="/categories/social-media-tools"
        title="Pinterest Pin Description Checker"
      >
        Check your pin title and description against Pinterest&apos;s
          character limits before you publish.
      </ToolPageHeader>

      <div className="mt-10">
        <PinterestPinChecker />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="social-media-tools" currentSlug="pinterest-pin-checker" />
      </div>
    </div>
  );
}
