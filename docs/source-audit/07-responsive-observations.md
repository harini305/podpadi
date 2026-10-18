# 07 — Responsive Observations

## Tested viewports

| Label | Viewport | User-agent | Layout actually served | Screenshot suffix |
|---|---|---|---|---|
| Desktop | 1440 × 900 | Desktop Chrome | Wix desktop layout (fixed 980 px content grid, some full-bleed strips) | `_desktop.jpg` |
| Tablet | 768 × 1024 (touch) | Desktop Chrome | **Same desktop layout** — `scrollWidth 980 > 768` → horizontal scroll | `_tablet.jpg` |
| Mobile | 390 × 844 (touch, isMobile) | iPhone Safari | Wix **separate mobile layout**, forced 320 px layout viewport | `_mobile.jpg` (320 px wide) |

Other widths not tested (Wix has no fluid breakpoints between desktop and mobile layouts).

## Global behaviour

| Aspect | Desktop | Tablet (768) | Mobile |
|---|---|---|---|
| Header | Centred nav row + social icons, 66 px, not sticky | Nav row shifted; overflows | Social icons + blue hamburger, 73 px, not sticky |
| Mobile menu | — | — | Full-screen `#3A709F` overlay, centred links with white rules |
| Content width | 980 px canvas; hero 1240 px; some strips full-bleed | 980 px → **horizontal scroll** | 320 px, ~20 px side margins |
| Horizontal overflow | None | **Yes, on all 7 pages** | None |
| Fixed elements | Wix Chat button bottom-right; fixed page background | same | Chat button overlaps content (e.g., covers About paragraph, Booking card image) |
| Footer | 86 px band; copyright invisible except /see-do | same | Text 8 px; invisible on most pages |
| Typography scaling | — | none | Hand-set per element; headings shrink a lot (e.g. "THINGS TO DO" 28→14 px; gallery sub-heading 18→11 px) — inconsistent scale |

## Page-specific

| Page | Desktop | Mobile differences |
|---|---|---|
| Home | Inset hero 1240×880, widget horizontal | Hero ~420 px tall, widget stacked vertically (date fields wrap awkwardly "Oct 17, / 2026"); **large empty white area below hero** |
| About | Two-column card (portrait + text); right-aligned "Our Story" | Portrait on top, text full width; "Our Story" stays right-aligned (hard to read); review screenshots shrink to ~280 px — **text unreadable** |
| Book a Room | Card list + right reservation sidebar | Cards full-width stacked; long titles truncated with "…"; reservation sidebar not seen in capture |
| Gallery | 948×678 slideshow, two 640 px videos side by side | Slideshow 280 px wide; videos stacked full-width |
| Services | 3+2 tile grid over photo | 5 tiles stacked; **order changes** (Airport Transfer before Wifi) |
| See & Do | 3+2 tile grid | 5 tiles stacked |
| Contact | Banner 335 px, map 738×397, 2-column form | Banner ~170 px, map full-width, form single column, intro text re-wrapped mid-sentence (hard line breaks from desktop) |

## Implications for Phase 2
- No original tablet layout exists — design tablet fresh.
- Hard-coded `<br>` line breaks in the Contact intro and Services labels must not be reproduced.
- Avoid fixed widgets covering content on small screens.
- Use one fluid type scale (clamp) instead of per-element sizes.
