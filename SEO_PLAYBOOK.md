# TakeMockTest — SEO / AEO / Content Playbook

Read this alongside `BATCH_ROADMAP.md` before writing or editing any user-facing copy,
question bank, or metadata. `BATCH_ROADMAP.md` is the *process* (what to build, in what
order); this file is the *judgment* (how to write it and structure it so it actually gets
found and trusted). Researched 2026-08-04 from Google's own Search Central docs plus
current third-party SEO reporting — re-check the "algorithm state" section every few months,
it goes stale fast.

## 1. Where Google's algorithm actually is right now (2026)

- **Core updates** land roughly quarterly. Two so far in 2026: March and May. Both were
  "broad core updates" — no new named ranking system, just a re-weighting of existing
  signals. Google's own comment on them: they didn't introduce new guidance beyond pointing
  site owners back to the standing helpful-content documentation. Expect another around
  Q3 2026.
- **What core updates are increasingly weighing:** how much *genuinely new information* a
  page adds versus what already ranks for the same query, topical authority (does this
  *site* — not just this page — have real depth on the subject), content freshness, and
  E-E-A-T signals.
- **Spam policy (updated 15 May 2026):** now explicitly states that "attempting to
  manipulate generative AI responses in Google Search" (AI Overviews, AI Mode) is spam —
  not just manipulating classic rankings. The March 2026 spam update specifically targeted
  "Scaled Content Abuse" (mass-produced, thin, templated pages) and was Google's fastest
  spam rollout on record (<20 hours).
- **The AI-content nuance that matters most for how we work:** Google does **not** penalize
  content for being AI-assisted. SpamBrain doesn't try to prove a page was written by AI —
  it detects *behavioral and structural patterns* correlated with low-quality, mass-produced
  content, regardless of who/what produced it. The violation is manipulative intent and
  low substance, not automation itself. Google's own guidance: disclose when automation was
  used and why it made the content better; don't hide it, but don't lead with it either —
  lead with whether the page is actually useful.
- **E-E-A-T weight:** roughly ~8% of ranking signal across average queries, but ~24% for
  YMYL ("Your Money or Your Life") topics per third-party analysis of the Sept 2025 Quality
  Rater Guidelines revision. **TakeMockTest is YMYL-adjacent** — wrong exam-pattern info or
  a fabricated cutoff can cost a real student a real exam attempt. Treat every exam-pattern
  and question-bank page as if it's held to the higher bar, not the average one.

## 2. What this means concretely for this codebase

- **Our source-provenance discipline is already our strongest E-E-A-T asset.** Every
  `EXAMS` entry citing `sourceUrl`/`checkedOn`, and every question's
  `source: {kind, reference, url, checkedOn}` (see `src/lib/exams.ts`,
  `src/lib/question-banks/*.ts`) is a textbook trust signal — official primary-source
  citation, dated, checkable. Never weaken this to move faster. If a batch can't find a
  primary source, that's a signal to slow down, not to write anonymously.
