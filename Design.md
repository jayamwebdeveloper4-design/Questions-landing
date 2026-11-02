---
name: Forest B2B Enterprise Quoting
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#404945'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#707974'
  outline-variant: '#bfc9c3'
  surface-tint: '#2e6956'
  primary: '#003528'
  on-primary: '#ffffff'
  primary-container: '#0b4d3c'
  on-primary-container: '#82bda7'
  inverse-primary: '#97d3bc'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#002771'
  on-tertiary: '#ffffff'
  tertiary-container: '#003ba1'
  on-tertiary-container: '#94aeff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b2efd8'
  primary-fixed-dim: '#97d3bc'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#10503f'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003ea8'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  title-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.05em
  metric-headline:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 34px
    letterSpacing: -0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 0.75rem
  gutter-md: 1rem
  margin: 1rem
  margin-md: 1.5rem
  space-2xs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2rem
---

## Brand & Style

This design system is engineered for modern mobile enterprise field sales representatives, operations managers, and quoting specialists who require rapid turnaround, spotless record visibility, and high financial precision on handheld devices. 

The personality balances executive authority and operational efficiency:
- **Tone:** Authoritative, razor-sharp, productive, calm under sales negotiation pressure.
- **Aesthetic Movement:** Corporate Modern paired with Functional Ergonomics. It translates dense desktop quotation structures—such as catalog item selection, tax calculations, customer multi-fields, and dynamic revisions—into tactile, thumb-friendly mobile layouts.
- **Visual Feel:** Deep forest green foundation communicating stability and institutional trust, balanced by crisp mint accents for active statuses, live metrics, and confirmation actions, sitting on clean, high-legibility slate tinted canvases.

## Colors

The palette uses high contrast ratios compliant with WCAG AAA for text and essential input borders, maintaining maximum outdoor readability for field teams.

- **Primary (`#0B4D3C`):** Deep Forest Green. Anchors primary actions, active navigational indicators, enterprise app headers, and key financial summaries.
- **Secondary (`#10B981`):** Mint Accent. Drives conversion states, "New Quotation" positive floating actions, KPI upward trends, and completed status chips.
- **Tertiary (`#2563EB`):** Precision Indigo/Blue. Reserved for interactive secondary operational links (e.g., "Auto Generate", preview document links, version switches).
- **Surface Canvas (`#F4F7F6`):** Soft Mint-Slate Tinted Background. Mitigates pure white glare on mobile displays during prolonged field usage while cleanly lifting pure white (`#FFFFFF`) card containers.
- **Borders & Dividers (`#E2E8F0`):** Precise light gray lines that segment complex data tables, form groupings, and line-item lists without visual clutter.

## Typography

The type system combines **Manrope** for geometric structural titles and large currency metrics with **Inter** for dense transactional forms, micro-labels, and table cells.

- **Monetary Figures & Counts:** Formatted using `metric-headline` or `headline-lg` in bold Manrope with tabular numeral features enabled (`font-variant-numeric: tabular-nums;`) to maintain alignment during live quotation recalculations.
- **Micro-Headers & Form Labels:** Utilize uppercase tracking via `label-sm` (`letter-spacing: 0.05em`) in muted neutral tones (`#475569`) to replicate the strict enterprise hierarchy seen in quotation headers.
- **Mobile Readability Guardrails:** Critical body text must never drop below 12px; form input values are strictly locked at 16px font size on touch devices to eliminate unwanted browser auto-zoom interactions on iOS.

## Layout & Spacing

Mobile-first ergonomics dictate a compact layout with 44px–48px vertical touch targets and minimal finger-stretch zones:

- **Touch Zones & Navigation:** Primary form triggers, sticky CTA drawers ("Generate Quotation", "Save Draft"), and bottom navigation bars pin to the mobile bottom safe-area.
- **Horizontal Margins:** Set to `margin` (`16px`) on standard smartphones (360px–420px viewport), stepping to `margin-md` (`24px`) on tablets and foldables.
- **Metric Grids:** 2-column stacked metric cards on mobile devices with `gutter` (`12px`), transitioning into a 4-column row on tablet break-points (`768px` and above).
- **Stepped Quoting Flow:** The multi-stage generation wizard (1. Customer -> 2. Items -> 3. Terms -> 4. Preview) renders as a horizontally scrollable or segmented capsule rail with snap scrolling and sticky top locking during downward entry.

## Elevation & Depth

Visual hierarchy emphasizes clean, crisp separation without muddy or heavy black drop shadows.

