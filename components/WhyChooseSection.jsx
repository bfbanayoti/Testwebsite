// WhyChooseSection.jsx — "Why Choose Banayoti Consulting?" 4 pillars.

const PILLARS = [
  { title: "Customised solutions, not templates" },
  { title: "Transparent pricing & timelines"   },
  { title: "Expert team with cross‑industry experience" },
  { title: "Long‑term partnership approach"    },
];

function WhyChooseSection() {
  return (
    <section className="section section--why" id="why" aria-labelledby="why-title">
      <div className="section__inner">
        <div className="section__head" data-al-animate data-al-delay="0">
          <span className="section__eyebrow"><span className="section__eyebrow-dot"></span>Why Banayoti Consulting</span>
          <h2 id="why-title" className="section__title">
            Reasons brands stay with us<br />
            <span className="section__title-grad">long after launch.</span>
          </h2>
        </div>

        <div className="why__grid">
          {PILLARS.map((p, i) => (
            <article key={p.title} className="why-card" data-al-animate data-al-delay={String(i + 1)}>
              <div className="why-card__num">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="why-card__title">{p.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.WhyChooseSection = WhyChooseSection;
