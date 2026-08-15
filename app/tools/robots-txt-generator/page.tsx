import type { Metadata } from "next";
import RobotsTxtGenerator from "@/components/calculators/RobotsTxtGenerator";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Robots.txt Generator — Build a Valid robots.txt File",
  description:
    "Generate a valid robots.txt file with allow/disallow rules and a sitemap reference, ready to upload to your site root.",
  alternates: { canonical: "/tools/robots-txt-generator" },
  twitter: {
    card: "summary_large_image",
    title: "Robots.txt Generator — Build a Valid robots.txt File",
    description: "Generate a valid robots.txt file with allow/disallow rules and a sitemap reference, ready to upload to your site root.",
  },
};

const faqItems = [
  {
    question: "Where does robots.txt need to go?",
    answer:
      "It must be placed at the root of your domain — for example, https://example.com/robots.txt — for search engines to find it.",
  },
  {
    question: "Does disallowing a page remove it from Google?",
    answer:
      "Not necessarily. Disallowing a page in robots.txt stops crawlers from visiting it, but if the page is already indexed or linked from elsewhere, it can still appear in search results without a description. Use a noindex meta tag if you want a page fully removed from search results.",
  },
];

export default function RobotsTxtGeneratorPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="SEO & Web Tools"
        categoryHref="/categories/seo-web-tools"
        title="Robots.txt Generator"
      >
        Build a valid robots.txt file with your allow, disallow, and
          sitemap rules.
      </ToolPageHeader>

      <div className="mt-10">
        <RobotsTxtGenerator />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="seo-web-tools" currentSlug="robots-txt-generator" />
      </div>
    </div>
  );
}
