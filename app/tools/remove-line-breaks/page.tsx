import type { Metadata } from "next";
import RemoveLineBreaks from "@/components/calculators/RemoveLineBreaks";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Remove Line Breaks — Merge Text into One Block",
  description:
    "Remove line breaks from any text, merging it into a single block or cleaning up paragraph spacing.",
  alternates: { canonical: "/tools/remove-line-breaks" },
  twitter: {
    card: "summary_large_image",
    title: "Remove Line Breaks — Merge Text into One Block",
    description: "Remove line breaks from any text, merging it into a single block or cleaning up paragraph spacing.",
  },
};

const faqItems = [
  {
    question: "When would I need to remove line breaks?",
    answer:
      "Common cases: pasting text copied from a PDF (which often breaks every line), cleaning up text before pasting into a form field that doesn't support multi-line input, or preparing text for a caption that reads as one flowing paragraph.",
  },
  {
    question: "What's the difference between the two modes?",
    answer:
      "\"Merge into one block\" removes every line break, including paragraph breaks. \"Keep paragraph breaks\" only removes line breaks within a paragraph, preserving the blank-line gaps between separate paragraphs.",
  },
];

export default function RemoveLineBreaksPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="Text Tools"
        categoryHref="/categories/text-tools"
        title="Remove Line Breaks"
      >
        Paste text with unwanted line breaks and get a clean, merged
          version back.
      </ToolPageHeader>

      <div className="mt-10">
        <RemoveLineBreaks />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="text-tools" currentSlug="remove-line-breaks" />
      </div>
    </div>
  );
}
