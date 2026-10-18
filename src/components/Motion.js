"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*
 * One motion layer for the whole site, re-initialised per route and fully reverted on
 * navigation so triggers never duplicate. Content is visible in the markup; GSAP only
 * animates *from* an offset, so nothing stays hidden if scripts fail. Hooks:
 *   [data-reveal]        group whose direct children with [data-reveal-item] stagger in
 *   [data-hero-image]    slow settle-in scale on load
 *   [data-wordmark]      scroll-linked scale as the first screen leaves (signature move)
 *   [data-drift]         gentle vertical drift on a photograph while it crosses the viewport
 */
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray("[data-hero-image]").forEach((img) => {
        gsap.fromTo(img, { scale: 1.06 }, { scale: 1, duration: 2.4, ease: "power2.out" });
      });

      gsap.utils.toArray("[data-hero-copy]").forEach((el) => {
        gsap.from(el.children, { y: 18, autoAlpha: 0, duration: 0.9, ease: "power3.out", stagger: 0.08, delay: 0.15 });
      });

      gsap.utils.toArray("[data-wordmark]").forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 1 },
          {
            scale: 0.94,
            transformOrigin: "0% 100%",
            ease: "none",
            scrollTrigger: { trigger: el, start: "bottom bottom", end: "bottom top", scrub: true },
          }
        );
      });

      // Groups already on screen are left alone (no flash after hydration). Groups below the
      // fold are hidden and played in by a plain tween on first entry, so a later
      // ScrollTrigger.refresh() (images loading) can never rewind them to hidden.
      gsap.utils.toArray("[data-reveal]").forEach((group) => {
        const items = group.querySelectorAll("[data-reveal-item]");
        if (!items.length || group.getBoundingClientRect().top < window.innerHeight * 0.92) return;
        gsap.set(items, { y: 26, autoAlpha: 0 });
        ScrollTrigger.create({
          trigger: group,
          start: "top 88%",
          once: true,
          onEnter: () =>
            gsap.to(items, { y: 0, autoAlpha: 1, duration: 0.85, ease: "power3.out", stagger: 0.08, overwrite: true }),
        });
      });

      gsap.utils.toArray("[data-drift]").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -4 },
          {
            yPercent: 4,
            ease: "none",
            scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      });
    });

    // Images below the fold change layout height as they decode.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const timer = window.setTimeout(refresh, 600);

    return () => {
      window.removeEventListener("load", refresh);
      window.clearTimeout(timer);
      mm.revert();
    };
  }, [pathname]);

  return null;
}
