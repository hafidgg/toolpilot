"use client";

import { useMemo, useState } from "react";
import { optimizeFileName } from "@/lib/seo-calculations";

export default function FileNameOptimizer() {
  const [fileName, setFileName] = useState("");
  const [copied, setCopied] = useState(false);
  const result = useMemo(() => optimizeFileName(fileName), [fileName]);

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(result.optimized);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable
    }
  }

  return (
    <div className="panel p-6 md:p-8 max-w-2xl">
      <span className="eyebrow">Original file name</span>
      <input
        type="text"
        className="field-input mt-4 font-mono text-sm"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
        placeholder="IMG_4821 Final Copy (2).jpg"
      />

      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] uppercase tracking-wider text-faint">
            Optimized
          </span>
          <button
            onClick={copyToClipboard}
            disabled={!result.optimized}
            className="text-xs font-mono text-accent hover:text-ink transition-colors disabled:text-faint disabled:cursor-not-allowed"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <div className="bg-raised border border-line-soft rounded-md px-4 py-3">
          <span className="readout text-sm text-ink break-all">
            {result.optimized || (
              <span className="text-faint">optimized-file-name.jpg</span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
