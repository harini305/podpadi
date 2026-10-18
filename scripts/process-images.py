"""Resize + compress the audit's original photographs into AVIF + WebP derivatives.

Originals in docs/source-audit/assets are never modified. Output goes to
public/img/<id>-<width>.{avif,webp} and a manifest is written to src/data/images.js.
Pages serve AVIF through <picture> with WebP as the fallback; browsers download only one.
Run: python -I scripts/process-images.py
"""
import json
import os
import shutil
from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "docs", "source-audit", "assets")
OUT = os.path.join(ROOT, "public", "img")
MEDIA = os.path.join(ROOT, "public", "media")

# id -> (source path, target widths). Duplicates from the audit are listed once:
# room-1 photos 03/04/05 == gallery-09/02/01, room-2-04 == room-3-04.
STANDARD = [640, 1280, 1920]
IMAGES = {
    "hero-main-pool": ("photos/home-hero-pool-ricefield.jpg", [640, 1280, 1600, 1920]),
    "rice-field-walk": ("photos/contact-banner-woman-ricefield.jpeg", STANDARD),
    "host-made": ("photos/about-host-made.png", [620]),
    "property-sign": ("brand/brand-favicon-og.jpg", [640, 1280]),
    "retreat-pool-deck": ("rooms/room-1-private-retreat-14-01.jpg", STANDARD),
    "retreat-main-pool": ("rooms/room-1-private-retreat-14-02.jpg", STANDARD),
    "villa-a-pool": ("rooms/room-2-boutique-villa-a-01.jpeg", [640, 1280]),
    "villa-a-bedroom": ("rooms/room-2-boutique-villa-a-02.jpeg", [640, 1280]),
    "villa-a-bedroom-2": ("rooms/room-2-boutique-villa-a-03.jpeg", [640, 1280]),
    "villa-bathtub": ("rooms/room-2-boutique-villa-a-04.jpeg", STANDARD),
    "villa-b-pool": ("rooms/room-3-boutique-villa-b-01.jpeg", [640, 1280]),
    "villa-b-terrace": ("rooms/room-3-boutique-villa-b-02.jpeg", [640, 1280]),
    "villa-b-bedroom": ("rooms/room-3-boutique-villa-b-03.jpeg", [640, 1280]),
    "family-bedroom": ("rooms/room-4-family-3br-01.jpeg", STANDARD),
    "family-bedroom-2": ("rooms/room-4-family-3br-02.jpeg", STANDARD),
    "family-bedroom-3": ("rooms/room-4-family-3br-03.jpeg", STANDARD),
    "family-pool-door": ("rooms/room-4-family-3br-04.jpeg", STANDARD),
    "family-floating-tray": ("rooms/room-4-family-3br-05.jpg", [640, 1000]),
    "family-kitchen": ("rooms/room-4-family-3br-06.jpeg", STANDARD),
    "family-lounge": ("rooms/room-4-family-3br-07.jpeg", STANDARD),
    "family-window-seat": ("rooms/room-4-family-3br-08.jpeg", [640, 1280]),
    "gallery-aerial-hammock": ("gallery/gallery-01-hammock-main-pool.jpg", STANDARD),
    "gallery-aerial-pool": ("gallery/gallery-02-untitled-a59db56f.jpg", STANDARD),
    "gallery-breakfast": ("gallery/gallery-03-breakfast.jpg", STANDARD),
    "gallery-yoga-space": ("gallery/gallery-04-yoga-space.jpg", STANDARD),
    "gallery-friends-pool": ("gallery/gallery-05-friends-pool.jpg", STANDARD),
    "gallery-hammock-bliss": ("gallery/gallery-06-hammock-bliss.jpg", STANDARD),
    "gallery-friends-pool-area": ("gallery/gallery-07-friends-pool-area.jpg", STANDARD),
    "gallery-floating-breakfast": ("gallery/gallery-08-floating-breakfast.jpg", STANDARD),
    "gallery-yoga-shala": ("gallery/gallery-09-yoga-shala.jpg", STANDARD),
    "video-pool-walk-poster": ("video/gallery-video-1-poster.jpg", [640]),
    "video-hammock-deck-poster": ("video/gallery-video-2-poster.jpg", [640]),
}
VIDEOS = {
    "pool-walk.mp4": "video/gallery-video-1.mp4",
    "hammock-deck.mp4": "video/gallery-video-2.mp4",
}


def avif_quality_for(width):
    if width >= 1700:
        return 50
    if width >= 1200:
        return 55
    return 60


def quality_for(width):
    # Large derivatives tolerate stronger compression at their rendered size.
    if width >= 1700:
        return 64
    if width >= 1200:
        return 72
    return 78


def main():
    if os.path.isdir(OUT):
        shutil.rmtree(OUT)
    os.makedirs(OUT)
    os.makedirs(MEDIA, exist_ok=True)
    manifest = {}
    total = 0
    avif_total = 0
    for key, (rel, widths) in IMAGES.items():
        im = ImageOps.exif_transpose(Image.open(os.path.join(SRC, rel))).convert("RGB")
        w0, h0 = im.size
        done = []
        if h0 > w0:  # portrait frames never render wider than ~720 CSS px
            widths = [w for w in widths if w <= 1280]
        for w in sorted(set(min(w, w0) for w in widths)):
            h = round(h0 * w / w0)
            out = im if w == w0 else im.resize((w, h), Image.LANCZOS)
            path = os.path.join(OUT, f"{key}-{w}.webp")
            out.save(path, "WEBP", quality=quality_for(w), method=6)
            total += os.path.getsize(path)
            avif_path = os.path.join(OUT, f"{key}-{w}.avif")
            out.save(avif_path, "AVIF", quality=avif_quality_for(w), speed=5)
            avif_total += os.path.getsize(avif_path)
            done.append(w)
        manifest[key] = {"w": w0, "h": h0, "widths": done}
        print(f"{key:28} {w0}x{h0} -> {done}")
    # public/media holds re-encoded clips (audio removed, H.264 CRF 30, faststart):
    #   ffmpeg -i <original> -an -c:v libx264 -preset veryslow -crf 30 -pix_fmt yuv420p     #          -profile:v main -movflags +faststart public/media/<name>
    # Only copy an original when no encoded clip exists yet.
    for name, rel in VIDEOS.items():
        target = os.path.join(MEDIA, name)
        if not os.path.exists(target):
            shutil.copyfile(os.path.join(SRC, rel), target)
    with open(os.path.join(ROOT, "src", "data", "images.js"), "w", encoding="utf-8") as f:
        f.write("// Generated by scripts/process-images.py — do not edit by hand.\n")
        f.write("const images = " + json.dumps(manifest, indent=2) + ";\n\nexport default images;\n")
    print(f"total webp: {total / 1e6:.1f} MB, total avif: {avif_total / 1e6:.1f} MB")


if __name__ == "__main__":
    main()
