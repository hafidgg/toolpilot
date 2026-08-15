"use client";

import { useMemo, useState } from "react";
import {
  extractYoutubeVideoId,
  parseTimeToSeconds,
  buildTimestampedUrl,
} from "@/lib/youtube-tools";

export default function YoutubeTimestampGenerator() {
  const [url, setUrl] = useState("");
  const [time, setTime] = useState("1:30");
  const [copied, setCopied] = useState(false);

  const videoId = useMemo(() => extractYoutubeVideoId(url), [url]);
  const seconds = useMemo(() => parseTimeToSeconds(time), [time]);
  const result = useMemo(
    () => (videoId && seconds !== null ? buildTimestampedUrl(videoId, seconds) : null),
    [videoId, seconds]
  );

  async function copyToClipboard() {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable
    }
  }

  return (
    <div className="panel p-6 md:p-8 max-w-2xl">
      <span className="eyebrow">Video URL</span>
      <input
        type="text"
        className="field-input mt-4 font-mono text-sm"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />

      <div className="mt-4">
        <label className="field-label" htmlFor="youtubetimestampgenerator-timestamp-mm-ss-or-hh-mm-ss-1">Timestamp (mm:ss or hh:mm:ss)</label>
          <input id="youtubetimestampgenerator-timestamp-mm-ss-or-hh-mm-ss-1"
          type="text"
          className="field-input"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="1:30"
        />
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] uppercase tracking-wider text-faint">
            Timestamped link
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
            {result || (
              <span className="text-faint">
                Enter a valid URL and timestamp.
              </span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
