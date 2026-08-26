import type { Metadata } from "next";
import AcronymGenerator from "@/components/calculators/AcronymGenerator";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Acronym Generator — Turn a Phrase into an Acronym",
  description:
    "Generate an acronym from any phrase by taking the first letter of each word.",
  alternates: { canonical: "/tools/acronym-generator" },
  twitter: {
    card: "summary_large_image",
    title: "Acronym Generator — Turn a Phrase into an Acronym",
    description: "Generate an acronym from any phrase by taking the first letter of each word.",
  },
};

const faqItems = [
  {
    question: "Does this skip small words like 'of' or 'the'?",
    answer:
      "No — every word's first letter is included, matching how most technical and organizational acronyms are formed. If you want a specific word excluded, just remove it from the input phrase.",
  },
  {
    question: "What's the difference between an acronym and an abbreviation?",
    answer:
      "An acronym is a type of abbreviation that's pronounced as its own word or letter sequence, formed from the first letters of a phrase (like NASA or SEO). Abbreviation is the broader term and can include shortened words too (like \"Dr.\" for Doctor). This tool generates acronyms specifically — the first-letter type.",
  },
  {
    question: "Can I use this as an acronym maker for a company or project name?",
    answer:
      "Yes. Type the full name of your company, project, or campaign, and the tool returns the acronym instantly — useful for checking whether a name produces something memorable (or something you'd rather avoid) before you commit to it.",
  },
  {
    question: "Does it work as an acronym creator for technical or scientific terms?",
    answer:
      "Yes — it works the same way regardless of the phrase's subject. Paste any multi-word technical, scientific, or organizational term and it returns the first-letter acronym.",
  },
];

export default function AcronymGeneratorPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="Text Tools"
        categoryHref="/categories/text-tools"
        title="Acronym Generator"
      >
        Type a phrase and get its acronym from the first letter of each
          word.
      </ToolPageHeader>

      <p className="mt-6 max-w-2xl text-muted leading-relaxed">
        This acronym generator turns any phrase — a project name, an
        organization, a technical term — into its acronym by taking the
        first letter of each word. Whether you&apos;re looking for an
        acronym generator, creator, or maker, or just need an
        abbreviation for something long, the result is the same clean
        output.
      </p>

      <div className="mt-6 max-w-2xl grid sm:grid-cols-3 gap-4 text-sm">
        <div className="panel p-4">
          <div className="font-mono text-accent">SEO</div>
          <div className="mt-1 text-muted">Search Engine Optimization</div>
        </div>
        <div className="panel p-4">
          <div className="font-mono text-accent">NASA</div>
          <div className="mt-1 text-muted">National Aeronautics and Space Administration</div>
        </div>
        <div className="panel p-4">
          <div className="font-mono text-accent">ASAP</div>
          <div className="mt-1 text-muted">As Soon As Possible</div>
        </div>
      </div>

      <div className="mt-10">
        <AcronymGenerator />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="text-tools" currentSlug="acronym-generator" />
      </div>
    </div>
  );
}