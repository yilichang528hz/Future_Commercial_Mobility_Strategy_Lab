# Future Commercial Mobility Strategy Lab

Future Commercial Mobility Strategy Lab is a static portfolio prototype for commercial vehicle product planning. It organizes future mobility strategy across trend radar, technology maturity, scenario simulation, energy roadmap, safety and ADAS education, connected fleet services, ESG and policy signals, and a 2026 to 2035 roadmap studio.

This is a personal portfolio project. It is not an official Toyota, HINO, Hotai, dealer, customer, competitor, or government system.

## GitHub Pages Boundary

The repository root is the deployable static folder. `index.html` sits at the first level and all public assets use relative paths.

Allowed technologies:

- HTML
- CSS
- Vanilla JavaScript
- JSON
- Markdown
- SVG and Canvas
- Local image assets
- `localStorage` for language, theme, and selected UI state

Forbidden technologies:

- Backend services
- Databases
- API keys
- Trackers or telemetry
- CDN dependencies
- Package-manager build requirements
- Confidential, official, customer, vehicle, license-plate, or live operational data

## Local Preview

Open `index.html` directly in a browser, or serve the repository folder with any plain static file server.

When opened directly from the local filesystem, browsers may block normal JSON `fetch()` calls. `assets/js/static-data.js` provides the static JSON fallback used by the public site, including i18n, glossary, image registry checks, and module data.

The first load defaults to Traditional Chinese (`zh-Hant`) unless the visitor has previously changed the language through the floating language control.

## GitHub Pages Deployment

1. Push the repository to GitHub.
2. In the repository settings, enable GitHub Pages.
3. Set the source to the target branch and root folder.
4. Do not configure a build command.
5. Confirm the published URL opens `index.html` and uses relative assets.

The Word proposal download is linked from the public page only when the source file exists in `00_SOURCE_FILES/`.

## Global UX Architecture

The site preserves these global systems:

- Trilingual public UI: Traditional Chinese, English, and Japanese.
- Four visual themes controlled by `body[data-theme]`.
- Lower-right floating controls in this order: Language, Theme, Contents.
- Glossary modal with localized full name, English full name, abbreviation, explanation, close button, Escape support, and focus management.
- Demo-data and human-review labels for planning, simulation, ESG, policy, and roadmap outputs.
- Image governance through `data/imageAssetRegistry.json`, `prompts/static/`, and `prompts/dynamic/`.
- Writing guardrails against overclaiming, binary technology framing, official-system implication, and unsupported policy or carbon conclusions.

The Home legal notice and Creative Motivation block are Home-only content. They must not be duplicated into module sections.

## Implemented Modules

- Home and navigation: hero, module entrances, legal notice, creative motivation, public disclaimer, floating controls, glossary links, and document downloads.
- Trend Radar: demo-assumption strategy prioritization with radar, bubble, heat-grid, and 2026 to 2035 timeline views.
- Technology Maturity Map: four-quadrant planning view for maturity, value, risk, cost, training difficulty, and service readiness.
- Scenario Simulator: rule-based demo recommendations for customer scenarios and operating conditions.
- Energy Roadmap: 2026 to 2035 comparison of diesel, hybrid, BEV, FCEV, V2G, charging readiness, SOH, carbon impact, and TCO sensitivity.
- Safety & ADAS Lab: cautious education and communication framework for AEB, blind spot detection, surround view, fatigue warning, V2X, and related systems.
- Connected Fleet Lab: fleet data-service planning for diagnostics, predictive maintenance, route optimization, driver behavior, utilization, service scheduling, parts prediction, carbon tracking, and customer reports.
- ESG & Policy Dashboard: bounded policy and carbon-planning dashboard with source confidence, update placeholders, and demo carbon estimation.
- Strategy Roadmap Studio: 2026 to 2035 roadmap tracks, filters, validation needs, and roadmap-oriented planning notes.

## File Structure

- `index.html` - public static site entry point.
- `favicon.svg` - local favicon.
- `assets/css/styles.css` - responsive layout, visual themes, floating panels, glossary modal, and public UI styling.
- `assets/js/` - global systems and module renderers.
- `data/` - i18n, glossary, source registry, image registry, and demo module datasets.
- `docs/` - public disclaimer, assumptions, QA notes, manual checklist, and final release notes.
- `prompts/static/` - static visual prompt briefs for future image generation.
- `prompts/dynamic/` - dynamic SVG, Canvas, and HTML5 animation briefs.
- `images/` - final JPG image assets when generated.
- `00_SOURCE_FILES/` - user-provided source proposal and source-file notes.

## Data Limitations

All scores, strategy recommendations, policy signals, carbon examples, roadmap items, and simulation outputs are demo assumptions unless a source registry entry explicitly supports a claim.

Before formal business use, verify current regulations, subsidy rules, emission factors, energy prices, vehicle specifications, infrastructure availability, duty cycles, customer route data, service-network readiness, and enterprise accounting methods.

## Browser And Accessibility Testing

Recommended checks before publishing:

- Load `index.html` from a static preview.
- Switch Chinese, English, and Japanese.
- Switch Theme A, B, C, and D.
- Open and close floating Language, Theme, and Contents panels.
- Use the TOC to scroll to each section.
- Open glossary terms and close the modal with X, Escape, and outside interaction where supported.
- Test desktop, tablet, and mobile widths.
- Confirm no horizontal overflow, console errors, broken links, or broken image icons.
- Confirm keyboard focus is visible and hidden floating-panel controls are not focusable.
- Confirm dynamic SVG or Canvas modules have text summaries or accessible labels.

Full manual screen-reader testing should be performed separately before using the site as an accessibility reference.

## Maintenance Notes

When adding or editing content:

- Keep `data/i18n.json` and `assets/js/static-data.js` in sync.
- Add glossary terms to `data/glossary_terms.json` before using new acronyms in UI.
- Register planned or generated visuals in `data/imageAssetRegistry.json`.
- Keep final public images generic: no official marks, real logos, real license plates, customer identifiers, or brand imitation.
- Preserve the Home-only legal and motivation rule.
- Do not display prompt paths, registry fields, source-file paths, pending-generation states, or workflow notes in the public UI.
