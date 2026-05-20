// AboutPage.jsx — editorial About page.

const ABOUT_VALUES = [
  { n: "01", title: "Customised solutions, not templates",            body: "Every engagement starts from your business and your goals — not from a stock theme." },
  { n: "02", title: "Transparent pricing & timelines",                body: "Clear scope, clear cost, clear dates. You always know what's happening and when." },
  { n: "03", title: "Expert team with cross-industry experience",     body: "Hospitality, real estate, interiors, retail — pattern recognition we bring to your project." },
  { n: "04", title: "Long-term partnership approach",                 body: "We measure success by what happens after launch, not just on launch day." },
];

function AboutPage() {
  return (
    <React.Fragment>
      {/* Manifesto — single oversized statement, no card chrome */}
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

      {/* Who we are — split layout, asymmetric */}
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
              Banayoti Consulting is a results‑driven digital partner for brands that want
              more than just online presence — they want impact. We help you build, market,
              and automate your brand with clarity, creativity, and modern tech.
            </p>
          </div>
        </div>
      </section>

      {/* Values — numbered rows, giant numerals, generous spacing */}
      <section className="section editorial editorial--values" aria-label="What we stand for">
        <div className="section__inner">
          <div className="editorial__head">
            <span className="editorial__tag">What we stand for</span>
          </div>
          <ol className="value-list">
            {ABOUT_VALUES.map((v) => (
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
