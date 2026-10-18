# 06 — Functionality & Technical Dependencies

Classification: **Observed** · **Interaction tested** · **Functionality verified** · **Partially verified** · **Unverified**

## 1. Feature matrix

| # | Feature | Where | Status | Details / destination | Phase 2 consideration |
|---|---|---|---|---|---|
| 1 | Header navigation (7 links) | all | **Functionality verified** | All internal links return 200; current page shown in `#5F5C56` | Rebuild; fix slug/label mismatch (02) |
| 2 | Nav hover state | desktop | **Interaction tested** — no visible change captured | | Define new states |
| 3 | Mobile hamburger menu | mobile | **Functionality verified** | Opens full-screen blue overlay, × closes | Rebuild accessibly (focus trap, Esc) |
| 4 | Social links (FB, Airbnb profile, IG) | header, gallery, contact | **Functionality verified** (HTTP 200) | facebook.com/podpadibali · instagram.com/podpadiubud · airbnb.com/users/show/316765227 | Keep (once in header/footer) |
| 5 | Airbnb listing link | About CTA | **Functionality verified** (200) | airbnb.com/rooms/1026411473814272071 (with share-tracking params) | Keep; strip tracking params (confirm) |
| 6 | Share buttons (Facebook / WhatsApp / Copy link) | Home, Contact | **Observed** | WhatsApp link = `api.whatsapp.com/send/?phone&text=<site URL>` — shares the URL, **does not contact the business** | Replace with direct `wa.me` contact link (owner to confirm number) |
| 7 | Booking search widget (dates, rooms & guests, Search) | Home hero, /booking-engine | **Functionality verified** | Date picker & guest dropdown open; Search routes to `/booking-engine#/search?search={checkin_date,checkout_date,room_count,total_adult,…}` | Depends on booking decision |
| 8 | Room list & availability | /booking-engine | **Partially verified** | 4 rooms, all "Room unavailable" for 2026-10-17→18 and 2026-12-16→18 (2 adults). No rates. Total $0.00 USD | **Owner must confirm** whether HotelRunner is still used (08 Q1) |
| 9 | Room "More details" modal | /booking-engine | **Functionality verified** | Carousel (5/4/4/8 photos), Overview, About this room, Read more, Amenities, Close | Content captured → can become static room sections |
| 10 | Room "Contact" modal | /booking-engine | **Functionality verified** | Shows phone + email, "Done" | Fold into page |
| 11 | Promo code / Continue / checkout / payment | /booking-engine | **Unverified** | Not reachable (no availability). Provider HotelRunner; payment provider unknown | Do not mock a working checkout |
| 12 | Hidden widget tabs: Reservation, Packages & Deals, Availability Calendar | /booking-engine DOM | **Observed** (hidden, `javascript:void(0)`) | | Ask owner |
| 13 | Contact form (Wix Forms) | /contact | **Partially verified** | Fields: First*, Last*, Email*, Phone (country code), Message. Empty Submit → no visible inline errors captured; Submit hover = navy. Not submitted. Destination inbox unknown | Needs a real form backend (e.g. email service/API route) or a mailto/WhatsApp fallback — decision for Phase 2 |
| 14 | Email link | /contact | **Functionality verified** | `mailto:podpadi.ubud@gmail.com` | Keep |
| 15 | Phone/WhatsApp number | /contact, modal | **Observed** | Plain text, not clickable | Make `tel:` + `wa.me` links |
| 16 | Google Map embed | /contact | **Functionality verified** | Wix googleMap component (iframe on parastorage.com), Map/Satellite, zoom, Street View, info window with "Directions" link. Coords −8.5155173, 115.2515506 | Use a Google Maps embed iframe (no API key needed for basic embed) or static map + link |
| 17 | Gallery slideshow | /gallery | **Functionality verified** | 9 items, autoplay, counter "n/9", captions, arrows on hover | Rebuild (GSAP permitted) |
| 18 | Gallery videos ×2 | /gallery | **Functionality verified** | `video.wixstatic.com …/480p/mp4/file.mp4`, autoplay, loop, muted; mute/play controls | Self-host local copies (480p is highest rendition) |
| 19 | Reviews slideshow | /copy-of-see-do | **Interaction tested** | 3 image slides ("1/3"); arrows not reliably clickable headless | Replace with text reviews |
| 20 | Host portrait "slideshow" | /copy-of-see-do | **Observed** | 1-item slideshow ("1/1") | Plain image |
| 21 | Wix Chat | all | **Interaction tested** | Widget opens (`engage.wixapps.net`, Firebase); staffing unknown | Drop or replace with WhatsApp CTA — owner to decide |
| 22 | Members Area / login | — | **Unverified** | App installed per page data; no visible UI | Not needed unless owner says otherwise |
| 23 | Google Reviews app | — | **Unverified** | Installed per page data; nothing renders | Ask owner if a Google Business Profile exists |
| 24 | Wix Bookings app | — | **Unverified** | Installed; not used on any page | Ignore |
| 25 | Search / filters / e-commerce / blog / translation | — | Not present | | Not needed |
| 26 | Downloads (PDF brochures etc.) | — | Not present | | — |
| 27 | Animations / scroll effects | all | **Observed** | Fixed page backgrounds; slideshow transitions; no scroll-triggered reveals detected (`hasInteractions:false`) | GSAP/ScrollTrigger in Phase 2, used sparingly |

