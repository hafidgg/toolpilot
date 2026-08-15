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
              <td className="px-4 py-3">100 characters (≈60–70 visible)</td>
              <td className="px-4 py-3">5,000 characters (≈150 visible before &quot;more&quot;)</td>
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
              <td className="px-4 py-3">High — most content is only ~60 characters wide</td>
              <td className="px-4 py-3">First ~150 characters, rest hidden behind &quot;more&quot;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 space-y-4 text-sm text-muted leading-relaxed">
        <p>
          The title&apos;s job is to get the click — it&apos;s the first, and
          often only, thing a potential viewer sees before deciding whether
          to watch. That&apos;s why staying under roughly 60 characters
          matters so much: past that, search and suggested placements start
          cutting it off mid-sentence.
        </p>
        <p>
          The description does its work after the click, but the first ~150
          characters still matter — that preview text shows in search
          results under some placements too, so it&apos;s worth treating as a
          secondary pitch, not just a place to dump links.
        </p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 gap-4">
        <Link href="/tools/youtube-title-checker" className="panel panel-interactive p-4 ">
          <div className="text-sm font-display font-semibold text-ink">
            YouTube Title Checker →
          </div>
          <p className="mt-1 text-xs text-muted">Live search-result preview.</p>
        </Link>
        <Link href="/tools/youtube-description-checker" className="panel panel-interactive p-4 ">
          <div className="text-sm font-display font-semibold text-ink">
            YouTube Description Checker →
          </div>
          <p className="mt-1 text-xs text-muted">Check the &quot;show more&quot; cutoff.</p>
        </Link>
      </div>
    </div>
  );
}
