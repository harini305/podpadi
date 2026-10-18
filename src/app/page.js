import Link from "next/link";
import Img from "@/components/Img";
import StayPlanner from "@/components/StayPlanner";
import site from "@/data/site";
import rooms from "@/data/rooms";
import { homeIntro, homeIntroMore, host, reviews, services } from "@/data/content";

export const metadata = {
  title: { absolute: `${site.name} — Private-pool villas in the rice fields of Ubud (demo)` },
  description: `${homeIntro} UI redesign demo.`,
};

const featuredReview = reviews.find((r) => r.name === "Shannon");

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-name">
        <div className="hero__media">
          <Img
            id="hero-main-pool"
            alt="The main pool's net loungers and palms at the edge of the green rice fields"
            sizes="100vw"
            priority
            position="50% 62%"
            data-hero-image=""
          />
        </div>
        <div className="hero__band wrap">
          <h1 className="hero__name" id="hero-name" data-wordmark="">
            {site.wordmark}
            <span className="visually-hidden">, {site.wordmarkSub}, Ubud</span>
          </h1>
          <div className="hero__aside" data-hero-copy="">
            <p className="hero__tagline">{site.tagline}</p>
            <p className="hero__summary">{site.summary}</p>
            <Link href="/book" className="button">
              Plan a stay
            </Link>
          </div>
        </div>
      </section>

      <section className="intro wrap" aria-label="About the property">
        <div className="intro__text" data-reveal>
          <h2 data-reveal-item>A hidden gem in Ubud</h2>
          <div className="intro__copy" data-reveal-item>
            <p>{homeIntro}</p>
            <p>{homeIntroMore}</p>
          </div>
          <Link href="/our-story" className="text-link" data-reveal-item>
            Our story
          </Link>
        </div>
        <figure className="intro__photo intro__photo--a">
          <Img id="gallery-hammock-bliss" alt="Two guests relaxing on the net hammock at the rice-field edge" sizes="(min-width: 960px) 56vw, 100vw" />
        </figure>
        <figure className="intro__photo intro__photo--b">
          <Img id="gallery-aerial-hammock" alt="Aerial view of the net hammock between the main pool and the rice field" sizes="(min-width: 960px) 40vw, 50vw" position="50% 35%" />
        </figure>
        <figure className="intro__photo intro__photo--c">
          <Img id="gallery-yoga-shala" alt="Guests meditating in the open timber yoga shala" sizes="(min-width: 960px) 56vw, 50vw" />
        </figure>
      </section>

      <section className="villas" aria-labelledby="villas-heading">
        <div className="wrap villas__head" data-reveal>
          <h2 id="villas-heading" data-reveal-item>
            Four ways to stay
          </h2>
          <div className="villas__intro" data-reveal-item>
            <p>Every villa has its own pool and en-suite bathroom. Choose one, or take the whole property.</p>
            <Link href="/stay" className="text-link">
              Compare all four villas
            </Link>
          </div>
        </div>
        <ul className="band">
          {rooms.map((room) => (
            <li key={room.slug} className="band__panel">
              <Link href={`/stay/${room.slug}`} className="band__link">
                <Img id={room.cover} alt="" sizes="(min-width: 960px) 40vw, 64vw" />
                <span className="band__label">
                  <span className="band__title">{room.label}</span>
                  <span className="band__teaser">{room.teaser}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="plan" aria-labelledby="plan-heading">
        <div className="wrap plan__grid">
          <div className="plan__intro" data-reveal>
            <h2 id="plan-heading" data-reveal-item>
              Plan a stay
            </h2>
            <p data-reveal-item>
              Pick your dates and the number of guests, then compare the villas that suit your group. This is a walkthrough of the
              booking experience: it shows no prices and reserves nothing.
            </p>
          </div>
          <StayPlanner />
        </div>
      </section>

      <section className="host wrap" aria-labelledby="host-heading">
        <figure className="host__portrait">
          <Img id="host-made" alt="Portrait of Made, host and manager of Podpadi" sizes="(min-width: 960px) 30vw, 72vw" />
        </figure>
        <div className="host__body" data-reveal>
          <h2 id="host-heading" data-reveal-item>
            Hosted by Made
          </h2>
          <p data-reveal-item>{host.body[0]}</p>
          <figure className="host__quote" data-reveal-item>
            <blockquote>
              <p>{featuredReview.text}</p>
            </blockquote>
            <figcaption>
              {featuredReview.name}, {featuredReview.date}, Airbnb review
            </figcaption>
          </figure>
          <Link href="/our-story#reviews" className="text-link" data-reveal-item>
            Read all {reviews.length} guest reviews
          </Link>
        </div>
      </section>

      <section className="visit" aria-labelledby="visit-heading">
        <div className="visit__media">
          <Img id="retreat-main-pool" alt="The long main pool lined with daybeds and palms" sizes="(min-width: 960px) 58vw, 100vw" />
        </div>
        <div className="visit__panel" data-reveal>
          <h2 id="visit-heading" data-reveal-item>
            Katik Lantang, Ubud
          </h2>
          <p data-reveal-item>{site.contact.distance}, among the rice fields of Singakerta.</p>
          <dl className="visit__facts" data-reveal-item>
            <div>
              <dt>Address</dt>
              <dd>{site.contact.address.join(" ")}</dd>
            </div>
            <div>
              <dt>Services</dt>
              <dd>{services.items.join(", ")}</dd>
            </div>
          </dl>
          <div className="visit__actions" data-reveal-item>
            <Link href="/book" className="button">
              Plan a stay
            </Link>
            <Link href="/experiences" className="text-link">
              Experiences
            </Link>
            <Link href="/contact" className="text-link">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
