// AboutPage.jsx — Light-theme redesign inspired by clean SaaS editorial style.
// Instrument Serif for display headlines, Geist for body.
// CSS scroll animations via IntersectionObserver + data-al-animate attributes.

const AL_CORE_VALUES = [
  { title: "Innovation",  body: "We embrace creativity and cutting-edge tech to push what's possible." },
  { title: "Excellence",  body: "We deliver quality that exceeds expectations, every single time." },
  { title: "Empathy",     body: "We listen to and understand our clients deeply before we build anything." },
  { title: "Growth",      body: "We focus on results that create sustainable, long-term success." },
  { title: "Integrity",   body: "We work with full transparency and honesty — no surprises." },
];

const AL_WHY_CHOOSE = [
  { n: "01", title: "Customized Solutions, Not Templates",        body: "Every engagement starts from your business and your goals — not from a stock theme." },
  { n: "02", title: "Transparent Pricing & Timelines",            body: "Clear scope, clear cost, clear dates. You always know what's happening and when." },
  { n: "03", title: "Expert Team with Cross-Industry Experience", body: "Hospitality, real estate, interiors, retail — pattern recognition we bring to your project." },
  { n: "04", title: "Long-Term Partnership Approach",             body: "We measure success by what happens after launch, not just on launch day." },
];

const AL_STATS = [
  { value: "30+", label: "Happy Clients",    sub: "Across UAE & UK" },
  { value: "25+", label: "5-Star Reviews",   sub: "Real client testimonials" },
  { value: "8+",  label: "Years Experience", sub: "Combined team expertise" },
];

