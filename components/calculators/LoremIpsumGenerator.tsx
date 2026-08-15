"use client";

import { useEffect, useState } from "react";
import { generateLoremIpsum } from "@/lib/content-calculations";

export default function LoremIpsumGenerator() {
  const [paragraphs, setParagraphs] = useState(3);
  const [sentences, setSentences] = useState(4);
  const [output, setOutput] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Math.random() output would differ between the server-rendered HTML and
  // the client's first render, causing a React hydration mismatch. Running
  // the generation inside useEffect guarantees it only ever runs client-side,
  // after hydration is already complete.
  useEffect(() => {
    setOutput(generateLoremIpsum(paragraphs, sentences));
  }, [paragraphs, sentences]);

  function regenerate() {
    setOutput(generateLoremIpsum(paragraphs, sentences));
  }

  async function copyToClipboard() {
    if (!output) return;
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
        <span className="eyebrow">Settings</span>
        <div>
          <label className="field-label" htmlFor="loremipsumgenerator-paragraphs-1">Paragraphs:{paragraphs}</label>
          <input id="loremipsumgenerator-paragraphs-1"
            type="range"
            min="1"
            max="10"
            value={paragraphs}
            onChange={(e) => setParagraphs(parseInt(e.target.value))}
            className="w-full accent-accent"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="loremipsumgenerator-sentences-per-paragraph-2">Sentences per paragraph:{sentences}</label>
          <input id="loremipsumgenerator-sentences-per-paragraph-2"
            type="range"
            min="2"
            max="10"
            value={sentences}
            onChange={(e) => setSentences(parseInt(e.target.value))}
            className="w-full accent-accent"
          />
        </div>
        <button onClick={regenerate} className="btn-primary text-sm">
          Regenerate
        </button>
      </div>

      <div className="panel terminal-grid p-6">
        <div className="flex items-center justify-between">
          <span className="eyebrow">Result</span>
          <button
            onClick={copyToClipboard}
            disabled={!output}
            className="text-xs font-mono text-accent hover:text-ink transition-colors disabled:text-faint disabled:cursor-not-allowed"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <p className="mt-4 text-sm text-ink leading-relaxed whitespace-pre-wrap max-h-96 overflow-y-auto">
          {output ?? "Generating..."}
        </p>
      </div>
    </div>
  );
}
