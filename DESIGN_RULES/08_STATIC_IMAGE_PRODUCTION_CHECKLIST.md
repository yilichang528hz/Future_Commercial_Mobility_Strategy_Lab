# DESIGN_RULES/08_STATIC_IMAGE_PRODUCTION_CHECKLIST.md

Before a static image is used in the public website, Codex or the human operator must confirm:

- [ ] A dedicated module need has been identified.
- [ ] A detailed English prompt exists under `prompts/static/`.
- [ ] The generated output has been converted to JPG if originally PNG.
- [ ] The final image is stored under `images/`.
- [ ] The public HTML or JS uses a relative path such as `./images/energy-roadmap.jpg`.
- [ ] The image has `altZh`, `altEn`, and `altJa`.
- [ ] The asset is registered in `imageAssetRegistry.json`.
- [ ] The image contains no brand logos, real dealer marks, real license plates, or official UI.
- [ ] The image is bright, warm, professional, and aligned with the selected theme system.
- [ ] The public page does not expose `promptPath`, `phaseName`, `conversionStatus`, or internal registry fields.
