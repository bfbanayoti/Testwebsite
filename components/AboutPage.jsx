// AboutPage.jsx — full verbatim content from banayoti.com/about-us

const CORE_VALUES = [
  { title: "Innovation",  body: "We embrace creativity and cutting-edge tech" },
  { title: "Excellence",  body: "We deliver quality that exceeds expectations" },
  { title: "Empathy",     body: "We listen to and understand our clients deeply" },
  { title: "Growth",      body: "We focus on results that create sustainable success" },
  { title: "Integrity",   body: "We work with transparency and honesty" },
];

const WHY_CHOOSE = [
  { n: "01", title: "Customized Solutions, Not Templates",          body: "Every engagement starts from your business and your goals — not from a stock theme." },
  { n: "02", title: "Transparent Pricing & Timelines",              body: "Clear scope, clear cost, clear dates. You always know what's happening and when." },
  { n: "03", title: "Expert Team with Cross-Industry Experience",   body: "Hospitality, real estate, interiors, retail — pattern recognition we bring to your project." },
  { n: "04", title: "Long-Term Partnership Approach",               body: "We measure success by what happens after launch, not just on launch day." },
];

function AboutPage() {
  return (
    <React.Fragment>

      {/* Unlock Your Digital Potential */}
      <section className="section editorial editorial--manifesto" aria-label="About intro">
        <div className="section__inner editorial__inner">
          <span className="editorial__tag">Unlock Your Digital Potential</span>
          <p className="editorial__statement">
            Crafting digital experiences with <span className="section__title-grad">purpose, passion, and precision.</span>
          </p>
          <p className="editorial__copy editorial__copy--wide">
            Banayoti Consulting is a creative digital consultancy that partners with ambitious brands
            and businesses to unlock their full digital potential. We specialize in website development,
            digital marketing, and branding design, delivering cutting-edge solutions tailored to our
            clients&rsquo; unique goals and industries.
          </p>
          <p className="editorial__copy editorial__copy--wide">
            Founded with the belief that great design, smart strategy, and reliable technology can
            transform businesses, we bring together a passionate team of developers, marketers,
            designers, and strategists who work collaboratively to create seamless and impactful
            digital experiences.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section editorial editorial--vm" aria-label="Vision and Mission">
        <div className="section__inner">
          <div className="editorial__vm-grid">
            <div className="editorial__vm-item">
              <span className="editorial__tag">Our Vision</span>
              <p className="editorial__vm-text">
                To become a leading force in digital consulting by enabling brands to scale
                with purpose and impact in an ever-evolving digital landscape.
              </p>
            </div>
            <div className="editorial__vm-item">
              <span className="editorial__tag">Our Mission</span>
              <p className="editorial__vm-text">
                To empower our clients by designing smart, user-focused digital products and
                marketing campaigns that connect, convert, and captivate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section editorial editorial--core-values" aria-label="Core Values">
        <div className="section__inner">
          <div className="editorial__head">
            <span className="editorial__tag">Our Core Values</span>
          </div>
          <div className="core-values-grid">
            {CORE_VALUES.map((v) => (
              <div key={v.title} className="core-value-card">
                <span className="core-value-card__star" aria-hidden="true">✦</span>
                <h3 className="core-value-card__title">{v.title}</h3>
                <p className="core-value-card__body">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section editorial editorial--values" aria-label="Why choose us">
        <div className="section__inner">
          <div className="editorial__head">
            <span className="editorial__tag">Why Choose Banayoti Consulting?</span>
          </div>
          <ol className="value-list">
            {WHY_CHOOSE.map((v) => (
              <li key={v.n} className="value-row">
                <div className="value-row__n">{v.n}</div>
                <div className="value-row__title">{v.title}</div>
                <div className="value-row__body">{v.body}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </React.Fragment>
  );
}

window.AboutPage = AboutPage;
