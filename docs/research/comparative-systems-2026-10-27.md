# Reference systems comparison — 27 October 2026

**Research status:** comparative study, not evidence of user testing or ownership approval. These notes reference published third-party principles; no third-party diagrams, artwork, fonts, icons or licensed components are copied into the package.

## Question

How can Rock Solid Design extend its restrained site aesthetic into a recognizable, reusable *structural-cutaway* language that explains real systems to nontechnical readers, while remaining clear enough for technical documentation?

Evaluation dimensions: (a) family resemblance across scales, (b) correctness of diagram notation, (c) accessible explanation for general audiences, (d) modular/extensible grammar, (e) open-source maintainability, and (f) correspondence with the approved website's 8px grid, graphite ink, stepped neutral palette, fine layout rules, lightly rounded corners and generous negative space.

## Comparative references

| System | Verified practice | Relevant lesson for RSS | What not to transplant |
| --- | --- | --- | --- |
| **IBM Carbon pictograms / IBM Design Language** | Productive vs expressive pictograms; a master grid; controlled strokes and clearance; separate UI icons from larger illustrative pictograms. | Build a **quiet/small** and **display/expressive** tier from shared geometry; define optical alignment, minimum readable sizes and safe padding. | Its color/gradient treatment or specific pictogram/brand art. Expressive illustrations should not become an interchangeable logo. |
| **GitLab Pajamas brand illustration** | Brand illustration explicitly extends iconography; linework, solid shapes, and purposeful details work together; guidance constrains stroke and corner treatment. | Formalize contour, internal cutaway and filled-form conventions; reusable shape grammar with brand continuity. | GitLab's gradients, colored shapes, movement metaphor and branded motifs. |
| **Red Hat brand illustrations** | Clarity, precision, meaningful metaphors and white space; small/minis and larger storytelling images serve different tasks. | Show familiar customer-facing objects and actual user challenges; explain before ornamentation. | Illustrations of people or proprietary brand elements simply because they make the work feel friendly. |
| **Atlassian illustration guidance** | Separates spot, low-fidelity UI and ambient pattern; graphics should support copy rather than create cognitive load. | Make distinct illustration *roles*: single-concept spotlight, familiar UI cutaway, context pattern. Use only where a diagram adds information. | Decorative use of diagrams across every section, or mimicking an actual screenshot with misleading detail. |
| **C4 model** | Explicit, tool- and notation-independent abstractions; context, containers, components; titles, keys, labels, one-way relations and audiences. | Separate **semantic information structure** from RSS styling. Use only as much detail as necessary; record component responsibility and relationship direction. | Full C4/UML look or compulsory four levels for every marketing illustration. |
| **Microsoft Azure Well-Architected diagram guidance** | Directional and labelled relationships; explicit legends, accuracy, metadata, layered views and versioned sources. | Establish diagram contract: purpose, audience, known/proposed/historical facts, labelled relationships and version; distinguish actual interfaces from conceptual associations. | Vendor-specific cloud icon catalog or diagram complexity meant only for engineers. |
| **W3C WAI complex images** | Significant diagrams need a short identification and an equivalent longer text explanation. | Pair diagrams with plain-language captions and structured long descriptions where complexity warrants them. | Assuming an SVG title/desc alone communicates a whole complex system. |

## Original reference pages

1. IBM Carbon pictograms: https://www.carbondesignsystem.com/building-blocks/foundations/pictograms/guidelines
2. IBM Design Language pictogram construction: https://www.ibm.com/design/language/iconography/pictograms/design/
3. GitLab Pajamas illustration construction: https://design.gitlab.com/brand-design/visual-design-brand-illustrations/
4. Red Hat illustration principles: https://www.redhat.com/en/about/brand/standards/illustration
5. Atlassian illustrations (spot, low-fidelity UI, ambient): https://atlassian.design/foundations/illustrations
6. C4 diagrams: https://c4model.com/diagrams
7. C4 notation: https://c4model.com/diagrams/notation
8. Microsoft architecture diagrams: https://learn.microsoft.com/en-us/azure/well-architected/architect-role/design-diagrams
9. W3C WAI complex image alternatives: https://www.w3.org/WAI/tutorials/images/complex/

## Current state of RSS (source inspection)

Existing `docs/schematic-grammar.md` and `styles/schematic.css` establish bold structural contours (3px nominal), support strokes (2px), guides (1px), paper/ink/neutral and cutaways. `schematics/four-experiences.svg` and `schematics/architecture-pivot.svg` demonstrate two example compositions. The existing baseline design is deliberately more restrained: 1px layout rules, small corner radii, 8px paper grid, ample negative space.

**Strengths:** purposeful contrast against UI; a specific cutaway concept; existing live design tokens; generic static SVG; no runtime dependency; truthful disclaimers in example captions; framework independence.

**Gaps to address before claiming standardization:**
- No semantic intermediate representation or catalog of meaning-bearing diagram roles; CSS class names are mostly visual (`primary`, `support`, `future`).
- Current SVG examples hardcode stroke widths, fills and geometry rather than relying on common primitives/tokens; changes to `styles/schematic.css` do not automatically update their appearance.
- Connectors are unlabelled and mostly undirected in existing examples; visually joined systems may be mistaken for functioning live API/data flows.
- Dash conventions remain overloaded or insufficiently enforced; a `future` class alone cannot guarantee clear status.
- No responsive variant/optical adjustment rules or minimum detail thresholds for 48px versus 560px.
- SVG title and desc are present but complex examples do not yet offer visible equivalent long descriptions.
- Source checks cover token snippets and disallowed embeds, but not relationship type/direction, status, factual provenance, rendered visual parity, or naive reader comprehension.
- The public design package is still versioned as experimental `0.1.0`; no new approved mark or schematic system should be claimed.

## What to borrow without copying appearance

1. **From Carbon**: a common construction system with different *density/weight tiers*; distinct small icons and larger pictograms/diagrams.
2. **From GitLab**: explicit contour/shape/detail hierarchy to ensure artwork is coherent across uses.
3. **From Red Hat and Atlassian**: concepts grounded in familiar experiences; images and surrounding words share responsibility; avoid gratuitous decoration.
4. **From C4 and Azure**: a precise layer of *meaning*, labelled direction, diagram audience and progressive scope beneath the brand styling.
5. **From WAI**: equivalently informative text alternatives, not just visually attractive SVGs.

**Provisional recommendation:** retain RSS Treatment C (*structural cutaway*) as the distinct visual layer; build a small model of modules/ports/relations/status and a validation matrix beneath it. Treat the brand grammar, diagram semantics, and authoring tools as separate concerns.

## Research limitations and follow-up

This is a qualitative reading of official guidance, **not** a benchmark of user comprehension or a competitive score. The referenced systems solve partially different tasks (branding, product icons, software architecture and accessibility), so comparing aesthetic merits with a numeric total would be misleading.

No third-party artwork is redistributed. Before any `0.2` release, create paired small/medium/large examples and test them with readers unfamiliar with Astro, API integrations or Beds24.
