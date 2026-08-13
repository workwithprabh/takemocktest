# Content request: Syllabus / Eligibility / Selection-Process guide pages, batch 3

**Requested:** 12 August 2026
**Requested by:** coding agent, on the site owner's prioritization decision
**Deliverable owner:** ChatGPT (content/research/QA per `TAKEMOCKTEST_DEVELOPMENT_OPERATING_MODEL.md`)
**Target schema:** `TAKEMOCKTEST_CONTENT_SCHEMA.md` §13 (`ExamGuidePage` / `GuideBlock`, in `src/lib/exam-guides.ts`)

## Status

9 exams now have live guide pages: `ssc-cgl`, `ibps-po` (original reference implementations), `ssc-chsl`, `sbi-po`, `ibps-clerk`, `rrb-group-d` (batch 1), and `ssc-mts`, `ssc-gd-constable`, `sbi-clerk` (batch 2 ready3). `rrb-ntpc` remains blocked (scanned PDF, no OCR). `ibps-rrb-office-assistant` and `rrb-je` remain blocked from batch 2's research gate (their detailed notice PDFs were not readable by the available source reader).

This is a fresh batch of 5 more live exams that don't have guide pages yet, picked the same way as batches 1 and 2 (known real-world demand, not Search Console data, which is still too sparse on this new site to prioritize by).

## Scope: 5 exams x 3 page types = 15 pages

| Exam | Slug | Official source already on file |
|---|---|---|
| RBI Assistant | `rbi-assistant` | `https://website.rbi.org.in/web/rbi/-/recruitment-for-the-post-of-assistant-panel-year-2025-in-reserve-bank-of-india` |
| RBI Grade B | `rbi-grade-b` | `https://opportunities.rbi.org.in/Scripts/bs_viewcontent.aspx?Id=4713` |
| SSC CPO | `ssc-cpo` | `https://ssc.gov.in/api/attachment/uploads/masterData/Results/write-up%20CPO%202025.pdf` (this is a result write-up citation already on file for the pattern data; verify it actually carries eligibility and selection-process detail too, or find the fuller recruitment notice if it doesn't) |
| IBPS SO | `ibps-so` | `https://www.ibps.in/wp-content/uploads/Detailed-Advt.-CRP-SPL-XV_Final1.pdf` |
| NABARD Grade A | `nabard-grade-a` | `https://www.nabard.org/auth/writereaddata/CareerNotices/0512255230Final Advertisement Grade A (RDBS, Legal, P&SS) 2025 (1).pdf` |

These are the same source URLs already cited for each exam's pattern data in `src/lib/exams.ts` — reuse them if they still carry syllabus/eligibility/selection-process detail, but verify against the live notice before citing (notices get superseded; a past `checkedOn` date doesn't guarantee today's content matches). If any of these five turns out to be unreachable or unreadable the way RRB NTPC was, run the same research-gate process as batches 1 and 2: report exactly which exam and why, propose what's needed to unblock it, and proceed with the rest rather than stalling the whole batch.

**One exam deliberately left out of this batch:** IBPS RRB Officer Scale I (`ibps-rrb-officer-scale-1`) shares its official notice PDF (`CRP-RRBs-XIV_Final_AD-27.09.25.pdf`) with IBPS RRB Office Assistant, which batch 2's research gate already found unreadable by the available source reader. Don't spend a research cycle rediscovering that same blocker; it's excluded here and can be revisited alongside `ibps-rrb-office-assistant` once a readable copy of that PDF turns up.

For each exam, produce three `ExamGuidePage` objects:

1. **Syllabus** — section-wise topic breakdown. Use `topicSections` as the primary block type, one entry per test section already defined for that exam in `exams.ts` (check the `sections` array in each stage's pattern). Confirmed current section names to match exactly:
   - RBI Assistant: English Language, Numerical Ability, Reasoning Ability
   - RBI Grade B: General Awareness, English Language, Quantitative Aptitude, Reasoning
   - SSC CPO: General Intelligence and Reasoning, General Knowledge and General Awareness, Quantitative Aptitude, English Comprehension
   - IBPS SO: English Language, Reasoning, Quantitative Aptitude
   - NABARD Grade A: Reasoning, English Language, Computer Knowledge, Quantitative Aptitude, Decision Making, General Awareness, Economic and Social Issues, Agriculture and Rural Development
2. **Eligibility** — nationality, age limits + relaxation by category, educational qualification, number of attempts if capped.
3. **Selection-process** — ordered list of stages from prelims/phase through document verification and final result, each with a one- or two-line description. Use `numberedStages`.

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

Text fields support `**bold**` inline emphasis only, no other markdown, no links. Every `sourceNote` block must include `tone: 'plain'` explicitly.

`minWidth` on a `table` block is now applied via inline style for any value (previously it only worked for the exact string `'34rem'`, a bug found and fixed during batch 2 integration) — use whatever width the table actually needs, no need to match a specific preset value.

Close every page with a `sourceNote` block pointing at the official notification.

## Table / total integrity rule (carried from batches 1 and 2, still the standing rule)

For every table or `statCards` block that has a stated total: add up the individual rows first and confirm they match the total before including the numbers. Batch 1 shipped a real error from an unchecked table (a Main Examination duration column that didn't sum to the stated total); don't repeat it. If the numbers don't reconcile, that's a sign of a misread source, go back to the primary source rather than average or guess.

## Rules (carried from the standing operating model, not new)

- Every fact, number, date, and category name needs a real official source. No guessed age limits, relaxation years, or stage descriptions.
- Follow `SEO_PLAYBOOK.md`'s writing-voice rules and the humanizer guidance already applied sitewide (no em dashes, no AI-vocabulary tells, no filler).
- Use the fixed handoff naming convention from the operating model §11: `{exam-slug}-guide-pages-v1-APPROVED.json` per exam, or one combined file if that's easier to review, integration will split it either way. If any Writer draft needs a Hard QA correction, bump to v2 for that exam per the standing versioning rule (as happened for all three exams in batch 2).
- Independent Hard QA review before marking anything APPROVED, per the standing process. Use the research-gate / correction-log format from batches 1 and 2 if any fact needs correcting after the first draft.
- Deliver by direct file upload to the coding-agent session.

## Not in scope for this batch

- `ibps-rrb-officer-scale-1` (see the note above on the shared unreadable-PDF risk).
- `ibps-rrb-office-assistant`, `rrb-je`, `rrb-ntpc` (all still blocked from earlier batches, separate follow-up when readable sources turn up).
- The other six guide-page types (admit-card, answer-key, result, cutoff, salary, previous-year-papers) — salary and previous-year-papers now have their own separate content request (`CONTENT_REQUEST_GUIDE_PAGES_SALARY_PYP.md`); the remaining four stay SSC-CGL-only by design (see that file or `exam-guides.ts`'s header comment for the reasoning).
- Any exam not listed in the scope table above.
