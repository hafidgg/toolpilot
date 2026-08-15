"use client";

import { useMemo, useState } from "react";
import { buildUtmLink } from "@/lib/seo-calculations";

export default function UtmLinkBuilder() {
  const [url, setUrl] = useState("");
  const [source, setSource] = useState("newsletter");
  const [medium, setMedium] = useState("email");
  const [campaign, setCampaign] = useState("");
  const [copied, setCopied] = useState(false);

  const result = useMemo(
    () => buildUtmLink({ url, source, medium, campaign }),
    [url, source, medium, campaign]
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
    <div className="grid md:grid-cols-2 gap-6">
      <div className="panel p-6 space-y-4">
        <span className="eyebrow">Link details</span>
        <div>
          <label className="field-label" htmlFor="utmlinkbuilder-destination-url-1">Destination URL</label>
          <input id="utmlinkbuilder-destination-url-1"
            type="text"
            className={`field-input ${
              url && !result ? "field-input-error" : url && result ? "field-input-success" : ""
            }`}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/landing-page"
            aria-invalid={Boolean(url && !result)}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="field-label" htmlFor="utmlinkbuilder-source-2">Source</label>
          <input id="utmlinkbuilder-source-2"
              type="text"
              className="field-input"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder="newsletter"
            />
          </div>
          <div>
            <label className="field-label" htmlFor="utmlinkbuilder-medium-3">Medium</label>
          <input id="utmlinkbuilder-medium-3"
              type="text"
              className="field-input"
              value={medium}
              onChange={(e) => setMedium(e.target.value)}
              placeholder="email"
            />
          </div>
        </div>
        <div>
          <label className="field-label" htmlFor="utmlinkbuilder-campaign-4">Campaign</label>
          <input id="utmlinkbuilder-campaign-4"
            type="text"
            className="field-input"
            value={campaign}
            onChange={(e) => setCampaign(e.target.value)}
            placeholder="spring-launch"
          />
        </div>
      </div>

      <div className="panel terminal-grid p-6">
        <div className="flex items-center justify-between">
          <span className="eyebrow">Generated link</span>
          <button
            onClick={copyToClipboard}
            disabled={!result}
            className="text-xs font-mono text-accent hover:text-ink transition-colors disabled:text-faint disabled:cursor-not-allowed"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <div className="mt-4 bg-raised border border-line-soft rounded-md px-4 py-3 min-h-24 flex items-center">
          <span className="readout text-sm text-ink break-all">
            {result || (
              <span className="text-faint">
                Enter a valid URL to generate your tracking link.
              </span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
