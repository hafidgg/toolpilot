// YouTube video thumbnail specs, per https://support.google.com/youtube/answer/72431
export const PREFERRED_WIDTH = 3840;
export const PREFERRED_HEIGHT = 2160;
export const MIN_WIDTH = 640;
export const TARGET_RATIO = 16 / 9;
const RATIO_TOLERANCE = 0.02;
export const MAX_MOBILE_BYTES = 2 * 1024 * 1024;
export const MAX_DESKTOP_BYTES = 50 * 1024 * 1024;
export const ACCEPTED_TYPES = ["image/jpeg", "image/png"];

export type CheckStatus = "pass" | "warn" | "fail";

export interface CheckResult {
  status: CheckStatus;
  message: string;
}

export function checkResolution(width: number, height: number): CheckResult {
  if (width < MIN_WIDTH) {
    return {
      status: "fail",
      message: `Below YouTube's minimum width of ${MIN_WIDTH} px.`,
    };
  }
  if (width >= PREFERRED_WIDTH && height >= PREFERRED_HEIGHT) {
    return {
      status: "pass",
      message: "Meets YouTube's preferred 3840×2160 resolution.",
    };
  }
  return {
    status: "pass",
    message:
      "Acceptable (at least 640 px wide). Higher is better — YouTube's preferred resolution is 3840×2160.",
  };
}

export function checkAspectRatio(width: number, height: number): CheckResult {
  const ratio = width / height;
  if (Math.abs(ratio - TARGET_RATIO) < RATIO_TOLERANCE) {
    return { status: "pass", message: "16:9, as YouTube recommends for videos." };
  }
  return {
    status: "warn",
    message: "Not 16:9 — YouTube may crop or letterbox it in some placements.",
  };
}

export function checkFileSize(bytes: number): CheckResult {
  if (bytes <= MAX_MOBILE_BYTES) {
    return { status: "pass", message: "Under 2 MB — fine for mobile and desktop uploads." };
  }
  if (bytes <= MAX_DESKTOP_BYTES) {
    return {
      status: "warn",
      message: "Over the 2 MB mobile upload limit, but under the 50 MB desktop limit.",
    };
  }
  return { status: "fail", message: "Over YouTube's 50 MB desktop upload limit." };
}

export function checkFormat(mimeType: string): CheckResult {
  if (ACCEPTED_TYPES.includes(mimeType)) {
    return { status: "pass", message: "JPG or PNG, as YouTube accepts." };
  }
  return { status: "fail", message: "YouTube thumbnails should be JPG or PNG." };
}
