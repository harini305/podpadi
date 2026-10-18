# Phase 2 — Internal Plan (Podpadi UI redesign demo)

Standalone training/demo build. No external navigation, no real booking, no data transmission.

## Routes (compact)
| Route | Content |
|---|---|
| `/` | Full-bleed hero (main pool over the padi) + wordmark band + tagline; property intro (home meta copy); villa band (4 unequal panels → room pages); stay planner (dates + guests → demo booking); host quote + review; location/visit card |
| `/stay` | Whole-property paragraph stated once; four villas as alternating editorial rows; shared services summary; CTA to demo booking |
| `/stay/[slug]` ×4 | Original listing title, room-specific description (where one exists), photo set, listing facts (flagged unconfirmed), grouped amenities, "Plan this villa" → `/book?villa=` |
| `/our-story` | Made's "Hello!", Our Story, 14 transcribed reviews (paged, 1 visible group at a time) |
| `/experiences` | Services (5 tiles + Services meta sentence) and See & Do (5 tiles + See & Do meta sentence) as two editorial lists with real photos |
| `/gallery` | 9 captioned photos in a composed grid + internal lightbox; 2 local 480p videos (lazy, muted loop) |
| `/contact` | Contact intro, details as reference text (not links), location facts, local-only demo form |
| `/book` | 4-step demo: dates & guests → villa → review → demo confirmation (sessionStorage, no personal data) |

Legacy Wix slugs are not reproduced.

## Short villa labels (derived from the original listing titles — owner to confirm)
1. The Private Retreat — `private-retreat` (whole property, 4×1BR + 3BR)
2. Charming Boutique Villa — `charming-boutique-villa`
3. Boutique Villa Escape — `boutique-villa-escape`
4. Family Getaway — `family-getaway`

## Images
- Hero: `home-hero-pool-ricefield`. Villa covers: room-1-01, room-2-01, room-3-01, room-4-01.
- Story: `about-host-made`; Experiences: gallery-03/08 (breakfast), room-1-01 (pool & lounge), gallery-04/09 (yoga), contact-banner (rice-field walks).
- Duplicates processed once: room-1-03/04/05 = gallery-09/02/01; room-2-04 = room-3-04.
- Pipeline: PIL → WebP q≈78 at 640/1280/1920 (capped at source width) in `public/img/`, manifest in `src/data/images.js`. Originals untouched.

## Type & colour
- Display: **Comfortaa** (the original Podpadi logotype face): wordmark, headings, display text. Text & UI: **Manrope**. Self-hosted via `next/font` at build time.
- Ground off-white `#F0EFEE` / surface `#E6E4E1`; ink navy `#1E2E45`; accent slate blue `#3B5C8A` (actions); secondary warm grey `#5F5C56`; fields: light blue `#C1D4EF` and pale sage `#BFD9C4` (one use each); navy field for footer/menu.
- Square corners, no shadows at rest, no gradients (scrims under text on photos only).

## Motion
GSAP + ScrollTrigger via one `Reveal` hook (gsap.context, revert on unmount); hero image slow scale; wordmark scroll scale (<8%); staggered section entrances; reduced-motion → none. Content visible without JS.

## Responsive
Fluid 12-col grid with `--gutter` 16–40px; breakpoints ~640 / 960; header collapses to Menu below 960.
