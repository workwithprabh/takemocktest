# TakeMockTest — Batch Roadmap & Process

This file is the source of truth for autonomous/scheduled batch work on this repo.
Every agent run (scheduled or manual) should read this file FIRST, before touching any code.

Also read `SEO_PLAYBOOK.md` before writing any user-facing copy, FAQ, or question bank —
it covers the current Google algorithm/E-E-A-T/AEO landscape, the writing-voice guide, and
the student persona this site is written for. Its §6 checklist is required reading before
any content batch, alongside the QC checklist below.

## What this project is

TakeMockTest (takemocktest.com) is a Next.js 15 static-export mock-test site for Indian
competitive exam aspirants. `src/lib/exam-catalog.ts` lists ~180 exams; an exam is "live"
once it has a `liveSlug` pointing to a real entry in `src/lib/exams.ts` with syllabus-checked
question banks in `src/lib/question-banks/`.

Strategy: **breadth-first**. Every exam gets a small baseline package before any exam gets
deepened further (deepening is a separate, later pass). Exception already done: SSC CGL Tier 1
was deepened to 45 tests (quick/topic/difficulty-tiered practice) in an earlier batch — leave
that alone, don't redo it.

## How to find out what's already live

Run: `grep -oP "exam\('[^']+', '[^']+', '[a-z0-9-]+'\)" src/lib/exam-catalog.ts`
Anything with a third argument (the liveSlug) is done. Cross-check against the ExamSlug union
in `src/lib/exams.ts` — the two must always match after your batch (a stale build will fail
otherwise).

**Live as of 2026-08-13:** ssc-cgl, ssc-chsl, ssc-mts, ibps-po, ibps-clerk, rrb-ntpc,
rrb-group-d, sbi-po, rbi-assistant, ibps-rrb-office-assistant, ssc-gd-constable,
ibps-rrb-officer-scale-1, sbi-clerk, rrb-je, upsc-cse, rpf-constable, ssc-cpo, ibps-so,
rbi-grade-b, nabard-grade-a, sebi-grade-a, sidbi-grade-a-b, lic-aao, niacl-ao, rrb-alp,
rrb-technician, rrb-paramedical, rpf-si, ssc-je, ssc-steno, ssc-cht, ssc-selection-post,
jee-main, jee-advanced, bitsat, viteee, srmjeee, aeee, met (39 exams). See `TAKEMOCKTEST_CURRENT_STATUS.md` for the
authoritative up-to-date count — this line is a convenience summary and can drift; the
grep command above and `TAKEMOCKTEST_CURRENT_STATUS.md` are the actual sources of truth.

**Process note (2026-08-11):** exam content (research, writing, Hard QA) now runs through
a separate ChatGPT pipeline per `TAKEMOCKTEST_DEVELOPMENT_OPERATING_MODEL.md`. This file's
"baseline package" and "quality control" sections below describe the coding agent's
integration-time responsibilities on an already-approved package, not independent content
authorship — see that file and `QUESTION_BANK_HANDOFF.md`/`TAKEMOCKTEST_CONTENT_SCHEMA.md`
before starting any new exam integration.

## The queue (Government Jobs cluster, in order)

Do exactly ONE exam per run. Pick the first one in this list that is not yet live. Do not
skip ahead unless an exam turns out to be unsuitable for an MCQ mock test (see note below) —
in that case, leave a one-line note next to it in this file explaining why, and move to the
next one in the same run.

- [x] IBPS RRB Office Assistant
- [x] SSC GD Constable
- [x] IBPS RRB Officer Scale I
- [x] SBI Clerk
- [x] RRB Junior Engineer / DMS / CMA
- [x] UPSC Civil Services Preliminary
- [x] RPF Constable
- [x] SSC CPO
- [x] IBPS Specialist Officer
- [x] RBI Grade B
- [x] NABARD Grade A
- [x] SEBI Grade A
- [x] SIDBI Grade A & B
- [x] LIC AAO
- [x] NIACL Administrative Officer
- [x] RRB Assistant Loco Pilot
- [x] RRB Technician
- [x] RRB Paramedical Categories
- [x] RPF Sub-Inspector
- [x] SSC Junior Engineer
- [x] SSC Stenographer Grade C & D
- [x] SSC Combined Hindi Translators
- [x] SSC Selection Post

**Not MCQ-friendly, evaluate case by case, may need to skip with a note:**
UPSC Civil Services Main (descriptive/essay paper, not objective — likely skip or find if
it has any objective component worth mocking), State PSCs (many, lower individual traffic —
tackle after the national-level exams above are done, same process).

## The queue (Engineering cluster, in order)

