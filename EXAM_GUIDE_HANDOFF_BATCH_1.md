# TakeMockTest — Exam Guide Handoff, Batch 1 (Syllabus pages)

**Prepared for the ChatGPT content workflow · 7 September 2026**
Companion to `QUESTION_BANK_HANDOFF.md` and `TAKEMOCKTEST_DEVELOPMENT_OPERATING_MODEL.md`.
This brief covers **guide pages**, not question banks. The non-negotiable source rules in
`QUESTION_BANK_HANDOFF.md` §"Non-negotiable source rules" apply here **unchanged**.

---

## 1. Why this batch exists

157 exams are live on takemocktest.com. Only **10** of them have an `ExamGuide`, so for the
other **147** the syllabus, eligibility, selection-process, salary and previous-year-papers
pages carry `noIndex` and show only a stub — the syllabus page lists the section names under
"Detailed topic coverage is being verified before publication"; the rest show a one-line
placeholder. That is roughly **735 pages producing no search traffic at all**, and the single
largest SEO gap on the site.

It is deliberately not being closed by generating the content. Syllabus topics, age limits and
pay scales are exam-body facts, not arithmetic; writing them from a model's memory across 147
exams would put hundreds of unverifiable claims on a site whose entire positioning is
"syllabus-checked, source-linked, nothing fabricated". Those pages stay `noIndex` until a
checked guide package exists. **This brief is that package's specification.**

## 2. Scope of Batch 1 — syllabus only, 12 exams

**Deliver 12 `syllabus` guide pages. Do not write eligibility, salary, selection-process or
previous-year-papers pages in this batch.**

Syllabus goes first for three reasons, and they are worth understanding rather than just
following:

1. **Highest search volume of the five page types.** "<exam> syllabus" and "<exam> syllabus
   2026 pdf" outrank every other informational query for these exams except the exam name itself.
2. **It is the most stable.** A syllabus is restated in each cycle's notification and changes
   rarely. Eligibility carries age-relaxation tables and a cut-off date that go stale every
   cycle, which means a wrong eligibility page is wrong for a year.
3. **It is the safest to verify.** The syllabus is a printed list inside the notification PDF.
   Nothing has to be inferred, reconciled across sources, or converted.

Eligibility is Batch 2, on the same 12 exams, once Batch 1 is integrated and reviewed.

### The 12 exams, in priority order

| # | Exam | Slug | Category | Why it is in Batch 1 |
|---|---|---|---|---|
| 1 | RRB NTPC | `rrb-ntpc` | Railways | Among the largest applicant pools in India; two objective CBTs already live |
| 2 | UPSC CSE | `upsc-cse` | Civil Services | Highest-authority query set in the category; both Prelims papers live |
| 3 | NEET UG | `neet-ug` | Medical | Single largest exam by candidates in India |
| 4 | CUET UG | `cuet-ug` | University & Science | Fast-growing; syllabus confusion is the dominant query intent |
| 5 | CTET | `ctet` | Teaching & Research | Very high volume, twice-yearly cycle keeps demand constant |
| 6 | RRB ALP | `rrb-alp` | Railways | Large pool; two CBTs live |
| 7 | RPF Constable | `rpf-constable` | Railways | Large pool; single decisive CBT |
| 8 | SSC Junior Engineer | `ssc-je` | SSC | SSC cluster already ranks well, so a new SSC guide compounds existing authority |
| 9 | CAT | `cat` | Management | Highest commercial intent in the category |
| 10 | CLAT | `clat` | Law | Dominant law-entrance query set |
| 11 | IBPS SO | `ibps-so` | Banking | Banking cluster already ranks; SO is the largest unguided member |
| 12 | RBI Grade B | `rbi-grade-b` | Banking | Smaller pool but high-value, low-competition informational queries |

Volume ranking is an editorial judgement from category size and applicant numbers, not from a
paid keyword tool. If you have access to real volume data, re-order freely — **but do not add
exams outside this list**, because the per-exam context in §6 has been generated only for these
twelve and section names must match it exactly.

## 3. The one rule that makes or breaks this batch

> **Every section name you use must match the section names already live on the site,
> character for character.**

