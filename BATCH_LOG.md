# Batch Log

Dated entries appended by whoever completes a batch (live session or scheduled cloud agent).

## 2026-08-11 - BITSAT 2026 Mathematics Variant (Batch 35, live session)

Added BITSAT 2026 Mathematics Variant Full Mock 1 with 130 original questions for
390 marks in 180 minutes under one composite timer. The five banks match the
official split: Physics 30, Chemistry 30, English Proficiency 10, Logical
Reasoning 20, and Mathematics 40. Every correct answer earns 3 marks, every
incorrect answer deducts 1 mark, and unattempted questions score zero. The
optional 12 extra questions are deliberately excluded from this standard mock.

The independent Hard QA pass reviewed all 130 questions and corrected six
question-record defects before integration: two English verification or
explanation references, two Logical Reasoning wording or topic issues, one
underdetermined Logical Reasoning mapping rule, and one Mathematics distractor
that duplicated the correct value in an equivalent form. The final five
repository banks exactly match the corrected Hard QA files, with no unresolved
content or pattern issue.

## 2026-08-09 - JEE Advanced Papers 1 and 2 (Batch 34, live session)

Added JEE Advanced 2026 Paper 1 and Paper 2 as separate compulsory stages. Paper 1
contains 48 questions for 180 marks in 180 minutes; Paper 2 contains 54 questions
for 180 marks in 180 minutes. Each stage has one full mock and three subject
sectionals across Mathematics, Physics, and Chemistry.

Extended the shared attempt engine only where the official format required it:
multi-select OMR responses, official partial marking, decimal numerical entry,
per-question marks and penalties, and a distinct partial-score result state. The
existing single-choice and JEE Main integer-entry paths remain unchanged. Drafts
continue to preserve every answer format and the timer across refreshes.

Built six original subject banks totalling 102 questions. Paper 1 follows the exact
per-subject mix of 4 single-correct, 4 multi-select, 4 numerical-value, and 4
matching-list questions. Paper 2 follows the exact per-subject mix of 4
single-correct, 5 multi-select, 5 numerical-value, and 4 stem-based numerical
questions. Marks and negative marking are stored on every question.

Full corpus after this batch: 177 question-bank files, 5,432 questions, zero
duplicate IDs or text. Question QA, focused lint, type checking, and the 1,011-page
production build pass.

## 2026-08-09 - JEE Main Paper 1 (Batch 33, live session)

Added JEE Main 2026 Paper 1 for B.E. and B.Tech. admission with 25 Mathematics,
25 Physics, and 25 Chemistry questions. Each subject bank contains 20
multiple-choice questions and 5 numerical-value questions, matching the official
75-question, 300-mark, 180-minute pattern. The package includes one full mock,
three subject tests, and two mixed quick tests. Both question formats use +4 for a
correct answer and -1 for an incorrect answer.

Extended the shared attempt engine with integer-entry questions because converting
JEE Section B into four-option questions would not reproduce the official response
method. Numerical answers now persist with the attempt, score correctly after a
refresh, appear in the result review, and are included in pre-filled issue reports.
All older OMR-style tests continue to use the existing path.

The first corpus audit caught one pair of algebraically different Physics distractors
that became identical under the audit's case-insensitive comparison. One distractor
was replaced before the clean run. All new MCQ banks have balanced answer positions
of 5/5/5/5 and include hard-tagged material. The 15 numerical keys were checked
separately with integer calculations.

Full corpus after this batch: 171 question-bank files, 5,330 questions, zero
duplicate IDs or text. Question QA, lint, asset QA, and the 983-page production
build pass.

## 2026-08-09 - SSC Selection Post (Batch 32, live session)

Added the three separate Phase XIV/2026 Selection Posts CBEs: Matriculation,
Higher Secondary (10+2), and Graduation and Above. Each level now has one
100-question full mock, four 25-question sectional tests, and two mixed quick
tests. Every full mock carries 200 marks, runs for 60 minutes with four locked
15-minute sections, and deducts 0.50 marks for a wrong answer.

Built 300 original questions across three level-specific banks. The four common
sections are General Intelligence, General Awareness, Quantitative Aptitude,
and English Language. The Graduation mock keeps Quantitative Aptitude at Class
10 standard as the official notice requires, while its other sections are set
at graduation level. The Matriculation mock clearly discloses that figure-based
non-verbal items are represented by text-compatible logic questions in this
initial release. Post-specific qualifying skill tests are not modeled because
they vary by post code.

The first corpus audit found 17 question-text collisions with earlier banks;
all stems were rewritten. Manual review also corrected an inconsistent coding
example, an alphabet-order answer, an ambiguous set relation, a wrong coded
answer, an invalid number-series pattern, a remainder edge case, and an unclear
reported-speech pronoun before the final audit.

Full corpus after this batch: 168 question-bank files, 5,255 questions, zero
duplicate IDs or text, and balanced answer positions of 25/25/25/25 in each new
bank. Question QA, lint, and the 959-page production build all pass.

## 2026-08-09 - SSC Combined Hindi Translators (Batch 31, live session)

Added SSC Combined Hindi Translators Paper I with 100 General Hindi and 100
General English questions. The package includes 1 full mock, 2 sectional
tests, and 3 quick tests. The full mock follows the official 2026 pattern:
200 questions, 200 marks, 120 minutes, separate 60-minute timers for each
part, and a 0.25-mark deduction for every wrong answer.

Paper II is deliberately excluded. It is a descriptive paper containing
Hindi-to-English and English-to-Hindi translation plus one essay in each
language, so the current multiple-choice interface cannot reproduce it
accurately.

The first automated audit passed with zero duplicate IDs or question text.
Manual language review then caught two Hindi distractors that could also be
accepted as valid synonyms and two English stems that needed tighter wording;
all four were corrected before the final audit. Answer positions are balanced
at 25/25/25/25 in both 100-question banks.

Full corpus after this batch: 165 question-bank files, 4,955 questions, zero
duplicate IDs or text, zero answer-balance failures. Question QA, lint, and the
905-page production build all pass.

## 2026-08-07 — SSC Stenographer Grade C & D (Batch 30, live session)

Added SSC Stenographer Grade C & D: Computer Based Examination (General
Intelligence and Reasoning 50Q, General Awareness 50Q, English Language and
Comprehension 100Q, 1 full mock + 3 sectionals, 200Q/200 marks/120 min,
single composite timer, 0.25 negative marking), per the official
Stenographer Grade 'C' & 'D' Examination 2025 notification PDF. This is the
largest single-exam content batch of the project so far, 200 original
questions in one run, split roughly 15/12/12/11 across Error Spotting/Fill
in the Blanks/Synonym/Antonym for the first half of the English section and
8/8/8/6/6/6/5/3 across One-word Substitution/Idioms/Sentence Improvement/
Para-jumbles/Active-Passive Voice/Direct-Indirect Speech/Reading
Comprehension/Vocabulary in Context for the second half, the richest
English Language topic spread built for this site yet.

The Stenography Skill Test (10-minute dictation and transcription, 100 WPM
for Grade C, 80 WPM for Grade D) is excluded since it is not a
multiple-choice format, following the same non-MCQ-stage exclusion pattern
as IBPS PO/NIACL AO's Descriptive Papers; the CBT's normalized score alone
decides the Skill Test shortlist and final merit, so nothing is lost by
excluding it from the mock.

Twenty-five cross-corpus collisions across the reasoning and general
awareness banks, resolved in two rounds after the first fix pass
introduced three cascade collisions, the same pattern documented in
earlier batches. Also caught a self-inflicted within-file duplicate: two
pairs of General Intelligence questions reused the identical generic
stems "Select the odd one out from the following:" and "Select the odd
one out from the following units:", the same SSC CPO Spelling-Correction
class of bug now seen a third time this project; each was given a
distinct qualifying phrase. The English Language bank, being entirely new
territory (grammar/vocabulary rather than reasoning or GK), had zero
collisions on the first pass.

All three new banks needed full answer-position rebalancing: General
Intelligence and Reasoning from 20/5/15/10 to 13/12/12/13, General
Awareness from 33/12/4/1 to 12/13/12/13, and English Language and
Comprehension from 31/59/10/0 to a perfect 25/25/25/25, the largest single
rebalancing pass of the project (40 option-array moves in the English
file alone), done as direct option-array edits.

Full corpus after this batch: 163 question-bank files, 4,755 questions,
zero duplicate IDs or text, zero answer-balance failures (`qa:questions`
clean run).

## 2026-08-07 — SSC Junior Engineer (Batch 29, live session)

Added SSC Junior Engineer: Paper I (General Intelligence and Reasoning 50Q,
General Awareness 50Q, 1 full mock + 2 sectionals, 100Q/100 marks/120 min,
single composite timer, 0.25 negative marking), per the official SSC JE 2025
notification PDF.

**Primary source corrected two wrong claims repeated across secondary
aggregator sites.** Several sites (careerpower.in, adda247, testbook,
sscadda) state that Paper I includes a 100-question Technical section, and
that Paper II is a "descriptive" or "conventional" paper. Fetching and
parsing the actual notification PDF (`pdftotext`, cross-checked in both
layout and plain modes against a garbled table) disproved both: Paper I is
only GI&R (50Q/50 marks) plus GA (50Q/50 marks), with no Technical
component at all, and Paper II's own clause 13.3 states "Paper-I &
Paper-II will consist of Objective Type, Multiple-Choice Questions only."
Paper II (100Q/300 marks, discipline-specific General Engineering) is
still excluded from this site since the syllabus varies by candidate's
Civil, Electrical, or Mechanical stream, but the exclusion note now
correctly describes it as objective, not descriptive, and both papers'
normalized scores together decide the final merit list. This is a case
study for always verifying against the primary source PDF rather than
trusting aggregator claims wholesale, even when several of them agree with
each other.

Paper I turned out to be a clean, fully self-contained, single-stage
pattern, no partial-paper exclusion needed the way RRB ALP and RRB
Paramedical required, since the exclusion here only concerns the separate
Paper II.

Six initial cross-corpus collisions, resolved in one round. Both banks
also needed answer-position rebalancing (GIR from an unbalanced starting
distribution to 13/12/13/12; GA from 6/36/7/1 to 12/13/12/13), applied as
direct option-array edits, plus one self-inflicted issue caught during
writing: three General Intelligence questions reused the identical stem
"Which of the following is different from the rest?", a within-file
duplicate matching the SSC CPO Spelling-Correction pattern already
documented in project memory; each was rewritten with a stem tied to its
actual content.

Full corpus after this batch: 160 question-bank files, 4,555 questions,
zero duplicate IDs or text, zero answer-balance failures (`qa:questions`
clean run).

## 2026-08-07 — RPF Sub-Inspector (Batch 28, live session)

