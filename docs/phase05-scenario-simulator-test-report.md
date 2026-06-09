# Scenario Simulator QA Notes

## Scope

- Added a static, rule-based Scenario Simulator using `data/scenario_simulator.json`.
- Preserved the global trilingual i18n, four-theme, floating-control, glossary, image-governance, writing-safeguard, and brand-safety architecture.
- Kept the Home-only legal notice and Creative Motivation content confined to the Home section.

## Manual Test Checklist

- [ ] Scenario presets update all input controls.
- [ ] Changing any input updates strategy layers, risk reading, SVG flow summary, glossary terms, and condition matrix.
- [ ] Language switching updates static UI labels, scenario names, recommendation text, glossary labels, summaries, and review notes.
- [ ] Theme switching changes visual styling without resetting language, scenario inputs, outputs, glossary behavior, or floating controls.
- [ ] Glossary buttons open localized modal content for BEV, FCEV, ADAS, FMS, V2G, ESG, PoC, TCO, SOH, ODD, L4, KPI, carbon accounting, and AI governance terms.
- [ ] Mobile layout uses tap-friendly controls and does not rely on hover.
- [ ] Demo Dataset, Prototype Simulation, and Human Review Required labels remain visible.
- [ ] No official procurement, engineering, legal, or product-launch recommendation language appears.
- [ ] No brand logo, license plate, customer name, or official visual is introduced.

## Static Boundary

- No backend, package manager, CDN dependency, tracker, telemetry, API key, or confidential data was introduced.
- Visual output uses vanilla JavaScript and SVG only.
- Dedicated image generation was not needed; no new public image asset was registered.
