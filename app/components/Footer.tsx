import Link from "next/link";
import { contact, navItems } from '../content';
import Image from "next/image";

export function Footer() {
  return (
    <footer className="section footer" aria-label="Sidfot">
      <div className="container footer-grid">
        <div>
          <Link className="logo" aria-label="Ivy Technology" href="/">
            <Image
              src="/images/ivy-logo-white.svg"
              alt="Ivy Technology logotyp"
              width={48}
              height={28}
              sizes="48px"
              priority
            />
          </Link>
        </div>
        <div className="footer-links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="footer-contact">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </div>
    </footer>
  );
}
