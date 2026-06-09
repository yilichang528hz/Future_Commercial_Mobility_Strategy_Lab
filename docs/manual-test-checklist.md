# Manual Test Checklist

Use this checklist before handing off any public-facing update.

## Static Boundary

- [ ] Opening `index.html` works without a build step.
- [ ] Opening `index.html` directly through `file://` loads i18n, glossary, image registry state, and all JSON-driven modules through `assets/js/static-data.js`.
- [ ] First load defaults to Traditional Chinese (`zh-Hant`) unless the user has changed the current language through the floating language control.
- [ ] No backend service, database, API key, tracker, telemetry, CDN dependency, or npm install requirement is introduced.
- [ ] Public pages do not expose local file paths, prompt paths, registry internals, or build-process wording.
- [ ] Public copy does not imply official Toyota, HINO, Hotai, dealer, customer, or government endorsement.

## Global UX

- [ ] Language control switches Traditional Chinese, English, and Japanese text.
- [ ] Theme control switches Theme A, B, C, and D through `body[data-theme]`.
- [ ] Theme changes do not reset language, disclosure state, glossary behavior, or section position.
- [ ] Contents control opens the section list and scrolls to each target.
- [ ] Floating panels close on Escape and outside click.
- [ ] Floating controls remain reachable on mobile and do not cover essential content.

## Glossary

- [ ] Glossary chips open localized modal content.
- [ ] Inline glossary terms open the same modal behavior.
- [ ] Modal has a close button and closes on Escape.
- [ ] Focus returns to the triggering term after close.
- [ ] Definitions distinguish planning relevance from source notes.

## Data And Image Governance

- [ ] `data/i18n.json` is valid JSON.
- [ ] `data/glossary_terms.json` is valid JSON.
- [ ] `data/imageAssetRegistry.json` is valid JSON and contains the required schema fields.
- [ ] `data/source_registry.json` is valid JSON.
- [ ] Demo data is labeled in public-facing contexts.
- [ ] No public image references a missing final asset unless it is intentionally hidden until the image pass.

## Responsive And Accessibility

- [ ] Header navigation opens and closes on narrow screens.
- [ ] All controls are keyboard reachable.
- [ ] Focus styles are visible.
- [ ] Text does not overlap or overflow at desktop and mobile widths.
- [ ] Public links resolve to existing anchors or files.

## Scenario Simulator

- [ ] Scenario presets update route, mileage, payload, charging, downtime, ESG, regulation, and infrastructure inputs.
- [ ] Input changes update recommendation layers, risk notes, SVG flow summary, and condition matrix.
- [ ] Language and theme changes preserve the active scenario state.
- [ ] Demo Dataset, Prototype Simulation, and Human Review Required labels are visible.
- [ ] Glossary triggers work for BEV, FCEV, ADAS, FMS, V2G, ESG, PoC, TCO, SOH, and related terms.

## Energy Roadmap

- [ ] Energy path selection updates fit score, role text, dependencies, risks, dealer education, SOH, carbon panel, and chart emphasis.
- [ ] Energy condition controls update TCO sensitivity, depot capacity, fit scores, and accessible summaries.
- [ ] Language and theme changes preserve the selected energy path and input state.
- [ ] Demo assumption labels and caveats remain visible.
- [ ] Glossary triggers work for ICE, HEV, BEV, FCEV, V2G, TCO, SOH, ESG, and PoC.

## Safety & ADAS Lab

- [ ] Safety function cards update technical function, customer value, driver education, suitable segments, scenarios, limitations, overclaim guardrails, planning implications, education materials, FAQ, and risk heat map.
- [ ] Language and theme changes preserve the selected safety function.
- [ ] Demo assumption and responsibility-boundary copy remain visible.
- [ ] Glossary triggers work for ADAS, AEB, V2X, FMS, PoC, and AI governance terms.
- [ ] Public copy avoids accident-elimination, autonomous-driving, legal, safety-certification, or official feature-commitment claims.

## Connected Fleet Lab

- [ ] Fleet service cards update selected module summary, data inputs, customer value, product-planning value, service or governance requirements, risk notes, dealer education, and report outputs.
- [ ] SVG data-flow view renders vehicle signals, data cleaning, analysis, service action, dealer support, and customer report stages with an accessible text summary.
- [ ] Language and theme changes preserve the selected fleet module.
- [ ] Demo assumptions, privacy caveat, no-API boundary, and human-review governance notes remain visible.
- [ ] Glossary triggers work for FMS, OTA, ESG, KPI, AI governance, TCO, SOH, V2G, dealer, and carbon-accounting terms.
- [ ] Public copy does not imply live telemetry, real customer data collection, procurement advice, official fleet-system status, or verified carbon reporting.

## ESG & Policy Dashboard

- [ ] Policy signal cards update source status, confidence, update-date placeholder, metrics, planning use, limitation note, suggested actions, and glossary chips.
- [ ] Demo carbon estimator updates diesel baseline, replacement mix, demo difference, SVG bar chart, and accessible summary when inputs change.
- [ ] Timeline renders 2026 to 2035 monitoring items with latest-verification and source-placeholder states.
- [ ] Language and theme changes preserve the selected policy signal and carbon input state.
- [ ] Demo assumptions, latest-verification caveat, source-confidence notes, carbon-accounting warning, and no-logo policy remain visible.
- [ ] Glossary triggers work for ESG, BEV, FCEV, V2G, CO2, KPI, PoC, carbon-accounting, FMS, and TCO.
- [ ] Public copy avoids verified-emissions-reduction, legal, subsidy-approval, accounting, procurement, compliance, or official-policy claims.