Added RPF Sub-Inspector: CBT (Arithmetic 35Q, General Intelligence and Reasoning
35Q, General Awareness 50Q, 1 full mock + 3 sectionals, 120Q/120 marks/90 min,
single composite timer, 1/3 negative marking), per the official CEN No. RPF
01/2024 notification. Same section structure and CEN family as RPF Constable
(already live), but the SI notification explicitly sets the standard at
graduation level, so every question was written fresh at that level rather
than reused from Constable's bank.

The primary source PDF (CEN 01/2024, Sub-Inspector) confirmed the exact
section split, 1/3 negative marking, and minimum pass percentages (UR/EWS/
OBC-NCL 35%, SC/ST 30%), which differ from RPF Constable's own cutoffs, so
these were written from the SI-specific document rather than assumed to
match Constable.

**Second-highest collision count this project after RPF Constable itself:**
25 initial collisions against the saturated Arithmetic/GI&R/GA corpus,
including several against RPF Constable's own bank (same syllabus, same
CEN family). Took two rounds after the first fix pass introduced 6 new
collisions, the same collision-cascade pattern documented in earlier
batches, resolved by re-checking the full corpus after every fix pass
rather than assuming one round was sufficient. All 3 banks also needed
full answer-position rebalancing (arithmetic 2/9/20/4, GA 5/27/15/3,
GI&R 6/14/11/4 before fixing), applied as direct option-array edits rather
than a regex rebalance script, since the content includes currency symbols,
exponents, and square-root signs that a naive comma-split regex would
mishandle.

Full corpus after this batch: 158 question-bank files, 4,455 questions,
zero duplicate IDs or text, zero answer-balance failures (`qa:questions`
clean run).

## 2026-08-07 — Blog Batch 3: rich content blocks (live session)

Replaced the flat `{heading?, paragraph}` blog body shape with a tagged union
(`BlogBlock` in `src/lib/blog.ts`): `paragraph`, `takeaways`, `list`,
`callout`, `table`, and `diagram`. Rewrote all 11 existing posts to use it,
preserving every original fact, internal link, and FAQ verbatim, restructured
rather than rewritten.

User feedback that prompted this: posts read as walls of paragraphs, and
wanted "related photos" to make them more visually interesting. No stock
photography went in. Two reasons: it would clash with the monochrome ink
design system, and generic decorative stock photos of "students studying" are
exactly the kind of empty content Google's E-E-A-T guidance treats as a mild
negative signal now. Instead, built `src/components/blog/BlogDiagrams.tsx`,
7 original inline SVG diagrams in the site's own ink-50..900 palette (weekly
timetable grid, negative-marking number line, exam time-budget timeline,
section-accuracy bar chart, sectional-lock vs composite-timer comparison,
qualifying/merit funnel, banking-tier ladder) used across 7 of the 11 posts.
Each diagram visualizes the actual concept the post explains, not decoration.
correct/incorrect colors, reserved for the results screen, are never used in
these. The other 4 posts (the head-to-head comparison and guide posts) use a
`table` block instead, since tabular content extracts better for AEO than an
illustration would.

Every callout block is an exact excerpt from the same post's own paragraph
text, not new invented copy, standard pull-quote practice. Every post now
opens with a `takeaways` box (except the listicle post, which uses an
ordered `list` instead) so a skimmer gets the answer before the detail.

Also added a small monochrome category icon (4 icons, one per blog category)
to the blog listing cards, so the index page isn't pure text either.

Verification: `tsc --noEmit`, `npm run lint`, `npm run build` (full static
export, 823 pages) all clean. Dash-scanned every new/changed file (zero
em/en dashes). Browser-verified 3 posts covering all 6 new block types
(takeaways, list, diagram, callout, table) plus the listing page; confirmed
the diagram SVGs scale correctly on a 375px mobile viewport with no
horizontal page overflow, and the table wrapper's `overflow-x-auto` doesn't
force the page to scroll. No new console errors beyond the pre-existing
favicon-class 404s.

## 2026-08-07 — RRB Paramedical Categories (Batch 27, live session)

Added RRB Paramedical Categories: a single CBT stage (General Awareness 10 Q, General
Arithmetic and General Intelligence and Reasoning combined into one 10-question section as per
the official pattern, General Science 10 Q — 3 sectional tests, 1/3 negative marking), per the
official CEN 03/2025 notification. Professional Ability, 70 of the 100 questions on the real
exam, is not modeled.

**First exam on this site with no full-length mock.** Professional Ability covers roughly 7 to
9 distinct posts (Staff Nurse, Pharmacist, Laboratory Assistant, Radiographer, ECG Technician,
and others), each with its own professional and technical syllabus. There is no common-syllabus
content that would be accurate for every candidate under one MCQ bank, so building a "full mock"
would mean either fabricating generic content and mislabeling it as Professional Ability, or
picking one post's syllabus and silently misrepresenting the other 8. Both were rejected. I
raised this with the user via `AskUserQuestion` before writing any content; the user's response
("you tell me how it should be handeled") delegated the decision back to me rather than picking
one of the three offered options, so I went with my own recommendation: build only the three
sections common to every post, as sectional-only tests, with no full mock and a clear stage-level
`note` explaining the exclusion and the 30-of-100 question coverage. Confirmed via code reading
(and a mock-test hub page render) that the site's dynamic filter-tab logic in `TestListClient.tsx`
degrades gracefully with zero full-length tests: the "Full mocks" tab and the filter bar itself
simply don't render. FAQ schema is likewise not added for this exam, since the `FULL_MOCK_FAQS`
mechanism on the test instructions page is gated to `kind: 'full-length'` tests specifically,
which this exam correctly has none of.

**Collided with the site's own earlier content from this same session.** Of 5 initial
collisions, one (an SI-unit-of-electric-resistance question) re-collided a second time after
its first rewrite, because the replacement phrasing happened to match content this same session
had already written for RRB ALP's Basic Science and Engineering bank earlier in the day. A third,
distinct phrasing (`'Which of the following is the SI unit of electric resistance?'`) finally
cleared the full-corpus check. Reinforces the standing lesson that a replacement chosen to dodge
one collision is not verified safe until it's checked against the entire corpus, including
content written in the same session. 2 of 3 new bank files needed answer-position rebalancing.

Full corpus after this batch: 155 question-bank files, 4,335 questions, zero duplicate IDs or
text, zero answer-balance failures (`qa:questions` clean run).

## 2026-08-07 — RRB Technician (Batch 26, live session)

Added RRB Technician: Grade I Signal CBT (General Awareness 10 Q, General Intelligence and
Reasoning 15 Q, Basics of Computers and Applications 20 Q, Mathematics 20 Q, Basic Science
and Engineering 35 Q — 1 full mock, 100 Q/100 marks/90 min, single composite timer) and
Grade III CBT (Mathematics 25 Q, General Intelligence and Reasoning 25 Q, General Science
40 Q, General Awareness 10 Q — 1 full mock, 100 Q/100 marks/90 min, single composite timer).
9 sectionals total across both stages, 1/3 negative marking, 200 questions overall, per the
official CEN 02/2025 notification, which for once tabulated an exact subject-wise question
count for both pay levels rather than leaving it to be inferred.

**Simplest RRB selection process modeled so far.** Unlike ALP (CBT 1 screening + CBT 2 + Part
B + CBAT), Technician has just one CBT per pay level: candidates equal to the number of
notified vacancies are shortlisted directly for Document Verification from CBT marks and
merit, with no second CBT and no skill test. This made the exam-pattern note far shorter than
recent RRB batches, and meant every question written maps to marks that count in the final
panel, none of it screening-only.

**Two pay levels, two distinct syllabi under one CEN, modeled as two stages.** Grade I Signal
and Grade III share the CEN number but have genuinely different subject lists: Grade I
Signal's Mathematics syllabus is technical-college level (Quadratic Equations, Arithmetic
Progression, Co-ordinate Geometry, Sets, Probability) versus Grade III's standard competitive-
exam syllabus (BODMAS, LCM/HCF, Time and Work, Age Calculations), and Grade I Signal adds two
subjects Grade III doesn't have at all (Basics of Computers and Applications, and an
Electricity/Magnetism/Electronics-heavy Basic Science and Engineering going well past ALP's
simpler version into Ohm's Law circuits, Faraday's Law, digital electronics, and CRO/transducer
measurement). Modeled as two stages with named `fullMockLayouts` consts, same pattern as ALP's
two-shape full mocks.

**Lowest collision count of any RRB-family batch: 10, all fixed in one pass, zero cascade.**
Writing fresh phrasing and numbers from the start (rather than reusing prior batches' patterns)
kept the collision count well below ALP's 23, even with 200 new questions landing in the same
saturated Math/Reasoning/GS/GA territory. Basics of Computers and Applications and the deeper
Electricity/Electronics content in Basic Science and Engineering had almost no overlap with
the existing corpus, similar to how RBI Grade B's Banking Awareness leaned into under-used
territory in Batch 19.

**HTTPS caught immediately this time.** After the ALP batch's provenance failure from a plain
`http://` source URL, this batch's source URLs were written as `https://` from the first draft,
and `qa:questions` reported zero provenance errors on the first run.

Full corpus after this batch: 152 question-bank files, 4,305 questions, zero duplicate IDs
or text, zero answer-balance failures (`qa:questions` clean run).

## 2026-08-07 — RRB Assistant Loco Pilot (Batch 25, live session)

Added RRB ALP: CBT 1 (Mathematics 20 Q, Mental Ability 25 Q, General Science 20 Q, General
Awareness 10 Q — 1 full mock, 75 Q/75 marks/60 min, single composite timer, screening only)
and CBT 2 Part A (Mathematics 25 Q, General Intelligence and Reasoning 25 Q, Basic Science
and Engineering 50 Q — 1 full mock, 100 Q/100 marks/90 min, single composite timer). 7
sectionals total across both stages, 1/3 negative marking throughout, per the official CEN
01/2025 notification.

**First exam where a section is excluded for a reason other than "not multiple-choice."**
CBT 2 Part B is a 75-question, 60-minute qualifying trade test, but its content is not a
fixed common syllabus: each candidate answers questions from their own individual ITI trade
or engineering discipline (Electrician, Fitter, Mechanic, and a dozen others), as assigned by
the Directorate General of Training. Every prior non-MCQ or descriptive-paper exclusion on
this site (IBPS PO Mains Descriptive, NIACL AO Mains Descriptive) was excluded because the
format itself isn't MCQ; this is the first case where the content is trade-variable rather
than a single shared syllabus, so it cannot be modeled as one general-purpose mock even
though it IS technically multiple-choice. The subsequent Computer Based Aptitude Test (CBAT)
was excluded for the more familiar reason: it's a psychometric battery (memory, following
directions, perceptual speed), not a knowledge-based test.

