# Content request: guide pages, batch 4

**Requested:** 15 September 2026
**Requested by:** coding agent, from a source-material audit of all 183 catalogue exams
**Deliverable owner:** ChatGPT (content/research/QA per `TAKEMOCKTEST_DEVELOPMENT_OPERATING_MODEL.md`)
**Target schema:** `src/lib/exam-guides.ts` (`ExamGuidePage` / `GuideBlock`, including `recordCards`)

## Why this document exists

Guide pages are the highest-value unbuilt surface on the site. Every one of the five
types is a commercial-intent query ("ibps po salary", "ssc cgl eligibility"), each page
is noindex until it has hand-written content, and 879 of the 915 slots are empty.

They are also the one content type the coding agent cannot produce alone. Outbound
egress to every exam body domain is blocked from the build environment, retested and
still failing on 15 September 2026 (`ssc.gov.in`, `ibps.in`, `upsc.gov.in` all return
connection code `000`). So the notices have to be read on the research side. This
document says which exams are worth that read, and why each one, in priority order.

**All five guide types now render FAQs automatically.** `src/lib/guide-faqs.ts` generates
them from the guide blocks themselves, so a delivered guide gets its FAQ block, its
FAQPage schema and its internal links with no extra content work. That was not true when
batches 1 to 3 were written. It raises the value of every page below and changes nothing
about what needs to be researched.

## First: 28 pages were already scoped and never delivered

Two requests dated 12 August 2026 are still outstanding. Before commissioning anything
new, these should be closed out or formally cancelled, because the research was already
scoped and the exams were already chosen.

| Request | Exams | Delivered | Outstanding |
|---|---|---|---|
| `CONTENT_REQUEST_GUIDE_PAGES_BATCH3.md` | 5 | `ssc-cpo` only | **12 pages** (4 exams x 3 types) |
| `CONTENT_REQUEST_GUIDE_PAGES_SALARY_PYP.md` | 8 | none | **16 pages** (8 exams x 2 types) |

Outstanding from batch 3: `rbi-assistant`, `rbi-grade-b`, `ibps-so`, `nabard-grade-a`.
Outstanding from salary/PYP: `ibps-po`, `ssc-chsl`, `sbi-po`, `ibps-clerk`,
`rrb-group-d`, `ssc-mts`, `ssc-gd-constable`, `sbi-clerk`.

If either request was consciously dropped, say so and this document will be revised.
Nothing here assumes they were.

## How the exams below were chosen

Two signals, combined. Neither is search-volume data, which is still too sparse on this
site to prioritise by, and no keyword tool is connected.

**Demand proxy:** checked test count per exam, which tracks how much of the site already
serves that exam and therefore how much internal link equity a guide page inherits.

**Source grade:** what the cited primary source in `src/lib/exams.ts` actually is. This
is a grade of the citation, not of the document's contents, because the document cannot
be opened from here. The distinction matters and batch 3 already hit it once: SSC CPO's
cited source is a result write-up, which carries the exam pattern but says nothing about
eligibility or pay.

- **Grade A** (25 exams): the URL names itself a detailed advertisement, recruitment
  notification or CEN. That document class normally carries syllabus, eligibility,
  selection process and pay level together.
- **Grade B** (60 exams): a PDF whose kind cannot be told from its filename, or an
  information brochure. Brochures carry syllabus and eligibility but not pay.
- **Grade C** (95 exams): only a portal landing page, or a result write-up. The real
  notice has to be found before anything can be written.
- **Grade D** (1 exam): `rrb-je`, archived copy only.

**Salary is scoped to recruitment exams only.** An entrance-exam candidate is not being
paid, so BITSAT, VITEEE, JEE and the rest are four-type exams, not five. Their salary
routes should stay noindex permanently rather than waiting on content.

## Tranche 1 (highest confidence): salary + previous year papers, 8 exams, 16 pages

This is the outstanding salary/PYP request, unchanged, and it is first for a reason that
did not exist when it was written: **all 8 already have live syllabus, eligibility and
selection-process pages.** Somebody has already opened each of these notices and written
three pages from it. Readability is proven, not inferred. Every other tranche in this
document is a prediction; this one is a known quantity.

Use the source URLs in `CONTENT_REQUEST_GUIDE_PAGES_SALARY_PYP.md`, which are in several
cases better than what `exams.ts` cites (that file lists a proper detailed advertisement
for `sbi-po` and a proper recruitment notice for `ssc-mts`, where `exams.ts` has only a
careers landing page and a result write-up respectively).

Follow the SSC CGL reference shape, and the standing rule that matters most here: if a
notice does not state a pay level, say so and do not extrapolate a figure from a
comparable post at another organisation. A missing salary page costs a keyword. A wrong
one costs a reader money.

## Tranche 2: batch 3 leftovers, 4 exams

