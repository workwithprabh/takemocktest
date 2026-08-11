# TakeMockTest Question Bank Handoff

Use this guide to prepare exam research and question banks in ChatGPT before handing validated files to Codex for integration. It is governed by [TAKEMOCKTEST_DEVELOPMENT_OPERATING_MODEL.md](./TAKEMOCKTEST_DEVELOPMENT_OPERATING_MODEL.md). The goal is high accuracy, clear provenance, and a repeatable review process. No AI workflow can guarantee 100 percent accuracy, so every bank must pass independent content review in ChatGPT and technical repository checks after integration.

## Who does what

### ChatGPT

- Researches the current exam pattern from official sources.
- Produces the approved exam brief, test-series manifest, and SEO/AEO/GEO implementation specification.
- Drafts original questions that match the official syllabus and difficulty.
- Performs an independent question-by-question audit in a separate chat.
- Returns final structured JSON and a Hard QA PASS report.

### Codex

- Converts approved JSON into the repository's TypeScript format.
- Runs schema, repository duplicate, configuration, build, and browser checks.
- Implements the approved UI and SEO specification without repeating academic QA or changing verified question content.
- Commits approved work to GitHub and prepares a preview for review.

Keep one ChatGPT Project per exam family and separate chats for research, writing, and validation. Do not use one very long chat for every exam.

## Non-negotiable source rules

1. Use the official examination body, official notification, official syllabus, or officially released paper for pattern, timing, marks, and negative marking.
2. Coaching sites, blogs, search snippets, and discussion forums may help locate information, but they are not authoritative sources.
3. Write original questions. Official papers may establish format and difficulty, but do not copy their wording or copy questions from paid or free coaching banks.
4. Never invent a source URL, publication date, rule, answer, rank, current-affairs fact, or official claim.
5. If official sources conflict or a rule cannot be verified, mark it `needs-review` and stop that part of the bank.
6. Use `source.kind: "original"` for newly written questions. `official-paper` is reserved for content that is genuinely traceable to an officially released paper and must not be used without explicit project approval.
7. For current affairs, record the fact's date and a primary source. Avoid current-affairs questions until each answer can be independently verified.

## Production sequence

1. Research and approve the exam brief.
2. Approve the test-series manifest and SEO/AEO/GEO implementation specification.
3. Write the planned question banks.
4. Validate them in a fresh ChatGPT chat that did not write them.
5. Resolve every failed or uncertain item. Never silently edit a doubtful answer.
6. Hand the complete approved package and Hard QA PASS to Codex.
7. Codex runs technical repository QA, integrates the package, and pushes it to GitHub.
8. Review the preview before any live deployment.

Do not draft a complete 100-question test before the exam brief has been reviewed. A wrong pattern would waste the entire bank.

## File 1: exam brief

Name it `<exam>-<stage>-brief.json`, for example `ssc-cgl-tier-1-brief.json`.

```json
{
  "schemaVersion": 1,
  "exam": {
    "slug": "exam-stage-slug",
    "name": "Official exam name",
    "stage": "Official stage name",
    "officialPatternSource": {
      "reference": "Official notification or syllabus title",
      "url": "https://official-domain.example/document",
      "checkedOn": "YYYY-MM-DD"
    },
    "durationMinutes": 60,
    "totalQuestions": 100,
    "totalMarks": 200,
    "negativeMarking": 0.5,
    "markingNotes": "Plain-language description of special marking rules",
    "sections": [
      {
        "name": "Official section name",
        "questionCount": 25,
        "marksPerQuestion": 2
      }
    ]
  },
  "researchNotes": [
    "List any ambiguity, change from an earlier cycle, or item needing review"
  ]
}
```

Every number must be supported by the official source. If a rule differs by post, paper, shift, or year, explain that in `researchNotes`.

## File 2: question bank

Name it `<exam>-<stage>-<section>-bank-01.json`.

```json
{
  "schemaVersion": 1,
  "examSlug": "exam-stage-slug",
  "section": "Official section name",
  "bankNumber": 1,
  "questions": [
    {
      "id": "exam-stage-section-001",
      "section": "Official section name",
      "topic": "Specific syllabus topic",
      "difficulty": "medium",
      "question": "Complete question text",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 2,
      "negativeMarking": 0.5,
      "explanation": "A concise solution that proves why the answer is correct.",
      "source": {
        "kind": "original",
        "reference": "Written to the official syllabus and pattern named in the exam brief",
        "url": "https://official-domain.example/document",
        "checkedOn": "YYYY-MM-DD"
      },
      "verification": {
        "status": "verified",
        "method": "Independently solved and checked against the explanation",
        "notes": "Short calculation or verification note"
      }
    }
  ]
}
```

`verification` is handoff-only evidence. Codex may remove it when converting the bank to the site's existing `Question` type.

### Answer-type rules

- `mcq`: exactly four distinct options, `correctIndex` from 0 to 3, and one correct answer.
- `multi-select`: exactly four distinct options, `correctIndex: -1`, and `correctIndices` containing the distinct correct option indexes. Set `partialMarking` only when official rules require it.
- `numerical`: use `options: []`, `correctIndex: -1`, and a string `correctValue`. Record `maxDecimalPlaces` when the official rules define it.
- Use only answer types supported by that exam's official pattern.

