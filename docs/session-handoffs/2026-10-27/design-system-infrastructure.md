# Design System Infrastructure — implementation and maintenance note
**Session:** 27 October 2026 · **Cross-cutting track:** how the four creative areas are shared, validated and maintained · **Status:** public v0.1 package and draft consumer integrated; no v0.2 standardization or public registry release.

## Role
Infrastructure is the **enabling fifth track**, not a fifth creative direction: make Site Design, Layout/Voice, Logo and Schematic System maintainable without merging their concerns. Keep consumer-specific editorial content in the private homepage repository; only truly reusable rules/assets and reviewed generic illustrations in the public design package.

## Existing concrete architecture
- **Public reusable design repository:** [`rock-solid-sites/rock-solid-design`](https://github.com/rock-solid-sites/rock-solid-design), default branch `main`, MIT license for code/generic examples, package version **experimental `0.1.0`**. Includes `styles/tokens.css` copied exactly from the owner-approved site visual foundation, `styles/foundations.css`, provisional `styles/schematic.css`, `docs/site-language.md`, `docs/schematic-grammar.md`, two sample SVGs and Node/CI checks. Does **not** ship fonts or approve/transfer logo trademark rights.
- **Private Astro consumer:** [`rock-solid-sites/rock-solid-homepage`](https://github.com/rock-solid-sites/rock-solid-homepage), with the design refinement draft [PR #3](https://github.com/rock-solid-sites/rock-solid-homepage/pull/3) and the pinned public-package consumer draft [PR #4](https://github.com/rock-solid-sites/rock-solid-homepage/pull/4) **stacked on PR #3**. PR #4 imports `rock-solid-design/tokens.css` rather than a local copy. Its dependency is immutable revision `bc26705c0061b2f8f81ddcf85fe103e9bd79bb0d`, not moving `main` or a CDN URL.
- **Research branch:** [draft public schematic PR #1](https://github.com/rock-solid-sites/rock-solid-design/pull/1) targets `main` but remains unmerged; includes the proposed v0.2 semantics/validation material, neutral comparison controls, tests and gallery.
- **Public preview hosting:** dedicated `gh-pages` branch with an already live [GitHub Pages visual gallery](https://rock-solid-sites.github.io/rock-solid-design/). Latest recorded preview source at `79c5480ef3a8ae8b3444dbae98f29aeff65e9905`, with successful Pages deployment run [40445239373](https://github.com/rock-solid-sites/rock-solid-design/actions/runs/40445239373). The new [two substantive cutaway studies](https://rock-solid-sites.github.io/rock-solid-design/studies/informative-cutaways/) are **in the Pages branch only**, not automatically in PR #1 or package `main`.
- **No separate Astro public components package yet.** Favor the framework-neutral CSS/SVG core and create Astro-specific modules only when a demonstrated consumer requirement justifies them. The production homepage still owns its HTML, copy, booking/client implementation and Cloudflare infrastructure.

## What validation actually established
- Public v0.1 CI passed after an initial test defect falsely rejected SVG `xmlns` as a remote URL; the test was corrected. CI results concern build/tests, **not** real browser aesthetics.
- Private pinned-consumer PR #4 CI passed `npm ci`, source checks, tests, Astro build and several automated browser/performance checks. It has **not** received the required human visual-parity/owner approval.
- Research v0.2 CI validated XML and metadata and generated multiple real Chromium screenshots at selected viewport widths. No independent participant study, cross-browser aesthetic acceptance or WCAG conformance was established.
- Publishing the `gh-pages` branch via GitHub Pages works and has been verified by successful deploy job. An initial read of the Pages-settings REST endpoint through the available GitHub connector was unsupported; the Pages service ultimately already worked without further setup.

## Maintenance risks and policies
1. **Three independent branch states** (versioned public `main`, research PR branch, public Pages preview). Never assume a live browser preview is automatically part of a reviewed release or that an illustrative asset is part of the pinned private consumer. Promote assets by explicit commits and source review.
2. **Version/lock discipline:** immutable installation, update lockfile and run `npm ci` before any consumer upgrade; publish/tag only with a deliberate approval/release record. No premature stable `1.0`.
3. **Public/private boundary:** no client-specific copyrighted visuals, confidential records, user data, unpublished copy, secrets, production environment files or font binaries in the public package. Link to private canonical references without reproducing private material.
4. **Design tokens vs. bespoke hardcoded SVG styling:** v0.1 samples and the later custom preview studies have hand-authored stroke/fill geometry; modifying `styles/schematic.css` alone will not automatically update their appearance. A future renderer/token extraction needs visual-diff/regression tests and proof of value.
5. **CSS accessibility vs. actual HTML/reader behavior:** continue Firefox/Chromium browser review, responsiveness, keyboard, screen reader, reduced-motion and text alternatives; do not substitute snapshot-generation success for readability or visual approval.
6. **Logo asset governance:** a logo is not MIT-licensed brand identity merely because it lives beside MIT source. Keep candidate branding off the released library until approved; document separate usage/trademark terms.
7. **Document authority:** 25 Oct approved *visual* site contract wins over June prototypes. 26 Oct proposed homepage/editorial rearrangements and schematic v0.2 grammar are not approved by being committed. Source-of-truth claims should have date, branch, evidence and caveats.
8. **Preview discoverability:** GitHub Pages is suitable for quick human review. If experiments become frequent, add a simple reproducible preview build/sync from reviewed research sources; avoid maintaining divergent manually copied SVGs indefinitely.
9. **Model/agent evidence:** multimodal adversarial review produced useful defect hypotheses but several reviewers had limited asset access; image-generation logo boards did not satisfy circle-first constraints. Model identities, comparative cost/token measurements and full per-model performance logs were **not captured in a reusable registry format** in this chat. Do not invent capability scores.

## Next engineering actions
- Confirm owner acceptance of private homepage PR #3, perform actual visual-parity checks for PR #4, and only then choose a coordinated consumer update/merge sequence.
- Record visual evaluation of the two information-rich SVGs. If accepted, copy/trace their canonical sources into the research branch and replace ad hoc preview-only state with an auditable build/deploy route.
- Decide which repeated pieces (square ports, attached action path, external frame and planned-line annotation) warrant a minimal framework-agnostic SVG authoring primitive; don't create a speculative full diagramming DSL.
- Update version/release documentation after real tests and explicit creative signoff. No automatic Astro/Cloudflare deploy, PR merge or trademark adoption implied by these notes.

## References
- [Public v0.1 source](https://github.com/rock-solid-sites/rock-solid-design/tree/main)
- [Public v0.2 draft research](https://github.com/rock-solid-sites/rock-solid-design/pull/1)
- [Live Pages preview](https://rock-solid-sites.github.io/rock-solid-design/)
- [Private site refinement PR #3](https://github.com/rock-solid-sites/rock-solid-homepage/pull/3)
- [Private pinned-consumer PR #4](https://github.com/rock-solid-sites/rock-solid-homepage/pull/4)
- [Consumption instructions](../../consuming.md)
