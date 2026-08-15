"use client";

import { useMemo, useState } from "react";
import { findAndReplace } from "@/lib/content-calculations";

export default function FindAndReplaceTool() {
  const [text, setText] = useState("");
  const [find, setFind] = useState("");
  const [replace, setReplace] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [wholeWord, setWholeWord] = useState(false);
  const [copied, setCopied] = useState(false);

  const result = useMemo(
    () => findAndReplace(text, find, replace, { caseSensitive, wholeWord }),
    [text, find, replace, caseSensitive, wholeWord]
  );

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(result.output);
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
          <span className="eyebrow">Your text</span>
          <textarea
            className="field-input mt-2 h-40 resize-none font-body text-base leading-relaxed"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your text..."
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="field-label" htmlFor="findandreplacetool-find-1">Find</label>
          <input id="findandreplacetool-find-1"
              type="text"
              className="field-input"
              value={find}
              onChange={(e) => setFind(e.target.value)}
              placeholder="old text"
            />
          </div>
          <div>
            <label className="field-label" htmlFor="findandreplacetool-replace-with-2">Replace with</label>
          <input id="findandreplacetool-replace-with-2"
              type="text"
              className="field-input"
              value={replace}
              onChange={(e) => setReplace(e.target.value)}
              placeholder="new text"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2 text-sm text-muted">
            <input
              type="checkbox"
              checked={caseSensitive}
              onChange={(e) => setCaseSensitive(e.target.checked)}
              className="accent-accent"
            />
            Case-sensitive
          </label>
          <label className="flex items-center gap-2 text-sm text-muted">
            <input
              type="checkbox"
              checked={wholeWord}
              onChange={(e) => setWholeWord(e.target.checked)}
              className="accent-accent"
            />
            Whole word only
          </label>
        </div>
      </div>

      <div className="panel terminal-grid p-6">
        <div className="flex items-center justify-between">
          <span className="eyebrow">Result — {result.count} replaced</span>
          <button
            onClick={copyToClipboard}
            disabled={!result.output}
            className="text-xs font-mono text-accent hover:text-ink transition-colors disabled:text-faint disabled:cursor-not-allowed"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <p className="mt-4 text-sm text-ink leading-relaxed whitespace-pre-wrap min-h-40">
          {result.output || (
            <span className="text-faint">Updated text will appear here.</span>
          )}
        </p>
      </div>
    </div>
  );
}
