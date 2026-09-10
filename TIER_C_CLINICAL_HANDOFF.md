# Tier C clinical handoff: second full mocks for NEET PG, INI-CET and DNB PDCET

Written 10 September 2026, at the end of the eight-exam second-mock batch.

Five of the eight exams in that batch were built in the repository directly:
NATA Mathematics, IIT JAM Mathematics, DBT BET Section A, GPAT and CSEET Paper 4.
The remaining three are specified here instead of written, and this document says
why, and gives the Writer everything needed to produce them.

## Why these three are not written by the coding agent

`QUESTION_BANK_HANDOFF.md` splits the work: the Writer researches, drafts and runs
an independent question-by-question audit; the integrator converts approved JSON,
runs the repository checks, and does not repeat academic QA or change verified
question content. Every existing mock for these three exams came through that route.

The five exams built directly have answer keys that can be established without an
external source. A JAM integral, a NATA coordinate geometry item, a DBT BET
percentage, a GPAT statement that the loop diuretics act on the thick ascending
limb, a CSEET statement that section 138 of the Negotiable Instruments Act covers
cheque dishonour: each is either a calculation checkable from the question itself
or settled textbook or statutory content that does not move between cycles.

Clinical medicine is not like that, and the existing mocks show it. NEET PG mock 1
is 20 General Medicine, 17 General Surgery, 17 Obstetrics and Gynaecology and 8
Paediatrics before its 13 Pharmacology items are counted. INI-CET mock 1 is
similarly weighted. DNB PDCET is 120 questions of anaesthetic practice: opioid
dosing, neuromuscular blockade and reversal, local anaesthetic systemic toxicity,
the management of malignant hyperthermia. A drug of choice, a dose, or a management
step that is subtly wrong in that material would be memorised by doctors in
training. That is a different order of consequence from a mis-set arithmetic answer,
and it is the case the handoff pipeline was built for.

Writing these mocks out of settled preclinical recall alone (anatomy landmarks,
biochemical pathways, microbial classification) would avoid the risk but would
misrepresent the shape and difficulty of all three papers, so it is rejected as a
substitute rather than offered as one.

## What to produce

Three banks, each a second full mock mirroring the structure of the first.

### 1. NEET PG Medical Full Mock Test 2

- 180 questions, one section labelled `Pre-Clinical, Para-Clinical and Clinical`.
- 4 marks per correct answer, 1 mark deducted per wrong answer.
- Subject spread, matching mock 1 exactly: General Medicine 20, General Surgery 17,
  Obstetrics and Gynaecology 17, Pathology 13, Pharmacology 13, Anatomy 12,
  Preventive and Social Medicine 12, Physiology 11, Biochemistry 10, Microbiology 10,
  Paediatrics 8, Forensic Medicine 7, ENT 6, Ophthalmology 6, and the remainder as
  mock 1 allocates it.
- Test id `medical-full-mock-2`, bank file
  `src/lib/question-banks/neet-pg-2026-medical-full-mock-2.ts`.

### 2. INI-CET Medical Full Mock Test 2

- 200 questions, one section labelled as mock 1 labels it.
- Marking as mock 1.
- Subject spread, matching mock 1: General Medicine 25, General Surgery 21,
  Obstetrics and Gynaecology 19, Pathology 14, Pharmacology 14, Preventive and
  Social Medicine 13, Anatomy 12, Physiology 11, Microbiology 11, Paediatrics 11,
  Biochemistry 9, Forensic Medicine 7, ENT 6, Ophthalmology 6, remainder as mock 1.
- Test id `medical-full-mock-2`, bank file
  `src/lib/question-banks/ini-cet-2026-medical-full-mock-2.ts`.

### 3. DNB PDCET Anaesthesiology Full Mock Test 2

- 120 questions, one section labelled `Anaesthesiology`.
- 4 marks per correct answer, 1 mark deducted per wrong answer.
- Topic spread across the same areas mock 1 covers: airway anatomy and management,
  inhalational and intravenous agents, opioids, neuromuscular blockade, reversal and
  monitoring, local anaesthetics and their systemic toxicity, spinal and epidural
  technique, respiratory and cardiovascular physiology, acid base, fluids and
  transfusion, mechanical ventilation, monitoring, malignant hyperthermia,
  neuroanaesthesia, obstetric and paediatric anaesthesia, critical care and
  resuscitation, and equipment.
- Test id `anaesthesiology-full-mock-2`, bank file
  `src/lib/question-banks/dnb-pdcet-2026-anaesthesiology-full-mock-2.ts`.

## Constraints every bank must meet

These are the repository gates, not preferences. A bank that misses one will fail
`npm run qa:questions` or the build.

1. **Unique IDs** across the whole corpus. Use the pattern
   `<exam>-2026-<stage>-02-001` upward.
2. **No duplicate question text**, either within the bank or against any of the
   other 803 bank files. The within-test check compares raw stem text, so two
   questions in the same mock may not share a stem even when their options differ.
3. **Answer positions must not be predictable.** Across the bank's MCQs, the
   difference between the most and least used answer position must be at most
   `max(3, round(n/75))`, which is 3 for a 120-question bank and 3 for a
   200-question bank. Aim for an even split.
4. **Four options per question**, unless the official paper uses five, in which case
   every question in the bank must use five.
5. **`topic` and `difficulty` required on every question.** Difficulty is `easy`,
   `medium` or `hard`.
6. **No em dashes or en dashes** anywhere in a newly authored file. Use a colon in
   topic labels, as `Pharmacology: mechanism of action`.
7. **`source.kind` must be `original`.** `official-paper` requires explicit project
   approval and does not apply here.
8. **Every explanation must state why the key is right**, and where a distractor is a
   plausible clinical alternative, why it is wrong.

## Editorial exclusions, carried over from the rest of the corpus

- No question whose answer turns on a figure, threshold, guideline version, price or
  officeholder that changes between cycles.
- No current affairs.
- Where two guidelines in current use disagree on a management step, either exclude
  the question or name the guideline in the stem so the key is unambiguous.

## Integration, once the banks come back

For each bank: add the `TestConfig` entry to the exam's `stages[].tests` array in
`src/lib/exams.ts`; add the import, the `CHECKED_TEST_BANKS` entry and the
expectedCount branch in `src/lib/questions.ts` (widen the existing
`testId === '<exam>/<stage>-full-mock-1'` branch to `testId.startsWith(...)`); check
the `fullMockLayouts` section label matches the bank's `section` field exactly; then
run `npm run qa:site`, recapture `npm run seo:baseline`, and regenerate
`SEO_KEYWORD_SHEET.csv`.
