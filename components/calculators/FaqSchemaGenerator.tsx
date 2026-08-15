"use client";

import { useMemo, useState } from "react";
import { buildFaqSchema, FaqPair } from "@/lib/seo-calculations";

let idCounter = 0;
function nextId() {
  idCounter += 1;
  return `pair-${idCounter}`;
}

export default function FaqSchemaGenerator() {
  const [pairs, setPairs] = useState<(FaqPair & { id: string })[]>([
    { id: nextId(), question: "", answer: "" },
  ]);
  const [copied, setCopied] = useState(false);

  const output = useMemo(() => buildFaqSchema(pairs), [pairs]);

  function updatePair(id: string, field: "question" | "answer", value: string) {
    setPairs((prev) => prev.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  }

  function addPair() {
    setPairs((prev) => [...prev, { id: nextId(), question: "", answer: "" }]);
  }

  function removePair(id: string) {
    setPairs((prev) => prev.filter((p) => p.id !== id));
  }

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
      <div className="panel p-6">
        <div className="flex items-center justify-between">
          <span className="eyebrow">Questions & Answers</span>
          <button onClick={addPair} className="text-xs font-mono text-accent hover:text-ink transition-colors">
            + Add
          </button>
        </div>
        <div className="mt-4 space-y-4 max-h-96 overflow-y-auto pr-1">
          {pairs.map((pair, i) => (
            <div key={pair.id} className="bg-raised border border-line-soft rounded-md p-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-faint font-mono">Q{i + 1}</span>
                {pairs.length > 1 && (
                  <button onClick={() => removePair(pair.id)} className="text-faint hover:text-loss text-xs">
                    Remove
                  </button>
                )}
              </div>
              <input
                type="text"
                className="field-input"
                value={pair.question}
                onChange={(e) => updatePair(pair.id, "question", e.target.value)}
                placeholder="Question"
              />
              <textarea
                className="field-input h-16 resize-none text-sm"
                value={pair.answer}
                onChange={(e) => updatePair(pair.id, "answer", e.target.value)}
                placeholder="Answer"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="panel terminal-grid p-6">
        <div className="flex items-center justify-between">
          <span className="eyebrow">FAQPage Schema (JSON-LD)</span>
          <button
            onClick={copyToClipboard}
            className="text-xs font-mono text-accent hover:text-ink transition-colors"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <pre className="mt-4 text-xs text-ink font-mono whitespace-pre-wrap leading-relaxed max-h-96 overflow-y-auto">
          {output}
        </pre>
      </div>
    </div>
  );
}
