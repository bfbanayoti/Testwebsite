// ServicesPage.jsx — Light-theme, animated service icons, inline why-choose.

const SL_WHY = [
  { n: "01", title: "Customized Solutions, Not Templates",        body: "Every engagement starts from your business and your goals, not from a stock theme." },
  { n: "02", title: "Transparent Pricing & Timelines",            body: "Clear scope, clear cost, clear dates. You always know what's happening and when." },
  { n: "03", title: "Expert Team with Cross-Industry Experience", body: "Hospitality, real estate, interiors, retail: pattern recognition we bring to your project." },
  { n: "04", title: "Long-Term Partnership Approach",             body: "We measure success by what happens after launch, not just on launch day." },
];

/* ── Animated SVG icons ─────────────────────────────── */

function IconWebsite({ color }) {
  return (
    <svg viewBox="0 0 280 248" className="sl-icon" aria-hidden="true">

      {/* ── Wireframe globe (top-right, background layer) ── */}
      <g transform="translate(206,72)">
        {/* Sphere */}
        <circle r="62" fill={color} fillOpacity="0.06" stroke={color} strokeWidth="1" strokeOpacity="0.22"/>
        {/* Latitude rings */}
        <ellipse rx="62" ry="12"  fill="none" stroke={color} strokeWidth="0.8" strokeOpacity="0.18"/>
        <ellipse rx="52" ry="10" cy="-24" fill="none" stroke={color} strokeWidth="0.7" strokeOpacity="0.13"/>
        <ellipse rx="52" ry="10" cy="24"  fill="none" stroke={color} strokeWidth="0.7" strokeOpacity="0.13"/>
        <ellipse rx="32" ry="6"  cy="-46" fill="none" stroke={color} strokeWidth="0.6" strokeOpacity="0.09"/>
        <ellipse rx="32" ry="6"  cy="46"  fill="none" stroke={color} strokeWidth="0.6" strokeOpacity="0.09"/>
        {/* Rotating longitude lines */}
        <g>
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="16s" repeatCount="indefinite"/>
          <ellipse rx="9"  ry="62" fill="none" stroke={color} strokeWidth="0.8" strokeOpacity="0.28"/>
          <ellipse rx="48" ry="62" fill="none" stroke={color} strokeWidth="0.6" strokeOpacity="0.18"/>
        </g>
        {/* City dots with pulse */}
        <circle cx="20" cy="-16" r="3" fill={color} fillOpacity="0.85">
          <animate attributeName="fill-opacity" values="0.85;1;0.85" dur="2.4s" repeatCount="indefinite"/>
          <animate attributeName="r"            values="3;4.2;3"     dur="2.4s" repeatCount="indefinite"/>
        </circle>
        <circle cx="-24" cy="9"  r="2.5" fill={color} fillOpacity="0.65">
          <animate attributeName="fill-opacity" values="0.65;1;0.65" dur="3.1s" begin="0.9s" repeatCount="indefinite"/>
        </circle>
        <circle cx="12"  cy="30" r="2.5" fill={color} fillOpacity="0.65">
          <animate attributeName="fill-opacity" values="0.65;1;0.65" dur="2.9s" begin="1.6s" repeatCount="indefinite"/>
        </circle>
        {/* Connection arcs */}
        <line x1="20"  y1="-16" x2="-24" y2="9"  stroke={color} strokeWidth="0.9" strokeOpacity="0.38" strokeDasharray="3 2"/>
        <line x1="-24" y1="9"   x2="12"  y2="30" stroke={color} strokeWidth="0.9" strokeOpacity="0.38" strokeDasharray="3 2"/>
      </g>

      {/* ── Browser window (lower area, foreground) ── */}
      <rect x="4" y="118" width="228" height="122" rx="13" fill={color} fillOpacity="0.08" stroke={color} strokeWidth="1.5" strokeOpacity="0.35"/>
      {/* Top bar */}
      <rect x="4" y="118" width="228" height="30" rx="13" fill={color} fillOpacity="0.1"/>
      <rect x="4" y="133" width="228" height="15" fill={color} fillOpacity="0.1"/>
      {/* Traffic lights */}
      <circle cx="20" cy="133" r="4.5" fill={color} fillOpacity="0.5"/>
      <circle cx="33" cy="133" r="4.5" fill={color} fillOpacity="0.5"/>
      <circle cx="46" cy="133" r="4.5" fill={color} fillOpacity="0.5"/>
      {/* URL bar */}
      <rect x="62" y="124" width="114" height="14" rx="7" fill={color} fillOpacity="0.12"/>
      {/* Hero image block */}
      <rect x="12" y="154" width="212" height="50" rx="7" fill={color} fillOpacity="0.1">
        <animate attributeName="fill-opacity" values="0.05;0.18;0.05" dur="2.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1"/>
      </rect>
      {/* Play button */}
      <circle cx="118" cy="179" r="15" fill={color} fillOpacity="0.18"/>
      <polygon points="112,171 112,187 128,179" fill={color} fillOpacity="0.5">
        <animate attributeName="fill-opacity" values="0.5;0.9;0.5" dur="2.8s" repeatCount="indefinite"/>
      </polygon>
      {/* Typing headline */}
      <rect x="12" y="211" height="9" rx="4.5" fill={color} fillOpacity="0.55">
        <animate attributeName="width" values="0;148;148;0" dur="3.5s" repeatCount="indefinite" keyTimes="0;0.3;0.7;1" calcMode="spline" keySplines="0.4 0 0.2 1;0 0 1 1;0.4 0 0.2 1"/>
      </rect>
      {/* Sub line */}
      <rect x="12" y="226" height="7" rx="3.5" fill={color} fillOpacity="0.28">
        <animate attributeName="width" values="0;200;200;0" dur="3.5s" begin="0.25s" repeatCount="indefinite" keyTimes="0;0.3;0.7;1" calcMode="spline" keySplines="0.4 0 0.2 1;0 0 1 1;0.4 0 0.2 1"/>
      </rect>
      {/* Cursor blink */}
      <rect x="163" y="208" width="2.5" height="13" rx="1.25" fill={color} fillOpacity="0.8">
        <animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite"/>
      </rect>
    </svg>
  );
}

