import Link from "next/link";
import { notFound } from "next/navigation";
import RoomPhotos from "@/components/RoomPhotos";
import rooms, { getRoom, listingFacts } from "@/data/rooms";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) return {};
  return { title: room.label, description: `${room.title}. ${room.teaser}` };
}

export default async function RoomPage({ params }) {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) notFound();

  const index = rooms.indexOf(room);
  const prev = rooms[(index - 1 + rooms.length) % rooms.length];
  const next = rooms[(index + 1) % rooms.length];

  return (
    <>
      <article className="room wrap">
        <Link href="/stay" className="back-link">
          <span aria-hidden="true">←</span> All villas
        </Link>
        <header className="room__head" data-reveal>
          <h1 data-reveal-item>{room.label}</h1>
          <p className="room__title" data-reveal-item>
            {room.title}
          </p>
        </header>

        <RoomPhotos photos={room.photos} label={room.label} />

        <div className="room__body">
          <div className="room__about" data-reveal>
            <h2 data-reveal-item>About this villa</h2>
            {room.description.length ? (
              room.description.map((para) => (
                <p key={para.slice(0, 24)} data-reveal-item>
                  {para}
                </p>
              ))
            ) : (
              <p data-reveal-item>{room.teaser}</p>
            )}
            <dl className="room__facts" data-reveal-item>
              <div>
                <dt>As listed</dt>
                <dd>{listingFacts(room).join(" · ")}</dd>
              </div>
              <div>
                <dt>Rate</dt>
                <dd>Not published</dd>
              </div>
            </dl>
            <p className="room__caveat" data-reveal-item>
              Listing figures come from the property’s previous booking system and are awaiting confirmation.
            </p>
            <div className="room__actions" data-reveal-item>
              <Link href={`/book?villa=${room.slug}`} className="button">
                Plan this villa
              </Link>
            </div>
          </div>

          <section className="amenities" aria-labelledby="amenities-heading">
            <h2 id="amenities-heading">Amenities</h2>
            <div className="amenities__groups">
              {Object.entries(room.amenities).map(([group, items]) => (
                <div key={group} className="amenities__group">
                  <h3>{group}</h3>
                  <ul>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>

      <nav className="room-pager wrap" aria-label="Other villas">
        <Link href={`/stay/${prev.slug}`} className="room-pager__link">
          <span className="room-pager__dir">
            <span aria-hidden="true">←</span> Previous villa
          </span>
          <span className="room-pager__name">{prev.label}</span>
        </Link>
        <Link href={`/stay/${next.slug}`} className="room-pager__link room-pager__link--next">
          <span className="room-pager__dir">
            Next villa <span aria-hidden="true">→</span>
          </span>
          <span className="room-pager__name">{next.label}</span>
        </Link>
      </nav>
    </>
  );
}
