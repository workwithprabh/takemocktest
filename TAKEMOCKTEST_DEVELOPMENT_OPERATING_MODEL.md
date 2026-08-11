# TakeMockTest Development Operating Model

This instruction defines the division of responsibility between ChatGPT content/project management and coding/deployment agents for TakeMockTest.

It replaces any earlier workflow that asked the coding agent to independently research, write, solve, validate, or substantially review exam question content.

## 1. Source of truth for exam content

All exam-content work will be completed in ChatGPT before repository integration.

ChatGPT is responsible for:

- Exam-family and stage/variant research
- Hard Research Gate using current primary official sources
- Official exam-pattern and syllabus verification
- Exam brief JSON and Markdown
- Test-series manifest
- Full mock, sectional, quick-practice, and special-format planning
- Original question writing, answers, explanations, difficulty labels, metadata, and provenance
- Independent Hard QA, corrections, and rechecking
- Duplicate and near-duplicate review within the supplied content
- Final approved question-bank files
- SEO, AEO, and GEO content strategy and factual specifications
- Page titles, descriptions, heading and content requirements, schema inputs, internal links, sitemap, `llms.txt`, and exam trust/source information

When an exam package is handed to the coding agent with a Hard QA PASS, treat those files as content-authoritative.

Do not independently re-solve every question, repeat the subject-matter audit, rewrite approved questions, rebalance or paraphrase approved questions, or change approved answers and explanations.

If a repository-level technical check exposes a suspected content defect, report the exact question ID and issue instead of silently editing approved content.

## 2. Coding agent responsibility

The coding/deployment agent is responsible for website and repository implementation, including:

- Maintaining the TakeMockTest codebase and approved design system
- Responsive behavior, accessibility, navigation, and active-test safety
- Converting approved JSON into the repository format
- Registering exam families, stages, variants, manifests, and tests
- Wiring full mocks, sectionals, quick practice, and special response types
- Timers, sectional timing and locks, scoring, persistence, results, and analysis
- Approved metadata, canonical URLs, structured data, internal links, sitemap, and `public/llms.txt`
- Mobile and desktop usability and performance
- Repository and build checks
- GitHub commits and pushes, production deployment, and live verification

## 3. Design ownership

Do not create a new visual system for each exam. Maintain the existing TakeMockTest design system and established component patterns.

The coding agent owns component implementation, layouts, responsive behavior, spacing, typography implementation, interaction states, navigation, accessibility, test-taking UI, results UI, and performance.

Do not make unnecessary redesigns during an exam-content import. If an official exam format genuinely requires a new interface, implement it consistently with the existing design system.

## 4. SEO ownership

ChatGPT provides the SEO, AEO, and GEO content and specification. The coding agent implements it and verifies technically that:

- One logical H1 exists
- Metadata renders correctly
- Canonical URLs are correct
- Schema is valid and semantically appropriate
- Internal links work
- The sitemap includes live routes
- Robots behavior remains correct
- `llms.txt` is updated
- Pages do not promise unavailable content
- Original mock questions are not presented as previous-year questions

Do not independently generate large amounts of replacement SEO copy unless a required field is genuinely missing.

## 5. Repository QA

Do not repeat ChatGPT's full subject-matter Hard QA. Repository QA focuses on technical integration.

Run relevant checks such as:

- `npm run qa:questions`
- `npm run lint`
- `npm run qa:assets`
- `npm run build`
- `npm run qa:site`

The repository question audit still checks valid schema and IDs, duplicate IDs and question text against the repository, option counts, answer indexes, configured question counts, marks, sections, and test configuration. These are integration checks, not a second academic review.

## 6. Browser smoke test

After importing an approved exam, verify:

- Exam overview and test listings load
- Tests start with the correct question, section, timer, and scoring configuration
- Answer selection, persistence, resume, palette, exit confirmation, submission, and results work
- Mobile and desktop interfaces work
- Metadata, canonical URL, schema, sitemap, and `llms.txt` integration are present
- A few established routes still work

## 7. Deployment rule

When ChatGPT supplies an approved exam brief, approved test-series manifest, final question banks, Hard QA PASS, SEO/AEO/GEO implementation specification, and required routes/configuration, proceed directly to repository integration.

After integration:

1. Run technical and repository checks.
2. Fix technical defects.
3. Run focused browser verification.
4. Commit and push.
5. Deploy through the normal TakeMockTest production workflow.
6. Verify the live site.

Do not send approved content through another full academic QA cycle.

## 8. Failure handling

Do not modify approved content silently. If integration exposes a suspected academic or content problem:

1. Record the exact question ID or content field.
2. Explain the issue.
3. Do not guess a correction.
4. Return it to the ChatGPT content workflow.

Fix technical problems directly, including TypeScript, routing, import, test configuration, styling, responsive, accessibility, schema, sitemap, and build defects.

## 9. Efficiency rule

Avoid duplicating work that has already passed the appropriate gate. ChatGPT owns content correctness; the coding agent owns implementation correctness.

