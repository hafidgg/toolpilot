"use client";

import { useMemo, useState } from "react";
import { diffLines } from "@/lib/content-calculations";

export default function TextDiffChecker() {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const diff = useMemo(() => diffLines(textA, textB), [textA, textB]);

  const hasDiff = diff.some((d) => d.type !== "same");

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="panel p-6">
          <span className="eyebrow">Original</span>
          <textarea
            className="field-input mt-4 h-48 resize-none font-mono text-sm"
            value={textA}
            onChange={(e) => setTextA(e.target.value)}
            placeholder="Paste the first version..."
          />
        </div>
        <div className="panel p-6">
          <span className="eyebrow">Changed</span>
          <textarea
            className="field-input mt-4 h-48 resize-none font-mono text-sm"
            value={textB}
            onChange={(e) => setTextB(e.target.value)}
            placeholder="Paste the second version..."
          />
        </div>
      </div>

      <div className="panel mt-6 p-6">
        <span className="eyebrow">Diff</span>
        {!textA && !textB ? (
          <div className="mt-8 flex items-center justify-center h-24 text-sm text-faint">
            Paste text in both boxes to compare.
          </div>
        ) : !hasDiff ? (
          <p className="mt-4 text-sm text-gain">No differences found.</p>
        ) : (
          <div className="mt-4 font-mono text-sm space-y-0.5">
            {diff.map((line, i) => (
              <div
                key={i}
                className={`px-3 py-1 rounded ${
                  line.type === "added"
                    ? "bg-[#0F2A1E] text-gain"
                    : line.type === "removed"
                    ? "bg-[#2A1414] text-loss"
                    : "text-muted"
                }`}
              >
                <span className="mr-2 opacity-60">
                  {line.type === "added" ? "+" : line.type === "removed" ? "−" : " "}
                </span>
                {line.text || " "}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
