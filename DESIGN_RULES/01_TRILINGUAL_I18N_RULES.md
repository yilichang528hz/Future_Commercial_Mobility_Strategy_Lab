# DESIGN_RULES/01_TRILINGUAL_I18N_RULES.md

## Mandatory languages
The public website must support:
- Traditional Chinese: `zh`
- Natural American English: `en`
- Natural Japanese: `ja`

The language switch must affect every public UI string, including:
- navigation,
- section headings,
- buttons,
- cards,
- `See more`, `Show less`, and similar controls,
- risk and data disclaimers,
- download cards,
- footer,
- Glossary,
- Floating TOC,
- Floating controls,
- chart labels,
- form labels,
- scenario outputs,
- roadmap labels,
- image alt text.

## Translation quality
English and Japanese must be natural, not mechanically translated from Chinese word order.
Use terminology appropriate to:
- automotive product planning,
- commercial vehicle strategy,
- fleet operations,
- energy transition,
- ESG and policy analysis,
- AI workflow governance,
- dealer education.

If a term is not suitable for translation, keep the English term and add a short explanation. Example:
- 中文: 車輛到電網（Vehicle-to-Grid, V2G）：電動車可在特定條件下將電力回送電網。
- English: Vehicle-to-Grid (V2G): bidirectional charging that can send electricity from a vehicle back to the grid.
- 日本語: Vehicle-to-Grid（V2G）：一定条件下で車両から電力網へ電力を戻す双方向充電の仕組み。

## Implementation rule
Create a central i18n object, for example:
- `data/i18n.json`, or
- `assets/js/i18n.js` exporting `window.PROJECT_I18N`.

Do not hard-code public UI text directly in HTML unless it is non-public scaffolding in comments. Use `data-i18n` keys and an `applyI18n(lang)` function.

## Home-only legal notice i18n keys
The Home page top-left or fixed top area must display language-specific legal notice text. The keys may live in the global i18n object, but the visible block belongs to the Home page only:
- zh: `著作權所有 © 2026 張義豊(Yi-Li, Chang) 保留所有權利。`
- en: `Copyright © 2026 張義豊(Yi-Li, Chang) All Rights Reserved.`
- ja: `著作権所有 © 2026 張義豊(Yi-Li, Chang) 無断転載を禁じます。`

## Home creative motivation section
Add a Home section called:
- zh: `創作動機`
- en: `Creative Motivation`
- ja: `制作動機`

The Chinese version must be within 180 Chinese characters. English and Japanese should be similarly concise. It should explain why this future mobility strategy lab exists: to connect commercial vehicle product planning, energy transition, human-centered fleet operations, safety, ESG, and AI-assisted strategic thinking.
