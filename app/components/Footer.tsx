import { navItems } from '../content';

export function Footer() {
  return (
    <footer className="section footer" aria-label="Sidfot">
      <div className="container footer-grid">
        <div>
          <div className="logo">Ivy Technology</div>
          <p>Göteborg, Sverige</p>
        </div>
        <div className="footer-links">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="footer-contact">
          <a href="mailto:hello@ivytech.se">hello@ivytech.se</a>
        </div>
      </div>
    </footer>
  );
}
