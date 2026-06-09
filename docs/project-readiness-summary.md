# Project Readiness Summary

## Project Goal

Future Commercial Mobility Strategy Lab is a static portfolio website that demonstrates how a commercial vehicle product planner can organize future mobility strategy across trend radar, technology maturity, scenario simulation, energy roadmap, safety and ADAS education, connected fleet services, ESG and policy signals, and a 2026 to 2035 strategy roadmap.

The site is a personal portfolio prototype and strategy-method demonstration. It is not an official corporate, dealer, customer, or government system.

## Allowed Technologies

- HTML
- CSS
- Vanilla JavaScript
- JSON
- Markdown
- SVG
- Canvas
- localStorage, with graceful fallback
- Local image assets using relative paths
- Static documentation and prompt files

## Forbidden Technologies

- Backend services
- Databases
- Server runtimes
- Required package managers or npm install steps
- CDN dependencies
- Secret keys
- Paid APIs
- Trackers, telemetry, or analytics beacons
- Real confidential company, customer, dealer, fleet, license plate, or government data
- Official Toyota, HINO, Hotai, dealer, competitor, or customer marks in generated artwork or UI

## Source Files Found

- `AGENTS.md`
- `MASTER_SPEC_FULL.txt`
- `SOURCE_MANIFEST.md`
- `00_SOURCE_FILES/Portfolio_05_Future_Mobility_Strategy_Lab.docx`
- `00_SOURCE_FILES/README_SOURCE_FILES.md`
- `DESIGN_RULES/01_TRILINGUAL_I18N_RULES.md`
- `DESIGN_RULES/02_FOUR_THEME_VISUAL_SYSTEM.md`
- `DESIGN_RULES/03_FLOATING_CONTROLS_AND_TOC.md`
- `DESIGN_RULES/04_IMAGE_AND_ANIMATION_PROMPT_GOVERNANCE.md`
- `DESIGN_RULES/05_WRITING_REASONING_GUARDRAILS.md`
- `DESIGN_RULES/06_GLOSSARY_ACRONYM_POPUP_RULES.md`
- `DESIGN_RULES/07_COPYRIGHT_AND_CREATIVE_MOTIVATION.md`
- `DESIGN_RULES/08_STATIC_IMAGE_PRODUCTION_CHECKLIST.md`
- `DATA_TEMPLATES/i18n_schema.template.json`
- `DATA_TEMPLATES/imageAssetRegistry.template.json`
- `DATA_TEMPLATES/glossary_terms_seed.json`
- `IMPLEMENTATION_SNIPPETS/theme-i18n-floating-glossary.js`
- `IMPLEMENTATION_SNIPPETS/theme-floating-glossary.css`
- `PHASE_PROMPTS/PHASE_00_CODEX_START_PROMPT.txt`
- `PHASE_PROMPTS/PHASE_01_SITE_SCAFFOLD_PROMPT.txt`
- `PHASE_PROMPTS/PHASE_02_HOME_AND_NAV_PROMPT.txt`
- Existing dynamic prompt briefs under `prompts/dynamic/`

The source manifest references a starter ZIP in `00_SOURCE_FILES/`, but that ZIP was not found in the current file list.

## Public Content Boundaries

- Public pages must not show phase labels, prompt names, local file paths, patch workflow notes, registry internals, placeholder image slot text, or Codex build-process wording.
- Public copy must identify the work as a personal portfolio prototype when brand names are mentioned for context.
- Public UI must not imply official endorsement by Toyota, HINO, Hotai, any dealer, any customer, or any government agency.
- Public claims must distinguish demo data, source-supported facts, planning hypotheses, and items requiring validation.
- Home-only legal notice and Home-only Creative Motivation content will be implemented only in Phase 02.

## Inherited Global UX Rules

- All public UI must support Traditional Chinese, English, and Japanese.
- Public text should be driven by a central i18n object or JSON dataset, using stable keys such as `data-i18n`.
- Four themes must be supported through `body[data-theme]` or equivalent stable body classes.
- Theme state should persist in localStorage when available and remain usable when localStorage is unavailable.
- Lower-right floating controls must be site-wide, in this vertical order: Language, Theme, TOC.
- Floating controls must be keyboard accessible, mobile-safe, and use correct ARIA state.
- Floating TOC entries must be generated from stable section IDs and update when language changes.
- Glossary terms must use a dataset and open localized popups or modals for automotive, energy, fleet, dealer, ESG, and AI-governance acronyms.
- Glossary popups need close buttons, Escape close support, focus handling, and mobile-safe layout.
- Simulator, chart, theme, and language interactions must not reset unrelated user state.

## Demo Data Rules

- All generated datasets are demo data unless `data/source_registry.json` explicitly identifies source-supported claims.
- Demo data must be visibly labeled in relevant UI areas.
- Source registry entries should include source ID, source name, source type, confidence tier, last updated date, supported claims, limitations, allowed outputs, and restricted outputs.
- If external research is unavailable, source-dependent material should be marked `requires_external_research` or `requires verification`.
- Public conclusions must use cautious language such as `planning hypothesis`, `demo`, `requires validation`, or `human review required` where appropriate.

