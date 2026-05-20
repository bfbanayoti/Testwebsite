// GlassNav.jsx — iOS 26 liquid-glass navigation pill.

function BrandMark() {
  // Original mark reinterpreted: a soft "B" silhouette inside a rounded square.
  return (
    <a href="#" className="brand" aria-label="Banayoti Consulting home">
      <span className="brand__mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M6 4h7.5a4.5 4.5 0 0 1 2.6 8.18A4.8 4.8 0 0 1 13.8 21H6V4z"
            fill="white"
          />
          <path
            d="M9 7.4h4.3a1.9 1.9 0 1 1 0 3.8H9V7.4zm0 6.4h4.8a2 2 0 1 1 0 4H9v-4z"
            fill="#1a8cff"
          />
        </svg>
      </span>
      <span>
        <span className="brand__name">Banayoti</span>
        <span className="brand__sub" style={{ display: "block" }}>Consulting</span>
      </span>
    </a>
  );
}

function GlassNav() {
  const links = [
    { label: "Work",     href: "#work",     active: false },
    { label: "Services", href: "#services", active: false },
    { label: "Approach", href: "#approach", active: false },
    { label: "Studio",   href: "#studio",   active: false },
    { label: "Journal",  href: "#journal",  active: false },
  ];

  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Primary">
        <BrandMark />
        <ul className="nav__links">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className={l.active ? "is-active" : ""}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav__cta">
          Start a project
          <svg viewBox="0 0 12 12" fill="none">
            <path d="M3 9 L9 3 M5 3 H9 V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </a>
      </nav>
    </header>
  );
}

window.GlassNav = GlassNav;
