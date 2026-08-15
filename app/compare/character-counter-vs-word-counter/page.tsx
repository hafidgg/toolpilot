import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Character Counter vs Word Counter — Which Do You Need?",
  description: "The difference between character counters and word counters, and which one to use for social posts versus long-form writing.",
  alternates: { canonical: "/compare/character-counter-vs-word-counter" },
  twitter: {
    card: "summary_large_image",
    title: "Character Counter vs Word Counter — Which Do You Need?",
    description: "The difference between character counters and word counters, and which one to use for social posts versus long-form writing.",
  },
};

export default function ComparePage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <span className="eyebrow">Comparison</span>
      <h1 className="mt-3 h1-page">
        Character Counter vs Word Counter
      </h1>
      <p className="mt-4 text-muted leading-relaxed">
        Both tools measure text length, but they answer different questions
        — and platforms enforce limits using different units.
      </p>

      <div className="mt-10 panel overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line-soft">
              <th className="text-left px-4 py-3 text-faint font-medium">
                &nbsp;
              </th>
              <th className="text-left px-4 py-3 text-ink font-semibold">
                Character Counter
              </th>
              <th className="text-left px-4 py-3 text-ink font-semibold">
                Word Counter
              </th>
            </tr>
          </thead>
          <tbody className="text-muted">
            <tr className="border-b border-line-soft">
              <td className="px-4 py-3 font-medium text-ink">Measures</td>
              <td className="px-4 py-3">Individual characters, including spaces</td>
              <td className="px-4 py-3">Whole words, sentences, paragraphs</td>
            </tr>
            <tr className="border-b border-line-soft">
              <td className="px-4 py-3 font-medium text-ink">Best for</td>
              <td className="px-4 py-3">
                Social posts (X, TikTok captions, meta descriptions)
              </td>
              <td className="px-4 py-3">
                Articles, scripts, essays — anything with a word-count target
              </td>
            </tr>
            <tr className="border-b border-line-soft">
              <td className="px-4 py-3 font-medium text-ink">Limits enforced by</td>
              <td className="px-4 py-3">Most social platforms</td>
              <td className="px-4 py-3">
                Publishers, academic requirements, style guides
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-ink">Also shows</td>
              <td className="px-4 py-3">Per-platform limit bars</td>
              <td className="px-4 py-3">Reading time, sentence count</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 space-y-4 text-sm text-muted leading-relaxed">
        <p>
          Social platforms almost always enforce character limits, not word
          limits — X&apos;s 280 limit and TikTok&apos;s 150-character caption
          cap are both measured in characters, which is why a character
          counter is the right tool when you&apos;re writing for social.
        </p>
        <p>
          Word counters matter more once you&apos;re past caption-length
          writing — a blog post brief that asks for &quot;800–1,000 words,&quot;
          or a script with a target runtime, is measured in words, not
          characters.
        </p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 gap-4">
        <Link href="/tools/character-counter" className="panel panel-interactive p-4 ">
          <div className="text-sm font-display font-semibold text-ink">
            Character Counter →
          </div>
          <p className="mt-1 text-xs text-muted">Check against 7 platform limits at once.</p>
        </Link>
        <Link href="/tools/word-counter" className="panel panel-interactive p-4 ">
          <div className="text-sm font-display font-semibold text-ink">
            Word Counter →
          </div>
          <p className="mt-1 text-xs text-muted">Words, sentences, paragraphs, reading time.</p>
        </Link>
      </div>
    </div>
  );
}