- [x] JEE Main
- [x] JEE Advanced
- [x] BITSAT
- [x] VITEEE
- [x] SRMJEEE
- [x] AEEE
- [x] Manipal Entrance Test
- [ ] KIITEE
- [x] COMEDK UGET
- [x] IIIT Hyderabad UGEE
- [x] JEE Main Paper 2: B.Arch and B.Planning
- [x] NATA (Mathematics only, review-pending pattern — see TAKEMOCKTEST_CURRENT_STATUS.md for the source-access caveat)
- [x] MHT CET (PCM group, official 90+90 timing-group pattern — see TAKEMOCKTEST_CURRENT_STATUS.md for the new generic `timingGroups` mechanism)
- [x] WBJEE (Engineering, official 120+120 two-paper timing-group pattern reusing MHT CET's `timingGroups` mechanism, plus a new proportional Category 3 partial-marking mode — see TAKEMOCKTEST_CURRENT_STATUS.md)
- [ ] KEAM — investigated and rejected: official paper uses 5 answer options per question (A-E), not 4, incompatible with this site's 4-option MCQ engine (same class of rejection as XAT/MAH MBA CET)
- [x] AP EAPCET (Engineering, coding-agent-authored while ChatGPT worked on KCET, review-pending pattern — see TAKEMOCKTEST_CURRENT_STATUS.md for the source-access caveat)

After the national and institute entrances, continue with the state engineering entrances
in `exam-catalog.ts` order. Keep the same one-exam-per-run process below.

## Baseline package (what "one exam" means)

For the exam's PRIMARY objective-type stage only (e.g. Prelims, Tier 1, CBT — not a
descriptive/interview stage):

1. Research the official pattern: sections, question counts, marks, duration, negative
   marking, any unusual rules (e.g. SSC MTS's two-session split negative marking — check for
   this kind of thing, don't assume a standard single rule). Use the exam body's own site
   first; cross-check against 2-3 independent aggregator sources if the primary source isn't
   machine-readable. Cite whatever the most authoritative concrete source URL is — the exam
   body's own notification/result PDF beats a coaching site every time, even if you can't
   fully parse it.
2. Write original question banks (never copy from any source) covering every section, sized
   to match the official pattern exactly. Split roughly evenly across easy/medium/hard —
   include *some* genuinely hard-tagged questions, not just easy/medium, so future
   difficulty-tiered practice tests have real material to draw from.
3. Wire: full mock (1) + one sectional per section (matching official duration/marks) +
   2-3 quick timed tests (10/15/20 min, sliced from the same question pools — see how
   `SSC_CGL_TIER1_QUICK_TESTS` / `SSC_MTS_CBT_QUICK_TESTS` do this in `src/lib/questions.ts`
   for the pattern; don't write new content for these, just slice the pools you already wrote).
4. Add the exam to `ExamSlug` in `exams.ts`, the `EXAMS` record, and give it a `liveSlug` in
   `exam-catalog.ts`.
5. Extend `scripts/audit-question-banks.mjs`'s filename regex and expected-count logic for
   the new bank-file prefix.
6. Add a `FULL_MOCK_FAQS` entry in `src/app/[country]/[exam]/test/[testId]/page.tsx` (copy an
   existing entry's shape, write real answers for this exam).
7. Add a line for the new exam to `public/llms.txt`.

## Quality control — run every one of these before committing

1. `npm run qa:questions` — must pass clean (exact counts, no cross-file duplicate IDs/text,
   4 distinct options each, valid answer index, complete source provenance, answer-balance
   within 3 of the most/least common position). If it fails on a duplicate, don't just reword
   blindly — check what you collided with; this has repeatedly turned out to be either an
   old generic phrasing (e.g. "Choose the correctly spelled word") or a genuinely common fact
   (e.g. "SI unit of force") already used elsewhere. Search the whole `question-banks/`
   directory for the phrase before picking a replacement, or you'll just collide again.
2. Precompute every math answer via a quick Node script before writing it into a question —
   don't hand-calculate and trust it.
3. Re-derive every logic puzzle (syllogism, coding-decoding, blood relations, seating/puzzle)
   step by step in your own reasoning before finalizing the key — these are the single most
   common source of real errors.
4. `npm run build` — must complete with a clean static export, no type errors, no thrown
   validation errors from `questions.ts`'s own structural checks.
5. No live browser available in this environment — `npm run build` succeeding, plus a manual
   read-through of the generated route list for the new exam's paths, is the available
   substitute for the browser walkthrough a human/interactive session would normally do.
6. Update `public/llms.txt`.

## Committing and pushing

- Git identity for commits: `workwithprabh` / `workwithprabh@gmail.com` — set this locally in
  the sandbox with `git config user.name`/`user.email` before committing (it won't be preset).
- Only commit and push if `qa:questions` and `build` both pass clean. If you run out of time
  or budget mid-batch, leave the sandbox's uncommitted changes as they are (they'll be
  discarded) rather than pushing a broken state — the next scheduled run will just retry the
  same exam from the last good commit.
- Tick the checkbox for the exam you completed in the queue above, in the same commit.
- **Do not deploy to Vercel.** This environment has no Vercel credentials, and deploys are a
  deliberate manual/approved step, not automatic.
- After committing, append a dated entry to `BATCH_LOG.md` (create it if it doesn't exist)
  summarizing: which exam, question counts per section, any errors caught and how they were
  fixed, and anything unusual about the exam's pattern worth flagging to a human later.
