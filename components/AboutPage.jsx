// AboutPage.jsx — full content from banayoti.com/about-us

const CORE_VALUES = [
  { title: "Innovation",  body: "Embracing creativity and cutting-edge technology to deliver forward-thinking solutions." },
  { title: "Excellence",  body: "Delivering quality that consistently exceeds expectations in everything we do." },
  { title: "Empathy",     body: "Understanding our clients deeply — their goals, their challenges, and their audience." },
  { title: "Growth",      body: "Focusing on sustainable success and long-term results for every partner we work with." },
  { title: "Integrity",   body: "Working with full transparency and honesty at every stage of every engagement." },
];

const WHY_CHOOSE = [
  { n: "01", title: "Customised solutions, not templates",          body: "Every engagement starts from your business and your goals — not from a stock theme." },
  { n: "02", title: "Transparent pricing & timelines",              body: "Clear scope, clear cost, clear dates. You always know what's happening and when." },
  { n: "03", title: "Expert team with cross-industry experience",   body: "Hospitality, real estate, interiors, retail — pattern recognition we bring to your project." },
  { n: "04", title: "Long-term partnership approach",               body: "We measure success by what happens after launch, not just on launch day." },
];

function AboutPage() {
  return (
    <React.Fragment>

      {/* Manifesto */}
      <section className="section editorial editorial--manifesto" aria-label="Manifesto">
        <div className="section__inner editorial__inner">
          <span className="editorial__tag">Manifesto</span>
          <p className="editorial__statement">
            Banayoti Consulting is a creative digital consultancy that partners with
            ambitious brands to unlock their full <span className="section__title-grad">digital potential.</span>
          </p>
          <p className="editorial__byline">
            Custom websites &middot; Data‑driven marketing &middot; Digital branding &amp; design
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="section editorial editorial--split" aria-label="Who we are">
        <div className="section__inner editorial__inner editorial__inner--split">
          <div className="editorial__col-left">
            <span className="editorial__num">02</span>
            <span className="editorial__rule"></span>
            <span className="editorial__caption">Who we are</span>
          </div>
          <div className="editorial__col-right">
            <h2 className="editorial__heading">
              We&rsquo;re more than just a <span className="section__title-grad">digital agency.</span>
            </h2>
            <p className="editorial__copy">
              Banayoti Consulting is a results-driven digital partner for brands that want
              more than just an online presence — they want impact. We help you build, market,
              and automate your brand with clarity, creativity, and modern technology.
              Whether you&rsquo;re starting fresh or scaling existing operations, we craft
              customised digital experiences with purpose, passion, and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section editorial editorial--vm" aria-label="Vision and Mission">
        <div className="section__inner">
          <div className="editorial__vm-grid">
            <div className="editorial__vm-item">
              <span className="editorial__tag">Vision</span>
              <p className="editorial__vm-text">
                To become a leading force in digital consulting by enabling brands to scale
                with purpose and impact in an evolving digital landscape.
              </p>
            </div>
            <div className="editorial__vm-item">
              <span className="editorial__tag">Mission</span>
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
            <span className="editorial__tag">Core Values</span>
            <h2 className="editorial__heading editorial__heading--sm">What we believe in</h2>
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

      {/* Why choose us */}
      <section className="section editorial editorial--values" aria-label="Why choose us">
        <div className="section__inner">
          <div className="editorial__head">
            <span className="editorial__tag">Why choose us</span>
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
