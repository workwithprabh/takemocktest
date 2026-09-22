# Blog Image Batch 13

**Status: requested, not yet generated.** Written 22 September 2026 alongside
`how-much-time-per-question` in `src/lib/blog.ts`. The prompt below is ready to run through
ImageGen on the machine that produced batches 5 to 10. Nothing in this file has been
generated or committed as an asset.

The coding-agent environment that wrote the post has no image generation available: no
ImageGen extension, no Pillow, no ImageMagick. That is why this is a prompt file rather than
a `.webp` asset, and it is the same reason Batches 11 and 12 are still outstanding.

One original conceptual editorial image; not official exam photography or a student
testimonial. Same house preamble, aspect ratio and export settings as Batch 10: 1280 x 720
WebP, quality 82, original PNGs retained outside the repository.

## Coverage

The post ships **without** a `BlogPost.image`, which the article template, listing cards and
related-reading thumbnails already handle: they render a text-only card and skip the hero. It
carries an original inline SVG diagram instead (`seconds-per-question-spread` in
`src/components/blog/BlogDiagrams.tsx`), which is the better illustration for its central
claim, since the argument is about how 167 official patterns distribute rather than about a
study routine.

So this batch is an enhancement, not a fix.

| Post | Diagram it already has | Hero image |
|---|---|---|
| `how-much-time-per-question` | `seconds-per-question-spread` | requested below |

After generating, add the `image` field to the post in `src/lib/blog.ts` (src, alt, width
1280, height 720), then run `npm run qa:assets` and `npm run qa:drift`. The drift audit will
report the page as `open graph changed`, which is expected: `og:image` is new.

## Assets and exact final prompts

The prompt below begins with the standing house preamble, unchanged from Batch 10:

> Use case: photorealistic-natural. Asset type: TakeMockTest blog cover, wide 16:9 landscape.
> Authentic Indian educational editorial photography with realistic skin, paper and fabric
> texture, soft natural daylight, restrained navy and muted teal with warm wood neutrals. Keep
> important subjects within a safe central 16:9 crop. Conceptual AI-generated image, not
> documentation of a real exam or student endorsement. No readable text, letters, numbers,
> scores, ranks, logos, official insignia, watermarks, certificates or invented official
> interfaces. No text overlays.

### how-much-time-per-question

Target asset: `public/images/blog/how-much-time-per-question.webp`

Alt: A single practice sheet held mid-turn above a desk, with the rest of the paper still
untouched beside it

Scene prompt (append to the preamble):

Close three-quarter view of an Indian competitive-exam aspirant at a plain wooden study desk
in soft daylight, caught in the instant of deciding whether to stay on the sheet in hand or
move to the next one. One hand holds a single sheet of unbranded practice paper slightly
raised from the desk; the other rests flat on a thick untouched stack beside it, fingers
spread as though measuring how much is left. The gesture should read as budgeting what
remains rather than as hurry or exhaustion. Sheets show only defocused ruled lines and
neutral answer circles. Realistic hands and paper texture, ordinary casual clothing, calm
and slightly pressed expression. No clocks, watches, hourglasses, stopwatches, timers,
countdown displays or calendars of any kind. No charts, bars, dials, arrows, gauges or
comparison graphics. No motion blur, running or racing imagery. No laptops, no visible
institution names, no split-screen framing that would read as an infographic.
