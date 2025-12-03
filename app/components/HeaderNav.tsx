"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { navItems } from "../content";

type Props = {
  onContactClick?: () => void;
};

export function HeaderNav({ onContactClick }: Props) {
  const items = useMemo(() => navItems, []);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="site-header" aria-label="Sidhuvud">
      <div className="container header-inner">
        <Link className="logo" aria-label="Ivy Technology" href="/">
          Ivy Technology
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="huvudmeny"
          onClick={() => setMenuOpen((open) => !open)}
        >
          Meny
          <span aria-hidden="true">{menuOpen ? "–" : "+"}</span>
        </button>
        <nav aria-label="Huvudmeny">
          <ul id="huvudmeny" className={`nav-list ${menuOpen ? " open" : ""}`}>
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  className={pathname === item.href ? "active" : ""}
                  aria-current={pathname === item.href ? "page" : undefined}
                  href={item.href}
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="nav-contact">
              <a
                className="button ghost contact-nav-button"
                href="#kontakt"
                onClick={() => {
                  handleNavClick();
                  onContactClick?.();
                }}
              >
                Kontakta oss
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
