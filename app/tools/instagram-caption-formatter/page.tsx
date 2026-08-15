import type { Metadata } from "next";
import InstagramCaptionFormatter from "@/components/calculators/InstagramCaptionFormatter";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Instagram Caption Formatter — Clean Line Breaks & Hashtag Divider",
  description:
    "Format your Instagram caption with proper line breaks and a hashtag divider so it renders exactly as written.",
  alternates: { canonical: "/tools/instagram-caption-formatter" },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Caption Formatter — Clean Line Breaks & Hashtag Divider",
    description: "Format your Instagram caption with proper line breaks and a hashtag divider so it renders exactly as written.",
  },
};

const faqItems = [
  {
    question: "Why does Instagram collapse my line breaks sometimes?",
    answer:
      "Instagram's app usually preserves line breaks fine when typed directly, but pasting from other apps can sometimes strip formatting. This tool gives you clean, correctly structured text to paste in as a fallback.",
  },
  {
    question: "Why add dots between the caption and hashtags?",
    answer:
      "A common creator convention is to add several blank lines (represented by single dots) between the caption and the hashtag block, pushing hashtags below the \"more\" fold so they don't clutter the visible caption.",
  },
];

export default function InstagramCaptionFormatterPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="Social Media Tools"
        categoryHref="/categories/social-media-tools"
        title="Instagram Caption Formatter"
      >
        Write your caption and hashtags separately, then get a clean,
          properly spaced version ready to paste.
      </ToolPageHeader>

      <div className="mt-10">
        <InstagramCaptionFormatter />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="social-media-tools" currentSlug="instagram-caption-formatter" />
      </div>
    </div>
  );
}
