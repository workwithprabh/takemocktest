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

## 2026-08-05 — SBI Clerk (Batch 13, live session)

Added SBI Clerk Prelims: English Language (30 Q) + Numerical Ability (35 Q) + Reasoning
Ability (35 Q), wired into 1 full mock (100 Q, 3 sections each **separately timed 20
minutes — sectional lock, not a composite timer**) + 3 sectionals + 2 quick timed tests.
This is the first live exam on the site with a true sectional lock (`sectionDuration`)
since SBI PO — every batch since Batch 9 had used the composite-timer pattern instead.

**Source:** found the wrong PDF on the first attempt (an SBI Circle Based Officer
advertisement dated 28 Jan 2026, coincidentally hosted at a similarly-named URL) —
caught this by actually reading the parsed content ("Circle Based Officers", "JMGS-I")
before trusting the numbers, then found and confirmed the correct one: SBI's own Junior
Associate (Customer Support & Sales) 2025-26 advertisement, CRPD/CR/2025-26/06. Confirmed
via `pdftotext`: Prelims = 100Q/100 marks/60 min total, English Language 30Q/30M/20min,
Numerical Ability 35Q/35M/20min, Reasoning Ability 35Q/35M/20min, 0.25 negative marking.

**Collision discipline held up well this time** — batch-grepped all 100 planned questions
against the full corpus before writing any files, and `qa:questions` came back with **zero
duplicate-text errors** on the first run (only answer-balance issues, which is expected and
routine). Confirmed just how saturated common templates are: both idiom candidates
("burn the midnight oil", "once in a blue moon") were already used 2-4× each and got
replaced with original vocabulary-in-context items instead; a "Doctor is to Hospital"-style
analogy and an "8, 27, 64, 100" classification item were avoided from the start based on
Batch 11/12 lessons.

**Verified:** all 69 banks / 2,050 questions pass `qa:questions` clean; `npm run build`
clean static export (6 new routes: 1 full mock + 3 sectionals + 2 quick tests); browser
walkthrough confirmed the sectional-lock UI (shows "SECTION 1/3", palette limited to the
current section's questions, "X/30 in section · X/100 total" counter — a different and
correctly distinct UI from the composite-timer exams) and correct 1-mark-per-question
scoring (1/100 → 1.00/100, English Language section capped at 30.00/30.00). Added a
5-question FAQ set (including an explicit call-out of the sectional-lock timer, since it's
the first exam in several batches to use it) and an `llms.txt` line.

## 2026-08-05 — RRB Junior Engineer / DMS / CMA (Batch 14, live session)

Added RRB JE CBT-I: Mathematics (30 Q) + General Intelligence and Reasoning (25 Q) +
General Awareness (15 Q) + General Science (30 Q), wired into 1 full mock (100 Q, single
combined 90-minute timer — no sectional lock, matching the RRB NTPC/RRB Group D
composite-timer pattern) + 4 sectionals.

