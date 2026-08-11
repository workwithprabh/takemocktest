# TakeMockTest Content Schema Reference

This documents the actual repository-facing TypeScript structures, derived directly from `src/lib/exams.ts`, `src/lib/questions.ts`, and `src/lib/exam-catalog.ts` as of the commit noted in `TAKEMOCKTEST_CURRENT_STATUS.md`. Target these shapes exactly when producing an exam brief, test-series manifest, or question-bank handoff, so integration is close to a direct import.

This complements `QUESTION_BANK_HANDOFF.md` (process, prompts, per-question JSON shape) rather than replacing it — read both together. Where the two differ on a field name, this file reflects the literal TypeScript source and wins.

A machine-readable JSON Schema for the question-bank array (the highest-volume handoff artifact) is at `TAKEMOCKTEST_CONTENT_SCHEMA.schema.json`.

---

## 1. `ExamConfig` (one per live exam, in `src/lib/exams.ts`'s `EXAMS` record)

```ts
interface ExamConfig {
  slug: ExamSlug;       // must also be added to the ExamSlug union type
  name: string;
  shortName?: string;   // used only in <title> tags when name would exceed ~60-65 chars
  fullName: string;
  category: 'SSC' | 'Banking' | 'Railways' | 'Civil Services' | 'Engineering';
  stages: TestStage[];
}
```

