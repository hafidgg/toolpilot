import type { Metadata } from "next";
import WordCounter from "@/components/calculators/WordCounter";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";
import RelatedGuide from "@/components/RelatedGuide";
import HowToUse from "@/components/HowToUse";
import Examples from "@/components/Examples";

export const metadata: Metadata = {
  title: "Word Counter — Words, Characters & Reading Time",
  description:
    "Count words, characters, sentences, and paragraphs instantly, with an estimated reading time.",
  alternates: { canonical: "/tools/word-counter" },
  twitter: {
    card: "summary_large_image",
    title: "Word Counter — Words, Characters & Reading Time",
    description: "Count words, characters, sentences, and paragraphs instantly, with an estimated reading time.",
  },
};

const howToSteps = [
  { text: "Paste or type your text into the box." },
  { text: "Read the word count above the fold — it updates as you type." },
  { text: "Check character, sentence, and paragraph counts below it if you need more detail." },
  { text: "Use the reading time estimate to gauge how long the piece takes to read." },
];

const exampleItems = [
  {
    title: "Matching a word-count brief",
    description:
      "Freelance and academic briefs often specify an exact word range (\"800–1,000 words\") — paste your draft to check it fits before submitting.",
  },
  {
    title: "Checking article length before publishing",
    description:
      "Longer isn't automatically better for SEO, but knowing your actual word count helps you compare against what similar top-ranking pages typically run.",
  },
  {
    title: "Estimating a script's read-aloud time",
    description:
      "The reading time estimate gives a rough sense of how long a voiceover or presentation script will take to deliver.",
  },
];

const faqItems = [
  {
    question: "How is reading time calculated?",
    answer:
      "We use an average silent reading speed of 200 words per minute, a commonly cited baseline for adult readers. Actual reading time varies with content difficulty and the reader's familiarity with the topic.",
  },
  {
    question: "Does this count words in other languages?",
    answer:
      "Word counting works for any space-separated language. Languages that don't use spaces between words, like Chinese or Japanese, will show a character count that's more useful than the word count for those texts.",
  },
  {
    question: "Is my text stored anywhere?",
    answer:
      "No. Everything runs in your browser using JavaScript — nothing you type is sent to a server or saved.",
  },
  {
    question: "Is this word counter free?",
    answer:
      "Yes, completely free with no signup and no limit on how many times you can use it.",
  },
  {
    question: "Does it work on mobile?",
    answer:
      "Yes — it's fully responsive and works the same way on a phone browser as on desktop.",
  },
];

export default function WordCounterPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="Text Tools"
        categoryHref="/categories/text-tools"
        title="Word Counter"
      >
        Paste any text to get an instant word, character, sentence, and
          paragraph count, plus an estimated reading time.
      </ToolPageHeader>

      <div className="mt-10">
        <WordCounter />
      </div>

      <article className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">What is a word counter?</h2>
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <p>
            A word counter measures how many words, characters, sentences,
            and paragraphs a piece of text contains. Writers, students, and
            editors use it to check a draft against a required length before
            submitting or publishing — a word count target is one of the
            most common constraints in writing briefs, from academic
            assignments to freelance work.
          </p>
        </div>
      </article>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">How to use the word counter</h2>
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
        <RelatedTools categorySlug="text-tools" currentSlug="word-counter" />
      </div>
      <div className="mt-6 max-w-2xl">
        <RelatedGuide href="/blog/word-count-without-padding" title="How to Hit an Exact Word Count Without Padding" type="article" />
      </div>
    </div>
  );
}
