# Self-hosting General Sans

General Sans is the site's body typeface (`font-sans` in `tailwind.config.ts`).
It currently loads from `api.fontshare.com` through a `<link rel="stylesheet">`
in `src/app/layout.tsx`, which blocks first paint on a third-party origin on
every one of the site's 5,708 pages. Self-hosting removes that round trip.

It is not on Google Fonts, so `next/font/google` cannot fetch it the way it
fetches JetBrains Mono. The files have to live in the repository.

They belong in this directory rather than `public/fonts/` because
`next/font/local` resolves its paths relative to the file that calls it, then
emits the fonts to `_next/static/media` with a content hash and an immutable
cache header. A file served straight out of `public/` gets neither.

## What to put here

From the General Sans download at https://www.fontshare.com/fonts/general-sans
(the "Download family" button gives a zip containing `Fonts/WEB/fonts/`):

    src/app/fonts/GeneralSans-Variable.woff2   preferred: one file, weights 200-700
    src/app/fonts/LICENSE.txt                  the ITF licence shipped in the zip

If the variable file is not in the zip, the four static weights the site
actually uses will do instead:

    GeneralSans-Regular.woff2    400
    GeneralSans-Medium.woff2     500
    GeneralSans-Semibold.woff2   600
    GeneralSans-Bold.woff2       700

Copy the licence file across as well. Fontshare's fonts are free for personal
and commercial use, and the download ships web formats precisely so they can be
served from your own origin, but the licence text is what settles that, so it
belongs in the repository next to the fonts it covers.

## What changes once they are here

1. `src/app/layout.tsx`: drop the `preconnect` and the `stylesheet` link, and
   add a `next/font/local` call beside the existing `JetBrains_Mono` one,
   exposing `--font-general-sans` with `display: 'swap'`.
2. `tailwind.config.ts`: `fontFamily.sans` becomes
   `['var(--font-general-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif']`
   instead of naming `"General Sans"` directly.
3. `src/app/globals.css`: replace the comment at the top of the file, which
   describes the external arrangement.

`next/font/local` resolves the paths at build time, so a missing or misnamed
file fails the build rather than falling back silently to a system font.
