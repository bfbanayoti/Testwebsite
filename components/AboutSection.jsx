// AboutSection.jsx — "Behind the Strategy: Meet Banayoti Consulting"
// Real copy from banayoti.com.

function AboutSection() {
  return (
    <section className="section section--about" id="about" aria-labelledby="about-title">
      <div className="section__inner">
        <div className="section__head">
          <span className="section__eyebrow">
            <span className="section__eyebrow-dot"></span>
            Behind the Strategy
          </span>
          <h2 id="about-title" className="section__title">
            Custom websites, smart marketing, and bold branding —<br />
            <span className="section__title-grad">designed to grow with your brand.</span>
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__body">
            <p className="about__lede">
              Banayoti Consulting is a creative digital consultancy that partners with
              ambitious brands and businesses to unlock their full digital potential.
            </p>
            <p className="about__copy">
              We specialise in website development, digital marketing, and branding
              design — delivering cutting‑edge solutions tailored to our clients&rsquo;
              unique goals and industries.
            </p>
            <a href="#about-full" className="link-cta">
              Learn more about us
              <svg viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="about__visual" aria-hidden="true">
            <div className="about__visual-card">
              <div className="about__visual-rows">
                <div className="about__visual-row"><span>Strategy</span><span className="dots"></span><span>01</span></div>
                <div className="about__visual-row"><span>Design</span><span className="dots"></span><span>02</span></div>
                <div className="about__visual-row"><span>Build</span><span className="dots"></span><span>03</span></div>
                <div className="about__visual-row"><span>Launch</span><span className="dots"></span><span>04</span></div>
                <div className="about__visual-row about__visual-row--active"><span>Grow</span><span className="dots"></span><span>05</span></div>
              </div>
              <div className="about__visual-tag">
                Where creativity meets technology
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.AboutSection = AboutSection;