function countUpStats(container) {
  const statEls = container.querySelectorAll(".al-db-stat");
  statEls.forEach((stat, i) => {
    const valueEl = stat.querySelector(".al-db-stat__value");
    if (!valueEl) return;
    const original = valueEl.textContent.trim();
    const num = parseInt(original, 10);
    if (isNaN(num)) return;
    const suffix = original.replace(/[0-9]/g, "");
    const duration = 1200;
    const delay = i * 140;
    setTimeout(() => {
      stat.classList.add("al-counting");
      const t0 = performance.now();
      function tick(now) {
        const pct = Math.min((now - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - pct, 3); // ease-out cubic
        valueEl.textContent = Math.floor(eased * num) + suffix;
        if (pct < 1) {
          requestAnimationFrame(tick);
        } else {
          valueEl.textContent = original;
          stat.classList.remove("al-counting");
        }
      }
      requestAnimationFrame(tick);
    }, delay);
  });
}

function AboutPage() {
  React.useEffect(() => {
    const els = document.querySelectorAll("[data-al-animate]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("al-visible");
            if (e.target.classList.contains("al-dashboard")) {
              countUpStats(e.target);
            }
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="al-page">

      {/* ── Hero ── */}
      <section className="al-hero">
        <div className="al-inner">
          <span className="al-eyebrow" data-al-animate data-al-delay="0">
            <span className="al-eyebrow-dot"></span>About Us
          </span>
          <h1 className="al-hero__title">
            <span className="al-tl" data-al-animate data-al-delay="1">Crafting digital</span>
            <span className="al-tl" data-al-animate data-al-delay="2">experiences with <em>purpose,</em></span>
            <span className="al-tl" data-al-animate data-al-delay="3"><em>passion,</em> and precision.</span>
          </h1>
          <div className="al-hero__body" data-al-animate data-al-delay="4">
            <p>
              Banayoti Consulting is a creative digital consultancy that partners with ambitious brands
              and businesses to unlock their full digital potential. We specialize in website development,
              digital marketing, and branding design, delivering cutting-edge solutions tailored to our
              clients&rsquo; unique goals and industries.
            </p>
            <p>
              Founded with the belief that great design, smart strategy, and reliable technology can
              transform businesses, we bring together a passionate team of developers, marketers,
              designers, and strategists who work collaboratively to create seamless and impactful
              digital experiences.
            </p>
          </div>
        </div>

        {/* Floating metric card — SaaS-style live stat, hidden on mobile */}
        <div className="al-hero__float-wrap" aria-hidden="true">
          <div className="al-hero__float" data-al-animate data-al-delay="5">
            <div className="al-float__header">
              <span className="al-float__live"></span>
              <span className="al-float__live-text">Live</span>
            </div>
            <div className="al-float__value">30+</div>
            <div className="al-float__label">Happy Clients</div>
            <svg viewBox="0 0 160 40" className="al-float__spark" aria-hidden="true">
              <defs>
                <linearGradient id="floatGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1a8cff" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#1a8cff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,36 C20,34 35,28 55,20 C75,12 85,22 105,15 C125,8 142,4 160,2 L160,40 L0,40 Z"
                fill="url(#floatGrad)"
                className="al-float__spark-fill"
              />
              <path
                d="M0,36 C20,34 35,28 55,20 C75,12 85,22 105,15 C125,8 142,4 160,2"
                fill="none"
                stroke="#1a8cff"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="al-float__spark-line"
              />
            </svg>
            <div className="al-float__footer">
              <span className="al-float__arrow">↑</span>
              40% growth YoY
            </div>
          </div>
        </div>
      </section>

      {/* ── Dashboard Stats Card ── */}
      <section className="al-metrics">
        <div className="al-inner">
          <div className="al-dashboard" data-al-animate data-al-delay="0">
            <div className="al-db-scan" aria-hidden="true" />

            <div className="al-db-topbar">
              <div className="al-db-topbar__left">
                <span className="al-db-logo">B</span>
                <span className="al-db-brand">Banayoti <strong>Consulting</strong></span>
              </div>
              <div className="al-db-topbar__right">
                <span className="al-db-chip">Who we are</span>
              </div>
            </div>

            <div className="al-db-body">
              <p className="al-db-greeting">
                We&rsquo;re more than just a digital agency.
              </p>

              <div className="al-db-stats">
                {AL_STATS.map((s) => (
                  <div key={s.label} className="al-db-stat">
                    <div className="al-db-stat__value">{s.value}</div>
                    <div className="al-db-stat__label">{s.label}</div>
                    <div className="al-db-stat__sub">{s.sub}</div>
                  </div>
                ))}
              </div>

              <div className="al-db-chart-wrap">
                <span className="al-db-chart-label">Client growth trajectory</span>
                <svg
                  viewBox="0 0 500 72"
                  className="al-db-chart"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="alChartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%"   stopColor="#1a8cff" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#1a8cff" stopOpacity="0"    />
                    </linearGradient>
                  </defs>
                  <path
                    className="al-chart-fill"
                    d="M0,65 C60,60 110,52 160,44 C200,38 220,46 260,36 C300,26 350,16 400,9 C440,4 470,2 500,1 L500,72 L0,72 Z"
                    fill="url(#alChartGrad)"
                  />
                  <path
                    className="al-chart-line"
                    d="M0,65 C60,60 110,52 160,44 C200,38 220,46 260,36 C300,26 350,16 400,9 C440,4 470,2 500,1"
                    fill="none"
                    stroke="#1a8cff"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="al-vm">
        <div className="al-inner">
          <div className="al-vm__grid">
            <div className="al-vm__card" data-al-animate data-al-delay="0">
              <span className="al-badge-accent">Our Vision</span>
              <p className="al-vm__text">
                To become a leading force in digital consulting by enabling brands to scale
                with purpose and impact in an ever-evolving digital landscape.
              </p>
            </div>
            <div className="al-vm__card" data-al-animate data-al-delay="1">
              <span className="al-badge-accent">Our Mission</span>
              <p className="al-vm__text">
                To empower our clients by designing smart, user-focused digital products and
                marketing campaigns that connect, convert, and captivate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="al-values">
        <div className="al-inner">
          <div className="al-section-head" data-al-animate data-al-delay="0">
            <span className="al-eyebrow">
              <span className="al-eyebrow-dot"></span>Our Core Values
            </span>
            <h2 className="al-section-title">
              The principles that<br /><em>guide everything we do.</em>
            </h2>
          </div>
          <div className="al-values__grid">
            {AL_CORE_VALUES.map((v, i) => (
              <div
                key={v.title}
                className="al-value-card"
                data-al-animate
                data-al-delay={String(i % 3)}
              >
                <span className="al-value-card__star" aria-hidden="true">✦</span>
                <h3 className="al-value-card__title">{v.title}</h3>
                <p className="al-value-card__body">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="al-why">
        <div className="al-inner">
          <div className="al-why__head" data-al-animate data-al-delay="0">
            <span className="al-eyebrow">
              <span className="al-eyebrow-dot"></span>Why Choose Banayoti Consulting?
            </span>
            <h2 className="al-section-title">
              Four reasons clients<br /><em>stay with us long-term.</em>
            </h2>
          </div>
          <ol className="al-why__list">
            {AL_WHY_CHOOSE.map((v, i) => (
              <li key={v.n} className="al-why__item" data-al-animate data-al-delay={String(i % 3)}>
                <span className="al-why__n">{v.n}</span>
                <div className="al-why__content">
                  <div className="al-why__title">{v.title}</div>
                  <div className="al-why__body">{v.body}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </div>
  );
}

window.AboutPage = AboutPage;
