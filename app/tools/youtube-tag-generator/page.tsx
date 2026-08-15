import type { Metadata } from "next";
import YoutubeTagGenerator from "@/components/calculators/YoutubeTagGenerator";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "YouTube Tag Generator — Stay Under the 500-Character Limit",
  description:
    "Turn a list of keywords into a clean, comma-separated YouTube tag list that fits within the 500-character limit.",
  alternates: { canonical: "/tools/youtube-tag-generator" },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Tag Generator — Stay Under the 500-Character Limit",
    description: "Turn a list of keywords into a clean, comma-separated YouTube tag list that fits within the 500-character limit.",
  },
};

const faqItems = [
  {
    question: "Do YouTube tags still matter for ranking?",
    answer:
      "YouTube has said tags play a minor role compared to titles, descriptions, and thumbnails. They mainly help with misspellings of your main keywords and give minor context to the algorithm — they're not a substitute for a strong title and description.",
  },
  {
    question: "How is the 500-character limit counted?",
    answer:
      "YouTube counts the total length of all your tags combined, including the commas that separate them. This tool accounts for that when deciding which tags fit.",
  },
];

export default function YoutubeTagGeneratorPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="YouTube Tools"
        categoryHref="/categories/youtube-tools"
        title="YouTube Tag Generator"
      >
        Paste your keyword ideas and get a clean, ready-to-paste tag list
          that stays under YouTube&apos;s 500-character limit.
      </ToolPageHeader>

      <div className="mt-10">
        <YoutubeTagGenerator />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="youtube-tools" currentSlug="youtube-tag-generator" />
      </div>
    </div>
  );
}
