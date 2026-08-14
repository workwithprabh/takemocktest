# TakeMockTest Current Status

Snapshot date: 2026-08-14. Verified against commit `f0b5f6d`, plus the uncommitted RRB NTPC CBT-1 Stage 1 content refresh described below.

This file is the live project dashboard. It is tracked in Git and updated only from repository evidence by the coding agent — see `TAKEMOCKTEST_DEVELOPMENT_OPERATING_MODEL.md` §13. ChatGPT may read it and recommend status changes, but must not hand-edit the repository-derived numbers below. Stable product rules belong in `TAKEMOCKTEST_MASTER_HANDOFF.md`.

## 1. Repository and production

- Repository: https://github.com/workwithprabh/takemocktest
- Live domain: https://takemocktest.com
- Country homepage: https://takemocktest.com/in
- Hosting: Vercel, auto-deploys on push to `main`
- Support email configured in code: info@takemocktest.com (mailbox setup pending, per known risks below)

## 2. Verified corpus snapshot (repository-derived, this update)

- Catalog entries (`exam-catalog.ts`): 180
- Live catalog entries with a `liveSlug` (`exam-catalog.ts` × `exams.ts` `ExamSlug` union, both cross-checked and matching): 39
- Question-bank files (`src/lib/question-banks/*.ts`): 213
- Questions: 6,750
- `npm run qa:questions`: PASS — no duplicate IDs, no full duplicate questions (stem + options + answer), valid schema
- `npm run build`: PASS — 1,142 statically generated pages

## 3. Live exams (39)

SSC: ssc-cgl, ssc-chsl, ssc-mts, ssc-cpo, ssc-gd-constable, ssc-je, ssc-steno, ssc-cht, ssc-selection-post

Banking: ibps-po, ibps-clerk, ibps-so, ibps-rrb-officer-scale-1, ibps-rrb-office-assistant, sbi-po, sbi-clerk, rbi-grade-b, rbi-assistant, nabard-grade-a, sebi-grade-a, sidbi-grade-a-b, lic-aao, niacl-ao

Railways: rrb-ntpc, rrb-group-d, rrb-alp, rrb-technician, rrb-je, rrb-paramedical, rpf-si, rpf-constable

Civil Services: upsc-cse

Engineering: jee-main, jee-advanced, bitsat, viteee, srmjeee, aeee, met

