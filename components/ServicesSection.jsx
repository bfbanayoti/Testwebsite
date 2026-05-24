// ServicesSection.jsx — "What We Do" / 3 service cards from banayoti.com.

const SERVICES = [
  {
    n: "01",
    title: "Website Development",
    body: "Create fast, responsive, and SEO‑optimised websites that turn visitors into customers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 9h18" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="5.6" cy="7" r="0.6" fill="currentColor" />
        <circle cx="7.4" cy="7" r="0.6" fill="currentColor" />
        <path d="M7 13.5h6M7 16h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Branding & Design",
    body: "We craft unforgettable brand identities with impact and clarity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 4v4M12 16v4M4 12h4M16 12h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Digital Marketing",
    body: "Engage the right audience at the right time with full‑funnel marketing strategies.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 16V10M9 16V7M14 16V12M19 16V4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M3 20h18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

function ServiceCard({ n, title, body, icon, delay }) {
  return (
    <article className="service-card" data-al-animate data-al-delay={String(delay)}>
      <div className="service-card__top">
        <span className="service-card__n">{n}</span>
        <span className="service-card__icon">{icon}</span>
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__body">{body}</p>
      <a href="#portfolio" className="service-card__link">
        See our work
        <svg viewBox="0 0 14 14" fill="none">
          <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
      <span className="service-card__shine" aria-hidden="true"></span>
    </article>
  );
}

function ServicesSection() {
  return (
    <section className="section section--services" id="services" aria-labelledby="services-title">
      <div className="section__inner">
        <div className="section__head section__head--center" data-al-animate data-al-delay="0">
          <span className="section__eyebrow"><span className="section__eyebrow-dot"></span>What we do</span>
          <h2 id="services-title" className="section__title section__title--center">
            From bold ideas to powerful execution —<br />
            our services cover <span className="section__title-grad">every digital need.</span>
          </h2>
        </div>

        <div className="services__grid">
          {SERVICES.map((s, i) => <ServiceCard key={s.n} {...s} delay={i + 1} />)}
        </div>
      </div>
    </section>
  );
}

window.ServicesSection = ServicesSection;
