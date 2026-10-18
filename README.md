# Podpadi — UI redesign demo

A standalone training/demo redesign of the Podpadi website (Next.js App Router, JavaScript, plain CSS, GSAP + ScrollTrigger).
It does not book, send, charge or link to anything outside itself.

## Run

```bash
npm install
npm run build && npm run start   # http://localhost:3412
# or, while editing:
npm run dev                      # http://localhost:3412
```

Port 3412 is used because 3000 and 3100 are taken by other local projects on this machine. Change it in `package.json`.

## Routes

| Route | Content |
|---|---|
| `/` | Hero, property intro, villa band, stay planner, host + review, location card |
| `/stay` | The four villas, the shared property description |
| `/stay/[slug]` | `private-retreat`, `charming-boutique-villa`, `boutique-villa-escape`, `family-getaway` |
| `/our-story` | Made's introduction, Our Story, 14 transcribed reviews |
| `/experiences` | Services and nearby activities |
| `/gallery` | 9 captioned photos (lightbox) and 2 local videos |
| `/contact` | Reference contact details and a local-only demo form |
| `/book` | Demo booking: dates & guests → villa → review → demo confirmation |

## Where things live

- `src/data/site.js`: name, wordmark, contact details, navigation (rename the demo here)
- `src/data/rooms.js`: the four room types, amenities and listing figures
- `src/data/content.js`: verbatim copy, gallery captions, reviews
- `src/app/globals.css`: design tokens and all styles
- `src/components/Motion.js`: the single GSAP/ScrollTrigger layer
- `scripts/process-images.py`: rebuilds `public/img/*.{avif,webp}` and `src/data/images.js` from `docs/source-audit/assets`. Run with `npm run images` (needs Python + Pillow with AVIF). The original audit assets are kept locally and are not in this repository.

## Assets

- Images: AVIF (served first) and WebP fallback at 640/1280/1600/1920 px via `<picture>`; browsers download one file at the size they need.
- Videos: `public/media/*.mp4`, the two original 480p clips re-encoded without their (never-played) audio track, H.264 CRF 30, faststart.
- Deployment: `.vercelignore` keeps `docs/` and `scripts/` out of the Vercel upload.

Planning notes: `docs/phase-2-plan.md`. Source audit: `docs/source-audit/`.
