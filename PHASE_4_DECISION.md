# Phase 4: judging the Nigeria beachhead

Phase 4 in `INTERNATIONAL_EXPANSION_STRATEGY.md` is a decision, not a build:

> If JAMB ranks and holds, the playbook travels and WAEC, NECO and post-UTME
> follow through the same pipeline. If it does not, we have spent one exam
> finding out, not a country.

This file fixes what "ranks and holds" means, in numbers, **before the data
exists**. That ordering is the whole point. Once the numbers are in, any
threshold chosen after seeing them is a rationalisation, and expanding is always
the more exciting option, so the bar would drift down to meet whatever arrived.

## Why the verdict cannot be read yet (9 September 2026)

Not "JAMB launched today", though it did. The deeper reason is that there is no
control to measure against.

| | |
|---|---|
| First commit in this repo | 14 August 2026, 26 days ago |
| Indexable pages built | 1,832 |
| Pages with any impressions in 90 days | 26, which is 1.4% |
| Site totals, 90 days to 7 September | 2 clicks, 64 impressions, average position 24.4 |
| `/ng` age | 0 days |

Phase 4 asks whether a second country earns visibility the way the first one
does. India has not yet demonstrated the thing Nigeria would be compared
against: 64 impressions across a quarter, nothing on page one, and 98.6% of
pages never shown. Running the comparison now would divide one number near zero
by another number near zero and call the result a strategy.

So the honest state of Phase 4 today is **not evaluable**, which is different
from "failing". The work available now is to build the instrument and fix the
thresholds, both of which are done in this change.

## The measurement design

`/in/practice` and `/ng/practice` carry the **same 40 topic pages**.
`/in/logical-reasoning` and `/ng/logical-reasoning` carry the **same reasoning
hub**. Same domain, same templates, same questions, published a day apart.

That is an unusually clean control. Whatever differs between each pair is not
the writing, the schema, the internal linking or the page speed. It is the
subfolder, its authority, and its audience. This is the measurement Phase 4
actually wants, and it exists by accident of how Phases 2 and 3 were sequenced.

`/ng/jamb` has no twin, so it is judged on its own terms against Nigerian JAMB
queries.

`scripts/gsc-query.py report` now emits a by-country table, a by-subfolder
table, and the matched-pair ratios. `.github/workflows/gsc-report.yml` commits
that report weekly, so the series accumulates as ordinary git history.

## Precondition, checked first

**P. The control has a signal.** `/in/practice` plus `/in/logical-reasoning`
must reach **200 impressions in a 28-day window** before any ratio below is
read.

200 is a judgement, not a derivation, and the reasoning is the smallest
meaningful step: at 100 impressions a single Nigerian impression moves the ratio
by a whole percentage point, so ordinary week-to-week noise would swamp any real
effect. At 200 a 5% difference is 10 impressions rather than 1. Revise this
number if it is wrong, but revise it **before** reading the gates, not after.

Until P is met the answer is "too early". Re-check monthly. Do not expand, and
do not record a failure.

## The gates

All read on a 28-day window, after P is met.

**A. Indexation.** At least 70% of the sitemapped `/ng` URLs are indexed, and
that rate is at least 80% of the same rate for `/in`.
*Not available from the Search Analytics API.* Read it from the Search Console
Pages report filtered to `/ng`, or via the URL Inspection API.

**B. The playbook travels.** `/ng/practice` impressions are at least **5%** of
`/in/practice` impressions in the same window.
Deliberately far below parity: Nigeria's search market for these topics is
smaller and the subfolder has no accumulated authority. The claim under test is
proportional traction, not equality. Zero is the failing answer.

**C. The beachhead ranks.** `/ng/jamb` receives impressions for queries
containing "jamb", at an average position of **40 or better**.
Position 40 is not success. It is evidence that Google has placed the pages in
the considered set for their own target queries at all, which is the thing worth
knowing before writing WAEC and NECO.

**D. It holds.** Two windows **eight weeks apart**: `/ng` impressions
non-decreasing, and `/ng/jamb` average position no more than 10 places worse.
This is the "and holds" clause. New content routinely spikes and decays, and a
single good window would otherwise buy an expansion it did not earn.

## What each outcome means

| Outcome | Reading | Next |
|---|---|---|
| P not met | Too early | Re-check monthly. Nothing else follows. |
| A fails | Crawl or indexation problem | Fix the technical cause. Do not add content. |
| A passes, B fails | Indexed but invisible: an authority problem, not a content problem | Links and distribution. **Not** WAEC and NECO. More pages cannot fix this. |
| A and B pass, C fails | The exam-agnostic layer travels, the beachhead exam does not rank | Deepen JAMB: the missing subjects, more mocks. Do not widen. |
| A, B and C pass, D fails | Spike then decay | Investigate depth and freshness before expanding. |
| All pass | The playbook travels | Phase 5: WAEC, NECO and post-UTME through the same pipeline. |

## Confounds to record when the window is read

- **JAMB is violently seasonal.** UTME registration and the exam itself fall in
  roughly the first half of the year, so Nigerian JAMB query volume in
  September to December is off-season. A weak reading in Q4 is weak evidence.
  The honest window for gate C is the registration and exam run-up.
- **A large `/in` batch during the window moves the control**, which changes
  every ratio here without anything having happened in Nigeria. Note any batch
  landing inside a measured window.
- **A Google core update** inside the window makes the comparison to the
  previous window unsafe.
- **Backlinks.** The domain currently has close to no external authority. A
  single good link, in either direction, is large relative to that base.
- **Both subfolders are new.** `/in/practice` launched only a day before
  `/ng/practice`, so the control is itself still climbing. That is fine for the
  ratio and wrong for absolute expectations.

## What Phase 4 does not ask

Whether the JAMB content is any good. That is what the question banks, the
frozen content contract and the QA chain are for, and it is settled before
publication rather than by Search Console afterwards.
