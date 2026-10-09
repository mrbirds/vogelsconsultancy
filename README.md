# Vogels Consultancy — website

The bilingual (NL / EN) marketing website for **Vogels Consultancy**, the
independent technology consultancy of Robin Vogels. Built with the Next.js
App Router as a fully static, content-driven site per `PRD.md`, which is the
authoritative source for positioning, copy, information architecture,
branding, accessibility, SEO and analytics requirements.

This README documents how to run, build, deploy and maintain the site, plus
the handful of implementation decisions that were made where the PRD left
room for interpretation or where current framework best practice differed
from the PRD's original phrasing.

## Tech stack

- **Next.js 16** (App Router, Turbopack, React Server Components by default)
- **React 19**
- **TypeScript 5** in strict mode
- **Tailwind CSS v4**
- **Vitest** + **Testing Library** for unit/component tests
- No CMS, database, authentication or other infrastructure — content lives in
  typed TypeScript modules under `src/content/`.

## Requirements

- **Node.js 20.9 or newer** (Next.js 16 requires Node ≥ 20.9; Node 22 LTS is
  recommended and is what this project was built and verified against).
- npm (the project uses `package-lock.json`).

## Getting started

```bash
npm install
npm run dev
```

The dev server prints the local URL (defaults to `http://localhost:3000`,
and auto-selects the next free port such as `3001` if that port is busy).
The site redirects `/` to `/nl` or `/en` based on the `Accept-Language`
header (see [`src/proxy.ts`](src/proxy.ts)).

## Available scripts

| Script              | Description                                           |
| ------------------- | ------------------------------------------------------ |
| `npm run dev`       | Start the Turbopack dev server.                        |
| `npm run build`     | Create an optimised, fully static production build.    |
| `npm run start`     | Serve the production build (`npm run build` first).    |
| `npm run lint`      | Run ESLint (`eslint-config-next` + TypeScript rules).  |
| `npm run typecheck` | Run `tsc --noEmit` in strict mode.                     |
| `npm run test`      | Run the Vitest unit/component test suite.              |

Before considering any change complete, run all four of `lint`, `typecheck`,
`test` and `build` — the project has zero tolerance for errors or warnings
in any of them.

## Project structure

```
src/
  app/
    [locale]/           # NL/EN routes: /, /expertise, /experience, /about, /contact, /privacy
    sitemap.ts           # Generates /sitemap.xml with hreflang alternates
    robots.ts            # Generates /robots.txt
  components/            # Reusable, presentation-only UI building blocks
  content/
    types.ts             # Shape of all bilingual content
    nl.ts / en.ts         # Approved Dutch / English copy (see "Editing content" below)
    clients.ts            # Client/organisation logo metadata
    index.ts              # getContent(locale) lookup
  lib/                    # Locale helpers, metadata builder, analytics config
  proxy.ts                # Locale detection & redirect (Next.js 16 "proxy" convention)
public/
  images/                 # Logo, profile photo, client logos
```

Content is intentionally kept separate from presentation: components receive
copy as props/content objects rather than hard-coding text, so future content
edits never require touching component code.

## Editing content

All visitor-facing copy lives in [`src/content/nl.ts`](src/content/nl.ts) and
[`src/content/en.ts`](src/content/en.ts), typed against
[`src/content/types.ts`](src/content/types.ts). To change copy:

1. Edit the relevant field in **both** `nl.ts` and `en.ts` so the locales stay
   semantically equivalent (a test in
   [`src/__tests__/content-parity.test.ts`](src/__tests__/content-parity.test.ts)
   checks structural parity between the two dictionaries).
2. Only add new optional fields to `types.ts` if you have **approved copy**
   for them — do not invent claims, clients, achievements, technologies or
   testimonials. If no approved copy exists for an optional section (e.g. an
   "intro" paragraph), leave the field `undefined`; the relevant components
   (`SectionHeading`, `PageHero`) already render gracefully without it.
3. Run `npm run test` and `npm run build` to confirm nothing broke.

### Adding a new locale

1. Add the locale code to `locales` in [`src/lib/locales.ts`](src/lib/locales.ts)
   (and its `htmlLang`/`localeLabels`/`localeNames` entries).
2. Create `src/content/<locale>.ts` implementing the full `Content` type and
   register it in `dictionaries` in `src/content/index.ts`.
3. Static routes for the new locale are generated automatically, since
   `generateStaticParams` across the `[locale]` routes is driven by the
   `locales` array.
4. [`src/app/sitemap.ts`](src/app/sitemap.ts) derives its hreflang alternates
   from the same `locales` array, so the sitemap updates automatically too.

