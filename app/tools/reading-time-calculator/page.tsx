import type { Metadata } from "next";
import ReadingTimeCalculator from "@/components/calculators/ReadingTimeCalculator";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Reading Time Calculator — Estimate Article & Script Length",
  description:
    "Estimate how long an article, blog post, or video script takes to read at different reading speeds.",
  alternates: { canonical: "/tools/reading-time-calculator" },
  twitter: {
    card: "summary_large_image",
    title: "Reading Time Calculator — Estimate Article & Script Length",
    description: "Estimate how long an article, blog post, or video script takes to read at different reading speeds.",
  },
};

const faqItems = [
  {
    question: "What reading speed should I use?",
    answer:
      "200 words per minute is a common baseline for adult silent reading. Use 150 for denser or technical content, and 250 for casual, easy-to-skim writing.",
  },
  {
    question: "Is this the same as spoken reading time for video scripts?",
    answer:
      "Not exactly — spoken delivery is usually slower, around 130–160 words per minute depending on pacing. For a video voiceover estimate, try the 150 wpm setting as a closer approximation.",
  },
  {
    question: "Why does my count differ from my CMS's reading time?",
    answer:
      "Most platforms use a similar 200–250 wpm formula, but small differences in how they count words (hyphenated words, numbers, code blocks) can shift the estimate by a few seconds.",
  },
];

export default function ReadingTimeCalculatorPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="Text Tools"
        categoryHref="/categories/text-tools"
        title="Reading Time Calculator"
      >
        Paste your article, script, or transcript to estimate how long it
          takes to read at different speeds.
      </ToolPageHeader>

      <div className="mt-10">
        <ReadingTimeCalculator />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="text-tools" currentSlug="reading-time-calculator" />
      </div>
    </div>
  );
}
