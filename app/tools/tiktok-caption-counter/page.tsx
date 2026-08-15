import type { Metadata } from "next";
import TiktokCaptionCounter from "@/components/calculators/TiktokCaptionCounter";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "TikTok Caption Counter — 150-Character Limit",
  description:
    "Check your TikTok video caption against the 150-character limit as you type.",
  alternates: { canonical: "/tools/tiktok-caption-counter" },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Caption Counter — 150-Character Limit",
    description: "Check your TikTok video caption against the 150-character limit as you type.",
  },
};

const faqItems = [
  {
    question: "Is 150 characters the limit for TikTok bios too?",
    answer:
      "No — this limit is specifically for video captions. TikTok bios have their own, separate 80-character limit.",
  },
  {
    question: "Do hashtags count toward the 150-character caption limit?",
    answer:
      "Yes, hashtags included in your caption count toward the same 150-character total as the rest of your text.",
  },
];

export default function TiktokCaptionCounterPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="Social Media Tools"
        categoryHref="/categories/social-media-tools"
        title="TikTok Caption Counter"
      >
        Write your caption and watch the character count against TikTok&apos;s
          150-character limit in real time.
      </ToolPageHeader>

      <div className="mt-10">
        <TiktokCaptionCounter />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="social-media-tools" currentSlug="tiktok-caption-counter" />
      </div>
    </div>
  );
}