## Client logos

Per the PRD, official current logos should be used where they can be
obtained lawfully and directly from an organisation's own brand/press
materials — never hotlinked, scraped from third-party logo repositories, or
recreated by hand.

**Current status:** real, official logo assets for all six referenced
organisations — DELA, Essent and Freo (primary, featured on the homepage and
in full on the Experience page) and EAGE, VZVZ and Achmea (secondary) — were
supplied directly by Robin Vogels, who confirmed he holds the rights to use
them here. They live in `public/images/clients/` (see that folder's
`README.md` for provenance notes) and are registered with their id,
`logoFile` path and intrinsic pixel dimensions in
[`src/content/clients.ts`](src/content/clients.ts). The dimensions are used
by the shared [`ClientLogoMark`](src/components/ClientLogoMark.tsx) component
so every logo renders at its **original aspect ratio and colours** — no
cropping, stretching, grayscale or recolouring.

**PRD v3.3 update (§31):** only the three primary logos (DELA, Essent, Freo)
are rendered in the UI, on the homepage cards and the full Experience page.
Per the revised experience hierarchy, the "earlier experience" (DearNova,
2014–2019) and "career foundation" (2001–2014) sections are deliberately
**text-only, with no logos and no timeline** — EAGE, VZVZ, Achmea, Atos
Origin, Interpolis, ANWB, Unigarant and Zilveren Kruis are all referenced by
name in the body copy only. The EAGE, VZVZ and Achmea logo assets remain
registered in `src/content/clients.ts` (with full provenance notes) for
possible future reuse, but are not currently rendered anywhere.

