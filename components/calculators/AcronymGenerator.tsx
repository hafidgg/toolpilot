"use client";

import { useMemo, useState } from "react";
import { generateAcronym } from "@/lib/content-calculations";

export default function AcronymGenerator() {
  const [phrase, setPhrase] = useState("");
  const [copied, setCopied] = useState(false);
  const acronym = useMemo(() => generateAcronym(phrase), [phrase]);

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(acronym);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable
    }
  }

  return (
    <div className="panel p-6 md:p-8 max-w-2xl">
      <span className="eyebrow">Phrase</span>
      <input
        type="text"
        className="field-input mt-4 font-body text-base"
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
        placeholder="Search Engine Optimization"
      />

      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] uppercase tracking-wider text-faint">
            Acronym
          </span>
          <button
            onClick={copyToClipboard}
            disabled={!acronym}
            className="text-xs font-mono text-accent hover:text-ink transition-colors disabled:text-faint disabled:cursor-not-allowed"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <div className="bg-raised border border-line-soft rounded-md px-4 py-3">
          <span className="readout text-2xl font-semibold text-ink">
            {acronym || <span className="text-faint text-sm font-body">SEO</span>}
          </span>
        </div>
      </div>
    </div>
  );
}