function IconBranding({ color }) {
  return (
    <svg viewBox="0 0 240 200" className="sl-icon" aria-hidden="true">
      {/* Three overlapping brand circles — breathing apart and together */}
      <circle cx="88" cy="90" r="62" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="1.2" strokeOpacity="0.4">
        <animateTransform attributeName="transform" type="translate" values="0,0;-10,0;0,0" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>
        <animate attributeName="fill-opacity" values="0.18;0.28;0.18" dur="4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="152" cy="90" r="62" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="1.2" strokeOpacity="0.4">
        <animateTransform attributeName="transform" type="translate" values="0,0;10,0;0,0" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>
        <animate attributeName="fill-opacity" values="0.18;0.28;0.18" dur="4s" begin="0.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="120" cy="140" r="62" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="1.2" strokeOpacity="0.4">
        <animateTransform attributeName="transform" type="translate" values="0,0;0,10;0,0" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>
        <animate attributeName="fill-opacity" values="0.18;0.28;0.18" dur="4s" begin="1s" repeatCount="indefinite"/>
      </circle>
      {/* Centre spark */}
      <circle cx="120" cy="107" r="10" fill={color} fillOpacity="0.6">
        <animate attributeName="r" values="10;14;10" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>
        <animate attributeName="fill-opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite"/>
      </circle>
    </svg>
  );
}