| Exam | Slug | Tests | Source grade | Note |
|---|---|---|---|---|
| IBPS SO | `ibps-so` | 26 | **A** (detailed advertisement, CRP SPL-XV) | best of the four |
| RBI Assistant | `rbi-assistant` | 18 | A | notice reachable from the RBI opportunities portal |
| NABARD Grade A | `nabard-grade-a` | 18 | **A** (final advertisement, Grade A 2025) | |
| RBI Grade B | `rbi-grade-b` | 10 | **C** (portal page only) | lowest demand and weakest source; drop it if the batch needs trimming |

Batch 3 asked for three types each. Since salary and previous year papers are now
data-driven, request **all five** for these, with salary conditional on the notice
stating a pay level.

## Tranche 3 (new exams): 5 exams, 25 pages

All grade A, all recruitment exams, none with any guide page today. Ordered by demand.

| Exam | Slug | Tests | Cited source |
|---|---|---|---|
| SSC Selection Post | `ssc-selection-post` | **36** | `Notice_of_RHQ_2026_phase_xiv.pdf` |
| RRB Technician | `rrb-technician` | 22 | `Detailed CEN 2-2025 Technician Categories` |
| SIDBI Grade A & B | `sidbi-grade-a-b` | 18 | `SIDBI_DETAILED_WEB_ADVT_2025.pdf` |
| NIACL AO | `niacl-ao` | 18 | `RECRUITMENT OF ADMINISTRATIVE OFFICERS 2025` |
| RRB ALP | `rrb-alp` | 18 | `Revised_CEN_01-2025_ALP.pdf` |

SSC Selection Post carries more checked tests than any other exam without a guide page,
and more than any exam in tranches 1 and 2 except SSC CGL itself. One caveat worth
writing into the page: Selection Post runs in numbered phases and the cited notice is
phase XIV, so the syllabus is durable but vacancy and post detail is phase-specific and
should be framed that way rather than as a standing fact.

## Needs a source hunt before it can be commissioned

High demand, but the cited source is a portal page or a result write-up, so the real
notice has to be located first. Worth a research pass on its own, ahead of drafting.

| Exam | Slug | Tests | What is on file | What is needed |
|---|---|---|---|---|
| SEBI Grade A | `sebi-grade-a` | **34** | numeric-named PDF in SEBI careerfiles | confirm it is the advertisement, not a result |
| SBI PO | `sbi-po` | 23 | careers landing page | the detailed advertisement (salary/PYP request has a candidate URL) |
| VITEEE | `viteee` | 20 | `viteee.vit.ac.in` root | the information brochure |
| SSC CHSL | `ssc-chsl` | 16 | SSC portal page | `Notice_of_adv_chsl_2025.pdf` per the salary/PYP request |
| SSC MTS | `ssc-mts` | 12 | result write-up | `Notice_of_adv_mts_2025.pdf` per the salary/PYP request |
| SSC CPO | `ssc-cpo` | 12 | result write-up | the fuller recruitment notice, as batch 3 already flagged |

## Known blockers, not to be rediscovered

- **`rrb-je`** (22 tests): live URL gone, archived copy only, and batch 2's research gate
  already found the PDF unreadable. Needs a hand-downloaded copy from a real browser.
- **`ibps-rrb-office-assistant`** and **`ibps-rrb-officer-scale-1`** (18 tests each):
  share the CRP RRBs XIV notice, found unreadable in batch 2. Separately, task #92 has
  these two pending a refresh from CRP XIV to XV, so their pattern data is stale as well.
  Fix the staleness first; a guide written against XIV would have to be rewritten.
- **`rrb-ntpc`**: scanned image PDF with no text layer. It has a syllabus page but no
  eligibility or selection process, which is consistent with a partial read. Confirm what
  unblocked the syllabus before commissioning the rest.

## What a delivered batch is worth

Tranches 1 to 3 total **53 pages**, each currently noindex. Against 1,924 indexable pages
today that is a 2.8% increase in indexable surface, concentrated entirely on
commercial-intent queries, on exams where the site already has the tests to convert the
traffic. Each page also now ships an FAQ block and FAQPage schema for free.

## Standing rules that apply to every page here

1. Every factual claim traces to the cited notice. No figure carried over from another
   exam, another organisation or a preparation site.
2. Every page ends with a `sourceNote` block naming the document and linking it. The
   previous-year-papers type is the one exception, where the record cards carry their own
   links; `guide-faqs.ts` handles that case already.
3. Where a notice does not state something, say so in the page rather than omitting the
   block silently. A stated gap is content; a silent one reads as an oversight.
4. Run the research gate before drafting. If an exam's source turns out unreachable or
   unreadable, report which exam and why, propose what would unblock it, and proceed with
   the rest of the batch rather than stalling it.
5. Independent Hard QA review before anything is marked approved, in the correction-log
   format batch 1 used.
