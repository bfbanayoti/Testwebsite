// StatsSection.jsx — "We're More Than Just a Digital Agency."

function StatsSection() {
  const stats = [
    { label: "Clients",                      value: "30", suffix: "+" },
    { label: "5‑Star Reviews",               value: "25", suffix: "+" },
    { label: "Years of combined experience", value: "8",  suffix: "+" },
  ];

  return (
    <section className="section section--stats" aria-labelledby="stats-title">
      <div className="section__inner">
        <div className="section__head section__head--center" data-al-animate data-al-delay="0">
          <span className="section__eyebrow">
            <span className="section__eyebrow-dot"></span>
            Who we are
          </span>
          <h2 id="stats-title" className="section__title section__title--center">
            We&rsquo;re more than just a <span className="section__title-grad">digital agency</span>
          </h2>
          <p className="section__lede section__lede--center">
            Banayoti Consulting is a results‑driven digital partner for brands that want
            more than just online presence — they want impact. We help you build, market,
            and automate your brand with clarity, creativity, and modern tech.
          </p>
        </div>

        <div className="stats__grid">
          {stats.map((s, i) => (
            <div key={s.label} className="stat-card" data-al-animate data-al-delay={String(i + 1)}>
              <div className="stat-card__value">
                <span data-count-to={s.value}>{s.value}</span><sup>{s.suffix}</sup>
              </div>
              <div className="stat-card__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.StatsSection = StatsSection;
