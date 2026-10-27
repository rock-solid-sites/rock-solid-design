# Schematic System — closeout and restart brief
**Session:** 27 October 2026 · **Workstream:** a format for visually displaying information, relationships and ideas · **Status:** Treatment C selected; implementation grammar and usability remain experimental.

## Purpose
Use the approved site's geometric/material vocabulary to make **informational illustrations**, not generic diagrams produced to demonstrate a diagramming library. The visual language should give unfamiliar readers a concrete understanding of a comparison, interaction, workflow or system relationship. The surrounding site stays quieter than the illustration.

**Core design rule (retained):** **Every connection needs a reason to exist, and every exposed interior needs to reveal something meaningful.**

## Research and selections
- Considered architectural outlines (A), modular silhouettes (B), and **structural cutaways (C)**; **C chosen**. Distinctive features: strong contour weight, selective interior details, structural frames, straight/orthogonal relationships, square endpoint/hand-off marks, off-white paper, black and stepped gray, sparing accent colors and readable monospace annotations.
- Researched IBM Carbon, GitLab Pajamas, Red Hat, Atlassian, C4, Azure architecture-diagram guidance, and W3C complex-image accessibility. Conclusion: preserve RSS's own aesthetic while borrowing construction consistency, audience-dependent abstraction, clear relationship notation and meaningful text equivalents.
- Public v0.1 contains `styles/schematic.css` and two generic SVG examples. Draft **v0.2 PR #1** contains comparative research, semantic candidate grammar, five SVG examples paired with neutral references, node-level status/evidence metadata, a reader-test protocol, independent small/medium/large booking variants and CI screenshot captures.
- An adversarial multimodal review panel identified genuine mechanical/semantic weaknesses: text accidentally inheriting outlines in neutral controls, unfair baseline labels, unlabelled connectors, overloaded dashed styles, lifecycle attached to the whole study rather than components, and lack of realistic scale tests. Source corrections, new tests and status metadata were added. **Qualitative model review and successful CI are not nontechnical-reader comprehension results.**

## Essential owner feedback and subsequent improvement
- Initial booking scenes looked like **three generic pages connected without a clear purpose**; generic unlabeled interior rectangles were not informative. The four independent property/account scenes were understandable but conveyed a trivial fact unless compared with a different centralized-account model.
- The smallest booking variant was visually the most striking: its **heavy strokes** and apparent action-to-action connection read better. It should inspire larger compositions, not be diluted into thin generic schematic boxes.
- The owner explicitly **liked the little square markers**; retain them. Use action origin, boundary and target roles, including a connection line that **starts inside a meaningful control** (such as Book Now) and terminates at a relevant object/control inside the next frame.
- Arrows, blocks, solid paths, dotted paths and limited different-colored blocks can express different classes of relationships. **Do not treat fill/stroke/color alone as proof of deployment or transport; accompany unfamiliar marks with explicit descriptions.**
- Important distinction: **we are using diagrams to express information, relationships and ideas, not building diagrams as ends in themselves.**

