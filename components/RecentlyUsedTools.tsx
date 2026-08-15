"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getRecentlyUsedSlugs } from "@/lib/recently-used-tools";
import { getAllTools } from "@/lib/tools-data";

export default function RecentlyUsedTools() {
  const [slugs, setSlugs] = useState<string[]>([]);

  useEffect(() => {
    setSlugs(getRecentlyUsedSlugs());
  }, []);

  if (slugs.length === 0) return null;

  const allTools = getAllTools();
  const tools = slugs
    .map((slug) => allTools.find((t) => t.slug === slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  if (tools.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 pt-8">
      <span className="eyebrow">Recently Used</span>
      <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="flex-shrink-0 panel px-4 py-3 hover:border-accent-dim transition-colors"
          >
            <span className="text-sm text-ink whitespace-nowrap">{tool.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
