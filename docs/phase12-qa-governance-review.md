# Phase 12 QA, Bug Fixing, RWD, Accessibility, and Governance Review

## Scope

This review verifies the global architecture rules from Phases 00 and 01, the Home-only implementation from Phase 02, and the implemented modules through Phase 11. It checks trilingual UI, four themes, floating controls, glossary behavior, image governance, RWD, accessibility, static-site boundaries, public cleanup, and state preservation.

## Bug Fixes Applied

- `assets/js/floating-controls.js`
  - Closed floating panels now use `aria-hidden="true"`, `inert`, and `tabindex="-1"` on child controls.
  - Open panels remove `inert` and restore focusability.
  - TOC re-rendering now preserves `tabindex="-1"` when the TOC panel is closed, including after i18n refreshes.
- `assets/js/app.js`
  - Added automatic accessible labels for dynamic visual containers that use `role="img"` but do not already have `aria-labelledby`.
  - Added timer-based fallback so visual accessibility labels work even when background-browser `requestAnimationFrame` is paused.
- `index.html`
  - Added cache-busting query strings to updated static scripts: `static-data.js`, `floating-controls.js`, and `app.js`.

## QA Checklist

| Area | Result | Notes |
| --- | --- | --- |
| Default language | Pass | First meaningful render is Traditional Chinese: `zh-Hant`. |
| Legal notice | Pass | Home shows the exact zh/en/ja legal text when language changes. |
| Creative Motivation | Pass | Present once under Home; not duplicated in module sections. |
| Trilingual controls | Pass | Navigation, see-more label, TOC, floating controls, and key visible copy update in zh/en/ja. |
| Japanese visible copy | Pass | Home title, legal notice, motivation title, TOC, and control labels render naturally. |
| Theme switching | Pass | `body[data-theme]` changes across themes without removing content or resetting selected scenario state. |
| Simulator state preservation | Pass | Selected `long_haul` scenario persisted after switching Theme B and English. |
| Floating controls | Pass | Lower-right order is Language, Theme, TOC. Panels open/close and hidden controls are not keyboard-focusable. |
| TOC scrolling | Pass | TOC scrolls to `#energy-roadmap`; panel closes afterward. |
| Glossary popup | Pass | ADAS opens localized modal with English full name and acronym, X close works, ESC close works. |
| Image governance | Pass | Registry has 17 valid assets; prompt files exist; no broken final JPG references because images are pending generation. |
| Dynamic visual accessibility | Pass | 11 `role="img"` visuals have either `aria-label` or `aria-labelledby`; 11 text summaries are non-empty. |
| RWD desktop | Pass | 1440x900: no horizontal overflow, no console errors, floating controls do not cover Hero CTA. |
| RWD tablet | Pass | 768x1024: no horizontal overflow, no console errors, sections present. |
| RWD mobile | Pass | 390x844: no horizontal overflow, no console errors, hidden floating-panel controls are not focusable. |
| Anchor links | Pass | No broken internal anchors found in `index.html`. |
| Local static assets | Pass | Referenced local CSS, JS, and favicon assets exist. |
| Public cleanup | Pass | No visible `Phase 11`, `Phase 12`, prompt paths, `promptPath`, `pending_generation`, image-slot wording, or registry rows in public HTML/CSS/module JS. |
| Static-site boundary | Pass | No backend, package manager, CDN, tracker, API key, telemetry, or live data dependency introduced. |

## Validation Evidence

- Browser URL: temporary local static preview of `index.html`.
- Browser plugin: available and used for DOM, console, interaction, viewport, and RWD checks.
- Console checks: no relevant app `error`, `warn`, or `warning` messages during language, theme, glossary, TOC, state-preservation, or RWD checks.
- RWD viewports checked: 1440x900, 768x1024, 390x844.
- Screenshot capture: attempted but the in-app Browser `Page.captureScreenshot` command timed out twice; DOM, viewport, and console evidence were used instead.

## Changed Files

- `index.html`
- `assets/js/app.js`
- `assets/js/floating-controls.js`
- `docs/phase12-qa-governance-review.md`

## Remaining Limitations

- Static JPG files are still not generated. This is expected because Phase 11 intentionally created prompts and registry entries only.
- Browser screenshot capture timed out in this environment, so this QA pass did not attach screenshot evidence.
- Current policy, subsidy, carbon accounting, energy-price, and regulatory facts remain demo or verification-required unless later source work explicitly validates them.
- Full manual screen-reader testing with NVDA, VoiceOver, or TalkBack has not been performed.

## Final Readiness Notes

The site is ready for Phase 13 public cleanup and export work. Later work should preserve the global i18n, theme, floating-control, glossary, image registry, writing-guardrail, and brand-safety architecture instead of redefining it. Home-only legal and motivation content should remain Home-only.
