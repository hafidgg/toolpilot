"use client";

import { useMemo, useState } from "react";
import { charCount, PLATFORM_LIMITS } from "@/lib/content-calculations";

export default function CharacterCounter() {
  const [text, setText] = useState("");
  const length = useMemo(() => charCount(text), [text]);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="panel p-6">
        <span className="eyebrow">Your text</span>
        <textarea
          className="field-input mt-4 h-56 resize-none font-body text-base leading-relaxed"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write or paste your post..."
        />
        <div className="mt-3 flex items-center justify-between text-xs text-faint">
          <span>Characters typed (including spaces)</span>
          <span className="readout text-ink">{length}</span>
        </div>
      </div>

      <div className="panel p-6">
        <span className="eyebrow">Platform limits</span>
        <div className="mt-4 space-y-4">
          {PLATFORM_LIMITS.map((p) => {
            const ratio = Math.min(length / p.limit, 1);
            const over = length > p.limit;
            return (
              <div key={p.key}>
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="text-sm text-ink">{p.label}</span>
                  <span
                    className={`readout text-xs ${
                      over ? "text-loss" : "text-muted"
                    }`}
                  >
                    {length}/{p.limit.toLocaleString()}
                  </span>
                </div>
                <div className="h-1.5 w-full bg-raised border border-line-soft rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all ${
                      over ? "bg-loss" : "bg-accent"
                    }`}
                    style={{ width: `${ratio * 100}%` }}
                  />
                </div>
                {p.note && (
                  <p className="mt-1 text-[11px] text-faint">{p.note}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
