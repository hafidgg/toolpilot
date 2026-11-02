import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YouTube Title vs Description — What Each One Actually Does",
  description: "How YouTube titles and descriptions serve different purposes for search, click-through, and algorithm context.",
  alternates: { canonical: "/compare/youtube-title-vs-description" },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Title vs Description — What Each One Actually Does",
    description: "How YouTube titles and descriptions serve different purposes for search, click-through, and algorithm context.",
  },
};

export default function ComparePage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <span className="eyebrow">Comparison</span>
      <h1 className="mt-3 h1-page">
        YouTube Title vs Description
      </h1>
      <p className="mt-4 text-muted leading-relaxed">
        Both fields matter, but they do different jobs — one earns the
        click, the other gives context after the click already happened.
      </p>

      <div className="mt-10 panel overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line-soft">
              <th className="text-left px-4 py-3 text-faint font-medium">&nbsp;</th>
              <th className="text-left px-4 py-3 text-ink font-semibold">Title</th>
              <th className="text-left px-4 py-3 text-ink font-semibold">Description</th>
            </tr>
          </thead>
          <tbody className="text-muted">
            <tr className="border-b border-line-soft">
              <td className="px-4 py-3 font-medium text-ink">Max length</td>
              <td className="px-4 py-3">100 characters (official limit)</td>
              <td className="px-4 py-3">5,000 characters (official limit)</td>
            </tr>
            <tr className="border-b border-line-soft">
              <td className="px-4 py-3 font-medium text-ink">Primary job</td>
              <td className="px-4 py-3">Earn the click in search/suggested</td>
              <td className="px-4 py-3">Give context, links, and timestamps</td>
            </tr>
            <tr className="border-b border-line-soft">
              <td className="px-4 py-3 font-medium text-ink">Visible where</td>
              <td className="px-4 py-3">Search results, suggested videos, thumbnails</td>
              <td className="px-4 py-3">Below the video player, after clicking</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-ink">Truncation risk</td>
              <td className="px-4 py-3">How much shows isn&apos;t documented by YouTube; a ~60-character rule of thumb keeps the key words early</td>
              <td className="px-4 py-3">Roughly the first ~157 characters before &quot;more&quot; — approximate, varies by device (not documented by YouTube)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 space-y-4 text-sm text-muted leading-relaxed">
        <p>
          The title&apos;s job is to get the click — it&apos;s the first, and
          often only, thing a potential viewer sees before deciding whether
          to watch. YouTube allows 100 characters but doesn&apos;t document
          how many are shown in search or suggestions, so putting the words
          that explain the video first is the safe choice.
        </p>
        <p>
          The description does its work after the click, but its opening
          still matters: only the start shows before &quot;more&quot;. We use
          ~157 characters as a guide — approximate, varies by device (not
          documented by YouTube) — so treat the opening as a secondary
          pitch, not just a place to dump links.
        </p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 gap-4">
        <Link href="/tools/youtube-title-checker" className="panel panel-interactive p-4 ">
          <div className="text-sm font-display font-semibold text-ink">
            YouTube Title Checker →
          </div>
          <p className="mt-1 text-xs text-muted">Check the 100-character limit.</p>
        </Link>
        <Link href="/tools/youtube-description-checker" className="panel panel-interactive p-4 ">
          <div className="text-sm font-display font-semibold text-ink">
            YouTube Description Checker →
          </div>
          <p className="mt-1 text-xs text-muted">Check the 5,000 limit and approximate preview.</p>
        </Link>
      </div>
    </div>
  );
}
