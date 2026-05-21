// ServicesPage.jsx — Light-theme, animated service icons, inline why-choose.

const SL_WHY = [
  { n: "01", title: "Customized Solutions, Not Templates",        body: "Every engagement starts from your business and your goals — not from a stock theme." },
  { n: "02", title: "Transparent Pricing & Timelines",            body: "Clear scope, clear cost, clear dates. You always know what's happening and when." },
  { n: "03", title: "Expert Team with Cross-Industry Experience", body: "Hospitality, real estate, interiors, retail — pattern recognition we bring to your project." },
  { n: "04", title: "Long-Term Partnership Approach",             body: "We measure success by what happens after launch, not just on launch day." },
];

/* ── Animated SVG icons ─────────────────────────────── */

function IconWebsite({ color }) {
  return (
    <svg viewBox="0 0 140 100" className="sl-icon" aria-hidden="true">
      {/* Browser shell */}
      <rect x="4" y="4" width="132" height="92" rx="10" fill="none" stroke={color} strokeWidth="1.6" opacity="0.5"/>
      <rect x="4" y="4" width="132" height="22" rx="10" fill={color} opacity="0.08"/>
      <line x1="4" y1="26" x2="136" y2="26" stroke={color} strokeWidth="1" opacity="0.2"/>
      {/* Traffic lights */}
      <circle cx="18" cy="15" r="3.5" fill={color} opacity="0.35"/>
      <circle cx="28" cy="15" r="3.5" fill={color} opacity="0.35"/>
      <circle cx="38" cy="15" r="3.5" fill={color} opacity="0.35"/>
      {/* URL bar */}
      <rect x="50" y="10" width="74" height="10" rx="5" fill={color} opacity="0.1"/>
      {/* Content lines — staggered fade-in loop */}
      <rect x="16" y="38" height="5" rx="2.5" fill={color} opacity="0.5" className="sl-line sl-line--1">
        <animate attributeName="width" values="0;72;72;0" dur="3s" repeatCount="indefinite" keyTimes="0;0.35;0.65;1" calcMode="spline" keySplines="0.4 0 0.2 1;0 0 1 1;0.4 0 0.2 1"/>
      </rect>
      <rect x="16" y="50" height="5" rx="2.5" fill={color} opacity="0.35" className="sl-line sl-line--2">
        <animate attributeName="width" values="0;96;96;0" dur="3s" begin="0.15s" repeatCount="indefinite" keyTimes="0;0.35;0.65;1" calcMode="spline" keySplines="0.4 0 0.2 1;0 0 1 1;0.4 0 0.2 1"/>
      </rect>
      <rect x="16" y="62" height="5" rx="2.5" fill={color} opacity="0.25" className="sl-line sl-line--3">
        <animate attributeName="width" values="0;56;56;0" dur="3s" begin="0.3s" repeatCount="indefinite" keyTimes="0;0.35;0.65;1" calcMode="spline" keySplines="0.4 0 0.2 1;0 0 1 1;0.4 0 0.2 1"/>
      </rect>
      {/* Cursor blink */}
      <rect x="90" y="60" width="2" height="12" rx="1" fill={color} opacity="0.7">
        <animate attributeName="opacity" values="0.7;0;0.7" dur="1.1s" repeatCount="indefinite"/>
      </rect>
    </svg>
  );
}

function IconBranding({ color }) {
  return (
    <svg viewBox="0 0 120 120" className="sl-icon" aria-hidden="true">
      <g transform="translate(60,60)">
        {/* Outer rotating ring */}
        <circle r="46" fill="none" stroke={color} strokeWidth="1" strokeDasharray="8 6" opacity="0.25">
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="12s" repeatCount="indefinite"/>
        </circle>
        {/* Rotating diamond */}
        <polygon points="0,-34 24,0 0,34 -24,0" fill="none" stroke={color} strokeWidth="1.6" opacity="0.45">
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="8s" repeatCount="indefinite"/>
        </polygon>
        {/* Counter-rotating inner diamond */}
        <polygon points="0,-20 14,0 0,20 -14,0" fill={color} opacity="0.15">
          <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="8s" repeatCount="indefinite"/>
        </polygon>
        {/* Pulsing center */}
        <circle r="7" fill={color} opacity="0.5">
          <animate attributeName="r" values="7;9;7" dur="2.4s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.4s" repeatCount="indefinite"/>
        </circle>
        {/* Sparkle dots */}
        {[0,60,120,180,240,300].map((deg, i) => (
          <circle key={deg}
            cx={Math.cos((deg-90)*Math.PI/180)*34}
            cy={Math.sin((deg-90)*Math.PI/180)*34}
            r="2.5" fill={color} opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" begin={`${i*0.33}s`} repeatCount="indefinite"/>
          </circle>
        ))}
      </g>
    </svg>
  );
}

