import type { Metadata } from "next";
import FaqSchemaGenerator from "@/components/calculators/FaqSchemaGenerator";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "FAQ Schema Generator — Valid FAQPage JSON-LD",
  description:
    "Turn a list of questions and answers into valid FAQPage structured data (JSON-LD) ready to paste into your page.",
  alternates: { canonical: "/tools/faq-schema-generator" },
  twitter: {
    card: "summary_large_image",
    title: "FAQ Schema Generator — Valid FAQPage JSON-LD",
    description: "Turn a list of questions and answers into valid FAQPage structured data (JSON-LD) ready to paste into your page.",
  },
};

const faqItems = [
  {
    question: "Where does this JSON-LD code go?",
    answer:
      "Paste it inside a <script type=\"application/ld+json\"> tag in your page's HTML head or body.",
  },
  {
    question: "Does FAQ schema guarantee a rich result in Google?",
    answer:
      "No — Google decides whether to display FAQ rich results based on its own quality assessment, and has scaled back which sites qualify over time. Valid markup is necessary but not sufficient for a rich result to appear.",
  },
];

export default function FaqSchemaGeneratorPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="SEO & Web Tools"
        categoryHref="/categories/seo-web-tools"
        title="FAQ Schema Generator"
      >
        Add your questions and answers to generate valid FAQPage JSON-LD
          structured data.
      </ToolPageHeader>

      <div className="mt-10">
        <FaqSchemaGenerator />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="seo-web-tools" currentSlug="faq-schema-generator" />
      </div>
    </div>
  );
}
