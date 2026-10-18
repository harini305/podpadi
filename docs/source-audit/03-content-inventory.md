# 03 — Content Inventory & Preservation Reference

**Verbatim source of truth:** [`03-content.json`](03-content.json) — every visible string, SEO field, room description, amenity list, gallery caption and all 14 transcribed reviews, with original spelling preserved. This file explains what each item is, where it lives, and how important it is.

Priority key: **P1** must remain easy to find · **P2** keep, can be condensed · **P3** low priority / optional · **✗** do not carry over as-is.

## 1. Business facts (P1)

| Fact | Value | Source (page → section) |
|---|---|---|
| Name on contact block | Podpadi Design Spaces | /contact → Contact Us block; footer; LD+JSON |
| Short/brand name | Podpadi (also "PodPadi" in Our Story) | everywhere |
| Address | Jl. Katik Lantang No.8, Singakerta, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571, Indonesia | /contact |
| WhatsApp / cell | +62 812-3737-7601 (Made) | /contact; room Contact modal; meta description |
| Email | podpadi.ubud@gmail.com | /contact (mailto); room Contact modal |
| Map | lat −8.5155173, lng 115.2515506 · pin "Be Our Guest in Podpadi, Ubud" · "Located only 10mins from Central Ubud" | /contact → Google Map |
| Distance claims | "just a short 10-minute ride from Central Ubud" (/contact) · "2.5KM TO UBUD CENTRAL" (/see-do) · "Only 2.5 km from Ubud Center" (/see-do meta) | multiple — consistent enough |
| Property make-up | 4 One Bedroom Villas + 1 Three Bedroom Family Villa, each with private pool and en-suite; up to 14 guests; also a shared main pool overlooking rice fields (reviews, gallery captions) | room descriptions; gallery; reviews |
| Host | Made, host and manager | /copy-of-see-do → Hello! |
| Rating | 4.96 Airbnb average · 133 reviews · "Guest favorite" | /copy-of-see-do (text + screenshot) — **dated, re-verify** |
| Social | Facebook `podpadibali`, Instagram `podpadiubud`, Airbnb user 316765227, Airbnb listing 1026411473814272071 | header; gallery; contact; about |

## 2. Page copy

| Page | Item | Priority | Notes |
|---|---|---|---|
| Home | Logotype "podpadi / design spaces" | P1 | Brand mark (text, not image) |
| Home | Tagline "Step Into Tranquility" | P1 | Only Home headline |
| Home | Meta description (Mount Agung, rice fields, peaceful retreat…) | P2 | Best existing "intro" copy — usable as home intro after owner approval |
| About | "Hello!" host paragraph | P1 | Personal, distinctive; can be trimmed |
| About | "Our Story" paragraph | P2 | Generic wording; ends with stray `"` |
| About | "Beautiful Words From Our Guests!" + rating line | P1 (rating) / P3 (heading wording) | |
| About | "Looking for more reviews? Click on our Airbnb Profile!" | P2 | Link actually goes to the listing |
| Book | 4 room names | P1 | Names are long marketing sentences — Phase 2 may need short display names (**owner to supply; do not invent**) |
| Book | Room descriptions | P1 | Rooms 1, 2 and 4 repeat the same whole-property paragraph (see duplicates) |
| Book | Room facts (max adults, bedrooms, m²) | P1 | Some suspicious values (08) |
| Book | Amenity lists | P2 | Long; group them. Contains "Pets allowed" and "Iron for pants" — confirm |
| Book | Contact modal text | P3 | Replace with inline contact |
| Gallery | 8 captions (1 photo uncaptioned) | P2 | Good alt-text source |
| Gallery | "Stay connected with us…" | P3 | |
| Services | 5 labels | P1 (facts) | BREAKFAST, DAILY HOUSEKEEPING, POOL & LOUNGE, FREE WIFI 250mbps, AIRPORT TRANSFER |
| Services | Meta description (housekeeping, laundry, airport transfers, tour guide, "additional fee") | P2 | Conflicts with tiles — confirm |
| See & Do | 5 labels | P2 | SUNRISE VIEWS, 2.5KM TO UBUD CENTRAL, RICE FIELD WALKS, RAFTING, YOGA |
| See & Do | Meta description (shopping, Campuhan Ridge hiking, rafting) | P2 | Richer facts than the page |
| Contact | Intro paragraph (Katik Lantang, 10-minute ride, rice fields, comfort and seclusion) | P1 | |
| Contact | "FOR ANY INQUIRIES OR FURTHER DETAILS, PLEASE REACH OUT TO US:" | P3 | |
| Contact | "2023 Be Our Guest in Podpadi, Ubud" | ✗ | Orphan line; reads like an old footer/tagline |
| Footer | "© 2024 by Podpadi Design Spaces . Powered and secured by Wix" | ✗ (as-is) | Update year/remove "Wix" in Phase 2; keep company name |

