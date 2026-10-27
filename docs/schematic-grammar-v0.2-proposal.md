# Structural cutaways — proposed schematic specification v0.2

**Status: PROVISIONALLY SELECTED FOR FOUR RESEARCH SPECIMENS; NOT STANDARDIZED.** This supplements the current experimental v0.1 source; it is **not** an implemented standard, an API promise, a release or an approved logo. See [comparative study](research/comparative-systems-2026-10-27.md).

## Purpose

Build a reusable illustration language from the approved Rock Solid Sites website design, not a separate aesthetic: quiet site interface, more prominent but still minimalist explanations. Use the same graph-paper grid, off-white/black and stepped grays, Geist / Geist Mono, restrained radius, compositional negative space, rectilinear modules and lightweight hairlines. Illustrations gain **display-weight contours, distinctive functional silhouettes and cutaway interiors** so they are legible against the background.

The aim is to communicate what a recognizable system does and how its meaningful parts connect, first to non-experts and then to specialists. The default explanatory unit is **one question**, not a whole project on one canvas.

## Layered model

1. **Foundations** — visual tokens, drawing grid, strokes, corner logic, typography and safe space, inherited from website design.
2. **Visual primitives** — frame, functional module, cutaway, filled panel, attachment port, routed connector, relationship label, boundary, annotation and optional guide. Primitives are visual components, not assertions about production architecture.
3. **Semantic concepts** — audience-visible experience, external service, custom integration, workflow, business function, technical dependency, evaluated option, proposed component, phase, cross-cutting quality requirement.
4. **Compositions** — one-relation emblem; short decision sequence; parallel experiences; system context; workflow/journey; technical cutaway. Composition can vary without introducing a new style.
5. **Content/provenance** — reader, question, short explanation, evidence source, lifecycle status, as-of date, alt/long text. Must be able to stand apart from the SVG.

A single public illustration should not require importing Astro components, Cloudflare SDKs, CSS-in-JS or proprietary content.

## Visual construction: provisional parameters

| Role | Default on a 560px reference canvas | Adaptation |
| --- | --- | --- |
| Principal silhouette | 3–4px black | Optical adjustments at small sizes, simplified shape not simply scaled |
| Internal cutaway detail | 1.5–2px | Drop secondary lines before reducing type below legibility |
| Construction guides | 0.5–1px at low contrast | May disappear entirely at compact sizes |
| Radius | 4px on reference illustration frames | Light easing; no circular badge motif |
| Paper | `#FAFAF8` | Dark inverse treatment evaluated separately, not automatic CSS inversion |
| Primary fill | `#111111` | Indicates **visual focus**, not “delivered”, “owned” or “internal” |
| Support fill | Approved stepped near-neutrals | Differentiate background/supporting geometry without relying on color alone |
| Geometry | Mostly rectangular, strong silhouettes and orthogonal routing | Subject-specific shapes allowed when they clarify a familiar real-world object |
| Grid | Coordinates informed by the inherited 8px system | Optical exceptions are documented; grid should rarely dominate a published illustration |

Use CSS variables or an SVG-renderer token map for **new** work. The existing v0.1 samples remain hand-authored and must not be described as automatically token-driven. Design tests should check geometry/metadata and a rendered reference, not just text matching.

## Semantics: do not confuse appearance with status

The relationship type and lifecycle status must be **explicitly expressed**, not inferred from a line's color, fill or stroke alone. Every connection stores a label, relation kind, direction and explicit transport assertion state (`not-asserted` unless supported). **A filled black rectangle may be chrome, an emphasis block or a module; it says nothing about project lifecycle.**

- `relationship.kind`: `technical-interface`, `process-step`, `business-association`, `dependency`, `comparison`. A conceptual relationship is not evidence of automated data transfer.
- `relationship.direction`: `outbound`, `inbound`, `bidirectional`, or `not-applicable`; add a visible arrow and action label for flows. Bidirectional flows may require two separate directional paths.
- `node.lifecycle`: one of `historical`, `evaluated`, `selected-direction`, `reported-current`, `in-development`, `proposed`, `not-asserted`, `illustrative` for the pilot. `reported-current` reflects owner report, not independently confirmed technical status; `selected-direction` records a decision, not deployment. **Do not use `implemented` without independent evidence.** Keep lifecycle separate from visual emphasis and the evidence/source status. Each node in the manifest has an ID, role, lifecycle, source status and note.
- `node.evidence`: optional citation/link/reference and verification date; required for actual architecture or performance claims before external publication.
- `diagram.truthMode`: `generic-example`, `reported-project`, `verified-architecture`, `future-concept`. Generic examples carry visible `CONCEPT STUDY` labelling where the viewer might mistake them for real deployments.
- Boundary styles distinguish ownership/scope, not automatically “live” vs “planned”; a planning state needs explicit words such as `PHASE 2 / PROPOSED`.
- Define a legend only for semantics not immediately obvious through direct labels. Do not require a complex legend for a single simple arrow.

