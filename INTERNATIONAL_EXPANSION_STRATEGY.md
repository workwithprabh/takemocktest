# Taking TakeMockTest global: which country next, and how

Written 8 September 2026. Two things to read before the recommendation, because
they change what the sensible answer is.

## 1. What we already have, measured

**The site is already country-scoped.** Every route is `/[country]/...` and
`COUNTRIES = ['in']` in `src/lib/exams.ts` is a one-element array. Adding a
second country is a data and content problem, not an architecture rebuild.
That is unusual and valuable; most sites discover they need this after they
have 5,000 URLs on the wrong shape.

**Only 7.5% of the question corpus is India-specific.** Measured across all
32,254 questions by section:

| Slice | Questions | Share | Travels to another country? |
|---|---:|---:|---|
| Quantitative, numerical, data interpretation | 8,485 | 26.3% | Yes, unchanged |
| Physics, Chemistry, Biology, Mathematics | 8,234 | 25.5% | Yes, syllabus mapping only |
| Reasoning and logical ability | 4,060 | 12.6% | Yes, unchanged |
| English language | 3,984 | 12.4% | Yes, unchanged |
| Other | 3,455 | 10.7% | Mostly |
| Professional and domain-specific | 1,620 | 5.0% | Sometimes |
| **General Awareness, polity, history, current affairs** | **2,416** | **7.5%** | **No** |

So roughly **64% of the corpus is culture-free** and another chunk needs only
re-mapping to a local syllabus. A percentage question does not care which
country's paper it appears in, which is exactly the argument the topic-practice
section is already built on.

**This is the single most important fact for the decision.** It means an
English-medium country is not a cold start. It means a non-English country
*is* a cold start, of about 30,000 questions and a whole new sourcing and QA
capability in a language the pipeline does not currently read.

## 2. On the Japan-and-anime idea

Two separate things there, and they need separate answers.

**Japan as the country: not next.** Not because it is a bad market, but
because it is the most expensive possible second market for us specifically.
The Common Test, EJU and JLPT are set in Japanese, so none of the 32,254
questions transfer and the Research, Writer and Hard QA stages would all need
to work in Japanese. The domestic incumbents (Benesse, Z-kai, Studysapuri) are
large, well funded and have been there for decades. We would be a foreign
site, in a second language, with no content, against entrenched brands. Every
structural advantage we have gets left at the border.

**Anime and cartoons as the design: this is the part I would push back on
hardest, whichever country you pick.** The instinct is "match the culture", but
it reads the culture at the wrong level. A Japanese seventeen-year-old sitting
the Common Test in January is under the same pressure as an Indian aspirant
sitting SSC CGL, and wants the same three things: is this the real pattern, is
the answer key right, and am I fast enough. Anime styling on an exam-prep site
in Japan does not read as local. It reads as a foreigner's idea of Japan, which
is worse than neutral, because the product we are selling is *credibility*. Go
and look at what Japanese students actually use: Studysapuri and Benesse are
clean, dense, serious, and look much closer to this site than to a cartoon.

There is also a compounding cost. A distinct visual identity per country means
N design systems, N sets of components, N things to keep accessible and fast on
a cheap Android phone. One design system that adapts is the only version of
this that survives ten countries.

**What should actually localise**, in rough order of how much it matters:

1. **The exam itself.** Right pattern, right marking scheme, right timing,
   cited to that country's own official document. This is 80% of localisation
   and it is the part we are already good at.
2. **Vocabulary.** Nobody in Nigeria searches "mock test", they search "JAMB
   past questions" and "CBT practice". In the Philippines the word is
   "reviewer". In the US it is "practice test". This is a real SEO decision,
   not a cosmetic one, and it affects titles, H1s and internal anchors.
3. **Trust signals.** Cite JAMB, cite PRC, cite the local board. A student
   trusts a source they recognise.
4. **Local proof.** "Matches the 2026 UTME pattern" beats any amount of
   styling.
5. **Weight and speed.** Mobile data is expensive in most of the markets worth
   entering. The static-export architecture is already a competitive advantage
   here; do not spend it on decoration.
6. **Formats.** Dates, currency, number grouping.

Cultural texture, if you want it at all, belongs in illustration choices and
photography, not in the information architecture.

## 3. Which country next

An honest caveat first: **I do not have live search-volume data in this
session**, and the ranking below is reasoning from structural fit plus general
knowledge of these exam systems, not measured demand. There is one query that
would replace judgement with evidence, and it is now wired up:

```bash
python3 scripts/gsc-query.py countries --days 90 --limit 30
```

