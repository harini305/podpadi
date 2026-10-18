# 01 — Audit Report: podpadi.com

**Audit date:** 2026-10-17 · **Phase:** 1 (research only — no implementation)
**Source:** https://www.podpadi.com (user-supplied entry URL: `/contact`)
**Workspace at start:** `D:\podpadi12` was empty — no existing project files, assets or prior audit evidence.

Legend used throughout these docs: **Verified** = observed in HTML/DOM or tested · **Observed** = seen in screenshots, not tested further · **Estimate** = inferred/approximate · **Unknown** = could not be determined.

---

## 1. Website overview

| Item | Finding | Status |
|---|---|---|
| Business | Podpadi Design Spaces / "Podpadi Ubud" — a small private-pool villa property (4 × one-bedroom villas + 1 × three-bedroom family villa, up to 14 guests) in Katik Lantang village, Singakerta, Ubud, Bali | Verified (room descriptions + contact page) |
| Host | Made — "your host and the manager of Podpadi" | Verified |
| Platform | Wix (Thunderbolt renderer, `generator: Wix.com Website Builder`), Wix site name `podpadiubud` | Verified |
| Booking | Wix Hotels by **HotelRunner** widget embedded on `/` and `/booking-engine` | Verified (network hosts `be.hotelrunner.com`, `app.hotelrunner.com`, `my-site-3-590.hotelrunner.com`; images from `cdn-cms*.hotelrunner.com`) |
| Other channels | Airbnb listing + profile, Facebook, Instagram, WhatsApp, email, Wix Chat | Verified |
| Size | 7 live pages, no blog, no detail sub-routes (room details are modals) | Verified |
| Last content update | Sitemap `lastmod` 2025-03-27 for all pages; asset filenames dated 2025-01-13 and 2025-03-26 | Verified |
| Language | English only (`lang="en"`), no translation tool | Verified |
| Primary goal of site | Drive direct room bookings and enquiries (booking widget on homepage hero; "BOOK A ROOM" in nav) | Observed |

## 2. Methods used