## Three display tiers, one language

| Tier | Main goal | Proposed layout rule |
| --- | --- | --- |
| **S: emblem** | Answer one plain-language question at a glance | One subject or one relationship. At 48px use a different **icon**, not an unreadable 560px diagram. Test at 96–180px when serving as a service-card illustration. |
| **M: explainer** | Explain a specific pivot, short workflow or 2–4 related components | Approximately 320–640px reference view, 2–3 purposeful stages, readable labels, a short caption |
| **L: system view** | Reveal scope and dependencies to a motivated reader | Approximately 640–960px reference view, with optional follow-on detailed diagrams; never a requirement to fit the entire project |

No hard maximum number of elements is yet specified. A quality target is that the viewer can identify the main topic and its essential relationship **without knowing the technology names**. Split diagrams instead of making tiny captions.

## Component reference sketches (meaning rather than fixed geometry)

- `InterfaceSurface`: recognizably website/booking/dashboard-like external frame, with flexible interiors so multiple property sites can look different.
- `IntegrationBoundary`: website-side connection, middleware if present, external service; never invent intermediate pieces merely to make diagram symmetrical.
- `SystemModule`: compact service/capability block with description and explicit ownership if important.
- `OrthogonalLink`: endpoint-attached, labelled, optionally directional relation; separate from simple grouping line.
- `DecisionFork`: alternatives and a **selected direction**, without visually implying the rejected approach was deployed.
- `StatusLabel`: historical, implemented, evaluated or Phase 2; prominent text plus complementary styling.
- `QualityRibbon`: accessibility, SEO, reliability and infrastructure as cross-cutting requirements, not four unrelated technical boxes.
- `StructuralCutaway`: exterior consumer-visible surface paired with selective internal details; distinguishes RSS from vendor architecture icon packs.

These are **candidate components** for a future library. New subject-specific diagrams may introduce shapes that obey the same principles; the vocabulary is not an exhaustive list of permissible content.

## Candidate demonstration set (generic public examples only)

**A. A booking experience that works as part of a wider system** — small explanation: customer-facing site, booking action and external reservation service. Do not assert a specific API route or deployed feature.

**B. Architectural alternatives** — short process: legacy embedded interface → practical evaluation → chosen modern site + integration approach. This visual is a *decision history*; it is not a data-flow diagram.

**C. Four independent interfaces, shared reservation dependencies** — system context: four clearly different interface interiors, each with its own booking responsibility, and a separate external reservations platform. Don't conflate multiple property accounts into one shared account.

**D. Cross-cutting requirements** — accessibility, SEO, reliability and infrastructure appear as expectations attached to the overall experience, not as service products.

**E. Operational expansion** — a different illustration showing **Phase 2: in development** as distinct from initial site/booking work. Make no promises about specific marketing/HMS features not yet evidenced.

**F. Adversarial review** — documentation-scale process example, not a client-facing top-level service card.

Avoid using private client names or inventing room inventory, results, page imagery, contracts or integration success for these public studies. Real projects belong in approved case studies after a source-of-truth check.

## Accessible consumption

Every meaningful diagram needs a short readable identifier. Complex diagrams must additionally provide a long description in surrounding HTML, structured text or a link, not solely the SVG `<desc>`. A caption should state the takeaway in ordinary language; diagrams should have intentional reading order when multiple panels are displayed. Labels should be real text, not rasterized letter outlines, and not become microscopic at mobile widths. The site's 44px interaction target guidance applies if a diagram ever becomes interactive; static diagrams need no focusable controls.

## Library and release boundaries

Separate reusable visual primitives and data conventions from a renderer. For early versions, author **standalone SVG** and an optional machine-readable diagram descriptor; avoid building a complex DSL or automatic layout system prematurely. After 3–5 genuinely different diagrams exist, extract tested primitives, not imagined generic components.

The website remains the only private production repo and consumes a pinned released design-package revision. No automatic publication of v0.2 or changes to private site, public package version, tokens, README claim or production preview is implied by adopting a research proposal.

## Pilot semantics implementation note (27 October 2026)

The research manifest now supplies **per-node** lifecycle/evidence metadata and per-relationship labels/transport status. These are metadata conventions, **not** a formal renderer schema or enforcement that all semantic fields are visible in each SVG. A product-quality diagram must show any implementation-state distinction whose misreading would matter to the viewer in adjacent copy or explicit on-canvas labels; metadata alone is insufficient. No specific network link or installed protocol is asserted by the booking and property pilots.

The SVG studies intentionally use `system-ui` and `ui-monospace` fallback fonts to stay standalone and avoid bundling font files. A future site-based renderer can inherit Geist/Geist Mono; font substitution must be checked visually before a release. This is not a claim of visual parity.
