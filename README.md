# Trading Calculators

Next.js 15 + TypeScript + Tailwind site with two client-side trading tools:
Position Size Calculator and DCA Calculator. No backend, no database —
every calculation runs in the browser.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (numbers)

## Run locally (Windows / PowerShell)

```powershell
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

```
app/
  layout.tsx              Root layout, fonts, metadata defaults
  page.tsx                Home page
  globals.css             Tailwind + design tokens
  sitemap.ts               Auto-generated sitemap.xml
  robots.ts                Auto-generated robots.txt
  tools/
    position-size-calculator/page.tsx
    dca-calculator/page.tsx
  about/page.tsx
  privacy-policy/page.tsx   Fill in placeholders before publishing
  terms/page.tsx            Fill in placeholders before publishing
  blog/page.tsx              Empty index — add posts under app/blog/[slug]/
components/
  Header.tsx
  Footer.tsx
  calculators/
    PositionSizeCalculator.tsx
    DCACalculator.tsx
lib/
  calculations.ts           Pure calculation functions (unit-testable)
```

## Before you deploy

1. Replace `https://your-domain.com` in `app/layout.tsx`, `app/sitemap.ts`,
   and `app/robots.ts` with your real domain.
2. Fill in the `[Placeholder]` sections in `app/privacy-policy/page.tsx`
   and `app/terms/page.tsx` — AdSense reviewers check these.
3. Add a real favicon and OG image under `public/`.
4. Deploy to Vercel: `vercel --prod`, or connect the GitHub repo in the
   Vercel dashboard for auto-deploys on push.
5. Submit `https://your-domain.com/sitemap.xml` to Google Search Console.

## Adding a third calculator

1. Add pure functions to `lib/calculations.ts`.
2. Create `components/calculators/YourCalculator.tsx` (client component,
   same pattern as the two existing ones).
3. Create `app/tools/your-calculator/page.tsx` with metadata + the
   component + an SEO article section.
4. Add the route to the `tools` array in `components/Header.tsx` and to
   `app/sitemap.ts`.