## 3. Reviews (P1 — 14 genuine guest reviews)

Shown on /copy-of-see-do as **three screenshot images** of Airbnb. Transcribed verbatim in `03-content.json → reviews_transcribed_from_screenshots`:

| Slide | Reviewers (date) |
|---|---|
| 1 | Shannon (Nov 2024), Marco (Nov 2024), Lígia (Nov 2024), Callum (Nov 2024), Dahlia (Oct 2024) |
| 2 | Lorena ("2 weeks ago" — relative, ≈ early 2025), Ryan (Jan 2025), Kangozhayev (Jan 2025, translated from Russian), Alan (Dec 2024), Mikala (Dec 2024) |
| 3 | Marina (Oct 2024), Kasper (Oct 2024), Pauline (Oct 2024, translated from German), Abhishek (Oct 2024 — may be truncated at crop) |

All 5-star. Recurring themes (for the redesign to emphasise, not to invent): Made's helpfulness, rice-field views from the pool, cleanliness, breakfast, quiet/private yet close to town, access road is a short walk (foot/motorbike only), floral pool decoration for a birthday.

**Rules:** keep reviewer first names, dates and "via Airbnb" attribution; do not edit wording (typos such as "appartment", "witj" are verbatim); do not reuse reviewer avatar photos; confirm with the owner that quoting is acceptable.

## 4. Duplicated, repetitive or low-value content

| Content | Where | Recommendation |
|---|---|---|
| Whole-property paragraph ("The property features 4 One Bedroom Villas and a 3 Bedroom Family Villa…") | Room 1, Room 2, Room 4 (slightly reworded) | State once in an "The property" section; room cards carry only room-specific facts |
| "twin sharing … maximum of 2 guests" paragraph | Room 3 and Room 4 (Room 4 says "maximum of 6 guests") | Keep only where accurate |
| Social icons | Header + Gallery + Contact (3 sets) + share bars | Header/footer once; Contact once |
| Rating 4.96 | Text + inside each of 3 screenshots | Show once |
| Room images | Gallery 01/02 appear again as Room 1 slides 4/5 (same pixels dims) | Fine to reuse, but don't double-download |
| "Unwind/Find your bliss in our hammock by the main pool…" | Two gallery captions on two different hammock photos | Keep both; minor |

## 5. Missing content (cannot be invented — owner must supply)

- Prices / rates, minimum stay, seasonal info, currency (widget shows USD with no rates).
- Check-in / check-out times, house rules, cancellation policy, payment methods.
- Short display names for the 4 room types; correct sizes (45 m² for a 14-guest/7-bedroom listing is implausible).
- Breakfast details (included or extra?), airport transfer price, laundry, tour guide.
- Directions / arrival instructions (reviews mention the access road is foot/motorbike only — useful but owner-confirmed wording needed).
- Privacy policy (the contact form collects personal data).
- FAQs — none exist; do not create without owner input.
- Blog — none exists; do not create posts.
