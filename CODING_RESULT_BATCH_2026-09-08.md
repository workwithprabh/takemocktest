# Coding Result — Main Brain batch of 8 September 2026

12 packages received, **10 integrated**, **2 returned as blockers**. Repository
`workwithprabh/takemocktest`, integrated against `main` refreshed immediately
before starting, as instruction 1 requires.

## Pre-integration reconciliation

Instruction 2 (inspect CURRENT main, never duplicate). Four of the twelve
packages name an exam family that already exists:

| Package | Existing in main | Action taken |
|---|---|---|
| VITEEE 2026 MPCEA | `viteee`, stage `mpcea`, Tests 1 and 2 live | Added as **Test 3**. The package's `testCandidate` was `mpcea-full-mock-1`; that id already exists and holds different approved records, so per instruction 5 it was **not** overwritten. |
| SRMJEEE 2026 UG Mathematics | `srmjeee`, stage `pcm`, Tests 1 and 2 live | Added as **Test 3**, same reasoning. |
| CUSAT CAT 2026 Test Code 101 | `cusat-cat`, stage `btech-2026`, Test 1 live | Added as **B.Tech Test 2**. |
| MET 2026 B.Tech | `met`, stage `btech`, Tests 1 and 2 live | Blocked, see below. |

The other eight already existed as **catalog-only rows** (listed in the
directory, no mock tests). Those rows were made live by attaching the
repository slug; no new catalog row was created and no family was duplicated.

Content check before wiring anything: all 1,281 incoming records were compared
against the 31,273 already in the repository using the repository's own
duplicate rule (stem + options + answer key). **Zero full duplicates, zero id
collisions.** 19 records share only a stem with an existing question, which the
repository explicitly permits for reused boilerplate openers with different
options and answers.

## Integrated (10 packages, 981 records)

| Exam | Slug | Stage | Records | Shell |
|---|---|---|---|---|
| AIIMS B.Sc. (Hons.) Nursing 2026 | `aiims-bsc-nursing` | `hons-entrance` | 100 | 100Q / 100 marks / 120 min, +1 / -1/3 |
| AIIMS NORCET-10 Stage I | `aiims-norcet` | `stage-1` | 100 | 100Q / 90 min, five sequential 18-minute blocks |
| CEED 2026 Part A | `ceed` | `part-a` | 44 | 44Q / 150 marks / 60 min, NAT + MSQ + MCQ |
| UCEED 2026 Part A | `uceed` | `part-a` | 57 | 57Q / 200 marks / 120 min, NAT + MSQ + MCQ |
| DBT BET 2026 Section A | `dbt-bet` | `section-a` | 50 | 50Q / 150 marks, +3 / -1 |
| DNB-PDCET 2026 Anaesthesiology | `dnb-pdcet` | `anaesthesiology` | 120 | 120Q / 480 marks / 120 min, +4 / -1 |
| TIFR GS 2026 Computer Science | `tifr-gs` | `computer-science` | 30 | 30 score-bearing Q, five options, +4 / -1 |
| VITEEE 2026 MPCEA | `viteee` | `mpcea` | 125 | added as Full Mock Test 3 + 5 sectionals |
| SRMJEEE 2026 UG Mathematics | `srmjeee` | `pcm` | 130 | added as Full Mock Test 3 + 4 sectionals |
| CUSAT CAT 2026 Test 101 | `cusat-cat` | `btech-2026` | 225 | added as B.Tech Full Mock Test 2 + 3 sectionals |

Every exam control in `OFFICIAL_CONTROL_SNAPSHOT.json` is carried into the
exam-pattern page, including the disclosures the packages required: the
platform-defined 90-minute DBT BET timer and its Section B exclusion; the
platform-defined 4-plus-16 split inside each NORCET block; NORCET Stage I being
qualifying only; the CEED and UCEED text-only representation rule and Part B
exclusion; TIFR's Part C exclusion and the absence of a published Part A
syllabus; the DNB-PDCET bulletin's 3x40 example not being frozen as a runtime
rule; and the AIIMS nursing static-General-Knowledge restriction with its
prospectus re-check caveat.