**Official notification omits per-subject question counts.** Unlike most CEN notifications,
which tabulate exact questions-per-section, this one lists only the stage-level totals (CBT
1: 75Q; CBT 2 Part A: 100Q) plus the syllabus topics per section, with no official breakdown
of how many questions come from each subject. The per-subject split used here (CBT 1: Math
20/Mental Ability 25/General Science 20/General Awareness 10; CBT 2 Part A: Math 25/GI&R
25/Basic Science and Engineering 50) follows the pattern consistently reported across
multiple independent secondary sources for actually-conducted CEN 01/2025 papers, cross-
checked against each other since they didn't all agree on first pass (one source wrongly
omitted General Awareness from CBT 1 entirely, contradicted by three others).

**Highest single-batch collision count yet: 23, all fixed in one pass.** RRB ALP's
Mathematics/Reasoning/General Science content overlaps heavily with the already-saturated
RRB NTPC, RRB Group D, RRB JE, and RPF Constable banks. Fixed with fresh numbers/phrasing,
verified via a from-scratch collision script; one cascade round found 2 new collisions from
the first fix pass, resolved on the second recheck. Basic Science and Engineering is a new
topic area for this site (Engineering Drawing, Units and Measurements, Basic Electricity,
Levers and Simple Machines, Occupational Safety and Health) and had a much lower collision
rate, similar to how RBI Grade B leaned into under-used Banking Awareness territory.

**HTTPS enforcement caught by qa:questions, not by review.** The official source PDF is
hosted at a plain `http://` URL; the audit script's provenance check requires `https://`.
Confirmed the HTTPS variant of the same URL serves the identical file before switching all
7 files' source URLs over.

Full corpus after this batch: 143 question-bank files, 4,105 questions, zero duplicate IDs
or text, zero answer-balance failures (`qa:questions` clean run).

## 2026-08-07 — NIACL AO (Batch 24, live session)

Added NIACL Administrative Officer (Generalist), Scale I: Prelims (English Language 30 Q,
Reasoning Ability 35 Q, Quantitative Aptitude 35 Q — 1 full mock, 100 Q/100 marks/60 min,
sectional lock, 20 min/section) and Mains (Reasoning 50 Q, English Language 50 Q, General
Awareness 50 Q, Quantitative Aptitude 50 Q — 1 full mock, 200 Q/200 marks/150 min, sectional
lock, 40/40/30/40 min/section). 7 sectionals total across both stages, 0.25 negative marking
throughout.

**Prelims is fully qualifying, unlike LIC AAO's per-section split.** NIACL AO Prelims marks
do not carry forward into the final merit list at all: the stage exists only to shortlist
roughly 15x the vacancy count into Mains. This is a cleaner variant of the qualifying-section
pattern established in the LIC AAO batch (where one section inside a locked paper was
qualifying while the other two counted) — here the entire Prelims stage is qualifying, all
three sections. Modelled with a stage-level `note` explaining the mechanics; no schema change
needed.

**Non-MCQ Descriptive Test exclusion, same precedent as IBPS PO Mains.** The Main Examination
includes a separate 30-minute Descriptive Test (Letter Writing 10 + Essay 20 = 30 marks) that
candidates must qualify but which does not count toward shortlisting or final selection. Since
it is not multiple-choice, it is excluded from the mock entirely, consistent with how the IBPS
PO Mains Descriptive Paper was handled. Final selection is the Main Examination objective
score plus interview; Prelims marks play no role.

**Two full-mock shapes under one exam slug.** NIACL AO is the second exam on this site (after
SEBI Grade A) where a single exam has two full mocks with genuinely different shapes: Prelims
(100 Q, 3 sections, uniform 20-min sectional lock) and Mains (200 Q, 4 sections, non-uniform
40/40/30/40-min sectional lock via the `sectionDurations` array field). The generic
`fullMockLayouts` lookup in `questions.ts` keys by exam slug only, so it breaks when one slug
maps to two shapes. Fixed the same way as SEBI: named layout consts (`niaclAoPrelimsLayout`,
`niaclAoMainsLayout`) with explicit `testId.includes(...)` checks ahead of the generic
fallback in the validation loop.

**Answer-balance oversight, caught by `qa:questions` not manual review.** Balanced the 4
Mains banks against the audit script's "max-min across four answer positions must be ≤3"
check while authoring them, but forgot to run the same check on the 3 Prelims banks until the
official `npm run qa:questions` audit flagged all three as "too predictable" (English 5/15/10/0,
Quant 1/7/27/0, Reasoning 17/8/7/3). Fixed by reordering each flagged question's `options`
array and updating `correctIndex` to match, verified via a Node script reading each file with
`ts.transpileModule` + `vm.runInContext`. Final distributions: English 7/8/8/7, Quant 9/9/9/8,
Reasoning 8/9/9/9. Lesson: run the full balance check on every new file in a batch, not just
the ones being actively worked on, before considering content-writing done.

Full corpus after this batch: 136 question-bank files, 3,930 questions, zero duplicate IDs
or text, zero answer-balance failures (`qa:questions` clean run).

## 2026-08-06 — LIC AAO (Batch 23, live session)

Added LIC AAO (Generalist) Prelims: Reasoning Ability (35 Q), Quantitative Aptitude (35 Q),
English Language (30 Q) — wired into 1 full mock (100 Q/100 marks/60 min) + 3 sectionals.

**New pattern variant: a qualifying section inside a sectional-locked paper.** Every prior
qualifying/merit split on this site was either a fully separate qualifying stage (RBI
Assistant, SBI PO, SBI Clerk Prelims) or a qualifying section living inside a single
composite-timer paper (NABARD, SIDBI Phase I). LIC AAO Prelims is neither: it is sectional
locked (each of the three sections gets its own fixed 20-minute window, no moving between
sections once a timer ends) *and* one of those three locked sections (English Language,
30 marks) is qualifying only, its marks scored but excluded from the ranking that decides
advancement to Mains. Only Reasoning Ability and Quantitative Aptitude (70 marks combined)
count. Modelled with the existing `sectionDuration` sectional-lock mechanism plus a `note`
on the stage pattern explaining the qualifying carve-out; no new schema field was needed.

**Zero negative marking.** Unlike every other Banking Prelims paper on this site (which use
0.25 negative marking), LIC AAO Prelims deducts nothing for a wrong answer, per the official
2025-26 recruitment notification. Modelled as `negativeMarking: 0` throughout.

**Collision-cascade lesson, reinforced a second time.** The first full-corpus collision pass
found 16 collisions between newly written LIC AAO questions and the existing ~126-bank
corpus (recycled CI figures, number-series patterns, and antonym word pairs are the most
collision-prone question types on this site). Fixing those 16 introduced 5 *new* collisions,
because the replacement numbers/words happened to already exist elsewhere in the corpus.
A third full-corpus recheck was needed before the fixes actually landed clean. This confirms
the standing project lesson: a replacement value chosen to dodge one collision is not
verified safe until it is checked against the *entire* corpus, not just the one file it
collided with. Ran the check three times total this batch; zero collisions on the final pass.

## 2026-08-06 — Vercel auto-deploy pipeline fixed

The Vercel↔GitHub connection had gone stale: pushes to `main` stopped triggering builds
somewhere around Batch 18, with no error and no failed-deployment record, they just never
reached Vercel at all. Root cause: the GitHub App's webhook trigger was set to `pull_request`
only, which never fires on a direct push to `main` (this project pushes straight to `main`,
no PRs). Fixed by reconnecting via Vercel's Connect (Beta) flow and explicitly enabling the
`push` trigger event. This commit is the test push confirming it's fixed.

## 2026-08-06 — SIDBI Grade A & B (Batch 22, live session)

Added SIDBI Grade A & B Phase I (General stream): English Language (30 Q), Reasoning
Aptitude (25 Q), Quantitative Aptitude (25 Q), Computer Knowledge (20 Q), General Awareness
(20 Q), MSMEs: Policy, Regulatory and Legal Framework — Finance and Management (30 Q),
Stream Specific Test (50 Q) — wired into 1 full mock (200 Q/200 marks/120 min, single
composite timer, no sectional lock) + 7 sectionals. Third exam on this site (after NABARD
Grade A) with a qualifying/merit two-tier structure inside one combined paper: English
Language, Reasoning Aptitude, Quantitative Aptitude, and Computer Knowledge are qualifying
only, while General Awareness, MSMEs Policy/Finance/Management, and the Stream Specific Test
form the 100-of-200-mark merit section that alone decides Phase II shortlisting — modelled
as one `TestStage` (unlike SEBI's two-separate-papers structure) since SIDBI's Phase I is
genuinely a single 120-minute paper.

**Ambiguous primary-source PDF, resolved via cross-source triangulation (new technique for
this project):** `pdftotext` in both `-layout` and plain mode produced a genuinely
unparseable per-section marks table (questions summed cleanly to 200, but the exact marks
split could be read multiple conflicting ways). Every prior batch has found at least one
`pdftotext` mode clean; this was the first time both were ambiguous. Resolved by
cross-checking two independent secondary sources (practicemock.com's clean table and
edutap.in's "Merit Section: 100 marks, Non-Merit Section: 100 marks" figure) and confirming
internal arithmetic consistency — both only make sense under a uniform 1-mark-per-question
hypothesis with standard 0.25 negative marking, which is what was used.

**Caught a live 2026 regulatory change via proactive fact-checking rather than trusting
training-data memory:** RBI's collateral-free MSE loan limit, stable at ₹10 lakh since 2010,
was raised to ₹20 lakh effective 1 April 2026 under the "Lending to MSME Sector (Amendment)
Directions, 2026" — a targeted search caught this before the (otherwise stale) ₹10 lakh
figure was written into a General Awareness question. Also used the 2025-revised MSME
classification thresholds (2.5x/2x increase effective 1 April 2025) and the post-October-2022
NBFC Scale-Based Regulation framework (₹1,000cr Base Layer threshold) rather than the older,
now-superseded ₹500cr NBFC-ND-SI figure. Worth repeating as a standing lesson: every specific
regulatory figure needs fresh verification, not recall, especially with this site's
checkedOn dates running ahead of the model's training cutoff.

**`rebalance.mjs`'s mixed-quote crash recurred** (same bug class first hit in the SEBI
batch) — option arrays mixing single- and double-quoted strings broke the script's regex
parser. Fixed by writing a more general, reusable `normalize-quotes.mjs` scratch script that
parses `options: [...]` character-by-character respecting escapes and rewrites every element
single-quoted, run against the 3 affected files (1 array in computer-knowledge, 1 in
msme-policy-finance, 17 in stream-specific-general) before rerunning `rebalance.mjs`. Faster
and more reusable than SEBI's ad hoc line-by-line fix.

**Seven post-wiring QA issues, all fixed:** a duplicated misspelled option in an English
spelling-correction question (authoring typo, same bug class as NABARD's earlier
"Comission" duplicate); three cross-batch exact-duplicate collisions in the MSME
Policy/Finance bank against SEBI's own Batch-21 Management and Costing banks (Fayol's
functions, SWOT analysis, and "Contribution" in cost accounting — all generic textbook
definitions, swapped for Delegation of Authority, PESTLE analysis, and Opportunity Cost);
and three self-collisions within SIDBI's own Reasoning Aptitude bank, where all three
Classification questions used the identical stem "Which of the following does not belong
with the others?" (reworded to three distinct stems, one of which also turned out to
already exist verbatim in SEBI's Batch-21 reasoning bank and needed a second pass). Flags a
new collision class worth watching going forward: generic management/textbook-definition
questions (Fayol, SWOT, PESTLE, Contribution, Opportunity Cost, Delegation) are now
saturated across *multiple* Banking-category exams' Management/Finance sections, not just
within a single exam's own corpus — future batches touching Management/Finance content
should grep across the whole corpus, not just the current exam's existing banks.

