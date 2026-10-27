# Layout and Voice — closeout and restart brief
**Session:** 27 October 2026 · **Workstream:** what we say and how content is organized · **Status:** guiding editorial constraints established; detailed homepage proposal/copy pending owner approval.

## Scope
This is the content and communication layer: which questions the site answers, the order of sections, what counts as an understandable link, how service/project distinctions are conveyed, and the agency's verbal tone. It is **not** interchangeable with Site Design (the visual materials and aesthetics), the Logo, or the Schematic System.

## What we discussed and established
- Prefer **specific, substantiated statements** about work performed over generalized agency claims and filler. The site should be understandable to someone unfamiliar with the technology and should not invent client outcomes, metrics, testimonials, credentials, projects, article publication, or product features.
- Content hierarchy needs clear headings and purposeful paths: who Rock Solid Sites is / what it does; its approach; what it builds; actual selected work; real writing if published; and a working contact option. These are distinct communication jobs.
- Service cards, project links and informational Approach principles should **not masquerade as the same component**. The user strongly preferred easily recognizable, whole-card project destinations over vague, ruled areas that looked noninteractive.
- The desired four-step homepage arrangement in the **26 October proposal** is: dark Hero → **Approach** → **What We Build** (four stepped-neutral cards) → **Selected Work** (explicit link cards) → always-present black Writing & Research band → Contact → footer. The three-column ruled layout previously associated with Selected Work was moved conceptually under Approach as informational points. This is a proposed revision, **not yet approved as a replacement for the 25 Oct homepage contract**.
- Avoid redundant small section labels if a real heading already carries the message. Structural headings remain; avoid ornamental numbering, artificial badges, estimated reading times and repeated subheadings that add no information.
- The black Writing band exists even with no genuine published articles, but must show **no invented or draft links** and no link to an empty archive. Publishing decisions belong to editorial review, not to the layout.
- Actual Selected Work examples in the private design proposal link to genuine public destinations (Trip'N, Beds24 plugin, Crosslink). Project-specific factual details matter more than generic categories. Do not reuse those facts as unreviewed marketing copy.
- Contact copy and structure must respect real form validation, security, operational status, direct-email fallback, and meaningful CTAs. Presentation does not justify a broken form.

## Voice: inferred editorial principles versus approved wording
- **Direction:** plainspoken, technical when useful but not technical for its own sake; confident without exaggerated marketing language; concise, specific, externally verifiable; explanatory rather than promotional.
- **Boundary:** these are synthesized preferences and drafting criteria from the design discussions, **not a finalized brand voice guide**, and **not approval of individual sentences** in the proposed homepage.
- Readability and link affordance belong to the user-facing message, not only styling: visitors should know what a card links to and why it is worth opening.
- Preserve separation between a client website/service and HMS as a developing product: do not imply operational features or API integrations have shipped just because they appear in planned illustrations.

## Work completed
- The 25 Oct approved site contract records homepage, Writing index, article and Contact presentation rules.
- The 26 Oct refinement was implemented on a draft private Astro branch with dedicated `ApproachRow` and `ProjectCard` concepts, project grid type and better header/content hierarchy.
- Supporting source tests / CI passed in subsequent changes; **copy, visual composition and published state were not automatically approved** by passing automated checks.
- The schematic research reinforced one general communications rule applicable here: each meaningful visual/caption should answer an actual question, not merely decorate a layout.

## Open questions / required decisions
1. Review and either approve or rewrite the actual Hero, Approach, services, projects, Writing and Contact language **on the private site branch**.
2. Decide whether Approach should include four informational practice/output rows as proposed and how much substance each must communicate to avoid corporate boilerplate.
3. Approve actual ordering of sections and whole-card Selected Work treatment; ensure a clear distinction between genuine destinations and purely informational cards on touch, keyboard and desktop.
4. Review mobile content sequence and heading hierarchy, not just CSS layout: what information does a visitor encounter first at 320/375px?
5. Establish a small reusable editorial style guide (voice, scope of technical claims, when to link primary evidence, capitalization, example structures) **after** approving representative real copy. Do not write a generic style guide and treat it as final.
6. Publish articles only after individual editorial approval; keep old imported drafts excluded from the actual site.

## Suggested restart
Open the private 26 Oct refinement with the approved 25 Oct baseline; walk through the mobile and desktop reading order. Review each proposed statement for factuality, plain-language clarity and whether it adds new information. Record decisions in the **private content repo**, not in the public design package. This note is a pointer, not publication authorization.

## References
- [Proposed refinement copy and structure (private)](https://github.com/rock-solid-sites/rock-solid-homepage/blob/design/impeccable-homepage-refinement-2026-10-26/docs/HOMEPAGE-REFINEMENT-2026-10-26.md)
- [Approved visual/presentation contract (private)](https://github.com/rock-solid-sites/rock-solid-homepage/blob/design/impeccable-homepage-refinement-2026-10-26/docs/APPROVED-SITE-DESIGN-2026-10-25.md)
- [Refinement PR #3 (draft)](https://github.com/rock-solid-sites/rock-solid-homepage/pull/3)
- [Site Design closeout](site-design.md) · [Schematic closeout](schematic-system.md)
