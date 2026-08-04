# ExamPath — Site Structure Scaffold

This is the website structure, not the finished site. It's meant to be opened in
Claude Code Desktop, where the real build (question data, deployment, the actual
test-taking engine) happens next.

## What's actually built here
- Full routing structure matching the URL taxonomy the competitor research
  identified as what actually ranks: `/{country}/{exam}/mock-test`,
  `/previous-year-papers`, `/syllabus`, `/exam-pattern`.
- The flagship `mock-test` page fully fleshed out: correct meta title/description
  pattern, JSON-LD schema (BreadcrumbList + Quiz + Organization), test list,
  exam pattern table, FAQ block — the exact template structure the research
  found across Testbook/Adda247's top-ranking pages.
- Design tokens (colors, fonts) copied 1:1 from the approved UI prototype, so
  the look carries over exactly.
- The OMR-bubble signature element as a reusable component.
- Reserved ad slots (fixed height, to avoid layout shift) on Home and the
  mock-test page — deliberately absent from the test-attempt screen.
- `sitemap.ts` and `robots.ts` that auto-generate from the same exam config
  every page uses.
- Static export mode (`output: 'export'` in next.config.mjs) — every page is
  pre-rendered as real, crawlable HTML at build time.

## What's intentionally a placeholder (marked TODO in the code)
- `SITE_URL` and the "ExamPath" brand name in `src/lib/schema.ts` and
  `src/lib/exams.ts` — swap for your real domain and name.
- The actual test-taking engine (`[exam]/test/[testId]/attempt/page.tsx`) —
  this is where the interactive prototype (timer, OMR bubbles, question
  palette) gets ported in, once real question data exists.
- Sample test data in `mock-test/page.tsx` — replace with real content pulled
  from your Google Sheet question bank.
- About/Contact/Privacy/Terms pages — these need real content before you can
  apply for AdSense approval, not just placeholder text.

## How to extend
- **New exam:** add one entry to `EXAMS` in `src/lib/exams.ts`. Every route,
  schema, and page template picks it up automatically via
  `generateStaticParams`.
- **New country:** add one entry to `COUNTRIES` in the same file. This is the
  subfolder + hreflang approach agreed on earlier (not separate ccTLDs, for now).

## Running this for real
This scaffold hasn't been through `npm install` in this sandbox — do that in
Claude Code Desktop or locally:
```
npm install
npm run dev
```
