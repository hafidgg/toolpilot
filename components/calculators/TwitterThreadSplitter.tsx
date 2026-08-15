"use client";

import { useMemo, useState } from "react";
import EmptyState from "@/components/EmptyState";
import { splitIntoThread } from "@/lib/content-calculations";

export default function TwitterThreadSplitter() {
  const [text, setText] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const tweets = useMemo(() => splitIntoThread(text, 280), [text]);

  async function copyTweet(i: number) {
    try {
      await navigator.clipboard.writeText(tweets[i]);
      setCopiedIndex(i);
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch {
      // clipboard unavailable
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="panel p-6">
        <span className="eyebrow">Full text</span>
        <textarea
          className="field-input mt-4 h-64 resize-none font-body text-base leading-relaxed"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste the long-form text you want to turn into a thread..."
        />
      </div>

      <div className="panel terminal-grid p-6">
        <span className="eyebrow">Thread ({tweets.length} posts)</span>
        {tweets.length === 0 ? (
          <EmptyState message="Paste text to split it into a thread." />
        ) : (
          <div className="mt-4 space-y-3 max-h-96 overflow-y-auto pr-1">
            {tweets.map((tweet, i) => (
              <div
                key={i}
                className="bg-raised border border-line-soft rounded-md p-3"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs text-faint font-mono">
                    {tweet.length} / 280
                  </span>
                  <button
                    onClick={() => copyTweet(i)}
                    className="text-xs font-mono text-accent hover:text-ink transition-colors"
                  >
                    {copiedIndex === i ? "Copied" : "Copy"}
                  </button>
                </div>
                <p className="text-sm text-ink leading-relaxed whitespace-pre-wrap">
                  {tweet}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
