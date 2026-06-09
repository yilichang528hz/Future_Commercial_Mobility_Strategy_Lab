# Energy Roadmap QA Notes

## Scope

- Added a static Energy Roadmap module using `data/energy_roadmap.json`.
- Compared diesel, hybrid, BEV, FCEV, V2G, depot charging capacity, SOH, carbon impact, and TCO sensitivity with demo assumptions.
- Preserved global trilingual i18n, four-theme support, floating controls, glossary popups, image governance, writing safeguards, and brand-safety boundaries.
- Did not duplicate Home-only legal notice or Creative Motivation content.

## Manual Test Checklist

- [ ] Select each energy path and verify fit score, selected text, dependency list, risk list, education topics, and customer suitability update.
- [ ] Change route predictability, annual mileage, payload, depot charging, energy-price stability, service readiness, ESG pressure, and policy support.
- [ ] Verify the 2026 to 2035 timeline, TCO crossover chart, depot capacity sketch, SOH indicator, and carbon panel update without page reload.
- [ ] Switch Chinese, English, and Japanese; confirm labels, chart summaries, glossary labels, warnings, and explanatory text update naturally.
- [ ] Switch all four themes; confirm selected energy path and inputs are preserved.
- [ ] Open glossary terms for ICE, HEV, BEV, FCEV, V2G, TCO, SOH, ESG, and PoC.
- [ ] Confirm mobile interaction uses taps, not hover-only behavior, and wide SVGs scroll inside their own panels.
- [ ] Confirm no official recommendation, procurement, legal, emissions-reporting, or product-launch claim is implied.
- [ ] Confirm no real brand logos, license plates, customer names, or official visuals appear.

## Static Boundary

- No backend, package manager, CDN dependency, tracker, telemetry, API key, or confidential data was introduced.
- Visual output uses vanilla JavaScript, HTML, CSS, and SVG only.
- No new generated image asset was required.
