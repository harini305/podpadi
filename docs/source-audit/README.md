# Source Audit — podpadi.com (Phase 1)

Research for rebuilding the frontend of https://www.podpadi.com, a 7-page Wix site for **Podpadi Design Spaces**, a private-pool villa property in Katik Lantang, Ubud, Bali. Audited 2026-10-17. **No implementation has been done.** Phase 2 waits for client approval.

## Documents

| File | Contents |
|---|---|
| [01-audit-report.md](01-audit-report.md) | Methods, what was and wasn't covered, limitations, key findings |
| [02-page-inventory.md](02-page-inventory.md) | Route table, shared components, sections on each page in order, recommendation for each route |
| [03-content-inventory.md](03-content-inventory.md) | Business facts, content priorities, duplicated and missing content |
| [03-content.json](03-content.json) | **Verbatim text**: SEO, page copy, 4 room descriptions and amenities, gallery captions, 14 transcribed reviews |
| [04-assets-manifest.csv](04-assets-manifest.csv) | 69 rows: every image/video/icon/font/embed with source URL, local path, dimensions, bytes, page/section, notes |
| [05-brand-reference.md](05-brand-reference.md) | Logo, original typography, verified colours vs estimates, visual language |
| [06-functionality-and-dependencies.md](06-functionality-and-dependencies.md) | Feature-by-feature verification status, third-party hosts, HotelRunner booking dependency |
| [07-responsive-observations.md](07-responsive-observations.md) | Desktop, tablet and mobile behaviour |
| [08-issues-gaps-questions.md](08-issues-gaps-questions.md) | **12 owner questions**, content inconsistencies, UX defects, asset risks |
| [09-phase-2-recommendations.md](09-phase-2-recommendations.md) | Proposed information architecture, asset pipeline, integrations, and **mandatory design rules (two-font rule, footer, images)** |
| [screenshots/](screenshots/) | 41 screenshots (see [INDEX.md](screenshots/INDEX.md)) |
| [assets/](assets/) | Local copies of original media (~70 MB): `brand/ backgrounds/ photos/ gallery/ rooms/ reviews/ icons/ video/ fonts/` |

## At a glance
- **Routes:** `/`, `/copy-of-see-do` (ABOUT), `/booking-engine`, `/gallery`, `/about` (SERVICES), `/see-do`, `/contact`. No blog, no legal pages.
- **Booking:** Wix Hotels by HotelRunner. Every room was "unavailable" on every date tested and no prices are shown. **Before Phase 2, confirm how bookings are actually taken (08 Q1).**
- **Brand colours (verified):** slate blue `#3B5C8A`, navy `#1E2E45`, warm grey `#5F5C56`, stone `#92908A`, light blue `#C1D4EF`, off-white `#F0EFEE`. Sage accent `#5A8C65` → `#BFD9C4`.
- **Original fonts:** DIN Next Light (main), DIN Next Ultralight, Proxima Nova, Comfortaa (logotype), Spinnaker, Avenir Heavy, Georgia. Phase 2 must use **exactly two** families.
- **Logo:** there is no logo file. The logotype is live Comfortaa text, and the favicon is a photo of the physical sign.
