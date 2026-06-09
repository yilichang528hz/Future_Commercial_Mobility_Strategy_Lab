# DESIGN_RULES/02_FOUR_THEME_VISUAL_SYSTEM.md

## Required visual themes
The website must provide four switchable visual themes:

### Theme A - Warm Academy
- Chinese label: `A 版｜溫馨`
- English label: `Theme A | Warm Academy`
- Japanese label: `A版｜ぬくもり`
- Palette: cream white, muted bean green, warm apricot, pale gold.
- Intended mood: friendly, warm, trustworthy, suitable for human-centered mobility education.

### Theme B - Morning Mobility
- Chinese label: `B 版｜晨光浴身`
- English label: `Theme B | Morning Mobility`
- Japanese label: `B版｜朝霧のモビリティ`
- Palette: morning mist blue, light gray white, mint green, soft mist orange.
- Intended mood: bright morning air, calm future mobility, clear strategic thinking.

### Theme C - Human Service Mobility
- Chinese label: `C 版｜人本移動服務`
- English label: `Theme C | Human Service Mobility`
- Japanese label: `C版｜人に寄り添う移動サービス`
- Palette: beige, tea green, wood brown, amber.
- Intended mood: grounded, tactile, service-oriented, local commercial fleet context.

### Theme D - Quiet Governance
- Chinese label: `D 版｜靜謐`
- English label: `Theme D | Quiet Governance`
- Japanese label: `D版｜静謐なガバナンス`
- Palette: light ivory, low-saturation coral, gray green, soft gold.
- Intended mood: quiet, reflective, executive, suitable for risk governance and policy dashboards.

## Implementation rule
Theme state must be controlled by either:
- `body[data-theme="theme-a"]`, `body[data-theme="theme-b"]`, etc.; or
- stable CSS classes such as `.theme-a`, `.theme-b` on `<body>`.

Theme switching may change:
- color tokens,
- card rhythm,
- border radius,
- dashboard emphasis,
- Home Hero mood,
- chart accent colors,
- background gradients.

Theme switching must not remove, hide, or break:
- content,
- images,
- interactivity,
- downloads,
- language switching,
- glossary popups,
- floating TOC,
- form state,
- chart state,
- localStorage state.

## CSS token structure
Use CSS variables:
```css
:root {
  --bg: #fbf7ef;
  --surface: #ffffff;
  --text: #24302a;
  --muted: #69746d;
  --accent: #8bad79;
  --accent-2: #f0c58f;
  --warning: #ad6b52;
  --line: rgba(38, 48, 42, .14);
}
body[data-theme="theme-a"] { ... }
body[data-theme="theme-b"] { ... }
body[data-theme="theme-c"] { ... }
body[data-theme="theme-d"] { ... }
```

## Persistence
Store the selected theme in `localStorage`, but the website must remain usable if localStorage is unavailable.
