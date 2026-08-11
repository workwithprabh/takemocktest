# TakeMockTest Master Project Handoff

Last reviewed: 2026-08-10

This file gives a new ChatGPT chat the stable context needed to work on TakeMockTest without reconstructing the project from conversation history. Read it with `TAKEMOCKTEST_CURRENT_STATUS.md`, `QUESTION_BANK_HANDOFF.md`, `BATCH_ROADMAP.md`, and `SEO_PLAYBOOK.md`.

## 1. Product

TakeMockTest is a free, no-login mock-test platform for students preparing for Indian competitive examinations.

- Live domain: https://takemocktest.com
- Primary country route: `/in`
- GitHub repository: https://github.com/workwithprabh/takemocktest
- Support and grievance email: info@takemocktest.com
- Current hosting: Vercel
- The platform is independent and is not affiliated with any examination body.

The central promise is simple: students can find an exam, understand its real pattern, take a timed test, and receive honest performance feedback without creating an account.

## 2. Audience

The primary audience is Indian competitive-exam aspirants, often studying on mobile devices and budget connections.

Important student needs:

- Fast access with no mandatory account
- Clear distinction between available tests and planned exam listings
- Accurate exam patterns, timings, marks, and negative marking
- Safe test attempts that survive refreshes
- Direct explanations and useful section-wise analysis
- Visible source and review information
- Simple navigation that does not require students to understand the site structure first

## 3. Current technology

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 3
- Static export through `next.config.mjs`
- No database or login system
- Test progress and results use browser-side persistence

Useful commands:

```text
npm run dev
npm run lint
npm run qa:questions
npm run qa:assets
npm run build
npm run qa:site
```

`npm run qa:site` is the full repository quality gate.

## 4. Design system

The main interface uses General Sans, with JetBrains Mono reserved for test timers and score digits.

The foundational palette is the `ink-50` through `ink-900` tonal scale. The `correct` and `incorrect` colors are reserved for test-result states. The site uses sharp corners with a zero border radius.

Hierarchy:

- Primary actions: ink-900 background with light text
- Secondary actions: transparent or light background with an ink border
- Cards: white or ink-50 surface with ink borders
- Header and footer: ink-900 background
- Body text: ink-900
- Muted text: ink-400 or ink-500
- Tags: ink-100 background with ink-700 text
- Category-specific color is allowed on exam and category icon surfaces to improve scanning. It must not replace the core hierarchy or appear as random decoration.

The UI must remain mobile-first, accessible, keyboard usable, and clear about which elements are interactive.

## 5. Information architecture

Primary discovery routes:

- `/in`
- `/in/exams`
- `/in/exams/[category]`
- `/in/blog`
- `/in/results`

Per-exam routes:

- `/in/[exam]`
- `/in/[exam]/mock-test`
- `/in/[exam]/previous-year-papers`
- `/in/[exam]/syllabus`
- `/in/[exam]/exam-pattern`
- `/in/[exam]/eligibility`
- `/in/[exam]/selection-process`
- `/in/[exam]/admit-card`
- `/in/[exam]/answer-key`
- `/in/[exam]/result`
- `/in/[exam]/cutoff`
- `/in/[exam]/salary`
- `/in/[exam]/test/[testId]`
- `/in/[exam]/test/[testId]/attempt`

The catalog contains exam names across Government Jobs, Engineering, Medical, Study Abroad, Management, University and Science, Defence, Law, Teaching, Commerce, Design, and Hospitality.

An exam listing is not the same as an available mock test. Only catalog entries with a `liveSlug` and real entries in `src/lib/exams.ts` may be presented as available.

## 6. Homepage direction

The homepage should help a student answer three questions quickly:

1. What is this website?
2. Can I find my exam?
3. Can I start a real test now?

Current homepage elements include:

- A student-focused hero and primary practice action
- Exam search with suggestions
- Popular available exam cards
- Honest availability counters based on repository data
- Goal and category discovery
- Latest exam updates
- Question sourcing and trust information
- FAQ content

Do not add fabricated student counts, success rates, ranks, testimonials, or other social proof.

## 7. Test-taking requirements

An active timed attempt is a protected experience.