- **Base Layer (Level 0):** Background surface canvas (`#F4F7F6`). Completely flat.
- **Card Containers (Level 1):** Floating white containers (`#FFFFFF`) featuring a 1px boundary stroke of `#E2E8F0` and an ultra-soft atmospheric shadow: `0px 1px 3px rgba(11, 77, 60, 0.04), 0px 4px 12px rgba(15, 23, 42, 0.03)`.
- **Active Navigation / Pill Highlights (Level 2):** Active menu items, segmented tabs, and floating quick-action buttons utilize a focused forest green glow: `0px 4px 14px rgba(11, 77, 60, 0.18)`.
- **Modals, Bottom Drawers, & Overlays (Level 3):** Product picker sheets and client selector sheets slide up from bottom with `0px -8px 24px rgba(15, 23, 42, 0.12)` topped with a soft semi-transparent backdrop blur (`backdrop-filter: blur(4px)` over `#0F172A40`).

## Shapes

The interface embraces a balanced modern radius language (`8px` to `12px` default, level 2) delivering a polished, tactile feel suited for modern enterprise tools.

- **Cards & Enclosures:** Use `rounded-lg` (`12px` / `0.75rem`) to frame quotations, metric modules, and wizard steps neatly.
- **Inputs & Dropdowns:** Styled at `8px` (`0.5rem`) corner radius, maintaining structural alignment across dense multiline forms.
- **Pills & Status Badges:** Status pills (e.g., `V1`, `Mark Converted`, `Draft`, `Revised`) utilize full pill geometry (`9999px`) to create an immediate visual contrast against rectangular form controls and card headers.
- **Active Nav Segments:** Active items feature rounded rect containment (`8px`–`10px`) with integrated icons.

## Components

### Buttons
- **Primary Action:** Solid forest green background (`#0B4D3C`), crisp white text, 48px height for touch confidence, 8px radius, `label-lg` typography. Hover/active state deepens to `#08382C`.
- **Secondary Action:** Mint-tinted outline or ghost style with `#0B4D3C` borders and text, or filled with `#ECFDF5` light emerald background.
- **Floating Action Button (FAB):** 56px circular or extended capsule button in deep forest green or mint with a crisp `+` icon for instantaneous "New Quotation" trigger on mobile records lists.

### Mobile Form Inputs & Fields
- **Container Structure:** 48px standard touch height, 1px `#CBD5E1` border on `#FFFFFF` base, changing to 2px `#0B4D3C` focus ring with a subtle 3px soft mint outer tint (`#10B9811A`).
- **Input Icons & Helpers:** Leading metadata icons (such as currency `₹`, user, or calendar icons) rendered in `#64748B`. Integrated trailing helper triggers ("Auto Generate" action link) rendered in `#2563EB` bold label-sm.
- **Grouped Multi-Inputs:** Customer/Company block groups separated into logical modular cards with section headers in `label-sm` uppercase.

### Metric & KPI Cards
- White surface, `12px` border radius, subtle border.
- Layout features a top row with uppercase category title (`label-sm` in slate gray) paired with a circular mint-washed icon badge (`32x32px`, `#ECFDF5` background, `#0B4D3C` icon).
- Prominent tabular bold metric (`24px`–`28px`) aligned bottom-left with contextual delta badges (`+12%`, `0 v2+`).

### Quotation List Cards (Mobile Record View)
- Instead of wide unmanageable desktop tables, mobile records render as stacked interactive cards:
  - **Header:** Quotation ID (`QT-2026-00001`) in bold Manrope alongside pill version tag (`V1` in mint tone) and contextual status chips.
  - **Body:** Customer name prominently displayed in `title-md`, secondary contact metadata (phone and email) with direct tap-to-call or tap-to-email shortcuts.
  - **Footer:** Bottom action strip providing quick-touch icon triggers: Preview (Eye), Duplicate (Copy), Share/Email (Mail), and Download (PDF).

### Status Badges & Chips
- **Converted:** Background `#DCFCE7`, text `#15803D`, border `#BBF7D0`.
- **Pending/Draft:** Background `#FEF3C7`, text `#B45369`, border `#FDE68A`.
- **Revised:** Background `#EFF6FF`, text `#1D4ED8`, border `#DBEAFE`.
- Padding: 4px horizontal, 2px vertical, with 11px uppercase bold typography.

### Multi-Step Wizard Stepper
- Horizontal scroll-locked segmented rail for quotation lifecycle steps (`1. Customer` -> `2. Items` -> `3. Terms` -> `4. Preview`).
- Active step is highlighted in solid forest green (`#0B4D3C`) with white text and active step indicator; incomplete steps remain subtle with gray text on soft mint/slate surface.