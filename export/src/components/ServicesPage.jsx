// ServicesPage.jsx — magazine-spread style with alternating full-width rows.

const SERVICES_DEEP = [
  {
    n: "01",
    title: "Website Development",
    short: "Create fast, responsive, and SEO‑optimised websites that turn visitors into customers.",
    long: "We build custom sites — not template variations. Each project is scoped against your goals, your audience, and the metrics that matter to your business.",
    tint: ["#6366f1", "#1a8cff"],
    label: "Site",
  },
  {
    n: "02",
    title: "Branding & Design",
    short: "We craft unforgettable brand identities with impact and clarity.",
    long: "From positioning and naming through to logo, type, and visual systems, we shape brands that look as confident as they want to feel.",
    tint: ["#a855f7", "#6366f1"],
    label: "Mark",
  },
  {
    n: "03",
    title: "Digital Marketing",
    short: "Engage the right audience at the right time with full‑funnel marketing strategies.",
    long: "Paid, organic, and lifecycle — connected to your CRM and reported against the outcomes you actually care about.",
    tint: ["#fcd34d", "#a855f7"],
    label: "Reach",
  },
];

function ServiceRow({ n, title, short, long, tint, label, reverse }) {
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
          <span className="svc-row__index">{n} &nbsp;/&nbsp;  03</span>
          <h2 id={`svc-${n}`} className="svc-row__title">{title}</h2>
          <p className="svc-row__short">{short}</p>
          <p className="svc-row__long">{long}</p>
          <a href="#contact" className="link-cta">
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
