"use client";

import { useMemo, useState } from "react";
import EmptyState from "@/components/EmptyState";
import { formatHashtags, HashtagStyle } from "@/lib/content-calculations";

export default function HashtagFormatter() {
  const [raw, setRaw] = useState("digital marketing, small business tips, content creator");
  const [style, setStyle] = useState<HashtagStyle>("lowercase");
  const [copied, setCopied] = useState(false);

  const hashtags = useMemo(() => formatHashtags(raw, style), [raw, style]);
  const output = hashtags.join(" ");

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable — silently ignore
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="panel p-6">
        <span className="eyebrow">Keywords or phrases</span>
        <textarea
          className="field-input mt-4 h-40 resize-none font-body text-base leading-relaxed"
          value={raw}
          onChange={(e) => setRaw(e.target.value)}
          placeholder="One phrase per line, or separate with commas"
        />

        <div className="mt-4">
          <label className="field-label" id="hashtag-style-label">Style</label>
          <div className="flex gap-2" role="group" aria-labelledby="hashtag-style-label">
            <StyleButton
              active={style === "lowercase"}
              onClick={() => setStyle("lowercase")}
              label="#lowercase"
            />
            <StyleButton
              active={style === "camelcase"}
              onClick={() => setStyle("camelcase")}
              label="#CamelCase"
            />
          </div>
        </div>
      </div>

      <div className="panel terminal-grid p-6">
        <div className="flex items-center justify-between">
          <span className="eyebrow">Result ({hashtags.length})</span>
          <button
            onClick={copyToClipboard}
            disabled={hashtags.length === 0}
            className="text-xs font-mono text-accent hover:text-ink transition-colors disabled:text-faint disabled:cursor-not-allowed"
          >
            {copied ? "Copied" : "Copy all"}
          </button>
        </div>

        {hashtags.length === 0 ? (
          <EmptyState message="Type a keyword or phrase to generate hashtags." />
        ) : (
          <div className="mt-4 flex flex-wrap gap-2">
            {hashtags.map((tag, i) => (
              <span
                key={`${tag}-${i}`}
                className="readout text-sm bg-raised border border-line-soft rounded-md px-3 py-1.5 text-ink"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function StyleButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`px-3 py-1.5 rounded-md text-sm font-mono border transition-colors ${
        active
          ? "bg-accent-soft border-accent-dim text-accent"
          : "bg-raised border-line-soft text-muted hover:text-ink"
      }`}
    >
      {label}
    </button>
  );
}
