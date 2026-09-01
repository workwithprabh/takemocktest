# Compact homepage review

Branch: `agent/compact-homepage`, based on `origin/main` at `a8c99d2`.

This review is separate from the pending blog-image and exam-updates branches. No main merge or production deployment is included.

## Changes

- Search is now the primary hero action, above the smaller student image on mobile. Existing native suggestions and directory query handling are reused.
- Removed the statistics strip, repeated free/no-sign-up copy, and blanket full-verification claim.
- Kept six popular exams as compact, fully clickable rows with existing colored icons and real checked-test counts.
- Kept six featured goals in a two-column mobile tile grid. Full descriptions, examples and category counts remain in the exam directory.
- Show three updates on mobile and five from the tablet breakpoint, with visible links to all updates. Dates, category tags and source attribution remain.
- Replaced the long trust block with two short guidance points and an About link. All four FAQs remain collapsed by default with their answers unchanged.
- Removed the overlaid sample-question widget from the homepage so the student photo is unobstructed and search stays the primary action. Its component and all question banks are untouched.
- Preserved existing colors, font tokens, square corners, header, footer and mobile navigation. No new dependencies.

## Measurements and browser checks

- At 390-pixel width, the previous live homepage measured approximately 8,292 pixels tall. The final local version measured approximately 3,806 pixels (about 54% shorter; external footer widgets can slightly affect height).
- The search input is approximately 266 pixels from the top and fits on the first mobile screen.
- Checked widths of 320, 390, 768 and 1280 pixels: no horizontal overflow, hero image loaded, six popular exams, six category links, one H1, and four initially collapsed FAQs.
- Verified three visible notices at 320/390 pixels and five at 768/1280 pixels.
- Search suggestions retain IEMJEE, IELTS Academic and IELTS General Training for the `IE` prefix. Submitting `IE` opens filtered directory results; submitting `SSC CGL` returns that exam and its link opens the SSC CGL mock-test hub.
- The mobile Tests shortcut targets the retained `#exams` section below the sticky header.
- The Engineering & Technology tile opens its category page. FAQ expansion and collapse were checked.
- The full exam directory still renders all 11 detailed category cards; its mobile layout was visually checked.
- Desktop and mobile homepage images, rows, category tiles, trust note and FAQ layout were visually reviewed. No console warnings or errors were observed in the inspected preview.

## Automated checks

- `npm run lint`: passed.
- `npm run qa:assets`: passed.
- `git diff --check`: passed.
- A source-level comparison confirms `generateMetadata()` is unchanged.
- `npm run build`: passed; all 3,487 static routes generated successfully.
- `node scripts/check-homepage.mjs`: passed.

The homepage regression check covers section order, search action and suggestions, card counts, mobile notice limit, collapsed FAQs, mobile navigation, title/canonical and Organization/WebSite/FAQPage schema, plus retention of the full directory cards.

Exam questions, notifications, article content and broader SEO targeting are outside this change.
