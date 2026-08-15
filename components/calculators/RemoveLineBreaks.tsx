"use client";

import { useMemo, useState } from "react";
import { removeLineBreaks, LineBreakMode } from "@/lib/content-calculations";

export default function RemoveLineBreaks() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState<LineBreakMode>("single-space");
  const [copied, setCopied] = useState(false);

  const output = useMemo(() => removeLineBreaks(text, mode), [text, mode]);

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
        <span className="eyebrow">Your text</span>
        <textarea
          className="field-input mt-4 h-56 resize-none font-body text-base leading-relaxed"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste text with line breaks you want removed..."
        />
        <div className="mt-4 flex gap-2" role="group" aria-label="Line break handling mode">
          <button
            onClick={() => setMode("single-space")}
            aria-pressed={mode === "single-space"}
            className={`px-3 py-1.5 rounded-md text-sm font-mono border transition-colors ${
              mode === "single-space"
                ? "bg-accent-soft border-accent-dim text-accent"
                : "bg-raised border-line-soft text-muted hover:text-ink"
            }`}
          >
            Merge into one block
          </button>
          <button
            onClick={() => setMode("paragraph")}
            aria-pressed={mode === "paragraph"}
            className={`px-3 py-1.5 rounded-md text-sm font-mono border transition-colors ${
              mode === "paragraph"
                ? "bg-accent-soft border-accent-dim text-accent"
                : "bg-raised border-line-soft text-muted hover:text-ink"
            }`}
          >
            Keep paragraph breaks
          </button>
        </div>
      </div>

      <div className="panel terminal-grid p-6">
        <div className="flex items-center justify-between">
          <span className="eyebrow">Result</span>
          <button
            onClick={copyToClipboard}
            disabled={!output}
            className="text-xs font-mono text-accent hover:text-ink transition-colors disabled:text-faint disabled:cursor-not-allowed"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <p className="mt-4 text-sm text-ink leading-relaxed whitespace-pre-wrap min-h-40">
          {output || <span className="text-faint">Result will appear here.</span>}
        </p>
      </div>
    </div>
  );
}
