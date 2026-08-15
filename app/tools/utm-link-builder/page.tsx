import type { Metadata } from "next";
import UtmLinkBuilder from "@/components/calculators/UtmLinkBuilder";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "UTM Link Builder — Track Campaign Traffic in Analytics",
  description:
    "Build UTM-tagged links for accurate source, medium, and campaign tracking in Google Analytics.",
  alternates: { canonical: "/tools/utm-link-builder" },
  twitter: {
    card: "summary_large_image",
    title: "UTM Link Builder — Track Campaign Traffic in Analytics",
    description: "Build UTM-tagged links for accurate source, medium, and campaign tracking in Google Analytics.",
  },
};

const faqItems = [
  {
    question: "What's the difference between source and medium?",
    answer:
      "Source is where the traffic came from — a specific platform or publication, like \"newsletter\" or \"instagram.\" Medium is the general category of that channel, like \"email\" or \"social.\" Together they let you filter traffic precisely in Analytics.",
  },
  {
    question: "Do UTM parameters affect SEO or page functionality?",
    answer:
      "No — they're purely tracking parameters read by analytics tools. They don't change how the page loads or how search engines treat it, though it's good practice to use canonical tags so search engines don't treat tagged and untagged URLs as separate pages.",
  },
];

export default function UtmLinkBuilderPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="SEO & Web Tools"
        categoryHref="/categories/seo-web-tools"
        title="UTM Link Builder"
      >
        Add source, medium, and campaign tags to any link so you can track
          exactly where your traffic comes from.
      </ToolPageHeader>

      <div className="mt-10">
        <UtmLinkBuilder />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="seo-web-tools" currentSlug="utm-link-builder" />
      </div>
    </div>
  );
}
