# Blog Image Batch 12

**Status: requested, not yet generated.** Written 21 September 2026 alongside the two new
banking-comparison posts in `src/lib/blog.ts`. The prompts below are ready to run through
ImageGen on the machine that produced batches 5 to 10. Nothing in this file has been
generated or committed as an asset.

The coding-agent environment that wrote the posts has no image generation available: no
ImageGen extension, no Pillow, no ImageMagick. That is why this is a prompt file rather than
two `.webp` assets, and it is the same reason Batch 11 is still outstanding.

Two original conceptual editorial images; not official exam photography or student
testimonials. Same house preamble, aspect ratio and export settings as Batch 10: 1280 x 720
WebP, quality 82, original PNGs retained outside the repository.

## Coverage

Both posts ship **without** a `BlogPost.image`, which the article template, listing cards and
related-reading thumbnails already handle: they render text-only cards and skip the hero.
Each carries an original inline SVG diagram instead (`src/components/blog/BlogDiagrams.tsx`),
which for these two is the better illustration anyway, since both posts are arguments about
how marks and minutes are distributed rather than about a study routine.

So this batch is an enhancement, not a fix.

| Post | Diagram it already has | Hero image |
|---|---|---|
| `sbi-po-vs-ibps-po-same-totals-different-maths` | `po-mains-marks-per-question` | requested below |
| `sbi-clerk-vs-ibps-clerk-the-shorter-paper-is-faster` | `clerk-mains-pace` | requested below |

After generating, add the `image` field to each post in `src/lib/blog.ts` (src, alt, width
1280, height 720), then run `npm run qa:assets` and `npm run qa:drift`. The drift audit will
report the two pages as `open graph changed`, which is expected: `og:image` is new.

## Assets and exact final prompts

Every prompt below begins with the standing house preamble, unchanged from Batch 10:

> Use case: photorealistic-natural. Asset type: TakeMockTest blog cover, wide 16:9 landscape.
> Authentic Indian educational editorial photography with realistic skin, paper and fabric
> texture, soft natural daylight, restrained navy and muted teal with warm wood neutrals. Keep
> important subjects within a safe central 16:9 crop. Conceptual AI-generated image, not
> documentation of a real exam or student endorsement. No readable text, letters, numbers,
> scores, ranks, logos, official insignia, watermarks, certificates or invented official
> interfaces. No text overlays.

### sbi-po-vs-ibps-po-same-totals-different-maths

Target asset: `public/images/blog/sbi-po-vs-ibps-po-same-totals-different-maths.webp`

Alt: Two equal stacks of practice paper with the sheets inside them grouped into very
different bundle sizes

Scene prompt (append to the preamble):

Overhead three-quarter view of a plain wooden desk in soft daylight holding two neat stacks
of unbranded practice paper of visibly identical height, placed side by side with a hand's
width between them. The left stack is loosely banded into a few thick bundles; the right
stack is banded into many thin ones, so the two totals match while their internal grouping
plainly does not. A young Indian competitive-exam aspirant's hands rest lightly at the near
edge, one fingertip touching the thickest bundle. Sheets show only defocused ruled lines and
neutral answer circles. Calm, considering expression, realistic hands and paper texture. No
charts, bars, arrows, percentages, scales, balances or comparison graphics of any kind. No
laptops, no visible institution names, no split-screen or two-column framing that would read
as an infographic.

### sbi-clerk-vs-ibps-clerk-the-shorter-paper-is-faster

Target asset: `public/images/blog/sbi-clerk-vs-ibps-clerk-the-shorter-paper-is-faster.webp`

Alt: A short stack of practice paper beside a plain analogue desk clock, conveying a brisker
pace rather than a lighter workload

Scene prompt (append to the preamble):

Eye-level candid photograph of an Indian aspirant mid-attempt at a bright study table, one
hand turning a sheet from a noticeably short stack of plain practice paper while the other
rests near a small plain analogue desk clock with unmarked or heavily defocused face. Posture
and expression convey brisk, focused urgency rather than fatigue or panic. Warm natural
window light, realistic hands, ordinary casual clothing. The clock must carry no readable
numerals and no legible hand positions. No hourglasses, stopwatches, digital timers,
countdown displays, motion-blur streaks, running or racing imagery, charts, or any second
stack placed for comparison.
