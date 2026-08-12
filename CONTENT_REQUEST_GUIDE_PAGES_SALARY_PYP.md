# Content request: Salary and Previous Year Papers guide pages

**Requested:** 12 August 2026
**Requested by:** coding agent, on the site owner's prioritization decision
**Deliverable owner:** ChatGPT (content/research/QA per `TAKEMOCKTEST_DEVELOPMENT_OPERATING_MODEL.md`)
**Target schema:** `src/lib/exam-guides.ts` (`ExamGuidePage` / `GuideBlock`, now including the new `recordCards` block type)

## Status

The `salary` and `previous-year-papers` guide-page types were previously hardcoded to SSC CGL only, in their own `page.tsx` files. They are now data-driven through `EXAM_GUIDES`, the same system already serving `syllabus`, `eligibility`, and `selection-process`. As of 12 August 2026, 9 exams have those three guide types live: `ssc-cgl`, `ibps-po` (original reference implementations), `ssc-chsl`, `sbi-po`, `ibps-clerk`, `rrb-group-d` (Phase 2 batch 1), and `ssc-mts`, `ssc-gd-constable`, `sbi-clerk` (Phase 2 batch 2 ready3, just integrated). SSC CGL's existing salary and previous-year-papers content was migrated into this system unchanged (content parity verified) as the reference implementation. This request is for the same treatment on the other 8 exams.

**Scope decision:** this batch covers only `salary` and `previous-year-papers`. `admit-card`, `answer-key`, `cutoff`, and `result` stay SSC-CGL-only for now: they're tied to one exam cycle's exact dates and scores (not evergreen reference content like syllabus), so generalizing them means committing to a refresh every exam cycle for every exam. That's a real decision with a real ongoing cost, not something to default into. Don't research or draft those four types in this batch.

## Scope: 8 exams x 2 page types = 16 pages

Every exam that already has live syllabus/eligibility/selection-process guide pages, except `ssc-cgl` (already done):

| Exam | Slug | Official source already on file |
|---|---|---|
| IBPS PO | `ibps-po` | `https://www.ibps.in/wp-content/uploads/Detailed-Notification_CRP-PO-XVI_Final_V1_30.06.2026.pdf` |
| SSC CHSL | `ssc-chsl` | `https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_chsl_2025.pdf` |
| SBI PO | `sbi-po` | `https://sbi.bank.in/documents/77530/57941/18062026_1_Detailed_Adv.2026.pdf/1f1a9532-8a2f-6e59-08a0-616d62a497b1?t=1781759726353` |
| IBPS Clerk | `ibps-clerk` | `https://www.ibps.in/wp-content/uploads/Notification_CRP_CSA_XVI-Final.pdf` |
| RRB Group D | `rrb-group-d` | `https://www.rrbcdg.gov.in/2025-09-level1.php` (current listing) or the archived CEN at `https://web.archive.org/web/20260411020321/https://www.rrbcdg.gov.in/uploads/2025/09-LVL1/092025-CEN.pdf` |
| SSC MTS & Havaldar | `ssc-mts` | `https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_mts_2025.pdf` |
| SSC GD Constable | `ssc-gd-constable` | `https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/notice_01122025.pdf` |
| SBI Clerk | `sbi-clerk` | `https://sbi.bank.in/documents/77530/52947104/JA+2025+-Detailed+Advt.pdf` |

If IBPS RRB Office Assistant, RRB JE, or RRB NTPC unblock and get their syllabus/eligibility/selection-process guides live before this batch is picked up, treat them as in scope too under the same rules.

### Salary pages

Post-wise pay level or pay scale, sourced from the official recruitment notice (most SSC/banking/railway notices state the applicable pay level, pay band, or grade pay directly). Follow the SSC CGL reference shape:

1. A short "at a glance" framing paragraph.
2. A table of pay levels/scales with starting and upper basic pay (or a single pay scale if the post has only one, unlike SSC CGL's multi-post spread).
3. What's added to basic pay (allowances) and what's commonly deducted, in general terms, not exact current rates (rates change independently of the recruitment notice and go stale fast).
4. A short note on why one in-hand figure isn't quoted (posting location, allowances, and deductions vary).
5. A `sourceNote` block pointing at the official notice.

If an exam's notice does not state a pay level or scale directly (some don't, especially clerical/constable-level notices that just reference "as per rules"), say so explicitly and don't guess a figure or extrapolate from a similar post at another organization.

### Previous Year Papers pages

Use the new `recordCards` block type (schema below) to list verified official release records: any notice, answer-key release, or portal post from the exam's official body announcing when past papers, answer keys, or response sheets were made available, with the access window if the notice states one.

If an exam has no equivalent published record (common for younger or less-established exams), don't fabricate one. Use a short `paragraph` explaining that no verified record exists yet instead of a `recordCards` block, matching the "not published here yet" placeholder tone already used elsewhere on the site.

## Schema to target

```ts
type GuideBlock =
  | { type: 'callout'; heading?: string; text: string }
  | { type: 'paragraph'; heading?: string; text: string; tone?: 'plain' | 'boxed' }
  | { type: 'statCards'; heading?: string; note?: string; cards: { label: string; value: string }[] }
  | { type: 'table'; heading?: string; note?: string; minWidth?: string; headers: string[]; rows: string[][] }
  | { type: 'keyValueGrid'; heading?: string; note?: string; items: { label: string; value: string }[] }
  | { type: 'infoBlocks'; heading?: string; note?: string; items: { title: string; text: string }[] }
  | { type: 'numberedStages'; heading?: string; items: { title: string; text: string }[] }
  | { type: 'topicSections'; sections: { section: string; pattern?: string; topics: string[] }[] }
  | { type: 'sourceNote'; heading: string; text: string; sourceLabel: string; sourceUrl: string; tone?: 'plain' | 'boxed' }
  | {
      type: 'recordCards';
      heading?: string;
      note?: string;
      records: {
        badge: string;                          // e.g. "Tier 2 · 2023"
        title: string;                           // e.g. "Final answer keys with question papers"
        meta: { label: string; value: string }[]; // e.g. Published / Availability
        linkLabel: string;                       // e.g. "Open official notice"
        linkUrl: string;
      }[];
    };
```

Text fields support `**bold**` inline emphasis only, no other markdown, no links inside prose. Every `sourceNote` block should include `tone: 'plain'` explicitly.

## New rule (carried from batch 1): check every table sums correctly before marking APPROVED

If a salary table states a total or range that should reconcile with individual entries, or a `statCards` block states a count, verify the arithmetic against the source before shipping. Batch 1 shipped a real error from an unchecked table; don't repeat it.

## Rules (carried from the standing operating model, not new)

- Every fact, number, date, and category name needs a real official source. No guessed pay levels, allowance rates, or release dates.
- Follow `SEO_PLAYBOOK.md`'s writing-voice rules and the humanizer guidance already applied sitewide (no em dashes, no AI-vocabulary tells, no filler).
- Use the fixed handoff naming convention from the operating model §11: `{exam-slug}-salary-pyp-v1-APPROVED.json` per exam, or one combined file if easier to review.
- Independent Hard QA review before marking anything APPROVED.
- Deliver by direct file upload to the coding-agent session.

## Not in scope for this batch

- `admit-card`, `answer-key`, `cutoff`, `result` for any exam (see scope decision above).
- Any exam without live syllabus/eligibility/selection-process guide pages yet.
- RRB NTPC (still blocked on a readable source, separate from this request).
