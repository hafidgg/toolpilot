export function extractYoutubeVideoId(input: string): string | null {
  const trimmed = input.trim();

  // Already a bare 11-character video ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;

  let url: URL;
  try {
    url = new URL(/^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`);
  } catch {
    return null;
  }

  const host = url.hostname.toLowerCase();
  const segments = url.pathname.split("/").filter(Boolean);
  let candidate: string | null = null;

  if (host === "youtu.be") {
    candidate = segments[0] ?? null;
  } else if (YOUTUBE_HOSTS.has(host)) {
    if (segments[0] === "watch") {
      candidate = url.searchParams.get("v"); // any parameter position
    } else if (["embed", "shorts", "live"].includes(segments[0])) {
      candidate = segments[1] ?? null;
    }
  }

  // IDs are 11 characters; a longer value keeps its first 11, as before.
  const match = candidate?.match(/^[a-zA-Z0-9_-]{11}/);
  return match ? match[0] : null;
}

const YOUTUBE_HOSTS = new Set([
  "youtube.com",
  "www.youtube.com",
  "m.youtube.com",
  "music.youtube.com",
]);

export interface ThumbnailVariant {
  key: string;
  label: string;
  url: string;
  dimensions: string;
}

export function getThumbnailVariants(videoId: string): ThumbnailVariant[] {
  const base = `https://img.youtube.com/vi/${videoId}`;
  return [
    { key: "maxresdefault", label: "Max Resolution", url: `${base}/maxresdefault.jpg`, dimensions: "1280×720" },
    { key: "sddefault", label: "Standard Definition", url: `${base}/sddefault.jpg`, dimensions: "640×480" },
    { key: "hqdefault", label: "High Quality", url: `${base}/hqdefault.jpg`, dimensions: "480×360" },
    { key: "mqdefault", label: "Medium Quality", url: `${base}/mqdefault.jpg`, dimensions: "320×180" },
    { key: "default", label: "Default", url: `${base}/default.jpg`, dimensions: "120×90" },
  ];
}

export function parseTimeToSeconds(input: string): number | null {
  const trimmed = input.trim();
  if (/^\d+$/.test(trimmed)) return parseInt(trimmed, 10);

  const parts = trimmed.split(":").map((p) => p.trim());
  if (parts.some((p) => !/^\d+$/.test(p))) return null;

  const nums = parts.map(Number);
  if (nums.length === 2) return nums[0] * 60 + nums[1];
  if (nums.length === 3) return nums[0] * 3600 + nums[1] * 60 + nums[2];
  return null;
}

export function buildTimestampedUrl(videoId: string, seconds: number): string {
  return `https://youtu.be/${videoId}?t=${seconds}`;
}

export interface ChannelIdentifier {
  type: "handle" | "channel-id" | "custom" | "user" | "unknown";
  value: string;
}

export function extractYoutubeChannelIdentifier(input: string): ChannelIdentifier | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  if (/^@[\w.-]+$/.test(trimmed)) {
    return { type: "handle", value: trimmed };
  }

  const patterns: [RegExp, ChannelIdentifier["type"]][] = [
    [/youtube\.com\/@([\w.-]+)/, "handle"],
    [/youtube\.com\/channel\/(UC[\w-]{22})/, "channel-id"],
    [/youtube\.com\/c\/([\w-]+)/, "custom"],
    [/youtube\.com\/user\/([\w-]+)/, "user"],
  ];

  for (const [pattern, type] of patterns) {
    const match = trimmed.match(pattern);
    if (match) {
      return { type, value: type === "handle" ? `@${match[1]}` : match[1] };
    }
  }

  if (/^UC[\w-]{22}$/.test(trimmed)) {
    return { type: "channel-id", value: trimmed };
  }

  return { type: "unknown", value: trimmed };
}
