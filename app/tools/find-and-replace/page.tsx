import type { Metadata } from "next";
import FindAndReplaceTool from "@/components/calculators/FindAndReplaceTool";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Find and Replace Tool — Batch Text Replacement",
  description:
    "Replace every instance of a word or phrase in a block of text, with case-sensitive and whole-word options.",
  alternates: { canonical: "/tools/find-and-replace" },
  twitter: {
    card: "summary_large_image",
    title: "Find and Replace Tool — Batch Text Replacement",
    description: "Replace every instance of a word or phrase in a block of text, with case-sensitive and whole-word options.",
  },
};

const faqItems = [
  {
    question: "What does 'whole word only' do?",
    answer:
      "It prevents partial matches inside longer words. With it enabled, searching for \"cat\" won't match the \"cat\" inside \"category.\"",
  },
  {
    question: "Can I use this for special characters or punctuation?",
    answer:
      "Yes — it works on plain text matches, including punctuation and symbols, not just whole words.",
  },
];

export default function FindAndReplacePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="Text Tools"
        categoryHref="/categories/text-tools"
        title="Find and Replace Tool"
      >
        Replace every instance of a word or phrase in your text at once,
          with case-sensitive and whole-word matching.
      </ToolPageHeader>

      <div className="mt-10">
        <FindAndReplaceTool />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="text-tools" currentSlug="find-and-replace" />
      </div>
    </div>
  );
}
