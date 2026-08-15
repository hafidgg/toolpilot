"use client";

import { useMemo, useState } from "react";
import EmptyState from "@/components/EmptyState";
import { wordFrequency } from "@/lib/content-calculations";

export default function WordFrequencyCounter() {
  const [text, setText] = useState("");
  const [excludeStopwords, setExcludeStopwords] = useState(true);

  const result = useMemo(
    () => wordFrequency(text, excludeStopwords),
    [text, excludeStopwords]
  );
  const maxCount = result[0]?.count ?? 1;

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="panel p-6">
        <span className="eyebrow">Your text</span>
        <textarea
          className="field-input mt-4 h-56 resize-none font-body text-base leading-relaxed"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste an article, transcript, or script..."
        />
        <label className="mt-3 flex items-center gap-2 text-sm text-muted">
          <input
            type="checkbox"
            checked={excludeStopwords}
            onChange={(e) => setExcludeStopwords(e.target.checked)}
            className="accent-accent"
          />
          Exclude common words (the, and, is...)
        </label>
      </div>

      <div className="panel terminal-grid p-6">
        <span className="eyebrow">Top words</span>
        {result.length === 0 ? (
          <EmptyState message="Paste text to see word frequency." />
        ) : (
          <div className="mt-4 space-y-2 max-h-96 overflow-y-auto pr-1">
            {result.map((entry) => (
              <div key={entry.word} className="flex items-center gap-3">
                <span className="w-24 truncate text-sm text-ink font-mono">
                  {entry.word}
                </span>
                <div className="flex-1 h-2 bg-raised border border-line-soft rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent"
                    style={{ width: `${(entry.count / maxCount) * 100}%` }}
                  />
                </div>
                <span className="readout text-xs text-faint w-8 text-right">
                  {entry.count}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