- Hide the global header, footer, and mobile bottom navigation during an attempt.
- Provide a deliberate Exit test action with confirmation.
- Persist answers, marked questions, current section, and timer deadlines locally.
- Resume safely after refresh.
- Warn before accidental navigation away from an active test.
- Show a clear question-palette legend.
- Keep the question palette collapsible on mobile.
- Respect composite timers, sectional locks, numerical answers, multi-select answers, and partial marking when an exam requires them.
- Never simplify an official response format merely to fit an existing component.

## 8. Exam content policy

Official exam patterns must be researched from primary sources whenever possible. Store the source URL and the date checked.

Content types must remain distinct:

- `original`: written in-house to match an official pattern
- `official-paper`: used only when the paper and provenance are genuinely verified and reuse is appropriate

Never describe an original question as a previous-year question. Never fabricate a year, shift, paper code, source, rank, result, or official association.

Question banks must follow `QUESTION_BANK_HANDOFF.md`. The minimum pipeline is:

1. Official exam brief
2. Writer draft
3. Independent Auditor review
4. Corrected bank when needed
5. Independent Final Gate approval
6. Repository import
7. Automated question QA
8. Production build
9. Browser review
10. GitHub commit and approved deployment

The Writer must not approve its own bank. Corrected files must be reloaded and checked before receiving final PASS status.

## 9. SEO, AEO, and GEO rules

SEO work must follow `SEO_PLAYBOOK.md`.

Required principles:

- Exactly one logical H1 per page
- Page-specific titles and descriptions that promise only published content
- Logical heading order
- Crawlable text, not text embedded in images
- Canonical site URL and HTTPS
- Sitemap and robots generated from real configuration
- Breadcrumb, Organization, WebSite, Quiz, FAQ, and Article schema only where semantically appropriate
- Descriptive internal links between exam, test, pattern, syllabus, results, and blog pages
- Exam-specific facts rather than find-and-replace template copy
- Direct answers near the beginning of sections for answer extraction
- Dated and checkable sources for time-sensitive exam facts
- Updated `public/llms.txt` for every live exam
- No keyword stuffing, fake expertise, or scaled thin pages

Keyword targeting is a later editorial layer. Accuracy, complete student journeys, and useful page content come first.

## 10. Trust, privacy, and support

- No login is required for the current test experience.
- Test answers and results are stored locally unless future functionality explicitly changes this.
- Privacy language must remain aligned with the principles of India's DPDP Act, 2023.
- Consent checkboxes must be unchecked by default.
- Question corrections, support requests, and privacy grievances use info@takemocktest.com.
- The footer must retain the independent-platform disclaimer.

## 11. Quality gates

Run a broad quality review after every 10 completed tasks. It must cover:

- Content and answer accuracy
- Source integrity
- UI and UX
- Mobile and desktop navigation
- Accessibility and contrast
- SEO metadata and heading structure
- Schema and sitemap coverage
- AEO and GEO readiness
- Performance and technical errors
- Privacy, consent, trust, and support paths

No task is complete merely because files were generated. Completion requires evidence such as a passing audit, successful build, browser verification, or a live deployment check.

## 12. ChatGPT workspace roles

Use separate chats inside the TakeMockTest Project:

- Project Manager: roadmap, status, priorities, dependencies, and quality-gate scheduling
- Exam Writer: produces one full mock section at a time
- Exam Auditor: independently solves and checks every supplied question
- Final Gate: reloads corrected banks and grants PASS or FAIL

Keeping these roles separate reduces self-confirmation and makes failures easier to trace.

## 13. Non-negotiable rules

- Do not fabricate progress or availability.
- Do not fabricate statistics or testimonials.
- Do not publish unvalidated question banks.
- Do not promise unavailable resources in metadata.
- Do not weaken the active-test safety controls.
- Do not introduce a new design system without explicit approval.
- Do not alter metadata, schema, or semantic heading structure during a styling-only task.
- Do not publish directly from an incomplete or failing branch.

## 14. Main Project Manager instruction

After loading the project files, the main ChatGPT chat should report:

1. Current position
2. Verified completed work
3. Current work in progress
4. Remaining work
5. Next three recommended actions
6. Risks or blockers
7. Estimated completion range with assumptions
8. Tasks remaining before the next 10-task quality gate

If files or facts conflict, the Project Manager must surface the conflict instead of silently choosing one version.
