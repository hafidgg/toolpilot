import type { Metadata } from "next";
import KeywordDensityChecker from "@/components/calculators/KeywordDensityChecker";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Keyword Density Checker — Check Keyword Usage %",
  description:
    "See how often a keyword or phrase appears in your text as a percentage of total word count.",
  alternates: { canonical: "/tools/keyword-density-checker" },
  twitter: {
    card: "summary_large_image",
    title: "Keyword Density Checker — Check Keyword Usage %",
    description: "See how often a keyword or phrase appears in your text as a percentage of total word count.",
  },
};

const faqItems = [
  {
    question: "Is keyword density still a real ranking factor?",
    answer:
      "Modern search engines rely on semantic understanding far more than raw keyword counts. Density is best used as a sanity check against keyword stuffing, not as a target to optimize toward.",
  },
  {
    question: "What density range is considered natural?",
    answer:
      "There's no official number, but content written naturally around a topic often lands somewhere between 0.5% and 2.5% for its main keyword. Much higher than that tends to read as repetitive.",
  },
];

export default function KeywordDensityCheckerPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="SEO & Web Tools"
        categoryHref="/categories/seo-web-tools"
        title="Keyword Density Checker"
      >
        Paste your content and a target keyword to see how often it
          appears as a percentage of total words.
      </ToolPageHeader>

      <div className="mt-10">
        <KeywordDensityChecker />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="seo-web-tools" currentSlug="keyword-density-checker" />
      </div>
    </div>
  );
}
