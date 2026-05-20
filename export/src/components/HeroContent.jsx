// HeroContent.jsx — eyebrow, giant headline, subtitle, CTAs.

function HeroContent({ headlineMode = "banayoti" }) {
  // Headline variants — exposed via Tweaks so the user can A/B the wordmark
  // treatment. "Power AI" is the spec's reference; ours uses the brand word.
  const headline = (() => {
    if (headlineMode === "banayoti") {
      // The "oti" picks up the gradient — nods to the globe-in-the-o glyph
      // in the real Banayoti logo. "Consulting" sits under it as a thin
      // letter-spaced rule, matching the real wordmark.
      return (
        <div className="hero-wordmark">
          <h1 className="hero-headline">
            <span>Banay</span><span className="hero-headline__grad">oti</span>
          </h1>
          <div className="hero-wordmark__sub" aria-hidden="true">
            <span className="hero-wordmark__rule"></span>
            <span className="hero-wordmark__label">Consulting</span>
            <span className="hero-wordmark__rule"></span>
          </div>
        </div>
      );
    }if (headlineMode === "digital") {
      return (
        <h1 className="hero-headline">
          <span>Digital </span><span className="hero-headline__grad">brilliance.</span>
        </h1>
      );
    }
    if (headlineMode === "vision") {
      return (
        <h1 className="hero-headline">
          <span>Your </span><span className="hero-headline__grad">vision.</span>
        </h1>
      );
    }
    // success
    return (
      <h1 className="hero-headline">
        <span>Built to </span><span className="hero-headline__grad">succeed.</span>
      </h1>
    );
  })();

  return (
    <div className="hero-content">
      <div className="hero-eyebrow">
        <span className="hero-eyebrow__dot" aria-hidden="true"></span>
        <span>Your Digital Partner</span>
      </div>

      {headline}

      <p className="hero-subtitle">
        Custom websites. Data‑driven marketing. Digital branding and design.<br />
        Let&rsquo;s turn your vision into a digital success story.
      </p>

      <div className="hero-cta-row">
        <a href="#contact" className="hero-cta hero-cta--primary">
          Let&rsquo;s Talk About Your Project
          <svg viewBox="0 0 14 14" fill="none">
            <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a href="#work" className="hero-cta">
          See Our Work
          <svg viewBox="0 0 14 14" fill="none">
            <path d="M4 10 10 4M5 4h5v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}

window.HeroContent = HeroContent;
