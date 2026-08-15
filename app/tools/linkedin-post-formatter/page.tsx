import type { Metadata } from "next";
import LinkedinPostFormatter from "@/components/calculators/LinkedinPostFormatter";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "LinkedIn Post Formatter — Preview Your Line Breaks",
  description:
    "Preview how your LinkedIn post's line breaks and length will actually render, and check the \"see more\" cutoff.",
  alternates: { canonical: "/tools/linkedin-post-formatter" },
  twitter: {
    card: "summary_large_image",
    title: "LinkedIn Post Formatter — Preview Your Line Breaks",
    description: "Preview how your LinkedIn post's line breaks and length will actually render, and check the \"see more\" cutoff.",
  },
};

const faqItems = [
  {
    question: "Where does LinkedIn cut off a post?",
    answer:
      "LinkedIn typically folds posts behind \"see more\" after roughly 210 characters on mobile feeds, though this can vary by device. Put your strongest hook in that first stretch.",
  },
  {
    question: "What's LinkedIn's maximum post length?",
    answer:
      "LinkedIn allows up to 3,000 characters in a standard post.",
  },
];

export default function LinkedinPostFormatterPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="Social Media Tools"
        categoryHref="/categories/social-media-tools"
        title="LinkedIn Post Formatter"
      >
        Write your post and see exactly how much shows before the &quot;see
          more&quot; cutoff.
      </ToolPageHeader>

      <div className="mt-10">
        <LinkedinPostFormatter />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="social-media-tools" currentSlug="linkedin-post-formatter" />
      </div>
    </div>
  );
}
