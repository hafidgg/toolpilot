import type { Metadata } from "next";
import ThumbnailSizeChecker from "@/components/calculators/ThumbnailSizeChecker";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Thumbnail Size Checker — YouTube 1280×720 Spec",
  description:
    "Upload a thumbnail image to check its dimensions and aspect ratio against YouTube's recommended 1280×720 spec.",
  alternates: { canonical: "/tools/thumbnail-size-checker" },
  twitter: {
    card: "summary_large_image",
    title: "Thumbnail Size Checker — YouTube 1280×720 Spec",
    description: "Upload a thumbnail image to check its dimensions and aspect ratio against YouTube's recommended 1280×720 spec.",
  },
};

const faqItems = [
  {
    question: "What's YouTube's recommended thumbnail size?",
    answer:
      "YouTube recommends 1280×720 pixels, a 16:9 aspect ratio, with a minimum width of 640 pixels. Files should be under 2MB and in JPG, GIF, or PNG format.",
  },
  {
    question: "Is my image uploaded to a server?",
    answer:
      "No — the image is read and measured entirely in your browser using the File API. It never leaves your device.",
  },
];

export default function ThumbnailSizeCheckerPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="YouTube Tools"
        categoryHref="/categories/youtube-tools"
        title="Thumbnail Size Checker"
      >
        Upload your thumbnail to instantly check its dimensions and aspect
          ratio against YouTube&apos;s spec.
      </ToolPageHeader>

      <div className="mt-10">
        <ThumbnailSizeChecker />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="youtube-tools" currentSlug="thumbnail-size-checker" />
      </div>
    </div>
  );
}
