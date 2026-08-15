import type { Metadata } from "next";
import FileNameOptimizer from "@/components/calculators/FileNameOptimizer";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "File Name Optimizer — SEO-Friendly Image & Video Names",
  description:
    "Clean up image and video file names into lowercase, hyphenated, SEO-friendly formats.",
  alternates: { canonical: "/tools/file-name-optimizer" },
  twitter: {
    card: "summary_large_image",
    title: "File Name Optimizer — SEO-Friendly Image & Video Names",
    description: "Clean up image and video file names into lowercase, hyphenated, SEO-friendly formats.",
  },
};

const faqItems = [
  {
    question: "Does file name really affect image SEO?",
    answer:
      "Yes, in a small but real way. Search engines use the file name as one of several signals to understand what an image shows, alongside alt text and surrounding page content — a descriptive name like \"orange-cat-sleeping.jpg\" gives more context than \"IMG_4821.jpg.\"",
  },
  {
    question: "Does this preserve the file extension?",
    answer:
      "Yes — only the name portion before the last dot is cleaned up; the extension (.jpg, .png, .mp4, etc.) is kept exactly as it was, in lowercase.",
  },
];

export default function FileNameOptimizerPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="SEO & Web Tools"
        categoryHref="/categories/seo-web-tools"
        title="File Name Optimizer"
      >
        Turn a messy camera or export file name into a clean, descriptive,
          SEO-friendly one.
      </ToolPageHeader>

      <div className="mt-10">
        <FileNameOptimizer />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="seo-web-tools" currentSlug="file-name-optimizer" />
      </div>
    </div>
  );
}
