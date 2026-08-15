import type { Metadata } from "next";
import OgTagGenerator from "@/components/calculators/OgTagGenerator";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Open Graph Tag Generator — Build Your Page's Meta Tags",
  description:
    "Generate the Open Graph and Twitter Card meta tags to paste into your page's HTML head.",
  alternates: { canonical: "/tools/og-tag-generator" },
  twitter: {
    card: "summary_large_image",
    title: "Open Graph Tag Generator — Build Your Page's Meta Tags",
    description: "Generate the Open Graph and Twitter Card meta tags to paste into your page's HTML head.",
  },
};

const faqItems = [
  {
    question: "How is this different from the Open Graph Preview tool?",
    answer:
      "This tool generates the meta tags to add to your own page. The Open Graph Preview tool reads an existing page's tags to show you how a link will look when shared — they're complementary: build tags here, then verify them there once published.",
  },
  {
    question: "Where do these tags go in my HTML?",
    answer:
      "Paste them inside the <head> section of the page you want them to apply to, alongside your existing title and meta description tags.",
  },
];

export default function OgTagGeneratorPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="SEO & Web Tools"
        categoryHref="/categories/seo-web-tools"
        title="Open Graph Tag Generator"
      >
        Fill in your page details to generate ready-to-paste Open Graph
          and Twitter Card meta tags.
      </ToolPageHeader>

      <div className="mt-10">
        <OgTagGenerator />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="seo-web-tools" currentSlug="og-tag-generator" />
      </div>
    </div>
  );
}
