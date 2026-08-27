import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit, isBlockedHost } from "@/lib/rate-limit";

const RATE_LIMIT = 15; // requests
const RATE_WINDOW_MS = 60 * 1000; // per minute, per IP

export async function GET(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const { allowed } = checkRateLimit(`og-preview:${ip}`, RATE_LIMIT, RATE_WINDOW_MS);
  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment and try again." },
      { status: 429 }
    );
  }

  const target = req.nextUrl.searchParams.get("url");
  if (!target) {
    return NextResponse.json({ error: "Missing url parameter" }, { status: 400 });
  }

  let parsed: URL;
  try {
    parsed = new URL(target);
    if (!["http:", "https:"].includes(parsed.protocol)) throw new Error("bad protocol");
  } catch {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  if (isBlockedHost(parsed.hostname)) {
    return NextResponse.json({ error: "That host can't be previewed." }, { status: 400 });
  }

  try {
    const res = await fetch(parsed.toString(), {
      headers: { "User-Agent": "ToolPilotBot/1.0 (+https://usetoolpilot.com)" },
      signal: AbortSignal.timeout(8000),
      redirect: "follow",
    });

    // Cap how much HTML we read — og/meta tags are always near the top of
    // <head>, and this avoids downloading arbitrarily large responses.
    const reader = res.body?.getReader();
    let html = "";
    if (reader) {
      const MAX_BYTES = 200_000;
      let received = 0;
      const decoder = new TextDecoder();
      while (received < MAX_BYTES) {
        const { done, value } = await reader.read();
        if (done) break;
        received += value.byteLength;
        html += decoder.decode(value, { stream: true });
      }
      reader.cancel().catch(() => {});
    } else {
      html = await res.text();
    }

    const getMeta = (prop: string) => {
      const re = new RegExp(
        `<meta[^>]+(?:property|name)=["']${prop}["'][^>]+content=["']([^"']*)["']`,
        "i"
      );
      const match = html.match(re);
      return match ? match[1] : null;
    };

    const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);

    return NextResponse.json({
      title: getMeta("og:title") || (titleMatch ? titleMatch[1] : null),
      description: getMeta("og:description") || getMeta("description"),
      image: getMeta("og:image"),
      siteName: getMeta("og:site_name"),
      url: parsed.toString(),
    });
  } catch {
    return NextResponse.json(
      { error: "Could not fetch that URL. It may be blocking automated requests." },
      { status: 502 }
    );
  }
}