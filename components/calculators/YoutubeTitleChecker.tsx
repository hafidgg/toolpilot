"use client";

import { useMemo, useState } from "react";
import { checkYoutubeTitle } from "@/lib/content-calculations";

export default function YoutubeTitleChecker() {
  const [title, setTitle] = useState("");
  const result = useMemo(() => checkYoutubeTitle(title), [title]);

  const statusColor =
    result.status === "good"
      ? "text-gain"
      : result.status === "tight"
      ? "text-[#F5A623]"
      : "text-loss";

  const barColor =
    result.status === "good"
      ? "bg-gain"
      : result.status === "tight"
      ? "bg-[#F5A623]"
      : "bg-loss";

  return (
    <div className="panel p-6 md:p-8 max-w-2xl">
      <span className="eyebrow">Title</span>
      <input
        type="text"
        className="field-input mt-4 font-body text-base"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="How I Edited This Video in 10 Minutes"
        maxLength={150}
      />

      <div className="mt-4 h-1.5 w-full bg-raised border border-line-soft rounded-full overflow-hidden">
        <div
          className={`h-full transition-all ${barColor}`}
          style={{ width: `${Math.min((result.length / 100) * 100, 100)}%` }}
        />
      </div>

      <div className="mt-4 flex items-baseline justify-between">
        <span className={`readout text-sm font-semibold ${statusColor}`}>
          {result.length} characters
        </span>
        <span className="text-xs text-faint">Recommended: ≤ 60</span>
      </div>

      <p className="mt-2 text-sm text-muted">{result.message}</p>

      <div className="mt-6 rounded-md border border-line-soft bg-raised p-4">
        <div className="text-[11px] uppercase tracking-wider text-faint mb-2">
          Search result preview
        </div>
        <p className="text-[#3EA6FF] text-base leading-snug line-clamp-2">
          {title || "How I Edited This Video in 10 Minutes"}
        </p>
      </div>
    </div>
  );
}
