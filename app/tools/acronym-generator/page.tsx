import type { Metadata } from "next";
import AcronymGenerator from "@/components/calculators/AcronymGenerator";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Acronym Generator — Turn a Phrase into an Acronym",
  description:
    "Generate an acronym from any phrase by taking the first letter of each word.",
  alternates: { canonical: "/tools/acronym-generator" },
  twitter: {
    card: "summary_large_image",
    title: "Acronym Generator — Turn a Phrase into an Acronym",
    description: "Generate an acronym from any phrase by taking the first letter of each word.",
  },
};

const faqItems = [
  {
    question: "Does this skip small words like 'of' or 'the'?",
    answer:
      "No — every word's first letter is included, matching how most technical and organizational acronyms are formed. If you want a specific word excluded, just remove it from the input phrase.",
  },
];

export default function AcronymGeneratorPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="Text Tools"
        categoryHref="/categories/text-tools"
        title="Acronym Generator"
      >
        Type a phrase and get its acronym from the first letter of each
          word.
      </ToolPageHeader>

      <div className="mt-10">
        <AcronymGenerator />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="text-tools" currentSlug="acronym-generator" />
      </div>
    </div>
  );
}
