import type { Metadata } from "next";
import Link from "next/link";
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
  {
    question: "Is this a robots.txt generator, builder, or creator?",
    answer:
      "They're the same thing — different people search for different words, but this tool builds, generates, and creates the same valid robots.txt output either way.",
  },
  {
    question: "Can I use this as a robots.txt maker for WordPress or Shopify?",
    answer:
      "Yes. The output is plain-text robots.txt syntax, so it works the same regardless of platform — just adjust the disallowed paths to match your site's actual admin/API routes, then upload or paste it wherever your platform expects a robots.txt file.",
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

      <p className="mt-6 max-w-2xl text-muted leading-relaxed">
        A robots.txt file tells search engine crawlers which parts of your
        site they can and can&apos;t access — most sites need one at the
        root domain before launch. This robots.txt generator builds a
        valid file from your allow, disallow, and sitemap rules, so
        whether you think of it as a generator, builder, creator, or
        maker, the output is the same: a correctly formatted file ready
        to upload.
      </p>

      <div className="mt-10">
        <RobotsTxtGenerator />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <p className="mt-8 max-w-2xl text-sm text-muted leading-relaxed">
        Want to understand what this file actually controls?{" "}
        <Link href="/blog/what-robots-txt-actually-does" className="text-accent hover:underline">
          Read what robots.txt actually does (and doesn&apos;t do) for SEO
        </Link>
        .
      </p>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="seo-web-tools" currentSlug="robots-txt-generator" />
      </div>
    </div>
  );
}