Each primary logo is rendered inside a shared ~180×64px "stage"
(`src/components/ClientLogoMark.tsx`'s `primaryLogoClassName`), but the
*rendered height within that stage* is tuned per logo so the three marks
read as similarly weighted — not literally the same pixel height. DELA's
source file is a square canvas with large internal padding (the wordmark
only fills ~48% of the canvas height, versus ~95–99% for Essent and Freo),
so matching raw heights would make DELA look noticeably smaller. The
rendered container height is compensated accordingly; the underlying image
file itself is never cropped, stretched or recoloured.

**To add a real logo for another organisation later:**

1. Obtain the SVG/PNG/WebP directly from the organisation's own press/brand
   page (not a third-party aggregator).
2. Save it under `public/images/clients/<id>.<ext>`, where `<id>` matches the
   `id` field you'll add in `src/content/clients.ts`.
3. Add an entry with `logoFile: "/images/clients/<id>.<ext>"` plus the
   asset's intrinsic `width`/`height` (in pixels) so its aspect ratio is
   preserved automatically.
4. Reference it from the relevant content (`CompanyExperience.id` for a
   featured case) — the `ClientLogoMark` component renders it wherever it's
   looked up. Per PRD §31, the earlier-experience and career-foundation
   sections intentionally do not use logos.

## Analytics & privacy

Analytics is **off by default** and fully optional, per the PRD's
privacy-by-default requirement. No analytics script loads and no cookie is
set until a visitor has explicitly given consent.

To enable it, set these environment variables (e.g. in `.env.local` or your
hosting provider's dashboard):

```bash
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Behaviour:

- If either variable is missing/false, the cookie-consent banner and GA4
  script are never rendered or requested — see
  [`src/lib/analytics-config.ts`](src/lib/analytics-config.ts).
- When configured, the site implements **Google Consent Mode v2**: `gtag.js`
  is loaded with `analytics_storage`/`ad_storage` etc. default-denied, and
  only updated to `granted` after the visitor clicks "Accept" in the consent
  banner ([`src/components/CookieConsent.tsx`](src/components/CookieConsent.tsx),
  [`src/components/Analytics.tsx`](src/components/Analytics.tsx)).
- Consent choice is stored locally and persists across visits; visitors can
  change their mind at any time (the banner reappears for anyone without a
  stored choice).
- The `/privacy` (and `/en/privacy`) page documents this behaviour for
  visitors in plain language.

**Privacy impact:** when analytics is enabled and consent is granted, Google
Analytics 4 (a third-party processor under Google's standard terms) receives
anonymised usage data. No analytics of any kind occurs when the environment
variables are unset, or before consent is given.

## Deployment

The site builds to fully static output (all routes are prerendered — see the
`npm run build` output, which marks every page `●` or `○`). It can be hosted
on any platform that can run `next start` or serve a Next.js build, for
example:

- **Vercel** (zero-config: connect the repo, set the two analytics env vars
  if desired, deploy).
- **Any Node host** (Azure App Service, Docker, etc.): run `npm run build`
  then `npm run start`, exposing the configured port (`PORT` env var).

No database, authentication, or server-side secrets are required.

## Accessibility & quality

- WCAG 2.2 AA is the baseline: semantic landmarks, one `<h1>` per page with a
  correct heading hierarchy, a visible skip-link, a 2px brand-blue focus
  ring on all interactive elements, descriptive image `alt` text, and
  `aria-current="page"` on the active nav link.
- `prefers-reduced-motion` is respected; the site uses very little motion by
  design (no decorative animation, no auto-playing carousels).
- Verified at 375px, 768px and 1440px breakpoints with no horizontal overflow.
- `npm run lint`, `npm run typecheck`, `npm run test` and `npm run build` are
  all green with zero errors/warnings as of this implementation.

## Implementation decisions & deviations from the PRD's literal wording

The PRD's functional and design intent was preserved in every case below;
only implementation details that conflicted with current framework best
practice were adjusted:

- **`middleware.ts` → `proxy.ts`**: Next.js 16 deprecates the `middleware.ts`
  file convention in favour of `proxy.ts` (same locale-detection/redirect
  behaviour, same `config.matcher`). The file and its exported function were
  renamed accordingly (see [`src/proxy.ts`](src/proxy.ts)).
- **TypeScript 5.9 instead of the newly-released TypeScript 7**: at
  implementation time, `typescript-eslint`/`eslint-config-next` did not yet
  support TypeScript 7, so the latest **compatible** TypeScript 5.x was used
  instead, per the instruction to only use mutually compatible stable
  versions.
- **`cacheComponents` / partial prefetching left disabled**: these Next.js
  16 features target dynamic, per-request data fetching. This site is fully
  static and content-driven with no runtime data fetching, so enabling them
  would add complexity without benefit; see the comment in
  [`next.config.ts`](next.config.ts).
- **Client logos**: real official assets for DELA, Essent, Freo, EAGE, VZVZ
  and Achmea were supplied directly by Robin Vogels and are used as-is (see
  "Client logos" above). No logo-cloud/text-only row is shown; logos appear
  only where the organisation is already named in nearby text.
- **Experience hierarchy (PRD v3.3, §31)**: the homepage cards and
  Experience page were restructured so DELA, Essent and Freo stay the only
  logo-bearing, fully detailed cases; each homepage card shows at most three
  highlights and no longer repeats the company name as a second visible
  heading next to the logo (it remains present as a screen-reader-only
  `<h3>` to preserve heading hierarchy). DELA's additional technical
  evidence, previously a separate "Aanvullende context bij DELA" section, is
  now folded directly into DELA's own detail list on the Experience page.
  The former "earlier experience" vertical timeline (with per-role logos)
  was replaced with two compact, text-only blocks — "Eerdere ervaring" /
  "Earlier experience" (DearNova, 2014–2019) and a visually de-emphasised
  "career foundation" block (2001–2014, with an optional role-progression
  line) — per the PRD's explicit instruction not to render a LinkedIn-style
  timeline or use logos for this earlier period.

## Definition of Done checklist

Cross-referenced against PRD §27 at the end of implementation:

- [x] NL and EN both fully functional, with content parity enforced by tests.
- [x] All pages responsive at 375 / 768 / 1024 / 1440px, no horizontal overflow.
- [x] The supplied Vogels Consultancy logo is used as provided (not recreated).
- [x] The supplied profile photo of Robin Vogels is used as provided.
- [x] Content matches the PRD; no invented claims, clients or testimonials.
- [x] DELA, Essent and Freo presented as selected experience, not a chronological CV.
- [x] Earlier experience (EAGE, VZVZ, DELA, Atos Origin/Achmea) included appropriately.
- [x] Client organisations have real, locally-stored, lawfully-sourced logo
      assets (DELA, Essent, Freo, EAGE, VZVZ, Achmea); none are shown as a
      generic logo row or "Trusted by" claim (see "Client logos").
- [x] SEO: per-locale canonical URLs, hreflang alternates (incl. `x-default`),
      `/sitemap.xml`, `/robots.txt`, unique titles/descriptions, and valid
      `Person`/`ProfessionalService` JSON-LD.
- [x] Analytics is optional, env-var gated, and consent-aware (Consent Mode v2).
- [x] Accessibility (WCAG 2.2 AA) and Core Web Vitals addressed (static
      generation, `next/image`, `next/font`, minimal client JS).
- [x] No fabricated copy or placeholder content.
- [x] The site reads as a senior independent technology consultant's personal
      site — not a CV, recruitment-agency page, or generic SaaS template.
