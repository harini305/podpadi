import GalleryGrid from "@/components/GalleryGrid";
import VideoReel from "@/components/VideoReel";
import { gallery, videos } from "@/data/content";

export const metadata = {
  title: "Gallery",
  description: "Photographs and two short videos of Podpadi: the main pool and hammocks, breakfast and the yoga shala.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="gallery-head wrap" aria-labelledby="gallery-heading" data-reveal>
        <h1 id="gallery-heading" data-reveal-item>
          Gallery
        </h1>
        <p data-reveal-item>The main pool and its hammocks, breakfast by the water, and the yoga shala. Select a photo to view it larger.</p>
      </section>
      <section className="wrap gallery-body" aria-label="Photographs">
        <GalleryGrid items={gallery} />
      </section>
      <section className="videos" aria-labelledby="videos-heading">
        <div className="wrap videos__inner">
          <div className="videos__head" data-reveal>
            <h2 id="videos-heading" data-reveal-item>
              By the main pool
            </h2>
            <p data-reveal-item>
              Two short clips from the original site: a walk along the main pool and the net hammocks on its deck. Shown at their original
              480p resolution.
            </p>
          </div>
          <VideoReel clips={videos} />
        </div>
      </section>
    </>
  );
}
