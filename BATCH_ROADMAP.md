# TakeMockTest — Batch Roadmap & Process

This file is the source of truth for autonomous/scheduled batch work on this repo.
Every agent run (scheduled or manual) should read this file FIRST, before touching any code.

Also read `SEO_PLAYBOOK.md` before writing any user-facing copy, FAQ, or question bank —
it covers the current Google algorithm/E-E-A-T/AEO landscape, the writing-voice guide, and
the student persona this site is written for. Its §6 checklist is required reading before
any content batch, alongside the QC checklist below.

## What this project is

TakeMockTest (takemocktest.com) is a Next.js 15 static-export mock-test site for Indian
competitive exam aspirants. `src/lib/exam-catalog.ts` lists 219 exams; an exam is "live"
once it has a `liveSlug` pointing to a real entry in `src/lib/exams.ts` with syllabus-checked
question banks in `src/lib/question-banks/`.

Strategy: **breadth-first**. Every exam gets a small baseline package before any exam gets
deepened further (deepening is a separate, later pass). Exception already done: SSC CGL Tier 1
was deepened to 45 tests (quick/topic/difficulty-tiered practice) in an earlier batch — leave
that alone, don't redo it.

## How to find out what's already live

Run: `grep -oP "exam\('[^']+', '[^']+', '[a-z0-9-]+'\)" src/lib/exam-catalog.ts`
Anything with a third argument (the liveSlug) is done. Cross-check against the ExamSlug union
in `src/lib/exams.ts` — the two must always match after your batch (a stale build will fail
otherwise).

**Live as of 2026-09-07:** 157 products across 160 catalog rows, 1,222 tests, 781 question-bank
files, 31,273 questions. Enumerating them here has stopped being useful at this size — the grep
command above is the live answer, and `TAKEMOCKTEST_CURRENT_STATUS.md` §2 and §3 carry the
authoritative counts and the full slug list. This file no longer duplicates them.

The breadth-first phase is effectively finished for the clusters this file was written around:
Engineering is 57/57, and the Government Jobs national-level queue below is complete. What
remains is the catalog backlog (60 entries with no tests) plus depth and evidence work on
exams that are already live — see "Standing work" below.

**Process note (2026-08-11):** exam content (research, writing, Hard QA) now runs through
a separate ChatGPT pipeline per `TAKEMOCKTEST_DEVELOPMENT_OPERATING_MODEL.md`. This file's
"baseline package" and "quality control" sections below describe the coding agent's
integration-time responsibilities on an already-approved package, not independent content
authorship — see that file and `QUESTION_BANK_HANDOFF.md`/`TAKEMOCKTEST_CONTENT_SCHEMA.md`
before starting any new exam integration.

## The queue (Government Jobs cluster, in order)

Do exactly ONE exam per run. Pick the first one in this list that is not yet live. Do not
skip ahead unless an exam turns out to be unsuitable for an MCQ mock test (see note below) —
in that case, leave a one-line note next to it in this file explaining why, and move to the
next one in the same run.

- [x] IBPS RRB Office Assistant
- [x] SSC GD Constable
- [x] IBPS RRB Officer Scale I
- [x] SBI Clerk
- [x] RRB Junior Engineer / DMS / CMA
- [x] UPSC Civil Services Preliminary
- [x] RPF Constable
- [x] SSC CPO
- [x] IBPS Specialist Officer
- [x] RBI Grade B
- [x] NABARD Grade A
- [x] SEBI Grade A
- [x] SIDBI Grade A & B
- [x] LIC AAO
- [x] NIACL Administrative Officer
- [x] RRB Assistant Loco Pilot
- [x] RRB Technician
- [x] RRB Paramedical Categories
- [x] RPF Sub-Inspector
- [x] SSC Junior Engineer
- [x] SSC Stenographer Grade C & D
- [x] SSC Combined Hindi Translators
- [x] SSC Selection Post

**Not MCQ-friendly, evaluate case by case, may need to skip with a note:**
UPSC Civil Services Main (descriptive/essay paper, not objective — likely skip or find if
it has any objective component worth mocking), State PSCs (many, lower individual traffic —
tackle after the national-level exams above are done, same process).

## The queue (Engineering cluster, in order)

