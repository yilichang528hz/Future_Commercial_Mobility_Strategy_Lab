# Safety & ADAS Lab QA Notes

## Scope

- Added a static Safety & ADAS Lab module using `data/safety_adas_lab.json`.
- Covered AEB, blind spot detection, surround view, fatigue warning, V2X, driver behavior analytics, edge sensing, and commercial vehicle safety education.
- Preserved global trilingual i18n, four-theme support, floating controls, glossary popups, image governance, writing safeguards, and brand-safety boundaries.
- Did not duplicate Home-only legal notice or Creative Motivation content.

## Manual Test Checklist

- [ ] Select each safety function and verify all text panels, risk heat map, glossary chips, FAQ, and education outputs update.
- [ ] Confirm ADAS, AEB, V2X, FMS, PoC, and AI governance glossary popups open and localize.
- [ ] Switch Chinese, English, and Japanese; confirm card titles, warnings, chart summaries, limitations, and FAQ update naturally.
- [ ] Switch all four themes; confirm selected function stays selected.
- [ ] Confirm mobile layout uses tap-friendly controls and heat-map cells stack cleanly.
- [ ] Confirm no copy implies accident elimination, autonomous capability, safety certification, legal advice, or official vehicle-feature commitment.
- [ ] Confirm no real brand logos, license plates, customer names, official visuals, or rendered accident scenes appear.

## Static Boundary

- No backend, package manager, CDN dependency, tracker, telemetry, API key, or confidential data was introduced.
- Visual output uses vanilla JavaScript, HTML, CSS, and abstract risk cells only.
- No generated image asset was required.
