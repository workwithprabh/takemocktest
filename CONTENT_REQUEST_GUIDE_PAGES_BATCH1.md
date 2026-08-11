# Content request: Syllabus / Eligibility / Selection-Process guide pages, batch 1

**Requested:** 11 August 2026
**Updated:** 11 August 2026, after ChatGPT's research-gate response
**Requested by:** coding agent, on the site owner's prioritization decision
**Deliverable owner:** ChatGPT (content/research/QA per `TAKEMOCKTEST_DEVELOPMENT_OPERATING_MODEL.md`)
**Target schema:** `TAKEMOCKTEST_CONTENT_SCHEMA.md` §13 (`ExamGuidePage` / `GuideBlock`, in `src/lib/exam-guides.ts`)

## Status update (read this first)

ChatGPT ran a research gate on the original v1 brief and correctly refused to draft 2 of 5 exams without a verifiable source (see `takemocktest-guide-pages-batch1-research-gate-v1.md` for its full reasoning). That gate was right to block. Since then:

- **IBPS Clerk is now unblocked.** The coding agent fetched the CSA-XVI PDF directly (a text-extraction tool ChatGPT's browser doesn't have) and confirmed it's real, current, and readable. Verified facts are inlined below in "IBPS Clerk verified facts" — draft straight from those, no need to re-fetch the PDF.
- **RRB NTPC stays blocked.** The coding agent independently confirmed the source problem is real: `rrbchennai.gov.in` refused the connection outright. Not a tooling gap on ChatGPT's side.
- **RRB Group D stays blocked.** The coding agent confirmed the cited PDF URL now 404s; the RRB Chandigarh site has migrated to `rrb.indianrailways.gov.in/chandigarh`, which serves documents through a JS-driven portal that neither ChatGPT's browser nor the coding agent's fetch tools could get a direct PDF link out of.

**Proceed now with SSC CHSL + SBI PO + IBPS Clerk (9 pages, 3 exams).** Hold RRB NTPC and RRB Group D until the site owner supplies the detailed CEN PDFs directly (downloaded by hand from a real browser, since automated fetching keeps failing on both).

## Scope: 5 exams x 3 page types = 15 pages

| Exam | Slug | Status | Official source |
|---|---|---|---|
| SSC CHSL | `ssc-chsl` | Ready (per ChatGPT's gate) | `https://ssc.gov.in/for-candidates/cgl-exam/s40d16nackd16h0` — Combined Higher Secondary (10+2) Level Examination, 2025 cycle |
| SBI PO | `sbi-po` | Ready (per ChatGPT's gate) | `https://sbi.bank.in/web/careers/current-openings` — CRPD/PO/2026-27/09 |
| IBPS Clerk | `ibps-clerk` | **Ready (unblocked below)** | `https://www.ibps.in/wp-content/uploads/Notification_CRP_CSA_XVI-Final.pdf` — CRP CSA-XVI, vacancies of 2027-28 |
| RRB NTPC | `rrb-ntpc` | **Blocked — server unreachable** | `https://www.rrbchennai.gov.in/downloads/CEN-07-2025-NTPC-UnderGraduate-English.pdf` |
| RRB Group D | `rrb-group-d` | **Blocked — URL stale, site migrated** | old: `https://www.rrbcdg.gov.in/uploads/2025/09-LVL1/092025-CEN.pdf`; current site: `https://rrb.indianrailways.gov.in/chandigarh` (CEN 09/2025 confirmed still active there) |

For SSC CHSL and SBI PO, use ChatGPT's own draft-ready factual matrix from the research-gate document (it already has the verified age/eligibility/pattern/selection facts) — no need to re-research those two.

## IBPS Clerk verified facts (coding agent, 11 August 2026, from the notification PDF directly)

- **Notification:** CRP CSA-XVI, vacancies of 2027-28. Online registration 01.08.2026 to 21.08.2026.
- **Age:** 20 to 28 years as on 01.08.2026. Date-of-birth range 02.08.1998 to 01.08.2006, inclusive.
- **Age relaxation:** SC/ST 5 years. OBC (Non-Creamy Layer) 3 years. Persons with Benchmark Disabilities 10 years. Ex-servicemen/Disabled Ex-servicemen: actual period of service rendered + 3 years (8 years for Disabled Ex-servicemen belonging to SC/ST), subject to a maximum age of 50 years. Widows, divorced women, and women legally separated who have not remarried: age concession up to 35 years (General/EWS), 38 years (OBC), 40 years (SC/ST). Relaxation for SC/ST/OBC(NCL) is cumulative with only one of the remaining categories.
- **Nationality:** Indian citizen, or subject of Nepal/Bhutan, or Tibetan refugee (arrived before 1 January 1962), or person of Indian origin migrated from specified countries with an eligibility certificate.
- **Educational qualification:** a degree (graduation) in any discipline from a recognised university, or an equivalent qualification recognised by the Central Government, held as of the date of registration; result declared on or before 21.08.2026. Local-language proficiency in the applied State/UT required. Basic computer literacy required (certificate/diploma/degree in computer operations, or having studied Computer/IT as a subject).
- **Application fee:** Rs. 175 (SC/ST/PwBD/ESM/DESM), Rs. 850 (all others).
- **Preliminary Examination** (objective, qualifying only): English Language 30 questions/30 marks/20 min; Numerical Ability 35/35/20 min; Reasoning Ability 35/35/20 min. Total 100 questions, 100 marks, 60 minutes (separately timed sections).
- **Main Examination** (objective, marks count for final merit): General/Financial Awareness 40 questions/50 marks/35 min; General English 40/40/35 min; Reasoning Ability 40/60/35 min; Quantitative Aptitude 40/50/35 min. Total 160 questions, 200 marks, 125 minutes (separately timed sections). Note the source PDF's own table has a labeling quirk (row order vs. the "medium of examination" column) — cross-check the marks-per-section figures against the source before publishing if anything looks inconsistent.
- **Negative marking:** 0.25 mark deducted per wrong answer, both Preliminary and Main. No penalty for unattempted questions.
- **Selection process, in order:** (1) Online Preliminary Examination — qualifying, cut-offs decided by IBPS, does not count toward final merit. (2) Online Main Examination — scored, only these marks are used for final merit listing. (3) Local Language Proficiency Test for the State/UT applied to. (4) Provisional allotment to a Participating Bank based on merit-cum-preference, subject to the Government's reservation policy.
- **Source:** `https://www.ibps.in/wp-content/uploads/Notification_CRP_CSA_XVI-Final.pdf`, verified by direct text extraction, 11 August 2026.

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
- Use the fixed handoff naming convention from the operating model §11: `{exam-slug}-guide-pages-v1-APPROVED.json` (or `.md`, whatever's easiest to review) per exam, or one combined file for the three ready exams if that's simpler to review — integration will split it either way.
- Independent Hard QA review before marking APPROVED, per the standing process.
- Deliver by direct file upload to the coding-agent session (or via `content-inbox/` if that's already set up on your end).

## RRB NTPC and RRB Group D: hold, do not draft yet

Do not draft these two until the detailed CEN PDFs are supplied. The site owner will download them by hand from a real browser (both government sites have been uncooperative with automated fetching from two different tool stacks) and pass them to the coding agent, who will extract and verify the facts the same way IBPS Clerk was unblocked above, then issue a batch-2 update to this brief.

## Not in scope for this batch

The other six guide-page types (admit-card, answer-key, result, cutoff, salary, previous-year-papers) are still SSC-CGL-only hardcoded and not part of this request — leave those alone for now.