Each exam's live exam-pattern page already publishes a checked section list. If a syllabus page
calls a section "Reasoning Ability" while the pattern page calls it "General Intelligence and
Reasoning", the two pages contradict each other, the internal linking stops making sense, and
the mock tests no longer line up with the syllabus a candidate just read.

§6 gives the exact section names per exam per stage. **Copy them verbatim.** If the official
notification uses a different wording and you believe ours is wrong, do not silently fix it —
flag it in the delivery notes as `pattern-mismatch` and we will correct both together.

## 4. Source rules (unchanged from the question-bank handoff)

1. Use the **official examination body's own notification, information bulletin or syllabus
   document**. Coaching sites and aggregators may help you locate the PDF; they are never the
   source.
2. **Never invent a source URL, a date, a topic, or a rule.** §6 lists the official source URL
   already on file for each stage — start there, and if it has been superseded by a newer
   cycle's notification, use the newer one and say so.
3. If official sources conflict, or the syllabus for a stage cannot be verified from a primary
   source, mark that stage `needs-review` and **deliver the rest of the exam without it**. A
   missing section is recoverable; a wrong one is not.
4. Quote the syllabus faithfully but **in your own sentence structure**. Reproduce the topic
   list; do not copy several paragraphs of the notification verbatim.
5. Record, for every exam, the exact document title, the paragraph or clause number the syllabus
   sits in, and the date you checked it.

## 5. Output format — exact TypeScript shape

Deliver **one fenced ` ```ts ` block per exam**, ready to paste into
`src/lib/exam-guides.ts`. Do not deliver prose, HTML, or markdown-bodied content — the site
renders these blocks through a fixed component (`src/components/GuideBlocks.tsx`), so anything
outside the shape below cannot be displayed.

```ts
export interface ExamGuidePage {
  title: string;        // the <title> tag. See the length budget below.
  description: string;  // the meta description. 120-160 characters.
  heading: string;      // the on-page <h1>.
  blocks: GuideBlock[];
}
```

### The block types available to you

Use only these. Any other `type` value will fail the build.

```ts
type GuideBlock =
  | { type: 'paragraph'; heading?: string; text: string; tone?: 'plain' | 'boxed' }
  | { type: 'callout'; heading?: string; text: string }
  | { type: 'statCards'; heading?: string; note?: string; cards: { label: string; value: string }[] }
  | { type: 'table'; heading?: string; note?: string; minWidth?: string; headers: string[]; rows: string[][] }
  | { type: 'keyValueGrid'; heading?: string; note?: string; items: { label: string; value: string }[] }
  | { type: 'infoBlocks'; heading?: string; note?: string; items: { title: string; text: string }[] }
  | { type: 'numberedStages'; heading?: string; items: { title: string; text: string }[] }
  | { type: 'topicSections'; sections: { section: string; pattern?: string; topics: string[] }[] }
  | { type: 'sourceNote'; heading: string; text: string; sourceLabel: string; sourceUrl: string;
      tone?: 'plain' | 'boxed' };
