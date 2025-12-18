"use client";

import Link from "next/link";
import { navItems } from "../content";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type MouseEvent,
} from "react";

export function HeaderNav() {
  const menuId = useId();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const handleMobileNavClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      if (target.closest("a")) closeMobileMenu();
    },
    [closeMobileMenu],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (!mobileMenuOpen) return;
      closeMobileMenu();
      menuButtonRef.current?.focus();
    };

    const onPointerDown = (event: MouseEvent | PointerEvent) => {
      if (!mobileMenuOpen) return;
      const target = event.target as Node | null;
      if (!target) return;
      if (navRef.current?.contains(target)) return;
      closeMobileMenu();
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [closeMobileMenu, mobileMenuOpen]);

  return (
    <header className="site-header" aria-label="Sidhuvud">
      <div className="container header-inner">
        <Link className="logo" aria-label="Ivy Technology" href="/">
          <Image
            src="/images/ivy-logo-black.svg"
            alt="Ivy Technology logotyp"
            width={48}
            height={28}
            sizes="48px"
            priority
          />
        </Link>
        <nav
          ref={navRef}
          className={`nav-top ${mobileMenuOpen ? "opened" : "closed"}`}
          aria-label="Huvudmeny"
        >
          <ul className="nav-list nav-list--desktop">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li className="nav-contact">
              <a className="button primary contact-nav-button" href="#kontakt">
                Kontakta oss
              </a>
            </li>
          </ul>

          <button
            ref={menuButtonRef}
            type="button"
            className="button ghost menu-toggle"
            aria-haspopup="true"
            aria-expanded={mobileMenuOpen}
            aria-controls={menuId}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            Meny <span aria-hidden="true">{mobileMenuOpen ? "−" : "+"}</span>
          </button>
          <ul
            id={menuId}
            className="nav-list nav-list--mobile"
            hidden={!mobileMenuOpen}
            onClick={handleMobileNavClick}
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li className="nav-contact">
              <a className="button primary contact-nav-button" href="#kontakt">
                Kontakta oss
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
