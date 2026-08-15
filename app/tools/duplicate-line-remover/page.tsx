import type { Metadata } from "next";
import DuplicateLineRemover from "@/components/calculators/DuplicateLineRemover";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Duplicate Line Remover — Clean Up Lists Instantly",
  description:
    "Remove repeated lines from any list while keeping the original order and the first occurrence.",
  alternates: { canonical: "/tools/duplicate-line-remover" },
  twitter: {
    card: "summary_large_image",
    title: "Duplicate Line Remover — Clean Up Lists Instantly",
    description: "Remove repeated lines from any list while keeping the original order and the first occurrence.",
  },
};

const faqItems = [
  {
    question: "Does this preserve the original order?",
    answer:
      "Yes — the first occurrence of each line is kept in its original position; only later duplicates are removed.",
  },
  {
    question: "What counts as a duplicate — exact match or similar text?",
    answer:
      "Only exact matches are removed (case-insensitive by default, or exact case if you enable case-sensitive comparison). Lines that are similar but not identical are kept as separate entries.",
  },
];

export default function DuplicateLineRemoverPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="Text Tools"
        categoryHref="/categories/text-tools"
        title="Duplicate Line Remover"
      >
        Paste a list of keywords, tags, or lines and get a cleaned-up
          version with duplicates removed.
      </ToolPageHeader>

      <div className="mt-10">
        <DuplicateLineRemover />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="text-tools" currentSlug="duplicate-line-remover" />
      </div>
    </div>
  );
}
