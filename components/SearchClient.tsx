"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { getAllTools } from "@/lib/tools-data";
import { blogPosts } from "@/lib/blog-posts";
import { guides } from "@/lib/guides";

interface SearchResult {
  title: string;
  description: string;
  href: string;
  type: "Tool" | "Guide" | "Article";
}

export default function SearchClient() {
  const [query, setQuery] = useState("");

  const allItems: SearchResult[] = useMemo(() => {
    const tools: SearchResult[] = getAllTools().map((t) => ({
      title: t.title,
      description: t.shortDescription,
      href: `/tools/${t.slug}`,
      type: "Tool",
    }));
    const guideItems: SearchResult[] = guides.map((g) => ({
      title: g.title,
      description: g.description,
      href: `/guides/${g.slug}`,
      type: "Guide",
    }));
    const articles: SearchResult[] = blogPosts.map((p) => ({
      title: p.title,
      description: p.description,
      href: `/blog/${p.slug}`,
      type: "Article",
    }));
    return [...tools, ...guideItems, ...articles];
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    );
  }, [query, allItems]);

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <span className="eyebrow">Search</span>
      <h1 className="mt-3 text-3xl font-display font-semibold text-ink">
        Search ToolPilot
      </h1>

      <input
        type="text"
        autoFocus
        className="field-input mt-6 text-base"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search tools, guides, and articles..."
      />

      <div className="mt-8">
        {query.trim() === "" ? (
          <p className="text-sm text-faint">
            Start typing to search across all {allItems.length} tools, guides,
            and articles.
          </p>
        ) : results.length === 0 ? (
          <p className="text-sm text-faint">No results for &quot;{query}&quot;.</p>
        ) : (
          <div className="space-y-1">
            {results.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block py-4 border-b border-line-soft"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent">
                    {item.type}
                  </span>
                </div>
                <h2 className="text-sm font-display font-semibold text-ink group-hover:text-accent transition-colors">
                  {item.title}
                </h2>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