function IconMarketing({ color }) {
  const bars = [
    { x: 20,  maxH: 50,  delay: "0s",    op: 0.35 },
    { x: 68,  maxH: 80,  delay: "0.18s", op: 0.45 },
    { x: 116, maxH: 110, delay: "0.36s", op: 0.55 },
    { x: 164, maxH: 90,  delay: "0.22s", op: 0.50 },
    { x: 212, maxH: 135, delay: "0.44s", op: 0.65 },
  ];
  const baseline = 152;
  return (
    <svg viewBox="0 0 260 170" className="sl-icon" aria-hidden="true">
      {/* Grid lines */}
      {[40, 80, 120].map(y => (
        <line key={y} x1="10" y1={baseline-y} x2="250" y2={baseline-y} stroke={color} strokeWidth="0.8" strokeDasharray="5 5" strokeOpacity="0.12"/>
      ))}
      {/* Baseline */}
      <line x1="10" y1={baseline} x2="250" y2={baseline} stroke={color} strokeWidth="1.4" strokeOpacity="0.3"/>
      {/* Animated bars */}
      {bars.map((b) => (
        <rect key={b.x} x={b.x} width="28" rx="6" fill={color} fillOpacity={b.op}>
          <animate attributeName="height" values={`0;${b.maxH};${b.maxH};0`} dur="3.4s" begin={b.delay} repeatCount="indefinite" keyTimes="0;0.3;0.7;1" calcMode="spline" keySplines="0.4 0 0.2 1;0 0 1 1;0.4 0 0.2 1"/>
          <animate attributeName="y" values={`${baseline};${baseline-b.maxH};${baseline-b.maxH};${baseline}`} dur="3.4s" begin={b.delay} repeatCount="indefinite" keyTimes="0;0.3;0.7;1" calcMode="spline" keySplines="0.4 0 0.2 1;0 0 1 1;0.4 0 0.2 1"/>
        </rect>
      ))}
      {/* Trend line */}
      <polyline
        points="34,116 82,82 130,52 178,70 226,28"
        fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6"
        strokeDasharray="260" strokeDashoffset="260">
        <animate attributeName="stroke-dashoffset" values="260;0;0;260" dur="3.4s" repeatCount="indefinite" keyTimes="0;0.35;0.65;1"/>
      </polyline>
      {/* Dots */}
      {[[34,116],[82,82],[130,52],[178,70],[226,28]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill={color} fillOpacity="0.8">
          <animate attributeName="opacity" values="0;1;1;0" dur="3.4s" begin={`${i*0.08}s`} repeatCount="indefinite" keyTimes="0;0.35;0.65;1"/>
        </circle>
      ))}
    </svg>
  );
}

const SL_SERVICES = [
  {
    n: "01", title: "Website Development",
    tagline: "Your Digital Home, Built to Perform",
    desc: "We craft beautiful, responsive websites that aren't just pretty. They're built to convert. Whether you need a portfolio, corporate site, or a full e-commerce platform, we tailor every page to your brand and goals.",
    features: ["Custom Design & Development","WordPress, Shopify & Custom Platforms","E-commerce Store Setup","SEO-Optimized Structure","Speed, Mobile & Performance Optimization","Maintenance & Security Support"],
    tint: ["#6366f1","#1a8cff"], label: "Site",
    Icon: IconWebsite, iconColor: "#4f7cff",
  },
  {
    n: "02", title: "Branding & Creative Design",
    tagline: "A Brand That Looks as Good as It Feels.",
    desc: "We help you craft a cohesive and memorable brand identity that resonates with your audience, from your logo to every visual element your customers see.",
    features: ["Logo Design & Brand Identity","Typography, Color Palette & Style Guide","Social Media Visual Systems","Product Packaging & Print Design","UI/UX Design for Websites & Apps"],
    tint: ["#a855f7","#6366f1"], label: "Mark",
    Icon: IconBranding, iconColor: "#9b5de5",
  },
  {
    n: "03", title: "Digital Marketing",
    tagline: "Get Found. Get Clicked. Get Results.",
    desc: "We help you reach the right people with the right message. Our marketing strategies are data-driven, ROI-focused, and creatively executed.",
    features: ["Social Media Management (Instagram, Facebook, TikTok, LinkedIn)","Paid Advertising (Meta Ads, Google PPC, Retargeting)","SEO (Technical & Content)","Email Campaigns & CRM Automation","Performance Tracking & Analytics","Conversion Rate Optimization"],
    tint: ["#f59e0b","#a855f7"], label: "Reach",
    Icon: IconMarketing, iconColor: "#d97706",
  },
];

