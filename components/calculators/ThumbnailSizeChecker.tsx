"use client";

import { useState } from "react";
import EmptyState from "@/components/EmptyState";

interface ImageInfo {
  width: number;
  height: number;
  aspectRatio: number;
  src: string;
}

const TARGET_WIDTH = 1280;
const TARGET_HEIGHT = 720;
const TARGET_RATIO = TARGET_WIDTH / TARGET_HEIGHT;

export default function ThumbnailSizeChecker() {
  const [image, setImage] = useState<ImageInfo | null>(null);
  const [fileName, setFileName] = useState("");

  function handleFile(file: File) {
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target?.result as string;
      const img = new Image();
      img.onload = () => {
        setImage({
          width: img.naturalWidth,
          height: img.naturalHeight,
          aspectRatio: img.naturalWidth / img.naturalHeight,
          src,
        });
      };
      img.src = src;
    };
    reader.readAsDataURL(file);
  }

  const ratioMatch = image ? Math.abs(image.aspectRatio - TARGET_RATIO) < 0.02 : false;
  const meetsMinimum = image ? image.width >= TARGET_WIDTH && image.height >= TARGET_HEIGHT : false;

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="panel p-6">
        <span className="eyebrow">Upload thumbnail</span>
        <label className="mt-4 flex flex-col items-center justify-center h-48 border-2 border-dashed border-line-soft rounded-md cursor-pointer hover:border-accent-dim transition-colors">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFile(file);
            }}
          />
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image.src}
              alt="Uploaded thumbnail preview"
              className="max-h-44 max-w-full rounded object-contain"
            />
          ) : (
            <span className="text-sm text-faint">
              Click to upload an image (PNG, JPG)
            </span>
          )}
        </label>
        {fileName && (
          <p className="mt-2 text-xs text-faint font-mono truncate">{fileName}</p>
        )}
      </div>

      <div className="panel terminal-grid p-6">
        <span className="eyebrow">Result</span>
        {!image ? (
          <EmptyState message="Upload an image to check its dimensions." />
        ) : (
          <div className="mt-4 space-y-5">
            <div className="flex items-baseline justify-between border-b border-line-soft pb-4">
              <span className="text-sm text-muted">Dimensions</span>
              <span className="readout text-2xl font-semibold text-ink">
                {image.width} × {image.height}
              </span>
            </div>

            <StatusRow
              label="Aspect ratio (16:9)"
              ok={ratioMatch}
              detail={`Yours: ${image.aspectRatio.toFixed(3)} · Target: ${TARGET_RATIO.toFixed(3)}`}
            />
            <StatusRow
              label="Meets minimum 1280×720"
              ok={meetsMinimum}
              detail={
                meetsMinimum
                  ? "Resolution is sufficient for YouTube."
                  : "Below YouTube's recommended minimum resolution."
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}

function StatusRow({
  label,
  ok,
  detail,
}: {
  label: string;
  ok: boolean;
  detail: string;
}) {
  return (
    <div className="bg-raised border border-line-soft rounded-md px-4 py-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm text-ink">{label}</span>
        <span className={`readout text-xs font-semibold ${ok ? "text-gain" : "text-loss"}`}>
          {ok ? "PASS" : "FAIL"}
        </span>
      </div>
      <p className="text-xs text-faint">{detail}</p>
    </div>
  );
}
