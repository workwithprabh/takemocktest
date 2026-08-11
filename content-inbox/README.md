# content-inbox

Optional tracked landing spot for ChatGPT-approved content packages, when repository-based handoff is used instead of (or in addition to) direct upload to the coding-agent session. See `TAKEMOCKTEST_DEVELOPMENT_OPERATING_MODEL.md` §11.

## Naming convention

Every file placed here follows:

```
{exam-slug}-{stage-or-variant}-{deliverable}-v{n}-APPROVED.{ext}
```

Examples:

- `bitsat-2026-mathematics-exam-brief-v1-APPROVED.json`
- `bitsat-2026-mathematics-test-series-manifest-v1-APPROVED.json`
- `bitsat-2026-mathematics-physics-sectional-01-v1-APPROVED.json`
- `bitsat-2026-mathematics-launch-package-hard-qa-v1-APPROVED.md`

A correction increments `v{n}`. Never overwrite an existing version's filename — add a new one. The coding agent integrates only the file explicitly marked `-APPROVED` at the highest version number for that deliverable.

## Lifecycle

1. ChatGPT (or whoever prepares the handoff) adds the approved file(s) here, committed to Git.
2. The coding agent integrates the approved version into `src/lib/exams.ts`, `src/lib/exam-catalog.ts`, and `src/lib/question-banks/`.
3. After a successful integration (technical checks + smoke test + commit), the source files here may be archived (moved to `content-inbox/archive/`) or removed — the `.ts` bank files and exam config entries in the repository are the production source of truth from that point on, not the files in this folder.

Do not leave approved-content or status files loose and untracked in the repository root — either they live here (tracked) or they're uploaded directly to the coding-agent session for that integration.
