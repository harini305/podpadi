"use client";

import { useState } from "react";
import Img from "@/components/Img";
import Lightbox from "@/components/Lightbox";

// Composed grid of the nine gallery photographs; each opens the internal lightbox.
export default function GalleryGrid({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <>
      <ul className="gallery-grid" data-reveal>
        {items.map((item, i) => (
          <li key={item.id} className={`gallery-grid__item gallery-grid__item--${i + 1}`} data-reveal-item>
            <button type="button" className="gallery-grid__open" onClick={() => setOpen(i)} aria-label={`Open photo ${i + 1} of ${items.length}: ${item.caption || item.alt}`}>
              <Img id={item.id} alt={item.alt} sizes="(min-width: 960px) 40vw, (min-width: 640px) 50vw, 100vw" />
            </button>
            {item.caption && <p className="gallery-grid__caption">{item.caption}</p>}
          </li>
        ))}
      </ul>
      {open !== null && <Lightbox items={items} index={open} onIndex={setOpen} onClose={() => setOpen(null)} label="Gallery" />}
    </>
  );
}
