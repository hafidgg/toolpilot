import type { Metadata } from "next";
import MetaDescriptionChecker from "@/components/calculators/MetaDescriptionChecker";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";
import RelatedGuide from "@/components/RelatedGuide";
import HowToUse from "@/components/HowToUse";
import Examples from "@/components/Examples";

export const metadata: Metadata = {
  title: "Meta Description Checker — Search Snippet Preview",
  description:
    "Check your meta description against the ~155-character recommended length, a rule of thumb, with a live Google search preview.",
  alternates: { canonical: "/tools/meta-description-checker" },
  twitter: {
    card: "summary_large_image",
    title: "Meta Description Checker — Search Snippet Preview",
    description: "Check your meta description against the ~155-character recommended length, a rule of thumb, with a live Google search preview.",
  },
};

const howToSteps = [
  { text: "Write or paste your draft meta description." },
  { text: "Watch the character count and the live Google search preview update as you type." },
  { text: "Consider trimming past ~155 characters, a rule of thumb — Google truncates snippets to fit the device width." },
  { text: "Copy the final version into your page's meta description tag." },
];

const exampleItems = [
  {
    title: "A description that fits",
    input: "Free online tools for content creators — character counters, YouTube helpers, and SEO utilities. No signup required.",
    output: "119 characters — fits comfortably within the search snippet.",
  },
  {
    title: "A description that gets cut off",
    description:
      "Google has no fixed limit, but truncates snippets as needed to fit the device width, shown with an ellipsis (…). Past the ~155-character rule of thumb, truncation becomes likely.",
  },
];

const faqItems = [
  {
    question: "Does Google always show my meta description?",
    answer:
      "Not always. Google sometimes generates its own snippet from page content if it thinks that better matches the search query, regardless of what you wrote in the meta description tag.",
  },
  {
    question: "Is there a minimum length that matters for SEO?",
    answer:
      "There's no strict minimum, but a description under about 120 characters usually isn't using the available space to its full advantage. Aim for enough detail to earn the click while keeping the key message near the start, in case the snippet is truncated.",
  },
  {
    question: "Is this tool free?",
    answer:
      "Yes, completely free with no signup required.",
  },
  {
    question: "Is my text stored anywhere?",
    answer:
      "No — the check runs entirely in your browser using JavaScript. Nothing you type is sent to a server.",
  },
];

export default function MetaDescriptionCheckerPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="SEO & Web Tools"
        categoryHref="/categories/seo-web-tools"
        title="Meta Description Checker"
      >
        Write your meta description and see a live Google search preview
          alongside the character count.
      </ToolPageHeader>

      <div className="mt-10">
        <MetaDescriptionChecker />
      </div>

      <article className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">What is a meta description checker?</h2>
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <p>
            A meta description checker measures your draft description
            against the ~155-character recommended length, a rule of thumb
            (Google has no fixed limit and truncates snippets as needed,
            typically to fit the device width), and shows a live preview of how the snippet
            will actually appear. Writers and SEO practitioners use it to
            avoid submitting a description that gets cut off mid-sentence.
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
          <p>The ~155-character guideline is an approximation. Google&apos;s actual truncation point is based on pixel width, not a fixed character count, so the exact cutoff varies slightly depending on which letters you use — wider characters like &quot;W&quot; take up more visual space than narrow ones like &quot;i.&quot;</p>
        </div>
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="seo-web-tools" currentSlug="meta-description-checker" />
      </div>
      <div className="mt-6 max-w-2xl">
        <RelatedGuide href="/blog/meta-description-best-practices" title="How to Write a Meta Description That Earns the Click" type="article" />
      </div>
    </div>
  );
}