That shows which countries are *already* finding an India-only catalogue.
Impressions from a country we have never written a page for are latent demand,
and if one of the candidates below is already showing up, that settles it.
Run this before committing.

### Tier 1: Nigeria

**Why.** One dominant funnel: JAMB UTME, roughly 1.5 to 2 million candidates a
year, computer-based, four subjects, multiple choice, English-medium, with a
published syllabus. Behind it sit WASSCE, NECO and post-UTME screening, which
is a natural second and third wave. The format is almost exactly what this
engine already models, and the language is one the pipeline already works in,
so most of that 64% transfers with relabelling rather than rewriting.

**The competitive read.** Incumbents are ad-heavy, slow on mobile, and rarely
cite a source for anything. "Syllabus-checked, here is the official document,
here is the exact marking scheme" is a genuine differentiator there in a way it
is only a hygiene factor in the US.

**The catch, stated plainly.** Advertising revenue per thousand views in
Nigeria is among the lowest in the world. If the business model is display ads,
this market needs enormous scale to matter financially. It buys audience,
authority and a proven second-country playbook, not near-term revenue.

### Tier 1 alternative: Philippines

**Why.** English-medium, a strong licensure and civil-service exam culture
(LET for teachers, the Civil Service Exam, PRC board exams, UPCAT), and the
same multiple-choice shape. Volumes are smaller than Nigeria's but revenue per
visitor is meaningfully higher, and the competition is thinner than the US.

**Pick this one instead of Nigeria if** near-term revenue matters more than
audience size. Pick Nigeria if you want the biggest possible proof that the
playbook generalises.

### Tier 2: Pakistan, Bangladesh, Nepal, Sri Lanka

**Why.** This is where content reuse peaks. MDCAT, ECAT and the HSC-level
science syllabi overlap heavily with the 8,234 physics, chemistry, biology and
mathematics questions already in the corpus. Much of it needs syllabus mapping
rather than new writing.

**Why not first.** Low revenue per visitor, and India-adjacent markets do not
prove the playbook travels; they prove it stretches. Do this when you want
cheap volume, not when you want to learn whether the model works abroad.

### Tier 3: United States and United Kingdom

**Why eventually.** Revenue per visitor is an order of magnitude higher, and we
already carry SAT, ACT, GRE, GMAT, LSAT, TOEFL, IELTS, PTE, MCAT and OET.

**Why not now.** These are the most contested exam-prep keywords on the
internet, against College Board itself, Khan Academy, UWorld, Kaplan and
Magoosh, all with enormous authority. Entering here without a differentiated
angle is buying a fight we lose slowly.

### Tier 4: Japan, Korea, Indonesia, Vietnam

Real markets, wrong time. Every one needs a non-English content pipeline first.
Revisit when Research, Writer and Hard QA can operate in a second language and
the first foreign country has proved the playbook.

### Recommendation

**Nigeria, with JAMB UTME as the single beachhead exam**, unless the Search
Console country query says otherwise or near-term ad revenue is the binding
constraint, in which case the Philippines. Do not launch a country. Launch one
exam, properly, and let it prove the model.

## 4. The SEO structure

### Subfolders, not subdomains, not country domains

Keep `takemocktest.com/ng/`, `takemocktest.com/ph/`, alongside the existing
`/in/`. This is already the shape of the codebase.

- **Subfolders** inherit the domain's authority. Everything the site has earned
  helps a new country's first page rank.
- **Subdomains** (`ng.takemocktest.com`) split that authority and add DNS and
  deployment work for no benefit here.
- **Country domains** (`takemocktest.ng`) give the strongest local signal but
  start from zero authority each, and mean N domains to renew, secure and
  build links for. Correct at large scale, wrong at the start.

`.com` is a generic TLD, which is the right kind: it carries no country
assumption to undo.

### hreflang, and the trap in it

hreflang tells Google that two URLs are *the same content for different
audiences*. That is true for some of our pages and false for most, and getting
this wrong is the standard way sites damage themselves internationally.

**Genuinely equivalent, so they should carry hreflang:**

- the homepage: `/in` and `/ng`
- topic practice: `/in/practice/percentages` and `/ng/practice/percentages`
- the logical reasoning hub and its sets
- most blog posts, where the advice is not country-specific

**Not equivalent, so they must not:**

- `/in/ssc-cgl/mock-test` and `/ng/jamb/mock-test` are different exams, not
  translations of each other. Linking them with hreflang tells Google they are
  interchangeable, which they are not.

Rules that follow: every page keeps a self-referencing canonical; hreflang is
reciprocal or it is ignored; include an `x-default`; and never point hreflang
at a page that canonicals elsewhere.

