# Pre-Launch Checklist

Run through this top to bottom before deploying and before applying to
AdSense. Nothing here requires touching component logic — it's find-and-
replace plus a few content fills.

## 1. Domain — replace `your-domain.com` in 9 places across 8 files

Once you own a real domain, replace every instance of `your-domain.com`
with it. Fastest way: from the project root,

```bash
grep -rl "your-domain.com" --include="*.ts" --include="*.tsx" . | \
  xargs sed -i '' 's/your-domain\.com/YOUR-REAL-DOMAIN.com/g'
```

(Drop the empty `''` after `-i` if you're on Linux/WSL rather than macOS.)

Locations, if you'd rather do it by hand:

- `app/layout.tsx` — `metadataBase`, RSS alternate link, Organization JSON-LD `url`
- `app/sitemap.ts` — `BASE_URL`
- `app/robots.ts` — sitemap URL
- `app/rss.xml/route.ts` — `BASE_URL`
- `app/api/og-preview/route.ts` — User-Agent string
- `components/Breadcrumbs.tsx` — BreadcrumbList `item` URLs
- `app/contact/page.tsx` — mailto link + display text (see step 2, same swap covers this)

## 2. Contact email — replace `hello@your-domain.com`

Same find-and-replace approach, scoped to the email specifically:

```bash
grep -rl "hello@your-domain.com" --include="*.tsx" .
```

Appears in: `app/contact/page.tsx`, `app/privacy-policy/page.tsx`, `app/terms/page.tsx`.

## 3. Dates — fill in "Last updated"

Three pages have a `[DATE — fill in before publishing]` placeholder:
`app/privacy-policy/page.tsx`, `app/terms/page.tsx`, `app/editorial-policy/page.tsx`.
Set these to your actual publish date, not today's date if you're prepping in advance.

## 4. Remaining content placeholders

Two sections in `app/privacy-policy/page.tsx` still describe what to write
rather than containing final text — fill these in once you know which
analytics/ad services you're actually using:
- "Analytics and advertising" section
- "Cookies" section

## 5. Before applying to AdSense specifically

- [ ] All of the above completed
- [ ] Site deployed and live on the real domain (not `*.vercel.app`)
- [ ] Google Search Console connected, sitemap submitted
- [ ] Article count at 15+ (currently 18 — see `lib/blog-posts.ts`) ✅
- [ ] A few weeks of real traffic/indexing before applying, not same-day

## 6. Infrastructure

- [ ] Vercel plan is Pro, not Hobby, before enabling AdSense (Hobby's fair-use
      terms explicitly prohibit ads — see the conversation history for the
      source, or check `vercel.com/docs/limits/fair-use-guidelines`)
- [ ] `/api/og-preview` rate limit (`lib/rate-limit.ts`) is in place — no
      action needed, just confirming it's live before launch
