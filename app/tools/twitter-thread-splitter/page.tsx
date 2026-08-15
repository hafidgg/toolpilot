import type { Metadata } from "next";
import TwitterThreadSplitter from "@/components/calculators/TwitterThreadSplitter";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Twitter/X Thread Splitter — Auto-Split Long Text",
  description:
    "Paste long-form text and get it automatically split into numbered, 280-character posts ready for a thread.",
  alternates: { canonical: "/tools/twitter-thread-splitter" },
  twitter: {
    card: "summary_large_image",
    title: "Twitter/X Thread Splitter — Auto-Split Long Text",
    description: "Paste long-form text and get it automatically split into numbered, 280-character posts ready for a thread.",
  },
};

const faqItems = [
  {
    question: "Does it split mid-word?",
    answer:
      "No — this tool only breaks between whole words, so you won't get a post that cuts off in the middle of a word.",
  },
  {
    question: "Why is each post shorter than 280 characters?",
    answer:
      "A few characters are reserved for the \"(1/5)\" style numbering added to the end of each post, so the visible text plus the counter never exceeds the 280-character limit.",
  },
];

export default function TwitterThreadSplitterPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="Social Media Tools"
        categoryHref="/categories/social-media-tools"
        title="Twitter/X Thread Splitter"
      >
        Paste your long-form text and get it split into numbered posts
          ready to paste into a thread.
      </ToolPageHeader>

      <div className="mt-10">
        <TwitterThreadSplitter />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="social-media-tools" currentSlug="twitter-thread-splitter" />
      </div>
    </div>
  );
}
