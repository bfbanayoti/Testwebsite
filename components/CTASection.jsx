// CTASection.jsx — "Ready to Take Your Brand to the Next Level?"

function CTASection() {
  return (
    <section className="section section--cta" id="contact" aria-labelledby="cta-title">
      <div className="section__inner">
        <div className="cta-card" data-al-animate data-al-delay="0">
          <div className="cta-card__glow" aria-hidden="true"></div>
          <span className="section__eyebrow cta-card__eyebrow">
            <span className="section__eyebrow-dot"></span>
            One message away
          </span>
          <h2 id="cta-title" className="cta-card__title">
            Ready to take your brand to the <span className="section__title-grad">next level?</span>
          </h2>
          <p className="cta-card__copy">
            Join dozens of ambitious businesses who trust Banayoti to build, market,
            and automate their digital presence.
          </p>
          <div className="cta-card__row">
            <a href="#contact-us" className="hero-cta hero-cta--primary" onClick={(e) => { e.preventDefault(); window.__handleNav && window.__handleNav("Contact Us"); }}>
              Request a Proposal
              <svg viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#portfolio" className="hero-cta">
              See our portfolio
              <svg viewBox="0 0 14 14" fill="none">
                <path d="M4 10 10 4M5 4h5v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

window.CTASection = CTASection;
