# Privacy policy: global core plus jurisdiction sections

Raised 10 September 2026, during the Batch 1 close-out scan for hardcoded
country strings. Held for legal review rather than written by the coding agent.

## The problem

`src/app/[country]/privacy/page.tsx` renders under `[country]`, so one document
serves both `/in/privacy` and `/ng/privacy`. Its text is India-only:

- "It is intended to comply with the principles of India's Digital Personal Data
  Protection Act, 2023 (DPDP Act)."
- A section headed "Your rights under the DPDP Act, 2023".
- "We will acknowledge and address valid privacy grievances in accordance with
  applicable Indian law."

A Nigerian visitor is therefore told their rights come from an Indian statute.

This is not only a copy problem. Nigeria has its own Nigeria Data Protection Act
2023, and the Nigerian regulator's position is that the Act can reach an
organisation outside Nigeria when it processes personal data of a data subject in
Nigeria. The NDPA framework includes rights of access, rectification, objection,
restriction, portability and erasure, places duties on data controllers, and
requires privacy information to be clear, concise, transparent and accessible to
the class of data subjects it addresses. India's own position has also moved on,
with the DPDP Rules 2025 sitting alongside the 2023 Act.

## Why the coding agent is not writing it

The same rule that holds for clinical question banks holds here, and for the same
reason: an answer that must be checkable against an external authority is not one
this repository can establish on its own. A privacy policy is a legal
representation to users and a regulator. Drafting one from an agent's reading of
two statutes would produce text that sounds authoritative and carries no
verification behind it, which is worse than the honest gap it replaced.

## The structure to build

One global core that describes what is actually true of the product, and
jurisdiction sections layered on top. Do not fork the whole document per country.

**Global core**, true everywhere:

- what TakeMockTest collects, and what it deliberately does not
- account and attempt data, and where it is stored
- cookies and analytics
- purposes of processing
- retention
- third parties and processors
- security measures
- how to contact us and how to make a data request

**Jurisdiction sections**, rendered by country segment:

- *For users in India*: the applicable DPDP Act 2023 and DPDP Rules 2025
  provisions, rights, and the grievance route.
- *For users in Nigeria*: the applicable NDPA 2023 provisions, rights, and the
  contact and complaint route.

Shape it so a third country is a new section rather than a new document. The
`contentLocale(country)` helper added in `src/lib/hreflang.ts` is the pattern:
country in, country-specific value out, one map to extend.

## Implementation notes for whoever builds it

- The page already renders from a `SECTIONS` array, so the global core stays as
  it is and jurisdiction sections append based on the `country` param.
- Every jurisdiction section needs its own `checkedOn` style provenance, because
  data protection law moves and an undated compliance claim rots silently.
- `scripts/audit-canonicals.mjs` and the hreflang audit already cover the page
  technically; nothing in the QA chain can check whether the legal content is
  correct, and nothing should pretend to.

## Gate

Final legal wording must be reviewed by someone qualified in each jurisdiction
before the site relies on it for compliance. Ship the structure when it is ready;
ship the wording when it has been reviewed.