### Question quality rules

- Match the approved syllabus, section size, marks, timing, and negative marking exactly.
- Include an intentional easy, medium, and hard mix appropriate to the exam.
- Keep wording, scenarios, numbers, and answer choices unique across the bank.
- Balance correct option positions. Do not create an obvious A/B/C/D pattern.
- Make all four MCQ options plausible, distinct, and grammatically consistent.
- Explanations must solve or justify the answer, not merely repeat it.
- Recompute every numerical answer independently.
- Re-derive every reasoning puzzle from its constraints.
- Use plain text that renders well on mobile. Do not put essential question text inside images.
- Do not use em dashes or en dashes.
- Do not add SEO filler, promotional language, fictional experts, or fabricated claims.

## File 3: independent validation report

Name it `<exam>-<stage>-<section>-bank-01-validation.md`.

The validator must solve each question before looking at the supplied answer. The report must include:

- Bank-level result: `PASS`, `FAIL`, or `NEEDS REVIEW`.
- Exact question count and duplicate check.
- One row per question with ID, independently derived answer, supplied answer, result, and notes.
- A source and syllabus check.
- A list of every correction made.
- A final statement confirming whether unresolved issues remain.

A bank is accepted only when every question passes and no source or pattern issue remains.

## Prompt A: research the exam pattern

Paste this into a new ChatGPT chat after uploading this guide:

```text
You are the official-pattern researcher for TakeMockTest. Read QUESTION_BANK_HANDOFF.md and follow it strictly.

Research: [EXAM NAME AND STAGE]
Target cycle/year: [YEAR]

Use primary official sources for every pattern claim. Produce only:
1. The completed <exam>-<stage>-brief.json.
2. A short source table with claim, official source title, direct URL, and access date.
3. A clear NEEDS REVIEW list for anything not confirmed by an official source.

Do not write questions yet. Do not use coaching sites as authority. Do not guess missing rules. Check that section totals, question totals, marks, duration, and negative marking agree mathematically.
```

Approve the resulting exam brief inside the ChatGPT content workflow before moving on.

## Prompt B: write one question bank

Start a new writing chat in the same ChatGPT Project. Upload this guide and the approved exam brief, then paste:

```text
You are a question writer for TakeMockTest. Read QUESTION_BANK_HANDOFF.md and the approved exam brief, then follow both strictly.

Create: [NUMBER] original questions
Exam and stage: [EXAM NAME AND STAGE]
Section: [SECTION NAME]
Bank number: [NUMBER]

Return one valid JSON file matching the question-bank schema in the guide. Write original questions only. Match the approved official syllabus, answer type, marks, and negative marking. Give each question a unique stable ID and a proof-quality explanation. Independently solve every question before setting its answer. If any required rule is unclear, stop and return NEEDS REVIEW instead of guessing.

After the JSON, give a compact self-check summary for count, topic coverage, difficulty mix, answer-position balance, and duplicate risk. Do not include commentary inside the JSON.
```

## Prompt C: independently validate the bank

Start a fresh validation chat. Do not reuse the writing chat. Upload this guide, the approved exam brief, and the bank JSON, then paste:

```text
You are the independent QA reviewer for TakeMockTest. You did not write this question bank. Read QUESTION_BANK_HANDOFF.md, the approved exam brief, and the supplied bank.

For every question, solve it independently before comparing your answer with correctIndex, correctIndices, or correctValue. Check wording, option uniqueness, syllabus fit, difficulty, marks, negative marking, explanation, source honesty, and duplicate risk.

Return:
1. A validation report matching the guide, with one row per question.
2. A corrected JSON file only if changes are required.
3. A final PASS, FAIL, or NEEDS REVIEW decision.

Never silently fix a question. Explain every changed answer, option, question, or explanation. Mark uncertain facts NEEDS REVIEW rather than guessing.
```

## Handoff to Codex

After validation, provide Codex with:

1. The approved exam brief JSON.
2. The approved test-series manifest.
3. The final validated question-bank JSON.
4. The independent Hard QA PASS report.
5. The SEO/AEO/GEO implementation specification.
6. Required routes, internal links, sitemap and `llms.txt` requirements.
7. Any official source files or direct links used.

Use this instruction:

```text
Import this content-authoritative package into TakeMockTest without repeating academic QA or changing approved question content. Run technical schema, repository duplicate, configuration, build, and focused browser checks. If a suspected content defect appears, report its exact ID and issue without silently editing it. Commit and push the result to GitHub. Prepare a preview for review, but do not deploy live until I approve it.
```

## Codex acceptance checklist

- Approved exam brief, manifest, Hard QA PASS, and implementation specification are present.
- Configured sections, question totals, marks, negative marking, answer types, and timers match the approved package.
- IDs, option counts, and answer indexes are structurally valid.
- No duplicate IDs or question text against the existing repository.
- No approved question, answer, explanation, or difficulty label was silently changed.
- Repository question QA passes.
- Production build passes.
- Focused desktop and mobile smoke tests pass in the browser.
- Metadata, canonical, schema, internal links, sitemap, and `llms.txt` requirements are implemented.
- Only reviewed files are committed to GitHub.
