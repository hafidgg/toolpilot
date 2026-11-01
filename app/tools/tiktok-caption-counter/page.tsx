import type { Metadata } from "next";
import TiktokCaptionCounter from "@/components/calculators/TiktokCaptionCounter";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "TikTok Caption Counter — Live Character Count",
  description:
    "Count your TikTok caption as you type against the commonly cited 150-character limit, then check the current limit in the app.",
  alternates: { canonical: "/tools/tiktok-caption-counter" },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Caption Counter — Live Character Count",
    description: "Count your TikTok caption as you type against the commonly cited 150-character limit, then check the current limit in the app.",
  },
};

const faqItems = [
  {
    question: "Is 150 characters the limit for TikTok bios too?",
    answer:
      "No. The 150 figure is the commonly cited caption limit; bios are counted separately (80 characters is the figure commonly cited). Neither is confirmed on an official TikTok page we could check, so check the current limit in the app.",
  },
  {
    question: "Do hashtags count toward the caption character count?",
    answer:
      "Yes, hashtags included in your caption count toward the same character total as the rest of your text.",
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
        Write your caption and watch the character count against the
          commonly cited 150-character limit in real time (check the current
          limit in the app).
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
