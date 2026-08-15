import type { Metadata } from "next";
import LoremIpsumGenerator from "@/components/calculators/LoremIpsumGenerator";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator — Placeholder Text for Mockups",
  description:
    "Generate classic Lorem Ipsum placeholder text with adjustable paragraph and sentence counts.",
  alternates: { canonical: "/tools/lorem-ipsum-generator" },
  twitter: {
    card: "summary_large_image",
    title: "Lorem Ipsum Generator — Placeholder Text for Mockups",
    description: "Generate classic Lorem Ipsum placeholder text with adjustable paragraph and sentence counts.",
  },
};

const faqItems = [
  {
    question: "What is Lorem Ipsum, and why is it used?",
    answer:
      "Lorem Ipsum is scrambled Latin text that's been used as placeholder copy in design and printing since the 16th century. Designers use it because it looks like natural language at a glance without distracting from the layout with readable, meaningful content.",
  },
  {
    question: "Can I use this text in a real published page?",
    answer:
      "It's meant as placeholder text for mockups and layout testing, not as final content — replace it with real copy before publishing.",
  },
];

export default function LoremIpsumGeneratorPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="Text Tools"
        categoryHref="/categories/text-tools"
        title="Lorem Ipsum Generator"
      >
        Generate placeholder text for mockups, wireframes, and layout
          testing.
      </ToolPageHeader>

      <div className="mt-10">
        <LoremIpsumGenerator />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="text-tools" currentSlug="lorem-ipsum-generator" />
      </div>
    </div>
  );
}
