# Batch Log

Dated entries appended by whoever completes a batch (live session or scheduled cloud agent).

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
