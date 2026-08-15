"use client";

import { useMemo, useState } from "react";
import { formatInstagramCaption } from "@/lib/content-calculations";

export default function InstagramCaptionFormatter() {
  const [caption, setCaption] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [copied, setCopied] = useState(false);

  const formatted = useMemo(
    () => formatInstagramCaption(caption, hashtags),
    [caption, hashtags]
  );

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(formatted);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="panel p-6 space-y-4">
        <span className="eyebrow">Caption</span>
        <textarea
          className="field-input h-32 resize-none font-body text-base leading-relaxed"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Write your caption..."
        />
        <div>
          <label className="field-label" htmlFor="instagramcaptionformatter-hashtags-1">Hashtags</label>
          <textarea id="instagramcaptionformatter-hashtags-1"
            className="field-input h-20 resize-none font-mono text-sm"
            value={hashtags}
            onChange={(e) => setHashtags(e.target.value)}
            placeholder="#travel #photography #sunset"
          />
        </div>
      </div>

      <div className="panel terminal-grid p-6">
        <div className="flex items-center justify-between">
          <span className="eyebrow">Formatted output</span>
          <button
            onClick={copyToClipboard}
            disabled={!formatted}
            className="text-xs font-mono text-accent hover:text-ink transition-colors disabled:text-faint disabled:cursor-not-allowed"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <pre className="mt-4 text-sm text-ink leading-relaxed whitespace-pre-wrap font-body min-h-32">
          {formatted || (
            <span className="text-faint">Your formatted caption will appear here.</span>
          )}
        </pre>
      </div>
    </div>
  );
}
