import type { Metadata } from "next";
import TextDiffChecker from "@/components/calculators/TextDiffChecker";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Text Diff Checker — Compare Two Blocks of Text",
  description:
    "Paste two versions of a text to see exactly what was added, removed, or left unchanged, line by line.",
  alternates: { canonical: "/tools/text-diff-checker" },
  twitter: {
    card: "summary_large_image",
    title: "Text Diff Checker — Compare Two Blocks of Text",
    description: "Paste two versions of a text to see exactly what was added, removed, or left unchanged, line by line.",
  },
};

const faqItems = [
  {
    question: "Does this compare word-by-word or line-by-line?",
    answer:
      "This tool compares line by line, which works well for scripts, captions, and short drafts. If a single line changes even slightly, the whole line is shown as changed rather than highlighting the specific word.",
  },
  {
    question: "Is my text uploaded anywhere?",
    answer:
      "No — the comparison runs entirely in your browser using JavaScript. Nothing is sent to a server.",
  },
];

export default function TextDiffCheckerPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="Text Tools"
        categoryHref="/categories/text-tools"
        title="Text Diff Checker"
      >
        Paste two versions of a text side by side to see exactly what
          changed between them.
      </ToolPageHeader>

      <div className="mt-10">
        <TextDiffChecker />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="text-tools" currentSlug="text-diff-checker" />
      </div>
    </div>
  );
}
