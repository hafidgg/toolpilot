"use client";

import { useMemo, useState } from "react";
import {
  checkPinterestPin,
  PINTEREST_DESCRIPTION_LIMIT,
  PINTEREST_TITLE_LIMIT,
} from "@/lib/content-calculations";

export default function PinterestPinChecker() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const result = useMemo(() => checkPinterestPin(title, description), [title, description]);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="panel p-6 space-y-4">
        <div>
          <span className="eyebrow">Pin title</span>
          <input
            type="text"
            className="field-input mt-2 font-body text-base"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="5 Easy Weeknight Dinner Ideas"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="pinterestpinchecker-pin-description-1">Pin description</label>
          <textarea id="pinterestpinchecker-pin-description-1"
            className="field-input h-40 resize-none font-body text-base leading-relaxed"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your pin..."
          />
        </div>
      </div>

      <div className="panel terminal-grid p-6">
        <span className="eyebrow">Result</span>
        <div className="mt-4 space-y-4">
          <LimitRow
            label="Title"
            length={result.titleLength}
            limit={PINTEREST_TITLE_LIMIT}
            status={result.titleStatus}
            message={result.titleMessage}
          />
          <LimitRow
            label="Description"
            length={result.descriptionLength}
            limit={PINTEREST_DESCRIPTION_LIMIT}
            status={result.descriptionStatus}
            message={result.descriptionMessage}
          />
        </div>
      </div>
    </div>
  );
}

function LimitRow({
  label,
  length,
  limit,
  status,
  message,
}: {
  label: string;
  length: number;
  limit: number;
  status: "good" | "too-long";
  message: string;
}) {
  const ratio = Math.min(length / limit, 1);
  return (
    <div className="bg-raised border border-line-soft rounded-md px-4 py-3">
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="text-sm text-ink">{label}</span>
        <span className={`readout text-xs ${status === "too-long" ? "text-loss" : "text-muted"}`}>
          {length}/{limit}
        </span>
      </div>
      <div className="h-1.5 w-full bg-base border border-line-soft rounded-full overflow-hidden">
        <div
          className={`h-full transition-all ${status === "too-long" ? "bg-loss" : "bg-accent"}`}
          style={{ width: `${ratio * 100}%` }}
        />
      </div>
      <p className={`mt-1.5 text-xs ${status === "too-long" ? "text-loss" : "text-muted"}`}>{message}</p>
    </div>
  );
}