function IconMarketing({ color }) {
  const bars = [
    { x: 12, maxH: 28, delay: "0s",    op: 0.35 },
    { x: 34, maxH: 44, delay: "0.18s", op: 0.45 },
    { x: 56, maxH: 62, delay: "0.36s", op: 0.55 },
    { x: 78, maxH: 50, delay: "0.22s", op: 0.50 },
    { x:100, maxH: 72, delay: "0.44s", op: 0.65 },
  ];
  return (
    <svg viewBox="0 0 132 92" className="sl-icon" aria-hidden="true">
      {/* Baseline */}
      <line x1="8" y1="84" x2="124" y2="84" stroke={color} strokeWidth="1.2" opacity="0.2"/>
      {/* Grid lines */}
      {[20,40,60].map(y => (
        <line key={y} x1="8" y1={84-y} x2="124" y2={84-y} stroke={color} strokeWidth="0.5" strokeDasharray="4 4" opacity="0.1"/>
      ))}
      {/* Animated bars */}
      {bars.map((b) => (
        <rect key={b.x} x={b.x} width="18" rx="4" fill={color} opacity={b.op}>
          <animate attributeName="height" values={`0;${b.maxH};${b.maxH};0`} dur="3.2s" begin={b.delay} repeatCount="indefinite" keyTimes="0;0.3;0.7;1" calcMode="spline" keySplines="0.4 0 0.2 1;0 0 1 1;0.4 0 0.2 1"/>
          <animate attributeName="y"      values={`84;${84-b.maxH};${84-b.maxH};84`} dur="3.2s" begin={b.delay} repeatCount="indefinite" keyTimes="0;0.3;0.7;1" calcMode="spline" keySplines="0.4 0 0.2 1;0 0 1 1;0.4 0 0.2 1"/>
        </rect>
      ))}
      {/* Trend line */}
      <polyline points="21,70 43,56 65,36 87,46 109,18" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" strokeDasharray="140" strokeDashoffset="140">
        <animate attributeName="stroke-dashoffset" values="140;0;0;140" dur="3.2s" repeatCount="indefinite" keyTimes="0;0.35;0.65;1"/>
      </polyline>
      {/* Dots on trend */}
      {[[21,70],[43,56],[65,36],[87,46],[109,18]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill={color} opacity="0.7">
          <animate attributeName="opacity" values="0;0.7;0.7;0" dur="3.2s" begin={`${i*0.07}s`} repeatCount="indefinite" keyTimes="0;0.35;0.65;1"/>
        </circle>
      ))}
    </svg>
  );
}

const SL_SERVICES = [
  {
    n: "01", title: "Website Development",
    tagline: "Your Digital Home, Built to Perform",
    desc: "We craft beautiful, responsive websites that aren't just pretty — they're built to convert. Whether you need a portfolio, corporate site, or a full e-commerce platform, we tailor every page to your brand and goals.",
    features: ["Custom Design & Development","WordPress, Shopify & Custom Platforms","E-commerce Store Setup","SEO-Optimized Structure","Speed, Mobile & Performance Optimization","Maintenance & Security Support"],
    tint: ["#6366f1","#1a8cff"], label: "Site",
    Icon: IconWebsite, iconColor: "#4f7cff",
  },
  {
    n: "02", title: "Branding & Creative Design",
    tagline: "A Brand That Looks as Good as It Feels.",
    desc: "We help you craft a cohesive and memorable brand identity that resonates with your audience — from your logo to every visual element your customers see.",
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
        <span className="sl-row__visual-label">{label}</span>
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
