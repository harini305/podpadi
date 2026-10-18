# 09 — Phase 2 Recommendations & Mandatory Requirements

Phase 2 will not start until the client reviews this audit and approves. Answers to the open questions in [08](08-issues-gaps-questions.md) — especially **Q1 (booking)** — should come before layout work on the Book page.

## 1. Stack (planned)
Next.js (App Router) · JavaScript · React · GSAP + ScrollTrigger · responsive CSS. Fresh project in `D:\podpadi12` (currently contains only `docs/`).

## 2. Suggested information architecture (for approval — not final)

| New route | Built from | Notes |
|---|---|---|
| `/` | Home hero + condensed: property intro (meta copy), villa overview, services strip, location teaser, 3–4 reviews, booking/enquiry CTA | Keep tagline "Step Into Tranquility" |
| `/stay` *(or `/villas`)* | 4 room types + shared property facts + amenities | Replaces booking-engine room modals; booking CTA per room depends on Q1 |
| `/about` | Host "Hello!", "Our Story", reviews as text, Airbnb link | 301 from `/copy-of-see-do` |
| `/gallery` | 9 photos + 2 videos | |
| `/contact` | Intro, WhatsApp/email/address, map, enquiry form | |
| Services + See & Do | Merge into Home and/or a single `/experience` section | 301s from `/about` (old services) need care because `/about` gets reused — decide with client |
| `/booking-engine` | Keep as a redirect target or legacy route depending on Q1 | |

No blog (none exists). If a simple blog is later requested, its initial presentation uses **≤ 10 images**.

## 3. Content
- Use `03-content.json` as the single text source; never invent prices, FAQs, testimonials, claims or posts.
- Present the whole-property description once; room cards carry only room-specific facts.
- Reviews as real text with name, date and "Airbnb" attribution; no reviewer photos.
- Keep pages concise; avoid repeated paragraphs and excessive length.

## 4. Assets
- Use local originals in `assets/` (manifest: `04-assets-manifest.csv`). Do not use stock or AI imagery when originals exist.
- Generate responsive derivatives at build/prep time (e.g. 640 / 1280 / 1920 / 2560 widths, WebP/AVIF + JPEG fallback, quality ~75–82); hero ≤ ~300 KB at 1920 px.
- Lazy-load below-the-fold media; `priority`/eager for the hero only.
- Videos: self-host the 480p MP4s with posters, `muted playsinline loop`, load on visibility.
- Dedupe: use one copy of byte-identical/duplicate images (see 08-D).
- Don't keep the multi-MB originals in `public/`; keep them as source material outside the served folder.

## 5. Image configuration (Vercel quota)
Merge into the existing Next.js config (don't replace other settings):
```js
// next.config.mjs — merge, don't overwrite
const nextConfig = {
  // ...existing settings
  images: { unoptimized: true },
};
export default nextConfig;
```
Because optimisation is disabled, responsiveness must come from pre-generated sizes + `srcset/sizes` (or `<picture>`), explicit width/height, and `loading="lazy"` below the fold.
*Not applied now — no configuration exists or was changed during the audit.*

## 6. Integrations to plan
| Need | Recommendation (pending owner) |
|---|---|
| Booking | Per Q1: link out to HotelRunner/Airbnb, or embed if a non-Wix embed exists. No fake checkout |
| Enquiry form | Real backend (API route + transactional email) or mailto/WhatsApp; must not claim success without delivery; add privacy note |
| WhatsApp | `https://wa.me/6281237377601` (confirm) |
| Map | Google Maps embed iframe at −8.5155173, 115.2515506 + "Directions" link |
| SEO | Per-page titles/descriptions (ABOUT & GALLERY currently missing), `LodgingBusiness` JSON-LD with real address/geo/phone, canonical URLs, sitemap, keep `google-site-verification` meta, 301s for changed slugs |

## 7. Mandatory design requirements (from the brief — recorded for Phase 2)

### Typography
- **Exactly two font families across the entire site** — one for headings; one for body, nav, buttons, forms, cards, footer and all UI.
- Both readable, professional, not fancy. Chosen in Phase 2 (not in this audit). Original DIN Next / Proxima Nova / Avenir are Wix-licensed and must not be reused without a licence; Comfortaa is OFL and documented, but counts as one of the two if used.
- No third family for the logo, decorative headings, special sections, footer or any component.
- Consistent sizes for equivalent components; controlled responsive type scale; hierarchy via size/weight/line-height/letter-spacing.

### Visual design
- Professional, human-designed look; intentional image/text alignment.
- Consistent content widths, margins and spacing.
- No decorative numbering, eyebrow text, random symbols, floating badges or ornaments without purpose.
- Avoid repetitive AI-looking/template layouts; effects only when they serve a purpose.
- Preserve brand identity: slate blue `#3B5C8A`, navy `#1E2E45`, warm grey `#5F5C56`, off-white `#F0EFEE`, sage accent `#5A8C65`/`#BFD9C4`; photography-led; square-cornered calm. Drop 3D text shadows, yellow tiles, mixed icons.

### Content
- Concise, focused pages; no repeated paragraphs, unnecessary sections or excessive length.
- Preserve meaningful facts; do not invent claims, testimonials, FAQs, prices or blog posts.

### Footer
- Compact and content-driven; only necessary verified info (name, address, WhatsApp, email, socials, © year).
- No excessive padding, unnecessary columns, duplicated content or oversized layout.
- Final content section fully visible above the footer; natural transition into it.
- No overlap, clipping, excessive blank space or fixed-footer interference (the original's invisible footer is a known defect).

### Images & performance
- Prefer original assets already available; resize/compress locally; avoid unnecessary downloads and duplicates.
- `images: { unoptimized: true }` merged into existing config; still use sensible dimensions, modern formats, lazy loading and responsive sizing.

## 8. Phase 1 boundary
No redesign, components, pages, package installs, config changes, deletions, GitHub pushes or Vercel deploys were made. Waiting for approval.
