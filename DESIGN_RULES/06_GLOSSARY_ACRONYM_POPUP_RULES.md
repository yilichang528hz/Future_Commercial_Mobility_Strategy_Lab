# DESIGN_RULES/06_GLOSSARY_ACRONYM_POPUP_RULES.md

## Required glossary behavior
Automotive, fleet, energy, dealership, product planning, ESG, and AI governance terms must be managed through a glossary dataset.

When a glossary term appears in public text for the first time in a section, the website should render it as a clickable term. Clicking the term opens a small modal or popover with:
- localized full name,
- English full name and acronym,
- short definition,
- relevance to commercial vehicle product planning,
- source category,
- close button `×` in the upper-right corner.

## Multilingual naming rule
For English acronyms, prepend the localized full term in each language version and then add the English full name and acronym.

Examples:
- zh: `先進駕駛輔助系統（Advanced Driver Assistance Systems, ADAS）`
- en: `Advanced Driver Assistance Systems (ADAS)`
- ja: `先進運転支援システム（Advanced Driver Assistance Systems, ADAS）`

## Minimum seed glossary terms
Include at least:
- TCO - Total Cost of Ownership
- ICE - Internal Combustion Engine
- BEV - Battery Electric Vehicle
- HEV - Hybrid Electric Vehicle
- FCEV - Fuel Cell Electric Vehicle
- EV - Electric Vehicle
- ADAS - Advanced Driver Assistance Systems
- AEB - Automatic Emergency Braking
- V2G - Vehicle-to-Grid
- V2X - Vehicle-to-Everything
- FMS - Fleet Management System
- SOH - State of Health
- ESG - Environmental, Social, and Governance
- PoC - Proof of Concept
- ODD - Operational Design Domain
- OTA - Over-the-Air
- KPI - Key Performance Indicator
- OEM - Original Equipment Manufacturer
- Dealer - authorized sales and service channel
- Distributor - local import, wholesale, or agency channel

## Source discipline
Use official or high-authority sources when possible:
- NHTSA for driver-assistance safety terminology,
- U.S. Department of Energy and AFDC for EV, FCEV, charging, and V2G terminology,
- IEA for EV deployment and charging infrastructure context,
- SAE / ISO / UNECE references where available for automation, safety, or standards language.

If the website cannot verify a term during development, mark the glossary source as `requires verification` and do not present the definition as official.
