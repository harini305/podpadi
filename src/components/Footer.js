import Link from "next/link";
import site from "@/data/site";

// Compact two-row footer: name and links, then one line of address and the demo notice.
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__top">
        <Link href="/" className="site-footer__wordmark" aria-label={`${site.name} — home`}>
          {site.wordmark}
        </Link>
        <nav aria-label="Footer" className="site-footer__nav">
          <ul>
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/book">Plan a stay</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="wrap site-footer__bottom">
        <address>
          © {new Date().getFullYear()} {site.fullName} · {site.contact.address.join(" ")}
        </address>
        <p>{site.demoNotice}</p>
      </div>
    </footer>
  );
}