**Verified:** all 126 banks / 3,530 questions pass `qa:questions` clean, answer positions
balanced per file, no duplicate IDs/text; `npm run build` clean static export (new
`/sidbi-grade-a-b` routes: 1 full mock + 7 sectionals). Browser walkthrough confirmed the
mock-test hub renders Phase I/Phase II tabs (Phase II correctly "review pending"), all 8
tests listed with correct Q-counts/durations, the exam-pattern page matches the official
qualifying/merit split, the full mock's composite 120-minute timer has no section-lock UI,
free navigation jumps cleanly from Q1 to Q180 (Stream Specific Test) without resetting the
timer, and the 200-question/200-mark/0.25-negative-marking scoring config checks out
programmatically. Added a 5-question FAQ set and an `llms.txt` line.

## 2026-08-06 — SEBI Grade A (Batch 21, live session)

Added SEBI Grade A Phase I: 11 original banks totalling 130 questions, modelled as two
separately-timed papers within a single Phase I selection round — Paper 1 (General
Awareness 20, English Language 20, Quantitative Aptitude 20, Test of Reasoning 20 = 80Q)
and Paper 2, General stream (Commerce 8, Accountancy 7, Management 7, Finance 8, Costing 7,
Companies Act 6, Economics 7 = 50Q). Wired as 2 separate `TestStage`s (`phase-1-paper-1`,
`phase-1-paper-2`) rather than one combined stage, each with its own full mock + sectionals.

