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

// Live client-logo images from banayoti.com — loaded from your site directly
// so the rail always reflects what you publish there.
const CLIENT_LOGOS = [
  { src: "https://banayoti.com/wp-content/uploads/2025/05/Group-2.png",                                              alt: "Banayoti client" },
  { src: "https://banayoti.com/wp-content/uploads/2025/05/Group-3.png",                                              alt: "Banayoti client" },
  { src: "https://banayoti.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-25-at-21.20.29_392fb4de-1.png",     alt: "Banayoti client" },
  { src: "https://banayoti.com/wp-content/uploads/2025/05/Frame-2147226931-1.png",                                   alt: "Banayoti client" },
  { src: "https://banayoti.com/wp-content/uploads/2025/05/Frame-2147226932.png",                                     alt: "Banayoti client" },
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

function MarqueeLogoItem({ src, alt }) {
  const [failed, setFailed] = React.useState(false);
  if (failed) return null;
  return (
    <span className="marquee-item marquee-item--logo">
      <span className="marquee-item__logo-chip">
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
  const items = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

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
              <MarqueeLogoItem key={i} src={c.src} alt={c.alt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

window.LogoMarquee = LogoMarquee;
