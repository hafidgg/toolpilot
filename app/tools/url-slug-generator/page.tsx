import type { Metadata } from "next";
import UrlSlugGenerator from "@/components/calculators/UrlSlugGenerator";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";
import RelatedGuide from "@/components/RelatedGuide";
import HowToUse from "@/components/HowToUse";
import Examples from "@/components/Examples";

export const metadata: Metadata = {
  title: "URL Slug Generator — Clean, SEO-Friendly Slugs",
  description:
    "Convert any title into a clean, lowercase, hyphenated URL slug ready to use in your CMS.",
  alternates: { canonical: "/tools/url-slug-generator" },
  twitter: {
    card: "summary_large_image",
    title: "URL Slug Generator — Clean, SEO-Friendly Slugs",
    description: "Convert any title into a clean, lowercase, hyphenated URL slug ready to use in your CMS.",
  },
};

const howToSteps = [
  { text: "Paste your page title or headline into the box." },
  { text: "The slug generates automatically as you type." },
  { text: "Copy the slug with the Copy button." },
  { text: "Paste it into your CMS's URL/permalink field." },
];

const exampleItems = [
  {
    title: "A blog post title",
    input: "How to Calculate Position Size (With Examples)!",
    output: "how-to-calculate-position-size-with-examples",
  },
  {
    title: "A title with accented characters",
    input: "Café Menu Ideas for 2026",
    output: "cafe-menu-ideas-for-2026",
  },
];

const faqItems = [
  {
    question: "Why use hyphens instead of underscores?",
    answer:
      "Google has confirmed it treats hyphens as word separators but generally treats underscores as joining words together. Hyphenated slugs are the accepted convention for SEO-friendly URLs.",
  },
  {
    question: "Does this remove accented characters?",
    answer:
      "Yes — accented characters are converted to their closest plain-ASCII equivalent (é becomes e, for example), since URLs work most reliably with plain ASCII characters.",
  },
  {
    question: "Is this tool free to use?",
    answer:
      "Yes, completely free with no signup and no limit on how many slugs you can generate.",
  },
  {
    question: "Is my title stored anywhere?",
    answer:
      "No — the conversion happens entirely in your browser using JavaScript. Nothing you type is sent to a server.",
  },
];

export default function UrlSlugGeneratorPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="SEO & Web Tools"
        categoryHref="/categories/seo-web-tools"
        title="URL Slug Generator"
      >
        Paste a title to get a clean, lowercase, hyphenated slug — ready to
          drop into your CMS.
      </ToolPageHeader>

      <div className="mt-10">
        <UrlSlugGenerator />
      </div>

      <article className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">What is a URL slug generator?</h2>
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <p>
            A URL slug generator converts a title or headline into the
            clean, lowercase, hyphenated format search engines and CMS
            platforms expect for URLs — stripping punctuation, converting
            spaces to hyphens, and normalizing accented characters. Writers
            and developers use it to avoid manually cleaning up a title
            every time they publish a new page.
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
        <RelatedTools categorySlug="seo-web-tools" currentSlug="url-slug-generator" />
      </div>
      <div className="mt-6 max-w-2xl">
        <RelatedGuide href="/blog/why-urls-and-filenames-matter-for-seo" title="Why Your URLs and File Names Actually Affect SEO" type="article" />
      </div>
    </div>
  );
}
