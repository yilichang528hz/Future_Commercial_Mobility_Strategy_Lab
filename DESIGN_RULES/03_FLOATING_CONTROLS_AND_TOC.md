# DESIGN_RULES/03_FLOATING_CONTROLS_AND_TOC.md

## Floating control cluster
Place a floating control cluster in the lower-right corner of the website.

Required buttons from top to bottom:
1. `Language / 語言 / 言語`
2. `Theme / 版型 / テーマ`
3. `TOC / 目錄 / 目次`

The TOC button should display `目錄` in Chinese, `TOC` or `Contents` in English, and `目次` in Japanese. When the user clicks it, a panel expands and lists all major page sections. Clicking a TOC item scrolls to that section.

## Floating panel behavior
- Buttons must be keyboard accessible.
- Use `aria-expanded`, `aria-controls`, and visible focus styles.
- Panels should close when the user presses Escape or clicks outside the cluster.
- On mobile, panels must not cover primary CTA buttons, sliders, or download links.
- TOC content must update when the language changes.
- Theme and language changes must not reset simulator values.

## Section anchors
Every major section must have a stable ID, for example:
- `home`
- `creative-motivation`
- `trend-radar`
- `technology-maturity-map`
- `scenario-simulator`
- `energy-roadmap`
- `safety-adas-lab`
- `connected-fleet-lab`
- `esg-policy-dashboard`
- `strategy-roadmap-studio`
- `guided-demo`
- `glossary`
- `downloads`

## Public cleanup
Do not show file paths, phase labels, prompt names, or registry metadata inside the floating TOC.
