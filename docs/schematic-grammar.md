# Structural cutaways — proposed schematic language v0.1

**Status:** visual experiment. This is a display-weight extension of the website design system, not a new UI theme or a finalized illustration standard.

## Intent

Use bold, meaningful shapes to help nontechnical readers understand systems, relationships and architecture. The interface surrounding a diagram should remain quiet and spacious. A diagram should be understandable in a few seconds at its intended display size, with progressively more detail in a case study.

## Inherited rules

Monochrome near-black ink and warm off-white paper, restrained neutral fills, 8px construction grid, orthogonal lines, limited rounded corners, Geist labels and Geist Mono technical annotations. Allow large negative space. Do **not** introduce circles as a logo motif, generic circuit traces, arbitrary nodes or fake dashboards.

## Display-weight hierarchy (at ~560px SVG design width)

| Level | Starting stroke | Function |
| --- | --- | --- |
| Primary structural silhouette | 3–4px | Main component boundaries and relationships |
| Secondary details | 1.5–2px | Interface cutaways, supports and connectors |
| Guides | 0.5–1px, low contrast | Construction, alignment, annotations |

Stroke proportions are reference values, not guaranteed physical pixel widths at every rendered size. At favicon scale prefer a purpose-made simplified symbol.

## Modular grammar

1. **Frame**: a bounded interface or operational component with a slightly rounded rectangular silhouette.
2. **Structural cutaway**: familiar surface outside, selectively exposed modules inside; avoids reducing every project to generic boxes.
3. **Core module**: filled black rectangle for visual emphasis in context; no universal implication that everything black is a production component.
4. **Support module**: outlined or light gray rectangle for external/supporting components.
5. **Connector**: orthogonal line connecting named attachment points. Arrowheads only where direction is meaningful. Never connect systems merely to decorate.
6. **Boundary**: outline or group frame for operational or technical scope.
7. **Planned component**: clearly labeled FUTURE/PROPOSED, with a distinct dashed border. A dashed line by itself does **not** mean either future or conceptual; always annotate it.
8. **Notation**: restrained uppercase monospace labels, optional light measurement marks, explicit legends for novel semantics.

Elements may be rotated, scaled, combined, simplified, or extended with new subject-specific silhouettes. Reuse visual syntax, **not a fixed diagram layout**.

## Explanation scales

- **Small:** one recognizable object and a relationship, for homepage cards.
- **Medium:** a short process or architectural decision with two or three stages.
- **Large:** a complete system view for readers who intentionally seek details.

Do not crowd small service illustrations with explanatory text. Put a short accessible caption in surrounding HTML, and provide informative SVG `title`/`desc` for standalone use.

## Test cases

The initial reference material is the progression from a legacy embedded booking widget to testing a more flexible website/API approach, and four independently designed property websites with booking dependencies. Example SVGs in this repository are **generic concept models**, not documentation of any particular client project. In particular they do not claim API integration, booking reliability, payment processing or hospitality-management software have already shipped.

The full business context also includes adversarial review as a **method**, not a commercial service, and a later hospitality management system as **Phase 2 in development**.

## Validation

Compare outlines and filled silhouettes against the 8px graph-paper website at 320, 390, 768 and 1440px. Inspect whether labels remain legible and relationships obvious without captions. Test both dark and light display environments, accessible contrast, focus only when SVGs are interactive, and text alternatives. Run visual checks with actual Gecko/Chromium browsers before marking a treatment final.
