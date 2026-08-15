import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emoji Counter vs Character Counter — What's the Difference?",
  description: "Why emoji count and character count aren't the same thing, and when you need each tool.",
  alternates: { canonical: "/compare/emoji-counter-vs-character-counter" },
  twitter: {
    card: "summary_large_image",
    title: "Emoji Counter vs Character Counter — What's the Difference?",
    description: "Why emoji count and character count aren't the same thing, and when you need each tool.",
  },
};

export default function ComparePage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <span className="eyebrow">Comparison</span>
      <h1 className="mt-3 h1-page">
        Emoji Counter vs Character Counter
      </h1>
      <p className="mt-4 text-muted leading-relaxed">
        Emoji count is a subset of what a character counter measures — but
        the two answer different questions when you&apos;re editing a caption.
      </p>

      <div className="mt-10 panel overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line-soft">
              <th className="text-left px-4 py-3 text-faint font-medium">&nbsp;</th>
              <th className="text-left px-4 py-3 text-ink font-semibold">Emoji Counter</th>
              <th className="text-left px-4 py-3 text-ink font-semibold">Character Counter</th>
            </tr>
          </thead>
          <tbody className="text-muted">
            <tr className="border-b border-line-soft">
              <td className="px-4 py-3 font-medium text-ink">Answers</td>
              <td className="px-4 py-3">How many emoji, and which ones repeat</td>
              <td className="px-4 py-3">Total length against platform limits</td>
            </tr>
            <tr className="border-b border-line-soft">
              <td className="px-4 py-3 font-medium text-ink">Use it when</td>
              <td className="px-4 py-3">Checking if a caption feels emoji-heavy</td>
              <td className="px-4 py-3">Checking if a caption fits a platform&apos;s limit</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-ink">Doesn&apos;t show</td>
              <td className="px-4 py-3">Whether you&apos;re near a platform limit</td>
              <td className="px-4 py-3">Which specific emoji you used most</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 space-y-4 text-sm text-muted leading-relaxed">
        <p>
          A character counter tells you if a caption fits — but it won&apos;t
          tell you why it&apos;s longer than expected. If a short-looking
          caption is eating your limit fast, it&apos;s often because emoji
          are costing more than one character each, which is exactly what
          the emoji breakdown reveals.
        </p>
        <p>
          In practice, the two tools work well together: draft in a
          character counter to hit your platform limit, then run the same
          text through an emoji counter if the count looks high and you want
          to see whether you&apos;re repeating the same emoji too often.
        </p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 gap-4">
        <Link href="/tools/emoji-counter" className="panel panel-interactive p-4 ">
          <div className="text-sm font-display font-semibold text-ink">
            Emoji Counter →
          </div>
          <p className="mt-1 text-xs text-muted">Breakdown of which emoji repeat.</p>
        </Link>
        <Link href="/tools/character-counter" className="panel panel-interactive p-4 ">
          <div className="text-sm font-display font-semibold text-ink">
            Character Counter →
          </div>
          <p className="mt-1 text-xs text-muted">Check against 7 platform limits at once.</p>
        </Link>
      </div>
    </div>
  );
}