- [x] JEE Main
- [x] JEE Advanced
- [x] BITSAT
- [x] VITEEE
- [x] SRMJEEE
- [x] AEEE
- [x] Manipal Entrance Test
- [x] KIITEE
- [x] COMEDK UGET
- [x] IIIT Hyderabad UGEE
- [x] JEE Main Paper 2: B.Arch and B.Planning
- [x] NATA (Mathematics only, review-pending pattern — see TAKEMOCKTEST_CURRENT_STATUS.md for the source-access caveat)
- [x] MHT CET (PCM group, official 90+90 timing-group pattern — see TAKEMOCKTEST_CURRENT_STATUS.md for the new generic `timingGroups` mechanism)
- [x] WBJEE (Engineering, official 120+120 two-paper timing-group pattern reusing MHT CET's `timingGroups` mechanism, plus a new proportional Category 3 partial-marking mode — see TAKEMOCKTEST_CURRENT_STATUS.md)
- [x] KEAM — **this line previously said KEAM was rejected because its five answer options (A-E) were incompatible with a four-option-only engine. That was wrong, and is corrected here (7 September 2026).** The engine accepts four *or* five options per question, checked per question against that question's own option count in both `src/lib/questions.ts` and `scripts/audit-question-banks.mjs`. KEAM, MAH MBA CET and XAT — the three exams that note used as examples of the supposed incompatibility — are all live. KEAM and MAH MBA CET ship genuine five-option banks. XAT was built with four options per question against a real paper that has five; that defect was found while correcting this line on 7 September 2026 and fixed the same day, and all three exams now ship the option count their paper uses.
- [x] AP EAPCET (Engineering, coding-agent-authored while ChatGPT worked on KCET, review-pending pattern — see TAKEMOCKTEST_CURRENT_STATUS.md for the source-access caveat)
- [x] KCET (Engineering, official 80+80+80 three-paper timing-group pattern reusing MHT CET's `timingGroups` mechanism unchanged for a three-group case — see TAKEMOCKTEST_CURRENT_STATUS.md)
- [x] TG EAPCET (Engineering, 160/80/80 Mathematics/Physics/Chemistry pattern, one unrestricted 180-minute timer, review-pending pattern — see TAKEMOCKTEST_CURRENT_STATUS.md for the source-access caveat)

The state and institute engineering entrances that followed are all live and are no longer
tracked as a queue here: AMU B.Tech, AP ECET, AP PGECET, AP POLYCET, Assam CEE, ATIT, BCECE,
Bihar DCECE, BITS HD, BV B.Tech, CG PET, CG PPT, Chandigarh CUCET, CUSAT CAT, GATE, GUJCET,
HP PAT, IEMJEE, IMU-CET, Jain JET, JEECUP, Jharkhand PECE, KLEEE, LPUNEST, MIT-WPU CET,
NERIST NEE, NMIMS CET, OJEE, PULEET, SAEEE, SITEEE, TG ECET, TG POLYCET, TJEE, Uttarakhand
JEEP, UPESEAT, VTUEEE, WB JELET. Engineering is 57 of 57 catalog entries.

## The queue now (catalog backlog)

**Before starting any exam here, check whether the product already exists.** A catalog row with no
`liveSlug` does not mean the exam is unbuilt: AILET PG had a complete, `official`, 100-question LL.M.
stage live under the `ailet` product while its catalog row pointed nowhere, and would have been
rebuilt from scratch by anyone trusting the row alone. Grep `exams.ts` for the exam name and for
plausible sibling stages under a related slug first.

Fifty-nine catalog entries still have no tests. The buildable remainder, in rough priority order:
CFA Level I, ISI Admission Test, CMI Entrance, TIFR GS, NEST (blocked — see below),
DNB PDCET, AIIMS NORCET, AIIMS BSc Nursing, UPSC Combined Medical Services, ICMR JRF, DBT BET,
CSIR UGC NET Part A, UCEED, CEED, and the objective slices of CA/CS/CMA Intermediate.

**Standing exclusions** (do not queue these without a deliberate decision to change the rule):
the 15 state civil-services papers and 6 teacher-recruitment papers are current-affairs and
state-GK dominated, and this site does not self-author current-affairs content; UPSC CSE Main
and Indian Forest Service are descriptive; UPSC EPFO is GA-heavy; State Judicial Services is
per-state and largely descriptive; the Duolingo English Test is adaptive and proprietary
enough that a fixed-form mock would misrepresent it. NEET SS was investigated and skipped —
it is thirteen separate super-specialty papers at post-MD level with no common paper.

The design-and-fashion group needs a case-by-case look rather than a blanket exclusion: NID
DAT and the portfolio-based institute tests cannot be reproduced, but UCEED and CEED have
fully objective Part A papers that can be.

## Standing work on exams that are already live

1. **Clear `review-pending` patterns.** 32 products carry at least one review-pending stage,
   whose exam-pattern pages are `noindex` and excluded from the sitemap. This is the Hard
   Research Gate in `TAKEMOCKTEST_DEVELOPMENT_OPERATING_MODEL.md` §1 and needs an
   unrestricted network — most of the recent ones are blocked because the exam body's own
   domain is refused by the coding-agent sandbox's egress proxy.
2. **Audit option counts against official patterns.** Nothing checks that a bank's option
   width matches the width the real exam uses. This is how the XAT four-option defect,
   found and fixed on 7 September 2026, went unnoticed for a day after shipping. Two exams disclose a four-option
   rendering as a deliberate platform representation in their pattern notes, SLAT and KLEEE;
   those are correct as they stand, but nothing enforces that such a note exists.
3. **Ten products have exactly one test** (NATA, CSEET, IPMAT Indore, XAT, GPAT, INI-CET,
   NEET PG, GMAT, LSAT, IIT JAM). Per the operating model §10 these are LAUNCH COMPLETE, not
   SERIES COMPLETE, and each needs a test-series manifest before further tests are built.
4. **NEST is blocked upstream.** `P2_NEST_2026_CODING_BLOCKED_COLLISION` is a Main Brain PASS
   whose academic content is frozen, but one Mathematics record collides with live content.
   Its own instructions require stopping and reporting rather than editing a frozen record, so
   it waits on a Writer/Main Brain substitution.
5. **Test-series depth beyond the first mock**, once the manifests in item 3 exist.

## Cross-exam practice sections

Not every product on this site is an exam. The Logical Reasoning hub (`/in/logical-reasoning`)
is the first section built for a skill rather than a paper, and anything similar should follow
its rules:

- **Reference, never duplicate.** `src/lib/logical-reasoning-data.ts` holds question IDs only;
  `getQuestionsByIds` in `src/lib/questions.ts` resolves them against the same wired banks the
  exam mocks use. A section that copied question text would give one question two homes and two
  fates, and would trip the audit's cross-bank text-uniqueness rule.
- **Grade on your own absolute scale.** The per-exam `difficulty` tag sorts reasoning questions
  by topic, not by effort, so it cannot carry a cross-exam ladder. The hub's rubric (easy: one
  step, no case analysis; medium: two to four linked steps or one construction, no branching;
  hard: branching, elimination, interleaved rules, layered codes, sufficiency traps) is
  documented at the top of `logical-reasoning-data.ts`.
- **Say what the marking difference costs.** The hub has no negative marking, so its scores are
  not comparable with the same questions inside their source mocks. That sentence is on the
  test pages, not just in this file.

### Structured data: valid is not the same as useful

`npm run qa:schema` (`scripts/audit-schema.mjs`, part of `qa:site`) parses every JSON-LD
block in the export and fails the build on unparseable JSON, missing `@context`/`@type`,
missing required properties, relative URLs where absolute are required, non-ISO dates, and
Google-retired types. Structured data fails silently in a way nothing else here does: a
broken block still renders, still builds, looks perfect to a human, and simply never produces
the result it was written for.

Running `seo-schema` found the markup **mechanically clean** — 3,417 blocks, all parsing,
zero errors — and two things that being clean does not cover:

**1. FAQPage no longer earns a Google rich result.** Retired for all sites on 7 May 2026.
There are 661 blocks. They are **kept**: still accurate, still useful to non-Google
consumers, and removal would be churn for its own sake. But nothing should be planned on the
assumption that they produce SERP features. The audit prints a standing note each run so this
is not rediscovered the hard way.

**2. Quiz was valid but incomplete**, on 1,214 pages: no `about`, no `hasPart`. Google's
Education Q&A result needs both. `about` was added everywhere. **`hasPart` was deliberately
not**, on the exam test pages, because Google's structured-data policy forbids marking up
content the reader cannot see and those pages show instructions while the questions sit
behind the attempt flow. An incomplete-but-honest Quiz beats a complete-but-non-compliant one.

The same rule pointed at a genuine opportunity: the **topic practice pages do print their
worked examples in full**, so they can carry a complete, compliant Quiz. They now do —
`quizWithQuestionsSchema` marks up exactly the six questions rendered on the page and nothing
else. That is a rich-result surface the section could not otherwise have had.

Also added: `logo` on `organizationSchema`. Deliberately no `sameAs` — this site has no
social profiles, and listing invented ones would be a false claim in machine-readable form,
which is worse than an omission.

**The general rule: check what a schema type is currently worth before spending pages on it,
and never mark up what the page does not show.**

### Run the installed SEO skills on generated sections

There is a set of SEO skills installed in this environment, and the programmatic-pages
section was built and audited without them — a straight miss. `seo-programmatic` covers
exactly this work ("pages generated at scale from data sources… template engines, URL
patterns, internal linking automation, thin content safeguards, index bloat prevention"),
and running it afterwards immediately found something the hand-rolled audit did not
measure. Run it **before** shipping the next generated section, not after.

What it agreed with, measured against its own thresholds:

| Gate | Threshold | Measured |
|---|---|---|
| Unique content per page | ≥40%, hard stop <30% | 74% median, 64% worst |
| Word count | ≥300 | 539 minimum |
| Self-referencing canonical | required | 40/40 |
| Batch size | <100 per release | 41 indexable |
| Noindexed pages in sitemap | none | none |

Note the metric is the inverse of the one `qa:thin-content` reports: that script measures
*shared* content, the skill measures *unique*. 25% shared is 75% unique. Same finding,
opposite direction — do not compare the two numbers directly.

**What it caught: internal link density at 71 links per 1,000 words, against a 3-5
guideline, and 78 links on one 780-word page.** The cause was rendering every exam in a
topic's pool as a link, and a pool can span 69 exams. That spreads a page's link equity far
too thin and reads as a link dump. Exam links are now capped at 12, with the remainder named
as plain text so nothing is hidden from the reader.

Two further points from the skill worth honouring on the next batch:

- **Progressive rollout.** Publish 50-100 pages, then wait 2-4 weeks and check indexing and
  rankings before expanding. The subject-topic batch (Thermodynamics, Electrochemistry and
  the rest) should therefore wait, not follow immediately.
- **Human review sample.** Read 5-10% of generated pages end to end before publishing.
  Automated gates measure duplication and length; they cannot tell you a page is useless.

One deliberate divergence: the skill wants `<lastmod>` on sitemap entries reflecting the
data's update time. This repo's standing policy is to omit `lastmod` unless a real per-URL
date is tracked in code, so it stays omitted rather than being filled with build time.

### Thin content: the one failure you cannot see page by page

A generated section is the site's most scalable content and its easiest way to earn a
demotion. The failure is invisible in review: every page builds, validates, reads sensibly
and looks fine **on its own**. It only exists *between* pages. So it has to be measured,
not eyeballed.

`npm run qa:thin-content` (`scripts/audit-thin-content.mjs`, part of `qa:site`) chops each
page's main content into 8-word shingles and fails the build when too much of a page also
appears on a sibling page in the same section. It measures **indexable sections only** — a
noindexed page cannot earn a thin-content demotion, and a gate that reports things nobody
should act on gets ignored, which is worse than no gate.

**What it caught, on work that had just shipped.** The topic pages launched at 48% shared
content. The cause was the FAQ block: one template with the topic name substituted in. Four
fixes, in order of how much each moved the number:

1. **Move standing caveats to the section index.** How scoring works, that progress is saved
   in the browser, that difficulty is graded on our own scale — all true, all worth saying
   **once**. That was ~150 words of identical prose per page.
2. **Cut answers that only pretend to be derived.** "Is it negatively marked?" was computed
   from real data and still resolved to "0 to One-fourth of the marks" on 36 of 40 pages.
   Boilerplate in a data costume is still boilerplate.
3. **Rebuild the rest from each page's own numbers** so sentences differ because the facts
   differ — difficulty profile against the section average, which exam categories set the
   topic, pool composition.
4. **Let the unique thing dominate.** Worked examples are 100% unique per topic and are what
   the query is actually looking for. Three became six.

Result: 48% average down to 25%, worst case 35%, against a 40% ceiling.

**The rule to carry into the next batch: the fix is never "add more words".** Padding raises
the word count and the duplication together. The fix is to cut what repeats and let what
differs carry the page.

**It also re-scored the existing Logical Reasoning set pages at 75-84% boilerplate**, and a
collision check found eight of them competing with the new topic pages for the same query
(`/logical-reasoning/test/topic-syllogism` against `/practice/syllogism`, 25 questions against
293). Those set pages are now `noIndex` and out of the sitemap. They remain products to
attempt — nobody searches "logical reasoning easy set 4". The hub carries the section in
search; topic practice owns the topic queries. **When a new section overlaps an old one,
decide which page owns the query rather than letting both chase it.**

### Two kinds of cross-exam section: frozen and growing

There are now two, and the difference is not cosmetic — getting it wrong breaks either
people's saved attempts or the section's ability to grow.

**Frozen — the Logical Reasoning hub** (`logical-reasoning-data.ts`). Its sets are numbered
products: "Easy Set 2" is a specific 25 questions, its URL is indexed, and visitors hold saved
attempts against it. A published set's question list is therefore never edited. New material
becomes a new set. Composition lives in a generated module with explicit ID lists.

**Growing — Topic practice** (`practice-topics.ts`). A topic page is not a numbered product,
it is a *view of a pool*: "every Profit and Loss question on the site". It is supposed to grow.
So it holds no ID lists at all — the index is rebuilt from the live banks at build time, and
new questions join the relevant topic pools the next time the site builds.

**This is the answer to "can we grow these as we add tests".** For topic pages, yes, with no
extra work: adding exam content and growing the topic pages are the same job. For the LR hub,
no — it needs a deliberate grading round, because a difficulty ladder is only meaningful if
something graded the difficulty.

Two consequences of the growing model, worth stating because they look like bugs otherwise:

- A practice set is drawn deterministically (seeded from the topic slug) so one build is
  internally consistent — the page describes the set you actually get. Across builds the draw
  can change as the pool grows. That is intended, and the pages say so.
- Never point a numbered, frozen product at the topic index.

**Curation is editorial, not mechanical.** `PRACTICE_TOPICS` was hand-picked from the 127
canonical topics carrying 50+ questions. Excluded on purpose: section names used as topics
("Physics", "Grammar", "Logical Reasoning"), question-type labels meaningless alone ("Detail"),
single-exam specialisms, and General Awareness topics whose answers date ("Banking Awareness",
"Sports"). `canonicalTopicKey` merges only spelling and spacing variants; anything beyond that
— singular versus plural, two labels for one idea — is a judgement and lives in the topic's
`matches` array where it can be read and argued with.

**Batch 2 for this section** is the subject topics for engineering and medical entrances —
Thermodynamics, Electrochemistry, Differential Equations, Current Electricity and the rest.
Each already carries 100+ questions across 25-40 exams. They serve a different audience from
the aptitude topics and deserve their own framing rather than being appended to this list.

### How a skill section is introduced and interlinked

A section no exam owns is reachable only because we deliberately made it so. Every other
page on this site is discoverable through some exam's own navigation; a skill section has
no parent, so its discovery is designed rather than inherited. Four routes carry it, and
each is derived from data rather than hand-maintained:

1. **Homepage, "Practice by skill"** (`/in`, between the exam list and the category
   browser). Both neighbours require the visitor to already know their exam; this band is
   the homepage's only entry point that does not. Named for the pattern, not for the one
   section that exists today, so Quantitative Aptitude or English can join without a
   rename.
2. **Site chrome** — header primary nav, footer resources, mobile bottom-nav "More". Puts
   the section on every page of the site, which is what stops it depending on any single
   surface.
3. **Exam test pages → hub** (the volume route, hundreds of pages). Any test containing at
   least 10 pure-reasoning questions renders a block offering the hub. The eligibility test
   is `isLRSourceSection`, the *same predicate the hub's own extractor uses*, so a page can
   never offer the hub for a section the hub does not draw from.
4. **Hub → exams** (the reverse route, which stops the hub being a dead end). Each hub test
   page lists the exams its questions actually came from, computed from
   `getExamSlugsForQuestionIds` against the wired banks. It cannot name an exam the set
   does not contain, and it cannot go stale when a bank moves.

Plus two intent-moment links: the "next in the ladder" step on every hub test page, and a
"Practise more reasoning" action on the results screen of any exam test that contained
reasoning — the moment a person has just seen which puzzles cost them time.

**What keeps it honest.** Two single sources of truth and one build gate:

- `src/lib/logical-reasoning-sections.ts` — the section allowlist, with no imports, read by
  the extractor (`build-lr-pool.mjs` transpiles it), the exam pages, and the hub. Three
  consumers, one list, so they cannot drift.
- `getExamSlugsForQuestionIds` in `questions.ts` — the only place a question's owning exam
  is derived, from the `${examSlug}/${testId}` keys of `CHECKED_TEST_BANKS`.
- `npm run qa:links` (`scripts/audit-internal-links.mjs`, part of `qa:site`) — fails the
  build if any link on a hub page is dead, if the homepage stops linking to the hub, if the
  chrome link disappears, or if fewer than 25 exam test pages carry the offer block. The
  failure mode this guards against is silent: a refactor drops the block, the page still
  builds, stays in the sitemap, and quietly stops being findable.

**When adding the next skill section**, repeat the four routes and extend the audit's
expectations rather than inventing a new discovery pattern.

Remaining work on the hub: about 2,150 of the extracted pool are still ungraded and 181 graded
questions are not yet used by a set. Two rules learned from the second grading round:

- **Sample the families you have never sampled first.** Round one set per-family targets and
  never listed Coded Inequality, Data Sufficiency, Symbols & Alphabet or Clocks & Calendars, so
  315 questions sat unseen and four whole topic sets went unbuilt. New families add new kinds
  of practice; more of an existing family only adds volume.
- **Exclude structural clones, not just duplicates.** Later corpus slices repeat themselves
  hard — three dictionary-ordering stems appear verbatim three times, five variants of one
  lcm-divisibility trick. Every such question is individually sound and a set built from them
  still reads as padding.

A published set is frozen: its URL is indexed and visitors hold saved attempts against it, so
new material becomes a new set and never a revision of an existing one. When a family gets a
second set, give the spec a `variant` so its page title cannot collide with the first.

Non-verbal reasoning — figure series, mirror images, dice, paper folding — is still essentially
absent from the corpus (about 30 questions site-wide) and would need to be authored before the
hub could claim to cover it.

## SEO content on exam pages

The rule: **content earns rankings by being true and derived, never by repeating a
keyword.** Every sentence generated onto an exam page must come from data already
verified against the exam body's own notification — question counts, marks, duration,
negative marking, section breakdown — or be arithmetic on those numbers. Nothing about
cut-offs, vacancies, salaries or exam dates is generated, because those are the fields we
cannot derive and would therefore have to invent.

That constraint is not only an integrity rule, it is the SEO strategy. The site's whole
position is "syllabus-checked, source-linked, nothing fabricated", and stuffed or invented
copy is exactly what Google's helpful-content system demotes. Derived content, by
contrast, is unique per exam by construction and cannot be copied from a competitor
because they do not hold the data.

**Done — the exam-pattern pages** (`src/lib/exam-pattern-content.ts`, 157 exams). Was a
bare table at roughly 350 words with no prose to rank. Now carries, per stage:

- a plain-language summary naming questions, marks, duration and section count;
- **time per question**, computed — the number every aspirant actually wants;
- a marking-scheme block including the **guessing break-even accuracy**, `n / (m + n)`,
  compared against the 25% a blind four-option guess gives. This is the one genuinely
  original thing on the page: no competitor computes it, it is exact arithmetic, and it
  explains why an exam that deducts 1/3 for a wrong answer is calibrated to make random
  guessing precisely EV-neutral;
- a worked scoring example at 80% attempted and 75% accuracy;
- sectional-lock versus composite-timer consequences;
- an FAQ block with `FAQPage` schema answering the highest-volume long-tail queries
  ("is there negative marking in X", "how many questions in X", "what are the total marks
  in X", "how long is X", "does X have a sectional time limit").

**The larger opportunity, still open.** 147 of the 157 live exams have no `ExamGuide`, so
their syllabus, eligibility, selection-process, salary and previous-year-papers pages
render a placeholder and are `noIndex` — roughly 735 pages carrying no search value.
Only 10 exams (`ssc-cgl`, `ibps-po`, `ssc-chsl`, `sbi-po`, `ibps-clerk`, `rrb-group-d`,
`ssc-mts`, `ssc-gd-constable`, `sbi-clerk`, `ssc-cpo`) have syllabus and eligibility
guides; exactly one has a salary guide.

**Do not close that gap by generating it.** Eligibility age limits, pay scales and
selection-stage lists are exam-body facts, not arithmetic — writing them from the model's
memory for 147 exams would put hundreds of unverifiable claims on the site and is
precisely the failure mode the operating model's Hard Research Gate exists to prevent.
The right route is the ChatGPT content workflow producing checked `ExamGuide` packages
per exam, prioritised by search demand: syllabus first (highest volume of the five), then
eligibility, then salary. Until a page has a checked guide it should stay `noIndex`,
which is the current behaviour and is correct.

## Baseline package (what "one exam" means)

For the exam's PRIMARY objective-type stage only (e.g. Prelims, Tier 1, CBT — not a
descriptive/interview stage):

1. Research the official pattern: sections, question counts, marks, duration, negative
   marking, any unusual rules (e.g. SSC MTS's two-session split negative marking — check for
   this kind of thing, don't assume a standard single rule). Use the exam body's own site
   first; cross-check against 2-3 independent aggregator sources if the primary source isn't
   machine-readable. Cite whatever the most authoritative concrete source URL is — the exam
   body's own notification/result PDF beats a coaching site every time, even if you can't
   fully parse it.
2. Write original question banks (never copy from any source) covering every section, sized
   to match the official pattern exactly. Split roughly evenly across easy/medium/hard —
   include *some* genuinely hard-tagged questions, not just easy/medium, so future
   difficulty-tiered practice tests have real material to draw from.
3. Wire: full mock (1) + one sectional per section (matching official duration/marks) +
   2-3 quick timed tests (10/15/20 min, sliced from the same question pools — see how
   `SSC_CGL_TIER1_QUICK_TESTS` / `SSC_MTS_CBT_QUICK_TESTS` do this in `src/lib/questions.ts`
   for the pattern; don't write new content for these, just slice the pools you already wrote).
4. Add the exam to `ExamSlug` in `exams.ts`, the `EXAMS` record, and give it a `liveSlug` in
   `exam-catalog.ts`.
5. Extend `scripts/audit-question-banks.mjs`'s filename regex and expected-count logic for
   the new bank-file prefix.
6. Add a `FULL_MOCK_FAQS` entry in `src/app/[country]/[exam]/test/[testId]/page.tsx` (copy an
   existing entry's shape, write real answers for this exam).
7. Add a line for the new exam to `public/llms.txt`.

## Quality control — run every one of these before committing

1. `npm run qa:questions` — must pass clean (exact counts, no cross-file duplicate IDs/text,
   four *or* five distinct options per question checked against that question's own option
   count, valid answer index, complete source provenance, answer-balance within 3 of the
   most/least common position across every position the bank actually uses — a uniformly
   five-option bank is checked on E as well as A-D). If it fails on a duplicate, don't just reword
   blindly — check what you collided with; this has repeatedly turned out to be either an
   old generic phrasing (e.g. "Choose the correctly spelled word") or a genuinely common fact
   (e.g. "SI unit of force") already used elsewhere. Search the whole `question-banks/`
   directory for the phrase before picking a replacement, or you'll just collide again.
2. Precompute every math answer via a quick Node script before writing it into a question —
   don't hand-calculate and trust it.
3. Re-derive every logic puzzle (syllogism, coding-decoding, blood relations, seating/puzzle)
   step by step in your own reasoning before finalizing the key — these are the single most
   common source of real errors.
4. `npm run build` — must complete with a clean static export, no type errors, no thrown
   validation errors from `questions.ts`'s own structural checks.
5. No live browser available in this environment — `npm run build` succeeding, plus a manual
   read-through of the generated route list for the new exam's paths, is the available
   substitute for the browser walkthrough a human/interactive session would normally do.
6. Update `public/llms.txt`.

## Committing and pushing

- Git identity for commits: `workwithprabh` / `workwithprabh@gmail.com` — set this locally in
  the sandbox with `git config user.name`/`user.email` before committing (it won't be preset).
- Only commit and push if `qa:questions` and `build` both pass clean. If you run out of time
  or budget mid-batch, leave the sandbox's uncommitted changes as they are (they'll be
  discarded) rather than pushing a broken state — the next scheduled run will just retry the
  same exam from the last good commit.
- Tick the checkbox for the exam you completed in the queue above, in the same commit.
- **Do not deploy to Vercel.** This environment has no Vercel credentials, and deploys are a
  deliberate manual/approved step, not automatic.
- After committing, append a dated entry to `BATCH_LOG.md` (create it if it doesn't exist)
  summarizing: which exam, question counts per section, any errors caught and how they were
  fixed, and anything unusual about the exam's pattern worth flagging to a human later.
