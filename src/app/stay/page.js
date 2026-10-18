import Link from "next/link";
import Img from "@/components/Img";
import rooms, { listingFacts, propertyDescription } from "@/data/rooms";

export const metadata = {
  title: "Stay",
  description: "Four one-bedroom villas and a three-bedroom family villa in Ubud, each with its own private pool. Compare the four ways to stay.",
};

export default function StayPage() {
  return (
    <>
      <section className="page-head wrap" aria-labelledby="stay-heading">
        <div className="page-head__text" data-reveal>
          <h1 id="stay-heading" data-reveal-item>
            Villas with their own pools
          </h1>
          <p className="lead" data-reveal-item>
            {propertyDescription}
          </p>
          <ul className="page-head__facts" data-reveal-item>
            <li>4 one-bedroom villas</li>
            <li>1 three-bedroom family villa</li>
            <li>Up to 14 guests</li>
          </ul>
        </div>
        <figure className="page-head__media">
          <Img id="gallery-aerial-pool" alt="Aerial view of the main pool and palms running alongside the rice field" sizes="(min-width: 960px) 50vw, 100vw" priority position="50% 55%" />
        </figure>
      </section>

      <section className="stay-list wrap" aria-label="The four villas">
        {rooms.map((room, i) => (
          <article key={room.slug} className={`stay-row${i % 2 ? " stay-row--flip" : ""}`} data-reveal>
            <Link href={`/stay/${room.slug}`} className="stay-row__media" tabIndex={-1} aria-hidden="true">
              <Img id={room.cover} alt="" sizes="(min-width: 960px) 56vw, 100vw" />
            </Link>
            <div className="stay-row__body">
              <h2 data-reveal-item>
                <Link href={`/stay/${room.slug}`}>{room.label}</Link>
              </h2>
              <p className="stay-row__title" data-reveal-item>
                {room.title}
              </p>
              <p className="stay-row__facts" data-reveal-item>
                As listed: {listingFacts(room).join(" · ")}
              </p>
              <div className="stay-row__actions" data-reveal-item>
                <Link href={`/stay/${room.slug}`} className="button button--ghost">
                  View villa
                </Link>
                <Link href={`/book?villa=${room.slug}`} className="text-link">
                  Plan this villa
                </Link>
              </div>
            </div>
          </article>
        ))}
        <p className="stay-list__note">
          Guest numbers, bedrooms and sizes are shown as listed on the property’s previous booking system and are awaiting confirmation.
        </p>
      </section>

      <section className="cta-strip" aria-labelledby="stay-cta">
        <div className="wrap cta-strip__inner">
          <h2 id="stay-cta">Not sure which villa suits you?</h2>
          <p>Choose your dates and guests first, and the demo shows which villas are listed for your group.</p>
          <Link href="/book" className="button button--light">
            Plan a stay
          </Link>
        </div>
      </section>
    </>
  );
}
