import Img from "@/components/Img";
import Reviews from "@/components/Reviews";
import { host, reviews, story } from "@/data/content";

export const metadata = {
  title: "Our Story",
  description: "Meet Made, host and manager of Podpadi, read the story behind the property and fourteen guest reviews.",
};

export default function OurStoryPage() {
  return (
    <>
      <section className="hello wrap" aria-labelledby="hello-heading">
        <figure className="hello__portrait">
          <Img id="host-made" alt="Portrait of Made, host and manager of Podpadi" sizes="(min-width: 960px) 40vw, 80vw" priority />
        </figure>
        <div className="hello__body" data-reveal>
          <h1 id="hello-heading" data-reveal-item>
            {host.heading}
          </h1>
          {host.body.map((para, i) => (
            <p key={i} data-reveal-item>
              {para}
            </p>
          ))}
          <p className="hello__sign" data-reveal-item>
            Made, host and manager
          </p>
        </div>
      </section>

      <section className="story" aria-labelledby="story-heading">
        <div className="wrap story__grid">
          <div className="story__body" data-reveal>
            <h2 id="story-heading" data-reveal-item>
              {story.heading}
            </h2>
            {story.body.map((para, i) => (
              <p key={i} data-reveal-item>
                {para}
              </p>
            ))}
          </div>
          <figure className="story__media">
            <Img id="property-sign" alt="The round Podpadi design spaces sign, with Balinese script, on the breeze-block entrance wall" sizes="(min-width: 960px) 44vw, 100vw" />
          </figure>
        </div>
      </section>

      <section className="guest-words wrap" id="reviews" aria-labelledby="reviews-heading">
        <div className="guest-words__head" data-reveal>
          <h2 id="reviews-heading" data-reveal-item>
            In our guests’ words
          </h2>
          <p data-reveal-item>
            Fourteen five-star Airbnb reviews from late 2024 and early 2025, transcribed word for word from screenshots on the original
            site. They are shown here as static text.
          </p>
        </div>
        <Reviews reviews={reviews} />
      </section>
    </>
  );
}
