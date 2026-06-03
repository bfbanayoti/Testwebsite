// HeroCard.jsx — the glass slab on the left with the headline + CTAs.

function ServiceIcon({ kind }) {
  const stroke = "currentColor";
  if (kind === "web") return (
    <svg viewBox="0 0 16 16" fill="none">
      <rect x="2" y="3" width="12" height="10" rx="1.5" stroke={stroke} strokeWidth="1.1" />
      <path d="M2 6h12" stroke={stroke} strokeWidth="1.1" />
      <circle cx="4" cy="4.5" r="0.4" fill={stroke} />
    </svg>
  );
  if (kind === "data") return (
    <svg viewBox="0 0 16 16" fill="none">
      <path d="M2 12V8m4 4V5m4 7v-3m4 3V3" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
  if (kind === "brand") return (
    <svg viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="5.5" stroke={stroke} strokeWidth="1.1" />
      <path d="M8 2.5v11M2.5 8h11" stroke={stroke} strokeWidth="0.8" />
    </svg>
  );
  return null;
}

function HeroCard({ headlineStyle = "serif" }) {
  return (
    <section className="hero-card" aria-labelledby="hero-title">
      <div className="eyebrow">
        <span className="eyebrow__dot"></span>
        <span>A Digital Consulting Studio</span>
        <span className="eyebrow__line"></span>
      </div>

      {headlineStyle === "serif" ? (
        <h1 id="hero-title">
          Turn your vision into a <em>digital</em> <span className="gilt">success story.</span>
        </h1>
      ) : (
        <h1 id="hero-title" style={{ fontFamily: "var(--sans)", fontWeight: 500, letterSpacing: "-0.035em" }}>
          Turn your vision into a digital <span className="gilt">success story.</span>
        </h1>
      )}

      <p className="hero-card__lede">
        Custom websites, data‑driven marketing, and digital branding,
        built end‑to‑end for ambitious teams who care how the details land.
      </p>

      <div className="hero-card__rule"></div>

      <div className="hero-card__services">
        <span className="hero-card__service"><ServiceIcon kind="web" /> Custom websites</span>
        <span className="hero-card__service"><ServiceIcon kind="data" /> Data‑driven marketing</span>
        <span className="hero-card__service"><ServiceIcon kind="brand" /> Branding &amp; design</span>
      </div>

      <div className="hero-card__cta-row">
        <a href="#contact" className="btn btn--primary">
          Book a discovery call
          <svg viewBox="0 0 14 14" fill="none">
            <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a href="#work" className="btn btn--ghost">
          See selected work
          <svg viewBox="0 0 14 14" fill="none">
            <path d="M4 10 10 4M5 4h5v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        </a>
      </div>

      <div className="hero-card__proof">
        <div className="hero-card__avatars" aria-hidden="true">
          <div></div><div></div><div></div><div></div>
        </div>
        <div className="hero-card__proof-text">
          <span className="hero-card__stars" aria-label="5 out of 5 stars">
            {[0,1,2,3,4].map(i => (
              <svg key={i} viewBox="0 0 12 12" fill="currentColor"><path d="M6 1l1.5 3.2 3.5.4-2.6 2.4.7 3.5L6 8.9 2.9 10.5l.7-3.5L1 4.6l3.5-.4L6 1z"/></svg>
            ))}
          </span>
          <strong>Rated 5.0</strong> &middot; 40+ launches across SaaS, retail &amp; hospitality
        </div>
      </div>
    </section>
  );
}

window.HeroCard = HeroCard;
