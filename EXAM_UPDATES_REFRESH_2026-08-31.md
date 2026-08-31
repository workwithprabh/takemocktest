# Exam updates refresh — 31 August 2026

Review branch: `agent/exam-updates-refresh-aug31`, based on `origin/main` at `a8c99d2`.
This branch is separate from blog-image Batch 9. It is not a production deployment.

## Content and evidence

Five new summaries bring the feed to 19 items covering 13 exams. Each new item was checked on 31 August 2026.

| Item | Evidence and date handling |
| --- | --- |
| IBPS RRB XIV officer reserve-list allotment | [Official RRB XIV page](https://www.ibps.in/index.php/rural-bank-xiv/), directly fetched: entries dated 31 August for Officer Scales I, II and III. Links remain on the official index; no candidate credentials were accessed. |
| IBPS PO XVI correction | [Official PO/MTs XVI page](https://www.ibps.in/index.php/management-trainees-xvi/), directly fetched: corrigendum and updated vacancy annexure listed on 27 August. The summary does not infer vacancy totals or eligibility changes. |
| IBPS SO XVI correction | [Official Specialist Officers XVI page](https://www.ibps.in/index.php/specialist-officers-xvi/), directly fetched: corrigendum and vacancy annexure listed on 27 August. No unverified vacancy totals added. |
| MAT September schedule | [AIMA candidate information](https://www.aima.in/content/testing-and-assessment/mat/mat): separate PBT/CBT registration, admit-card and exam dates. The official page is undated, so our summary is labelled **Added 31 August**, not an invented official publication date. |
| GATE 2027 registration schedule | [IIT Madras important dates](https://gate2027.iitm.ac.in/important_dates): opening is TBA; revised closing dates are subject to change. Labelled **Added 31 August** because the page has no publication date. Not labelled registration open. |

The [UPSC CSE Main timetable](https://www.upsc.gov.in/sites/default/files/TT-CSM-2026-Engl-100726.pdf) was also rechecked. Its final scheduled date has passed, so the old “upcoming” status and forward-looking preparation instruction were corrected. This is not a claim that a result has been announced.

Other existing future-labelled schedules now use the evergreen status “Schedule published,” with their original source-check dates clearly visible. Only the actually rechecked UPSC entry received a new source-check date; other historical sources were not silently restamped.

The IBPS CSA correction found in search was **not added** because its direct notice link returned 404. This is a selected-source refresh, not a claim that every examination authority was exhaustively reviewed.

## UI changes

- Shorter hero, existing image retained on desktop, search closer to the top.
- Clear blue action buttons and higher-contrast amber category text using existing tokens; no new palette, font or dependency.
- Search, native exam/type/goal filters, quick category buttons and eight-item progressive loading.
- Exact exam-name matching avoids “MAT” returning an unrelated “confirmation” notice.
- Every card exposes its status-as-checked date and clickable official source.
- Two key dates on dated cards; a chronological, filter-aware “Dates to know” panel with mobile jump/back links.
- Browser date filtering removes past entries from that panel. It does not fetch new notices or rewrite source-check timestamps.
- Published times are retained in IST. Date-only notices do not invent a closing time.
- Official-notice action moved near the top of detail pages; dated notices have a jump-to-dates shortcut.
- Existing metadata functions, canonical paths and Article/BreadcrumbList/ItemList schema retained. No question banks, test patterns or scoring changed.

## Verification

- `npm run qa:updates`: passed, covering 19 entries, duplicate slugs, reviewed source hosts, source/date fields, exact-name and combined filters, newest-first sorting and India-time boundaries.
- Desktop 1280px and mobile 390px: all five new detail pages plus the corrected UPSC timetable checked for one H1, canonical URL, valid Article/BreadcrumbList JSON-LD, working source destinations and expected navigation visibility.
- Hub checked at 320px, 390px, 768px and 1280px without horizontal overflow. Search, category/exam combinations, empty states, clear filters, load-more, saved URL filters, invalid filter recovery and mobile date shortcuts checked interactively.
- Screenshots reviewed for desktop/mobile hub cards and detail layout. Final browser warning/error log was empty.
- `npm run lint` and `npm run qa:assets`: passed. The asset check covers 53 public files on this branch (blog-image Batch 9 is separate).
- Final `npm run build`: passed, generating all 3,492 routes.
- `npm run qa:onpage-seo`: passed its mandatory checks across 3,488 HTML pages: no missing titles/descriptions/canonicals, H1 failures or missing image alt text. The broader site still has 2,362 non-blocking advisories, mostly absent schema on test/attempt pages and snippet-length outliers; this is not a claim of a completely clean site-wide SEO audit.
- All five new notice URLs are present in the generated sitemap. Their rendered titles and descriptions are within the repository audit's advisory length thresholds after a final copy-tightening pass. No metadata helper or SEO policy was changed.

One unrelated existing development-server issue was observed: a browser request to missing `/favicon.ico` falls into the country route and returns a development-mode 500. The actual update routes returned 200. No favicon or routing changes are included in this focused refresh.

This is a one-time manual update. No recurring job, automatic publishing or push to `main` was set up.