**Source:** SEBI's own 2025 recruitment notification (`sebi.gov.in/sebi_data/careerfiles/
oct-2025/1761782417659.pdf`), parsed with `pdftotext -layout`. The 2025 PDF gives marks,
duration, and cut-offs per paper but not question counts — cross-verified those against
SEBI's own 2023 Legal-stream "Information Handout" PDF (a different, more detailed document
type this project hadn't used before — an actual candidate-facing exam-interface guide with
a full pattern table), which confirmed the exact split still in force: Paper 1 80Q/100
marks/60 min (20 each of GA/English/Quant/Reasoning), Paper 2 (stream-specific) 50Q/100
marks/40 min. An even older 2018 pattern PDF was checked and correctly discarded — it
described a since-abandoned 5-section/200Q single-paper structure, a reminder to always
confirm which pattern *generation* a source PDF belongs to before trusting it.

**New modelling decision — two genuinely separate papers, not one multi-section stage:**
unlike RBI Grade B/SSC CPO/IBPS SO (one paper with several separately-locked sections),
SEBI's own Paper 1 explicitly states "no sectional cut-off shall be there" — the four Paper 1
subjects share one open 60-minute block with free movement, while Paper 1 and Paper 2
themselves are the only real dividing line (separately timed, separate cut-offs: 30% / 40% /
aggregate 40%). Modelled each paper as its own composite-timer `TestStage` (following the
UPSC CSE GS Paper I / CSAT Paper II precedent for genuinely distinct objective papers) rather
than force-fitting Paper 1's four subjects into individually-locked sections, which would
have misrepresented the real exam's free-movement rule. Required an explicit
`sebi-grade-a/phase-1-paper-1-full-mock` / `-paper-2-full-mock` branch in the full-mock
section-order validator, mirroring how `upsc-cse/paper-1-full-mock` and `-paper-2-full-mock`
are special-cased ahead of the generic per-exam-slug layout lookup.

**Fractional marks, again:** Paper 1 questions carry 1.25 marks each (100 marks / 80
questions) with 0.3125 negative marking; Paper 2 carries 2 marks each (100/50) with 0.5
negative marking — both exact quarters per SEBI's stated "1/4th of marks assigned to the
question" rule. Same `marksPerCorrect`/`negativeMarking` override mechanism introduced for
IBPS SO in Batch 18 handled this without any engine changes.

**Collision-avoidance:** Paper 2's seven General-stream subjects (Commerce, Accountancy,
Management, Finance, Costing, Companies Act, Economics) are entirely new subject areas for
this project — zero prior collision risk, similar to NABARD's Economic and Social Issues /
Agriculture sections. Paper 1's GA/English/Quant/Reasoning sections used SEBI/stock-market/
corporate-finance-flavoured content to reduce (not eliminate) collision risk against the
now heavily-saturated generic-aptitude corpus.

**Cross-file duplicate collisions caught by `qa:questions` (all against pre-existing corpus
content):** a synonym ("PRUDENT"), an idiom ("cut corners"), a Compound Interest question,
and an LCM question all collided with IBPS SO / IBPS RRB Officer Scale I banks — replaced
with a different word/idiom/numbers. A GDP definition question collided with IBPS PO Mains
General Awareness — reworded the question stem while keeping the same (correct) answer. Also
caught two *self*-collisions within this batch's own banks: two Classification questions in
the Reasoning bank both used the generic stem "Which of the following does not belong with
the others?" (the dedup check keys purely on question text, not options, so identical stems
collide even against each other) — reworded one to "Identify the odd one out from the
following." A genuine authoring bug was also caught this way: a spelling-correction question
had the same misspelling ("Comission") duplicated as two of its four options — the
`qa:questions` "duplicate options" check flagged it directly.

**Mixed-quote authoring bug:** several Paper 2 option arrays mixed single- and double-quoted
strings (to avoid escaping apostrophes, e.g. `"The business's overall profitability"`) —
harmless to TypeScript, but it silently breaks the `rebalance.mjs` scratch script's regex,
which only matches single-quoted strings and undercounts the options array. The script
throws a clear "expected 4 options, got N" error rather than corrupting the file, but the fix
is to normalise every option string to single quotes with an escaped apostrophe (`'...\'s...'`)
before running the script, not after — worth remembering as a pre-check for future batches
with quote-heavy content (accountancy/finance definitions lean on possessives a lot).

**Verified:** all 119 banks / 3,330 questions pass `qa:questions` clean (no duplicate IDs or
text); `npm run build` clean static export with all 14 SEBI test routes present; browser
walkthrough confirmed both papers' independent composite timers (60 min / 40 min, each with
free cross-section navigation and no lock), and correct fractional scoring on both — Paper 1:
1 correct (1.25) + 1 wrong (−0.3125) = 0.94/100; Paper 2: 1 correct (2.00) = 2.00/100 — with
section-wise marks caps matching the official per-subject question counts on both papers.

**Batch roadmap checkbox:** ticked in the same commit.

## 2026-08-06 — NABARD Grade A (Batch 20, live session)

Added NABARD Grade A Phase I: 8 original banks totalling 200 questions — Reasoning (20),
English Language (30), Computer Knowledge (20), Quantitative Aptitude (20), Decision Making
(10), General Awareness (20), Economic and Social Issues (40), Agriculture and Rural
Development (40) — wired into 1 full mock + 8 sectional tests.

**Source:** NABARD's own advertisement PDF (`0512255230Final Advertisement Grade A (RDBS,
Legal, P&SS) 2025 (1).pdf`), parsed directly with plain `pdftotext` (no `-layout` flag — that
flag had scrambled a similar table for IBPS SO in an earlier batch, but here plain
`pdftotext` gave the cleaner result; worth trying both when a table looks garbled). This
resolved two conflicting automated WebFetch summaries — one described Phase II by mistake,
the other undercounted the pattern as 3 sections/120Q/60 min — against the authoritative
8-section/200Q/200-marks/120-min table with the exact per-section breakdown (20/30/20/20/
10/20/40/40).

**New pattern type for this project — qualifying/merit split within one paper:** unlike any
prior exam, NABARD's Phase I has eight tests split into two tiers *inside the same objective
paper*: Reasoning, English Language, Computer Knowledge, Quantitative Aptitude, and Decision
Making are qualifying only (clear a minimum cut-off, but marks don't count toward ranking),
while General Awareness, Economic and Social Issues, and Agriculture and Rural Development
(the three largest sections) are the merit section whose marks alone decide Phase II
shortlisting. This needed no scoring-engine changes — every question still carries a uniform
1 mark and 0.25 negative marking — so it's captured purely in the pattern's `note` field and
surfaced on the exam-pattern page and mock-test hub. Worth reusing this same modeling
approach if a future exam (e.g. SEBI Grade A) turns out to have a similar split.

**Timer:** single composite 120-minute timer across all eight sections (matching the RPF
Constable / RRB JE precedent, not the SSC CPO / IBPS SO / RBI Grade B sectional-lock
precedent) — confirmed in the browser walkthrough by jumping directly from question 1
(Reasoning) to question 195 (Agriculture and Rural Development) mid-attempt with no lock and
the same countdown continuing. Sectional practice tests use proportional slices of the
120-minute total (rate = 0.6 min/question): 12/18/12/12/6/12/24/24, summing exactly to 120.

**Collision-avoidance:** leaned into NABARD-specific rural-development, agricultural-policy,
and cooperative-banking content for the two largest sections (Economic and Social Issues,
Agriculture and Rural Development) — subject matter almost entirely untouched by the rest of
the corpus — following the same strategy that worked for RPF Constable's Banking Awareness GA
section and RBI Grade B's own approach.

**Errors caught during self-review (before running `qa:questions`):** a self-contradictory
circular-seating puzzle with two clues placing different people in the same seat (removed the
conflicting clue); two reasoning items and one arithmetic item with leftover scratch-reasoning
text and a `correctIndex` that didn't match the cleanly re-derived answer (Data Sufficiency,
a distance puzzle, and a Compound Interest question); a coding-decoding question with a
tense mismatch between the question and its code table; a stray invalid `topic2: ''` field
left in from drafting. Consistent with this project's repeated finding that reasoning puzzles
and arithmetic items are the highest-error-rate content types — always re-derive every answer
before running the automated audit.

**Cross-file duplicate collisions caught by `qa:questions` (all against pre-existing corpus
content, all fixed by rewriting the newer NABARD side):** a number-series question identical
to one in IBPS RRB Office Assistant Reasoning; a Compound Interest and a "sum of first N
natural numbers" question identical to ones in RBI Grade B Quantitative Aptitude; an idiom,
two spelling-correction prompts, and a negative-inversion sentence-improvement question
identical to ones in RBI Grade B / SSC CPO English; and a "RBI was nationalised in which
year" GA fact identical to one in SSC CPO General Awareness. All replaced with different,
independently-verified content (different series, different numbers, different idiom,
reworded spelling prompts, a double-superlative grammar item, and a Payments Bank GA fact) —
answer-position rebalancing (via the `rebalance.mjs` scratch script) was re-verified afterward
and all 8 banks still land on their target near-even splits.

**Verified:** all 108 banks / 3,200 questions pass `qa:questions` clean (no duplicate IDs or
text); `npm run build` clean static export with all 9 NABARD test routes present; browser
walkthrough confirmed the mock-test hub (9 tests, correct Q-counts/durations, qualifying/merit
note), the exam-pattern page (8-row section table), the composite no-lock timer, and correct
scoring (1 correct + 1 wrong → 0.75/200, with the Agriculture and Rural Development section
showing 1.00/40.00 and Reasoning showing -0.25/20.00 — matching the 1 mark / 0.25 negative
marking rule and the official section-wise caps).

**Batch roadmap checkbox:** ticked in the same commit.

## 2026-08-04 — IBPS RRB Office Assistant (Batch 10, live session)

Added IBPS RRB Office Assistant Prelims: Reasoning (40 Q) + Numerical Ability (40 Q), wired
into 1 full mock (80 Q, single combined 45-minute timer — no sectional lock, per the official
"composite time" pattern) + 2 sectionals + 2 quick timed tests.

**Source:** IBPS's own CRP-RRBs-XIV notification PDF (parsed directly with `pdftotext`, not
just aggregator sites) — confirmed the exact official table: Reasoning 40Q/40 marks/25 min,
Numerical Ability 40Q/40 marks/20 min, composite 45 min total, 0.25 negative marking.

**Errors caught and fixed during `qa:questions`:**
- A compound-interest question ("₹8,000 at 10% for 2 years") exactly duplicated an existing
  RRB NTPC Mathematics question — reworded with different numbers.
- An average question ("12, 18, 24, 30, 36") exactly duplicated an existing SSC CHSL
  Quantitative Aptitude question — reworded with different numbers.
- The first replacement for the CI question ("₹5,000 at 10% for 2 years") turned out to
  *also* already exist verbatim in the same SSC CHSL bank — a reminder that common textbook
  problem setups (round numbers, standard rates) collide easily across banks; the fix that
  finally worked used a more distinctive number set (₹12,000 at 5%).

**Verified:** all 60 banks / 1,790 questions pass `qa:questions` clean; `npm run build` clean
static export; browser walkthrough confirmed the combined-timer full mock (no "SECTION 1/2"
lock UI, correctly matching the composite-timer pattern) and correct scoring (1/80 → 1.00/80,
Reasoning section showing 1.00/40.00 matching the 40/40 split). Also noticed and fixed a real
gap from Batch 9: SSC MTS's full mock had never gotten a `FULL_MOCK_FAQS` entry — added it
alongside this batch's own FAQ entry.

**Batch roadmap checkbox:** ticked in the same commit.

## 2026-08-04 — Stale "practice demo" copy fix (quality-audit follow-up, live session)

A full-site quality audit found that homepage and every exam mock-test hub page still
referenced a "practice demo" content tier (FAQ answers, hero copy, trust metrics, meta
descriptions). Root cause: the 3 legacy `kind:'practice', status:'demo'` scaffold entries
were removed from all exams in earlier batches, and the batch workflow never creates new
demo placeholders — so the copy had gone stale describing a feature that no longer exists
anywhere on the live site.

**Fixed** (real, user-visible copy only — left untouched the dormant per-status fallback
branches in `TestRow.tsx`, `ExamCard.tsx`, and `test/[testId]/page.tsx`, which only render
if a test's `status` is ever non-`'checked'` again — currently unreachable but harmless):
- `src/app/layout.tsx` — default meta description.
- `src/app/[country]/page.tsx` — hero heading, trust-metric details (now dynamically
  reflect the live exam count instead of a hardcoded "SSC CGL Tier 1 pilot"), trust points,
  FAQ answers, meta description.
- `src/app/[country]/[exam]/mock-test/page.tsx` — hero paragraph, FAQ entries (swapped the
  now-moot "What is a practice demo?" for a scoring-explainer FAQ).

**Verified:** `npm run build` clean static export; browser walkthrough of the homepage and
the IBPS RRB Office Assistant mock-test hub confirmed the new copy renders correctly and no
"practice demo" string remains reachable in the live UI.

## 2026-08-05 — SSC GD Constable (Batch 11, live session)

Added SSC GD Constable CBE: General Intelligence and Reasoning (20 Q) + General Knowledge
and General Awareness (20 Q) + Elementary Mathematics (20 Q) + English/Hindi (20 Q), wired
into 1 full mock (80 Q, single combined 60-minute timer — no sectional lock) + 4 sectionals
+ 2 quick timed tests.

**Source:** SSC's own Constable (GD) 2026 notification PDF (`notice_01122025.pdf`, dated
1 December 2025 — parsed directly with `pdftotext`) — confirmed the exact official scheme
table: 80 questions / 160 marks (2 marks each) / 60 minutes / 0.25 negative marking, 4 parts
of 20 questions/40 marks each, Matriculation-level questions. Cross-checked against 3+
independent aggregator sources before trusting the pattern.

**Applied `SEO_PLAYBOOK.md` for the first time this batch** — and immediately hit its
central warning in practice: the "obvious" pool of common GK facts, spelling words, and
question-tag/grammar-stem clichés is now heavily saturated across the 10 existing exams'
English/GA banks. Real collisions caught and fixed during `qa:questions`:
- Math: a duplicate CI setup (₹6,000 at 20%, already used by IBPS RRB OA) needed a third,
  genuinely distinct number set (₹15,000 at 8% → ₹2,496); an average, a rectangle-area, and
  an HCF question all collided with existing SSC MTS/SSC CHSL/IBPS RRB OA questions on exact
  number reuse.
- Reasoning: two "classic" number-series patterns (doubling from 3, and the n²+1 pattern
  from 2,5,10,17,26) turned out to already exist verbatim elsewhere.
- English: the *generic instruction stems* themselves collided, not just the content —
  "Choose the correctly spelled word.", "Choose the grammatically correct sentence.", and
  "Which of the following sentences is grammatically correct?" are each already used once
  elsewhere in the corpus, so reusing them (even with different options) triggered
  duplicate-text detection. Classic spelling words (Receive, Definitely, Government,
  Necessary, Occurred, Separate, Accommodate) and question-tag templates are all already
  spoken for too. Resolution: replaced the colliding items entirely with genuinely different
  vocabulary-in-context, voice, and subject-verb-agreement questions rather than hunting for
  a 7th synonym of an already-used clichê — the more sustainable fix per the playbook's own
  guidance on Scaled-Content-Abuse risk.
- Answer-position balance also needed manual rebalancing in all 4 new banks (habitually
  placed correct answers in the same 1-2 option slots) — fixed by reordering options (never
  changing which value is correct) until each bank read 5/5/5/5 across A/B/C/D.

**Verified:** all 68 banks / 1,870 questions pass `qa:questions` clean; `npm run build` clean
static export (7 new routes: 1 full mock + 4 sectionals + 2 quick tests); browser walkthrough
confirmed the combined 60-minute timer (no section lock), correct 2-marks-per-question
scoring (1/80 → 2.00/160, each section capped at 40.00/40.00), and topic-wise breakdown all
render correctly. Added a 7-question FAQ set (exam-specific facts per `SEO_PLAYBOOK.md`
voice rules — level, timer shape, negative marking, and what happens after the CBE) and an
`llms.txt` line.

**Batch roadmap checkbox:** ticked in the same commit.

## 2026-08-05 — Post-Batch-11 SEO/AEO/GEO/UI-UX re-audit (live session)

Re-audited the whole site applying `SEO_PLAYBOOK.md` for the first time. Found and fixed one
real, site-wide AEO gap: the homepage and every exam's mock-test hub page (all 11 exams)
render a visible FAQ block in the UI but never emitted `FAQPage` JSON-LD for it — only the
per-test instructions page had FAQ schema. Added a reusable `faqPageSchema()` helper to
`src/lib/schema.ts` and wired it into both pages. Verified via the built static export that
`FAQPage` now appears in the JSON-LD on the homepage and on every exam's mock-test hub
(spot-checked SSC GD Constable, IBPS PO, SSC CGL).

Also checked: meta title/description length and uniqueness (consistent with existing
pattern, no regressions), sitemap includes the new exam, `qa:site` (lint + qa:questions +
qa:assets + build) passes clean end-to-end, and a mobile-viewport (375px) check of the
mock-test hub and the heaviest interactive page (test attempt/palette) confirmed no
horizontal overflow.

Deferred to a later pass, not fixed now: title tags across the site sit at 70-75 characters,
a little over Google's typical ~60-char SERP display cutoff — this is a pre-existing,
site-wide pattern (not something this batch introduced) and changing it means touching the
`pageMetadata()` title template used everywhere, which is a bigger, more deliberate change
than an audit fix-in-place; flag for the user before doing it broadly.

## 2026-08-05 — IBPS RRB Officer Scale I (Batch 12, live session)

Added IBPS RRB Officer Scale I Prelims: Reasoning (40 Q) + Quantitative Aptitude (40 Q),
wired into 1 full mock (80 Q, single combined 45-minute timer — no sectional lock, identical
composite-timer shape to the already-live IBPS RRB Office Assistant) + 2 sectionals + 2 quick
timed tests.

**Source:** the exact same CRP-RRBs-XIV notification PDF already used for IBPS RRB Office
Assistant — confirmed via `pdftotext` that it's a combined notification covering both Office
Assistant and Officer Scale I/II/III. Officer Scale I Prelims: 80Q/80 marks/45 min composite,
Reasoning (40Q/40M/25min) + Quantitative Aptitude (40Q/40M/20min), 0.25 negative marking.
Content pitched at graduate/officer difficulty (IBPS PO Prelims-equivalent), noticeably
harder than Office Assistant's clerical-level questions — called out explicitly in the FAQ.
Mains (200Q, 5 sections, non-uniform per-section marks) exists in the same notification but,
per established precedent (baseline = primary objective stage only), left as a
`review-pending` stub for a future deepening pass.

**Applied the `SEO_PLAYBOOK.md` collision lesson from Batch 11 proactively this time** —
batch-grepped every planned question against the full corpus *before* writing the files,
not after. Caught and fixed real collisions pre-emptively: several blood-relations riddles
("pointing to X, the only son/daughter of my..." format) turned out to be one of the most
saturated templates in the whole codebase (4+ existing variants), so blood-relations items
were rewritten in a family-tree statement style instead of the "pointing to/introduced as X"
riddle format entirely. Also swapped a "Doctor is to Hospital as Teacher is to ?" analogy
(used 3× already) and an "8, 27, 64, 100" classification item (exact duplicate) for fresh
alternatives. Despite this, `qa:questions` still caught 3 number-series questions in the
reasoning bank that collided with existing RBI Assistant content — a reminder that even
careful upfront checking misses items if the grep query itself doesn't cover every candidate
question; all 3 were replaced with verified-clean alternatives. The quantitative aptitude
bank's answer-position balance also needed rebalancing (10/7/16/7 → 10/10/10/10) by
reordering options on 6 questions.

**Verified:** all 66 banks / 1,950 questions pass `qa:questions` clean; `npm run build` clean
static export (5 new routes: 1 full mock + 2 sectionals + 2 quick tests); browser walkthrough
confirmed the combined 45-minute timer (no section lock) and correct 1-mark-per-question
scoring (1/80 → 1.00/80, Reasoning section showing 1.00/40.00 matching the 40/40 split).
Added a 6-question FAQ set (including an explicit comparison to the Office Assistant mock's
easier difficulty, per `SEO_PLAYBOOK.md`'s guidance to make every exam's copy carry a fact
that wouldn't be true with the exam swapped out) and an `llms.txt` line.

**Batch roadmap checkbox:** ticked in the same commit.

## 2026-08-05 — SBI Clerk (Batch 13, live session)

Added SBI Clerk Prelims: English Language (30 Q) + Numerical Ability (35 Q) + Reasoning
Ability (35 Q), wired into 1 full mock (100 Q, 3 sections each **separately timed 20
minutes — sectional lock, not a composite timer**) + 3 sectionals + 2 quick timed tests.
This is the first live exam on the site with a true sectional lock (`sectionDuration`)
since SBI PO — every batch since Batch 9 had used the composite-timer pattern instead.

**Source:** found the wrong PDF on the first attempt (an SBI Circle Based Officer
advertisement dated 28 Jan 2026, coincidentally hosted at a similarly-named URL) —
caught this by actually reading the parsed content ("Circle Based Officers", "JMGS-I")
before trusting the numbers, then found and confirmed the correct one: SBI's own Junior
Associate (Customer Support & Sales) 2025-26 advertisement, CRPD/CR/2025-26/06. Confirmed
via `pdftotext`: Prelims = 100Q/100 marks/60 min total, English Language 30Q/30M/20min,
Numerical Ability 35Q/35M/20min, Reasoning Ability 35Q/35M/20min, 0.25 negative marking.

**Collision discipline held up well this time** — batch-grepped all 100 planned questions
against the full corpus before writing any files, and `qa:questions` came back with **zero
duplicate-text errors** on the first run (only answer-balance issues, which is expected and
routine). Confirmed just how saturated common templates are: both idiom candidates
("burn the midnight oil", "once in a blue moon") were already used 2-4× each and got
replaced with original vocabulary-in-context items instead; a "Doctor is to Hospital"-style
analogy and an "8, 27, 64, 100" classification item were avoided from the start based on
Batch 11/12 lessons.

**Verified:** all 69 banks / 2,050 questions pass `qa:questions` clean; `npm run build`
clean static export (6 new routes: 1 full mock + 3 sectionals + 2 quick tests); browser
walkthrough confirmed the sectional-lock UI (shows "SECTION 1/3", palette limited to the
current section's questions, "X/30 in section · X/100 total" counter — a different and
correctly distinct UI from the composite-timer exams) and correct 1-mark-per-question
scoring (1/100 → 1.00/100, English Language section capped at 30.00/30.00). Added a
5-question FAQ set (including an explicit call-out of the sectional-lock timer, since it's
the first exam in several batches to use it) and an `llms.txt` line.

## 2026-08-05 — RRB Junior Engineer / DMS / CMA (Batch 14, live session)

Added RRB JE CBT-I: Mathematics (30 Q) + General Intelligence and Reasoning (25 Q) +
General Awareness (15 Q) + General Science (30 Q), wired into 1 full mock (100 Q, single
combined 90-minute timer — no sectional lock, matching the RRB NTPC/RRB Group D
composite-timer pattern) + 4 sectionals.

**Source:** RRB JE's current cycle (CEN 04/2026) has only a "tentative" detailed
advertisement date (13 August 2026, after this batch's date) — no published notification
yet. Used the most recent fully-published cycle instead: CEN No. 05/2025 (published 28 Oct
2025), since exam pattern doesn't typically change cycle-to-cycle. Confirmed via
`pdftotext`: CBT-I = 100Q/100 marks/90 min, Mathematics 30Q, General Intelligence and
Reasoning 25Q, General Awareness 15Q, General Science 30Q, 0.333 negative marking — the
section split was cross-checked against 2 independent aggregator sources (both consistent,
summing correctly) since the primary PDF's table didn't extract cleanly with `-layout`.

**RRBCDG link rot discovered:** the live URL for this notification
(`rrbcdg.gov.in/uploads/2025/05-JE/052025JE-CEN.pdf`) 404s, and so does the landing page.
Checked whether this was JE-specific — it isn't: the **already-live** RRB Group D source
URL (`.../uploads/2025/09-LVL1/092025-CEN.pdf`, cited since Batch 5) now also 404s,
pointing to a site-wide reorganization on rrbcdg.gov.in rather than a one-off broken link.
Worked around it by citing the Wayback Machine snapshot
(`web.archive.org/web/2025/https://www.rrbcdg.gov.in/uploads/2025/05-JE/052025JE-CEN.pdf`)
instead, which still resolves to the correct 82-page PDF — first time this project has
needed the Wayback fallback. **Flagging, not fixing:** the RRB Group D `sourceUrl` in
`exams.ts` is now also a dead link and should get the same Wayback treatment in a future
pass; out of scope for this one-exam-per-run batch.

