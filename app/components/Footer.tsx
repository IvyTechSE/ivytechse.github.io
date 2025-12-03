import Link from "next/link";
import { navItems } from '../content';

export function Footer() {
  return (
    <footer className="section footer" aria-label="Sidfot">
      <div className="container footer-grid">
        <div>
          <Link className="logo" href="/" aria-label="Ivy Technology">
            Ivy Technology
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
          <a href="mailto:hello@ivytech.se">hello@ivytech.se</a>
        </div>
      </div>
    </footer>
  );
}
