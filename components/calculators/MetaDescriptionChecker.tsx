"use client";

import { useMemo, useState } from "react";
import { checkMetaDescription } from "@/lib/seo-calculations";

export default function MetaDescriptionChecker() {
  const [text, setText] = useState("");
  const result = useMemo(() => checkMetaDescription(text), [text]);

  const statusColor =
    result.status === "good"
      ? "text-gain"
      : result.status === "too-short"
      ? "text-[#F5A623]"
      : "text-loss";

  const ratio = Math.min(result.length / 155, 1);

  return (
    <div className="panel p-6 md:p-8 max-w-2xl">
      <span className="eyebrow">Meta Description</span>
      <textarea
        className="field-input mt-4 h-24 resize-none font-body text-base leading-relaxed"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your page's meta description..."
        maxLength={300}
      />

      <div className="mt-4 h-1.5 w-full bg-raised border border-line-soft rounded-full overflow-hidden">
        <div
          className={`h-full transition-all ${
            result.status === "too-long" ? "bg-loss" : "bg-accent"
          }`}
          style={{ width: `${ratio * 100}%` }}
        />
      </div>

      <div className="mt-4 flex items-baseline justify-between">
        <span className={`readout text-sm font-semibold ${statusColor}`}>
          {result.length} / 155
        </span>
      </div>
      <p className="mt-2 text-sm text-muted">{result.message}</p>

      <div className="mt-6 rounded-md border border-line-soft bg-raised p-4">
        <div className="text-[11px] uppercase tracking-wider text-faint mb-2">
          Google search preview
        </div>
        <p className="text-[#8AB4F8] text-base">example.com/your-page</p>
        <p className="text-[#BDC1C6] text-sm mt-1 leading-snug line-clamp-2">
          {text || "Your meta description preview will appear here."}
        </p>
      </div>
    </div>
  );
}