**Source:** RRB JE's current cycle (CEN 04/2026) has only a "tentative" detailed
advertisement date (13 August 2026, after this batch's date) — no published notification
yet. Used the most recent fully-published cycle instead: CEN No. 05/2025 (published 28 Oct
2025), since exam pattern doesn't typically change cycle-to-cycle. Confirmed via
`pdftotext`: CBT-I = 100Q/100 marks/90 min, Mathematics 30Q, General Intelligence and
Reasoning 25Q, General Awareness 15Q, General Science 30Q, 0.333 negative marking — the
section split was cross-checked against 2 independent aggregator sources (both consistent,
summing correctly) since the primary PDF's table didn't extract cleanly with `-layout`.

**RRBCDG link rot discovered:** the live URL for this notification
(`rrbcdg.gov.in/uploads/2025/05-JE/052025JE-CEN.pdf`) 404s, and so does the landing page.
Checked whether this was JE-specific — it isn't: the **already-live** RRB Group D source
URL (`.../uploads/2025/09-LVL1/092025-CEN.pdf`, cited since Batch 5) now also 404s,
pointing to a site-wide reorganization on rrbcdg.gov.in rather than a one-off broken link.
Worked around it by citing the Wayback Machine snapshot
(`web.archive.org/web/2025/https://www.rrbcdg.gov.in/uploads/2025/05-JE/052025JE-CEN.pdf`)
instead, which still resolves to the correct 82-page PDF — first time this project has
needed the Wayback fallback. **Flagging, not fixing:** the RRB Group D `sourceUrl` in
`exams.ts` is now also a dead link and should get the same Wayback treatment in a future
pass; out of scope for this one-exam-per-run batch.

**Collision saturation, worse than usual:** RRB JE's CBT-I subjects are nearly identical to
the already-live RRB Group D CBT (same 4 subjects: Mathematics, Reasoning, General
Awareness, General Science), so dozens of first-draft questions collided on the initial
grep pass — one number-series pattern ("2,6,12,20,30") collided **six separate times**
across the corpus, and common GK facts (Article 32, Battle of Plassey, Quit India
Movement, SI units of force/power/pressure, chemical symbols, "largest gland"/"smallest
bone" trivia) were effectively exhausted. For General Science specifically, read the full
text of the sibling `rrb-group-d-cbt-general-science-1.ts` bank directly to get its
complete fact inventory, then deliberately picked facts not on that list — this produced
only 1 duplicate-text failure out of 100 questions on the first `qa:questions` run (a
"least populous state → Sikkim" GA question, replaced with a Sardar Sarovar Dam/Narmada
question), a marked improvement over the trial-and-error approach used in earlier batches.

**Verified:** all 73 banks / 2,150 questions pass `qa:questions` clean; `npm run build`
clean static export (5 new routes: 1 full mock + 4 sectionals). Added a 5-question FAQ set
(explicitly noting the composite 90-minute timer, 1/3 negative marking, and that CBT-I is
only a common screening stage ahead of a branch-specific CBT-II) and an `llms.txt` line.

## 2026-08-05 — UPSC Civil Services Preliminary (Batch 15, live session)

Added UPSC CSE Prelims — the first non-SSC/Banking/Railways exam on the site, and by far
the largest single batch to date: GS Paper I (History 15Q, Geography 15Q, Polity 15Q,
Economy 15Q, Environment 12Q, Science 13Q, Current Affairs 15Q = 100Q total) + CSAT Paper II
(Comprehension 18Q, Interpersonal Skills 6Q, Logical Reasoning 22Q, Decision Making 6Q,
Mental Ability 8Q, Numeracy & Data Interpretation 20Q = 80Q total), 180 original questions
across 13 new bank files, wired into 2 full mocks + 13 sectionals.

**Source:** UPSC's own Civil Services Examination, 2026 notification (Examination Notice
No. 05/2026-CSE, dated 04.02.2026), fetched directly from `upsc.gov.in` and parsed with
`pdftotext`. Confirmed directly from the PDF: both papers are objective/MCQ, 2 hours each,
1/3 negative marking per wrong answer, no penalty for blanks; GS Paper I = 200 marks, CSAT
Paper II = 200 marks and qualifying-only at 33% (66/200). The exact 100Q/80Q question counts
and per-question mark values (2 marks for GS1, 2.5 for CSAT) are not spelled out in the
notification text itself — these are cross-verified via 2 independent aggregator sources,
consistent with each other and with the well-established, unchanged exam format.

**Modeled as two stages, not sections:** unlike every prior exam on this site, GS Paper I
and CSAT Paper II are genuinely separate objective papers (not sections within one combined
timer), so they're modeled as two `TestStage` entries (`paper-1`, `paper-2`) under a single
`upsc-cse` exam, following the precedent already set by SSC CGL Tier 1/Tier 2 and IBPS PO
Prelims/Mains. Each paper uses its own single-timer composite pattern (120 min, no sectional
lock) — required extending `fullMockLayouts`' existing special-case override mechanism (used
for SSC CGL Tier 2 and IBPS PO Mains) to handle two different full-mock layouts under one
exam slug, and adding explicit `upsc-cse/paper-1-full-mock`/`paper-2-full-mock` branches
*before* the generic `full-mock ? 100` catchall in both `questions.ts` and the audit script
(paper-2's 80Q would otherwise have been silently intercepted by that catchall).

**New `category` value:** UPSC doesn't fit the existing `'SSC' | 'Banking' | 'Railways'`
category type used for `ExamCard` badges, so added `'Civil Services'` to the union. Styled
its badge using the `ink-*` monochrome tokens rather than adding a fourth off-system hex
color family — flagging, not fixing, that the other three categories (`SSC`/`Banking`/
`Railways`) still use hardcoded hex colors in `ExamCard.tsx`'s `CATEGORY_STYLES`, which
appears to be a pre-existing gap from before the monochrome design sweep.

**Honesty on the section-wise breakdown:** UPSC does not publish an official per-topic
question split for either paper (unlike SSC/banking exams' official section tables). Rather
than fabricate one, both stage patterns carry an explicit `note` on the exam-pattern page
stating that the breakdown shown "reflects how this mock test's questions are organized,
not an official UPSC-published distribution" — while still citing the real, verifiable
facts (marks, duration, negative marking, qualifying threshold) as officially sourced.

**UPSC-authentic question style:** leaned into UPSC's real "Consider the following
statements... Which of the statements given above is/are correct?" and "assertion-reason"
multi-statement format for a meaningful share of questions, rather than only direct-recall
one-liners — both for authenticity to the actual exam's difficulty/style and because it
naturally produced content distinct from the simpler direct-fact phrasing already used
across the SSC/banking/railway General Awareness banks.

**Collision handling:** GS Paper I's History/Geography/Polity/Economy/Science topics
overlap heavily with existing SSC/banking/railway General Awareness content. Caught and
replaced ~15 real collisions before finalizing, including several facts saturated 2-3× over
already (Article 280/Finance Commission, Comptroller and Auditor-General/Article 148,
Chandrayaan-3/LVM3, Aditya-L1/Lagrange point, Beriberi/Thiamine, Gaganyaan/LEO, "121, 144,
169, 200" classification, a train-speed problem with the exact same numbers) — each
replaced with a genuinely distinct fact/scenario rather than a reworded version of the same
one. CSAT's content (passage-based comprehension, decision-making scenarios, data
interpretation tables) is structurally original and had no meaningful collision risk.

**Verified:** all 86 banks / 2,330 questions pass `qa:questions` clean (zero cross-file
duplicate-text failures on the final run — only two within-file duplicates caught and fixed
along the way, plus the expected first-pass answer-position rebalancing across all 13 new
banks); `npm run build` clean static export (506 pages, 18 new routes: 2 full mocks + 13
sectionals). Browser walkthrough confirmed both papers' single 120-minute composite timers
(no "SECTION X/Y" lock UI), correct scoring on CSAT specifically (1/80 → 2.50/200, matching
its non-standard 2.5-marks-per-question), and section-wise caps summing correctly to each
paper's 200-mark total. Added two 5-question FAQ sets (one per paper) and an `llms.txt` line.
