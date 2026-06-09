# GitHub Pages Deployment

This repository is already structured as a deployable static GitHub Pages site. The repository root is the publish folder and `index.html` is the entry point.

## Publish Steps

1. Push the repository to GitHub.
2. Open repository settings.
3. Enable GitHub Pages.
4. Select the target branch and root folder.
5. Save the setting and wait for GitHub Pages to publish.
6. Open the published URL and run the checks below.

No build command, package installation, backend service, API key, CDN, tracker, or telemetry setup is required.

## Required Files

- `index.html`
- `favicon.svg`
- `assets/css/styles.css`
- `assets/js/*.js`
- `data/*.json`
- `docs/*.md`
- `prompts/static/*.md`
- `prompts/dynamic/*.md`
- `images/*` when final JPG assets are generated
- `00_SOURCE_FILES/Portfolio_05_Future_Mobility_Strategy_Lab.docx` when the proposal download should be available

## Pre-Publish Checks

- Public page defaults to Traditional Chinese on first load.
- Language switching works for Chinese, English, and Japanese.
- Theme switching works for Theme A, B, C, and D.
- Floating controls show Language, Theme, and Contents in the lower-right cluster.
- Glossary modal opens and closes correctly.
- Home legal notice and Creative Motivation appear only on Home.
- Demo data and human-review notices remain visible where needed.
- Proposal and document downloads resolve through relative links.
- No public UI displays prompt paths, registry fields, local paths, workflow notes, or pending-generation metadata.
- No official logos, brand marks, real license plates, customer identifiers, trackers, telemetry, API keys, or backend assumptions appear.
