"use client";

import { useEffect, useRef } from "react";
import Img from "@/components/Img";

// Modal viewer over a list of local images: arrows, Esc, focus kept inside, caption + counter.
export default function Lightbox({ items, index, onIndex, onClose, label = "Photo viewer" }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const item = items[index];
  const total = items.length;

  useEffect(() => {
    const opener = document.activeElement;
    document.documentElement.classList.add("menu-open");
    closeRef.current?.focus();
    return () => {
      document.documentElement.classList.remove("menu-open");
      if (opener instanceof HTMLElement) opener.focus();
    };
  }, []);

  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") onClose();
      else if (event.key === "ArrowRight") onIndex((index + 1) % total);
      else if (event.key === "ArrowLeft") onIndex((index - 1 + total) % total);
      else if (event.key === "Tab") {
        const focusables = dialogRef.current?.querySelectorAll("button");
        if (!focusables?.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index, total, onIndex, onClose]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={label} ref={dialogRef}>
      <button type="button" className="lightbox__backdrop" tabIndex={-1} aria-hidden="true" onClick={onClose} />
      <figure className="lightbox__figure">
        <Img key={item.id} id={item.id} alt={item.alt} sizes="92vw" className="lightbox__img" priority />
        <figcaption>
          <span className="lightbox__count">
            {index + 1} / {total}
          </span>
          {item.caption && <span>{item.caption}</span>}
        </figcaption>
      </figure>
      <div className="lightbox__controls">
        <button type="button" onClick={() => onIndex((index - 1 + total) % total)} aria-label="Previous photo">
          <span aria-hidden="true">←</span> Previous
        </button>
        <button type="button" onClick={() => onIndex((index + 1) % total)} aria-label="Next photo">
          Next <span aria-hidden="true">→</span>
        </button>
        <button type="button" ref={closeRef} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
