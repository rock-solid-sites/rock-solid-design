# Rock Solid Design

An experimental, open-source **website design and schematic illustration system** from [Rock Solid Sites](https://rocksolidsites.com/).

The site design uses warm graph paper, Geist/Geist Mono, restrained monochrome surfaces, stepped grays, subtle corner radii, thin layout rules and generous negative space. The schematic illustrations are the **display-weight extension** of that system: thicker contours, distinctive structural cutaways and functional connections for explaining complex systems to nonexperts.

> **v0.1.0: experimental.** The website token values are copied exactly from the approved site baseline (25 October 2026); schematic shapes, conventions and example compositions are working proposals, **not finalized brand standards**. No logo is approved here.

## Use

The framework-neutral CSS can be imported at build time:

```css
@import 'rock-solid-design/tokens.css';
/* optional: @import 'rock-solid-design/foundations.css'; */
```

The font tokens assume the consumer provides `--font-geist` and `--font-geist-mono`; this repository does **not** distribute font binaries. Illustrations are standalone SVG and can be consumed without Astro or JavaScript. Install from an **immutable Git commit or published release**, not a moving branch.

## Layout

- `styles/tokens.css`: original website design tokens, unchanged from their extracted site version.
- `styles/foundations.css`: optional reusable page-paper background, accessible reset, 1120px container, 12-column split and reduced-motion behavior.
- `styles/schematic.css`: rendering conventions for structural-cutaway diagrams; no browser runtime.
- `schematics/*.svg`: editable source examples of small/medium diagrams using one shared grammar.
- `docs/site-language.md`: approved website visual contract in reusable form.
- `docs/schematic-grammar.md`: provisional illustration specification.
- `docs/consuming.md`: dependency, migration and release guidance.
- `tests/*.test.mjs`: built-in Node validation.

The public library owns visual rules and reusable graphics. Consumer projects own content, real architecture claims, semantic meaning, application behavior, accessibility audits, and infrastructure.

## Active research (not part of the v0.1.0 implementation)

- [Comparative research: Carbon, GitLab, Red Hat, Atlassian, C4, Azure and WAI](docs/research/comparative-systems-2026-10-27.md)
- [Proposed structural-cutaway specification v0.2](docs/schematic-grammar-v0.2-proposal.md)
- [Pilot evaluation matrix](docs/research/validation-matrix-2026-10-27.md)

These documents describe **candidates under review**, not a new release or an already-enforced semantic diagram system.

## Contribution and licensing

MIT licensed. Logos, names and trademarks remain the property of their owners; the permission to reuse the code or generic illustrations does **not** imply endorsement or trademark permission. No third-party font binaries, proprietary client designs or private editorial material are included. See `CONTRIBUTING.md` and `LICENSE`.