- **The real risk on this site isn't "AI wrote it," it's templated sameness.** With 10 (soon
  20+) near-identical exam page skeletons (`mock-test`, `syllabus`, `eligibility`,
  `exam-pattern`, etc. — see `src/app/[country]/[exam]/*`), the failure mode Google's March
  2026 spam update specifically targets is pages that only differ by a find-replaced exam
  name with no genuinely new information per page. Guard against this in every batch:
  - FAQ answers, hero copy, and pattern-explainer paragraphs must contain a *fact specific
    to that exam* (a real number, a real quirk like SSC MTS's split negative marking or
    IBPS RRB OA's composite timer), not a generic sentence that would be equally true of
    any exam with the names swapped.
  - Don't let batch efficiency turn into copy-paste-rename. Read the previous exam's
    equivalent paragraph before writing the new one, and change more than the noun.
- **AI disclosure:** we don't need a blanket "written by AI" banner — that's not what
  Google's guidance asks for and it wouldn't help students. What actually satisfies the
  intent is what we already do: real sourcing, dated review, an honest "syllabus-checked"
  vs status distinction. If we ever add author/reviewer bylines (see §5), keep them honest
  — a named human reviewer role is fine, a fabricated "expert" persona is not.
- **Core Web Vitals** are a tie-breaker, not a trump card, but they're basically free for us
  — static export (`output: 'export'`) means fast LCP by default. Sanity-check INP on the
  heaviest interactive route (`test/[testId]/attempt` — the palette/timer/OMR-bubble state
  machine) if it ever feels laggy on a real device; that's the one page with enough JS
  interaction to matter.
- **Structured data already in place** (`src/lib/schema.ts` + inline `Quiz`/`FAQPage` schema
  in `test/[testId]/page.tsx`): `Organization`, `WebSite`, `BreadcrumbList`, `Article`,
  `Quiz`, `FAQPage`. Keep extending `FAQPage` entries per exam (`FULL_MOCK_FAQS`) with real,
  exam-specific Q&A — this is also our best AEO lever (see §3).
- **Externally validated (2026-08-11) via Google's Rich Results Test**: all JSON-LD parses
  cleanly with zero errors on both a mock-test hub page (`Organization`/`BreadcrumbList`/
  `FAQPage`) and a full-mock test-instructions page (`BreadcrumbList`/`Quiz`/`FAQPage`).
  Google's tool reports only `Breadcrumbs`/`Organization` as "detected rich results" and
  doesn't surface `Quiz` or `FAQPage` at all, even though both parse without error. This is
  expected, not a bug: Google restricted FAQ rich-result eligibility in Aug 2023 to a narrow
  allowlist of government/health sites, and `Quiz` rich results have similarly narrow
  eligibility. Don't "fix" this by removing the markup, it's still valid semantic structured
  data and may still inform AI answer-extraction (AEO/GEO, see §3) even without the visual
  SERP rich-result treatment — only worth revisiting if Google's eligibility policy changes.

## 3. AEO / GEO (getting cited by AI Overviews, ChatGPT, Perplexity, etc.)

SEO gets the page indexed. AEO gets a fact *extracted* as a direct answer. GEO gets the
*site* cited as a source in an AI-generated response. All three matter for us now, not
theoretically — students increasingly ask "what is the SSC CGL Tier 1 pattern" straight into
an AI chat instead of clicking through search results.

- Keep the pattern we already use: a short, direct, quotable answer near the top of a
  section, immediately followed by supporting detail. AI answer-extraction favors a clean
  sentence it can lift verbatim over a paragraph it has to summarize.
- FAQ questions should be phrased the way a student would actually type or speak them
  ("Is SSC CGL Tier 1 negative marking 0.5 or 0.25?"), not how a marketer would phrase them.
- Every FAQ answer needs the concrete number/fact in the first sentence, not buried at the
  end.
- Freshness signals we already have (`checkedOn` dates) double as GEO trust signals — AI
  systems weight recency when choosing what to cite for time-sensitive facts like exam
  patterns that change year to year.
- `public/llms.txt` (already maintained per batch) is a direct, low-effort GEO lever —
  keep every new exam's line current and specific, not just "exam added."

## 4. Writing voice — what reads as human vs. what reads as generated filler

This is about quality, not disguise. Google's own line: *"Google no longer focuses only on
whether content was written by a person or generated by AI. It prioritizes quality,
originality, expertise, helpfulness, and user satisfaction."* The patterns below are the
actual quality tells, which is why they're also the patterns real editors cut.

**No em dashes or en dashes, anywhere, full stop** (added 2026-08-06, after installing the
[`blader/humanizer`](https://github.com/blader/humanizer) skill and running a full-site
audit that found ~250 of them). The em dash is one of the single most reliable AI-writing
tells, and it had crept into nearly every prose surface on this site: blog posts, FAQ
answers, exam-pattern notes, even page titles. Every new sentence must resolve the same
thought with a period, comma, colon, semicolon, or parentheses instead. In practice: use a
colon when the second half explains or expands the first, a comma or parentheses for a
short aside, and a period to just start a new sentence. Number ranges get spelled out ("2 to
3 days," not "2–3 days"). This is a hard rule, not a style preference: run a search for
`—` and `–` across any new content before committing it. See `.claude/skills/humanizer/`
(installed in this repo) for the fuller rulebook this rule is drawn from.

**Avoid:**
- Formulaic openers/closers ("In today's competitive world...", "In conclusion...").
- Throat-clearing before the actual answer: lead with the fact.
- Every sentence the same length and rhythm; every paragraph the same shape.
- Padding transition words ("Moreover," "Furthermore," "Additionally") stacked sentence
  after sentence.
- Generic claims that could apply to any exam prep site ("practice makes perfect," "start
  early for the best results") without a specific, checkable fact attached.
- Restating the question in the answer for no reason ("What is the exam pattern? The exam
  pattern is...").

**Do:**
- Lead with the number/fact, then explain it.
- Vary sentence length on purpose. A short sentence after a long one reads human.
- Use concrete specifics (real section names, real durations, real marks) instead of vague
  abstractions. We already have these from primary sources, so use them instead of filler.
- Write the way the existing FAQ/copy on this site already does at its best (see the IBPS
  RRB Office Assistant FAQs in `test/[testId]/page.tsx` as the current bar): direct,
  slightly informal, no corporate throat-clearing, one real fact per sentence.
- When explaining a quirky rule (split negative marking, composite timer), say *why it
  matters for the student's strategy*, not just that it exists. That's the "experience"
  half of E-E-A-T, not just "expertise."

## 5. Student persona — who is actually reading this

This was originally written as a single persona (Indian government/competitive-exam
aspirants: SSC, Banking/IBPS, Railways/RRB) because that was the entire catalog at the
time. As of August 2026 the catalog spans 11 categories (Government Jobs, Engineering,
Medical, Study Abroad, Management, University & Science, Defence, Law, Teaching & Research,
Commerce & Professional, Design & Hospitality), and blog content now covers several of
them too, not just Government Jobs. The traits below still hold across every vertical, a
CLAT aspirant and an SSC CGL aspirant are equally mobile-first and equally anxious about
accuracy, so treat this section as the shared baseline persona, not a Government-Jobs-only
one. What differs by vertical is the *specific* comparison anxiety (which MBA entrance,
which English test, which state law CET) and the exam vocabulary that needs to stay exact,
not the underlying behavior. Grounded in how each segment is actually served today
(Testbook, Adda247, PhysicsWallah, Gradeup, Telegram/WhatsApp study groups for Government
Jobs; a more scattered mix of coaching-institute blogs and forums for the other verticals):

- **Mobile-first, often on a budget connection.** Most study sessions happen on a phone,
  frequently between classes/work/commute, not at a desk. Page weight and load speed aren't
  abstract metrics for this audience — a slow page is a session they don't finish.
- **Price-sensitive and suspicious of hidden costs.** Free-to-start, no-signup-required is
  a real differentiator to this audience, not just a nice-to-have — keep leading with it
  (already do: "₹0 · No account required").
- **Anxious about *accuracy*, specifically.** This audience has been burned before by
  outdated exam patterns, wrong cutoffs, or recycled questions from years-old papers on
  other sites. A visible, dated, sourced "syllabus-checked" claim directly addresses their
  actual fear — keep this as the site's central trust pitch, not a footnote.
- **Comfortable with direct, slightly informal language, not bureaucratic jargon**, but they
  do expect exam terminology to be exact (section names, stage names, marking scheme
  vocabulary) — precision on the technical facts, plainness on the explanation around them.
- **Time-pressured and comparison-shopping.** They're often deciding *which* exam to pursue,
  not just how to prepare for one already chosen — the "explore by goal" / exam-directory
  framing on the homepage matches this real behavior; don't lose it in future redesigns.
- **Community-oriented.** They cross-reference against Telegram groups, coaching WhatsApp
  broadcasts, and forums — meaning a wrong fact on this site doesn't just cost one student
  quietly, it gets flagged and shared. Reinforces §2's point: never guess a pattern detail,
  always cite primary source.

## 6. Before shipping any new batch — add these checks to the existing QC checklist

(These sit alongside, not instead of, `BATCH_ROADMAP.md`'s existing 6-point QC list.)

1. Does every new FAQ/hero/pattern paragraph contain at least one fact specific to *this*
   exam that wouldn't be true if you swapped in a different exam's name? (Scaled-Content-
   Abuse guard, §2.)
2. Does the first sentence of every FAQ answer contain the actual number/fact, not a
   lead-in? (AEO extractability, §3.)
3. Read the new copy out loud once — does it sound like a person who knows this exam
   explaining it to a friend, or like a template? (§4.)
4. Is every pattern/scoring claim traceable to a `sourceUrl` + `checkedOn` in `exams.ts`?
   No exceptions, no "this is probably right."
