import type { Metadata } from "next";
import CharacterCounter from "@/components/calculators/CharacterCounter";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";
import RelatedGuide from "@/components/RelatedGuide";
import HowToUse from "@/components/HowToUse";
import Examples from "@/components/Examples";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Social Media Character Counter — X, Instagram, TikTok & More",
  description:
    "Count characters as you type and check your text against the limits for X, Instagram, TikTok, Facebook, LinkedIn, Threads, and YouTube descriptions.",
  alternates: { canonical: "/tools/character-counter" },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Character Counter — X, Instagram, TikTok & More",
    description: "Count characters as you type and check your text against the limits for X, Instagram, TikTok, Facebook, LinkedIn, Threads, and YouTube descriptions.",
  },
};

const howToSteps = [
  { text: "Type or paste your text into the box." },
  { text: "Watch the character count update live as you type." },
  { text: "Check the progress bar under each platform to see how close you are to that platform's limit." },
  { text: "Trim your text if any bar shows red — that platform's limit has been exceeded." },
  { text: "Copy the final version once it fits everywhere you plan to post it." },
];

const exampleItems = [
  {
    title: "Cross-posting one caption everywhere",
    description:
      "Write once, then check it against the tightest limit in your posting list — usually X's 280 characters or TikTok's 150.",
  },
  {
    title: "Writing a meta description",
    description:
      "Meta descriptions get cut off around 155 characters in Google search results — check length before publishing a page.",
  },
  {
    title: "Trimming a headline",
    description:
      "Newsletter subject lines and article headlines often have their own soft limits for full visibility in inboxes and feeds.",
  },
  {
    title: "Fitting a YouTube description preview",
    description:
      "Only the first ~150 characters of a YouTube description show before \"show more\" — check that opening separately.",
  },
];

const faqItems = [
  {
    question: "Is this character counter free to use?",
    answer:
      "Yes, completely free with no signup, no limits on how many times you can use it, and no account required.",
  },
  {
    question: "Does it work on mobile?",
    answer:
      "Yes — the tool is fully responsive and works the same way on a phone browser as on desktop.",
  },
  {
    question: "Is my text stored or sent to a server?",
    answer:
      "No. The character count is calculated entirely in your browser using JavaScript — nothing you type is transmitted anywhere.",
  },
  {
    question: "Does it count spaces and emoji?",
    answer:
      "Yes, spaces count as characters the same way platforms count them. Emoji are also counted, and some emoji use more than one character internally, which is why a short-looking caption can sometimes use up more of your limit than expected.",
  },
  {
    question: "Why do the platform limits shown here matter?",
    answer:
      "Each platform enforces its own character limit differently — some block you from typing further (hard limits), others let you type but fold the extra text behind a \"more\" link. Checking all of them at once saves you from discovering the problem after you've already tried to post.",
  },
];

export default function CharacterCounterPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="Text Tools"
        categoryHref="/categories/text-tools"
        title="Social Media Character Counter"
      >
        Write once, check everywhere. See your character count against the
          limits for every major platform at the same time, so you know
          before you post — not after it gets cut off.
      </ToolPageHeader>

      <div className="mt-10">
        <CharacterCounter />
      </div>

      <article className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          What is a character counter?
        </h2>
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <p>
            A character counter measures the exact length of a piece of text
            — including spaces and punctuation, not just words — which
            matters because most social platforms enforce their limits in
            characters, not words. Writers, social media managers, and
            anyone posting across multiple platforms use it to confirm a
            caption or post fits before publishing.
          </p>
        </div>

        <h2 className="h2-section mb-4 mt-10">
          Limits are only half the story
        </h2>
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <p>
            Every platform enforces a hard character limit, but the number
            that actually determines whether your post performs well is
            usually much lower than the cap. X truncates nothing until 280,
            but a caption on Instagram or Facebook that runs past two or
            three lines gets folded behind &quot;more,&quot; and most readers
            never tap it.
          </p>
          <p>
            That&apos;s why this tool shows every platform&apos;s limit side
            by side instead of just one — a caption you&apos;re repurposing
            across X, Threads, and LinkedIn needs to satisfy the tightest
            constraint in the group, which is usually X&apos;s 280 or
            TikTok&apos;s 150-character caption limit.
          </p>
          <p>
            If you&apos;re writing once and cross-posting, aim for whichever
            limit is smallest among the platforms you&apos;re publishing to,
            then add platform-specific hashtags or a call-to-action
            separately where there&apos;s room.
          </p>
        </div>
      </article>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">How to use the character counter</h2>
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
        <RelatedTools categorySlug="text-tools" currentSlug="character-counter" />
      </div>
      <div className="mt-6 max-w-2xl">
        <RelatedGuide href="/blog/social-media-character-limits-guide" title="The Complete Guide to Social Media Character Limits" type="article" />
      </div>
    </div>
  );
}
