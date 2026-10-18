"use client";

import { useEffect, useRef, useState } from "react";
import Img from "@/components/Img";
import images from "@/data/images";

function posterSrc(id) {
  const meta = images[id];
  return `/img/${id}-${meta.widths[meta.widths.length - 1]}.webp`;
}

// One local player with a clip list beside it. Nothing downloads until the player nears the
// viewport; clips are muted loops with a visible play/pause control. Reduced-motion visitors
// see the poster until they press play.
export default function VideoReel({ clips }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [inView, setInView] = useState(false);
  const videoRef = useRef(null);
  const reduceRef = useRef(false);
  const clip = clips[active];

  useEffect(() => {
    reduceRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const video = videoRef.current;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: "120px" });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Autoplay while visible (unless reduced motion); pause when scrolled away.
  useEffect(() => {
    const video = videoRef.current;
    if (inView && !reduceRef.current) {
      video.preload = "auto";
      video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else if (!inView && !video.paused) {
      video.pause();
      setPlaying(false);
    }
  }, [inView, active]);

  function toggle() {
    const video = videoRef.current;
    if (video.paused) video.play().then(() => setPlaying(true)).catch(() => {});
    else {
      video.pause();
      setPlaying(false);
    }
  }

  function choose(index) {
    if (index === active) return;
    setPlaying(false);
    setActive(index);
  }

  return (
    <div className="reel">
      <figure className="reel__player">
        <video
          ref={videoRef}
          src={clip.src}
          poster={posterSrc(clip.poster)}
          muted
          loop
          playsInline
          preload="none"
          aria-label={clip.label}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        <figcaption className="visually-hidden">{clip.label}</figcaption>
        <button type="button" className="reel__toggle" onClick={toggle} aria-label={`${playing ? "Pause" : "Play"} video: ${clip.label}`}>
          {playing ? "Pause" : "Play"}
        </button>
      </figure>
      <ul className="reel__list" aria-label="Choose a clip">
        {clips.map((c, i) => (
          <li key={c.src}>
            <button type="button" className="reel__clip" aria-pressed={i === active} onClick={() => choose(i)}>
              <span className="reel__thumb">
                <Img id={c.poster} alt="" sizes="96px" />
              </span>
              <span className="reel__label">{c.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