One mechanical transformation was applied and is worth naming: VITEEE's records
are laid out **English before Aptitude**, because that is the order this
repository's existing `fullMockLayouts` entry declares and Tests 1 and 2 already
follow, and the runtime asserts the bank and the layout agree. Only the order of
the section blocks changed; no record content, option order, or answer key was
touched.

## Returned as blockers (2 packages, 300 records)

Both are reported rather than repaired, per instructions 7 and 8.

### 1. MET 2026 B.Tech — one record

**Record:** `met-2026-btech-physics-013`
(`met-2026-btech-physics-bank-01.json`)

**Condition:** the record declares `maxDecimalPlaces: 5` but carries
`correctValue: "6.9282032303"`, which is 10 decimal places. The value
contradicts the precision the same record declares.

The repository validates a numerical answer against the record's own
`maxDecimalPlaces` (`scripts/audit-question-banks.mjs`, and the same rule again
in `src/lib/questions.ts` at runtime), so this record cannot load. It is the
only one of the 37 numerical records across all twelve packages that fails.

The obvious resolution touches one field and no answer key: either round
`correctValue` to 5 decimal places, or raise `maxDecimalPlaces` to match the
value. Both are frozen fields, so the decision belongs to Main Brain rather
than to integration. The other 59 MET records are clean and the package can
ship the moment this one is resolved.

### 2. UPSC CMS 2026 Written — answer-key distribution

**File:** `upsc-cms-2026-paper-2-full-mock-1` (Surgery, Gynaecology &
Obstetrics, Preventive & Social Medicine)

**Condition:** correct answers fall at positions A/B/C/D 30/32/30/28. The
repository fails a bank whose spread between the most and least used answer
position exceeds `max(3, questions / 75)`, which is 3 for a 120-question bank.
The spread here is 4.

This was checked against the corpus before reporting rather than assumed:
of the 93 existing banks with 80 or more MCQs, **60 have a spread of 0** and
every one of them sits at or under its tolerance. The gate is calibrated to what
this pipeline actually produces, so this is an outlier in the content, not a
mis-calibrated gate.

Fixing it means moving four or five correct answers to a different option
position, which is an option reorder and is forbidden by instruction 7, so it is
returned. Paper I (120 records, General Medicine and Paediatrics) is clean and
passes every check; it was held back only so the exam does not ship as half a
written examination, and it can go live unchanged alongside a corrected Paper
II. The `upsc-cms` slug, catalog row and stage configuration were written and
then reverted, so re-integration is quick.

## QA run

In the order instruction 10 specifies.

| Command | Result |
|---|---|
| `npx tsc --noEmit` | pass |
| `npm run qa:questions` | pass, 791 bank files, 32,254 questions, no duplicate ids or text |
| `npm run collision-reference` | regenerated: 544 saturated topics, 8 risky patterns, 200 shared openings |
| `npm run qa:questions` (rerun) | pass |
| `npm run lint` | pass |
| `npm run qa:assets` | pass, 63 public files, no orphans or duplicates |
| `npm run build` | pass |
| `npm run qa:onpage-seo` | pass |
| `npm run qa:links` | pass |
| `npm run qa:thin-content` | pass |
| `npm run qa:schema` | pass |
| `npm run qa:drift` | pass, baseline recaptured |

`npm run qa:site` runs all of the above as one chain. Two commands named in the
instructions do not exist under those names in the current repository and are
recorded here rather than skipped silently: there is no separate `qa:onpage-seo`
step outside `qa:site` (it is the same script), and `qa:site` now also includes
`qa:links`, `qa:thin-content`, `qa:schema` and `qa:drift`, which post-date the
instruction text.

The first build attempt failed on the VITEEE section-order assertion described
above; that is the fix recorded there, not an unresolved issue.
