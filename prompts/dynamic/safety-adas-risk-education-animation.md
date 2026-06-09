# Dynamic Visual Prompt - Safety & ADAS Risk Education Animation

Use case: productivity-visual and data-visualization implementation brief
Target implementation: pure static-site front-end using inline SVG, Canvas, or lightweight HTML/CSS/vanilla JavaScript. No package manager, no backend, no CDN, no API calls, no telemetry, no map tiles, and no live data.
Target module: safety-adas-lab
Planned visual asset name: safety-adas-risk-education-animation.svg

## Business Mechanism

Design a dynamic visual that explains driver-assistance functions translated into technical function, customer value, driver education, suitable segments, scenario limitations, and overclaim guardrails. The motion must communicate a planning mechanism, not decorative futurism. Every animated transition should help viewers understand how commercial vehicle product planners move from assumptions to scenario fit, education needs, PoC candidates, tracking items, risk notes, or human-review checkpoints. The visual must never imply official product launch timing, verified procurement advice, legal advice, engineering certification, verified carbon reduction, or autonomous capability.

## Visual Concept

Create a generic vehicle diagram with sensor zones, blind-area sketches, a risk heat map, education cards, and limitation notes; no crash scenes and no automation promise. Use the website's four-theme token system through CSS variables rather than hard-coded theme-specific palettes. The default appearance should feel bright, warm, professional, calm, and portfolio-ready, with cream white, muted green, pale blue gray, soft gold, and restrained coral. Avoid cheap neon, dense HUDs, dystopian control rooms, purple-blue gradient dominance, cluttered labels, unreadable microtext, or decorative motion unrelated to the planning logic.

## Interaction Model

Support select safety function cards, update the diagram and FAQ panel, support keyboard focus, tap selection, and reduced motion. All controls must work with keyboard and touch. Do not rely on hover-only behavior. Tap targets should be comfortable on mobile. Selection state must persist through language switching and theme switching where the surrounding module already stores state. If the user changes language, the visual should redraw labels and summaries from the existing i18n layer or from module data; it must not reset sliders, filters, selected module, or roadmap step. If the user changes theme, the visual should update colors while preserving the same data and selection.

## Labeling And I18n

Use short English labels such as Assist, Limit, Driver Check, Segment Fit, Training, and Do Not Overclaim. Keep any in-visual text short and readable. Long explanations, warnings, glossary terms, disclaimers, source limitations, and chart summaries must stay in the HTML i18n layer. If bilingual labels are used, limit them to compact English and Traditional Chinese pairs only when there is enough space; Japanese labels should usually remain in surrounding HTML to preserve legibility. The visual must provide an accessible text summary that updates with state and is available through `aria-live`, `aria-label`, or a nearby descriptive paragraph.

## Accessibility And Reduced Motion

Implement `prefers-reduced-motion` support. When reduced motion is active, render the final chart state without looping animation and use simple color or focus changes for selection. Provide keyboard focus outlines, clear selected states, sufficient contrast, and non-color cues for risk or status. SVGs should include a `role="img"`, title, description, and meaningful text fallback where practical. Canvas visuals must have an adjacent textual summary because Canvas pixels are not accessible by default.

## Data Discipline

Use only local JSON demo data or existing module state. All values must remain illustrative unless a source registry explicitly supports them. Add or keep visible labels such as Demo Dataset, Prototype Simulation, Human Review Required, Requires Verification, or similar module-specific warnings through the i18n system. Do not fetch current policy, traffic, telemetry, route, charging, map, customer, driver, or vehicle data. Do not store personal data. Do not include real license plates, real customer names, official vehicle data, or branded UI.

## Brand And Visual Safety

Use generic commercial vehicle silhouettes, abstract icons, and simple route or data shapes. Do not draw Toyota, HINO, Hotai, competitor logos, dealer marks, real vehicle grilles, official dashboards, real maps, real route names, customer names, government documents, QR codes, or watermarks. If vehicles appear, they must be simplified and unbranded. If people are implied through icons, keep them respectful and non-surveillance-oriented.

## Implementation Notes

Use semantic class names and CSS variables so the visual integrates with `body[data-theme]`. Avoid layout shifts by defining stable dimensions, viewBox values, aspect ratios, and responsive constraints. For mobile, collapse complex visuals into stacked cards or simplified diagrams without hiding the text summary. Use existing module render hooks where possible. The output should be lightweight enough for direct `file://` preview and GitHub Pages.
