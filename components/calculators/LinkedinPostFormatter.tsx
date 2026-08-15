"use client";

import { useMemo, useState } from "react";
import { checkLinkedInPost } from "@/lib/content-calculations";

export default function LinkedinPostFormatter() {
  const [text, setText] = useState("");
  const result = useMemo(() => checkLinkedInPost(text), [text]);

  const statusColor =
    result.status === "good"
      ? "text-gain"
      : result.status === "tight"
      ? "text-[#F5A623]"
      : "text-loss";

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="panel p-6">
        <span className="eyebrow">Your post</span>
        <textarea
          className="field-input mt-4 h-64 resize-none font-body text-base leading-relaxed"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your LinkedIn post — line breaks are preserved."
        />
      </div>

      <div className="panel p-6">
        <span className="eyebrow">Preview</span>
        <div className="mt-4 flex items-baseline justify-between border-b border-line-soft pb-3">
          <span className={`readout text-sm font-semibold ${statusColor}`}>
            {result.length} characters
          </span>
        </div>
        <p className="mt-2 text-xs text-muted">{result.message}</p>

        <div className="mt-4 rounded-md border border-line-soft bg-raised p-4">
          <p className="text-sm text-ink leading-relaxed whitespace-pre-wrap line-clamp-[6]">
            {text || "Your post preview will appear here."}
          </p>
        </div>
      </div>
    </div>
  );
}
