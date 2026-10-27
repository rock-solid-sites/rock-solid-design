# Visual evaluation checkpoint — 27 October 2026

**Status:** Browser screenshots generated and verified as PNGs in Chrome 155; **no direct visual pixel inspection, manual readability verdict, participant test or assistive-tech test yet**. This prevents conflating successful capture with a passed visual-quality gate.

## Source of evidence

- PR: https://github.com/rock-solid-sites/rock-solid-design/pull/1
- First successful browser capture run: https://github.com/rock-solid-sites/rock-solid-design/actions/runs/40437330346
- Nine-file screenshot artifact: https://github.com/rock-solid-sites/rock-solid-design/actions/runs/40437330346/artifacts/12703824185
- Browser recorded in log: Google Chrome **155.0.8059.39**
- Captures succeeded: 8 desktop images **1440×1200** and one mobile image **390×1800**; PNG signatures and dimensions validated by Python. Source code checks and npm packaging also passed.

The uploaded screenshots are available for a human reviewer to inspect; the connector available in this session does not expose their binary pixel content for direct visual judgement. No claim is made here that all nine were visually reviewed.

## Expanded browser capture — additional verified coverage

Run: https://github.com/rock-solid-sites/rock-solid-design/actions/runs/40437541342

Artifact (15 PNGs): https://github.com/rock-solid-sites/rock-solid-design/actions/runs/40437541342/artifacts/12703699470

Both CI jobs passed: `npm test`, SVG XML validation, package dry-run, and real Chrome headless PNG captures. Actual pixel dimensions reported by PNG header inspection:

- **320×1800**, **375×1800**, **390×1800** — compact booking illustration in facilitator gallery.
- **768×1200** and **1024×1200** — medium reference in constrained layouts, using horizontal overflow rather than unreadable shrinking.
- **1440×1200** — five Treatment C examples, booking neutral, booking prose, booking L tier, and no-priming participant stimulus.
- **375×1000** — unprimed compact booking participant stimulus.

These are **viewport screenshots**, not claims that all content was visible, non-overlapping, accessible, or understood. Human inspection of the artifact is still outstanding.

## Findings grounded in source dimensions

- Reference art is **760px** across and contains **11–13px** SVG labels. Compressing it to **320px** would shrink those labels to ~4.6–5.5px. Therefore no default CSS `max-width:100%` shrink is accepted for a detailed illustration.
- The 192×136 S-tier booking illustration has been composed separately. Its former 9px on-art status label was removed; the necessary qualification remains in adjacent descriptive text on the facilitator gallery. Whether the compact artwork itself is self-explanatory remains untested.
- The 960×440 L-tier booking version is different content, not a CSS magnification of the medium example. Its extra detail should be judged on whether it improves understanding, not simply whether it looks more elaborate.
- The 390px **gallery** snapshot demonstrates browser output at a mobile viewport, but the gallery shows captions and questions. It therefore cannot validate the **unprimed five-second gist**. A separate no-answer participant view is provided for that test.
- The four non-booking examples **still lack independently designed mobile versions**. The research gallery intentionally scrolls them at native width and offers adjacent text. This is not production-responsive behavior.

## Review and acceptance queue

| Activity | Status | Needed evidence |
| --- | --- | --- |
| SVG XML, safe references, titles and desc | PASS (automated) | CI log |
| Node semantic metadata, source contract | PASS (automated) | CI log |
| Browser screenshot creation, correct PNG size | PASS | CI artifact/log |
| Actual pixel inspection at native size | NOT DONE | Reviewer observations from screenshots |
| Contrast/visual collision/accessibility check | NOT DONE | Browser manual audit, not only SVG source |
| 320/375/390/768/1024/1440 width captures | CAPTURED (automated) | Pixel inspection for legibility, scroll, clipping, behavior still needed |
| 200% browser zoom | NOT DONE | Browser inspection |
| Six-person formative test | NOT DONE | Raw anonymized responses, counterbalanced order |
| Compare cutaway vs. neutral vs. prose | CAPTURED, NOT EVALUATED | First-view reader observations |
| Cross-domain generalizability | ONE REFERENCE ONLY | Wider examples / reader results |

## Do not infer

The browser capture creates evidence that Chrome rendered a page at specified dimensions; it does not prove the selected image fully fitted into the viewport, did not overlap text, or was interpreted accurately. The public README's source-based diagrams remain research specimens. Do not merge or publish a v0.2 package on the strength of screenshot capture alone.
