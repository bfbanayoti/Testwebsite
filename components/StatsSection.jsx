// StatsSection.jsx — "We're More Than Just a Digital Agency."
// Real numbers aren't published on banayoti.com (showed "0+") — these are
// confident placeholders the user can edit anytime.

function StatsSection() {
  const stats = [
    { label: "Clients",                    value: "40", suffix: "+" },
    { label: "5‑Star Reviews",             value: "120", suffix: "+" },
    { label: "Years of combined experience", value: "15", suffix: "+" },
  ];

  return (
    <section className="section section--stats" aria-labelledby="stats-title">
      <div className="section__inner">
        <div className="section__head section__head--center">
          <span className="section__eyebrow">
            <span className="section__eyebrow-dot"></span>
            Who we are
          </span>
          <h2 id="stats-title" className="section__title section__title--center">
            We&rsquo;re more than just a <span className="section__title-grad">digital agency.</span>
          </h2>
          <p className="section__lede section__lede--center">
            Banayoti Consulting is a results‑driven digital partner for brands that want
            more than just online presence — they want impact. We help you build, market,
            and automate your brand with clarity, creativity, and modern tech.
          </p>
        </div>

        <div className="stats__grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-card">
              <div className="stat-card__value">
                <span>{s.value}</span><sup>{s.suffix}</sup>
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