Government Jobs cluster (per `BATCH_ROADMAP.md`) is complete. Engineering cluster is in progress: JEE Main, JEE Advanced, BITSAT (2026 Mathematics variant), VITEEE (2026 MPCEA Mathematics stream), SRMJEEE (2026 PCM Mathematics route), AEEE (2026 B.Tech), and MET (2026 B.Tech) are live; KIITEE, COMEDK UGET, IIIT Hyderabad UGEE, JEE Main Paper 2 (B.Arch/B.Planning), and NATA remain queued.

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
- Data-driven guide pages (Syllabus, Eligibility, Selection-Process) live for 10 exams: `ssc-cgl`, `ibps-po` (original reference implementations), `ssc-chsl`, `sbi-po`, `ibps-clerk`, `rrb-group-d` (Phase 2 batch 1, Hard-QA-approved and integrated 11 August 2026, 12 pages), `ssc-mts`, `ssc-gd-constable`, `sbi-clerk` (Phase 2 batch 2 ready3, Hard-QA-approved v2 packages, integrated 12 August 2026, 9 pages), plus `ssc-cpo` (Phase 2 batch 3, Hard-QA-approved v1 package, integrated 13 August 2026, 3 pages). All indexable, canonical, in the sitemap, and rendering their approved content instead of the noindex placeholder. `ibps-rrb-office-assistant`, `rrb-je`, and `rrb-ntpc` remain queued, blocked on readable official sources. `GuideBlocks.tsx` had two rendering bugs fixed across these integrations: (1) `infoBlocks` and `numberedStages` were not applying the `**bold**` inline-markup parser other block types use, so approved content with bold dates rendered literal asterisks; (2) the `table` block's `minWidth` field only actually applied when the value was the exact string `'34rem'` (a hardcoded Tailwind arbitrary-class check), silently doing nothing for any other value including SBI Clerk's `'38rem'` — now applied generically via inline style for any value.
- `GuidePageType` extended to `salary` and `previous-year-papers` (12 August 2026). Both are now data-driven through `EXAM_GUIDES`/`GuideBlocks.tsx` instead of hardcoded per-exam JSX, with SSC CGL's existing content migrated in as the reference implementation (byte-for-byte content parity, breadcrumbs now render where they previously didn't). A new `recordCards` block type was added for previous-year-papers' dated-link cards. `admit-card`/`answer-key`/`cutoff`/`result` deliberately stay hardcoded SSC-CGL-only: they're tied to one exam cycle's exact dates and scores, not evergreen reference content, so generalizing them means a recurring per-exam-per-cycle content refresh, decided against for now (see the file's header comment for the reasoning). `sitemap.ts` updated to emit salary/previous-year-papers generically per exam instead of the SSC-CGL-only hardcoded list.
- **Guide pages batch 3 is partial, not complete (13 August 2026).** Of the 5 exams scoped in `CONTENT_REQUEST_GUIDE_PAGES_BATCH3.md`, only `ssc-cpo` passed Hard QA (0 unresolved issues) and is integrated and live. The other four are explicitly not integrated: `rbi-assistant` is blocked at Hard QA because its primary RBI source could not be independently re-verified (anti-bot challenge on the RBI opportunities site); `rbi-grade-b`, `ibps-so`, and `nabard-grade-a` are blocked earlier, at the research-gate stage, each on an unreadable current-cycle primary source. See `guide-pages-batch3-ready2-hard-qa-v1-FAIL.md` and `guide-pages-batch3-research-gate-v1.md` for the per-exam detail. Do not treat batch 3 as done until those four unblock.
- VITEEE 2026 MPCEA Mathematics stream full launch (12 August 2026): Full Mock (125Q/500 marks/150 min, official 2026 pattern), 5 sectionals, and 2 mixed quick-practice tests, 325 questions total, Hard-QA-approved. First exam to use the four-mark (+4/-1/0) scoring pattern alongside JEE Main/Advanced-style engineering formats. During integration, `npm run qa:questions` flagged 2 VITEEE questions whose generic instructional stem ("Choose the grammatically correct sentence.") matched pre-existing SSC CGL questions verbatim, even though the options/answer/explanation were genuinely different. On the site owner's explicit decision, the repository's duplicate-question rule changed as a result — see §6.
- SRMJEEE 2026 PCM Mathematics route full launch (13 August 2026): Full Mock (130Q/130 marks/150 min, official 2026 pattern), 4 sectionals, and 2 mixed quick-practice tests, 338 questions total, Hard-QA-approved (1 corrected item, 12 replaced items across the v2 banks). No negative marking, +1 per correct answer. The official syllabus names the fourth section `English & Aptitude` as one combined 20-question section with no published subtopic list, so its granular topic labels are documented in-app as a TakeMockTest preparation map, not an official SRM subtopic breakdown. The Mathematics/Biology alternative route is out of scope and not built.
- AEEE 2026 B.Tech full launch (13 August 2026): Full Mock (100Q/300 marks/150 min, official 2026 CBT pattern), 5 sectionals, and 2 mixed quick-practice tests, 260 questions total, Hard-QA-approved. +3 correct / -1 incorrect / 0 unanswered. During integration, `npm run qa:questions` (with the site's cross-corpus full-question-signature rule) flagged one genuine exact duplicate: `aeee-2026-btech-full-01-039` ("What is i cross j?", options `["i","j","-k","k"]`, correctIndex 3) was byte-identical to the already-live `srmjeee-2026-pcm-mathematics-sectional-01-002`, both writers independently reaching for the same standard textbook example. Per the operating model this was not silently edited; it was reported back to ChatGPT, which issued a v3 correction (`aeee-2026-btech-full-mock-01-v3-APPROVED.json`) replacing only that one question, verified surgical (99/100 questions byte-identical to v2, arithmetic/difficulty/answer-balance all preserved) before integration proceeded.
- RRB NTPC CBT-1 Stage 1 content refresh (14 August 2026): the site's original RRB NTPC CBT-1 content (3 bank files, 100 questions reused across the Full Mock and all 3 sectionals) has been replaced with a new ChatGPT-Writer package of 200 genuinely unique questions (100 Full Mock, 30 Mathematics/30 General Intelligence and Reasoning/40 General Awareness sectional, zero overlap between them), matching the exam's already-live pattern and test-series manifest exactly. Before integration, a repository collision preflight (`RRB_NTPC_2026_CBT1_REPOSITORY_COLLISION_PREFLIGHT.md`) found 9 of the 200 candidates materially collided with already-live questions elsewhere in the corpus (an exact-duplicate geometry question plus 8 GK-fact restatements and a profit% word problem reusing existing numbers). With the ChatGPT Writer/Hard QA pipeline occupied at the time, the site owner explicitly authorized the coding agent to write and self-review 9 replacement questions in place of the blocked ones; the corrected v2 package was re-run through the same collision check and passed clean (0 material collisions). This v2 batch of 9 has not been through independent ChatGPT Hard QA the way the other 191 questions in this package (and every other exam on the site) have — see the v2 preflight report and `project-takemocktest-operating-model` memory for the full provenance note. `npm run qa:questions` passed clean (213 banks, 6,750 questions, no duplicate IDs or text against the full corpus) with the exact section/difficulty/answer-position balance the manifest specified (60/60/80 sections, 78/92/30 difficulty, 50/50/50/50 answers). Browser-verified: Full Mock loads 100 questions, the General Awareness sectional loads 40 and renders one of the 9 replacement questions with correct answer, submission, and scoring.
- MET (Manipal Entrance Test) 2026 B.Tech full launch (13 August 2026): Full Mock (60Q/240 marks/120 min, official 2026 pattern), 4 sectionals, and 2 mixed quick-practice tests, 165 questions total, Hard-QA-approved (1 corrected item, 6 replaced items, 0 unresolved issues). Mathematics 20, Physics 15, Chemistry 15, English 10, mixing 45 MCQs (+4/-1/0) and 15 Numerical Answer Type questions (+4/0/0), the site's first launch package built around exact finite-decimal NAT answers (0.4, 1.1, 15.5, 96.5) without a `maxDecimalPlaces` field. The handoff flagged, and integration confirmed, that the generic numerical-answer validator in `src/lib/questions.ts` and `scripts/audit-question-banks.mjs` previously treated a NAT `correctValue` without `maxDecimalPlaces` as integer-only, and `TestAttemptClient.tsx` showed a false "Enter the nearest integer" label and blocked typing a decimal point in that case. Both were fixed generically (accept any signed integer or finite decimal when `maxDecimalPlaces` is absent, `maxDecimalPlaces` still caps decimal places when present, malformed values still rejected, no tolerance invented) rather than by adding a fabricated precision field to the approved MET content. `npm run qa:questions` passed clean (212 banks, 6,650 questions, no duplicate IDs or text) with no cross-corpus collision this time. Browser-verified end to end on the Chemistry Sectional test: a decimal NAT answer ("15.5") was typed, saved, and scored correctly against an unrounded `correctValue`.

## 5. Current content priority

Not tracked here as a live in-flight table — the previous version of this file tracked BITSAT's section-by-section progress, which is now complete (see §4). The next content decision (which Engineering exam to research next, or whether to deepen an existing exam) belongs in `BATCH_ROADMAP.md`'s queue and the ChatGPT content workflow, not this status file.

## 6. Known risks and inconsistencies

- The support address exists in code, but the actual info@takemocktest.com mailbox is planned for later Zoho Mail setup. Until then, messages may not be deliverable.
- Search Console indexing coverage should be monitored as the sitemap continues to expand.
- Question corpus automation (`qa:questions`) checks structure, duplication, and provenance completeness. It does not replace independent subject-matter validation — that remains ChatGPT's Hard QA responsibility per the operating model.
- The cross-corpus collision reference (`TAKEMOCKTEST_COLLISION_REFERENCE.md`/`.json`) is a risk-flagging aid, not an exhaustive duplicate check — `qa:questions` is still the authoritative technical gate.
- **Duplicate-question detection is full-signature, not stem-only, since 12 August 2026.** `npm run qa:questions` flags a duplicate only when the stem, the options, and the answer all match an existing question. A shared generic instructional opener (e.g. "Choose the grammatically correct sentence.", "Choose the correctly punctuated sentence.") reused across unrelated exams with different options/answer/explanation is allowed. This is a deliberate site-owner decision, made when VITEEE's launch package hit the old stem-only rule on 2 of its 325 questions. `QUESTION_BANK_HANDOFF.md`'s Codex acceptance checklist reflects the updated rule.

## 7. Update protocol

After each completed integration:

1. Re-run `npm run qa:questions` and `npm run build`, and update §2/§3 with the real output.
2. Regenerate the collision reference: `node scripts/generate-collision-reference.mjs`.
3. Update `BATCH_ROADMAP.md`'s live-exam line and queue checkboxes if affected.
4. Update this file's snapshot date and commit reference.
5. Do not claim repository or live status until the change is actually committed (and, if applicable, deployed and live-verified).
