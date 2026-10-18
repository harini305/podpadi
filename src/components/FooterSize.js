"use client";

import { useEffect } from "react";

// Publishes the footer's height as --footer-h so a closing section can size itself to fill
// exactly the screen space left above the footer.
export default function FooterSize() {
  useEffect(() => {
    const footer = document.querySelector(".site-footer");
    if (!footer) return;
    const root = document.documentElement;
    const update = () => root.style.setProperty("--footer-h", `${Math.ceil(footer.getBoundingClientRect().height)}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);
  return null;
}