| Field | Required | Notes |
|---|---|---|
| `slug` | yes | kebab-case, matches the `ExamSlug` union entry and the `liveSlug` in `exam-catalog.ts`. Coding agent derives/confirms this; ChatGPT can propose it in the exam brief but the coding agent has final say since it must be unique across the whole `ExamSlug` union. |
| `name` | yes | Display name used across the site (breadcrumbs, H1, cards). ChatGPT produces this from the official exam name. |
| `shortName` | no | Only add when `name` pushes a generated `<title>` past ~60-65 characters (see `mock-test/page.tsx`'s `generateMetadata`). Coding agent derives this at integration time by checking actual title length; ChatGPT does not need to propose it. |
| `fullName` | yes | Fuller official name, used in some copy contexts. ChatGPT produces. |
| `category` | yes | One of the 5 literal values above. Adding a genuinely new category requires a coding-agent code change (new literal + `ExamCard.tsx` styling), not just a content decision. |
| `stages` | yes | See §2. |

**Never invent:** `slug` uniqueness, `category` values outside the literal union.

## 2. `TestStage` (one per objective stage/paper, e.g. Prelims, Tier 1, Paper I)

```ts
interface TestStage {
  id: string;         // e.g. 'paper-1', 'prelims', 'tier-1'
  name: string;        // e.g. 'Paper I', 'Prelims'
  pattern: StagePattern;
  tests: TestConfig[];
}
```

`id` is used as a URL/test-id prefix (`{stage.id}-full-mock-1`, etc.) — kebab-case, short, stable. ChatGPT should propose it in the exam brief matching the official stage/paper name; the coding agent confirms it doesn't collide with an existing stage id pattern for that exam.

## 3. `StagePattern` (section configuration — the human-readable pattern shown on the exam page)

```ts
interface StagePattern {
  status: 'official' | 'review-pending';
  cycle?: string;                 // e.g. 'SSC JE 2025', notification cycle name
  sections: string[];             // section names, must exactly match Question.section strings
  totalQuestions?: number;
  totalMarks?: number;
  duration?: number;              // minutes
  negativeMarking?: number | string;
  sectionBreakdown?: {
    name: string;
    questions: number;
    marks: number;
    duration?: number;            // per-section duration if sectional-locked
  }[];
  timerNote?: string;             // human-readable timer behavior, e.g. "single 120-minute timer, no sectional lock"
  note?: string;                  // used for exclusion notes (non-MCQ papers, discipline-specific sections, etc.)
  sourceUrl?: string;             // MUST start with https://
  checkedOn?: string;             // YYYY-MM-DD
}
```

| Field | Required | Produced by | Never invent |
|---|---|---|---|
| `status` | yes | ChatGPT (`official` once Hard Research Gate passes; `review-pending` if pattern couldn't be fully confirmed) | — |
| `sections` | yes | ChatGPT | Must match `Question.section` strings in every bank for that stage exactly, including case. |
| `totalQuestions`, `totalMarks`, `duration`, `negativeMarking` | strongly recommended | ChatGPT, from the official brief | Never guessed — every number here must trace to `sourceUrl`. |
| `sectionBreakdown` | when sections have individually known counts/marks/durations | ChatGPT | — |
| `note` | when a section/paper is deliberately excluded (non-MCQ, discipline-specific, etc.) | ChatGPT drafts the factual basis; coding agent may adjust wording to match site voice | Never invent an exclusion reason not confirmed by the official notification. |
| `sourceUrl` | yes for `status: 'official'` | ChatGPT | Must be the exam body's own notification/syllabus PDF or page, not a coaching aggregator. `qa:questions`-adjacent checks require `https://`. |
| `checkedOn` | yes for `status: 'official'` | ChatGPT, dated the day the source was actually checked | Never backdated or left stale across a correction. |

## 4. `TestConfig` (one per actual test a student can start: full mock, sectional, quick, etc.)

```ts
interface TestConfig {
  id: string;                    // e.g. 'paper-1-full-mock-1', 'paper-1-mathematics-sectional-1'
  name: string;                  // display name, e.g. 'Paper I Full Mock Test 1'
  kind: 'full-length' | 'sectional' | 'practice' | 'quick' | 'topic' | 'difficulty';
  status: 'checked' | 'demo';
  duration: number;              // minutes, single composite timer duration
  sectionDuration?: number;      // uniform per-section minutes, when sectional-locked with equal windows
  sectionDurations?: number[];   // per-section minutes, when sectional-locked with unequal windows (order matches pattern.sections)
  marksPerCorrect: number;
  negativeMarking: number;
  scoringNote?: string;          // free-text override for unusual scoring rules
  section?: string;               // set only for a sectional/topic test; must match a StagePattern.sections entry
  checkedOn?: string;             // YYYY-MM-DD
}
```

### Timer representation

- **Single composite timer, no sectional lock:** set `duration` only. Leave `sectionDuration`/`sectionDurations` unset.
- **Sectional lock, equal windows:** set `duration` to the sum, and `sectionDuration` to the per-section minutes (e.g. SBI Clerk's three 20-minute sections).
- **Sectional lock, unequal windows:** set `sectionDurations` to an array matching `pattern.sections`' order (e.g. RBI Grade B's 25/25/25/45).

Only the coding agent implements the actual timer/lock behavior in `TestAttemptClient.tsx`; ChatGPT specifies which of the three shapes applies and the exact minute values, sourced from the official pattern.

### `kind` values

- `full-length` — the complete stage assembled from every section's bank.
- `sectional` — one section only, matching official section duration/marks.
- `quick` — short timed slice (10/15/20 min), sliced from already-written pools, not new content. Coding agent generates these; ChatGPT does not need to plan them separately unless the manifest calls for a specific quick-test structure.
- `topic` / `difficulty` — deepened practice variants (see SSC CGL Tier 1 precedent). Only build these when the manifest explicitly calls for deepening; breadth-first is the default strategy.
- `practice` — informal/demo practice not tied to the official pattern's stage structure.

## 5. Question-bank structure (`.ts` files in `src/lib/question-banks/`)

One file per (exam, stage, section, bank-number), e.g. `ssc-je-paper-1-general-awareness-1.ts`:

```ts
import type { Question } from '../questions';

export const SSC_JE_PAPER_1_GENERAL_AWARENESS_1: Question[] = [ /* ... */ ];
```

The approved handoff JSON (a bare `Question[]` array) is imported almost verbatim — the coding agent wraps it in the `import`/`export const` boilerplate above, adds it to `CHECKED_TEST_BANKS`/`fullMockLayouts` in `src/lib/questions.ts`, and extends `scripts/audit-question-banks.mjs`'s filename regex and `expectedCount` logic for the new file prefix. If the handoff JSON already matches the `Question` shape exactly (see §6), this step is mechanical.

## 6. `Question`

```ts
interface Question {
  id?: string;
  section: string;                // must match a StagePattern.sections entry exactly
  topic?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  question: string;
  options: string[];
  correctIndex: number;
  answerType?: 'mcq' | 'multi-select' | 'numerical';
  correctValue?: string;
  correctIndices?: number[];
  partialMarking?: boolean;
  maxDecimalPlaces?: number;
  marks?: number;
  negativeMarking?: number;
  explanation: string;
  source?: QuestionSource;
}
```

| Field | Required | Produced by | Coding agent derives | Never invent |
|---|---|---|---|---|
| `id` | effectively required (audit fails without a unique one) | ChatGPT, following `{exam-slug}-{section-abbrev}-{NNN}` convention (see §8) | Coding agent confirms no collision across the whole repo at integration time | — |
| `section` | yes | ChatGPT | — | Must exactly match `StagePattern.sections`, case-sensitive. |
| `topic` | required by repo QA | ChatGPT | — | — |
| `difficulty` | required by repo QA | ChatGPT — must include a genuine easy/medium/hard mix, not all one tier | — | — |
| `question`, `options`, `explanation` | yes | ChatGPT | — | Never copied verbatim from a real paper or any source; always original, written to match the syllabus (`QUESTION_BANK_HANDOFF.md` rule 3). |
| `correctIndex` | yes for `mcq` | ChatGPT, independently re-solved before finalizing | — | Never guessed. |
| `answerType` | optional, defaults to `mcq` | ChatGPT | — | Only use `multi-select`/`numerical` when the official pattern actually uses that format. |
| `correctValue`, `correctIndices`, `partialMarking`, `maxDecimalPlaces` | see §7 | ChatGPT | — | — |
| `marks`, `negativeMarking` | optional per-question overrides (e.g. IBPS SO's fractional English marks) | ChatGPT, when the official pattern has non-uniform per-question marks | — | Never invent a fractional scheme not confirmed by the source. |
| `source` | yes | ChatGPT | — | See §9. `url` must start with `https://`. |

## 7. Supported answer types

| `answerType` | `options` | `correctIndex` | `correctIndices` | `correctValue` | `partialMarking` | `maxDecimalPlaces` |
|---|---|---|---|---|---|---|
| `mcq` (default) | exactly 4, distinct | 0-3 | unset | unset | unset | unset |
| `multi-select` | exactly 4, distinct | `-1` | 1+ distinct indices 0-3 | unset | optional, only when official rules require partial credit | unset |
| `numerical` | `[]` (empty array) | `-1` | unset | string matching `/^-?\d+$/` or `/^-?\d+(?:\.\d{1,2})?$/` if `maxDecimalPlaces` is set | unset | set when the official pattern allows decimal answers |

These are fully implemented in `TestAttemptClient.tsx` (input UI, scoring, persistence) — not aspirational. Use whichever type the official pattern actually specifies; do not default everything to `mcq` if the source shows JEE Advanced-style multi-select or JEE Main-style numerical-value questions.

## 8. IDs and slug conventions

- **Exam slug** (`ExamConfig.slug` / `ExamSlug` union member): kebab-case, short, e.g. `ssc-je`, `bitsat`, `jee-advanced`.
- **Stage id** (`TestStage.id`): kebab-case, e.g. `paper-1`, `prelims`, `tier-1`.
- **Test id** (`TestConfig.id`): `{stage-id}-{kind-descriptor}-{n}`, e.g. `paper-1-full-mock-1`, `paper-1-general-awareness-sectional-1`, `paper-1-quick-15min`. Combined with the exam slug it forms the route: `/{country}/{exam-slug}/test/{test-id}`.
- **Question bank filename**: `{exam-slug}-{stage}-{section-kebab}-{bank-number}.ts`, e.g. `bitsat-2026-mathematics-physics-1.ts`.
- **Question id**: project convention is `{exam-slug}-{section-abbreviation}-{3-digit-number}`, e.g. `bitsat-2026-mathematics-001`, `ssc-je-ga-016`. ChatGPT should propose stable, unique ids following this pattern; the coding agent verifies uniqueness against the whole repository (not just the new bank) at integration time — this is the single most common integration-time failure, since abbreviations get reused across exam families.

## 9. `QuestionSource`

```ts
interface QuestionSource {
  kind: 'original' | 'official-paper';
  reference: string;
  url: string;       // must start with https://
  checkedOn: string;  // YYYY-MM-DD
}
```

- `kind: 'original'` — the default for all newly written questions. Written to match the official syllabus/pattern, not copied.
- `kind: 'official-paper'` — reserved for content genuinely traceable to an officially released paper, and must not be used without explicit project approval (per `QUESTION_BANK_HANDOFF.md` rule 6).
- `reference` should name the specific notification/syllabus document, not just "official website."
- `url` must be the exam body's own domain where possible; `https://` is enforced by `scripts/audit-question-banks.mjs`.
- `checkedOn` is the date that source was actually verified, not the date the question was written if those differ.

**Never invent:** a source URL, publication date, or official claim that wasn't actually checked.

## 10. `CatalogExam` (the catalog-listing entry in `src/lib/exam-catalog.ts`, separate from `ExamConfig`)

```ts
interface CatalogExam {
  name: string;
  scope: 'National' | 'State' | 'Institute' | 'International';
  liveSlug?: ExamSlug;   // only set once the exam has a real ExamConfig entry
}
```

Every catalog entry exists whether or not it's live (there are ~180 catalog entries, ~35 live as of the last status update). `liveSlug` is what flips an entry from "planned" to "live" — the coding agent sets this as the final step of integration, never before the `ExamConfig` entry actually exists and passes QA.

## 11. Repository-only fields (coding agent sets these; ChatGPT does not need to produce them)

- `ExamConfig.shortName` (derived from actual rendered title length)
- `TestConfig.status` transition from `demo` to `checked` (coding agent flips this only after the bank is integrated and passing QA)
- `CatalogExam.liveSlug` (set only after successful integration)
- Any `id` collision-resolution renaming forced by a repository-wide duplicate (report back to ChatGPT per the operating model's failure-handling rule rather than silently renaming and losing traceability — but if the fix is a mechanical rename with no content change, e.g. suffixing `-2`, the coding agent may do it and note it in the integration report)

## 12. Handoff-only fields (present in ChatGPT's package, stripped or not carried into the repository `Question` type)

- `verification` (per `QUESTION_BANK_HANDOFF.md`'s question-bank schema) — the independent-review evidence. Useful for the coding agent's own confidence but not part of the runtime `Question` type; drop it when converting to the `.ts` bank file.
- `schemaVersion`, `examSlug`, `section`, `bankNumber` at the wrapper level of `QUESTION_BANK_HANDOFF.md`'s "File 2" JSON — these are handoff-file metadata, not part of the `Question[]` array itself once imported.
- Any `researchNotes` in the exam brief — informs the coding agent's understanding but isn't stored as a repository field; fold anything load-bearing into `StagePattern.note` if it needs to stay visible on the site.

## 13. `ExamGuidePage` / `GuideBlock` (guide pages: syllabus, eligibility, selection-process, and eventually admit-card/answer-key/result/cutoff/salary/previous-year-papers, in `src/lib/exam-guides.ts`)

As of 2026-08-11 only `syllabus`, `eligibility`, and `selection-process` have this structured format, populated for six exams: `ssc-cgl` and `ibps-po` (the original reference examples, migrated verbatim from their prior hand-coded pages), plus `ssc-chsl`, `sbi-po`, `ibps-clerk`, and `rrb-group-d` (Phase 2 batch 1, ChatGPT-authored and independently source-verified except `rrb-group-d`, which the coding agent drafted directly from its own primary-source extraction of the CEN 09/2025 notice). `rrb-ntpc` remains queued, blocked on a readable copy of its CEN 07/2025 notice. The other six guide-page types still render their pre-existing SSC-CGL-only hardcoded JSX in each page.tsx and are not yet data-driven — extend `GuidePageType` and `EXAM_GUIDES` the same way when content for those is ready, don't invent a parallel mechanism.

```ts
type GuidePageType = 'syllabus' | 'eligibility' | 'selection-process';

interface ExamGuidePage {
  title: string;       // meta <title>, no brand suffix needed (pageMetadata() adds it if there's budget)
  description: string; // meta description
  heading: string;      // page H1
  blocks: GuideBlock[]; // page body, rendered top to bottom by src/components/GuideBlocks.tsx
}

type GuideBlock =
  | { type: 'callout'; heading?: string; text: string }                                        // highlighted "at a glance" box
  | { type: 'paragraph'; heading?: string; text: string; tone?: 'plain' | 'boxed' }             // plain section or bordered box
  | { type: 'statCards'; heading?: string; note?: string; cards: { label: string; value: string }[] }
  | { type: 'table'; heading?: string; note?: string; minWidth?: string; headers: string[]; rows: string[][] }
  | { type: 'keyValueGrid'; heading?: string; note?: string; items: { label: string; value: string }[] } // e.g. age-relaxation categories
  | { type: 'infoBlocks'; heading?: string; note?: string; items: { title: string; text: string }[] }    // e.g. per-post qualification rules
  | { type: 'numberedStages'; heading?: string; items: { title: string; text: string }[] }               // auto-numbered 01, 02, 03...
  | { type: 'topicSections'; sections: { section: string; pattern?: string; topics: string[] }[] }        // syllabus-specific: section name + optional pattern badge + bullet list
  | { type: 'sourceNote'; heading: string; text: string; sourceLabel: string; sourceUrl: string; tone?: 'plain' | 'boxed' }; // closing "verify against official source" block
```

Text fields support one inline markup pattern: `**bold**` (e.g. a date or key number), rendered via `src/components/GuideBlocks.tsx`'s `RichText`. No other markdown, no links inside guide-block text (unlike blog paragraphs, which support `[label](/path)` via a separate `BlogRichText` component).

| Field | Produced by | Never invent |
|---|---|---|
| `title`, `description`, `heading` | ChatGPT | — |
| `blocks` content (all facts, numbers, dates, category names) | ChatGPT, from the official notification | Every number here needs the same source discipline as `StagePattern`/`Question.source` — no guessed age limits, relaxation years, or stage descriptions. |
| Which `GuideBlock` type fits which content | ChatGPT proposes, coding agent may adjust the block-type choice at integration time if a better fit exists (this is a structural/presentation decision, not a factual one) | — |
| `EXAM_GUIDES[examSlug][pageType]` registration, sitemap inclusion, `noIndex` removal | Coding agent, only after the page passes review | Never flip a page from placeholder to live without the content actually being source-checked. |

**Repository-only**: nothing — this structure has no coding-agent-derived fields beyond registration.

**Handoff-only**: none currently defined; unlike the question-bank package, a guide-page content package doesn't need a `verification` sidecar field baked into the JSON — the independent Hard QA report travels alongside as a separate file per the standard handoff convention (§11).
