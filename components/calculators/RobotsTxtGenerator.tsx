"use client";

import { useMemo, useState } from "react";
import { buildRobotsTxt, RobotsRule } from "@/lib/seo-calculations";

export default function RobotsTxtGenerator() {
  const [disallow, setDisallow] = useState("/admin\n/api");
  const [allow, setAllow] = useState("");
  const [sitemapUrl, setSitemapUrl] = useState("https://example.com/sitemap.xml");
  const [copied, setCopied] = useState(false);

  const rules: RobotsRule[] = useMemo(
    () => [
      {
        userAgent: "*",
        disallow: disallow.split("\n").map((l) => l.trim()).filter(Boolean),
        allow: allow.split("\n").map((l) => l.trim()).filter(Boolean),
      },
    ],
    [disallow, allow]
  );

  const output = useMemo(() => buildRobotsTxt(rules, sitemapUrl), [rules, sitemapUrl]);

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
        <div>
          <label className="field-label" htmlFor="robotstxtgenerator-disallow-one-path-per-line-1">Disallow (one path per line)</label>
          <textarea id="robotstxtgenerator-disallow-one-path-per-line-1"
            className="field-input h-24 resize-none font-mono text-sm"
            value={disallow}
            onChange={(e) => setDisallow(e.target.value)}
            placeholder="/admin"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="robotstxtgenerator-allow-optional-2">Allow (optional)</label>
          <textarea id="robotstxtgenerator-allow-optional-2"
            className="field-input h-16 resize-none font-mono text-sm"
            value={allow}
            onChange={(e) => setAllow(e.target.value)}
            placeholder="/public"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="robotstxtgenerator-sitemap-url-3">Sitemap URL</label>
          <input id="robotstxtgenerator-sitemap-url-3"
            type="text"
            className="field-input"
            value={sitemapUrl}
            onChange={(e) => setSitemapUrl(e.target.value)}
            placeholder="https://example.com/sitemap.xml"
          />
        </div>
      </div>

      <div className="panel terminal-grid p-6">
        <div className="flex items-center justify-between">
          <span className="eyebrow">robots.txt</span>
          <button
            onClick={copyToClipboard}
            className="text-xs font-mono text-accent hover:text-ink transition-colors"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <pre className="mt-4 text-sm text-ink font-mono whitespace-pre-wrap leading-relaxed">
          {output}
        </pre>
      </div>
    </div>
  );
}
