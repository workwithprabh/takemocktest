# Content request: Syllabus / Eligibility / Selection-Process guide pages, batch 1

**Requested:** 11 August 2026
**Requested by:** coding agent, on the site owner's prioritization decision
**Deliverable owner:** ChatGPT (content/research/QA per `TAKEMOCKTEST_DEVELOPMENT_OPERATING_MODEL.md`)
**Target schema:** `TAKEMOCKTEST_CONTENT_SCHEMA.md` §13 (`ExamGuidePage` / `GuideBlock`, in `src/lib/exam-guides.ts`)

## Why these five, why now

Phase 2 of the on-page SEO push needs Syllabus, Eligibility, and Selection-Process pages for the live exams that currently fall back to noindex placeholders. SSC CGL and IBPS PO already have this content (they're the reference examples in the schema doc). Google Search Console and Analytics were checked to prioritize the next batch by real search demand, but the site is too new for that data to be usable yet (34 total search impressions over 3 months, single-digit pageviews per exam over 28 days — noise, not signal). Falling back to known real-world exam popularity instead.

## Scope: 5 exams x 3 page types = 15 pages

| Exam | Slug | Official source already on file |
|---|---|---|
| SSC CHSL | `ssc-chsl` | `https://ssc.gov.in/for-candidates/cgl-exam/s40d16nackd16h0` |
| IBPS Clerk | `ibps-clerk` | `https://www.ibps.in/wp-content/uploads/Notification_CRP_CSA_XVI-Final.pdf` |
| RRB NTPC | `rrb-ntpc` | `https://www.rrbchennai.gov.in/downloads/CEN-07-2025-NTPC-UnderGraduate-English.pdf` |
| SBI PO | `sbi-po` | `https://sbi.bank.in/web/careers/current-openings` |
| RRB Group D | `rrb-group-d` | `https://www.rrbcdg.gov.in/uploads/2025/09-LVL1/092025-CEN.pdf` |

These source URLs are what's currently cited for each exam's pattern data in `src/lib/exams.ts` — reuse them if they still carry the syllabus/eligibility/selection-process sections, but verify against the live official notification before citing (notices get superseded; don't assume last check-date accuracy carries over to new claims).

For each exam, produce three `ExamGuidePage` objects:

1. **Syllabus** — section-wise topic breakdown. Use `topicSections` as the primary block type (matches the SSC CGL/IBPS PO reference implementations), one entry per test section already defined for that exam in `exams.ts` (check the `sections` array in each stage's pattern).
2. **Eligibility** — nationality, age limits + relaxation by category, educational qualification, number of attempts if capped. Use `keyValueGrid` for age-relaxation tables and `infoBlocks` or `paragraph` for qualification detail, following the SSC CGL/IBPS PO pattern.
3. **Selection-process** — ordered list of stages from prelims/tier through document verification and final result, each with a one- or two-line description. Use `numberedStages`.

## Schema to target

```ts
interface ExamGuidePage {
  title: string;       // meta <title>, no brand suffix needed
  description: string; // meta description
  heading: string;      // page H1
  blocks: GuideBlock[]; // page body, rendered top to bottom
}

type GuideBlock =
  | { type: 'callout'; heading?: string; text: string }
  | { type: 'paragraph'; heading?: string; text: string; tone?: 'plain' | 'boxed' }
  | { type: 'statCards'; heading?: string; note?: string; cards: { label: string; value: string }[] }
  | { type: 'table'; heading?: string; note?: string; minWidth?: string; headers: string[]; rows: string[][] }
  | { type: 'keyValueGrid'; heading?: string; note?: string; items: { label: string; value: string }[] }
  | { type: 'infoBlocks'; heading?: string; note?: string; items: { title: string; text: string }[] }
  | { type: 'numberedStages'; heading?: string; items: { title: string; text: string }[] }
  | { type: 'topicSections'; sections: { section: string; pattern?: string; topics: string[] }[] }
  | { type: 'sourceNote'; heading: string; text: string; sourceLabel: string; sourceUrl: string; tone?: 'plain' | 'boxed' };
```

Text fields support `**bold**` inline emphasis only — no other markdown, no links.

Close every page with a `sourceNote` block pointing at the official notification, same pattern as the SSC CGL/IBPS PO pages already live.

## Rules (carried from the standing operating model, not new)

- Every fact, number, date, and category name needs a real official source. No guessed age limits, relaxation years, or stage descriptions — same discipline as question-bank sourcing.
- Follow `SEO_PLAYBOOK.md`'s writing-voice rules and the humanizer guidance already applied sitewide (no em dashes, no AI-vocabulary tells, no filler).
- Use the fixed handoff naming convention from the operating model §11: `{exam-slug}-guide-pages-v1-APPROVED.json` (or `.md`, whatever's easiest to review) per exam, or one combined file for all five if that's simpler to review — integration will split it either way.
- Independent Hard QA review before marking APPROVED, per the standing process.
- Deliver by direct file upload to the coding-agent session (or via `content-inbox/` if that's already set up on your end).

## Not in scope for this batch

The other six guide-page types (admit-card, answer-key, result, cutoff, salary, previous-year-papers) are still SSC-CGL-only hardcoded and not part of this request — leave those alone for now.
