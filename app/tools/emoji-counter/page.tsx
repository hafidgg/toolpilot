import type { Metadata } from "next";
import EmojiCounter from "@/components/calculators/EmojiCounter";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";
import RelatedGuide from "@/components/RelatedGuide";
import HowToUse from "@/components/HowToUse";
import Examples from "@/components/Examples";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Emoji Counter — Count Emojis in Any Text",
  description:
    "Paste any caption, bio, or comment to count emojis, see a breakdown of which ones you used, and check total character count.",
  alternates: { canonical: "/tools/emoji-counter" },
  twitter: {
    card: "summary_large_image",
    title: "Emoji Counter — Count Emojis in Any Text",
    description: "Paste any caption, bio, or comment to count emojis, see a breakdown of which ones you used, and check total character count.",
  },
};

const howToSteps = [
  { text: "Paste your caption, bio, or comment into the box." },
  { text: "Check the total emoji count shown above the breakdown." },
  { text: "Review the breakdown to see which specific emoji repeat and how often." },
  { text: "Trim repeated or excess emoji if the total feels heavy for the platform you're posting to." },
];

const exampleItems = [
  {
    title: "Checking an Instagram caption",
    description:
      "See exactly how many emoji you've used before posting, so a caption doesn't read as cluttered or spammy.",
  },
  {
    title: "Auditing a bio for repetition",
    description:
      "The breakdown shows which emoji you reuse most — useful for spotting habits you didn't realize you had.",
  },
  {
    title: "Checking emoji cost against a character limit",
    description:
      "Some emoji use more than one character internally — this tool shows the real character cost, not just a visual count.",
  },
];

const faqItems = [
  {
    question: "How many emoji is too many in a caption?",
    answer:
      "There's no universal number, but engagement tends to plateau or dip past roughly five to seven emoji in a single caption, and it varies by platform and audience norms.",
  },
  {
    question: "Is this emoji counter free?",
    answer:
      "Yes, completely free with no signup required.",
  },
  {
    question: "Does it work on mobile?",
    answer:
      "Yes — it works the same way on a phone browser as on desktop, including pasting emoji from your phone's keyboard.",
  },
  {
    question: "Is my text stored or sent anywhere?",
    answer:
      "No. Everything is calculated in your browser using JavaScript — nothing you paste is transmitted to a server.",
  },
];

export default function EmojiCounterPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="Text Tools"
        categoryHref="/categories/text-tools"
        title="Emoji Counter"
      >
        Paste a caption, bio, or comment to see exactly how many emojis it
          contains, which ones repeat, and how much of your character limit
          they&apos;re eating up.
      </ToolPageHeader>

      <div className="mt-10">
        <EmojiCounter />
      </div>

      <article className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">What is an emoji counter?</h2>
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <p>
            An emoji counter scans a piece of text and counts how many
            emoji it contains, along with a breakdown of which specific
            emoji repeat. Content creators and social media managers use it
            to check whether a caption is emoji-heavy before publishing, and
            to see the real character cost emoji add to a post.
          </p>
        </div>

        <h2 className="h2-section mb-4 mt-10">
          Why emoji count actually matters
        </h2>
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <p>
            Emojis count against most platforms&apos; character limits the
            same way letters do — sometimes at a higher cost, since certain
            emoji are stored as multiple Unicode code points. A caption that
            looks short can quietly burn through a large chunk of your
            available characters before you&apos;ve written a single real
            word.
          </p>
          <p>
            There&apos;s also a readability ceiling. Research from social
            platforms and creator tooling teams consistently points to the
            same pattern: a handful of well-placed emoji improve scroll-stop
            rate and skimmability, but past roughly three to five per
            caption, engagement tends to plateau or dip as the text starts
            to read as cluttered.
          </p>
          <p>
            This tool exists for a simple reason — most text editors won&apos;t
            tell you your real emoji count, and copy-pasting into a
            platform&apos;s composer to check is slow. Paste your draft here
            first, trim if the breakdown looks heavy, then paste the final
            version where it&apos;s going.
          </p>
        </div>
      </article>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">How to use the emoji counter</h2>
        <HowToUse steps={howToSteps} />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">Examples</h2>
        <Examples items={exampleItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">Frequently asked questions</h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">Limitations</h2>
        <div className="space-y-3 text-sm text-muted leading-relaxed">
          <p>Emoji detection uses Unicode pattern matching, which covers the vast majority of standard emoji but may not correctly identify very new emoji or unusual multi-part emoji sequences added to Unicode after this tool was last updated.</p>
        </div>
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="text-tools" currentSlug="emoji-counter" />
      </div>
      <div className="mt-6 max-w-2xl">
        <RelatedGuide href="/blog/how-many-emojis-is-too-many" title="How Many Emojis Is Too Many in a Caption?" type="article" />
      </div>
    </div>
  );
}
