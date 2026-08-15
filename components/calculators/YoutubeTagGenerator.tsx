"use client";

import { useMemo, useState } from "react";
import { generateYoutubeTags } from "@/lib/content-calculations";

export default function YoutubeTagGenerator() {
  const [raw, setRaw] = useState("video editing tutorial, how to edit videos, video editing tips, beginner video editing");
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => generateYoutubeTags(raw), [raw]);
  const output = result.tags.join(", ");

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="panel p-6">
        <span className="eyebrow">Keywords (one per line or comma-separated)</span>
        <textarea
          className="field-input mt-4 h-48 resize-none font-body text-base leading-relaxed"
          value={raw}
          onChange={(e) => setRaw(e.target.value)}
          placeholder="video editing tutorial, how to edit videos..."
        />
      </div>

      <div className="panel terminal-grid p-6">
        <div className="flex items-center justify-between">
          <span className="eyebrow">Tags ({result.tags.length})</span>
          <button
            onClick={copyToClipboard}
            disabled={result.tags.length === 0}
            className="text-xs font-mono text-accent hover:text-ink transition-colors disabled:text-faint disabled:cursor-not-allowed"
          >
            {copied ? "Copied" : "Copy all"}
          </button>
        </div>

        <div className="mt-4 flex items-baseline justify-between border-b border-line-soft pb-4">
          <span className="text-sm text-muted">Character Usage</span>
          <span className="readout text-lg font-semibold text-ink">
            {result.totalLength} / 500
          </span>
        </div>

        {result.overLimit && (
          <p className="mt-3 text-xs text-loss">
            Some keywords were dropped — they would exceed YouTube&apos;s 500-character tag limit.
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {result.tags.map((tag, i) => (
            <span
              key={`${tag}-${i}`}
              className="readout text-sm bg-raised border border-line-soft rounded-md px-3 py-1.5 text-ink"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
