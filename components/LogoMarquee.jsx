// LogoMarquee.jsx — real Banayoti clients pulled from banayoti.com testimonials.
// Each item shows a liquid-glass letter mark + the real brand name.
// We also load the actual client-logo images from the live site for the
// "trusted by" rail variant.

// Real clients sourced from your testimonials section on banayoti.com.
const CLIENTS = [
  { name: "Wista UAE",         tint: "#1a8cff" },
  { name: "GI Interiors",      tint: "#a855f7" },
  { name: "Excela Properties", tint: "#fcd34d" },
];

const CLIENT_LOGOS = [
  { src: "https://banayoti.com/wp-content/uploads/2025/05/Group-2.png",                                              alt: "Wista UAE" },
  { src: "https://banayoti.com/wp-content/uploads/2025/05/Group-3.png",                                              alt: "Design 2000" },
  { src: "https://banayoti.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-25-at-21.20.29_392fb4de-1.png",     alt: "Sip and Rise" },
  { src: "https://banayoti.com/wp-content/uploads/2025/05/Frame-2147226931-1.png",                                   alt: "INVICTUS" },
  { src: "https://banayoti.com/wp-content/uploads/2025/05/Frame-2147226932.png",                                     alt: "INVICTUS Trading" },
  { badge: "HHL", bg: "#cc1e1e", color: "#fff", alt: "Harvard Hearns Logistics" },
  { src: "https://luxxstairwellchandeliers.co.uk/wp-content/uploads/2026/02/image-23-1.png",                         alt: "Luxx Stairwell Chandeliers" },
  { src: "https://tribus.ae/wp-content/uploads/2025/07/Website-Logo.svg",                                            alt: "Tribus International" },
  { text: "Excela", color: "#1a8cff" },
];

function MarqueeItem({ name, tint }) {
  return (
    <span className="marquee-item">
      <span
        className="marquee-item__icon liquid-glass"
        style={{
          background:
            `radial-gradient(120% 120% at 30% 30%, ${tint}40, rgba(255,255,255,0.02) 70%)`,
        }}
        aria-hidden="true"
      >
        {name[0]}
      </span>
      <span className="marquee-item__name">{name}</span>
    </span>
  );
}

function MarqueeLogoItem({ src, alt, circle, bg }) {
  const [failed, setFailed] = React.useState(false);
  if (failed) return null;
  return (
    <span className="marquee-item marquee-item--logo">
      <span
        className={`marquee-item__logo-chip${circle ? " marquee-item__logo-chip--circle" : ""}`}
        style={circle && bg ? { background: bg } : undefined}
      >
        <img
          src={src}
          alt={alt || ""}
          loading="lazy"
          className="marquee-item__logo-img"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
        />
      </span>
    </span>
  );
}

function LogoMarquee() {
  // Use the real client logos from banayoti.com. Triple them for a smooth slide.
  const items = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <div className="marquee-wrap">
      <div className="marquee-inner">
        <div className="marquee-static">
          Trusted by brands that want<br />
          <strong>serious growth</strong>
        </div>
        <div className="marquee-track-wrap">
          <div className="marquee-track">
            {items.map((c, i) => (
              c.badge
                ? <span key={i} className="marquee-item marquee-item--badge" style={{ background: c.bg, color: c.color }} aria-label={c.alt}>{c.badge}</span>
                : c.text
                  ? <span key={i} className="marquee-item marquee-item--text" style={{ color: c.color }}>{c.text}</span>
                  : <MarqueeLogoItem key={i} src={c.src} alt={c.alt} circle={c.circle} bg={c.bg} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

window.LogoMarquee = LogoMarquee;
