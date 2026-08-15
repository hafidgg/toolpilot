"use client";

import { useMemo, useState } from "react";
import EmptyState from "@/components/EmptyState";
import { checkReadability } from "@/lib/seo-calculations";

export default function ReadabilityChecker() {
  const [text, setText] = useState("");
  const result = useMemo(() => checkReadability(text), [text]);

  const scoreColor = result
    ? result.fleschScore >= 60
      ? "text-gain"
      : result.fleschScore >= 30
      ? "text-[#F5A623]"
      : "text-loss"
    : "text-ink";

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="panel p-6">
        <span className="eyebrow">Your text</span>
        <textarea
          className="field-input mt-4 h-64 resize-none font-body text-base leading-relaxed"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste an article, blog post, or page copy..."
        />
      </div>

      <div className="panel terminal-grid p-6">
        <span className="eyebrow">Result</span>
        {!result ? (
          <EmptyState message="Paste text to check its readability." />
        ) : (
          <div className="mt-4 space-y-5">
            <div className="flex items-baseline justify-between border-b border-line-soft pb-4">
              <span className="text-sm text-muted">Flesch Reading Ease</span>
              <span className={`readout text-2xl font-semibold ${scoreColor}`}>
                {result.fleschScore}
              </span>
            </div>
            <p className="text-sm text-ink font-medium">{result.gradeLevel}</p>
            <div className="grid grid-cols-3 gap-3">
              <Metric label="Words" value={String(result.words)} />
              <Metric label="Sentences" value={String(result.sentences)} />
              <Metric label="Syllables" value={String(result.syllables)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-raised border border-line-soft rounded-md px-3 py-2.5">
      <div className="text-[10px] uppercase tracking-wider text-faint mb-1">{label}</div>
      <div className="readout text-sm font-semibold text-ink">{value}</div>
    </div>
  );
}
