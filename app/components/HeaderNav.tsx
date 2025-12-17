import Link from "next/link";
import { navItems } from "../content";
import Image from "next/image";

export function HeaderNav() {
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
        <nav aria-label="Huvudmeny">
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

          <details className="nav-disclosure nav-disclosure--mobile">
            <summary className="button ghost menu-toggle">
              Meny <span aria-hidden="true">+</span>
            </summary>
            <ul id="huvudmeny" className="nav-list nav-list--mobile">
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
          </details>
        </nav>
      </div>
    </header>
  );
}
