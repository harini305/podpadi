"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import DateRangePicker from "@/components/DateRangePicker";
import GuestStepper from "@/components/GuestStepper";
import Img from "@/components/Img";
import rooms, { getRoom, listingFacts } from "@/data/rooms";
import {
  clearBooking,
  datesValid,
  emptyBooking,
  formatDate,
  loadBooking,
  makeReference,
  nightsBetween,
  saveBooking,
} from "@/lib/booking";

const STEPS = [
  { id: "dates", label: "Dates & guests" },
  { id: "villa", label: "Villa" },
  { id: "review", label: "Review" },
  { id: "done", label: "Demo confirmation" },
];

// The earliest step whose prerequisites are met, so refresh or a deep link never lands on a
// step that cannot render.
function allowedStep(requested, state) {
  if (requested === "done") return state.reference ? "done" : allowedStep("review", state);
  if (requested === "review") return datesValid(state) && state.villa ? "review" : allowedStep("villa", state);
  if (requested === "villa") return datesValid(state) ? "villa" : "dates";
  return "dates";
}

export default function BookingFlow() {
  const router = useRouter();
  const params = useSearchParams();
  const requested = params.get("step") || "dates";
  const villaParam = params.get("villa");
  const [state, setState] = useState(null);
  const [error, setError] = useState("");
  const headingRef = useRef(null);
  const firstRender = useRef(true);

  useEffect(() => {
    const stored = loadBooking();
    if (villaParam && getRoom(villaParam) && villaParam !== stored.villa) {
      stored.villa = villaParam;
      stored.reference = null;
    }
    saveBooking(stored);
    setState(stored);
  }, [villaParam]);

  const step = state ? allowedStep(requested, state) : null;

  useEffect(() => {
    if (!state || step === requested) return;
    const query = new URLSearchParams({ step });
    router.replace(`/book?${query}`, { scroll: false });
  }, [state, step, requested, router]);

  // Move focus to the step heading after each step change (not on first load).
  useEffect(() => {
    if (!step) return;
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus();
  }, [step]);

  if (!state) return <div className="booking booking--loading" aria-hidden="true" />;

  function update(patch) {
    setError("");
    const next = { ...state, ...patch, reference: null };
    setState(next);
    saveBooking(next);
  }

  function go(target) {
    setError("");
    router.push(`/book?step=${target}`);
  }

  const room = state.villa ? getRoom(state.villa) : null;
  const nights = nightsBetween(state.checkIn, state.checkOut);
  const stepIndex = STEPS.findIndex((s) => s.id === step);

  return (
    <div className="booking">
      <ol className="booking__progress" aria-label="Demo booking steps">
        {STEPS.map((s, i) => (
          <li key={s.id} className={i === stepIndex ? "is-current" : i < stepIndex ? "is-done" : undefined} aria-current={i === stepIndex ? "step" : undefined}>
            {s.label}
          </li>
        ))}
      </ol>

      {step === "dates" && (
        <section className="booking__step" aria-labelledby="step-heading">
          <h2 id="step-heading" ref={headingRef} tabIndex={-1}>
            When would you like to stay?
          </h2>
          <form
            className="planner planner--flat"
            noValidate
            onSubmit={(event) => {
              event.preventDefault();
              if (!datesValid(state)) {
                setError(state.checkIn ? "Choose a check-out date after your check-in date." : "Choose a check-in and a check-out date.");
                return;
              }
              go(state.villa ? "review" : "villa");
            }}
          >
            <DateRangePicker checkIn={state.checkIn} checkOut={state.checkOut} onChange={update} idPrefix="book" />
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
              <GuestStepper value={state.adults} onChange={(adults) => update({ adults })} id="book-guests" />
              {error && (
                <p className="field-error" role="alert">
                  {error}
                </p>
              )}
              <button type="submit" className="button button--wide">
                {state.villa ? "Continue to review" : "Choose a villa"}
              </button>
            </div>
          </form>
        </section>
      )}

      {step === "villa" && (
        <section className="booking__step" aria-labelledby="step-heading">
          <div className="booking__head">
            <h2 id="step-heading" ref={headingRef} tabIndex={-1}>
              Choose a villa
            </h2>
            <p>
              {formatDate(state.checkIn)} – {formatDate(state.checkOut)} · {nights} {nights === 1 ? "night" : "nights"} · {state.adults}{" "}
              {state.adults === 1 ? "adult" : "adults"}{" "}
              <button type="button" className="text-button" onClick={() => go("dates")}>
                Change
              </button>
            </p>
          </div>
          <ul className="villa-options">
            {rooms.map((r) => {
              const tooMany = state.adults > r.listing.maxAdults;
              const selected = state.villa === r.slug;
              return (
                <li key={r.slug} className={`villa-option${selected ? " is-selected" : ""}`}>
                  <div className="villa-option__media">
                    <Img id={r.cover} alt="" sizes="(min-width: 960px) 22vw, (min-width: 640px) 45vw, 100vw" />
                  </div>
                  <div className="villa-option__body">
                    <h3>{r.label}</h3>
                    <p>{r.teaser}</p>
                    <p className="villa-option__facts">As listed: {listingFacts(r).join(" · ")}</p>
                    {tooMany && (
                      <p className="villa-option__warn">
                        Listed for up to {r.listing.maxAdults} adults. Reduce guests to choose this villa.
                      </p>
                    )}
                    <div className="villa-option__actions">
                      <button
                        type="button"
                        className="button button--small"
                        disabled={tooMany}
                        onClick={() => {
                          update({ villa: r.slug });
                          go("review");
                        }}
                      >
                        {selected ? "Keep this villa" : "Choose this villa"}
                      </button>
                      <Link href={`/stay/${r.slug}`} className="text-link">
                        Villa details
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="booking__note">Every villa can be chosen in this demo. No real availability is checked.</p>
        </section>
      )}

      {step === "review" && room && (
        <section className="booking__step booking__review" aria-labelledby="step-heading">
          <div className="booking__review-media">
            <Img id={room.cover} alt={room.photos[0].alt} sizes="(min-width: 960px) 45vw, 100vw" />
          </div>
          <div className="booking__review-body">
            <h2 id="step-heading" ref={headingRef} tabIndex={-1}>
              Review your demo stay
            </h2>
            <dl className="review-list">
              <div>
                <dt>Villa</dt>
                <dd>
                  {room.label}{" "}
                  <button type="button" className="text-button" onClick={() => go("villa")}>
                    Change
                  </button>
                </dd>
              </div>
              <div>
                <dt>Dates</dt>
                <dd>
                  {formatDate(state.checkIn)} – {formatDate(state.checkOut)}{" "}
                  <button type="button" className="text-button" onClick={() => go("dates")}>
                    Change
                  </button>
                </dd>
              </div>
              <div>
                <dt>Nights</dt>
                <dd>{nights}</dd>
              </div>
              <div>
                <dt>Guests</dt>
                <dd>
                  {state.adults} {state.adults === 1 ? "adult" : "adults"}
                </dd>
              </div>
              <div>
                <dt>Rate</dt>
                <dd>Not published. The original site shows no prices, so none are shown here.</dd>
              </div>
            </dl>
            <button
              type="button"
              className="button button--wide"
              onClick={() => {
                const next = { ...state, reference: makeReference() };
                setState(next);
                saveBooking(next);
                go("done");
              }}
            >
              Create demo confirmation
            </button>
            <p className="booking__note">This creates a local demo screen only. Nothing is reserved or sent.</p>
          </div>
        </section>
      )}

      {step === "done" && room && (
        <section className="booking__step booking__done" aria-labelledby="step-heading">
          <h2 id="step-heading" ref={headingRef} tabIndex={-1}>
            Demo confirmation
          </h2>
          <p className="booking__done-lead">
            This is a demonstration only. No reservation has been made, nothing was sent to {room ? "Podpadi" : "the property"}, and these
            dates do not reflect real availability.
          </p>
          <dl className="review-list review-list--compact">
            <div>
              <dt>Demo reference</dt>
              <dd>{state.reference}</dd>
            </div>
            <div>
              <dt>Villa</dt>
              <dd>{room.label}</dd>
            </div>
            <div>
              <dt>Dates</dt>
              <dd>
                {formatDate(state.checkIn)} – {formatDate(state.checkOut)}, {nights} {nights === 1 ? "night" : "nights"}
              </dd>
            </div>
            <div>
              <dt>Guests</dt>
              <dd>
                {state.adults} {state.adults === 1 ? "adult" : "adults"}
              </dd>
            </div>
          </dl>
          <div className="booking__done-actions">
            <button
              type="button"
              className="button"
              onClick={() => {
                clearBooking();
                setState({ ...emptyBooking });
                router.push("/book?step=dates");
              }}
            >
              Start a new demo
            </button>
            <Link href="/stay" className="text-link">
              Back to the villas
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
