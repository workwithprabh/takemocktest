# Content request: Syllabus / Eligibility / Selection-Process guide pages, batch 1

**Requested:** 11 August 2026
**Updated:** 11 August 2026, after ChatGPT's research-gate response
**Requested by:** coding agent, on the site owner's prioritization decision
**Deliverable owner:** ChatGPT (content/research/QA per `TAKEMOCKTEST_DEVELOPMENT_OPERATING_MODEL.md`)
**Target schema:** `TAKEMOCKTEST_CONTENT_SCHEMA.md` §13 (`ExamGuidePage` / `GuideBlock`, in `src/lib/exam-guides.ts`)

## Status update (read this first)

ChatGPT ran a research gate on the original v1 brief and correctly refused to draft 2 of 5 exams without a verifiable source (see `takemocktest-guide-pages-batch1-research-gate-v1.md` for its full reasoning). That gate was right to block. Since then:

- **IBPS Clerk is unblocked.** The coding agent fetched the CSA-XVI PDF directly (a text-extraction tool ChatGPT's browser doesn't have) and confirmed it's real, current, and readable. Verified facts are inlined below in "IBPS Clerk verified facts" — draft straight from those, no need to re-fetch the PDF.
- **RRB Group D is unblocked.** The live URL 404s (site migrated), but the coding agent found and pulled the exact same CEN 09/2025 notice from the Wayback Machine archive and extracted full text from it. Verified facts are inlined below in "RRB Group D verified facts".
- **RRB NTPC is conditionally unblocked.** `rrbchennai.gov.in` itself is down (confirmed by direct network test: TCP connection times out at the IP level, not a DNS or tooling issue), but an archived copy of the exact CEN 07/2025 Undergraduate notice exists at the Wayback Machine URL below. It is a scanned/image-only PDF with no text layer, so the coding agent's text-extraction tool can't read it, but ChatGPT's browser may be able to read it visually (OCR). Try that archived URL directly; if it doesn't work, this one stays on hold.

**All 5 exams now have a usable source. Proceed with the Writer pass and Hard QA for all 15 pages** using the verified facts inlined below for IBPS Clerk and RRB Group D, ChatGPT's own already-verified facts for SSC CHSL and SBI PO, and a fresh read of the RRB NTPC archived link for that one.

## Scope: 5 exams x 3 page types = 15 pages

