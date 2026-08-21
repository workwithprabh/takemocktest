# TakeMockTest

TakeMockTest (takemocktest.com) is a free, no-login mock-test platform for Indian competitive-exam aspirants: syllabus-checked practice tests with instant scoring, negative marking, and section-wise/topic-wise result analysis, across a growing catalog of ~180 exams (government jobs, engineering, banking, railways, civil services, and more).

Every checked question carries a source record (official notification/syllabus reference, URL, and the date it was verified) — no fabricated or "leaked paper" claims. Results and progress are stored only on the visitor's own device (`localStorage`); there is no account system and no server-side tracking of attempts.

84 exams are currently live with real mock tests. See `TAKEMOCKTEST_CURRENT_STATUS.md` for the authoritative current count and `public/llms.txt` for a per-exam summary.

## How content and code are divided

Exam content (research, question writing, independent QA) is produced through a separate ChatGPT-based workflow and handed to the coding agent as an approved package for repository integration. Read `TAKEMOCKTEST_DEVELOPMENT_OPERATING_MODEL.md` before doing any content or integration work — it defines the split and the rules that follow from it. `QUESTION_BANK_HANDOFF.md` and `TAKEMOCKTEST_CONTENT_SCHEMA.md` cover the handoff process and the exact schema.

## Tech stack

Next.js 15, React 19, TypeScript, Tailwind CSS 3. Static export (`output: 'export'` in `next.config.mjs`) — every page is pre-rendered as real, crawlable HTML at build time. No database or login system; test progress and results use browser-side persistence.

```bash
npm install
npm run dev
npm run lint
npm run qa:questions
npm run qa:assets
npm run build
npm run qa:site   # full quality gate: lint + qa:questions + qa:assets + build
```

## Adding a new exam

1. Confirm the approved content package matches `TAKEMOCKTEST_CONTENT_SCHEMA.md`.
2. Add the exam to `ExamSlug` and the `EXAMS` record in `src/lib/exams.ts`, and give it a `liveSlug` in `src/lib/exam-catalog.ts`.
3. Add the question-bank `.ts` files to `src/lib/question-banks/` and wire them into `src/lib/questions.ts`.
4. Extend `scripts/audit-question-banks.mjs`'s filename regex and expected-count logic for the new file prefix.
5. Run `npm run qa:site`, then a focused browser smoke test (see `TAKEMOCKTEST_DEVELOPMENT_OPERATING_MODEL.md` §6).
6. Update `public/llms.txt`, `BATCH_ROADMAP.md`, and `TAKEMOCKTEST_CURRENT_STATUS.md`.

## Design system

Monochrome `ink-50`–`ink-900` scale, zero border-radius, General Sans for headings and body, JetBrains Mono reserved for timer/score digits only. Do not introduce a new visual system per exam — extend the existing components.

## Key docs

- `TAKEMOCKTEST_DEVELOPMENT_OPERATING_MODEL.md` — division of responsibility, handoff conventions, deployment rules
- `QUESTION_BANK_HANDOFF.md` — ChatGPT-side content process and JSON handoff format
- `TAKEMOCKTEST_CONTENT_SCHEMA.md` (+ `.schema.json`) — repository-facing TypeScript schema reference
- `TAKEMOCKTEST_CURRENT_STATUS.md` — live, repository-derived project dashboard
- `BATCH_ROADMAP.md` — exam queue and integration checklist
- `SEO_PLAYBOOK.md` — writing voice, E-E-A-T, and AEO guidance for any user-facing copy
- `TAKEMOCKTEST_COLLISION_REFERENCE.md`/`.json` — cross-exam topic/stem collision-risk reference (`node scripts/generate-collision-reference.mjs` to regenerate)
