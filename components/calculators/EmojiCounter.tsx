"use client";

import { useMemo, useState } from "react";
import { countEmojis } from "@/lib/content-calculations";

export default function EmojiCounter() {
  const [text, setText] = useState("Launching our new drop today 🚀🔥 so excited!! 🎉🎉");

  const result = useMemo(() => countEmojis(text), [text]);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="panel p-6">
        <span className="eyebrow">Paste your text</span>
        <textarea
          className="field-input mt-4 h-48 resize-none font-body text-base leading-relaxed"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste a caption, comment, or bio..."
        />
      </div>

      <div className="panel terminal-grid p-6">
        <span className="eyebrow">Result</span>
        <div className="mt-4 space-y-5">
          <div className="flex items-baseline justify-between border-b border-line-soft pb-4">
            <span className="text-sm text-muted">Emoji Count</span>
            <span className="readout text-2xl font-semibold text-ink">
              {result.emojiCount}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Metric label="Total Characters" value={String(result.totalCharacters)} />
            <Metric label="Text Characters" value={String(result.textCharacters)} />
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-wider text-faint mb-2">
              Breakdown
            </div>
            {result.uniqueEmojis.length === 0 ? (
              <p className="text-sm text-faint">No emoji detected yet.</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {result.uniqueEmojis.map((e) => (
                  <span
                    key={e.emoji}
                    className="flex items-center gap-1.5 bg-raised border border-line-soft rounded-md px-2.5 py-1.5 text-sm"
                  >
                    <span>{e.emoji}</span>
                    <span className="readout text-xs text-faint">×{e.count}</span>
                  </span>
                ))}
              </div>
            )}
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
