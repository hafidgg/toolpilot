import type { Metadata } from "next";
import WordFrequencyCounter from "@/components/calculators/WordFrequencyCounter";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Word Frequency Counter — Find Your Most Repeated Words",
  description:
    "See which words appear most often in your text, with common stopwords like 'the' and 'and' optionally excluded.",
  alternates: { canonical: "/tools/word-frequency-counter" },
  twitter: {
    card: "summary_large_image",
    title: "Word Frequency Counter — Find Your Most Repeated Words",
    description: "See which words appear most often in your text, with common stopwords like 'the' and 'and' optionally excluded.",
  },
};

const faqItems = [
  {
    question: "What are stopwords, and why exclude them?",
    answer:
      "Stopwords are extremely common words like \"the,\" \"and,\" or \"is\" that appear frequently in any text but carry little topical meaning. Excluding them surfaces the words that actually characterize your content.",
  },
  {
    question: "How is this different from a keyword density checker?",
    answer:
      "Keyword density checks how often one specific keyword you choose appears. This tool works the other way around — it surfaces the most frequent words automatically, without you specifying one in advance.",
  },
];

export default function WordFrequencyCounterPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="Text Tools"
        categoryHref="/categories/text-tools"
        title="Word Frequency Counter"
      >
        Paste your text to see which words repeat most often — useful for
          spotting overused words or checking topical focus.
      </ToolPageHeader>

      <div className="mt-10">
        <WordFrequencyCounter />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="text-tools" currentSlug="word-frequency-counter" />
      </div>
    </div>
  );
}
