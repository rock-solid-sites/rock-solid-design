# Treatment C — reader test protocol (27 October 2026)

**Status:** Protocol only. No participant testing has been performed. No evidence of improved comprehension or accessibility conformance is claimed. This protocol complements [the evaluation matrix](validation-matrix-2026-10-27.md) and the [review gallery](../../studies/v0.2/review/gallery.html).

## Hypothesis and risks

The structural-cutaway treatment adds recognizable interface forms without increasing false inferences about technical integration or project completion. The most serious failure is when a participant mistakes *a conceptual dependency* for *a deployed live API*, or takes *HMS planned scope* as shipped. Another failure is when visually bold chrome overwhelms or obscures what matters. This experiment does **not** isolate the effects of silhouette, layout, line weight, and detail. Do not attribute a preference for C to any one graphic ingredient.

## Subjects

Five: booking responsibilities, architectural pivot, separate property accounts, HMS roadmap, and independent software review. Booking additionally has independently drawn S/M/L versions. Preserve a common subject/question/takeaway across visual treatments; record known informational differences as confounds.

## Conditions

- **C:** Treatment C, full-size SVG with accurate status notes.
- **N:** neutral labelled boxes-and-lines reference.
- **P:** plain-text statement conveying the same main fact, with no image.

Provide the same short external explanation and truth-status qualifier across conditions **after** the initial five-second gist task. Avoid exposing filenames or headers that identify a treatment. One person should ideally not evaluate all three presentations of the same subject without acknowledging learning effects. Use a between-subject assignment for rigorous comparison, or counterbalance at minimum for a formative pilot.

## Suggested formative pilot, not a statistical study

Recruit **six adults** unfamiliar with the specific project, with a range of technical familiarity and a variety of device/browser setups. Record whether each participant knows terms such as API, website, and reservations. Do not pressure people to provide demographic or health information.

Counterbalance condition order across the six permutations C-N-P, C-P-N, N-C-P, N-P-C, P-C-N, P-N-C. Randomize or rotate subject order; note whether the same subject is repeated. The pilot can detect serious misunderstandings, but six people cannot establish population-level success or statistically meaningful superiority.

## Procedure, one subject at a time

1. Ask what the participant expects from a drawing of a system relationship, before presenting it.
2. Show the assigned condition for **five seconds**, with its main canvas visible; conceal the caption during the initial exposure. Ask them to say what the image or text is about without prompting.
3. Ask: **What does each line or arrow mean?** Can they identify a real API, a dependency, or a chronological decision? Allow “not enough information” as a correct answer.
4. Ask: **Which parts are historical, currently in development, proposed, or actually operating?** Give no feedback yet. Wrong assumptions about “already shipped” should be recorded verbatim.
5. Provide the shared caption and qualifier, then ask them to summarize the explanation in their own words.
6. Ask whether the presentation added information or introduced ambiguity relative to the plain-language explanation.
7. For accessibility review, separately inspect keyboard order and browser/screen-reader announcement of the SVG title, description and nearby caption.

## Recording

Use the [blank response template](reader-test-record-template.csv) *once per subject/participant/condition*. Preserve actual answers and reasons, not just pass/fail values. Use anonymous participant IDs. Do not store personal identifiers in this public repository.

Scoring fields: gist correct (yes/no/uncertain), relationship interpreted correctly (yes/no/uncertain), lifecycle interpreted correctly (yes/no/uncertain), **false claim of confirmed transport** (yes/no), **false claim of shipped planned capability** (yes/no), descriptive notes, device-width and accessibility observations.

## Provisional gate

For this formative exercise, any **unprompted serious false-live or false-shipped inference** is a design failure requiring a targeted fix and retest. Do not turn 5/6 or 80% into a formal accessibility or usability pass threshold without a better-powered study. Record the number of correct gist explanations and the exact misunderstanding pattern. Prefer improving clarity over optimizing scores to a tiny sample.

## Visual and responsive checks

Inspect the local HTML gallery at desktop widths (768, 1024, 1440), mobile widths (320, 375, 390), and 200% zoom. Check no cropped headlines, no tiny auto-shrunk detail labels, no overlapping connector words, and availability of captions. **The 760px research SVGs must remain at native resolution with horizontal scrolling in the gallery if the viewport is narrower.** A production page would require a separate mobile composition or a text-first accessible fallback for the other four subjects.

Text at 11px on a 760px source would become approximately **4.6px at 320px** if naïvely shrunk. Even the S-tier emblem is only a candidate: inspect its real rendered form and adjacent caption rather than promising 48px compatibility.

## Publication boundaries

Treat all project-specific examples as **reported concepts**, not verified architecture. No user-testing dataset is publicly present. Screenshots from CI support rendering reproducibility; they cannot substitute for actual visual inspection or reader comprehension testing. Do not merge the diagram package on the strength of test runners alone.
