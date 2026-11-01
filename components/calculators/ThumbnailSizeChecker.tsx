"use client";

import { useState } from "react";
import EmptyState from "@/components/EmptyState";
import {
  checkAspectRatio,
  checkFileSize,
  checkFormat,
  checkResolution,
  TARGET_RATIO,
  type CheckStatus,
} from "@/lib/thumbnail-checks";

interface ImageInfo {
  width: number;
  height: number;
  aspectRatio: number;
  size: number;
  type: string;
  src: string;
}

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
          size: file.size,
          type: file.type,
          src,
        });
      };
      img.src = src;
    };
    reader.readAsDataURL(file);
  }

  const resolution = image ? checkResolution(image.width, image.height) : null;
  const ratio = image ? checkAspectRatio(image.width, image.height) : null;
  const fileSize = image ? checkFileSize(image.size) : null;
  const format = image ? checkFormat(image.type) : null;

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
        {!image || !resolution || !ratio || !fileSize || !format ? (
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
              status={ratio.status}
              detail={`${ratio.message} Yours: ${image.aspectRatio.toFixed(3)} · Target: ${TARGET_RATIO.toFixed(3)}`}
            />
            <StatusRow
              label="Resolution (min. 640 px wide, 3840×2160 preferred)"
              status={resolution.status}
              detail={resolution.message}
            />
            <StatusRow
              label="File size (2 MB mobile, 50 MB desktop)"
              status={fileSize.status}
              detail={`${fileSize.message} Yours: ${(image.size / (1024 * 1024)).toFixed(2)} MB`}
            />
            <StatusRow label="Format (JPG or PNG)" status={format.status} detail={format.message} />
          </div>
        )}
      </div>
    </div>
  );
}

function StatusRow({
  label,
  status,
  detail,
}: {
  label: string;
  status: CheckStatus;
  detail: string;
}) {
  const color =
    status === "pass" ? "text-gain" : status === "warn" ? "text-[#F5A623]" : "text-loss";
  return (
    <div className="bg-raised border border-line-soft rounded-md px-4 py-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm text-ink">{label}</span>
        <span className={`readout text-xs font-semibold ${color}`}>
          {status.toUpperCase()}
        </span>
      </div>
      <p className="text-xs text-faint">{detail}</p>
    </div>
  );
}
