"use client";

import { MAX_GUESTS } from "@/lib/booking";

export default function GuestStepper({ value, onChange, id = "guests" }) {
  return (
    <div className="stepper" role="group" aria-labelledby={`${id}-label`}>
      <span className="stepper__label" id={`${id}-label`}>
        Adults
      </span>
      <div className="stepper__controls">
        <button type="button" onClick={() => onChange(Math.max(1, value - 1))} disabled={value <= 1} aria-label="Remove one adult">
          <span aria-hidden="true">−</span>
        </button>
        <output aria-live="polite" aria-label={`${value} ${value === 1 ? "adult" : "adults"}`}>{value}</output>
        <button type="button" onClick={() => onChange(Math.min(MAX_GUESTS, value + 1))} disabled={value >= MAX_GUESTS} aria-label="Add one adult">
          <span aria-hidden="true">+</span>
        </button>
      </div>
    </div>
  );
}