Note that Search Console's International Targeting report was retired in 2022,
so there is no country-targeting setting to flip. hreflang, on-page signals and
local links are the whole toolkit now.

### The cold-start play, which is where our corpus pays off

A new country subfolder starts with no authority and no content. The
conventional answer is to write 50 exam pages and wait. We can do better,
because of that 64%.

**Ship the exam-agnostic layer first.** Logical reasoning and quantitative
topic practice are already built, already graded, and are true in Lagos and
Manila exactly as they are in Delhi. `/ng/practice/percentages` and
`/ng/logical-reasoning` can exist on day one with real depth, drawing from the
existing pool, honestly described as general aptitude practice rather than
JAMB-specific. That gives the new subfolder genuine content and internal links
*before* a single local exam bank is written, and it gives the local exam pages
somewhere to link to when they arrive.

Then add the local exam on top, and re-point the topic pools at local banks as
they fill.

### Index management

- One sitemap index, one child sitemap per country. `src/app/sitemap.ts`
  already loops over `COUNTRIES`; it needs splitting rather than rewriting.
- Do **not** copy India's exam pages into `/ng/`. That is duplicate,
  irrelevant, and exactly the index bloat `qa:thin-content` exists to prevent.
- Keep the existing quality gates applied per country. A thin page in a new
  subfolder is more dangerous than a thin page in an established one, because
  the subfolder has no authority to absorb it.
- Follow the same rollout discipline already in `BATCH_ROADMAP.md`: batches of
  50 to 100 pages, measure for two to four weeks, then expand.

### Code changes this needs

Small, and mostly in places already built for it:

1. `COUNTRIES` in `src/lib/exams.ts` gains a second entry.
2. Exams need a country field; `exam-catalog.ts` needs per-country category
   trees.
3. `src/lib/metadata.ts` gains `alternates.languages` for the equivalent-page
   set only.
4. `src/app/sitemap.ts` splits per country under a sitemap index.
5. A `qa:hreflang` gate, in the spirit of the existing audits, that fails the
   build on a non-reciprocal or self-contradicting tag. There is an
   `seo-hreflang` skill installed that covers the rule set.

## 5. Sequence

**Phase 0, this week.** Run the Search Console country query. Decide on
evidence, not on this document.

**Phase 1, architecture. Done, 8 September 2026.** Shipped against `/in` alone; the export is byte-identical
at 4,749 pages with zero drift. Exam ownership per country in `src/lib/exam-countries.ts`, all 14 exam route
generators plus the catalogue and sitemap country-filtered, hreflang rules in `src/lib/hreflang.ts` emitting
nothing until a second country exists, and `npm run qa:hreflang` gating both the rules and the rendered output.
One deviation: the sitemap is country-scoped but not split into a per-country index, because 1,777 URLs against a
50,000 limit does not justify it yet. See `BATCH_ROADMAP.md` for the four steps that adding a country now takes.

**Phase 2, the exam-agnostic layer in the new country. Done, 9 September 2026.**
`/ng` is live with 44 indexable pages: the homepage, the topic-practice index and
its 40 topics, the reasoning hub, and about. That is inside the 40 to 80 band and
inside the 50 to 100 batch ceiling in `BATCH_ROADMAP.md`. The 60 reasoning set
pages and every attempt route are noindexed under `/ng` exactly as they are under
`/in`, so the sitemap carries 44 URLs and not one more.

What the section gates bought: flipping `COUNTRIES` alone would have published 315
pages under `/ng`, most of them 61 blog posts about Indian exams and 19 Indian
notifications. `COUNTRY_SECTIONS` in `src/lib/exam-countries.ts` reduces that to
the two sections that are as true in Lagos as in Delhi. `/ng` publishes no exams
yet, so the chrome, the homepage bands, the sitemap and hreflang all omit those
sections rather than linking into nothing.

hreflang went live with it: 882 tags across 294 pages, every set reciprocal and
resolving, and none of them pairing an Indian exam with anything. The India export
did not drift. `qa:drift` reports 148 new pages and zero changes to the 4,749 that
already existed.

Three bugs the gates caught that review had not. `notFound()` in a static export
still writes an HTML file, so `/ng/exams` shipped a "Page Not Found" body at 200,
a soft 404 on four routes; the fix is a per-page `generateStaticParams` that never
generates them. The hreflang audit had been matching `hreflang=` lowercase while
Next renders `hrefLang`, so it reported "no tags, which is correct" while 882 tags
shipped unchecked. And the internal-link audit was hardcoded to `/in`, which hid
511 dead links under `/ng`: topic and reasoning pages linking to Indian exam pages
that do not exist there. All three are now gated, and the link audit's chrome floor
counts only pages outside the section it is checking, because the old denominator
included them and could not be cleared by any build.

