"use client";

import { useState } from "react";
import Img from "@/components/Img";
import Lightbox from "@/components/Lightbox";

// Room detail photo set: one large lead photo, the rest as a row; any photo opens the viewer.
export default function RoomPhotos({ photos, label }) {
  const [open, setOpen] = useState(null);
  const [lead, ...rest] = photos;

  return (
    <div className="room-photos">
      <button type="button" className="room-photos__lead" onClick={() => setOpen(0)} aria-label={`Open photo 1 of ${photos.length}: ${lead.alt}`}>
        <Img id={lead.id} alt={lead.alt} sizes="(min-width: 960px) 62vw, 100vw" priority />
      </button>
      <ul className={`room-photos__rest room-photos__rest--${rest.length}`}>
        {rest.map((photo, i) => (
          <li key={photo.id}>
            <button type="button" onClick={() => setOpen(i + 1)} aria-label={`Open photo ${i + 2} of ${photos.length}: ${photo.alt}`}>
              <Img id={photo.id} alt={photo.alt} sizes="(min-width: 960px) 16vw, 33vw" />
            </button>
          </li>
        ))}
      </ul>
      {open !== null && <Lightbox items={photos} index={open} onIndex={setOpen} onClose={() => setOpen(null)} label={`${label} photos`} />}
    </div>
  );
}
