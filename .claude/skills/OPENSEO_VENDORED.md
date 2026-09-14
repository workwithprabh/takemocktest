# OpenSEO skills (vendored)

Source: https://github.com/every-app/open-seo (MIT), `plugins/openseo/skills`
Commit: 7b9ee0e4fa800e5bae9ca76f49cb273a9c677204
Vendored: 14 September 2026

These nine skills are workflows around the **OpenSEO MCP server**, not
standalone analysis. Each one calls tools like `whoami`, `list_projects`,
`run_site_audit`, `get_backlinks_overview` and `research_keywords`. Without
that server connected they will stop and ask for a connection rather than
produce anything.

To make them work, one of:

- Hosted: an account at https://openseo.so ($10/month), MCP endpoint
  `https://app.openseo.so/mcp` (HTTP, OAuth on first use)
- Self-hosted: see the repository's `docs/SELF_HOSTING_DOCKER.md` or
  `docs/SELF_HOSTING_CLOUDFLARE.md`, plus a DataForSEO API key
  (`docs/DATAFORSEO_API_KEY.md`)

Note on naming: `seo-audit` here is distinct from the separately available
`anthropic-skills:seo-audit`. The OpenSEO one is data-backed and needs the MCP;
the Anthropic one crawls and analyses without it.

Updating: re-copy from the source repo rather than editing in place, and bump
the commit above.
