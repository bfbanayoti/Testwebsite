// ServicesPage.jsx — full verbatim content from banayoti.com/services

const SERVICES_DEEP = [
  {
    n: "01",
    title: "Website Development",
    tagline: "Your Digital Home, Built to Perform",
    desc: "We craft beautiful, responsive websites that aren't just pretty—they're built to convert. Whether you need a portfolio, corporate site, or a full e-commerce platform, we tailor every page to your brand and goals.",
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
    desc: "We help you craft a cohesive and memorable brand identity that resonates with your audience—from your logo to every visual element your customers see.",
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
    tint: ["#fcd34d", "#a855f7"],
    label: "Reach",
  },
];

function ServiceRow({ n, title, tagline, desc, features, tint, label, reverse }) {
  return (
    <section className={`svc-row${reverse ? " svc-row--reverse" : ""}`} aria-labelledby={`svc-${n}`}>
      <div className="svc-row__inner section__inner">
        <div className="svc-row__visual" aria-hidden="true">
          <div
            className="svc-row__visual-fill"
            style={{
              background:
                `radial-gradient(110% 100% at 30% 20%, ${tint[0]}55, ${tint[1]}aa 60%, ${tint[1]}ee 100%)`,
            }}
          ></div>
          <div className="svc-row__visual-grid"></div>
          <span className="svc-row__visual-label">{label}</span>
          <span className="svc-row__visual-n">{n}</span>
        </div>

        <div className="svc-row__body">
          <span className="svc-row__index">{n} &nbsp;/&nbsp; 03</span>
          <p className="svc-row__tagline">{tagline}</p>
          <h2 id={`svc-${n}`} className="svc-row__title">{title}</h2>
          <p className="svc-row__short">{desc}</p>
          <ul className="svc-row__features">
            {features.map((f) => (
              <li key={f}>
                <span className="svc-row__feature-dot" aria-hidden="true">✦</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="link-cta"
            onClick={(e) => { e.preventDefault(); window.__handleNav && window.__handleNav("Contact Us"); }}
          >
            Start a project
            <svg viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <React.Fragment>

      {/* Intro */}
      <section className="section svc-intro" aria-label="Services intro">
        <div className="section__inner">
          <p className="svc-intro__text">
            At Banayoti Consulting, we offer a complete suite of services designed to help you
            launch, grow, and automate your brand online. Whether you&rsquo;re starting from scratch
            or scaling to the next level&mdash;we bring the strategy, creativity, and technology
            to get you there.
          </p>
        </div>
      </section>

      <div className="svc-rows">
        {SERVICES_DEEP.map((s, i) => (
          <ServiceRow key={s.n} {...s} reverse={i % 2 === 1} />
        ))}
      </div>

      <WhyChooseSection />
      <CTASection />
    </React.Fragment>
  );
}

window.ServicesPage = ServicesPage;
