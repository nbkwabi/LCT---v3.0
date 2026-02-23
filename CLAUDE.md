# Life Care Training Website

## Project
Next.js 16 App Router brochure site for Life Care Training — face-to-face healthcare training for CQC-registered care homes across London, Kent, Surrey, and Essex.

## Tech Stack
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4 (CSS-first config in globals.css)
- Vercel hosting
- GA4 analytics with DUAA opt-out model
- n8n webhook for enquiry form

## Key Files
- `lib/courses.ts` — 32 courses, canonical data source
- `lib/constants.ts` — site config, nav, CTAs, contact info
- `lib/schema.tsx` — JSON-LD structured data generators
- `lib/analytics.ts` — GA4 event tracking
- `components/layout/` — Navbar, Footer, MobileStickyBar
- `components/analytics/` — GA4Analytics, AnalyticsOptOut
- `.cursorrules` — full project conventions

## Brand Rules
- Font: Arial only
- Colours: lifecare-green #2b7925, dark #111827, goldenrod #D97706 (decorative only)
- "Life Care Training" (two words)
- Never "CQC Approved" — use "CQC-aligned"
- Duration: "Half Day (approx. 3–4 hrs)" / "Full Day (approx. 6 hrs)"
- UK English throughout

## Deployment
- Vercel project: lifecare-training
- Domain: lifecaretraining.uk
- GA4 ID: G-N6SRNT32LX (env var NEXT_PUBLIC_GA4_ID)
- Webhook: https://hooks.lifecare.click/webhook/enquiry

## Status
- **Current:** Layers 1–5 complete. Site deployed to Vercel.
- **Blocking:** Nathan's headshot photo (About page), evidence pack photo (How It Works)
- **Next:** Replace placeholder images when photos are ready

## Change Log
- 2026-02-22: Layer 5 — Vercel deployment config, CLAUDE.md created
- 2026-02-22: Layer 4 — Analytics (Vercel + GA4 DUAA opt-out), SEO schema, sitemap, robots.txt
- 2026-02-22: Layer 3 — Full page content (homepage, courses, about, how-it-works, enquiry, FAQ)
- 2026-02-22: Layer 2 — Navigation shell, page routes, legal pages, error pages
- 2026-02-22: Layer 1 — Design system alignment with Brand Bible v3.0
- 2026-02-22: Initial commit — Fresh Next.js project setup