Do not spend a full exam-sized coding-agent session rechecking an exam package that already has an independent Hard QA PASS.

## 10. Current project model

The operating sequence for future exam batches is:

Hard Research Gate in ChatGPT
→ Test-Series Manifest in ChatGPT
→ Writer in ChatGPT
→ Independent Hard QA in ChatGPT
→ Final approved integration package from ChatGPT
→ Coding agent imports and wires the package
→ Repository automated checks
→ Focused browser smoke test
→ GitHub commit and push
→ Production deployment
→ Live verification
→ Project status update

A stage or variant must not be described as SERIES COMPLETE merely because one full mock has been published. Follow the approved test-series manifest and distinguish IN PROGRESS, LAUNCH COMPLETE, and SERIES COMPLETE accurately.

## 11. Approved-content handoff

Use a fixed, versioned file naming convention for every ChatGPT-approved artifact:

`{exam-slug}-{stage-or-variant}-{deliverable}-v{n}-APPROVED.{ext}`

Examples:

- `bitsat-2026-mathematics-exam-brief-v1-APPROVED.json`
- `bitsat-2026-mathematics-test-series-manifest-v1-APPROVED.json`
- `bitsat-2026-mathematics-physics-sectional-01-v1-APPROVED.json`
- `bitsat-2026-mathematics-launch-package-hard-qa-v1-APPROVED.md`

Every correction increments the version. Never overwrite a previously reviewed version while keeping the same filename — a corrected file is `v2`, not a silent rewrite of `v1`. The coding agent integrates only the version explicitly identified as APPROVED by Hard QA.

Delivery is normally by direct file upload to the coding-agent session. If repository-based handoff is useful, use a dedicated tracked folder: `content-inbox/` (see `content-inbox/README.md`). Do not leave handoff or status files as loose untracked files in the repository root — track them in Git.

After successful integration, approved source files may be archived or removed from `content-inbox/`, but the integrated production content (the `.ts` bank files and `exams.ts`/`exam-catalog.ts` entries) remains the source the application actually uses.

## 12. Cross-corpus collision reference

ChatGPT cannot reliably detect collisions against the entire live repository without repository-derived context. After each exam or meaningful question-bank integration, the coding agent regenerates a lightweight collision-risk reference:

```
node scripts/generate-collision-reference.mjs
```

This produces `TAKEMOCKTEST_COLLISION_REFERENCE.json` (machine-readable) and `TAKEMOCKTEST_COLLISION_REFERENCE.md` (human-readable), covering topic saturation across exams, known risky generic-template stems (patterns that have historically caused duplication on this project), and cross-exam shared question openings. It does not reproduce the full question corpus.

Attach the latest collision-reference file to ChatGPT Writer prompts for subjects that overlap already-live exams (Reasoning, Quantitative Aptitude, General Awareness/GK, and English are the highest-overlap subjects on this site per the current reference). Repository-level duplicate checking during integration (`npm run qa:questions`) remains mandatory regardless — the reference reduces rework, it does not replace the technical check.

## 13. `TAKEMOCKTEST_CURRENT_STATUS.md` is the repository status source of truth

`TAKEMOCKTEST_CURRENT_STATUS.md` is tracked in Git and updated from repository evidence, not from chat memory. The coding agent is the sole authority for repository-derived numbers: catalog entries, live mock-test entries, question-bank files, total questions, generated page counts, build status, deployed exams, and commit information.

After an integration or deployment, the coding agent regenerates these counts directly from the repository (`npm run qa:questions`, `grep`/`git log`, or an equivalent) before updating the file. ChatGPT may use the file for project management and may recommend status changes, but must not hand-edit the repository-derived metrics themselves. The file always carries a last-updated date and, where practical, the commit it reflects.

## 14. `BATCH_ROADMAP.md` and `README.md` ownership

Documentation freshness is part of the coding agent's integration responsibilities.

`BATCH_ROADMAP.md` is checked after every completed exam integration and updated whenever its live-exam counts, queue state, or completed-work list are affected.

`README.md` is checked after every integration but only changed when the integration makes an existing statement inaccurate or materially outdated — no noisy README commits for every exam if nothing relevant changed.

The same principle applies to `public/llms.txt`, catalog counts, live-test counts, setup instructions, architecture descriptions, and project-status claims anywhere in tracked documentation: nothing should knowingly remain stale after the coding agent has evidence that its claims are wrong.

## 15. Content-schema alignment

`TAKEMOCKTEST_CONTENT_SCHEMA.md` documents the repository-facing TypeScript structures (`ExamConfig`, `TestStage`, `StagePattern`, `TestConfig`, `Question`, `QuestionSource`, `CatalogExam`) that ChatGPT-approved artifacts should target, so integration is close to a direct import rather than a translation exercise. It complements, and does not replace, `QUESTION_BANK_HANDOFF.md`'s process and JSON-handoff conventions — read both together when preparing or reviewing a handoff package.
