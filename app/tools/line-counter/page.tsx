import type { Metadata } from "next";
import LineCounter from "@/components/calculators/LineCounter";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Line Counter — Count Lines in Text or Code",
  description:
    "Count total, non-empty, and blank lines in any block of text, list, or code snippet.",
  alternates: { canonical: "/tools/line-counter" },
  twitter: {
    card: "summary_large_image",
    title: "Line Counter — Count Lines in Text or Code",
    description: "Count total, non-empty, and blank lines in any block of text, list, or code snippet.",
  },
};

const faqItems = [
  {
    question: "Does this count wrapped lines or only actual line breaks?",
    answer:
      "Only actual line breaks (new lines) count — visually wrapped text that doesn't contain a line break character is counted as a single line, regardless of how many lines it takes up on screen.",
  },
  {
    question: "What counts as a blank line?",
    answer:
      "Any line that contains only whitespace, or nothing at all, is counted as blank. Lines with visible characters, even a single one, count as non-empty.",
  },
];

export default function LineCounterPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="Text Tools"
        categoryHref="/categories/text-tools"
        title="Line Counter"
      >
        Paste a list, script, or block of code to count total lines,
          non-empty lines, and blank lines.
      </ToolPageHeader>

      <div className="mt-10">
        <LineCounter />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="text-tools" currentSlug="line-counter" />
      </div>
    </div>
  );
}
