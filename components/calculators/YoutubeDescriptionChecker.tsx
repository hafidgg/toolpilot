"use client";

import { useMemo, useState } from "react";
import { checkYoutubeDescription } from "@/lib/content-calculations";

export default function YoutubeDescriptionChecker() {
  const [description, setDescription] = useState("");
  const result = useMemo(() => checkYoutubeDescription(description), [description]);

  const statusColor =
    result.previewStatus === "good"
      ? "text-gain"
      : result.previewStatus === "tight"
      ? "text-[#F5A623]"
      : "text-loss";

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="panel p-6">
        <span className="eyebrow">Description</span>
        <textarea
          className="field-input mt-4 h-56 resize-none font-body text-base leading-relaxed"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Paste your video description..."
        />
      </div>

      <div className="panel terminal-grid p-6">
        <span className="eyebrow">Result</span>
        <div className="mt-4 space-y-5">
          <div className="flex items-baseline justify-between border-b border-line-soft pb-4">
            <span className="text-sm text-muted">Characters</span>
            <span className={`readout text-2xl font-semibold ${statusColor}`}>
              {result.length}
            </span>
          </div>
          <p className="text-sm text-muted">{result.previewMessage}</p>

          <div className="rounded-md border border-line-soft bg-raised p-4">
            <div className="text-[11px] uppercase tracking-wider text-faint mb-2">
              Preview before &quot;show more&quot;
            </div>
            <p className="text-sm text-ink leading-relaxed line-clamp-2">
              {description || "Your description preview will appear here."}
            </p>
          </div>

          <div className="text-xs text-faint">
            Total limit: {result.length.toLocaleString()} / 5,000 characters
          </div>
        </div>
      </div>
    </div>
  );
}
