"use client";

import { useMemo, useState } from "react";
import { charCount, BIO_LIMITS } from "@/lib/content-calculations";

export default function BioCharacterCounter() {
  const [text, setText] = useState("");
  const length = useMemo(() => charCount(text), [text]);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="panel p-6">
        <span className="eyebrow">Your bio</span>
        <textarea
          className="field-input mt-4 h-40 resize-none font-body text-base leading-relaxed"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your bio..."
        />
        <div className="mt-3 flex items-center justify-between text-xs text-faint">
          <span>Characters typed</span>
          <span className="readout text-ink">{length}</span>
        </div>
      </div>

      <div className="panel p-6">
        <span className="eyebrow">Platform limits</span>
        <div className="mt-4 space-y-4">
          {BIO_LIMITS.map((p) => {
            const ratio = Math.min(length / p.limit, 1);
            const over = length > p.limit;
            return (
              <div key={p.key}>
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="text-sm text-ink">{p.label}</span>
                  <span className={`readout text-xs ${over ? "text-loss" : "text-muted"}`}>
                    {length}/{p.limit}
                  </span>
                </div>
                <div className="h-1.5 w-full bg-raised border border-line-soft rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all ${over ? "bg-loss" : "bg-accent"}`}
                    style={{ width: `${ratio * 100}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