Measure for a month before Phase 3.

**Phase 3, the beachhead exam. First batch shipped 9 September 2026.** JAMB UTME
is live at `/ng/jamb` with **180 original questions** in four banks (Use of
English 60, Mathematics 40, Physics 40, Chemistry 40), one full mock in the
science combination and four sectionals, plus the exam directory, a syllabus
page and a selection-process page. `/ng` went from 44 to **55 indexable pages**.

**The pattern is marked review pending, not official, and that is the honest
status rather than a gap.** jamb.gov.ng is unreachable from the network this
site builds on, so the brochure could not be read. The shape of the paper (180
questions, 60 in Use of English and 40 in each of three chosen subjects, two
hours, 400 marks, no penalty for a wrong answer) is consistent across multiple
independent current sources, and it is recorded with that provenance stated in
the pattern note. It moves to official when the primary source can be read. This
follows the precedent already set for IBPS Clerk Mains in `src/lib/exams.ts`.

**What was deliberately not built.** Government, Economics and Literature in
English turn on current Nigerian civic and economic facts that need checkable
sourcing rather than reasoning a candidate can verify from the question itself,
and questions on the JAMB-recommended novel would mean asserting the content of
a prescribed text that could not be verified here. Both are the same call already
made for General Awareness on the Indian banking exams. They are a Main Brain
handoff, not a gap to fill with guesswork.

**The international exams did not come with the exams section.** Turning `exams`
on for Nigeria would have published 132 pages of SAT, IELTS and the rest
alongside JAMB, which is three things changing at once when the whole point of a
beachhead is to measure one. `INTERNATIONAL_EXAM_COUNTRIES` in
`src/lib/exam-countries.ts` makes that set opt-in per country. SAT and IELTS
under `/ng` are a deliberate later batch.

Measure before Phase 4.

**Phase 4, judge it. Pre-registered 9 September 2026, not yet evaluable.** If
JAMB ranks and holds, the playbook travels and WAEC, NECO and post-UTME follow
through the same pipeline. If it does not, we have spent one exam finding out,
not a country.

What "ranks and holds" means is now fixed in numbers in `PHASE_4_DECISION.md`,
written before the data exists, because a threshold chosen after seeing the
numbers is a rationalisation and expanding is always the more exciting option.

**The verdict cannot be read yet, and the reason is not that JAMB is new.** It is
that there is no control to measure against. This repo is 26 days old, and in
the 90 days to 7 September the whole site drew 2 clicks and 64 impressions at an
average position of 24.4, with 26 of 1,832 indexable pages ever shown. India has
not yet demonstrated the thing Nigeria would be compared against. Running the
comparison now divides one number near zero by another and calls it a strategy.

**The design, which exists by accident of sequencing.** `/in/practice` and
`/ng/practice` carry the same 40 topic pages, and the two reasoning hubs are
likewise identical, published a day apart on one domain. Whatever differs
between each pair is not the writing or the templates: it is the subfolder, its
authority and its audience. `scripts/gsc-query.py report` now emits by-country
and by-subfolder tables and the matched-pair ratios, and the weekly workflow
commits them, so the series accumulates as ordinary git history from here.

**One confound worth stating early:** JAMB is violently seasonal, with
registration and the exam in roughly the first half of the year. A weak Q4
reading is weak evidence, and the honest window for the beachhead gate is the
registration run-up.

**Phase 5.** Second country, using whatever Phase 4 taught.

## 6. For the design brief

If this goes to ChatGPT for design and structure, the brief should say:

- One design system, country-adaptive, not one design per country.
- Localise exam facts, vocabulary, trust signals and formats. Do not localise
  the visual identity into national stereotypes.
- Mobile-first on a cheap Android over an expensive network is the primary
  case in every market on this list.
- The product's promise is the same everywhere and should be visible above the
  fold: this matches your real paper, here is the official source, here is what
  a wrong answer costs you.
- Keep the static-export, no-login, no-paywall shape. It is the fastest thing
  in most of these markets and speed is a ranking and retention advantage.

## 7. What is not settled

- **Monetisation.** The Nigeria-versus-Philippines call turns on whether you
  are buying audience or revenue. Worth deciding explicitly.
- **Real demand data.** Everything above is structural reasoning. The Search
  Console country breakdown, and a keyword-volume pull if the DataForSEO
  extension gets connected, would move several of these claims from judgement
  to evidence.
- **Whether local exam bodies publish enough.** Before committing to JAMB, one
  hour confirming that the syllabus and pattern are documented well enough for
  the Research stage to work is worth more than another page of this document.
