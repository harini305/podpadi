"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import site from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);
  const overlay = pathname === "/";

  // Close the menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    document.documentElement.classList.add("menu-open");
    const panel = panelRef.current;
    panel?.querySelector("a")?.focus();

    function onKey(event) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const focusables = [toggleRef.current, ...panel.querySelectorAll("a")];
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.classList.remove("menu-open");
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isCurrent = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={`site-header${overlay ? " is-overlay" : ""}${open ? " is-open" : ""}`}>
      <div className="site-header__bar">
        <Link href="/" className="wordmark" aria-label={`${site.name} — home`}>
          {site.wordmark}
        </Link>
        <nav className="site-nav" aria-label="Main">
          <ul>
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/book" className="button button--small site-header__book">
          Plan a stay
        </Link>
        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        className="mobile-menu"
        hidden={!open}
        onClick={(event) => {
          if (event.target.closest("a")) setOpen(false);
        }}
      >
        <nav aria-label="Mobile">
          <ul>
            <li>
              <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>Home</Link>
            </li>
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/book" aria-current={isCurrent("/book") ? "page" : undefined}>Plan a stay</Link>
            </li>
          </ul>
        </nav>
        <p className="mobile-menu__note">{site.contact.address.join(" ")}</p>
      </div>
    </header>
  );
}
