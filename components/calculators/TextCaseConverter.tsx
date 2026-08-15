"use client";

import { useMemo, useState } from "react";
import { convertTextCase, TextCase } from "@/lib/content-calculations";

const CASES: { key: TextCase; label: string }[] = [
  { key: "uppercase", label: "UPPERCASE" },
  { key: "lowercase", label: "lowercase" },
  { key: "title", label: "Title Case" },
  { key: "sentence", label: "Sentence case" },
  { key: "camel", label: "camelCase" },
];

export default function TextCaseConverter() {
  const [text, setText] = useState("");
  const [activeCase, setActiveCase] = useState<TextCase>("title");
  const [copied, setCopied] = useState(false);

  const converted = useMemo(() => convertTextCase(text, activeCase), [text, activeCase]);

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(converted);
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
          className="field-input mt-4 h-48 resize-none font-body text-base leading-relaxed"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text..."
        />

        <div className="mt-4">
          <label className="field-label" id="case-convert-label">Convert to</label>
          <div className="flex flex-wrap gap-2" role="group" aria-labelledby="case-convert-label">
            {CASES.map((c) => (
              <button
                key={c.key}
                onClick={() => setActiveCase(c.key)}
                aria-pressed={activeCase === c.key}
                className={`px-3 py-1.5 rounded-md text-sm font-mono border transition-colors ${
                  activeCase === c.key
                    ? "bg-accent-soft border-accent-dim text-accent"
                    : "bg-raised border-line-soft text-muted hover:text-ink"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="panel terminal-grid p-6">
        <div className="flex items-center justify-between">
          <span className="eyebrow">Result</span>
          <button
            onClick={copyToClipboard}
            disabled={!converted}
            className="text-xs font-mono text-accent hover:text-ink transition-colors disabled:text-faint disabled:cursor-not-allowed"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <p className="mt-4 text-sm text-ink leading-relaxed whitespace-pre-wrap min-h-24">
          {converted || (
            <span className="text-faint">Converted text will appear here.</span>
          )}
        </p>
      </div>
    </div>
  );
}
