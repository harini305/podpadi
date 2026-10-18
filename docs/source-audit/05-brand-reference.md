# 05 — Brand Reference: Typography, Colour, Logo, Visual Identity

Values are **Verified** (read from computed styles or Wix theme CSS variables) unless marked **Estimate** (pixel-sampled from JPEG screenshots — expect ±3 per channel).

## 1. Logo & brand marks

| Mark | What it is | Asset |
|---|---|---|
| **Web logotype** | Live text, not an image: "podpadi" (Comfortaa Bold, 58 px, letter-spacing 5.6 px) over "design spaces" (Comfortaa Bold, 20 px, letter-spacing 6.72 px), colour `#C6E0E0` (pale mint), `text-shadow: rgba(0,0,0,.4) 0 4px 5px`. Appears **only** in the Home hero — no logo in the header on any page. | Font: `assets/fonts/podpadi-custom-comfortaa.{ttf,woff2}` (Comfortaa Regular v2.004, SIL OFL 1.1 — rendered in faux/synthetic bold) |
| **Physical sign** | Round grey metal sign on a breeze-block wall: rounded geometric stencil logotype "podpadi", "design spaces" beneath, plus a line of Balinese script. This is the true brand mark. | `assets/brand/brand-favicon-og.jpg` (5087×3392 photo) and `assets/brand/hotelrunner-property-sign.jpg` (408×288) |
| **Favicon / apple-touch / OG / Twitter image** | All use the sign photo above, cropped by Wix to 192/180 px squares — illegible at favicon size | same |

**No vector or transparent logo file exists on the site.** Phase 2 must request one from the owner, or (with approval) set the wordmark in the chosen heading font. Do not trace or redraw the sign without permission.

## 2. Typography (original — for reference only)

| Use | Family (as served) | Size desktop / mobile | Weight | Other | Colour |
|---|---|---|---|---|---|
| Header nav | `proxima-n-w01-reg` (Proxima Nova, Wix/Monotype) | 14 px | 400 | uppercase, ls 0.7 px | `#3B5C8A`; current `#5F5C56` |
| Mobile menu links | DIN Next (Estimate) | ~16 px | 400 | uppercase, centred | white on `#3A709F` |
| Logotype | Comfortaa (custom upload) | 58 / 33 px | 700 | ls 5.6 px | `#C6E0E0` |
| Hero tagline | `din-next-w01-light` | 22 / 12 px | 700 | ls 3.52 px, 6-layer 3D text-shadow | white |
| Page H1/H2 (BOOK A ROOM, OUR SERVICES, THINGS TO DO) | `din-next-w01-light` | 26–28 / 14–18 px | 700 | ls 2.6–2.8 px, 3D text-shadow | `#3B5C8A` |
| About "Hello!" / "Our Story" | `din-next-w01-light` | 42 & 38 / 30 px | 700 | 3D text-shadow | `#1E2E45` / black |
| About "Beautiful Words…" | `din-next-w01-light` | 36 / 23 px | 700 | ls 3.6 px, lh 43.2 px | black |
| Body paragraphs (About) | `din-next-w01-light` | 16 px | 400 | lh 28.8 px | black |
| Contact intro | `din-next-w01-light` | 16 / 13 px | 400 | lh 32 px, centred | `#3B5C8A` |
| Contact H1 | `din-next-w01-light` | 25 / 16 px | 700 | ls 3.75 px, lh 35 px | `#3B5C8A` |
| Contact details block | `din-next-w01-light` | 14 px | 400 | ls 0.7 px, lh 28.8 px | `#2F2E2E` |
| Service / activity tile labels | `dinnextltw23-ultralight` (DIN Next Ultralight) | 16 / 12–15 px | 700 | ls 3.2 px, uppercase, drop-shadow | `#2F2E2E` |
| Gallery captions | `avenir-lt-w01_85-heavy1475544` | 17 px | 400 | lh 23.8 px | `#5F5C56` |
| Booking widget + form labels | Georgia (system serif) | 13–16 px | 400 | | `#5F5C56` |
| Room card titles | `din-next-w01-light` | 16 px | 700 | | `#5F5C56` |
| Contact Submit | Spinnaker (Google Font) | 16 px | 400 | | `#3B5C8A` on `#C1D4EF` |
| Footer | `din-next-w01-light` | 12 / 8 px | 400 | | white |
| Wix chrome (chat, share, skip-link) | Helvetica / Arial / Wix Madefor | — | — | | — |

**Observation:** ~8 families plus system fallbacks; DIN Next Light is the de-facto primary face (geometric/industrial sans), Comfortaa only for the logotype. Headings rely on heavy letter-spacing + uppercase + multi-layer text shadows.

**Font files in project:** only Comfortaa (`assets/fonts/`). DIN Next, Proxima Nova and Avenir are Monotype fonts licensed through Wix and **cannot be reused** in Phase 2 without a separate licence.

