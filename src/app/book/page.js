import { Suspense } from "react";
import BookingFlow from "@/components/BookingFlow";

export const metadata = {
  title: "Plan a stay",
  description: "A demonstration of the Podpadi booking experience: choose dates, guests and a villa. Nothing is reserved.",
};

export default function BookPage() {
  return (
    <section className="book wrap" aria-labelledby="book-heading">
      <div className="book__head">
        <h1 id="book-heading">Plan a stay</h1>
        <p>
          A walkthrough of the booking experience. It uses no real availability or prices, and the last step is a demo confirmation, not a
          reservation.
        </p>
      </div>
      <Suspense fallback={<div className="booking booking--loading" aria-hidden="true" />}>
        <BookingFlow />
      </Suspense>
    </section>
  );
}