## Brand Safety Rules

- Generated images must use generic commercial vehicles, fleet contexts, and dashboard visuals.
- Do not include official logos, real dealership marks, competitor marks, real license plates, official UI screenshots, or real customer/government documents.
- Brand names may appear only for portfolio context, source context, or disclaimer language.
- The site must never read like an official corporate product, internal system, dealer platform, or market forecast.

## Expected File Structure

Later phases are expected to create or update:

- `index.html`
- `README.md`
- `LICENSE`
- `assets/css/styles.css`
- `assets/js/app.js`
- `assets/js/i18n.js`
- `assets/js/theme.js`
- `assets/js/floating-controls.js`
- `assets/js/glossary.js`
- `assets/js/image-registry.js`
- `assets/js/trend-radar.js`
- `assets/js/maturity-map.js`
- `assets/js/scenario-simulator.js`
- `assets/js/energy-roadmap.js`
- `assets/js/adas-lab.js`
- `assets/js/connected-fleet.js`
- `assets/js/esg-policy.js`
- `assets/js/roadmap-studio.js`
- `data/i18n.json`
- `data/glossary_terms.json`
- `data/imageAssetRegistry.json`
- `data/source_registry.json`
- `data/trend_radar.json`
- `data/technology_maturity.json`
- `data/scenario_strategy.json`
- `data/energy_roadmap.json`
- `data/adas_modules.json`
- `data/connected_fleet_modules.json`
- `data/esg_policy_signals.json`
- `data/roadmap_items.json`
- `data/strategy_prompts.json`
- `pages/trend-radar.html`
- `pages/technology-maturity-map.html`
- `pages/scenario-simulator.html`
- `pages/energy-roadmap.html`
- `pages/safety-adas-lab.html`
- `pages/connected-fleet-lab.html`
- `pages/esg-policy-dashboard.html`
- `pages/strategy-roadmap-studio.html`
- `pages/interview-demo.html`
- `images/*.jpg`
- `prompts/static/*.md`
- `prompts/dynamic/*.md`
- `docs/project-proposal.md`
- `docs/trend-methodology.md`
- `docs/technology-roadmap.md`
- `docs/data-dictionary.md`
- `docs/prompt-library.md`
- `docs/interview-script.md`
- `docs/assumptions-and-limitations.md`

Enhanced v2 image governance prefers final JPG assets under `images/`. If later phases choose `assets/images/` for legacy compatibility, the choice must be made once and used consistently across HTML, JS, and `data/imageAssetRegistry.json`.

## Phase Execution Order

- Phase 00: project intake and global architecture declaration.
- Phase 01: global static scaffold, i18n, themes, floating controls, glossary, image registry, writing guardrails, and brand-safety infrastructure.
- Phase 02: Home page only, including language-aware legal notice and Creative Motivation.
- Phase 03: Trend Radar.
- Phase 04: Technology Maturity Map.
- Phase 05: Scenario Simulator.
- Phase 06: Energy Roadmap.
- Phase 07: Safety and ADAS Lab.
- Phase 08: Connected Fleet Lab.
- Phase 09: ESG and Policy Dashboard.
- Phase 10: Strategy Roadmap Studio.
- Phase 11: static image and dynamic animation planning, English prompt generation, JPG governance, and image registry completion.
- Phase 12: QA validation of global systems and Home-only scope.
- Phase 13: final public cleanup and GitHub Pages export.

## Risks Requiring Human Review

- Some localized Chinese and Japanese content in templates and rule files appears corrupted in terminal output and should be reviewed before public use.
- `DATA_TEMPLATES/i18n_schema.template.json`, `DATA_TEMPLATES/imageAssetRegistry.template.json`, and `DATA_TEMPLATES/glossary_terms_seed.json` are currently invalid JSON and should be rebuilt rather than copied directly.
- The reusable JS snippet for theme, i18n, floating controls, and glossary contains malformed localized-template strings and should be treated as architecture guidance only.
- The exact Home legal notice text should be reviewed because the current design-rule copies include encoding corruption.
- The source manifest references a ZIP file that is not currently present.
- The current workspace is not recognized as a Git repository by `git status`, which may affect later GitHub Pages deployment workflow.
- Any public industry claim based on IEA, ICCT, NVIDIA, UNECE, DOE, NHTSA, SAE, ISO, or similar sources needs source-date verification before being presented as factual.
- Public image path convention must be resolved early because older materials reference PNG files under `assets/images/`, while Enhanced v2 governance prefers JPG files under `images/`.
- All Japanese and English public copy needs human-style review for natural terminology and non-mechanical translation.

## Inheritance Reminder

All later phases must preserve the global i18n, theme, floating-control, glossary, image registry, writing-guardrail, data-disclaimer, and brand-safety architecture. Later module phases should verify compatibility with these systems rather than redefining them independently.
