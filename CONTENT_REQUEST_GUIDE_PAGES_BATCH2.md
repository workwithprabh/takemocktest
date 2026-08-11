# Content request: Syllabus / Eligibility / Selection-Process guide pages, batch 2

**Requested:** 12 August 2026
**Requested by:** coding agent, on the site owner's prioritization decision
**Deliverable owner:** ChatGPT (content/research/QA per `TAKEMOCKTEST_DEVELOPMENT_OPERATING_MODEL.md`)
**Target schema:** `TAKEMOCKTEST_CONTENT_SCHEMA.md` §13 (`ExamGuidePage` / `GuideBlock`, in `src/lib/exam-guides.ts`)

## Status

Batch 1 (SSC CHSL, SBI PO, IBPS Clerk, RRB Group D) is live. RRB NTPC from that batch is still blocked — its notice is a scanned PDF with no text layer, unreadable by any tool available so far. Hold RRB NTPC; it's not part of this request.

This is a fresh batch of 5 more live exams, picked by known real-world demand the same way batch 1 was (Search Console/Analytics data is still too sparse on this site to prioritize by).

## Scope: 5 exams x 3 page types = 15 pages

| Exam | Slug | Official source already on file |
|---|---|---|
| SSC MTS & Havaldar | `ssc-mts` | `https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/writeup_mts_03082026.pdf` |
| SSC GD Constable | `ssc-gd-constable` | `https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/notice_01122025.pdf` |
| SBI Clerk | `sbi-clerk` | `https://sbi.bank.in/documents/77530/52947104/JA+2025+-Detailed+Advt.pdf` |
| IBPS RRB Office Assistant | `ibps-rrb-office-assistant` | `https://www.ibps.in/wp-content/uploads/CRP-RRBs-XIV_Final_AD-27.09.25.pdf` |
| RRB JE | `rrb-je` | `https://web.archive.org/web/2025/https://www.rrbcdg.gov.in/uploads/2025/05-JE/052025JE-CEN.pdf` (already an archive link from a prior batch — re-verify it resolves to a readable snapshot before citing) |

These are the same source URLs already cited for each exam's pattern data in `src/lib/exams.ts` — reuse them if they still carry syllabus/eligibility/selection-process detail, but verify against the live notice before citing (notices get superseded; a past `checkedOn` date doesn't guarantee today's content matches). If any of these five turns out to be unreachable or unreadable the way RRB NTPC was, run the same research-gate process as batch 1: report exactly which exam and why, propose what's needed to unblock it, and proceed with the rest rather than stalling the whole batch.

For each exam, produce three `ExamGuidePage` objects:

1. **Syllabus** — section-wise topic breakdown. Use `topicSections` as the primary block type, one entry per test section already defined for that exam in `exams.ts` (check the `sections` array in each stage's pattern).
2. **Eligibility** — nationality, age limits + relaxation by category, educational qualification, number of attempts if capped.
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

Text fields support `**bold**` inline emphasis only — no other markdown, no links. Every `sourceNote` block should include `tone: 'plain'` explicitly (the field is optional in the schema, but batch 1's Writer draft omitted it inconsistently and it had to be patched in during integration — just always include it).

Close every page with a `sourceNote` block pointing at the official notification.

## New rule for this batch: check every table sums correctly before marking APPROVED

Batch 1 shipped one factual error that Hard QA caught, worth naming so it doesn't repeat: a Main Examination pattern table listed one section's duration as 35 minutes when the source PDF actually gave it as 20 minutes, because the source PDF's table layout was hard to parse cleanly and the individual rows were transcribed without checking that they summed to the stated total (20+35+35+35=125 was correct; 35+35+35+35=140 was not, against a stated 125-minute total). For every table or `statCards` block in this batch that has a "Total" row or a stated total figure: add up the individual rows first and confirm they match the total before including the numbers. If they don't match, that's a sign of a misread source table — go back to the primary source and re-check, don't average or guess.

## Rules (carried from the standing operating model, not new)

- Every fact, number, date, and category name needs a real official source. No guessed age limits, relaxation years, or stage descriptions.
- Follow `SEO_PLAYBOOK.md`'s writing-voice rules and the humanizer guidance already applied sitewide (no em dashes, no AI-vocabulary tells, no filler).
- Use the fixed handoff naming convention from the operating model §11: `{exam-slug}-guide-pages-v1-APPROVED.json` per exam, or one combined file if that's easier to review — integration will split it either way.
- Independent Hard QA review before marking anything APPROVED, per the standing process. If a fact needed correction after the first draft, use the same "research gate" / correction-log format batch 1's Hard QA report used — it worked well and made integration fast.
- Deliver by direct file upload to the coding-agent session (or via `content-inbox/` if that's already set up on your end).

## Not in scope for this batch

- RRB NTPC (batch 1, still blocked — separate follow-up when a readable source turns up).
- The other six guide-page types (admit-card, answer-key, result, cutoff, salary, previous-year-papers) — still SSC-CGL-only hardcoded, not part of this request.
- Any exam not listed in the scope table above.
