"use client";

import { useMemo, useState } from "react";
import { buildOgTags } from "@/lib/seo-calculations";

export default function OgTagGenerator() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [siteName, setSiteName] = useState("");
  const [copied, setCopied] = useState(false);

  const output = useMemo(
    () => buildOgTags({ title, description, image, url, siteName }),
    [title, description, image, url, siteName]
  );

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="panel p-6 space-y-4">
        <span className="eyebrow">Page details</span>
        <div>
          <label className="field-label" htmlFor="ogtaggenerator-title-1">Title</label>
          <input id="ogtaggenerator-title-1" type="text" className="field-input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Page title" />
        </div>
        <div>
          <label className="field-label" htmlFor="ogtaggenerator-description-2">Description</label>
          <textarea id="ogtaggenerator-description-2" className="field-input h-20 resize-none" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Page description" />
        </div>
        <div>
          <label className="field-label" htmlFor="ogtaggenerator-image-url-3">Image URL</label>
          <input id="ogtaggenerator-image-url-3" type="text" className="field-input" value={image} onChange={(e) => setImage(e.target.value)} placeholder="https://example.com/og-image.jpg" />
        </div>
        <div>
          <label className="field-label" htmlFor="ogtaggenerator-page-url-4">Page URL</label>
          <input id="ogtaggenerator-page-url-4" type="text" className="field-input" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com/page" />
        </div>
        <div>
          <label className="field-label" htmlFor="ogtaggenerator-site-name-5">Site Name</label>
          <input id="ogtaggenerator-site-name-5" type="text" className="field-input" value={siteName} onChange={(e) => setSiteName(e.target.value)} placeholder="Your Site" />
        </div>
      </div>

      <div className="panel terminal-grid p-6">
        <div className="flex items-center justify-between">
          <span className="eyebrow">Meta tags</span>
          <button
            onClick={copyToClipboard}
            disabled={!output}
            className="text-xs font-mono text-accent hover:text-ink transition-colors disabled:text-faint disabled:cursor-not-allowed"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <pre className="mt-4 text-xs text-ink font-mono whitespace-pre-wrap leading-relaxed max-h-96 overflow-y-auto">
          {output || <span className="text-faint">Fill in the fields to generate tags.</span>}
        </pre>
      </div>
    </div>
  );
}
