"use client";

import { useMemo, useState } from "react";
import { removeDuplicateLines } from "@/lib/content-calculations";

export default function DuplicateLineRemover() {
  const [text, setText] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [copied, setCopied] = useState(false);

  const result = useMemo(
    () => removeDuplicateLines(text, caseSensitive),
    [text, caseSensitive]
  );

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(result.output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="panel p-6">
        <span className="eyebrow">Your list</span>
        <textarea
          className="field-input mt-4 h-56 resize-none font-mono text-sm"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste a list with one item per line..."
        />
        <label className="mt-3 flex items-center gap-2 text-sm text-muted">
          <input
            type="checkbox"
            checked={caseSensitive}
            onChange={(e) => setCaseSensitive(e.target.checked)}
            className="accent-accent"
          />
          Case-sensitive comparison
        </label>
      </div>

      <div className="panel terminal-grid p-6">
        <div className="flex items-center justify-between">
          <span className="eyebrow">
            Result — {result.removedCount} removed
          </span>
          <button
            onClick={copyToClipboard}
            disabled={!result.output}
            className="text-xs font-mono text-accent hover:text-ink transition-colors disabled:text-faint disabled:cursor-not-allowed"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <pre className="mt-4 text-sm text-ink leading-relaxed whitespace-pre-wrap font-mono min-h-40 max-h-64 overflow-y-auto">
          {result.output || (
            <span className="text-faint">Cleaned list will appear here.</span>
          )}
        </pre>
      </div>
    </div>
  );
}
