"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DateRangePicker from "@/components/DateRangePicker";
import GuestStepper from "@/components/GuestStepper";
import { datesValid, formatDate, loadBooking, nightsBetween, saveBooking } from "@/lib/booking";

// Dates + guests → opens the internal demo booking at the villa step.
export default function StayPlanner() {
  const router = useRouter();
  const [state, setState] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => setState(loadBooking()), []);

  if (!state) return <div className="planner planner--loading" aria-hidden="true" />;

  const nights = nightsBetween(state.checkIn, state.checkOut);

  function update(patch) {
    setError("");
    setState((prev) => ({ ...prev, ...patch, reference: null }));
  }

  function onSubmit(event) {
    event.preventDefault();
    if (!datesValid(state)) {
      setError(state.checkIn ? "Choose a check-out date after your check-in date." : "Choose a check-in and a check-out date.");
      return;
    }
    saveBooking(state);
    router.push("/book?step=villa");
  }

  return (
    <form className="planner" onSubmit={onSubmit} noValidate aria-describedby="planner-note">
      <DateRangePicker checkIn={state.checkIn} checkOut={state.checkOut} onChange={update} idPrefix="planner" />
      <div className="planner__side">
        <dl className="planner__summary">
          <div>
            <dt>Check-in</dt>
            <dd>{formatDate(state.checkIn)}</dd>
          </div>
          <div>
            <dt>Check-out</dt>
            <dd>{formatDate(state.checkOut)}</dd>
          </div>
          <div>
            <dt>Nights</dt>
            <dd>{nights || "—"}</dd>
          </div>
        </dl>
        <GuestStepper value={state.adults} onChange={(adults) => update({ adults })} id="planner-guests" />
        {error && (
          <p className="field-error" role="alert">
            {error}
          </p>
        )}
        <button type="submit" className="button button--wide">
          See the villas
        </button>
        <p className="planner__note" id="planner-note">
          Demo only: no live availability, no prices, nothing is reserved.
        </p>
      </div>
    </form>
  );
}