**Collision saturation, worse than usual:** RRB JE's CBT-I subjects are nearly identical to
the already-live RRB Group D CBT (same 4 subjects: Mathematics, Reasoning, General
Awareness, General Science), so dozens of first-draft questions collided on the initial
grep pass — one number-series pattern ("2,6,12,20,30") collided **six separate times**
across the corpus, and common GK facts (Article 32, Battle of Plassey, Quit India
Movement, SI units of force/power/pressure, chemical symbols, "largest gland"/"smallest
bone" trivia) were effectively exhausted. For General Science specifically, read the full
text of the sibling `rrb-group-d-cbt-general-science-1.ts` bank directly to get its
complete fact inventory, then deliberately picked facts not on that list — this produced
only 1 duplicate-text failure out of 100 questions on the first `qa:questions` run (a
"least populous state → Sikkim" GA question, replaced with a Sardar Sarovar Dam/Narmada
question), a marked improvement over the trial-and-error approach used in earlier batches.

**Verified:** all 73 banks / 2,150 questions pass `qa:questions` clean; `npm run build`
clean static export (5 new routes: 1 full mock + 4 sectionals). Added a 5-question FAQ set
(explicitly noting the composite 90-minute timer, 1/3 negative marking, and that CBT-I is
only a common screening stage ahead of a branch-specific CBT-II) and an `llms.txt` line.

## 2026-08-05 — UPSC Civil Services Preliminary (Batch 15, live session)

Added UPSC CSE Prelims — the first non-SSC/Banking/Railways exam on the site, and by far
the largest single batch to date: GS Paper I (History 15Q, Geography 15Q, Polity 15Q,
Economy 15Q, Environment 12Q, Science 13Q, Current Affairs 15Q = 100Q total) + CSAT Paper II
(Comprehension 18Q, Interpersonal Skills 6Q, Logical Reasoning 22Q, Decision Making 6Q,
Mental Ability 8Q, Numeracy & Data Interpretation 20Q = 80Q total), 180 original questions
across 13 new bank files, wired into 2 full mocks + 13 sectionals.

**Source:** UPSC's own Civil Services Examination, 2026 notification (Examination Notice
No. 05/2026-CSE, dated 04.02.2026), fetched directly from `upsc.gov.in` and parsed with
`pdftotext`. Confirmed directly from the PDF: both papers are objective/MCQ, 2 hours each,
1/3 negative marking per wrong answer, no penalty for blanks; GS Paper I = 200 marks, CSAT
Paper II = 200 marks and qualifying-only at 33% (66/200). The exact 100Q/80Q question counts
and per-question mark values (2 marks for GS1, 2.5 for CSAT) are not spelled out in the
notification text itself — these are cross-verified via 2 independent aggregator sources,
consistent with each other and with the well-established, unchanged exam format.

