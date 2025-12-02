import { useMemo } from 'react';
import { navItems } from '../content';

type Props = {
  activeId: string | null;
  menuOpen: boolean;
  onToggle: () => void;
  onNavClick: () => void;
};

export function HeaderNav({ activeId, menuOpen, onToggle, onNavClick }: Props) {
  const items = useMemo(() => navItems, []);

  return (
    <header className="site-header" aria-label="Sidhuvud">
      <div className="container header-inner">
        <div className="logo" aria-label="Ivy Technology">
          Ivy Technology
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="huvudmeny"
          onClick={onToggle}
        >
          Meny
          <span aria-hidden="true">{menuOpen ? "–" : "+"}</span>
        </button>
        <nav aria-label="Huvudmeny">
          <ul id="huvudmeny" className={`nav-list ${menuOpen ? " open" : ""}`}>
            {items.map((item) => (
              <li key={item.id}>
                <a
                  className={activeId === item.id ? "active" : ""}
                  href={`#${item.id}`}
                  aria-current={activeId === item.id ? "page" : undefined}
                  onClick={onNavClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
