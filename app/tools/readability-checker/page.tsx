import type { Metadata } from "next";
import ReadabilityChecker from "@/components/calculators/ReadabilityChecker";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";
import RelatedGuide from "@/components/RelatedGuide";
import HowToUse from "@/components/HowToUse";
import Examples from "@/components/Examples";

export const metadata: Metadata = {
  title: "Readability Checker — Flesch Reading Ease Score",
  description:
    "Check your text's Flesch Reading Ease score and estimated grade level to see how easy it is to read.",
  alternates: { canonical: "/tools/readability-checker" },
  twitter: {
    card: "summary_large_image",
    title: "Readability Checker — Flesch Reading Ease Score",
    description: "Check your text's Flesch Reading Ease score and estimated grade level to see how easy it is to read.",
  },
};

const howToSteps = [
  { text: "Paste your article, blog post, or page copy into the box." },
  { text: "Read the Flesch Reading Ease score and grade-level estimate." },
  { text: "If the score is lower than you'd like, shorten sentences and swap long words for simpler ones." },
  { text: "Re-check after editing to see the score improve." },
];

const exampleItems = [
  {
    title: "Simple, easy-to-read text",
    input: "The cat sat on the mat. It was warm and sunny.",
    output: "High score (very easy) — short sentences, simple words.",
  },
  {
    title: "Dense, technical text",
    input: "The implementation necessitates a comprehensive reevaluation of the underlying architectural paradigm.",
    output: "Low score (difficult) — long sentences, complex vocabulary.",
  },
];

const faqItems = [
  {
    question: "What's a good Flesch Reading Ease score for blog content?",
    answer:
      "Most general-audience web content aims for a score of 60 or above, roughly an 8th–9th grade reading level, which is considered accessible to most readers without feeling oversimplified.",
  },
  {
    question: "How is the score calculated?",
    answer:
      "The Flesch Reading Ease formula weighs average sentence length and average syllables per word — shorter sentences and simpler, shorter words produce a higher (easier) score.",
  },
  {
    question: "Is this tool free?",
    answer:
      "Yes, completely free with no signup required.",
  },
  {
    question: "Is my text stored anywhere?",
    answer:
      "No — the score is calculated entirely in your browser using JavaScript. Nothing you paste is sent to a server.",
  },
];

export default function ReadabilityCheckerPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="SEO & Web Tools"
        categoryHref="/categories/seo-web-tools"
        title="Readability Checker"
      >
        Paste your text to check its Flesch Reading Ease score and
          estimated grade level.
      </ToolPageHeader>

      <div className="mt-10">
        <ReadabilityChecker />
      </div>

      <article className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">What is a readability checker?</h2>
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <p>
            A readability checker scores how easy a piece of text is to
            read using the Flesch Reading Ease formula, which weighs
            average sentence length and word complexity. Writers and
            editors use it to catch overly dense passages before publishing
            content meant for a general audience.
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
          <p>Syllable counting uses a rule-based approximation rather than a dictionary lookup, so it can be slightly inaccurate for unusual words, proper nouns, or non-English text. Treat the score as a useful estimate, not an exact measurement.</p>
        </div>
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="seo-web-tools" currentSlug="readability-checker" />
      </div>
      <div className="mt-6 max-w-2xl">
        <RelatedGuide href="/blog/how-to-improve-readability-score" title="How to Improve Your Content's Readability Score" type="article" />
      </div>
    </div>
  );
}