**Modeled as two stages, not sections:** unlike every prior exam on this site, GS Paper I
and CSAT Paper II are genuinely separate objective papers (not sections within one combined
timer), so they're modeled as two `TestStage` entries (`paper-1`, `paper-2`) under a single
`upsc-cse` exam, following the precedent already set by SSC CGL Tier 1/Tier 2 and IBPS PO
Prelims/Mains. Each paper uses its own single-timer composite pattern (120 min, no sectional
lock) — required extending `fullMockLayouts`' existing special-case override mechanism (used
for SSC CGL Tier 2 and IBPS PO Mains) to handle two different full-mock layouts under one
exam slug, and adding explicit `upsc-cse/paper-1-full-mock`/`paper-2-full-mock` branches
*before* the generic `full-mock ? 100` catchall in both `questions.ts` and the audit script
(paper-2's 80Q would otherwise have been silently intercepted by that catchall).

**New `category` value:** UPSC doesn't fit the existing `'SSC' | 'Banking' | 'Railways'`
category type used for `ExamCard` badges, so added `'Civil Services'` to the union. Styled
its badge using the `ink-*` monochrome tokens rather than adding a fourth off-system hex
color family — flagging, not fixing, that the other three categories (`SSC`/`Banking`/
`Railways`) still use hardcoded hex colors in `ExamCard.tsx`'s `CATEGORY_STYLES`, which
appears to be a pre-existing gap from before the monochrome design sweep.

**Honesty on the section-wise breakdown:** UPSC does not publish an official per-topic
question split for either paper (unlike SSC/banking exams' official section tables). Rather
than fabricate one, both stage patterns carry an explicit `note` on the exam-pattern page
stating that the breakdown shown "reflects how this mock test's questions are organized,
not an official UPSC-published distribution" — while still citing the real, verifiable
facts (marks, duration, negative marking, qualifying threshold) as officially sourced.

**UPSC-authentic question style:** leaned into UPSC's real "Consider the following
statements... Which of the statements given above is/are correct?" and "assertion-reason"
multi-statement format for a meaningful share of questions, rather than only direct-recall
one-liners — both for authenticity to the actual exam's difficulty/style and because it
naturally produced content distinct from the simpler direct-fact phrasing already used
across the SSC/banking/railway General Awareness banks.

**Collision handling:** GS Paper I's History/Geography/Polity/Economy/Science topics
overlap heavily with existing SSC/banking/railway General Awareness content. Caught and
replaced ~15 real collisions before finalizing, including several facts saturated 2-3× over
already (Article 280/Finance Commission, Comptroller and Auditor-General/Article 148,
Chandrayaan-3/LVM3, Aditya-L1/Lagrange point, Beriberi/Thiamine, Gaganyaan/LEO, "121, 144,
169, 200" classification, a train-speed problem with the exact same numbers) — each
replaced with a genuinely distinct fact/scenario rather than a reworded version of the same
one. CSAT's content (passage-based comprehension, decision-making scenarios, data
interpretation tables) is structurally original and had no meaningful collision risk.

**Verified:** all 86 banks / 2,330 questions pass `qa:questions` clean (zero cross-file
duplicate-text failures on the final run — only two within-file duplicates caught and fixed
along the way, plus the expected first-pass answer-position rebalancing across all 13 new
banks); `npm run build` clean static export (506 pages, 18 new routes: 2 full mocks + 13
sectionals). Browser walkthrough confirmed both papers' single 120-minute composite timers
(no "SECTION X/Y" lock UI), correct scoring on CSAT specifically (1/80 → 2.50/200, matching
its non-standard 2.5-marks-per-question), and section-wise caps summing correctly to each
paper's 200-mark total. Added two 5-question FAQ sets (one per paper) and an `llms.txt` line.

## 2026-08-05 — RPF Constable (Batch 16, live session)

Added RPF Constable CBT: Arithmetic (35 Q), General Intelligence and Reasoning (35 Q),
General Awareness (50 Q), wired into 1 full mock (120 Q, single combined 90-minute timer —
no sectional lock) + 3 sectionals matching official per-section durations (26/26/38 min).

**Source:** Railway Recruitment Board Secunderabad's official CEN No. RPF 02/2024 notification
PDF (parsed with `pdftotext -layout`, WebFetch used only to trigger the local download since
it can't read binary PDFs directly) — confirmed the exact official table: Arithmetic 35Q/35
marks/26 min, General Intelligence and Reasoning 35Q/35 marks/26 min, General Awareness
50Q/50 marks/38 min, composite 90 min total, 1/3 negative marking.

**Errors caught and fixed:**
- The 120Q full-mock count is non-standard against most other exams' 100Q catchall — same
  lesson as UPSC CSAT's 80Q in Batch 15: the new `expectedCount` branches (both in
  `questions.ts`'s runtime ternary and `audit-question-banks.mjs`'s build-time logic) had to
  be inserted *before* the generic `full-mock ? 100` fallback, or they'd silently intercept
  and misvalidate the count.
- **Highest duplicate-collision rate of the project so far.** RPF Constable's sections
  overlap almost exactly with SSC GD Constable's (already heavily saturated against the rest
  of the ~2,300-question corpus), so drafts collided repeatedly even after pre-checking
  against the closest sibling bank. Took 3 full rounds against `qa:questions` to clear:
  Round 1 caught 3 GI&R collisions against `rbi-assistant-prelims-reasoning-ability-1.ts`
  (one replacement itself collided a second time before landing clean); Round 2 caught 5 more
  against `rrb-je`, `rrb-ntpc`, `ssc-chsl`, and `ssc-mts` banks (two of those replacements
  also needed a second attempt). Used the audit script's `--dump --bank=<name>` flag for the
  first time this session to pull exact question text by bank name when the plain error
  report's line numbers didn't map cleanly back to source lines — worth reaching for earlier
  in future high-collision batches instead of only after the report proves hard to read.
- Answer-position rebalancing needed an unusually large pass: General Awareness started at
  8/31/10/1 (the worst skew seen this session) before ~18 option-reorder edits brought it to
  13/13/12/12. Arithmetic and GI&R needed smaller corrective passes (7 and 9 edits).

**Verified:** all 89 banks / 2,450 questions pass `qa:questions` clean (zero cross-file
duplicate-text or duplicate-ID failures on the final run); `npm run build` clean static
export. Browser walkthrough confirmed the mock-test hub renders all 4 tests as
syllabus-checked with correct Q-counts/durations, the exam-pattern page's section table
matches the official split, the full mock's single 90-minute composite timer shows no
sectional-lock UI, and a live attempt (1 correct / 0 wrong / 119 unattempted) scored
1.00/120 with section-wise caps summing correctly to 35.00 + 35.00 + 50.00 = 120. Added a
5-question FAQ set and an `llms.txt` line.

## 2026-08-05 — SSC CPO (Batch 17, live session)

Added SSC CPO Paper 1 (Sub-Inspector, Delhi Police and CAPFs): General Intelligence and
Reasoning (50 Q), General Knowledge and General Awareness (50 Q), Quantitative Aptitude
(50 Q), English Comprehension (50 Q) — wired into 1 full mock (200 Q, sectional-locked —
each of the four sections has its own separately timed 30-minute window, no shifting unused
time between sections) + 4 sectionals.

**Source:** SSC's own ssc.gov.in result write-up for the CPO 2025 cycle (the same
`Results/write-up...pdf` pattern already used for SSC MTS in Batch 9), which corroborated
the 200-total-marks figure via its qualifying-marks math (UR cut-off 30% = 60 marks); the
detailed section-wise breakdown (4×50Q/50 marks/30 min sectional lock, 0.25 negative
marking) was cross-checked against 3 independent aggregator sources since the official
Notice of Examination PDF isn't machine-readable — consistent with the project's standard
fallback when the primary source can't be parsed directly.

**Two-hundred-question full mock is this batch's non-standard-count case** — same lesson as
UPSC CSAT (Batch 15, 80Q) and RPF Constable (Batch 16, 120Q): the new `expectedCount`
branches (`questions.ts` runtime ternary and `audit-question-banks.mjs` build-time logic)
had to be inserted before the generic `full-mock ? 100` fallback.

**Sectional lock, not composite timer** — SSC CPO is the first SSC-family exam on this site
with a genuine sectional lock (matching SBI Clerk's precedent, not the composite-timer
pattern used by RRB JE, RPF Constable, or the other SSC exams already live). Modeled the
`TestConfig` full-mock entry with `sectionDuration: 30` per the SBI Clerk template.

**Errors caught and fixed:**
- 12 duplicate-text collisions on the first `qa:questions` run — expected given how heavily
  SSC CPO's four sections overlap with the already-deepened SSC CGL/CHSL corpus (12
  cross-file collisions) plus a self-inflicted issue: 4 of the English bank's
  Spelling-Correction items all used the identical literal question stem "Choose the
  correctly spelled word." — since the QA script dedupes on exact question text globally,
  identical stems collide with each other even when the options differ. Fixed by varying
  each stem's phrasing ("Which of the following words is spelled correctly?", "Select the
  correctly spelled word from the options given.", "Identify the correctly spelled word.",
  "Pick the option with the correct spelling.") — a new pattern worth remembering for any
  future bank with several items sharing a generic question template.
- A genuine arithmetic slip caught during self-review, not by `qa:questions`: an
  LCM/HCF item's correct answer (16) wasn't even among its own four options
  (`['20','24','28','32']`) — caught by re-deriving the answer before finalizing, per the
  project's standing rule to precompute math answers rather than trust them.
- Answer-position rebalancing across all four 50-question banks: initial skews ranged from
  8/24/11/3 (worst) to 11/15/22/2, all corrected to a clean 12/13/12/13 split. Given the
  volume (46 individual moves across 4 files), used a small Node script
  (`rebalance.mjs`, scratch-only) to swap option positions + `correctIndex` programmatically
  from a moves list, rather than 46 manual edits — much faster and just as safe, since it
  operates on exact line-scoped substrings rather than re-serializing the file. Worth reusing
  for any future batch with a similarly large rebalancing pass.

**Verified:** all 93 banks / 2,650 questions pass `qa:questions` clean; `npm run build`
clean static export (new `/ssc-cpo` routes: 1 full mock + 4 sectionals, all 20
`exam-pattern`/`syllabus`/etc. skeleton pages). Browser walkthrough confirmed the mock-test
hub renders a Paper 1 / Paper 2 tab split (Paper 2 correctly shown as "review pending"),
the exam-pattern page's section table matches the official split, the full mock genuinely
enforces a sectional lock (`SECTION 1/4`, 29:58 countdown, question palette scoped to
50/200 per section — confirmed this differs visibly from RPF/RRB JE's composite-timer UI),
and a live attempt (1/200 correct) scored 1.00/200 with section-wise caps correctly summing
50+50+50+50=200. Added a 5-question FAQ set and an `llms.txt` line.

## 2026-08-06 — IBPS Specialist Officer (Batch 18, live session)

Added IBPS SO Prelims: English Language (50 Q), Reasoning (50 Q), Quantitative Aptitude
(50 Q) — wired into 1 full mock (150 Q, sectional-locked, three separately timed
40-minute sections) + 3 sectionals. Covers the pattern shared by IT Officer, Agriculture
Field Officer, HR/Personnel Officer, and Marketing Officer (Scale I) — the Law
Officer/Rajbhasha Adhikari track substitutes General Awareness for Quantitative Aptitude
and was not modeled.

**Source:** IBPS's own CRP SPL-XV notification PDF (`Detailed-Advt.-CRP-SPL-XV_Final1.pdf`
on ibps.in), parsed cleanly with plain `pdftotext` (no `-layout` flag — the `-layout` flag
actually garbled this particular table's columns across multiple lines, the opposite of
its usual benefit; worth trying both when the first parse looks scrambled). This directly
contradicted two independent aggregator sources, which both claimed Prelims includes a
4th "Professional Knowledge" section — the official PDF confirms Professional Knowledge is
Mains-only (60Q/60 marks/45 min), and Prelims is just English/Reasoning/Quantitative
Aptitude (or English/Reasoning/GA for Law Officer/Rajbhasha). Per the project rule that the
exam body's own notification beats aggregators, went with the official 3-section Prelims
pattern.

**First fractional per-question marks case on the site:** English Language is 50Q for only
25 marks (0.5 marks/question), while Reasoning and Quantitative Aptitude are 50Q/50 marks
each (1 mark/question) — matching the official "one-fourth of that question's marks"
penalty rule exactly (English negative marking = 0.125, Reasoning/QA = 0.25). Implemented
via explicit per-question `marks`/`negativeMarking` overrides in the English bank (a
pattern the engine already supported generically, previously exercised by IBPS PO Prelims'
audit-script marks/4 check, just not yet used for a sub-1-mark case). Browser-verified the
scoring engine handles this correctly: a single correct English answer scored exactly
0.50/125.

**Errors caught and fixed:**
- 150Q is non-standard against the generic `full-mock ? 100` catchall — same recurring
  lesson as UPSC CSAT/RPF Constable/SSC CPO: the new `expectedCount` branch had to be
  inserted before the catchall in both `questions.ts` and `audit-question-banks.mjs`.
