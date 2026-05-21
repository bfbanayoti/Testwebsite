// ServicesPage.jsx — Light-theme redesign, same content as banayoti.com/services.

const SL_SERVICES = [
  {
    n: "01",
    title: "Website Development",
    tagline: "Your Digital Home, Built to Perform",
    desc: "We craft beautiful, responsive websites that aren't just pretty — they're built to convert. Whether you need a portfolio, corporate site, or a full e-commerce platform, we tailor every page to your brand and goals.",
    features: [
      "Custom Design & Development",
      "WordPress, Shopify & Custom Platforms",
      "E-commerce Store Setup",
      "SEO-Optimized Structure",
      "Speed, Mobile & Performance Optimization",
      "Maintenance & Security Support",
    ],
    tint: ["#6366f1", "#1a8cff"],
    label: "Site",
  },
  {
    n: "02",
    title: "Branding & Creative Design",
    tagline: "A Brand That Looks as Good as It Feels.",
    desc: "We help you craft a cohesive and memorable brand identity that resonates with your audience — from your logo to every visual element your customers see.",
    features: [
      "Logo Design & Brand Identity",
      "Typography, Color Palette & Style Guide",
      "Social Media Visual Systems",
      "Product Packaging & Print Design",
      "UI/UX Design for Websites & Apps",
    ],
    tint: ["#a855f7", "#6366f1"],
    label: "Mark",
  },
  {
    n: "03",
    title: "Digital Marketing",
    tagline: "Get Found. Get Clicked. Get Results.",
    desc: "We help you reach the right people with the right message. Our marketing strategies are data-driven, ROI-focused, and creatively executed.",
    features: [
      "Social Media Management (Instagram, Facebook, TikTok, LinkedIn)",
      "Paid Advertising (Meta Ads, Google PPC, Retargeting)",
      "SEO (Technical & Content)",
      "Email Campaigns & CRM Automation",
      "Performance Tracking & Analytics",
      "Conversion Rate Optimization",
    ],
    tint: ["#f59e0b", "#a855f7"],
    label: "Reach",
  },
];

function SlServiceRow({ n, title, tagline, desc, features, tint, label, reverse }) {
  return (
    <div className={`sl-row${reverse ? " sl-row--reverse" : ""}`} data-al-animate data-al-delay="0">
      <div
        className="sl-row__visual"
        style={{
          background: `radial-gradient(130% 120% at 30% 20%, ${tint[0]}22, ${tint[1]}44 60%, ${tint[1]}66 100%)`,
          borderColor: `${tint[1]}44`,
        }}
        aria-hidden="true"
      >
        <span className="sl-row__visual-n">{n}</span>
        <span className="sl-row__visual-label">{label}</span>
        <div className="sl-row__visual-grid"></div>
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
            <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function ServicesPage() {
  React.useEffect(() => {
    const els = document.querySelectorAll("[data-al-animate]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("al-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
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

      <div className="al-dark-cap">
        <WhyChooseSection />
        <CTASection />
      </div>
    </div>
  );
}

window.ServicesPage = ServicesPage;
