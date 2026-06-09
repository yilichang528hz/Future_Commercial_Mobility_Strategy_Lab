# Connected Fleet Lab QA Notes

## Scope

- Added a static Connected Fleet Lab module using `data/connected_fleet_lab.json`.
- Covered remote diagnostics, predictive maintenance, route optimization, driver behavior scoring, fleet utilization analytics, service scheduling, parts prediction, carbon tracking, and customer operating reports.
- Rendered a dependency-free SVG data-flow view for vehicle signals, data cleaning, analysis, service action, dealer support, and customer report.
- Preserved global trilingual i18n, four-theme support, floating controls, glossary popups, image governance, writing safeguards, and brand-safety boundaries.
- Did not duplicate Home-only legal notice or Creative Motivation content.

## Manual Test Checklist

- [ ] Select each fleet service module and verify summary, data inputs, value panels, governance requirements, risk notes, dealer education, report outputs, glossary chips, and SVG relevance highlights update.
- [ ] Confirm FMS, OTA, ESG, KPI, AI governance, TCO, SOH, V2G, dealer, and carbon-accounting glossary popups open and localize.
- [ ] Switch Chinese, English, and Japanese; confirm module names, warnings, data-flow labels, governance notes, and report outputs update naturally.
- [ ] Switch all four themes; confirm selected fleet module stays selected.
- [ ] Confirm mobile layout uses tap-friendly cards and the SVG data flow scrolls within its own panel.
- [ ] Confirm privacy copy states that no real vehicle, driver, customer, operational data, API, or live telemetry is collected or connected.
- [ ] Confirm no real brand logos, license plates, customer names, route traces, official system marks, or confidential data appear.

## Static Boundary

- No backend, package manager, CDN dependency, tracker, telemetry, API key, or confidential data was introduced.
- Visual output uses vanilla JavaScript, HTML, CSS, JSON, and SVG only.
- No generated image asset was required, so the public image registry did not need a new display asset entry.

## Validation Run

- JSON validation passed for `data/i18n.json`, `data/glossary_terms.json`, `data/imageAssetRegistry.json`, `data/source_registry.json`, and `data/connected_fleet_lab.json`.
- JavaScript syntax validation passed for the Connected Fleet module and shared global scripts.
- Cross-file validation found no missing i18n keys, duplicate IDs, missing anchors, missing fleet glossary terms, or Home-only legal/motivation leakage.
- Browser QA passed with a local static HTTP server and bundled Playwright/Chrome after the in-app browser was blocked by the Windows sandbox.
- Checked 9 fleet modules, 6 SVG flow nodes, 6 flow step cards, 7 output cards, key glossary terms, Japanese language switching, Theme C switching, selected-module state preservation, glossary open/Escape close behavior, mobile layout, and screenshots.
- Screenshot artifacts were temporary QA captures and are not retained in the public export.
