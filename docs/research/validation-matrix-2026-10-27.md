# How to evaluate the schematic language

**Status:** experimental evaluation plan. These checks have not yet been carried out. This document is intentionally not a claim of accessibility conformance or improved user comprehension.

## Controls

Test the same *facts* and *question* through two presentations, rather than comparing a vague marketing illustration with a precise system map. One should be RSS Treatment C, one a neutral boxes-and-labelled-arrows baseline. Don't compare fundamentally different stories.

For each scenario, record:
- Diagram purpose, primary audience and one-sentence question
- Exactly which project facts are user-reported, source-verified, hypothetical or planned
- Main statement a nontechnical viewer should be able to repeat
- Number and type of meaningful relations; lifecycle statuses where relevant
- Whether labels and directions are unambiguous
- Asset size, visible text size, and output format; actual browser tested
- Short and long text alternative where warranted
- Source URL/commit/evidence for technical assertions
- Observed comprehension errors, not just aesthetic preference

## Pilot cases

| Case | Diagram purpose | One question | Failure to watch for |
| --- | --- | --- | --- |
| A — booking | Single relationship | How does a guest-facing website reach a reservation service? | Mistaking a conceptual connection for confirmed direct API flow |
| B — architectural pivot | Decision timeline | Why did implementation change direction? | Confusing evaluated alternatives with shipped systems |
| C — multiple identities | Parallel experiences | Can four independently designed sites participate in related booking workflows? | Believing four sites use one shared template, or one shared booking account |
| D — quality ribbon | Cross-cutting constraints | Which concerns apply to all experiences? | Mistaking SEO/accessibility/reliability for separate commercial products |
| E — HMS expansion | Planning boundary | Which capabilities are Phase 2 rather than Phase 1? | Treating proposals as available features |
| F — adversarial review | Process explainer | How do independently assigned reviewer roles challenge build work? | Implying external certification or guaranteeing defect-free output |

## Evaluation exercises

1. **Five-second gist**: show a compact diagram without surrounding caption. Ask what the drawing is mainly about. Record the answer, not just correct/incorrect.
2. **Relation comprehension**: ask what a connector means and which direction, if any, it implies. The answer should match its labelled semantic type.
3. **Truth-status comprehension**: ask which parts are historical, in development or proposed; a misread as “already delivered” is a serious failure.
4. **Comparison to plain copy**: test whether the illustration adds understanding relative to the equivalent 2–3 sentences.
5. **Small-size tests**: inspect 96–180px service spot, a 320px mobile layout, and a wider case-study layout. Observe clipping, type legibility, contrast, content-order and line collisions.
6. **Accessible-equivalence test**: use only the text alternative; verify it conveys the same essential facts without needing the graphic.
7. **Visual-family test**: present multiple diagrams from different subjects without branding; ask whether they plausibly belong to one system. This is a qualitative branding exercise, not a scientific recognizability claim.
8. **Maintenance test**: update a hypothetical system stage and verify that diagram labels, metadata, legend and long description can be changed without hunting down hardcoded strings in unrelated files.

## Decision gate

A proposal is ready for broader implementation only when its semantic relationships are correct, nonexperts understand the gist, its contrast and text alternatives are usable, and it retains the approved website visual identity. Record findings per specimen with dated visual evidence. Do not fabricate scores or claim formal usability validation from only author review.

## Source guidance

- https://c4model.com/diagrams/notation
- https://learn.microsoft.com/en-us/azure/well-architected/architect-role/design-diagrams
- https://www.w3.org/WAI/tutorials/images/complex/
- https://atlassian.design/foundations/illustrations
