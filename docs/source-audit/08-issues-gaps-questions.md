# 08 — Issues, Gaps, Inconsistencies & Open Questions

None of these have been "fixed" in the content files — originals are preserved verbatim. Each needs an owner/client decision before Phase 2 publishes the fact.

## A. Open questions for the owner (blocking or high-impact)

| # | Question | Why it matters |
|---|---|---|
| **Q1** | **How are bookings taken today?** Is HotelRunner still active? Every room shows "Room unavailable" on all tested dates and no prices appear. Is Airbnb/WhatsApp the real channel? | Determines the whole Book page and every CTA. Wix Hotels widget won't come along with a Next.js site |
| Q2 | If HotelRunner stays: is there a standalone booking URL or non-Wix embed code for property `my-site-3-590`? | Integration approach |
| Q3 | Is there a vector/transparent logo file (the round sign with Balinese script)? | No logo asset exists online |
| Q4 | Short display names for the 4 room types, and correct sizes/bedroom counts (see C) | Room cards |
| Q5 | Is the 4.96 rating / 133 reviews still current? OK to quote the 14 Airbnb reviews as text? | Accuracy + permission |
| Q6 | Which services are actually offered and which cost extra (breakfast, laundry, tour guide, airport transfer)? | Services page vs meta description conflict |
| Q7 | Should the contact form email podpadi.ubud@gmail.com? Is WhatsApp +62 812-3737-7601 the preferred primary contact? | Form backend & CTA design |
| Q8 | Keep Wix Chat? (Probably replace with WhatsApp.) | Dependency |
| Q9 | Is there a Google Business Profile (Google Reviews app is installed but unused)? | Reviews / map link |
| Q10 | Preferred public name: "Podpadi", "Podpadi Ubud", "Podpadi Design Spaces", "PodPadi"? | Consistency in titles/SEO |
| Q11 | Permission/licensing for `about-reviews-bg-airbnb-wallpaper.jpg` (filename `wp10784415-airbnb-wallpapers.jpg` suggests a downloaded wallpaper) and Airbnb logos | Trademark/licence risk |
| Q12 | Domain/hosting plan (Wix → Vercel), redirects for `/about` and `/copy-of-see-do`, keeping Search Console verification | SEO continuity |

## B. Content inconsistencies

| # | Issue | Location |
|---|---|---|
| B1 | Slug ↔ label swap: `/about` is SERVICES; `/copy-of-see-do` is ABOUT | Nav / routes |
| B2 | Room 1 claims 14 adults, 7 bedrooms but **45 m²** (same as the 2-person villas) | Booking room 1 |
| B3 | Room 1 is effectively "the whole property" (4×1BR + 3BR) listed as a room alongside its own parts | Booking |
| B4 | Room 2's description is the whole-property paragraph, not a description of the villa | Booking room 2 |
| B5 | Room 4: "Perfectly designed for twin sharing … maximum of 6 guests" (twin sharing contradicts 6 guests); 200 m² vs Room 1's 45 m² | Booking room 4 |
| B6 | Room 3 "twin sharing" but amenity list says "King" only | Booking room 3 |
| B7 | Amenities include "Pets allowed", "Iron for pants", "Hairdryer" + "Hairdryer on request", "Mountain view" (Room 1 only) — likely HotelRunner checkbox noise | Booking |
| B8 | Services meta description mentions laundry & tour guide services; page doesn't. Page shows breakfast/pool/wifi; meta doesn't | /about |
| B9 | See & Do meta mentions shopping & Campuhan Ridge hiking; page doesn't | /see-do |
| B10 | Copyright "© 2024" vs "2023 Be Our Guest in Podpadi, Ubud" on Contact vs 2025 content updates | Footer / Contact |
| B11 | "Our Story" paragraph ends with a stray closing quote `"` | About |
| B12 | "Click on our Airbnb **Profile**!" links to the Airbnb **listing**; header Airbnb icon links to the profile | About |
| B13 | Review "BONUS TIP: Wake up by 6 … to catch a lovely **sunset** view" (sunrise intended) — verbatim guest text, leave as is or omit | Review (Abhishek) |
| B14 | Name variants: Podpadi / PodPadi / Pod Padi / podpadiubud / Podpadi Design Spaces | Sitewide |
| B15 | LD+JSON street "8 Jalan Katik Lantang" vs visible "Jl. Katik Lantang No.8" (same address, different format) | Home LD+JSON |
| B16 | Booking widget currency USD while business is in Indonesia (IDR) — unknown if intended | Booking |
| B17 | Lorena's review date "2 weeks ago" is relative (screenshot date unknown, ≈ early 2025) | Review slide 2 |

## C. Design / UX / accessibility problems (do not carry into the redesign)

- Fixed 980 px canvas → horizontal scrolling on tablets.
- Footer copyright invisible (white on white) on 6/7 pages.
- Reviews delivered as screenshots → unreadable on mobile, not accessible or indexable.
- Heavy 3D text-shadows on headings; low-contrast pale mint logotype over bright sky.
- 8+ font families; mixed icon styles (line icons, screenshot crops, detailed Ganesh illustration).
- Home has almost no visible information; Services and See & Do are icon-only with no descriptions.
- "CONTACT US" heading links to the homepage; phone not clickable; WhatsApp share button doesn't message the business.
- Empty `alt` on many images; icon alts like "image_preview_edited".
- Chat button covers content on mobile.
- No privacy policy although a form collects personal data.

## D. Asset & performance risks

| Asset | Problem |
|---|---|
| `home-hero-pool-ricefield` | Original 24.7 MB, 6720×4480 (local copy capped to 2560 px, 1.9 MB) |
| `bg-ricefield-sky`, `bg-woman-ricefield-services` | 15.7 MB / 16.5 MB originals |
| `gallery-04/05/07/08` | 14–24.7 MB originals |
| `gallery-03-breakfast` | 4597×5746, 5.3 MB (portrait; local is original) |
| `contact-banner-woman-ricefield` | 6720×4480 (1.3 MB) used as a 335 px strip |
| `seedo-icon-ganesh` | 2189 px, 0.9 MB PNG used at 76 px |
| Room 1 photos | 4.5–5 MB originals; Room 4 photos 6720×4480 |
| Duplicates | `room-2-…-04` = `room-3-…-04` (byte-identical); `room-1-…-04/05` = `gallery-02/01` (same images, different files); `hotelrunner-property-sign` = lower-res copy of `brand-favicon-og` |
| Videos | Highest rendition available is **480p** (1.7 MB / 2.4 MB) — soft on large screens |
| Review images | Contain third-party personal photos (reviewer avatars) |
| `icon-about-unknown-c1afa871`, `svc-icon-unknown-02c8d984` | Referenced but not visibly used (an Airbnb coral logo and a hiker icon) |

## E. Audit limitations
- Booking steps beyond room list, payment, and form submission were not exercised (no availability; no real enquiry sent).
- Monotype fonts not downloaded (licensing).
- Third-party pages (Airbnb, Facebook, Instagram) not audited.
- Colour values marked "Estimate" come from JPEG screenshots.
