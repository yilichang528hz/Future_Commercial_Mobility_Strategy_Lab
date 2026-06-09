# DESIGN_RULES/04_IMAGE_AND_ANIMATION_PROMPT_GOVERNANCE.md

## Purpose
These rules govern all static illustrations, dynamic visuals, SVG animations, GIF-style sequences, Canvas animations, HTML5 interactive modules, and game-like 2D/3D demos inside Project 5.

## Dynamic and interactive visual modules
For any visual module that is dynamic, animated, interactive, or game-like, Codex must create a detailed English prompt or implementation brief under:

`prompts/dynamic/`

Examples:
- `prompts/dynamic/trend-radar-animation.md`
- `prompts/dynamic/energy-roadmap-crossover-animation.md`
- `prompts/dynamic/scenario-simulator-interactive-map.md`
- `prompts/dynamic/connected-fleet-data-flow-animation.md`
- `prompts/dynamic/strategy-roadmap-timeline-animation.md`

Dynamic prompt rules:
- Use English as the primary writing language.
- Include bilingual in-visual labels in English and Chinese where legibility allows.
- Japanese UI labels should remain in the surrounding HTML i18n layer unless the design has enough space for trilingual micro-labels.
- Use SVG, Canvas, or pure HTML/CSS/JS. No backend. No WebGL dependency unless optional fallback is provided.
- Avoid cluttered HUDs, cheap neon, aggressive sci-fi, unreadable microtext, or over-polished cyberpunk.
- All motion should communicate a business mechanism: trend priority, scenario fit, energy crossover, charging constraint, fleet data flow, safety risk, ESG policy signal, or roadmap sequencing.
- If web access is available, Codex should consult current authoritative industry and academic sources. If web access is not available, Codex must mark the animation research basis as `requires_external_research`.

## Static illustration rules
Every module must be evaluated by a professional web designer and visual designer. If a dedicated static illustration would improve comprehension, Codex must:
1. write an approximately 2000-word English image prompt,
2. save it under `prompts/static/`,
3. generate or request the image through the available image-generation workflow,
4. convert PNG output to JPG if needed,
5. save final JPG under `images/`,
6. use lowercase semantic filenames such as `home-os.jpg`, `trend-radar.jpg`, `energy-roadmap.jpg`, `agent-workflow.jpg`,
7. write the relative path into HTML or JS,
8. add multilingual alt text,
9. register the image in `imageAssetRegistry.json`.

## JPG-first rule
The project should prefer final JPG files in `images/` to reduce path confusion. PNG may exist only as temporary source output or transparent icon output. Public HTML should reference JPG unless there is a clear reason not to.

## Image style
Static illustrations must follow:
- high resolution,
- realistic commercial vehicles and people combined with contemporary art,
- international business-design-award visual quality,
- bright, warm, trustworthy, professional tone,
- suitable for commercial vehicle product planning,
- interdisciplinary market research and analysis,
- AI Agent workflow,
- governance,
- education,
- consulting presentation.

## Brand restrictions
Images must not include:
- Toyota logo,
- HINO logo,
- Hotai Motor logo,
- real dealer marks,
- competitor logos,
- official UI screenshots,
- real license plates,
- real customer or government documents.

Use generic Japanese-style or global commercial vehicle forms only, without official marks.

## Image text rules
Static images may include a small amount of minimal text that supports the visual theme. Preferred pattern:
- English headline,
- Chinese supporting subtitle,
- Japanese micro-label only when space permits.

Do not put long paragraphs inside images. Full trilingual explanations belong in HTML, not inside the image.

## Required registry fields
Each image must be listed in `imageAssetRegistry.json` with:
- `fileName`
- `path`
- `altZh`
- `altEn`
- `altJa`
- `promptPath`
- `phaseName`
- `moduleId`
- `conversionStatus`
- `usedInFiles`
