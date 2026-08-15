"use client";

import { useMemo, useState } from "react";
import { extractYoutubeChannelIdentifier } from "@/lib/youtube-tools";

const TYPE_LABELS: Record<string, string> = {
  handle: "Handle",
  "channel-id": "Channel ID",
  custom: "Custom URL",
  user: "Legacy Username",
  unknown: "Unrecognized format",
};

export default function YoutubeChannelIdFinder() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const result = useMemo(() => extractYoutubeChannelIdentifier(input), [input]);

  async function copyToClipboard() {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable
    }
  }

  return (
    <div className="panel p-6 md:p-8 max-w-2xl">
      <span className="eyebrow">Channel URL or @handle</span>
      <input
        type="text"
        className="field-input mt-4 font-mono text-sm"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="https://www.youtube.com/@mkbhd"
      />

      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] uppercase tracking-wider text-faint">
            {result ? TYPE_LABELS[result.type] : "Result"}
          </span>
          <button
            onClick={copyToClipboard}
            disabled={!result}
            className="text-xs font-mono text-accent hover:text-ink transition-colors disabled:text-faint disabled:cursor-not-allowed"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <div className="bg-raised border border-line-soft rounded-md px-4 py-3">
          <span className="readout text-sm text-ink break-all">
            {result?.value || <span className="text-faint">@mkbhd</span>}
          </span>
        </div>
      </div>
    </div>
  );
}
