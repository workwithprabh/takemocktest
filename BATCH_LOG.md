# Batch Log

Dated entries appended by whoever completes a batch (live session or scheduled cloud agent).

## 2026-08-04 — IBPS RRB Office Assistant (Batch 10, live session)

Added IBPS RRB Office Assistant Prelims: Reasoning (40 Q) + Numerical Ability (40 Q), wired
into 1 full mock (80 Q, single combined 45-minute timer — no sectional lock, per the official
"composite time" pattern) + 2 sectionals + 2 quick timed tests.

**Source:** IBPS's own CRP-RRBs-XIV notification PDF (parsed directly with `pdftotext`, not
just aggregator sites) — confirmed the exact official table: Reasoning 40Q/40 marks/25 min,
Numerical Ability 40Q/40 marks/20 min, composite 45 min total, 0.25 negative marking.

**Errors caught and fixed during `qa:questions`:**
- A compound-interest question ("₹8,000 at 10% for 2 years") exactly duplicated an existing
  RRB NTPC Mathematics question — reworded with different numbers.
- An average question ("12, 18, 24, 30, 36") exactly duplicated an existing SSC CHSL
  Quantitative Aptitude question — reworded with different numbers.
- The first replacement for the CI question ("₹5,000 at 10% for 2 years") turned out to
  *also* already exist verbatim in the same SSC CHSL bank — a reminder that common textbook
  problem setups (round numbers, standard rates) collide easily across banks; the fix that
  finally worked used a more distinctive number set (₹12,000 at 5%).

**Verified:** all 60 banks / 1,790 questions pass `qa:questions` clean; `npm run build` clean
static export; browser walkthrough confirmed the combined-timer full mock (no "SECTION 1/2"
lock UI, correctly matching the composite-timer pattern) and correct scoring (1/80 → 1.00/80,
Reasoning section showing 1.00/40.00 matching the 40/40 split). Also noticed and fixed a real
gap from Batch 9: SSC MTS's full mock had never gotten a `FULL_MOCK_FAQS` entry — added it
alongside this batch's own FAQ entry.

**Batch roadmap checkbox:** ticked in the same commit.

## 2026-08-04 — Stale "practice demo" copy fix (quality-audit follow-up, live session)

A full-site quality audit found that homepage and every exam mock-test hub page still
referenced a "practice demo" content tier (FAQ answers, hero copy, trust metrics, meta
descriptions). Root cause: the 3 legacy `kind:'practice', status:'demo'` scaffold entries
were removed from all exams in earlier batches, and the batch workflow never creates new
demo placeholders — so the copy had gone stale describing a feature that no longer exists
anywhere on the live site.

**Fixed** (real, user-visible copy only — left untouched the dormant per-status fallback
branches in `TestRow.tsx`, `ExamCard.tsx`, and `test/[testId]/page.tsx`, which only render
if a test's `status` is ever non-`'checked'` again — currently unreachable but harmless):
- `src/app/layout.tsx` — default meta description.
- `src/app/[country]/page.tsx` — hero heading, trust-metric details (now dynamically
  reflect the live exam count instead of a hardcoded "SSC CGL Tier 1 pilot"), trust points,
  FAQ answers, meta description.
- `src/app/[country]/[exam]/mock-test/page.tsx` — hero paragraph, FAQ entries (swapped the
  now-moot "What is a practice demo?" for a scoring-explainer FAQ).

**Verified:** `npm run build` clean static export; browser walkthrough of the homepage and
the IBPS RRB Office Assistant mock-test hub confirmed the new copy renders correctly and no
"practice demo" string remains reachable in the live UI.

## 2026-08-05 — SSC GD Constable (Batch 11, live session)

Added SSC GD Constable CBE: General Intelligence and Reasoning (20 Q) + General Knowledge
and General Awareness (20 Q) + Elementary Mathematics (20 Q) + English/Hindi (20 Q), wired
into 1 full mock (80 Q, single combined 60-minute timer — no sectional lock) + 4 sectionals
+ 2 quick timed tests.

**Source:** SSC's own Constable (GD) 2026 notification PDF (`notice_01122025.pdf`, dated
1 December 2025 — parsed directly with `pdftotext`) — confirmed the exact official scheme
table: 80 questions / 160 marks (2 marks each) / 60 minutes / 0.25 negative marking, 4 parts
of 20 questions/40 marks each, Matriculation-level questions. Cross-checked against 3+
independent aggregator sources before trusting the pattern.

**Applied `SEO_PLAYBOOK.md` for the first time this batch** — and immediately hit its
central warning in practice: the "obvious" pool of common GK facts, spelling words, and
question-tag/grammar-stem clichés is now heavily saturated across the 10 existing exams'
English/GA banks. Real collisions caught and fixed during `qa:questions`:
- Math: a duplicate CI setup (₹6,000 at 20%, already used by IBPS RRB OA) needed a third,
  genuinely distinct number set (₹15,000 at 8% → ₹2,496); an average, a rectangle-area, and
  an HCF question all collided with existing SSC MTS/SSC CHSL/IBPS RRB OA questions on exact
  number reuse.
- Reasoning: two "classic" number-series patterns (doubling from 3, and the n²+1 pattern
  from 2,5,10,17,26) turned out to already exist verbatim elsewhere.
- English: the *generic instruction stems* themselves collided, not just the content —
  "Choose the correctly spelled word.", "Choose the grammatically correct sentence.", and
  "Which of the following sentences is grammatically correct?" are each already used once
  elsewhere in the corpus, so reusing them (even with different options) triggered
  duplicate-text detection. Classic spelling words (Receive, Definitely, Government,
  Necessary, Occurred, Separate, Accommodate) and question-tag templates are all already
  spoken for too. Resolution: replaced the colliding items entirely with genuinely different
  vocabulary-in-context, voice, and subject-verb-agreement questions rather than hunting for
  a 7th synonym of an already-used clichê — the more sustainable fix per the playbook's own
  guidance on Scaled-Content-Abuse risk.
