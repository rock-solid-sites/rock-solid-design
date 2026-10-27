# Site Design — closeout and restart brief
**Session:** 27 October 2026 · **Workstream:** visual look and feel · **Status:** 25 Oct visual baseline approved; subsequent homepage refinement remains draft.

## Purpose and ownership
Defines how the Rock Solid Sites website looks: materials, typography, spacing, contrast, page rhythm, responsive hierarchy and component styling. This is **distinct** from what the business says (see [Layout and Voice](layout-and-voice.md)), its eventual logo, and the explanatory schematic system. The canonical implementation contract is in the **private website repo**, not this public note.

## Established / approved
- The **25 October 2026 owner-approved three-page visual contract** is authoritative: warm off-white `#FAFAF8`, 8px graph paper (1px 5%-black), Geist / Geist Mono, graphite `#111111`, secondary charcoal `#303034`, and stepped neutral surfaces `#F0F0EE`, `#E8E8E6`, `#E0E0DD`, `#D8D8D5`.
- Site layout vocabulary: 1120px maximum page width; responsive gutters `clamp(24px, 5vw, 64px)`; meaningful asymmetrical 12-column splits; hairline structural separators; modest 8/12px corners; generous negative space. Strong black hero/Writing/footer rhythm, visually differentiated charcoal Related Articles, otherwise light grid-paper reading surfaces.
- No gradient-heavy SaaS imagery, arbitrary marketing badges/indexes, ornamental shadows, decorative label leaders, estimated read times, or invented content filling the layout. Links and calls to action only when real destinations/actions exist.
- Shared semantic Astro building blocks rather than per-page cloned CSS: `Base`, `Header`, `Footer`, `PageW`, `DarkSection`, `PageHero`, `CardGrid`, and purpose-specific content cards. Keyboard focus, progressive/no-JS access, reduced-motion support and WCAG 2.2 AA remain **targets**, not certified compliance.
- A public, framework-neutral foundation was **extracted** into `rock-solid-design` v0.1.0: tokens, optional foundational CSS and provisional schematic styling. The exact site tokens were preserved. This does not itself adopt any new logo.

## Explored / implemented but NOT approved
- The **26 October homepage refinement**, documented and implemented on the private `design/impeccable-homepage-refinement-2026-10-26` branch (draft PR #3), proposed a better two-row mobile header, four distinct stepped-gray service cards, purposeful informational Approach rows, obvious linked Selected Work cards, fewer redundant headings/eyebrows, and a truthful zero-article Writing band.
- The draft retains the original 25 Oct site-wide foundation; the **new page composition and proposed presentation details have not been owner-approved or deployed**. Historical June mockups remain references, not governing contracts.
- The independently extracted public design package is consumed by a separate **private draft PR #4**, pinned to public design revision `bc26705c0061b2f8f81ddcf85fe103e9bd79bb0d` via an immutable GitHub archive URL. CI passed, but visual parity / manual approval are outstanding. It is stacked on the refinement branch and must not merge independently.
- The heavier Treatment C illustration style is a **display-weight extension** of the site vocabulary, not a replacement for the quiet surrounding site UI.

## Open questions / acceptance gates
1. Owner review of actual Astro-rendered homepage against the approved 25 Oct reference and the proposed 26 Oct HTML study. Decide whether PR #3's changes are accepted, changed or rejected.
2. Independently inspect homepage, Writing index and article templates in Chromium **and Firefox** at 320, 375, 390, 768, 1024 and 1440px; 200%/400% zoom, focus/keyboard, screen reader, JS-off and reduced motion. Source tests and Lighthouse do **not** establish fidelity.
3. Verify contact form, Turnstile, direct-email fallback, metadata, true published-article fixtures and CDN delivery without publishing historical article drafts.
4. The existing header's identity treatment remains provisional until the logo workstream approves a real logo; avoid assuming any generated RSS mark is final.
5. Decide whether the new homepage's components generalize without forcing unrelated page layouts into a single schema.

## Suggested restart
Review the private site's actual draft PR #3 alongside its `docs/APPROVED-SITE-DESIGN-2026-10-25.md` and `docs/HOMEPAGE-REFINEMENT-2026-10-26.md`; capture side-by-side browser evidence; record explicit owner decisions before merging or deploying. Review PR #4 separately for package integration and visual parity. This file is a history/index, **not permission to deploy**.

## References
- [Approved 25 Oct visual contract (private)](https://github.com/rock-solid-sites/rock-solid-homepage/blob/design/impeccable-homepage-refinement-2026-10-26/docs/APPROVED-SITE-DESIGN-2026-10-25.md)
- [Proposed 26 Oct refinement (private)](https://github.com/rock-solid-sites/rock-solid-homepage/blob/design/impeccable-homepage-refinement-2026-10-26/docs/HOMEPAGE-REFINEMENT-2026-10-26.md)
- [Component guide (private)](https://github.com/rock-solid-sites/rock-solid-homepage/blob/design/impeccable-homepage-refinement-2026-10-26/docs/DESIGN-COMPONENT-GUIDE.md)
- [Homepage refinement PR #3 (draft)](https://github.com/rock-solid-sites/rock-solid-homepage/pull/3)
- [Pinned public-package consumer PR #4 (draft)](https://github.com/rock-solid-sites/rock-solid-homepage/pull/4)
- [Public site-language contract](../../site-language.md) · [Infrastructure note](design-system-infrastructure.md)
