"use client";

import { useMemo, useState } from "react";
import { slugify } from "@/lib/seo-calculations";

export default function UrlSlugGenerator() {
  const [title, setTitle] = useState("");
  const [copied, setCopied] = useState(false);
  const slug = useMemo(() => slugify(title), [title]);

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(slug);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable
    }
  }

  return (
    <div className="panel p-6 md:p-8 max-w-2xl">
      <span className="eyebrow">Title</span>
      <input
        type="text"
        className="field-input mt-4 font-body text-base"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="How to Calculate Position Size (With Examples)"
      />

      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] uppercase tracking-wider text-faint">
            Slug
          </span>
          <button
            onClick={copyToClipboard}
            disabled={!slug}
            className="text-xs font-mono text-accent hover:text-ink transition-colors disabled:text-faint disabled:cursor-not-allowed"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <div className="bg-raised border border-line-soft rounded-md px-4 py-3">
          <span className="readout text-sm text-ink break-all">
            {slug || <span className="text-faint">your-slug-will-appear-here</span>}
          </span>
        </div>
      </div>
    </div>
  );
}
