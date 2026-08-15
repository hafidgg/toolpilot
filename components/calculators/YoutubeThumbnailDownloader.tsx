"use client";

import { useMemo, useState } from "react";
import EmptyState from "@/components/EmptyState";
import { extractYoutubeVideoId, getThumbnailVariants } from "@/lib/youtube-tools";

export default function YoutubeThumbnailDownloader() {
  const [input, setInput] = useState("");
  const videoId = useMemo(() => extractYoutubeVideoId(input), [input]);
  const variants = useMemo(
    () => (videoId ? getThumbnailVariants(videoId) : []),
    [videoId]
  );

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="panel p-6">
        <span className="eyebrow">YouTube URL or Video ID</span>
        <input
          type="text"
          className="field-input mt-4 font-mono text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        />
        {input && !videoId && (
          <p className="mt-3 text-sm text-loss">
            Couldn&apos;t find a valid video ID in that input.
          </p>
        )}
      </div>

      <div className="panel terminal-grid p-6">
        <span className="eyebrow">Thumbnails</span>
        {variants.length === 0 ? (
          <EmptyState message="Paste a YouTube link to get all thumbnail sizes." />
        ) : (
          <div className="mt-4 space-y-3">
            {variants.map((v) => (
              <a
                key={v.key}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-raised border border-line-soft rounded-md px-4 py-3 hover:border-accent-dim transition-colors"
              >
                <div>
                  <div className="text-sm text-ink font-medium">{v.label}</div>
                  <div className="text-xs text-faint font-mono">{v.dimensions}</div>
                </div>
                <span className="text-xs font-mono text-accent">Open →</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