### Phase 2 typography rule (mandatory)
The redesign must use **exactly two font families** sitewide — one for headings, one for body/UI (nav, buttons, forms, cards, footer). No third family for logo, decorative headings, footer, or individual components. Final fonts are **not chosen in this phase**. Directionally relevant options to evaluate later (licence-free, readable, not fancy) that echo the original's character:
- *Rounded/geometric* echo of the sign & Comfortaa (heading candidates).
- *DIN-like* grotesques echoing DIN Next / Proxima Nova (body/UI candidates).
Hierarchy must come from size, weight, line-height and letter-spacing — not from additional families or text-shadows.

## 3. Colour

### 3.1 Brand colours (Verified — Wix theme variables + computed styles)

| Role | HEX | Wix var | Where used |
|---|---|---|---|
| **Primary — slate blue** | `#3B5C8A` | color_19 / 41 / 45–47 | Nav links, page headings, contact text, Submit text |
| **Deep navy** | `#1E2E45` | color_20 | "Hello!" heading, Submit hover, footer text var |
| **Warm grey (text/UI)** | `#5F5C56` | color_15 / 18 / 37 | Active nav, booking widget text, Search button bg, captions |
| **Stone grey** | `#92908A` | color_14 / 40 | Secondary text (Georgia paragraphs) |
| **Pebble** | `#C0BBB6` | color_13 / 39 | Disabled Continue button (`#C1BCB8` sampled) |
| **Off-white** | `#F0EFEE` | color_12 / 38 | Light surfaces |
| **Light blue** | `#C1D4EF` | color_16 / 42 | Contact Submit background |
| **Mid blue** | `#9FBADF` | color_17 / 43 | Theme accent (not prominent) |
| **Charcoal text** | `#2F2E2E` | (rich-text inline) | Tile labels, contact details |
| **White** | `#FFFFFF` | color_11 | Backgrounds, cards |

### 3.2 Secondary / special-section colours
| Role | HEX | Status | Where |
|---|---|---|---|
| Sage green (gradient start) | `#5A8C65` (theme color_23) / `#5E8D69` sampled | Verified var / Estimate render | Book a Room title band & page gradient |
| Pale sage (gradient end) | `#BFD9C4` (color_21) / `#BCD8C2` sampled | Verified var / Estimate | same |
| Booking panel tint | `#E9EFEB` | Estimate | Booking widget panel |
| Mobile menu blue | `#3A709F` (overlay) · `#3B6FA9` (hamburger) | Estimate | Mobile navigation |
| Logotype mint | `#C6E0E0` | Verified | Home logotype |
| Service tile yellow | ≈ `#F4F57D` (translucent yellow over photo) | Estimate | Services & See & Do tiles |
| Contact banner overlay | `#242323` behind image | Verified | Contact banner container |

### 3.3 Incidental / third-party colours (not brand)
- Airbnb coral `#FF5A5F`/`#E61E4D` — Airbnb badge & wallpaper background on About.
- Wix chat button `#5F5C56`-ish grey; share buttons (Facebook blue, WhatsApp green).
- Wix theme template defaults never used visibly: red `#ED1C24`, `#0088CB`, `#FFCB05`, terracotta ramp `#E1B4A4…#37160A`, blue-grey ramp `#B7C5DA…#192230`, yellow `#FFEF28`.
- Skip-link blue `#116DFF` (Wix).

### 3.4 Nature palette from photography (Estimate — the strongest visual identity)
Rice-field green (yellow-green, ~`#8DB33A`–`#B7CF3C`), pool turquoise (~`#2FB5B5`), sky blue (~`#9CC9E8`), dark timber deck / thatch browns, white net loungers. The redesign should let photography carry colour and keep UI colours restrained (slate blue / navy / warm grey / off-white, sage as an accent).

## 4. Other visual identity elements

| Element | Original treatment |
|---|---|
| Image treatment | Full-bleed or inset photos, no rounded corners, no filters; fixed parallax-style page background on 4 pages |
| Border radius | 0 everywhere in brand UI (cards, buttons, inputs, tiles). Only Wix chrome (chat, share, pills) is rounded |
| Shadows / depth | Heavy multi-layer "3D" text-shadows on headings; drop-shadow on labels; no card shadows |
| Surfaces | Translucent white panel (α 0.69) over photo (About); translucent white/yellow tiles (Services/See & Do) |
| Icons | Mixed: thin-line Wix stock icons (breakfast, towel, cocktail, laptop, sun), cropped screenshot icons (hiker, rafting, airport van on yellow), detailed Ganesh illustration, leaf wreath. **Inconsistent** — Phase 2 should use one coherent line-icon set or none |
| Decorative motifs | Breeze-block lattice wall (on the physical sign photo) and net loungers — potential pattern inspiration, not used on the site |
| Tone & personality | Calm, natural, tropical, hospitable, personal (host-led). Copy uses "tranquility", "serene", "seclusion", "unforgettable" |

**What to keep:** slate-blue/navy/warm-grey palette, sage accent, lowercase rounded logotype character, photo-led layouts, square-cornered restraint, calm personal tone.
**What not to carry over:** 3D text shadows, translucent yellow tiles, mixed icon styles, 8-font mix, white-on-white footer, fixed-width canvas.