## Information-rich pilot studies (now live on GitHub Pages)
A dedicated preview page contains two new Treatment C studies that give the illustration meaningful work:
1. **Booking rule before/after:** historical Chill Zone Offer 1 Default (0) yielded zero hosted `guestcard*` controls; a controlled change to Confirmed with credit card (2) yielded six controls, with verified rollback; a later rollout saved (2) for all four bookable room types. No proof of actual card authorization, storage or successful payment. Drawn action paths begin in booking buttons and target hosted form controls. Research evidence in [HMS controlled test](https://github.com/rock-solid-sites/HMS/blob/main/research/beds24/controlled-test-run-2026-10-26.md).
2. **Embedded vs API-led direction:** current Astro property page and Beds24-hosted guest-details interface versus an **under-development** site-controlled custom form with an explicitly dotted, labelled proposed API boundary; no assertion of a deployed direct API. This is an illustration of what changes in UI control and ownership, not merely a chronological pivot.
- The owner described these **as better**, because they showed actual relationships and made the design system's strengths and weaknesses testable.

## Visual notation under test
| Element | Current pilot intention | Caveat |
| --- | --- | --- |
| Filled small square | Action source, boundary or destination | Should anchor a **specific** meaningful control, never be arbitrary decoration |
| Heavy solid path | Reader-visible progression or grounded relationship | Not a guarantee of technical transport; read its label |
| Directional arrow | Direction of experience/process/handoff | No implied network API without evidence |
| Dotted amber line | Explicitly **planned** API/interface link in the second informative study | Never infer speculative state from dash alone |
| Black/fill | Primary action/visual emphasis | Not synonymous with `implemented`, `internally owned` or `certified` |
| Muted slate blue | External provider/service-side element | Must remain interpretable in grayscale and with accessible text |
| Warm amber | Rule change, unresolved/questioned or planned area, *when labelled* | Avoid conflating change, warning, future status into one universal code |
| Interior content | Exposed UI behavior, control, constraint, option or meaningful difference | Generic bars or anonymous rectangles alone explain little |

## Current branches and boundaries
- **`main`**: public design package v0.1.0, unchanged by research/preview experiments.
- **Draft PR #1**: v0.2 research branch. Still **unmerged**, and earlier studies/matrix do not automatically include subsequent `gh-pages` informative studies.
- **`gh-pages`**: independent, successfully deployed **visual preview**, including [original gallery](https://rock-solid-sites.github.io/rock-solid-design/) and [two evidence-led studies](https://rock-solid-sites.github.io/rock-solid-design/studies/informative-cutaways/). Preview publication is not package release/website production deployment.
- The later informative SVG/page files currently exist on the `gh-pages` branch. If selected for the package, transfer their **reviewed source** into a proposal/research branch deliberately, preserving provenance and related tests; do **not** assume preview files are already in PR #1.

## Open decisions / required work
1. User visually critiques the two evidence-led cutaways: are action/target squares clear, content useful, colors legible, and the intended distinction graspable without reading a wall of copy?
2. Reduce overloaded semantics in the proposed legend; decide whether different line types map to *relationship kind*, *truth status* or a combination requiring labels. Keep provenance and lifecycle per component separate from illustration emphasis.
3. Develop independently composed mobile variants of each detailed subject, rather than shrinking 760/1280px SVG labels to unreadable sizes. Inspect 16–48px only for purpose-built logo/emblem art, not technical explanations.
4. Directly inspect browser-rendered image pixels, contrast, zoom, reading order, alt/long descriptions, keyboard and screen-reader behavior. CI XML parse and screenshot generation alone do not certify usability.
5. Run the already drafted counterbalanced comparison against neutral diagrams and equivalent prose with real readers; record false API/live/shipped inferences, not just aesthetic preferences. **No participant findings exist yet.**
6. Only after several distinct substantive illustrations have survived review should we extract a stable primitive/renderer/API layer, update tests and consider v0.2 release.

## References
- [Schematic grammar v0.1](../../schematic-grammar.md)
- [v0.2 research draft PR #1](https://github.com/rock-solid-sites/rock-solid-design/pull/1)
- [Original live gallery](https://rock-solid-sites.github.io/rock-solid-design/)
- [Two informative-cutaway studies](https://rock-solid-sites.github.io/rock-solid-design/studies/informative-cutaways/)
- [Comparison research (draft branch)](https://github.com/rock-solid-sites/rock-solid-design/blob/research/schematic-comparison-and-v0.2-proposal-2026-10-27/docs/research/comparative-systems-2026-10-27.md)
- [Participant-test protocol (draft branch)](https://github.com/rock-solid-sites/rock-solid-design/blob/research/schematic-comparison-and-v0.2-proposal-2026-10-27/docs/research/reader-test-protocol-2026-10-27.md)