## 2. Third-party hosts contacted by the live site (network log)

| Host | Purpose |
|---|---|
| `static.wixstatic.com`, `video.wixstatic.com`, `static.parastorage.com`, `siteassets.parastorage.com` | Wix media, video, runtime |
| `be.hotelrunner.com`, `app.hotelrunner.com`, `my-site-3-590.hotelrunner.com`, `cdn-cms0…6.hotelrunner.com` | **HotelRunner booking engine** + room photos (property id appears as `my-site-3-590`) |
| `engage.wixapps.net`, `*.firebaseio.com`, `identitytoolkit.googleapis.com` | Wix Chat |
| `maps.googleapis.com`, `maps.gstatic.com` | Google Maps |
| `reviews-cache-proxy-…run.app` | Google Reviews app (installed, nothing shown) |
| `panorama.wixapps.net`, `frog.wix.com`, `sentry-*.wixpress.com`, `browser.sentry-cdn.com` | Wix analytics / error monitoring |
| `ipapi.co` | IP geolocation (likely booking widget currency/locale) |
| `fonts.googleapis.com`, `fonts.gstatic.com`, `cdnjs.cloudflare.com`, `cdn.jsdelivr.net`, `mkp-prod.nyc3.cdn.digitaloceanspaces.com` | Fonts / libraries loaded by widgets |

No Google Analytics, Meta Pixel or Tag Manager tags were observed. `google-site-verification` meta is present (Search Console) — **keep this meta tag** in Phase 2: `UCV0xctCldfeX0I-2NM7lCPW4rrJxhYOvHSg-lsCUzM`. `fb:admins = podpadibali` also present.

## 3. Booking-engine dependency (critical)

- The booking UI is **HotelRunner's** Wix Hotels app. Inventory, rates, availability and payment live in the owner's HotelRunner account, not in Wix.
- Leaving Wix means the embedded Wix Hotels widget will not come with the new site. Options for Phase 2 (owner decision, not to be assumed):
  1. Link/redirect "Book" CTAs to a HotelRunner-hosted booking page (if the owner's HotelRunner plan provides a standalone booking URL — **unverified**).
  2. Embed a HotelRunner widget if HotelRunner offers a non-Wix embed — **unverified**.
  3. Use Airbnb listing + WhatsApp/email enquiry as the booking path (matches observed reality: no availability shown on-site, reviews come from Airbnb).
- Room photos are hosted on HotelRunner's CDN; local copies are in `assets/rooms/`.

## 4. Things the frontend must not fake
- No working checkout, live availability, or prices unless a real integration is confirmed.
- Contact form must not show "Message sent" unless a backend actually sends it.
- Rating/review counts must be shown as dated ("as of …") or confirmed fresh.
