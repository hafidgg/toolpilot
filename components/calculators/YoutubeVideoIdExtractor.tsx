"use client";

import { useMemo, useState } from "react";
import { extractYoutubeVideoId } from "@/lib/youtube-tools";

export default function YoutubeVideoIdExtractor() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const videoId = useMemo(() => extractYoutubeVideoId(input), [input]);

  async function copyToClipboard() {
    if (!videoId) return;
    try {
      await navigator.clipboard.writeText(videoId);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable
    }
  }

  return (
    <div className="panel p-6 md:p-8 max-w-2xl">
      <span className="eyebrow">YouTube URL</span>
      <input
        type="text"
        className="field-input mt-4 font-mono text-sm"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="https://youtu.be/dQw4w9WgXcQ"
      />

      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] uppercase tracking-wider text-faint">
            Video ID
          </span>
          <button
            onClick={copyToClipboard}
            disabled={!videoId}
            className="text-xs font-mono text-accent hover:text-ink transition-colors disabled:text-faint disabled:cursor-not-allowed"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <div className="bg-raised border border-line-soft rounded-md px-4 py-3">
          <span className="readout text-sm text-ink">
            {videoId || (
              <span className="text-faint">
                {input ? "No valid video ID found" : "dQw4w9WgXcQ"}
              </span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
