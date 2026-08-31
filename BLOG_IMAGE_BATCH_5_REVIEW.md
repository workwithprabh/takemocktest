# Blog Image Batch 5: current-site review

Reviewed 31 August 2026. Brings the previously unmerged Batch 5 images onto the current site for review. Five existing images are reused unchanged. One clearer exam-day image was generated using built-in ImageGen, not the API/CLI.

Scope: image assets and six existing `BlogPost.image` fields only. No article copy, test content, layouts or SEO configuration changed. These are conceptual editorial visuals, not official exam photography or student testimonials.

## Final assets

All images are 1280 x 720 WebP files.

- [General Awareness](public/images/blog/preparing-general-awareness-without-drowning-in-current-affairs.webp)
- [Exam-day preparation, v2](public/images/blog/exam-day-checklist-what-to-carry-v2.webp)
- [Vocabulary](public/images/blog/building-vocabulary-without-rote-memorization.webp)
- [Exam notifications](public/images/blog/how-to-read-an-exam-notification.webp)
- [Spaced repetition](public/images/blog/spaced-repetition-how-to-actually-remember-what-you-study.webp)
- [MBA entrance exams](public/images/blog/cat-vs-mat-vs-cmat-choosing-your-mba-entrance.webp)

## Exam-day correction

The old image put a phone and watch alongside an illustrated packing checklist. That could imply those items are allowed inside an exam hall, contradicting the article's caution to check exam-specific rules. The new image shows document preparation without a packing list or electronic devices. Its alt text describes the scene without claiming any item is universally permitted.

The [superseded image](docs/visual-review/exam-day-checklist-what-to-carry-superseded.webp) is preserved outside `public/` for review; it is not served by the website. The other five original generation prompts were not included in the old commit and are not reconstructed here.

## Final generation prompt for the new exam-day image

Use case: photorealistic-natural. Asset type: TakeMockTest blog hero image for an exam-day preparation checklist, wide 16:9. Primary request: a calm Indian student in their twenties at a home study desk reviewing a small stack of printed papers before placing them in a plain navy document folder. Over-the-shoulder medium close-up, realistic hands, paper grain and fabric, soft morning window light, warm wood, navy and muted neutral colors consistent with candid educational editorial photography. A few abstract grey lines on papers suggest reading but are out of focus and contain no readable text, official seals, names, numbers, photographs or ID details. Keep face, hands and folder comfortably inside a centered 16:9 crop. This is conceptual preparation imagery, not an official checklist or evidence of permitted items. Show only papers and folder on the desk, with softly blurred books in the background. No phone, watch, clock, calculator, headphones, bottle, pen, bag, equipment checklist, icons, check marks, text overlays, logos, seals, watermarks or fake credentials. No implied all-exam packing advice.

Source output: `exec-8b79e8ea-ebf1-44fe-8c22-c462c4ff9f18.png`. Converted with the existing Sharp dependency to 1280 x 720 WebP, quality 82 (45,198 bytes).

## Verification

- Final production build passed with the corrected image (3,487 generated pages).
- Standalone lint and public-asset audits passed; no orphaned or duplicate public files.
- All 48 blog images match their declared 1280 x 720 dimensions and WebP format.
- Data comparison against main confirmed exactly six image additions, with all other fields unchanged across all 58 articles.
- All six article pages checked at desktop (1280px) and mobile (390px) widths: loaded images, descriptive alt text, one H1 per page, no horizontal overflow, and expected mobile navigation visibility.
- Desktop and mobile blog-grid checks passed; the six cards use the correct assets. No browser warnings or errors observed.
- No article-accuracy audit or SEO redesign was performed; this is an image-only review.

## Coverage

This review branch supplies images for 48 of 58 blog articles. Ten articles still need images. Main remains unchanged until the review branch is approved for merge.
