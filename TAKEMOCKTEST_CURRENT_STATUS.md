# TakeMockTest Current Status

Snapshot date: 2026-08-12. Verified against commit `75df03e` (Add 8 general student-FAQ blog posts).

This file is the live project dashboard. It is tracked in Git and updated only from repository evidence by the coding agent — see `TAKEMOCKTEST_DEVELOPMENT_OPERATING_MODEL.md` §13. ChatGPT may read it and recommend status changes, but must not hand-edit the repository-derived numbers below. Stable product rules belong in `TAKEMOCKTEST_MASTER_HANDOFF.md`.

## 1. Repository and production

- Repository: https://github.com/workwithprabh/takemocktest
- Live domain: https://takemocktest.com
- Country homepage: https://takemocktest.com/in
- Hosting: Vercel, auto-deploys on push to `main`
- Support email configured in code: info@takemocktest.com (mailbox setup pending, per known risks below)

## 2. Verified corpus snapshot (repository-derived, this update)

- Catalog entries (`exam-catalog.ts`): 180
- Live catalog entries with a `liveSlug` (`exam-catalog.ts` × `exams.ts` `ExamSlug` union, both cross-checked and matching): 35
- Question-bank files (`src/lib/question-banks/*.ts`): 182
- Questions: 5,562
- `npm run qa:questions`: PASS — no duplicate IDs, no duplicate question text, valid schema
- `npm run build`: PASS — 1,025 statically generated pages

## 3. Live exams (35)

SSC: ssc-cgl, ssc-chsl, ssc-mts, ssc-cpo, ssc-gd-constable, ssc-je, ssc-steno, ssc-cht, ssc-selection-post

Banking: ibps-po, ibps-clerk, ibps-so, ibps-rrb-officer-scale-1, ibps-rrb-office-assistant, sbi-po, sbi-clerk, rbi-grade-b, rbi-assistant, nabard-grade-a, sebi-grade-a, sidbi-grade-a-b, lic-aao, niacl-ao

Railways: rrb-ntpc, rrb-group-d, rrb-alp, rrb-technician, rrb-je, rrb-paramedical, rpf-si, rpf-constable

Civil Services: upsc-cse

Engineering: jee-main, jee-advanced, bitsat

Government Jobs cluster (per `BATCH_ROADMAP.md`) is complete. Engineering cluster is in progress: JEE Main, JEE Advanced, and BITSAT (2026 Mathematics variant) are live; VITEEE, SRMJEEE, Manipal Entrance Test, AEEE, KIITEE, COMEDK UGET, IIIT Hyderabad UGEE, JEE Main Paper 2 (B.Arch/B.Planning), and NATA remain queued.

## 4. Major completed work

- Custom domain connected to Vercel; Google Search Console ownership verified; sitemap accepted
- Monochrome core design system, General Sans typography, sharp corners throughout
- Homepage exam search with suggestions, category discovery, colorful category icons, availability states, popular test cards
- Timed-attempt safety controls (exit confirmation, local persistence, resume-after-refresh)
- `mcq` / `multi-select` / `numerical` answer types, partial marking, and per-question marks/negative-marking overrides all implemented and exercised live (confirmed in `TestAttemptClient.tsx` and BITSAT/JEE Main/JEE Advanced banks)
- Results, section-wise analysis, question-issue reporting flow
- Privacy, terms, contact, and grievance paths
- Sitemap, robots, metadata helpers, schema, `llms.txt`
- Blog with FAQ blocks and internal linking
- Government Jobs baseline queue complete through SSC Selection Post
- JEE Main Paper 1, JEE Advanced Papers 1 and 2, BITSAT 2026 Mathematics-variant Full Mock 1 (all 5 sections: Physics, Chemistry, English Proficiency, Logical Reasoning, Mathematics) — all imported, wired, and live
- `TAKEMOCKTEST_DEVELOPMENT_OPERATING_MODEL.md`, `QUESTION_BANK_HANDOFF.md`, `TAKEMOCKTEST_CONTENT_SCHEMA.md` (+ machine-readable `.schema.json`), and `scripts/generate-collision-reference.mjs` establish the ChatGPT/coding-agent split and the handoff conventions
- Data-driven guide pages (Syllabus, Eligibility, Selection-Process) live for 6 exams: `ssc-cgl`, `ibps-po` (original reference implementations), plus `ssc-chsl`, `sbi-po`, `ibps-clerk`, `rrb-group-d` (Phase 2 batch 1, Hard-QA-approved and integrated 11 August 2026, 12 pages). All indexable, canonical, in the sitemap, and rendering their approved content instead of the noindex placeholder. `rrb-ntpc` remains queued, blocked on a readable copy of its CEN notice. `GuideBlocks.tsx` had a rendering bug fixed in the same integration: `infoBlocks` and `numberedStages` were not applying the `**bold**` inline-markup parser other block types use, so approved content with bold dates rendered literal asterisks — now fixed for all block types.
- `GuidePageType` extended to `salary` and `previous-year-papers` (12 August 2026). Both are now data-driven through `EXAM_GUIDES`/`GuideBlocks.tsx` instead of hardcoded per-exam JSX, with SSC CGL's existing content migrated in as the reference implementation (byte-for-byte content parity, breadcrumbs now render where they previously didn't). A new `recordCards` block type was added for previous-year-papers' dated-link cards. `admit-card`/`answer-key`/`cutoff`/`result` deliberately stay hardcoded SSC-CGL-only: they're tied to one exam cycle's exact dates and scores, not evergreen reference content, so generalizing them means a recurring per-exam-per-cycle content refresh, decided against for now (see the file's header comment for the reasoning). `sitemap.ts` updated to emit salary/previous-year-papers generically per exam instead of the SSC-CGL-only hardcoded list.

## 5. Current content priority

Not tracked here as a live in-flight table — the previous version of this file tracked BITSAT's section-by-section progress, which is now complete (see §4). The next content decision (which Engineering exam to research next, or whether to deepen an existing exam) belongs in `BATCH_ROADMAP.md`'s queue and the ChatGPT content workflow, not this status file.

## 6. Known risks and inconsistencies

- The support address exists in code, but the actual info@takemocktest.com mailbox is planned for later Zoho Mail setup. Until then, messages may not be deliverable.
- Search Console indexing coverage should be monitored as the sitemap continues to expand.
- Question corpus automation (`qa:questions`) checks structure, duplication, and provenance completeness. It does not replace independent subject-matter validation — that remains ChatGPT's Hard QA responsibility per the operating model.
- The cross-corpus collision reference (`TAKEMOCKTEST_COLLISION_REFERENCE.md`/`.json`) is a risk-flagging aid, not an exhaustive duplicate check — `qa:questions` is still the authoritative technical gate.

## 7. Update protocol

After each completed integration:

1. Re-run `npm run qa:questions` and `npm run build`, and update §2/§3 with the real output.
2. Regenerate the collision reference: `node scripts/generate-collision-reference.mjs`.
3. Update `BATCH_ROADMAP.md`'s live-exam line and queue checkboxes if affected.
4. Update this file's snapshot date and commit reference.
5. Do not claim repository or live status until the change is actually committed (and, if applicable, deployed and live-verified).
