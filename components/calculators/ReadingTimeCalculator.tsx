"use client";

import { useMemo, useState } from "react";
import { countWords, formatReadingTime } from "@/lib/content-calculations";

export default function ReadingTimeCalculator() {
  const [text, setText] = useState("");
  const [wpm, setWpm] = useState("200");
  const result = useMemo(() => countWords(text), [text]);

  const adjustedSeconds = useMemo(() => {
    const rate = parseFloat(wpm) || 200;
    return Math.round((result.words / rate) * 60);
  }, [result.words, wpm]);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="panel p-6">
        <span className="eyebrow">Your text</span>
        <textarea
          className="field-input mt-4 h-56 resize-none font-body text-base leading-relaxed"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste an article, script, or transcript..."
        />
        <div className="mt-4">
          <label className="field-label" id="wpm-label">Reading speed (words/min)</label>
          <div className="flex gap-2" role="group" aria-labelledby="wpm-label">
            {["150", "200", "250"].map((v) => (
              <button
                key={v}
                onClick={() => setWpm(v)}
                aria-pressed={wpm === v}
                className={`px-3 py-1.5 rounded-md text-sm font-mono border transition-colors ${
                  wpm === v
                    ? "bg-accent-soft border-accent-dim text-accent"
                    : "bg-raised border-line-soft text-muted hover:text-ink"
                }`}
              >
                {v} wpm
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="panel terminal-grid p-6">
        <span className="eyebrow">Result</span>
        <div className="mt-4 space-y-5">
          <div className="flex items-baseline justify-between border-b border-line-soft pb-4">
            <span className="text-sm text-muted">Reading Time</span>
            <span className="readout text-2xl font-semibold text-ink">
              {formatReadingTime(adjustedSeconds)}
            </span>
          </div>
          <div className="bg-raised border border-line-soft rounded-md px-4 py-3 flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-muted">
              Word Count
            </span>
            <span className="readout text-sm font-semibold text-ink">
              {result.words}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