```

`**bold**` is the only inline formatting supported, inside `text` fields. No links, no italics,
no lists inside a `text` string — use the block types for structure.

### Required block sequence for a syllabus page

In this order:

1. **`paragraph`** — two or three sentences stating what the paper contains: number of
   questions, marks, duration, and the level the syllabus is pitched at. Reuse the numbers from
   §6; do not restate them differently.
2. **`callout`** — the single most useful qualifier a candidate needs before reading the topic
   list. Examples: which sections are qualifying rather than merit-counting; that a section is
   set at Class 10 level while the rest are at graduation level; that one paper is optional.
   If the exam genuinely has no such qualifier, omit this block rather than padding it.
3. **`topicSections`** — the syllabus itself. **One `section` entry per section named in §6, in
   the same order, using the same string.** Each `topics` array holds 5-12 topic lines drawn
   from the notification. Use the optional `pattern` field to note that section's question count
   or marks where the notification states it per section.
4. **`sourceNote`** — mandatory, and last. `text` must name the document and the clause. Set
   `sourceLabel` to "View the official notice" (or "View the information bulletin" where that is
   what it is) and `sourceUrl` to the primary document.

For a multi-stage exam (RRB NTPC has CBT 1 and CBT 2; UPSC CSE has GS Paper I and CSAT), put
**all stages on the one syllabus page**, each as its own `topicSections` block preceded by a
`paragraph` naming the stage. Do not invent separate pages — the route is one `syllabus` page
per exam.

### Title and description budget

- `title` — **60 characters maximum, including the exam name.** The site appends
  " | TakeMockTest" only when the total still fits in 60; over that, your title is used alone.
  A title that overruns is not rejected, but it truncates in results.
  Good: `RRB NTPC Syllabus 2026: CBT 1 & CBT 2 Topics` (44).
- `description` — **120-160 characters.** Lead with the exam name and the word "syllabus", then
  name the actual sections. Do not write "Check the latest syllabus here" filler.
- `heading` — the on-page `<h1>`. May be longer and more natural than the title.
  Good: `RRB NTPC Syllabus 2026`.

### Worked example — the live SSC CGL syllabus page, abridged

This is real shipped content; match its register and density.

```ts
'ssc-cgl': {
  syllabus: {
    title: 'SSC CGL Tier 1 Syllabus 2026: Section-wise Topics',
    description:
      'Official SSC CGL Tier 1 syllabus for Reasoning, General Awareness, Quantitative Aptitude and English Comprehension, checked against the 2026 SSC notice.',
    heading: 'SSC CGL Tier 1 Syllabus 2026',
    blocks: [
      {
        type: 'paragraph',
        text: 'Tier 1 contains 25 questions from each of four subjects. Candidates receive 15 minutes per subject, and every wrong answer deducts 0.50 marks.',
      },
      {
        type: 'callout',
        text: 'Reasoning, General Awareness and English are set at graduation level. Quantitative Aptitude is set at Class 10 level, according to the official notice.',
      },
      {
        type: 'topicSections',
        sections: [
          {
            section: 'General Intelligence and Reasoning',
            topics: [
              'Analogies, similarities and differences',
              'Space visualisation and spatial orientation',
              'Problem solving, analysis, judgement and decision making',
              'Number and non-verbal series',
              'Coding-decoding, statement-conclusion and syllogistic reasoning',
            ],
          },
          {
            section: 'Quantitative Aptitude',
            topics: [
              'Whole numbers, decimals, fractions and relationships between numbers',
              'Percentage, ratio and proportion, square roots and averages',
              'Interest, profit and loss, discount, partnership, mixture and alligation',
              'Trigonometric ratios, identities, heights and distances',
            ],
          },
        ],
      },
      {
        type: 'sourceNote',
        heading: '',
        text: 'Source: Staff Selection Commission, Combined Graduate Level Examination 2026 notice, paragraphs 13.8 and 13.10.',
        sourceLabel: 'View the official notice',
        sourceUrl: SSC_CGL_NOTICE_URL,
      },
    ],
  },
},
```

Note the `sourceUrl` referencing a named constant. Declare one constant per exam at the top of
your delivery, in the form `const RRB_NTPC_CEN_URL = 'https://...';`, and reference it — that is
the existing convention in the file.

### House style

- **Indian English**: "programme", "centre", "practise" (verb), "organisation".
- Write for a candidate deciding what to study, not for a search engine. No keyword repetition
  beyond what reads naturally; the pages already rank on structure and specificity.
- Never write "as per the latest notification" without naming which notification.
- Do not include exam dates, application windows, vacancy counts, cut-offs or fees on a
  syllabus page. Those go stale and belong to other page types.

## 6. Per-exam context (generated from the live repository, 7 September 2026)

These section names, counts and source URLs are what the site publishes today. They are the
contract your syllabus pages must match.

### RRB NTPC  
`slug: rrb-ntpc` · category: Railways · `Railway Recruitment Board: Non-Technical Popular Categories`

| Stage | Pattern status | Q / Marks / Min | Negative | Section names you MUST reuse verbatim |
|---|---|---|---|---|
| CBT 1 | official 2026 | 100 / 100 / 90 | 0.333 | Mathematics · General Intelligence and Reasoning · General Awareness |
| CBT 2 | official 2026 | 120 / 120 / 90 | 0.333 | Mathematics · General Intelligence and Reasoning · General Awareness |

- **CBT 1 source already on file** (checked 10 August 2026): https://www.rrbchennai.gov.in/downloads/CEN-07-2025-NTPC-UnderGraduate-English.pdf
- **CBT 2 source already on file** (checked 26 August 2026): https://www.rrbchennai.gov.in/downloads/CEN-07-2025-NTPC-UnderGraduate-English.pdf

### UPSC CSE  
`slug: upsc-cse` · category: Civil Services · `Union Public Service Commission: Civil Services Examination`

| Stage | Pattern status | Q / Marks / Min | Negative | Section names you MUST reuse verbatim |
|---|---|---|---|---|
| GS Paper I | official CSE 2026 | 100 / 200 / 120 | 0.667 | History of India and Indian National Movement · Indian and World Geography · Indian Polity and Governance · Economic and Social Development · Environmental Ecology, Bio-diversity and Climate Change · General Science · Current events of national and international importance |
| CSAT (Paper II) | official CSE 2026 | 80 / 200 / 120 | 0.833 | Comprehension · Interpersonal skills including communication skills · Logical reasoning and analytical ability · Decision making and problem solving · General mental ability · Basic numeracy and Data interpretation |

- **GS Paper I source already on file** (checked 5 August 2026): https://www.upsc.gov.in/sites/default/files/Notif-CSP-2026-Engl-060226Rev.pdf
- **CSAT (Paper II) source already on file** (checked 5 August 2026): https://www.upsc.gov.in/sites/default/files/Notif-CSP-2026-Engl-060226Rev.pdf

### NEET UG  
`slug: neet-ug` · category: Medical · `National Eligibility cum Entrance Test (UG) 2026`

| Stage | Pattern status | Q / Marks / Min | Negative | Section names you MUST reuse verbatim |
|---|---|---|---|---|
| NEET UG | official 2026 | 180 / 720 / 180 | 1 | Physics · Chemistry · Biology (Botany & Zoology) |

- **NEET UG source already on file** (checked 1 September 2026): https://neet.nta.nic.in/admission-bulletin/

### CUET UG  
`slug: cuet-ug` · category: University & Science · `Common University Entrance Test (UG) 2026`

| Stage | Pattern status | Q / Marks / Min | Negative | Section names you MUST reuse verbatim |
|---|---|---|---|---|
| CUET UG 2026 General Aptitude Test | official 2026 | 50 / 250 / 60 | 1 | General Aptitude Test |
| English | official 2026 | 50 / 250 / 60 | 1 | English |

- **CUET UG 2026 General Aptitude Test source already on file** (checked 1 September 2026): https://cdnbbsr.s3waas.gov.in/s3d1a21da7bca4abff8b0b61b87597de73/uploads/2026/01/202601031633478370.pdf
- **English source already on file** (checked 2 September 2026): https://cuet.nta.nic.in/

### CTET  
`slug: ctet` · category: Teaching & Research · `Central Teacher Eligibility Test 2026`

| Stage | Pattern status | Q / Marks / Min | Negative | Section names you MUST reuse verbatim |
|---|---|---|---|---|
| Paper I — Primary Stage | official 2026 | 150 / 150 / 150 | 0 | Child Development and Pedagogy · Mathematics · Environmental Studies · Language I — English · Language II — Hindi |

- **Paper I — Primary Stage source already on file** (checked 1 September 2026): https://ctet.nic.in/document/ctet-sept-2026-information-bulletin/

### RRB ALP  
`slug: rrb-alp` · category: Railways · `Railway Recruitment Board: Assistant Loco Pilot`

| Stage | Pattern status | Q / Marks / Min | Negative | Section names you MUST reuse verbatim |
|---|---|---|---|---|
| CBT 1 | official Recruitment of Assistant Loco Pilots CEN 01/2025 | 75 / 75 / 60 | 0.333 | Mathematics · Mental Ability · General Science · General Awareness |
| CBT 2 | official Recruitment of Assistant Loco Pilots CEN 01/2025 | 100 / 100 / 90 | 0.333 | Mathematics · General Intelligence and Reasoning · Basic Science and Engineering |

- **CBT 1 source already on file** (checked 7 August 2026): https://rrbbilaspur.gov.in/file/notice/Revised_CEN_01-2025_ALP.pdf
- **CBT 2 source already on file** (checked 7 August 2026): https://rrbbilaspur.gov.in/file/notice/Revised_CEN_01-2025_ALP.pdf

### RPF Constable  
`slug: rpf-constable` · category: Railways · `Railway Protection Force: Constable`

| Stage | Pattern status | Q / Marks / Min | Negative | Section names you MUST reuse verbatim |
|---|---|---|---|---|
| CBT | official CEN No. RPF 02/2024 | 120 / 120 / 90 | 0.333 | Arithmetic · General Intelligence and Reasoning · General Awareness |

- **CBT source already on file** (checked 5 August 2026): https://rrbsecunderabad.gov.in/wp-content/uploads/2024/04/Final-Notice-RPF-Constable-02-2024_English.pdf

### SSC Junior Engineer  
`slug: ssc-je` · category: SSC · `Staff Selection Commission: Junior Engineer (Civil, Mechanical & Electrical)`

| Stage | Pattern status | Q / Marks / Min | Negative | Section names you MUST reuse verbatim |
|---|---|---|---|---|
| Paper I | official SSC JE 2025 | 100 / 100 / 120 | 0.25 | General Intelligence and Reasoning · General Awareness |

- **Paper I source already on file** (checked 7 August 2026): https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_je_2025.pdf

### CAT  
`slug: cat` · category: Management · `Common Admission Test`

| Stage | Pattern status | Q / Marks / Min | Negative | Section names you MUST reuse verbatim |
|---|---|---|---|---|
| VARC, DILR and QA | official 2026 | 34 / 102 / 60 | 1 | Verbal Ability and Reading Comprehension · Data Interpretation and Logical Reasoning · Quantitative Aptitude |

- **VARC, DILR and QA source already on file** (checked 16 August 2026): https://iimcat.ac.in/

### CLAT  
`slug: clat` · category: Law · `CLAT (Common Law Admission Test)`

| Stage | Pattern status | Q / Marks / Min | Negative | Section names you MUST reuse verbatim |
|---|---|---|---|---|
| English, Legal Reasoning, Logical Reasoning and Quantitative Techniques | official 2026 | 30 / 30 / 30 | 0.25 | English Language · Legal Reasoning · Logical Reasoning · Quantitative Techniques |
| Postgraduate (LL.M.) | official 2026 | 120 / 120 / 120 | 0.25 | PG Legal Comprehension |

- **English, Legal Reasoning, Logical Reasoning and Quantitative Techniques source already on file** (checked 16 August 2026): https://consortiumofnlus.ac.in/
- **Postgraduate (LL.M.) source already on file** (checked 31 August 2026): https://clat2026.consortiumofnlus.ac.in/clat-2026/pg-question-format.html

### IBPS SO  
`slug: ibps-so` · category: Banking · `Institute of Banking Personnel Selection: Specialist Officer, Scale I (IT Officer / Agriculture Field Officer / HR-Personnel Officer / Marketing Officer)`

| Stage | Pattern status | Q / Marks / Min | Negative | Section names you MUST reuse verbatim |
|---|---|---|---|---|
| Prelims | official CRP SPL-XV | 150 / 125 / 120 | 0.25 | English Language · Reasoning · Quantitative Aptitude |
| Mains | review-pending | 100 / 100 / 80 | 0.25 | English Language · Reasoning · Quantitative Aptitude · Professional Knowledge |

- **Prelims source already on file** (checked 6 August 2026): https://www.ibps.in/wp-content/uploads/Detailed-Advt.-CRP-SPL-XV_Final1.pdf
- **Mains source already on file** (checked 27 August 2026): https://www.ibps.in/wp-content/uploads/Detailed-Advt.-CRP-SPL-XV_Final1.pdf

### RBI Grade B  
`slug: rbi-grade-b` · category: Banking · `Reserve Bank of India: Grade B Officer (DR), General Cadre`

| Stage | Pattern status | Q / Marks / Min | Negative | Section names you MUST reuse verbatim |
|---|---|---|---|---|
| Phase I | official RBISB/DA/03/2025-26 | 200 / 200 / 120 | 0.25 | General Awareness · English Language · Quantitative Aptitude · Reasoning |
| Phase II | review-pending | ? / ? / ? | None |  |

- **Phase I source already on file** (checked 6 August 2026): https://opportunities.rbi.org.in/Scripts/bs_viewcontent.aspx?Id=4713

## 7. What to deliver, and how it is accepted

### Deliverable

One markdown document containing, per exam, in this order:

1. A short **verification note** — the document you used, its clause or paragraph number, the
   date you checked it, and whether the URL in §6 was still current or you replaced it.
2. The **` ```ts ` block** for that exam's `syllabus` guide.
3. Any **flags**: `pattern-mismatch` (our section names disagree with the notification),
   `needs-review` (a stage you could not verify), or `superseded-source` (§6's URL is stale).

Then, at the end, one **coverage table**: exam, stages covered, stages flagged, source date.

### Independent validation before you hand it over

Per the operating model, validation happens in a **fresh chat that did not write the content**.
The validator checks, for every exam:

- [ ] Every `section` string in `topicSections` matches §6 character for character.
- [ ] Every topic line is traceable to the cited official document — spot-check at least three
      per exam against the PDF.
- [ ] `sourceUrl` resolves and is the exam body's own domain.
- [ ] `title` ≤ 60 characters; `description` between 120 and 160.
- [ ] No exam dates, fees, vacancy counts or cut-offs appear anywhere.
- [ ] The `sourceNote` block is present and last.
- [ ] Nothing is asserted that the notification does not state.

A batch arrives with a **Hard QA PASS** or it does not arrive.

### Acceptance checklist on our side

When the package lands, the coding agent will:

1. Paste each block into `src/lib/exam-guides.ts` under the exam's slug.
2. Run `npx tsc --noEmit` — a malformed block fails the type check immediately.
3. Run `npm run build`, then `npm run qa:onpage-seo` — this catches over-long titles, missing
   descriptions and duplicate or stuttering headings.
4. Run `npm run qa:links`.
5. Spot-check three rendered pages in the browser.

The page becomes indexable automatically: `syllabus/page.tsx` drops `noIndex` the moment
`getExamGuide(slug, 'syllabus')` returns a guide. **No separate SEO step is needed** — shipping
the guide is what turns the page on.

## 8. Prompt to start the batch

Paste this into ChatGPT, with this whole document attached.

> You are producing syllabus guide pages for takemocktest.com. The attached brief is the
> specification; follow it exactly.
>
> Work **one exam at a time**, in the priority order in §2. For each exam:
>
> 1. Find the official notification, information bulletin or syllabus document from the
>    examination body's own website. §6 gives the URL already on file — verify it still resolves
>    and is the current cycle. If it has been superseded, use the newer document and flag it.
> 2. Read the syllabus clause. Do not rely on any coaching site, aggregator, or your own memory
>    of the syllabus.
> 3. Write the `syllabus` guide as a ` ```ts ` block in the exact shape in §5, reusing the
>    section names from §6 character for character.
> 4. State the document title, clause number and the date you checked it.
>
> Rules that override everything else: never invent a URL, a topic, a date or a rule; if a
> stage's syllabus cannot be verified from a primary source, flag it `needs-review` and deliver
> the exam without that stage; if the official section names disagree with §6, flag
> `pattern-mismatch` rather than silently changing either.
>
> Start with RRB NTPC. Show me that one exam and stop, so we can confirm the format before you
> continue with the remaining eleven.

That last instruction matters. One exam reviewed before eleven more are written is the same
lesson as "do not draft a 100-question bank before the exam brief is approved" — a format error
caught on exam 1 costs one exam, caught on exam 12 costs twelve.

## 9. After this batch

- **Batch 2** — `eligibility` for the same 12 exams. Higher risk: age-relaxation tables and a
  qualification cut-off date that expire each cycle, so these pages need a review cadence that
  syllabus pages do not.
- **Batch 3** — the next 12 exams by volume: MHT CET, GATE, JEE Main, UGC NET, AILET, RRB JE,
  RRB Technician, NIFT, RPF SI, SSC Steno, NDA and CDS.
- `salary` and `selection-process` are lower priority: salary is high-volume but the most
  volatile of the five, and selection-process largely restates content already on the
  exam-pattern and overview pages.

At 12 exams per batch, the 147-exam backlog is roughly 12 batches for syllabus alone. It is
worth deciding early whether every one of the 147 deserves a guide, or whether the tail below
the top ~60 exams is better served by leaving those pages `noIndex` and spending the effort on
depth for exams that already draw traffic.
