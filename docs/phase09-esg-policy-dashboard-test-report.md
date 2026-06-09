# ESG & Policy Dashboard QA Notes

## Scope

- Added a static ESG & Policy Dashboard module using `data/esg_policy_dashboard.json`.
- Covered policy signals, carbon metrics, subsidy checks, diesel replacement context, fleet decarbonization pressure, renewable electricity share, and customer reporting needs.
- Added a dependency-free demo carbon estimator and SVG monitoring timeline.
- Added CO2 to the glossary dataset and wired ESG, BEV, FCEV, V2G, CO2, KPI, PoC, carbon-accounting, FMS, and TCO glossary triggers.
- Preserved global trilingual i18n, four-theme support, floating controls, glossary popups, image governance, writing safeguards, and brand-safety boundaries.
- Did not duplicate Home-only legal notice or Creative Motivation content.

## Manual Test Checklist

- [x] Select each policy signal and verify source status, confidence, update placeholder, metrics, planning use, limitation, actions, and glossary chips update.
- [x] Change every carbon estimator input and verify values, SVG bars, and accessible summary update without claiming verified reduction.
- [x] Confirm the 2026 to 2035 timeline renders and source-status states are visible.
- [x] Confirm ESG, BEV, FCEV, V2G, CO2, KPI, PoC, carbon-accounting, FMS, and TCO glossary popups open and localize.
- [x] Switch Chinese, English, and Japanese; confirm dashboard cards, carbon labels, warnings, timeline labels, and action recommendations update naturally.
- [x] Switch all four themes; confirm selected policy signal and carbon input state stay selected.
- [x] Confirm mobile layout uses tap-friendly controls and SVG panels scroll within their own cards.
- [x] Confirm no public copy implies latest verified policy status, subsidy approval, legal advice, accounting advice, procurement recommendation, or verified carbon reduction.
- [x] Confirm no official logos, government UI screenshots, customer identifiers, license plates, real emissions reports, or confidential data appear.

## Static Boundary

- No backend, package manager, CDN dependency, tracker, telemetry, API key, or confidential data was introduced.
- Visual output uses vanilla JavaScript, HTML, CSS, JSON, and SVG only.
- No generated image asset was required, so the public image registry did not need a new display asset entry.

## Validation Run

- Date: 2026-06-02.
- Browser path: the in-app Browser invocation failed at startup in that environment, so validation used a local browser fallback.
- Static checks passed: 5 JSON files parsed, 7 JavaScript files passed syntax checks, duplicate IDs 0, missing anchors 0, missing i18n keys 0, public cleanup hits 0.
- Glossary checks passed: all 24 glossary terms now have reviewed Chinese and Japanese public fields without private-use mojibake characters.
- Render checks passed: 6 policy signal cards, 5 carbon input groups, 3 carbon output cards, 2 SVG carbon bars, 7 timeline nodes, 7 timeline text rows, and 4 recommendation cards rendered.
- Interaction checks passed: selecting `subsidy_eligibility_watch`, renewable share `high`, and replacement share `focused` updated the demo carbon model to diesel baseline 30.954 tCO2e, modeled mix 16.06836 tCO2e, demo difference 14.88564 tCO2e.
- Language/theme checks passed: default language is Chinese (`zh-Hant`); English and Japanese switch naturally; Theme D preserves selected signal and carbon inputs.
- Glossary checks passed: CO2 opens a localized glossary modal, focus moves to the close button, and ESC closes the modal.
- Mobile checks passed at 390 x 844: body and document scroll width remain 390, no option buttons are clipped, floating controls count is 3.
- Console health: no page errors, console errors, warnings, or mobile console issues.

## Screenshot Evidence

- Desktop ESG Dashboard: temporary QA capture, not retained in the public export.
- Mobile ESG Dashboard: temporary QA capture, not retained in the public export.
- Timeline detail capture: temporary QA capture, not retained in the public export.
