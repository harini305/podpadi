"use client";

import { useState } from "react";

// All fourteen transcribed reviews, one at a time: a name index on wide screens, previous /
// next everywhere. Static text supplied with the demo; no Airbnb link.
export default function Reviews({ reviews }) {
  const [index, setIndex] = useState(0);
  const review = reviews[index];
  const total = reviews.length;

  return (
    <div className="reviews">
      <ul className="reviews__index" aria-label="Choose a review">
        {reviews.map((r, i) => (
          <li key={r.name}>
            <button type="button" aria-pressed={i === index} onClick={() => setIndex(i)}>
              {r.name}
              <span>{r.date}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="reviews__panel">
        <figure aria-live="polite" key={review.name}>
          <blockquote>
            {review.text.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </blockquote>
          <figcaption>
            <strong>{review.name}</strong>
            <span>
              {review.date} · five stars on Airbnb{review.note ? ` · ${review.note}` : ""}
            </span>
          </figcaption>
        </figure>
        <div className="reviews__controls">
          <button type="button" onClick={() => setIndex((index - 1 + total) % total)} aria-label="Previous review">
            <span aria-hidden="true">←</span>
          </button>
          <span>
            {index + 1} of {total}
          </span>
          <button type="button" onClick={() => setIndex((index + 1) % total)} aria-label="Next review">
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
