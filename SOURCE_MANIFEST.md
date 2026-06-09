# SOURCE_MANIFEST.md

## Project 5 Source Manifest

Primary source:
- `00_SOURCE_FILES/Portfolio_05_Future_Mobility_Strategy_Lab.docx`

Reference source:
- `00_SOURCE_FILES/commercial_vehicle_portfolio_phase_workbench_starter_v7_2_2_english_only_image_typography.zip`

## Source Priority

1. Project proposal and user-provided planning intent.
2. This Codex package's MASTER_SPEC and phase prompts.
3. Publicly verifiable industry sources, when the user later asks for research updates.
4. Demo datasets created inside this repository.

## Public Use Rules

- Treat all generated data as demo data unless explicitly verified.
- Do not claim official Toyota, HINO, Hotai, dealer, government, or customer approval.
- Do not include confidential or non-public company data.
- Do not use real brand logos or official visual marks.
- For future mobility claims, distinguish facts, scenario assumptions, and strategy hypotheses.

## Required Source Registry Fields

Each data source used by the website should include:
- source_id
- source_name
- source_type
- confidence_tier
- last_updated
- supported_claims
- limitations
- allowed_outputs
- restricted_outputs

## Recommended Method

If a future version uses live research, store source metadata in `data/source_registry.json` and show source limitations in the UI. This portfolio version can use demo source entries to demonstrate the governance logic.
