import type { Metadata } from "next";
import TextCaseConverter from "@/components/calculators/TextCaseConverter";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";
import RelatedGuide from "@/components/RelatedGuide";
import HowToUse from "@/components/HowToUse";
import Examples from "@/components/Examples";

export const metadata: Metadata = {
  title: "Text Case Converter — UPPERCASE, lowercase, Title Case & More",
  description:
    "Convert text between UPPERCASE, lowercase, Title Case, Sentence case, and camelCase instantly.",
  alternates: { canonical: "/tools/text-case-converter" },
  twitter: {
    card: "summary_large_image",
    title: "Text Case Converter — UPPERCASE, lowercase, Title Case & More",
    description: "Convert text between UPPERCASE, lowercase, Title Case, Sentence case, and camelCase instantly.",
  },
};

const howToSteps = [
  { text: "Type or paste your text into the box." },
  { text: "Choose the case format you want: UPPERCASE, lowercase, Title Case, Sentence case, or camelCase." },
  { text: "Review the converted result on the right." },
  { text: "Copy the result with the Copy button." },
];

const exampleItems = [
  {
    title: "Title Case for a headline",
    input: "the quick brown fox jumps over the lazy dog",
    output: "The Quick Brown Fox Jumps Over The Lazy Dog",
  },
  {
    title: "camelCase for a variable name",
    input: "user first name",
    output: "userFirstName",
  },
  {
    title: "Sentence case for a caption",
    input: "THIS PRODUCT CHANGED MY WORKFLOW COMPLETELY",
    output: "This product changed my workflow completely",
  },
];

const faqItems = [
  {
    question: "How does Title Case handle small words like 'a' or 'the'?",
    answer:
      "This tool capitalizes the first letter of every word for simplicity. Style guides differ on whether to lowercase small words like \"a,\" \"the,\" or \"of\" — if you follow a specific style guide, you may need to manually adjust a few words after converting.",
  },
  {
    question: "What's the difference between Sentence case and Title Case?",
    answer:
      "Sentence case capitalizes only the first letter of each sentence, like normal prose. Title Case capitalizes the first letter of every word, which is the convention for headlines and titles.",
  },
  {
    question: "Is this tool free to use?",
    answer:
      "Yes, completely free with no signup required.",
  },
  {
    question: "Is my text stored anywhere?",
    answer:
      "No — the conversion runs entirely in your browser using JavaScript. Nothing you type is sent to a server.",
  },
];

export default function TextCaseConverterPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="Text Tools"
        categoryHref="/categories/text-tools"
        title="Text Case Converter"
      >
        Switch between UPPERCASE, lowercase, Title Case, Sentence case, and
          camelCase without retyping anything.
      </ToolPageHeader>

      <div className="mt-10">
        <TextCaseConverter />
      </div>

      <article className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">What is a text case converter?</h2>
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <p>
            A text case converter changes the capitalization pattern of a
            piece of text without you having to retype it — switching
            between UPPERCASE, lowercase, Title Case, Sentence case, and
            camelCase. Writers use it for headlines and titles, developers
            use camelCase for variable names, and editors use Sentence case
            to fix text that was typed in all caps.
          </p>
        </div>
      </article>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">How to use the text case converter</h2>
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
        <RelatedTools categorySlug="text-tools" currentSlug="text-case-converter" />
      </div>
      <div className="mt-6 max-w-2xl">
        <RelatedGuide href="/blog/title-case-vs-sentence-case" title="Title Case vs. Sentence Case: When Each One Actually Matters" type="article" />
      </div>
    </div>
  );
}
