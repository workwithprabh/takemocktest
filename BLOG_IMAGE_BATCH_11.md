# Blog Image Batch 11

**Status: requested, not yet generated.** Written 7 September 2026 alongside the three new
posts in `src/lib/blog.ts`. The prompts below are ready to run through ImageGen on the
machine that produced batches 5 to 10; nothing in this file has been generated or committed
as an asset yet.

Three original conceptual editorial images; not official exam photography or student
testimonials. Same house preamble, aspect ratio and export settings as Batch 10: 1280 x 720
WebP, quality 82, original PNGs retained outside the repository.

## Coverage

The three posts added on 7 September 2026 ship **without** a `BlogPost.image`, which the
article template, listing cards and related-reading thumbnails already handle: they render
text-only cards and skip the hero. Each post instead carries an original inline SVG diagram
(`src/components/blog/BlogDiagrams.tsx`), which for these three is the better illustration
anyway, since all three are arguments about data rather than about a study routine.

So this batch is an enhancement, not a fix. Coverage today is 58 of 61 articles.

| Post | Diagram it already has | Hero image |
|---|---|---|
| `exams-that-share-sections-what-actually-transfers` | `shared-sections-map` | requested below |
| `practice-by-topic-instead-of-by-exam` | `corpus-two-cuts` | requested below |
| `reasoning-has-23-names-on-indian-exam-papers` | `one-skill-many-names` | requested below |

After generating, add the `image` field to each post in `src/lib/blog.ts` (src, alt, width
1280, height 720), then run `npm run qa:assets` and `npm run qa:drift`. The drift audit will
report the three pages as `open graph changed`, which is expected: `og:image` is new.

## Assets and exact final prompts

Every prompt below begins with the standing house preamble, unchanged from Batch 10:

> Use case: photorealistic-natural. Asset type: TakeMockTest blog cover, wide 16:9 landscape.
> Authentic Indian educational editorial photography with realistic skin, paper and fabric
> texture, soft natural daylight, restrained navy and muted teal with warm wood neutrals. Keep
> important subjects within a safe central 16:9 crop. Conceptual AI-generated image, not
> documentation of a real exam or student endorsement. No readable text, letters, numbers,
> scores, ranks, logos, official insignia, watermarks, certificates or invented official
> interfaces. No text overlays.

### exams-that-share-sections-what-actually-transfers

Target asset: `public/images/blog/exams-that-share-sections-what-actually-transfers.webp`

Alt: Aspirant comparing two exam preparation notebooks with one shared stack of practice books between them

Scene prompt (append to the preamble):

Overhead three-quarter view of a young Indian competitive-exam aspirant at a plain wooden
desk in soft daylight, hands resting between two separate stacks of unbranded notebooks
placed to the left and right. Between the two stacks sits a third, larger shared stack of
plain practice workbooks that both hands can reach, conveying material common to both
without any chart, diagram, arrow, percentage or comparison graphic. Notebooks are closed or
show only blurred ruled lines and neutral answer circles. Calm, considering expression. No
laptops, no visible institution names, no two-column layouts implying an infographic, no
scales, balances or tug-of-war imagery.

### practice-by-topic-instead-of-by-exam

Target asset: `public/images/blog/practice-by-topic-instead-of-by-exam.webp`

Alt: Loose practice sheets re-sorted into small topic piles instead of kept as whole papers

Scene prompt (append to the preamble):

Eye-level candid photograph of an Indian aspirant in ordinary casual clothing sorting loose
plain practice sheets into four or five small neat piles across a bright study table, one
sheet held mid-air as it is placed. A single intact stapled paper sits pushed to one side,
still whole, to contrast with the sorted piles. Sheets carry only defocused ruled lines and
neutral answer circles, never readable text or numerals. Warm natural window light, relaxed
concentrated posture, realistic hands. No grids drawn on the desk, no colour coding, no
sticky notes with writing, no laptop screens, no charts or dashboards.

### reasoning-has-23-names-on-indian-exam-papers

Target asset: `public/images/blog/reasoning-has-23-names-on-indian-exam-papers.webp`

Alt: Several different unlabelled exam workbooks open beside each other showing similar puzzle-grid layouts

Scene prompt (append to the preamble):

Close overhead flat-lay of five or six different plain unbranded workbooks fanned open side
by side on a warm wooden surface, each showing a visually similar abstract puzzle layout:
simple empty square grids, small circles connected by plain lines, and rows of blank boxes.
No letters, digits, symbols, section headings or captions anywhere on the pages. Covers are
different plain colours and textures to show they come from different books, with no titles
or emblems. One hand rests lightly at the edge of the frame. Soft even daylight, gentle
paper texture, shallow depth of field falling off at the corners. No pens writing, no
official papers, no logos, no infographic styling.

## Verification to run after generating

- `npm run lint`
- `npm run qa:assets` (catches an unreferenced or duplicated asset)
- `npm run build`, then `npm run qa:drift` (expect exactly three `open graph changed` rows)
- Confirm each file is 1280 x 720 WebP and check the three article pages plus their library
  thumbnails at 1280-pixel desktop and 390-pixel mobile widths.

This is an image-only brief, not an exam-content accuracy audit.
