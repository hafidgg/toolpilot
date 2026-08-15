"use client";

import { useMemo, useState } from "react";
import EmptyState from "@/components/EmptyState";
import { checkKeywordDensity } from "@/lib/seo-calculations";

export default function KeywordDensityChecker() {
  const [text, setText] = useState("");
  const [keyword, setKeyword] = useState("");
  const result = useMemo(() => checkKeywordDensity(text, keyword), [text, keyword]);

  const densityStatus = result
    ? result.density < 0.5
      ? "low"
      : result.density <= 2.5
      ? "good"
      : "high"
    : null;

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="panel p-6 space-y-4">
        <div>
          <span className="eyebrow">Keyword or phrase</span>
          <input
            type="text"
            className="field-input mt-2 font-body text-base"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="position size calculator"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="keyworddensitychecker-text-1">Text</label>
          <textarea id="keyworddensitychecker-text-1"
            className="field-input h-56 resize-none font-body text-base leading-relaxed"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your article or page content..."
          />
        </div>
      </div>

      <div className="panel terminal-grid p-6">
        <span className="eyebrow">Result</span>
        {!result ? (
          <EmptyState message="Enter a keyword and some text to check density." />
        ) : (
          <div className="mt-4 space-y-5">
            <div className="flex items-baseline justify-between border-b border-line-soft pb-4">
              <span className="text-sm text-muted">Density</span>
              <span
                className={`readout text-2xl font-semibold ${
                  densityStatus === "good"
                    ? "text-gain"
                    : densityStatus === "high"
                    ? "text-loss"
                    : "text-[#F5A623]"
                }`}
              >
                {result.density.toFixed(2)}%
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Metric label="Occurrences" value={String(result.occurrences)} />
              <Metric label="Total Words" value={String(result.totalWords)} />
            </div>
            <p className="text-xs text-faint">
              A density of roughly 0.5%–2.5% is generally considered natural for
              most content. Higher than that can start to look like keyword
              stuffing.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-raised border border-line-soft rounded-md px-4 py-3">
      <div className="text-[11px] uppercase tracking-wider text-faint mb-1">
        {label}
      </div>
      <div className="readout text-sm font-semibold text-ink">{value}</div>
    </div>
  );
}
