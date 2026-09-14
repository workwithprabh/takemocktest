# deslop (vendored)

Source: https://github.com/every-app/open-seo (`.agents/skills/deslop`)
Commit: 7b9ee0e4fa800e5bae9ca76f49cb273a9c677204
Vendored: 14 September 2026

Separate work, separate licence: MIT, Copyright (c) 2026 Stephen D. Turner.
`LICENSE` in this directory is that licence, not OpenSEO's, and must travel
with the skill on any re-copy.

Unlike the nine OpenSEO skills alongside it, this one needs no MCP server and
no account. It is prose guidance and works standalone.

Its frontmatter carries `metadata: internal: true`, kept from upstream. In the
source repository that flag marks the skills held back from the published
plugin rather than anything Claude Code reads; it correlates exactly with the
set absent from `plugins/openseo/skills`.

Why it earns a place here: rules 7 and 9 both say "No em dashes", which is what
SEO_PLAYBOOK.md section 4 requires and scripts/audit-dashes.mjs enforces on
every build. The rest of the catalogue (filler openers, binary contrasts,
self-posed rhetorical questions, bold-first bullets, fractal summaries) covers
tells that audit cannot see.

Updating: re-copy from the source repo, keep LICENSE, and bump the commit above.