- Answer-position balance also needed manual rebalancing in all 4 new banks (habitually
  placed correct answers in the same 1-2 option slots) — fixed by reordering options (never
  changing which value is correct) until each bank read 5/5/5/5 across A/B/C/D.

**Verified:** all 68 banks / 1,870 questions pass `qa:questions` clean; `npm run build` clean
static export (7 new routes: 1 full mock + 4 sectionals + 2 quick tests); browser walkthrough
confirmed the combined 60-minute timer (no section lock), correct 2-marks-per-question
scoring (1/80 → 2.00/160, each section capped at 40.00/40.00), and topic-wise breakdown all
render correctly. Added a 7-question FAQ set (exam-specific facts per `SEO_PLAYBOOK.md`
voice rules — level, timer shape, negative marking, and what happens after the CBE) and an
`llms.txt` line.

**Batch roadmap checkbox:** ticked in the same commit.

## 2026-08-05 — Post-Batch-11 SEO/AEO/GEO/UI-UX re-audit (live session)

Re-audited the whole site applying `SEO_PLAYBOOK.md` for the first time. Found and fixed one
real, site-wide AEO gap: the homepage and every exam's mock-test hub page (all 11 exams)
render a visible FAQ block in the UI but never emitted `FAQPage` JSON-LD for it — only the
per-test instructions page had FAQ schema. Added a reusable `faqPageSchema()` helper to
`src/lib/schema.ts` and wired it into both pages. Verified via the built static export that
`FAQPage` now appears in the JSON-LD on the homepage and on every exam's mock-test hub
(spot-checked SSC GD Constable, IBPS PO, SSC CGL).

Also checked: meta title/description length and uniqueness (consistent with existing
pattern, no regressions), sitemap includes the new exam, `qa:site` (lint + qa:questions +
qa:assets + build) passes clean end-to-end, and a mobile-viewport (375px) check of the
mock-test hub and the heaviest interactive page (test attempt/palette) confirmed no
horizontal overflow.

Deferred to a later pass, not fixed now: title tags across the site sit at 70-75 characters,
a little over Google's typical ~60-char SERP display cutoff — this is a pre-existing,
site-wide pattern (not something this batch introduced) and changing it means touching the
`pageMetadata()` title template used everywhere, which is a bigger, more deliberate change
than an audit fix-in-place; flag for the user before doing it broadly.

## 2026-08-05 — IBPS RRB Officer Scale I (Batch 12, live session)

Added IBPS RRB Officer Scale I Prelims: Reasoning (40 Q) + Quantitative Aptitude (40 Q),
wired into 1 full mock (80 Q, single combined 45-minute timer — no sectional lock, identical
composite-timer shape to the already-live IBPS RRB Office Assistant) + 2 sectionals + 2 quick
timed tests.

**Source:** the exact same CRP-RRBs-XIV notification PDF already used for IBPS RRB Office
Assistant — confirmed via `pdftotext` that it's a combined notification covering both Office
Assistant and Officer Scale I/II/III. Officer Scale I Prelims: 80Q/80 marks/45 min composite,
Reasoning (40Q/40M/25min) + Quantitative Aptitude (40Q/40M/20min), 0.25 negative marking.
Content pitched at graduate/officer difficulty (IBPS PO Prelims-equivalent), noticeably
harder than Office Assistant's clerical-level questions — called out explicitly in the FAQ.
Mains (200Q, 5 sections, non-uniform per-section marks) exists in the same notification but,
per established precedent (baseline = primary objective stage only), left as a
`review-pending` stub for a future deepening pass.

**Applied the `SEO_PLAYBOOK.md` collision lesson from Batch 11 proactively this time** —
batch-grepped every planned question against the full corpus *before* writing the files,
not after. Caught and fixed real collisions pre-emptively: several blood-relations riddles
("pointing to X, the only son/daughter of my..." format) turned out to be one of the most
saturated templates in the whole codebase (4+ existing variants), so blood-relations items
were rewritten in a family-tree statement style instead of the "pointing to/introduced as X"
riddle format entirely. Also swapped a "Doctor is to Hospital as Teacher is to ?" analogy
(used 3× already) and an "8, 27, 64, 100" classification item (exact duplicate) for fresh
alternatives. Despite this, `qa:questions` still caught 3 number-series questions in the
reasoning bank that collided with existing RBI Assistant content — a reminder that even
careful upfront checking misses items if the grep query itself doesn't cover every candidate
question; all 3 were replaced with verified-clean alternatives. The quantitative aptitude
bank's answer-position balance also needed rebalancing (10/7/16/7 → 10/10/10/10) by
reordering options on 6 questions.

**Verified:** all 66 banks / 1,950 questions pass `qa:questions` clean; `npm run build` clean
static export (5 new routes: 1 full mock + 2 sectionals + 2 quick tests); browser walkthrough
confirmed the combined 45-minute timer (no section lock) and correct 1-mark-per-question
scoring (1/80 → 1.00/80, Reasoning section showing 1.00/40.00 matching the 40/40 split).
Added a 6-question FAQ set (including an explicit comparison to the Office Assistant mock's
easier difficulty, per `SEO_PLAYBOOK.md`'s guidance to make every exam's copy carry a fact
that wouldn't be true with the exam swapped out) and an `llms.txt` line.

**Batch roadmap checkbox:** ticked in the same commit.