function SlServiceRow({ n, title, tagline, desc, features, tint, label, Icon, iconColor, reverse }) {
  return (
    <div className={`sl-row${reverse ? " sl-row--reverse" : ""}`} data-al-animate data-al-delay="0">
      <div
        className="sl-row__visual"
        style={{
          background: `radial-gradient(130% 120% at 30% 20%, ${tint[0]}18, ${tint[1]}38 60%, ${tint[1]}55 100%)`,
          borderColor: `${tint[1]}33`,
        }}
        aria-hidden="true"
      >
        <span className="sl-row__visual-n">{n}</span>
        <div className="sl-row__visual-grid"></div>
        <div className="sl-row__icon-wrap">
          <Icon color={iconColor} />
        </div>
      </div>

      <div className="sl-row__body">
        <span className="al-eyebrow" style={{ marginBottom: "10px" }}>
          <span className="al-eyebrow-dot"></span>{n}&nbsp;/&nbsp;03
        </span>
        <p className="sl-row__tagline">{tagline}</p>
        <h2 className="sl-row__title">{title}</h2>
        <p className="sl-row__desc">{desc}</p>
        <ul className="sl-row__features">
          {features.map((f) => (
            <li key={f}>
              <span className="sl-row__dot" aria-hidden="true">✦</span>
              {f}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="sl-cta-link"
          onClick={(e) => { e.preventDefault(); window.__handleNav && window.__handleNav("Contact Us"); }}
        >
          Start a project
          <svg viewBox="0 0 14 14" fill="none">
            <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

function ServicesPage() {
  React.useEffect(() => {
    const els = document.querySelectorAll("[data-al-animate]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("al-visible"); io.unobserve(e.target); } });
    }, { threshold: 0.08 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="al-page">

      {/* Intro */}
      <section className="sl-intro">
        <div className="al-inner">
          <span className="al-eyebrow" data-al-animate data-al-delay="0">
            <span className="al-eyebrow-dot"></span>What we do
          </span>
          <h1 className="sl-intro__title" data-al-animate data-al-delay="1">
            Everything you need to<br /><em>launch, grow, and scale</em><br />your brand online.
          </h1>
          <p className="sl-intro__sub" data-al-animate data-al-delay="2">
            At Banayoti Consulting, we offer a complete suite of services designed to help you
            launch, grow, and automate your brand online. Whether you&rsquo;re starting from scratch
            or scaling to the next level &mdash; we bring the strategy, creativity, and technology
            to get you there.
          </p>
        </div>
      </section>

      {/* Service Rows */}
      <section className="sl-rows">
        <div className="al-inner">
          {SL_SERVICES.map((s, i) => (
            <SlServiceRow key={s.n} {...s} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* Why Choose — inline light version */}
      <section className="al-why">
        <div className="al-inner">
          <div className="al-why__head" data-al-animate data-al-delay="0">
            <span className="al-eyebrow">
              <span className="al-eyebrow-dot"></span>Why Choose Banayoti Consulting?
            </span>
            <h2 className="al-section-title">
              Reasons brands stay with us<br /><em>long after launch.</em>
            </h2>
          </div>
          <ol className="al-why__list">
            {SL_WHY.map((v, i) => (
              <li key={v.n} className="al-why__item" data-al-animate data-al-delay={String(i % 3)}>
                <span className="al-why__n">{v.n}</span>
                <div className="al-why__content">
                  <div className="al-why__title">{v.title}</div>
                  <div className="al-why__body">{v.body}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA — inline light version */}
      <section className="sl-cta-section">
        <div className="al-inner">
          <div className="sl-cta-card" data-al-animate data-al-delay="0">
            <span className="al-eyebrow" style={{ justifyContent: "center" }}>
              <span className="al-eyebrow-dot"></span>One message away
            </span>
            <h2 className="sl-cta-card__title">
              Ready to take your brand<br />to the <em>next level?</em>
            </h2>
            <p className="sl-cta-card__copy">
              Join dozens of ambitious businesses who trust Banayoti Consulting to build, market,
              and automate their digital presence.
            </p>
            <div className="sl-cta-card__row">
              <a
                href="#contact"
                className="sl-cta-card__btn sl-cta-card__btn--primary"
                onClick={(e) => { e.preventDefault(); window.__handleNav && window.__handleNav("Contact Us"); }}
              >
                Request a Proposal
                <svg viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#portfolio"
                className="sl-cta-card__btn"
                onClick={(e) => { e.preventDefault(); window.__handleNav && window.__handleNav("Portfolio"); }}
              >
                See our work
                <svg viewBox="0 0 14 14" fill="none">
                  <path d="M4 10 10 4M5 4h5v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

window.ServicesPage = ServicesPage;
