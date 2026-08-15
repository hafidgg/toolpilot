"use client";

import { useState } from "react";
import EmptyState from "@/components/EmptyState";

interface OgData {
  title: string | null;
  description: string | null;
  image: string | null;
  siteName: string | null;
  url: string;
}

export default function OgPreview() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState<OgData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheck() {
    if (!url.trim()) return;
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const res = await fetch(`/api/og-preview?url=${encodeURIComponent(url.trim())}`);
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || "Something went wrong.");
      } else {
        setData(json);
      }
    } catch {
      setError("Could not reach that URL.");
    } finally {
      setLoading(false);
    }
  }

  let hostname = "";
  try {
    hostname = data ? new URL(data.url).hostname : "";
  } catch {
    hostname = "";
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="panel p-6">
        <span className="eyebrow">URL</span>
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            className={`field-input ${error ? "field-input-error" : ""}`}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/article"
            onKeyDown={(e) => e.key === "Enter" && handleCheck()}
            aria-invalid={Boolean(error)}
          />
          <button onClick={handleCheck} className="btn-primary whitespace-nowrap" disabled={loading}>
            {loading ? "Checking..." : "Preview"}
          </button>
        </div>
        {error && <p className="mt-3 text-sm text-loss">{error}</p>}
        <p className="mt-4 text-xs text-faint">
          Fetches the page&apos;s Open Graph and meta tags server-side to build
          the preview below.
        </p>
      </div>

      <div className="panel p-6">
        <span className="eyebrow">Preview</span>
        {!data ? (
          <EmptyState message="Enter a URL to see how it'll look when shared." />
        ) : (
          <div className="mt-4 rounded-md border border-line-soft overflow-hidden bg-raised">
            {data.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={data.image}
                alt=""
                className="w-full h-40 object-cover border-b border-line-soft"
              />
            )}
            <div className="p-4">
              <p className="text-[11px] uppercase tracking-wider text-faint mb-1">
                {hostname}
              </p>
              <p className="text-sm font-semibold text-ink leading-snug">
                {data.title || "No title found"}
              </p>
              <p className="text-xs text-muted mt-1 leading-relaxed line-clamp-2">
                {data.description || "No description found"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
