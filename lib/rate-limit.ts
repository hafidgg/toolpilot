// Simple in-memory sliding-window rate limiter.
//
// Caveat: this state lives in the memory of a single serverless function
// instance, so it resets on cold starts and isn't shared across instances
// under high concurrency. It's a reasonable stopgap for a low-to-moderate
// traffic launch. If abuse becomes a real problem at scale, replace this
// with a shared store (Vercel KV, Upstash Redis) keyed the same way.

interface Bucket {
  count: number;
  windowStart: number;
}

const buckets = new Map<string, Bucket>();

export function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number
): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || now - existing.windowStart > windowMs) {
    buckets.set(key, { count: 1, windowStart: now });
    return { allowed: true, remaining: limit - 1 };
  }

  if (existing.count >= limit) {
    return { allowed: false, remaining: 0 };
  }

  existing.count += 1;
  return { allowed: true, remaining: limit - existing.count };
}

// Periodically clear stale entries so the map doesn't grow unbounded on a
// long-lived warm instance.
setInterval(() => {
  const now = Date.now();
  for (const [key, bucket] of buckets.entries()) {
    if (now - bucket.windowStart > 5 * 60 * 1000) buckets.delete(key);
  }
}, 5 * 60 * 1000);

// Basic SSRF guard: blocks obvious internal/private targets. This is a
// literal-match check on the hostname, not a DNS-resolution check — it
// stops casual abuse (localhost, private IP ranges, cloud metadata
// endpoints) but does not defend against DNS rebinding. For a public-facing
// URL-fetching tool at meaningful scale, pair this with an egress proxy or
// a resolve-then-check step.
export function isBlockedHost(hostname: string): boolean {
  const h = hostname.toLowerCase();

  if (h === "localhost" || h === "0.0.0.0" || h === "::1") return true;

  // IPv4 literal checks: loopback, private ranges, link-local (incl. cloud
  // metadata at 169.254.169.254)
  const ipv4 = h.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (ipv4) {
    const [a, b] = [parseInt(ipv4[1], 10), parseInt(ipv4[2], 10)];
    if (a === 127) return true; // loopback
    if (a === 10) return true; // private
    if (a === 172 && b >= 16 && b <= 31) return true; // private
    if (a === 192 && b === 168) return true; // private
    if (a === 169 && b === 254) return true; // link-local / cloud metadata
    if (a === 0) return true;
  }

  return false;
}
