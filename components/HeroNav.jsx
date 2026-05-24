// HeroNav.jsx — liquid-glass top nav with HHL-inspired pill form.
// Responsive: at narrow widths the inline nav items collapse into a
// hamburger button that toggles a dropdown menu.

function ChevronDown() {
  return (
    <svg viewBox="0 0 12 12" fill="none">
      <path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HamburgerIcon({ open }) {
  return (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
      {open ? (
        <React.Fragment>
          <path d="M4 4 L14 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M14 4 L4 14"  stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <path d="M3 6 H15"  stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M3 12 H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </React.Fragment>
      )}
    </svg>
  );
}

function HeroNav({ current = "Home", onSelect }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const items = [
    { label: "Home",       href: "#",          chevron: false },
    { label: "About Us",   href: "#about",     chevron: false },
    { label: "Services",   href: "#services",  chevron: false },
    { label: "Portfolio",  href: "#portfolio",   chevron: false },
  ];

  const handleItem = (label) => {
    setMenuOpen(false);
    onSelect && onSelect(label);
  };

  return (
    <React.Fragment>

    {/* ── UAE Allegiance Banner ── */}
    <div className="uae-banner" role="note" aria-label="Fakhr Bi AL Emarat — Pride in the UAE">
      <span className="uae-banner__flag" aria-hidden="true">
        <svg className="uae-flag-svg" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="30" height="20" rx="2" fill="#fff"/>
          <rect width="9" height="20" fill="#EF3340"/>
          <rect x="9" y="0" width="21" height="6.67" fill="#00732F"/>
          <rect x="9" y="6.67" width="21" height="6.66" fill="#fff"/>
          <rect x="9" y="13.33" width="21" height="6.67" fill="#1a1a1a"/>
        </svg>
      </span>
      <span className="uae-banner__text">Fakhr Bi AL Emarat</span>
      <span className="uae-banner__sep" aria-hidden="true">·</span>
      <span className="uae-banner__arabic" dir="rtl" lang="ar">فخر بالإمارات</span>
    </div>

    <div className="nav-shell">
      <nav className="navbar" aria-label="Primary">
        <a
          href="#"
          className="navbar__logo"
          aria-label="Banayoti Consulting home"
          onClick={(e) => { e.preventDefault(); handleItem("Home"); }}
        >
          <span className="navbar__logo-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M6 4h7.5a4.5 4.5 0 0 1 2.6 8.18A4.8 4.8 0 0 1 13.8 21H6V4z" fill="white" />
              <path d="M9 7.4h4.3a1.9 1.9 0 1 1 0 3.8H9V7.4zm0 6.4h4.8a2 2 0 1 1 0 4H9v-4z" fill="#1a8cff" />
            </svg>
          </span>
          <span className="navbar__logo-text">
            <span className="navbar__logo-name">Banayoti</span>
            <span className="navbar__logo-sub">Consulting</span>
          </span>
        </a>

        <div className="navbar__items">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              className={`navbar__item${current === it.label ? " is-active" : ""}`}
              onClick={(e) => { e.preventDefault(); handleItem(it.label); }}
            >
              {it.label}
              {it.chevron ? <ChevronDown /> : null}
            </a>
          ))}
        </div>

        <div className="navbar__right">
          <button
            type="button"
            className={`navbar__menu-btn${menuOpen ? " is-open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((s) => !s)}
          >
            <HamburgerIcon open={menuOpen} />
          </button>
          <a
            href="#contact"
            className="hero-secondary"
            onClick={(e) => { e.preventDefault(); handleItem("Contact Us"); }}
          >
            <span className="hero-secondary__label">Let&rsquo;s Talk</span>
            <svg viewBox="0 0 14 14" fill="none">
              <path d="M3.5 10.5 10.5 3.5 M5.5 3.5 H10.5 V8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Mobile dropdown — only ever visible at narrow widths */}
      <div className={`mobile-menu${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen}>
        <ul className="mobile-menu__list">
          {items.map((it) => (
            <li key={it.label}>
              <a
                href={it.href}
                className={`mobile-menu__item${current === it.label ? " is-active" : ""}`}
                onClick={(e) => { e.preventDefault(); handleItem(it.label); }}
              >
                {it.label}
                <svg viewBox="0 0 14 14" fill="none">
                  <path d="M4 10 10 4M5 4h5v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    </React.Fragment>
  );
}

window.HeroNav = HeroNav;
