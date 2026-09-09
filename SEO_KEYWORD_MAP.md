# Keyword strategy: one declared target per page class

Until now nothing in this repo recorded what any page was supposed to rank for.
Titles and descriptions were written per template, by whoever built the
template, which is how the largest page class on the site ended up named after
its own filing system. This file records the strategy. The machine-readable
version lives in `src/lib/seo-keywords.ts`.

## What the audit found

Measured against the built export, 4,931 pages, on 9 September 2026.

The instinct that test pages "lack content" turned out to be wrong, and the real
problem was worse. Content depth was fine: median 635 words, minimum 420, none
under 300, and exactly one `h1` on every one of the 1,123 indexable test pages.

What was missing was a reason for anyone to arrive.

| Measure | Before | After |
|---|---|---|
| Titles containing "Instructions" | 440 | 0 |
| Titles containing "mock test" | 284 | 1,044 |
| H1s containing "mock test" | 284 | 1,044 |
| H1s ending in a bare serial number | 1,110 | 0 |
| Duplicate titles | 66 | 0 |
| Duplicate meta descriptions | 317 | 0 |
| Titles containing "questions" | 0 | n/a, moved into descriptions |

Every one of those defects was confined to the test class. The 164 exam
mock-test hub pages, the 136 exam-pattern pages and the guide pages had zero
duplicate titles and zero duplicate descriptions between them, and were already
targeted sensibly.

The headline defect: **1,110 of 1,123 H1s ended in a serial number** and 440
titles led with the word "Instructions". "BCECE Physics Sectional Test 1:
Instructions" describes a row in our database. Nobody types it. Meanwhile
first-party Search Console data shows the demand arriving as "rrb ntpc mock
test", "ssc cgl free mock test", "rrb ntpc ug mock test free": the pattern is
always "{exam} [modifier] mock test".

## The cannibalisation question, answered with SERP data

Every exam has one mock-test hub and around seven child test pages. If both
target "{exam} mock test" they compete with each other.

Rather than assume, this was tested with the SERP-overlap method from the
`seo-cluster` skill: search both phrases, count shared URLs in the top ten.

| Query | Shared URLs in top 10 |
|---|---|
| "ssc cgl mock test" vs "ssc cgl quantitative aptitude mock test" | **1** (testbook.com/ssc-cgl/test-series) |

On that skill's own threshold table, 0 to 1 shared results means **separate
clusters**. The two phrases return substantially different result sets, so a hub
page and a sectional page can each rank without taking the other down. The split
below is evidence-led, not a guess.

Two further observations from that SERP, both of which the old titles failed:
competitors rank with the **stage** in the title ("SSC CGL Tier 1 Quantitative
Aptitude - Mock Test") and with the word **questions** ("SSC CGL Quantitative
Aptitude Questions and Answers Online Test"). We had the stage in no sectional
title and the word "questions" in none at all.

Caveat worth stating: WebSearch here returns US results, and this site's
audience is Indian. The overlap figure is directionally sound but should be
re-run against Indian SERPs before it is leaned on harder.

## The map

The full table with title and H1 requirements is in `src/lib/seo-keywords.ts`.
The rule that matters:

> A keyword belongs to exactly one page class per country. Where two classes
> could claim the same phrase, the more specific class qualifies its own.

| Page | Primary keyword | Intent |
|---|---|---|
| `/{country}` | free online mock test | transactional |
| `/{country}/exams` | competitive exams list | browse |
| `/{country}/exams/{category}` | {category} exams | browse |
| `/{country}/{exam}` | {exam} | informational |
| `/{country}/{exam}/mock-test` | **{exam} mock test** | transactional |
| `/{country}/{exam}/test/{full-mock}` | {exam} full mock test | transactional |
| `/{country}/{exam}/test/{sectional}` | **{exam} {section} mock test** | transactional |
| `/{country}/{exam}/exam-pattern` | {exam} exam pattern | informational |
| `/{country}/{exam}/syllabus` | {exam} syllabus | informational |
| `/{country}/{exam}/eligibility` | {exam} eligibility | informational |
| `/{country}/{exam}/selection-process` | {exam} selection process | informational |
| `/{country}/{exam}/salary` | {exam} salary | informational |
| `/{country}/{exam}/previous-year-papers` | {exam} previous year question papers | informational |
| `/{country}/practice/{topic}` | {topic} questions with answers | transactional |
| `/{country}/logical-reasoning` | logical reasoning questions | transactional |

The exam hub deliberately does not claim "{exam} mock test". That belongs to the
mock-test hub, which is the money page for each exam. The hub page answers "what
is this exam".

## What changed in this batch

**Sectional titles, H1s and descriptions are built from a search name.** One
helper, `buildSearchName`, used by both `generateMetadata` and the `h1`, so the
two can never drift apart. "BCECE Physics Sectional Test 1: Instructions" became
"BCECE Physics Mock Test 1: Free Practice".

**The stage is included where an exam has more than one stage carrying tests.**
Without it, NIACL AO Prelims and Mains produced byte-identical titles. The prefix
is suppressed where it would repeat text the name already carries, which is why
JEE Advanced does not read "Paper 1 Paper 1" and AILET does not read "Logical
Reasoning Logical Reasoning".

**79 cross-exam shared tests were noindexed.** These serve another exam's
question bank verbatim under a different exam's name, five per exam, all
competing with each other and with that exam's own sectional for one phrase.
That is self-cannibalisation and duplicate content. They remain in the product
and reachable from Explore Similar Tests, which is what they were built for. The
sitemap drops from 1,837 to 1,757 URLs as a result, and that reduction is the
point rather than a cost.

## What this does not yet cover

- **Blog posts** target per page rather than per template, so the map cannot
  state their keyword. Each post needs its own declared target.
- **Exam updates** are news-shaped and were left out of the gated classes.
- **`/ng`** inherits every template change automatically, so JAMB's pages got the
  same treatment without a separate batch.
- **No keyword volume data exists.** There is no DataForSEO or paid tool here, so
  the map is built from first-party Search Console demand plus SERP shape. It
  says which page owns which phrase; it does not rank those phrases by size.
