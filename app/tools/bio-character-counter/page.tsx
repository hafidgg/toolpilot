import type { Metadata } from "next";
import BioCharacterCounter from "@/components/calculators/BioCharacterCounter";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Bio Character Counter — Instagram, TikTok, X, LinkedIn & More",
  description:
    "Check your bio against Instagram, TikTok, X, YouTube, and LinkedIn character limits all at once.",
  alternates: { canonical: "/tools/bio-character-counter" },
  twitter: {
    card: "summary_large_image",
    title: "Bio Character Counter — Instagram, TikTok, X, LinkedIn & More",
    description: "Check your bio against Instagram, TikTok, X, YouTube, and LinkedIn character limits all at once.",
  },
};

const faqItems = [
  {
    question: "Why are bio limits so much shorter than post limits?",
    answer:
      "Bios are meant to be scanned instantly on a profile page, not read like a caption — platforms keep the limit tight to force a concise, skimmable summary.",
  },
  {
    question: "Does this count emoji the same as regular characters?",
    answer:
      "Yes — emoji count toward the character limit the same way letters do, and some emoji use more than one character internally, so a bio with several emoji can hit the limit faster than it looks.",
  },
];

export default function BioCharacterCounterPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="Social Media Tools"
        categoryHref="/categories/social-media-tools"
        title="Bio Character Counter"
      >
        Write your bio once and check it against every major platform&apos;s
          limit at the same time.
      </ToolPageHeader>

      <div className="mt-10">
        <BioCharacterCounter />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="social-media-tools" currentSlug="bio-character-counter" />
      </div>
    </div>
  );
}
