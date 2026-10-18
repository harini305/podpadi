import Link from "next/link";
import Img from "@/components/Img";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="not-found wrap" aria-labelledby="nf-heading">
      <div className="not-found__text">
        <h1 id="nf-heading">This page is not here</h1>
        <p>The address may be from the old site. Everything now lives under a few simple pages.</p>
        <div className="not-found__links">
          <Link href="/" className="button">
            Home
          </Link>
          <Link href="/stay" className="text-link">
            See the villas
          </Link>
        </div>
      </div>
      <figure className="not-found__media">
        <Img id="gallery-yoga-space" alt="A guest in a seated yoga pose under a timber frame facing the rice fields" sizes="(min-width: 960px) 40vw, 100vw" />
      </figure>
    </section>
  );
}
