# Premium Bakery Hero Landing (Next.js App Router)

## Summary
- Rebuild the home hero into a high-fidelity, editorial bakery landing experience with premium pink gradients, oversized serif typography, frosted glass controls, and subtle motion.
- Keep existing `/` auth redirect behavior intact; render the new landing for visitors who are not redirected (including `stay=1` behavior).
- Implement a fully data-driven 3-mode hero (`macaron`, `donut`, `croissant`) with smooth visual/content transitions.

## Key Changes
- Foundation
  - Add `framer-motion` dependency.
  - Use `next/font/google` for a luxury serif headline font + refined sans companion.
  - Add bakery-specific visual tokens/utilities in global styles (soft gradients, warm shadows, glow, glass surfaces) without changing existing app behavior outside this page.
- Architecture
  - Use App Router-compatible structure (instead of `src/pages/*.jsx`): page wiring in `app/` plus modular bakery components in `components/bakery/`, and mode content in `data/`.
  - Create `BakeryLandingPage` as the orchestrator and split UI into:
    - `BakeryNavbar`
    - `HeroHeadline`
    - `HeroCenterpiece`
    - `FloatingDecorations`
    - `LeftInfoPanel`
    - `RightFeatureList`
    - `CategorySelector`
- Data/Interface design
  - Define typed hero data (single source of truth), including:
    - mode identity (`id`, `slug`)
    - hero content (`headline`, `description`, `heroImage`, `ctaLabel`)
    - decorative assets (position + motion preset)
    - right-side feature stack (thumb/title/descriptor/link text)
    - selector thumbnail metadata
  - All mode-specific visuals and copy come from this data object; no hardcoded per-mode JSX branches.
- Interaction and responsiveness
  - Framer Motion transitions:
    - headline fade/slide on mode switch
    - hero pastry scale/fade swap
    - subtle idle floating on decorative elements
    - animated active indicator in selector
    - staggered right-feature reveal
  - Navbar/link behavior:
    - `Products -> /gallery`
    - `Techniques` and `About Us` -> in-page anchors
    - `Find Us -> #stores`
    - CTA -> `/order`
  - Responsive behavior:
    - desktop: full editorial composition
    - tablet: compressed side panels, preserved center focus
    - mobile: stacked side panels below hero, fewer decorative elements, tap-first selector spacing
- Asset swap points
  - Add clear local placeholder assets under a dedicated bakery path in `public/` (hero images, selector thumbs, feature thumbs, decorative petals/berries/flowers) and reference them only from hero data for easy replacement.

## Public Interfaces / Types
- New typed data contracts for bakery modes and feature/decorative items (exported from `data/bakeryHeroData.ts`).
- New component props contracts for composable bakery sections (active mode payload + handlers), enabling reuse and future expansion.

## Test Plan
- Functional
  - Verify mode switching updates headline, center pastry, decorative assets, right-side feature list, and CTA text.
  - Verify selector is keyboard accessible (`Tab`, `Enter`, `Space`) and exposes visible active state.
- Visual/motion
  - Confirm premium, subtle transition quality (no aggressive springs/jank).
  - Validate readability and contrast of text over gradients and glass surfaces.
- Responsive
  - Validate layout integrity and composition at mobile, tablet, and desktop breakpoints.
- Quality gates
  - Run `npm run type-check`.
  - Run `npm run lint`.
  - Per your choice, also fix pre-existing lint issues currently outside this feature so lint passes repo-wide.

## Assumptions
- Implementation uses the existing Next.js App Router project structure, not raw `src/pages/*.jsx`.
- Existing home-page auth redirect logic remains in place.
- Framer Motion + `next/font/google` are approved for this page.
- Placeholder local assets are acceptable as clear swap points for your final photography/renders.
