// app.jsx — view-based router for the Banayoti Consulting site.

function HomeView({ current, onSelect, tweaks }) {
  return (
    <div className="hero-wrap">
      <VideoBackground />
      <section className="hero-section">
        <HeroNav current={current} onSelect={onSelect} />
        <div className="hero-content-wrap">
          {tweaks.showBlurOrb ? <div className="blur-orb" aria-hidden="true"></div> : null}
          <HeroContent headlineMode={tweaks.headlineMode} />
        </div>
        {tweaks.showMarquee ? <LogoMarquee /> : null}
      </section>
    </div>
  );
}

function App() {
  const [t, setTweak] = useTweaks(window.__TWEAK_DEFAULTS);
  const [view, setView] = React.useState("Home");

  // Gradient palette
  React.useEffect(() => {
    const root = document.documentElement;
    const palettes = {
      indigoAmber: ["#6366f1", "#a855f7", "#fcd34d"],
      brandBlue:   ["#1a8cff", "#4ba6ff", "#8cc4ff"],
      champagne:   ["#7a5fff", "#e8b5a5", "#fcd34d"],
      platinum:    ["#c9d2e3", "#eef2fa", "#a3b3cc"],
    };
    const [a, b, c] = palettes[t.gradient] || palettes.indigoAmber;
    root.style.setProperty("--grad-1", a);
    root.style.setProperty("--grad-2", b);
    root.style.setProperty("--grad-3", c);
  }, [t.gradient]);

  // Scroll to top on view change.
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view]);

  // "Contact" is a CTA, not a page — it scrolls to the closing CTA card.
  const handleSelect = React.useCallback((label) => {
    if (label === "Contact") {
      // Make sure we're somewhere that has a CTA section first.
      if (view !== "Home") setView("Home");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const cta = document.querySelector(".cta-card");
          if (cta) cta.scrollIntoView({ behavior: "smooth", block: "center" });
        });
      });
      return;
    }
    setView(label);
  }, [view]);

  React.useEffect(() => { window.__handleNav = handleSelect; }, [handleSelect]);

  return (
    <React.Fragment>
      {view === "Home" ? (
        <HomeView current={view} onSelect={handleSelect} tweaks={t} />
      ) : (
        <PageHeader
          current={view}
          onSelect={handleSelect}
          index={
            view === "About Us"  ? "01" :
            view === "Services"  ? "02" :
            view === "Portfolio" ? "03" :
                                   "01"
          }
          eyebrow={
            view === "About Us"  ? "Behind the Strategy" :
            view === "Services"  ? "What we do" :
            view === "Portfolio" ? "Our work" :
                                   ""
          }
          title={
            view === "About Us"  ? "Meet Banayoti" :
            view === "Services"  ? "From bold ideas to powerful execution," :
            view === "Portfolio" ? "Get a glimpse of what we have" :
                                   view
          }
          gradTail={
            view === "About Us"  ? "Consulting." :
            view === "Services"  ? "every digital need." :
            view === "Portfolio" ? "done." :
                                   ""
          }
          lede={
            view === "About Us"
              ? "Banayoti Consulting is a creative digital consultancy that partners with ambitious brands and businesses to unlock their full digital potential."
              : view === "Services"
              ? "We specialise in website development, digital marketing, and branding design — delivering cutting-edge solutions tailored to our clients' unique goals and industries."
              : view === "Portfolio"
              ? "Trusted by brands that want serious growth — a selection of recent engagements across hospitality, real estate, interiors, finance, and social."
              : ""
          }
        />
      )}

      <main>
        {view === "Home"      && (
          <React.Fragment>
            <AboutSection />
            <StatsSection />
            <ServicesSection />
            <WhyChooseSection />
            <TestimonialsSection />
            <CTASection />
          </React.Fragment>
        )}
        {view === "About Us"  && <AboutPage />}
        {view === "Services"  && <ServicesPage />}
        {view === "Portfolio" && <PortfolioPage />}
      </main>

      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Headline" />
        <TweakSelect
          label="Wordmark"
          value={t.headlineMode}
          options={["banayoti", "digital", "vision", "success"]}
          onChange={(v) => setTweak("headlineMode", v)}
        />
        <TweakSelect
          label="Gradient"
          value={t.gradient}
          options={["indigoAmber", "brandBlue", "champagne", "platinum"]}
          onChange={(v) => setTweak("gradient", v)}
        />

        <TweakSection label="Hero" />
        <TweakToggle
          label="Blur orb behind headline"
          value={t.showBlurOrb}
          onChange={(v) => setTweak("showBlurOrb", v)}
        />
        <TweakToggle
          label="Client marquee"
          value={t.showMarquee}
          onChange={(v) => setTweak("showMarquee", v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
