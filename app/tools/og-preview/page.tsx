import type { Metadata } from "next";
import OgPreview from "@/components/calculators/OgPreview";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";
import RelatedGuide from "@/components/RelatedGuide";
import HowToUse from "@/components/HowToUse";
import Examples from "@/components/Examples";

export const metadata: Metadata = {
  title: "Open Graph Preview — See How Your Link Looks When Shared",
  description:
    "Paste a URL to preview its Open Graph title, description, and image exactly as it'll appear when shared on social media.",
  alternates: { canonical: "/tools/og-preview" },
  twitter: {
    card: "summary_large_image",
    title: "Open Graph Preview — See How Your Link Looks When Shared",
    description: "Paste a URL to preview its Open Graph title, description, and image exactly as it'll appear when shared on social media.",
  },
};

const howToSteps = [
  { text: "Paste the full URL of the page you want to check." },
  { text: "Click Preview." },
  { text: "The tool fetches the page's Open Graph tags and shows how the link card will look." },
  { text: "If something's missing (no image, no title), check the page's HTML head for og: meta tags." },
];

const exampleItems = [
  {
    title: "Checking your own blog post before sharing",
    description:
      "Confirm the title, description, and image look right before posting the link on social media.",
  },
  {
    title: "Debugging a broken link preview",
    description:
      "If a shared link shows no image or the wrong title, this tool shows exactly what tags the page is (or isn't) providing.",
  },
];

const faqItems = [
  {
    question: "Is this tool free to use?",
    answer:
      "Yes, completely free with no signup required.",
  },
  {
    question: "Why doesn't my page show an image or title?",
    answer:
      "This usually means the page is missing Open Graph meta tags (og:title, og:description, og:image) in its HTML head. Without them, most platforms fall back to a generic preview or none at all.",
  },
  {
    question: "Why did the preview fail to load?",
    answer:
      "Some sites block automated requests from tools like this one. If a preview fails, try checking the page's source directly for og: meta tags, or test with a platform-specific debugger.",
  },
  {
    question: "Is the URL I enter stored anywhere?",
    answer:
      "The URL is sent to our server so it can fetch that page's meta tags — this is the one tool on the site that works this way, since a browser can't read another site's HTML tags directly. We don't log or store the URLs submitted.",
  },
];

export default function OgPreviewPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="SEO & Web Tools"
        categoryHref="/categories/seo-web-tools"
        title="Open Graph Preview"
      >
        Paste any URL to see exactly how it&apos;ll look when shared on X,
          LinkedIn, Facebook, or in a Slack message.
      </ToolPageHeader>

      <div className="mt-10">
        <OgPreview />
      </div>

      <article className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">What is Open Graph Preview?</h2>
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <p>
            Open Graph Preview fetches a page&apos;s Open Graph meta tags —
            the hidden HTML tags that control how a link looks when shared
            on X, LinkedIn, Facebook, Slack, and most messaging apps — and
            shows you the resulting preview card before you share it
            yourself.
          </p>
        </div>
      </article>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">How to use it</h2>
        <HowToUse steps={howToSteps} />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">Examples</h2>
        <Examples items={exampleItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">Limitations</h2>
        <div className="space-y-3 text-sm text-muted leading-relaxed">
          <p>This tool reads only the first 200KB of a page&apos;s HTML and doesn&apos;t execute JavaScript, so Open Graph tags injected client-side (common on some single-page apps) won&apos;t be detected.</p>
          <p>Some sites block automated requests entirely, which will cause the preview to fail even though the page loads normally in a regular browser.</p>
        </div>
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="seo-web-tools" currentSlug="og-preview" />
      </div>
      <div className="mt-6 max-w-2xl">
        <RelatedGuide href="/guides/seo-tools-guide" title="The Ultimate Guide to SEO & Web Tools for Creators" type="guide" />
      </div>
    </div>
  );
}
