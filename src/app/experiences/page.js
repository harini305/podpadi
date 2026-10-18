import Link from "next/link";
import Img from "@/components/Img";
import { experiences, seeDo, services } from "@/data/content";

export const metadata = {
  title: "Experiences",
  description: "Breakfast, daily housekeeping, the pool and lounge, and what is nearby: rice field walks, yoga, rafting and central Ubud 2.5 km away.",
};

// Photo tiles carry a verbatim caption; colour tiles carry the label and, where the original
// site had one, a short factual line.
function Tile({ item, className, priority }) {
  if (item.photo) {
    return (
      <li className={`mosaic__tile mosaic__tile--photo ${className}`} data-reveal-item>
        <Img id={item.photo} alt={item.alt} sizes="(min-width: 960px) 50vw, 100vw" priority={priority} />
        <div className="mosaic__label">
          <h3>{item.label}</h3>
          <p>{item.text}</p>
        </div>
      </li>
    );
  }
  return (
    <li className={`mosaic__tile mosaic__tile--plain ${className}`} data-reveal-item>
      <h3>{item.label}</h3>
      {item.text && <p>{item.text}</p>}
    </li>
  );
}

export default function ExperiencesPage() {
  const [breakfast, pool, ...stayRest] = experiences.stay;
  const [yoga, walks, ...aroundRest] = experiences.around;

  return (
    <>
      <section className="xp-head wrap" aria-labelledby="xp-heading" data-reveal>
        <h1 id="xp-heading" data-reveal-item>
          Mornings by the pool, days in Ubud
        </h1>
        <p data-reveal-item>What the property offers during your stay, and what lies a short walk or ride away.</p>
      </section>

      <section className="xp-group wrap" aria-labelledby="xp-stay">
        <div className="xp-group__head">
          <h2 id="xp-stay">At Podpadi</h2>
          <p>
            {services.note} <span className="xp-group__caveat">Which services carry a fee is still to be confirmed by the property.</span>
          </p>
        </div>
        <ul className="mosaic mosaic--stay" data-reveal>
          <Tile item={breakfast} className="mosaic__tile--lead" priority />
          <Tile item={pool} className="mosaic__tile--wide" />
          {stayRest.map((item) => (
            <Tile key={item.label} item={item} className="mosaic__tile--small" />
          ))}
        </ul>
      </section>

      <section className="xp-group xp-group--around" aria-labelledby="xp-around">
        <div className="wrap">
          <div className="xp-group__head">
            <h2 id="xp-around">Around Katik Lantang</h2>
            <p>{seeDo.note}</p>
          </div>
          <ul className="mosaic mosaic--around" data-reveal>
            <Tile item={walks} className="mosaic__tile--lead" />
            <Tile item={yoga} className="mosaic__tile--wide" />
            {aroundRest.map((item) => (
              <Tile key={item.label} item={item} className="mosaic__tile--small" />
            ))}
          </ul>
        </div>
      </section>

      <section className="cta-strip" aria-labelledby="xp-cta">
        <div className="wrap cta-strip__inner">
          <h2 id="xp-cta">Stay close to all of it</h2>
          <p>Katik Lantang sits about a 10-minute ride from central Ubud, among the rice fields.</p>
          <div className="xp-cta__actions">
            <Link href="/book" className="button">
              Plan a stay
            </Link>
            <Link href="/contact" className="text-link">
              Where to find us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
