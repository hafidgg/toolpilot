"use client";

import { useMemo, useState } from "react";
import { countLines } from "@/lib/content-calculations";

export default function LineCounter() {
  const [text, setText] = useState("");
  const result = useMemo(() => countLines(text), [text]);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="panel p-6">
        <span className="eyebrow">Your text</span>
        <textarea
          className="field-input mt-4 h-64 resize-none font-mono text-sm leading-relaxed"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste lines of text, code, or a list..."
        />
      </div>

      <div className="panel terminal-grid p-6">
        <span className="eyebrow">Result</span>
        <div className="mt-4 space-y-5">
          <div className="flex items-baseline justify-between border-b border-line-soft pb-4">
            <span className="text-sm text-muted">Total Lines</span>
            <span className="readout text-2xl font-semibold text-ink">
              {result.totalLines}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Metric label="Non-Empty Lines" value={String(result.nonEmptyLines)} />
            <Metric label="Blank Lines" value={String(result.blankLines)} />
          </div>
        </div>
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
