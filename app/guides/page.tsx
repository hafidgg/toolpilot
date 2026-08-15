import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides",
  description: "In-depth guides covering every tool category on ToolPilot.",
  twitter: {
    card: "summary_large_image",
    title: "Guides",
    description: "In-depth guides covering every tool category on ToolPilot.",
  },
};

export default function GuidesIndexPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <span className="eyebrow">Guides</span>
      <h1 className="mt-3 text-3xl font-display font-semibold text-ink">
        Complete guides
      </h1>
      <p className="mt-4 text-sm text-muted leading-relaxed">
        Deeper, single-page references covering every tool in a category,
        with examples and FAQs.
      </p>

      <div className="mt-10 space-y-1">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="group block py-5 border-b border-line-soft"
          >
            <h2 className="text-base font-display font-semibold text-ink group-hover:text-accent transition-colors">
              {guide.title}
            </h2>
            <p className="mt-1.5 text-sm text-muted leading-relaxed">
              {guide.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