| Exam | Slug | Status | Official source |
|---|---|---|---|
| SSC CHSL | `ssc-chsl` | Ready (per ChatGPT's gate) | `https://ssc.gov.in/for-candidates/cgl-exam/s40d16nackd16h0` — Combined Higher Secondary (10+2) Level Examination, 2025 cycle |
| SBI PO | `sbi-po` | Ready (per ChatGPT's gate) | `https://sbi.bank.in/web/careers/current-openings` — CRPD/PO/2026-27/09 |
| IBPS Clerk | `ibps-clerk` | **Ready (unblocked below)** | `https://www.ibps.in/wp-content/uploads/Notification_CRP_CSA_XVI-Final.pdf` — CRP CSA-XVI, vacancies of 2027-28 |
| RRB Group D | `rrb-group-d` | **Ready (unblocked below)** | live URL 404s; archived copy: `http://web.archive.org/web/20260411020321/https://www.rrbcdg.gov.in/uploads/2025/09-LVL1/092025-CEN.pdf` — CEN 09/2025 |
| RRB NTPC | `rrb-ntpc` | **Try the archive; hold if it fails** | live site down (server unreachable); archived copy (scanned, needs OCR/vision to read): `http://web.archive.org/web/20260503052523/https://www.rrbchennai.gov.in/downloads/CEN-07-2025-NTPC-UnderGraduate-English.pdf` — CEN 07/2025 Undergraduate |

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

## RRB Group D verified facts (coding agent, 11 August 2026, from the archived CEN 09/2025 PDF directly)

- **Notification:** Centralised Employment Notification (CEN) No. 09/2025, Level-1 posts.
- **Age:** 18 to 33 years as on 01.01.2026 (this notice bakes category relaxation directly into the date-of-birth window per community, rather than a flat relaxation added afterward). Date-of-birth window: not born earlier than 02.01.1993 (UR/EWS), 02.01.1990 (OBC Non-Creamy Layer), or 02.01.1988 (SC/ST); not born after 01.01.2008, all communities.
- **Additional age relaxation on top of the above** (non-cumulative, candidate gets the single largest relaxation they qualify for): Ex-servicemen with at least 6 months service, 3/6/8/10 years depending on category (service period deducted from age first); PwBD OBC-NCL 13 years, PwBD SC/ST 15 years; serving Group C / erstwhile Group D railway staff with 3+ years service, max age 40 (UR/EWS)/43 (OBC-NCL)/45 (SC/ST); quasi-administrative railway office staff, relaxation up to length of service or 5 years, whichever is less; widowed/divorced/judicially-separated women (not remarried), max age 35 (UR)/38 (OBC-NCL)/40 (SC/ST); Course-Completed-Act Apprentices and those under the Apprentices Act, relaxation tied to training period completed, various caps by category. SC/ST/OBC-NCL candidates applying against UR vacancies get no age relaxation; PwBD candidates applying against UR vacancies get PwBD(UR) relaxation only.
- **Educational qualification:** post-specific, per the notice's Annexure-A; qualification must be held as of the application closing date, 02.03.2026. Candidates awaiting final-exam results should not apply. Diploma/Degree in Engineering is not accepted in lieu of Course Completed Act Apprenticeship/ITI for Level-1 posts unless the post specifically allows it.
- **CBT exam pattern:** General Science 25 questions, Mathematics 25 questions, General Intelligence and Reasoning 30 questions, General Awareness and Current Affairs 20 questions. 100 questions total, 1 mark each, 90 minutes (120 minutes for scribe-eligible candidates). Section-wise distribution is indicative, not fixed. Negative marking: 1/3 mark deducted per wrong answer.
- **Minimum qualifying percentage for shortlisting:** UR 40%, EWS 40%, OBC (Non-Creamy Layer) 30%, SC 30%, ST 30%. Relaxable by 2 marks for PwBD candidates if there's a shortage against PwBD-reserved vacancies. If a second-stage CBT is held, the Railway Administration may treat the first CBT as qualifying-only for shortlisting purposes.
- **CBT syllabus, illustrative not exhaustive:** Mathematics covers number system, BODMAS, decimals, fractions, LCM/HCF, ratio and proportion, percentages, mensuration, time and work, time and distance, simple/compound interest, profit and loss, algebra, geometry, trigonometry, elementary statistics, square root, age calculations, calendar and clock, pipes and cisterns. General Intelligence and Reasoning covers analogies, alphabetical/number series, coding-decoding, mathematical operations, relationships, syllogism, jumbling, Venn diagrams, data interpretation and sufficiency, conclusions and decision making, similarities and differences, analytical reasoning, classification, directions, statement-arguments-assumptions. General Science covers Physics, Chemistry, and Life Sciences at 10th-standard (CBSE) level. General Awareness covers current affairs in science and technology, sports, culture, personalities, economics, politics, and other subjects of importance.
- **Selection process, in order:** (1) Computer Based Test (CBT), possibly in two stages, first stage may be treated as qualifying only if a second stage is held. (2) Physical Efficiency Test (PET) — qualifying only, candidates called at roughly 3x the community-wise vacancy count based on CBT merit. (3) Document Verification (DV). (4) Medical Examination (ME).
- **Source:** archived copy of `https://www.rrbcdg.gov.in/uploads/2025/09-LVL1/092025-CEN.pdf` at `http://web.archive.org/web/20260411020321/https://www.rrbcdg.gov.in/uploads/2025/09-LVL1/092025-CEN.pdf`, verified by direct text extraction, 11 August 2026. This is the same CEN cited in `src/lib/exams.ts`'s existing pattern data for this exam (checked there 4 August 2026), so it's confirmed current, not a stale notice.

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
- Use the fixed handoff naming convention from the operating model §11: `{exam-slug}-guide-pages-v1-APPROVED.json` (or `.md`, whatever's easiest to review) per exam, or one combined file for however many exams clear review together if that's simpler — integration will split it either way.
- Independent Hard QA review before marking APPROVED, per the standing process.
- Deliver by direct file upload to the coding-agent session (or via `content-inbox/` if that's already set up on your end).

## If RRB NTPC's archived PDF still can't be read

If ChatGPT's browser also can't extract the archived RRB NTPC notice (it's a scanned image PDF), hold just that one exam and proceed with the other 4 (12 pages). The site owner will try downloading the notice by hand from a real browser once `rrbchennai.gov.in` comes back up, and pass it to the coding agent for extraction and verification the same way the other two were unblocked, then issue a batch-2 update to this brief.

## Not in scope for this batch

The other six guide-page types (admit-card, answer-key, result, cutoff, salary, previous-year-papers) are still SSC-CGL-only hardcoded and not part of this request — leave those alone for now.