- Heavy duplicate-collision rate against the already-saturated IBPS PO/Clerk, SBI PO/Clerk,
  RBI Assistant Prelims banks (same generic Reasoning/English/Quant syllabus): 5 collisions
  on the first `qa:questions` run, including two cross-file collisions against the *same
  invented "unique" spelling-question phrasings* used to fix SSC CPO's collisions in the
  previous batch — a reminder that phrasing invented to dodge one collision can itself
  collide in a later batch once reused; picked fresh phrasing again rather than assuming
  prior fixes are permanently safe.
- Multiple self-caught arithmetic/logic errors during drafting (before `qa:questions` even
  ran): a wrong-number-in-series item whose "wrong" number didn't actually break the stated
  rule, a time-work question whose explanation computed 20 days but had `correctIndex`
  pointing at 18, a percentage question with a non-clean division, and a duplicate-option
  bug in a percentage compounding item — all caught by re-deriving each answer during
  self-review rather than trusting the first draft, per the project's standing rule.
- Answer-position rebalancing: all three banks started skewed (worst: Reasoning 28/12/6/4),
  corrected to 12/13/12/13 using the same scratch `rebalance.mjs` script introduced in
  Batch 17 — 57 total moves across the three files, applied in one script run.

**Verified:** all 96 banks / 2,800 questions pass `qa:questions` clean; `npm run build`
clean static export (new `/ibps-so` routes: 1 full mock + 3 sectionals). Browser walkthrough
confirmed the mock-test hub renders a Prelims/Mains tab split (Mains correctly shown as
"review pending"), the exam-pattern page's section table and fractional-marks note render
correctly, the full mock genuinely enforces sectional lock (`SECTION 1/3`, 39:58 countdown,
English Language first per the official section order), and a live attempt scored
0.50/125 with section-wise caps summing correctly to 25.00+50.00+50.00=125. Added a
5-question FAQ set and an `llms.txt` line.

## 2026-08-06 — RBI Grade B (Batch 19, live session)

Added RBI Grade B Phase I (General cadre): General Awareness (80 Q), English Language
(30 Q), Quantitative Aptitude (30 Q), Reasoning (60 Q) — wired into 1 full mock (200 Q,
sectional-locked, four separately timed windows: 25/25/25/45 min) + 4 sectionals.

**Source:** RBI's own notification (Advt. No. RBISB/DA/03/2025-26), fetched via a
testbook-hosted re-upload of the official PDF (`opportunities.rbi.org.in`'s own page is
CAPTCHA-gated and couldn't be fetched directly — using a third-party mirror of a primary
source is an acceptable fallback when the origin blocks automated access, since the
document content itself is still the authentic official text, verified by cross-checking
its wording against the notification's known reference number). The official text
confirmed "a single Paper for 200 marks... separate time will be allotted for each test"
but did not publish the exact per-section question/mark/duration split (RBI defers that to
a separate Information Handout closer to the exam) — the 80/30/30/60 breakdown was
cross-checked against multiple independent aggregators that consistently agreed and summed
correctly to the officially confirmed 200Q/200 marks/120 min.

**General Awareness leaned heavily into Banking Awareness** (repo rate, CRR, SLR, NPA
classification, MPC structure, Basel norms, NBFC vs bank distinctions, DICGC, MSF, PSL,
Financial Stability Report, UPI/RuPay, KYC, negotiable instruments, IFSC, Banking
Ombudsman, etc.) as the primary content strategy for this 80-question section — this topic
area was almost entirely untouched by the rest of the corpus (RBI Assistant's Prelims has
no GA section at all), giving a large genuinely original pool and substantially reducing
collision risk compared to leaning on generic History/Geography/Polity facts, which are
heavily saturated after 18 prior batches.

**Errors caught and fixed (self-review, before qa:questions ran):** an unusually high
number of items needed correction this batch — a seating-arrangement puzzle with an
underdetermined answer (two people could occupy either of two open seats), a blood-relation
question with a genuinely ambiguous chain of reasoning, two "letter-sum" coding items with
arithmetic that didn't match the listed options, a data-sufficiency item whose explanation
concluded a different answer than the one keyed, a broken multi-floor puzzle with
self-contradictory constraints, a number-series item where the final computed value (446)
wasn't among the options, and an awkward blood-relation question with no clean English
term for its answer. All caught and rewritten during self-review; worth noting reasoning
puzzles and letter-arithmetic items are the highest-error-rate question types in this
project, consistent with prior batches' experience.

**200Q is this batch's non-standard full-mock count** — same recurring lesson as every
200Q+ batch this project has done: the `expectedCount` branch had to be inserted before the
generic `full-mock ? 100` catchall in both `questions.ts` and `audit-question-banks.mjs`.

**Two duplicate-text collisions**, both against pre-existing saturated banks (a "longest
Indian coastline" GA fact already used in SSC CGL Tier 1, and a "sum of first 20 natural
numbers" QA fact already used in SSC CPO) — both fixed by swapping to fresh content
(a Banking Awareness fact for the former, a different sum-count for the latter) rather than
just rewording, since the underlying facts themselves were already saturated 2-3× over.

Answer-position rebalancing: all four banks started skewed (worst: General Awareness
12/53/14/1), corrected to perfectly even splits (20/20/20/20 for GA; 15/15/15/15 for
Reasoning; 8/7/8/7 for the two 30-question banks) using the scratch `rebalance.mjs` script
— 47 total moves across the four files in two script runs.

**Verified:** all 100 banks / 3,000 questions pass `qa:questions` clean; `npm run build`
clean static export (new `/rbi-grade-b` routes: 1 full mock + 4 sectionals). Browser
walkthrough confirmed the mock-test hub renders a Phase I/Phase II tab split (Phase II
correctly shown as "review pending"), the exam-pattern table matches the official split,
the full mock genuinely enforces sectional lock (`SECTION 1/4`, 24:58 countdown, General
Awareness first per the official section order), and a live attempt scored 1.00/200 with
section-wise caps correctly summing 80.00+30.00+30.00+60.00=200. Added a 5-question FAQ
set and an `llms.txt` line.

## 2026-08-20 - JEE Main Paper 2: B.Arch and B.Planning (coding-agent integration, live session)

Integrated a ChatGPT-approved, independently Hard-QA'd content package delivered as
`JEE_MAIN_2026_PAPER2_STAGE1_FINAL_APPROVED_CLEAN_HANDOFF_2.zip` (exam brief, test-series
manifest, Hard QA report and register, source register, writer handoff notes). Content Hard
QA: PASS, 0 unresolved issues (Writer v5; 1 of 175 questions corrected from v4 with an
independent re-solve recorded in the register, the other 174 byte-identical).

New exam: `jee-main-paper-2`, opening the catalog's previously-queued "JEE Main Paper 2:
B.Arch & B.Planning" entry. Two stages:

- Paper 2A (B.Arch) Objective Practice Test 1: 75Q/300 represented marks/180 min,
  `kind: 'practice'`, PLATFORM-DEFINED timer (NTA does not publish a separate time limit for
  only Mathematics + Aptitude). Mathematics 25 (20 MCQ + 5 numerical-value), Aptitude Test
  50 MCQ. The official 100-mark offline pen-and-paper Drawing Test is excluded (requires
  human evaluation, not auto-gradable).
- Paper 2B (B.Planning) Full Mock Test 1: 100Q/400 marks/180 min, `kind: 'full-length'`,
  OFFICIAL-VERIFIED NTA duration. Complete official structure: Mathematics 25, Aptitude Test
  50, Planning 25.

Both stages score +4/-1/0, numerical answers to the nearest integer, matching the official
JEE Main scheme already used elsewhere on the site.

**Errors caught and fixed (integration-side, technical only, no content edits):**
- The per-testId expected-question-count validator in `questions.ts` (separate from the
  full-mock section-layout validator) defaulted any unmatched sectional/practice test ID to
  25 questions. Paper 2A's real 75-question count silently failed this check at build time
  until explicit branches were added for both new test IDs
  (`jee-main-paper-2/paper-2a-objective-practice` -> 75,
  `jee-main-paper-2/paper-2b-full-mock` -> 100). This is a different validator from the
  `fullMockLayouts` section-contiguity one documented in earlier entries; worth flagging for
  future non-standard-count batches since it isn't covered by the existing "150Q catchall"
  lesson.
- Added `fullMockLayouts['jee-main-paper-2']` (Mathematics 25 / Aptitude Test 50 / Planning
  25) so Paper 2B's full-mock section-contiguity check could validate, following the
  CMAT/SNAP/IBSAT fallback-record precedent rather than a bespoke ternary branch.
- `scripts/audit-question-banks.mjs`: the existing `jee-(?:main|advanced)-paper-[12]`
  filename-prefix regex already matched the new `jee-main-paper-2-2a-...` /
  `jee-main-paper-2-2b-...` filenames with no regex change needed; only two new
  `expectedCount` branches (75, 100) were added.
- Added a `JEE_MAIN_PAPER_2_PAPER_2B_FULL_MOCK_FAQS` block (5 exam-specific Q&A) and
  registered it in `FULL_MOCK_FAQS['jee-main-paper-2/paper-2b']`; Paper 2A has no FAQ block
  since `kind: 'practice'` tests don't render the FAQ section (matches
  `isFullMock = test.kind === 'full-length'`).
- Also caught and fixed two stale-documentation items unrelated to this batch while updating
  status files: `BATCH_ROADMAP.md`'s Engineering queue still showed COMEDK UGET and IIIT
  Hyderabad UGEE as unchecked despite both being live since 19 August, and
  `TAKEMOCKTEST_CURRENT_STATUS.md` §3's Engineering exam list was missing both slugs
  entirely. Both fixed in this batch's commit.

**Verified:** `npm run qa:questions` passed clean (287 banks, 8,947 questions, no duplicate
IDs or text against the full corpus, matching the Hard QA package's originality claim).
`npm run build`, `npm run lint`, and `npm run qa:assets` all passed clean. `npm run
qa:onpage-seo` passed clean with zero advisories against any of the new exam's pages.
`node scripts/generate-collision-reference.mjs` regenerated clean. Browser-verified end to
end via Playwright against the static export: mock-test hub renders both stages' patterns
correctly; exam-pattern page surfaces the Drawing-Test exclusion and PLATFORM-DEFINED
disclosure; a Paper 2A attempt (1 correct MCQ + 1 correct numerical-value answer) scored
exactly 8.00/300 with a correct 8.00/100.00 Mathematics / 0.00/200.00 Aptitude Test
section-wise split; a Paper 2B attempt (1 deliberately wrong MCQ) scored exactly -1.00/400
with a correct -1.00/100.00 Mathematics / 0.00/200.00 Aptitude Test / 0.00/100.00 Planning
split, confirming both negative marking and the three-way section split sum to 400; the
Planning section was independently confirmed present and correctly labeled at question 76
of the full mock. Added a 5-question FAQ set and an `llms.txt` line.