1. Fetched server-rendered HTML for every sitemap route (`curl`) and parsed it with BeautifulSoup (text, links, images, meta, forms).
2. Rendered each route in headless Google Chrome (Playwright-core, installed only in the session scratchpad — **nothing was installed into the project**) at 1440×900 (desktop), 768×1024 (tablet) and 390×844 with an iPhone user-agent (mobile). Full-page screenshots saved.
3. Interaction scripts: nav hover, mobile menu open, booking widget date picker, guest selector, Search, room "More details" modals (all 4), room "Contact" modal, future-date availability search, gallery slideshow autoplay (all 9 slides), reviews slideshow, empty contact-form submit (no data sent), Wix Chat open.
4. Computed-style extraction (font family/size/weight/colour/letter-spacing/line-height/text-shadow) at leaf text nodes; Wix theme colour variables from page CSS; pixel sampling from screenshots for overlay colours.
5. Probed original media URLs (HEAD) and downloaded local copies to `assets/` (originals ≤ 6 MB; larger originals capped at 2560 px via Wix's own transform).
6. Probed common guess routes for hidden pages (`/blog`, `/rooms`, `/accommodation`, `/book-online`) and checked external links.

## 3. Coverage record

### 3.1 Pages successfully inspected (desktop, tablet, mobile + interactions)
| Route | Page title | Nav label |
|---|---|---|
| `/` | HOME \| podpadiubud | HOME |
| `/copy-of-see-do` | ABOUT \| podpadiubud | ABOUT |
| `/booking-engine` | BOOK A ROOM \| podpadiubud | BOOK A ROOM |
| `/gallery` | GALLERY \| podpadiubud | GALLERY |
| `/about` | SERVICES \| podpadiubud | SERVICES |
| `/see-do` | SEE & DO \| podpadiubud | SEE & DO |
| `/contact` | CONTACT \| podpadiubud | CONTACT |

### 3.2 Partially inspected
- **Booking flow past room selection** — every room shows "Room unavailable" for both tested date ranges (2026-10-17→18 and 2026-12-16→18, 2 adults), so rate display, room selection, "Continue", guest details and payment steps could not be reached.
- **Booking widget hidden tabs** — links "Reservation", "Packages & Deals", "Availability Calendar" exist in the DOM as `javascript:void(0)` but are not visible; content not inspected.
- **Gallery slideshow order** — all 9 slides and captions were captured, but the exact sequence of slides 3–9 was not recorded.
- **Wix Chat** — widget opens (screenshot), but no message was sent; whether it is staffed is unknown.

### 3.3 Discovered but inaccessible
- Room "More details" open as modals on hash routes (`/booking-engine#/search?modalOpen=1`); there are **no** crawlable room detail URLs.
- Airbnb listing/profile, Facebook and Instagram pages return HTTP 200 but were not audited (third-party, out of scope).

### 3.4 Broken / unavailable routes
- `/blog`, `/rooms`, `/accommodation`, `/book-online` → Wix 404 ("404 Error: Page Not Found"). These were guesses; nothing on the site links to them.
- No broken internal links found. All 7 nav links resolve (HTTP 200).

### 3.5 Interactive states that could not be verified
- Desktop nav hover — no visible change in screenshot (may be a subtle colour change or none). Active page = grey `#5F5C56` vs others blue `#3B5C8A` (**Verified**).
- Contact form submission outcome (success message, destination inbox) — not submitted, to avoid sending a real enquiry. Empty submit produced no visible inline error messages; Submit turned dark navy on hover/focus.
- Booking payment/checkout and confirmation emails.
- Wix Members Area / login — app is installed (per page data) but no login UI is visible.
- Google Reviews app is installed but no Google Reviews widget renders on any page.

### 3.6 Technical / access limitations
- Wix serves a separate **mobile layout** based on user-agent and forces a 320 px layout viewport; true "390 px" CSS layout does not exist — screenshots are 320 px wide.
- The tablet test (768 px, desktop UA) receives the fixed-width desktop layout (980 px), so there is no tablet layout to document beyond overflow.
- Slideshows and widgets render client-side; SSR HTML alone under-reports content (handled via headless render).
- The Wix Monotype fonts (DIN Next, Proxima Nova, Avenir) are served under Wix's licence and were **not downloaded**.

## 4. Summary of key findings

1. **Very thin site.** Seven pages, most with only a heading and icon tiles. The substantive content is: host intro, "Our Story", 4 room descriptions + amenities (inside the booking widget), 9 captioned gallery photos, 2 videos, 14 Airbnb reviews (as images), and contact details.
2. **Confusing information architecture.** Slugs and labels are swapped: `/about` = SERVICES, `/copy-of-see-do` = ABOUT. The ABOUT slug is a Wix duplicate-page leftover.
3. **The booking engine shows no availability.** All four room types read "Room unavailable" for every date tested; no prices are shown anywhere on the site. Bookings may in practice be happening via Airbnb/WhatsApp. **This must be confirmed with the owner before Phase 2** (see 08).
4. **Reviews are screenshots.** The guest reviews section is three PNG screenshots of Airbnb — not text, not accessible, not indexable.
5. **No logo file.** The "logo" is live text in Comfortaa with a drop-shadow; the favicon/OG image is a large photo of the physical round sign. A clean vector logotype will need to be sourced from the owner.
6. **Brand palette** (verified Wix theme): slate blue `#3B5C8A`, navy `#1E2E45`, warm grey `#5F5C56`, stone `#92908A`, light blue `#C1D4EF`, plus a sage green gradient (`#5A8C65`→`#BFD9C4`) on Book a Room and a translucent yellow (`≈#F4F57D`) on service tiles. Photography (rice-field green, pool turquoise) dominates the visual identity.
7. **Typography is inconsistent:** 8+ families in use (DIN Next Light, DIN Next Ultralight, Proxima Nova, Comfortaa, Spinnaker, Georgia, Avenir Heavy, Arial/Helvetica in widgets). Heavy multi-layer text-shadows on most headings.
8. **Not responsive:** fixed 980 px desktop canvas (horizontal scroll at tablet widths); separate hand-placed mobile layout.
9. **Footer copyright is invisible** on 6 of 7 pages (white text on a white band).
10. **Media is oversized:** several originals are 14–25 MB / 6720×4480 px; the homepage hero original is 24.7 MB.
11. **SEO gaps:** ABOUT and GALLERY have no meta description; SEO titles use the site name "podpadiubud"; homepage has two LD+JSON blocks — a generic `LocalBusiness` (name "Podpadi Design Spaces", address "8 Jalan Katik Lantang", Ubud, Gianyar, BA 80571, ID, phone, image = sign photo) and a `WebSite` (name "podpadiubud"); no `LodgingBusiness`/`Hotel` type, no geo, no rating.

## 5. Where the evidence is

| Evidence | Location |
|---|---|
| Full-page screenshots, 3 viewports × 7 pages + interaction states | `screenshots/` (index: `screenshots/INDEX.md`) |
| Local asset copies (~70 MB) | `assets/` |
| Asset manifest | `04-assets-manifest.csv` |
| Verbatim content (machine-readable) | `03-content.json` |
| Audit scripts (not part of project) | Session scratchpad only — not saved to the project |

No project source files, configuration, packages, git, GitHub or Vercel were touched.
