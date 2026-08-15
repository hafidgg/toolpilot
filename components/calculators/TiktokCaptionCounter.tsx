"use client";

import { useMemo, useState } from "react";
import { charCount } from "@/lib/content-calculations";

const LIMIT = 150;

export default function TiktokCaptionCounter() {
  const [text, setText] = useState("");
  const length = useMemo(() => charCount(text), [text]);
  const remaining = LIMIT - length;
  const over = remaining < 0;
  const ratio = Math.min(length / LIMIT, 1);

  return (
    <div className="panel p-6 md:p-8 max-w-2xl">
      <span className="eyebrow">Caption</span>
      <textarea
        className="field-input mt-4 h-32 resize-none font-body text-base leading-relaxed"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your TikTok caption..."
        maxLength={300}
      />

      <div className="mt-4 h-1.5 w-full bg-raised border border-line-soft rounded-full overflow-hidden">
        <div
          className={`h-full transition-all ${over ? "bg-loss" : "bg-accent"}`}
          style={{ width: `${ratio * 100}%` }}
        />
      </div>

      <div className="mt-4 flex items-baseline justify-between">
        <span className={`readout text-sm font-semibold ${over ? "text-loss" : "text-ink"}`}>
          {length} / {LIMIT}
        </span>
        <span className="text-xs text-faint">
          {over ? `${Math.abs(remaining)} over limit` : `${remaining} characters left`}
        </span>
      </div>
    </div>
  );
}
