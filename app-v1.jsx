// app.jsx — composes the page and wires Tweaks.

function App() {
  const [t, setTweak] = useTweaks(window.__TWEAK_DEFAULTS);
  const [videoUrl, setVideoUrl] = React.useState("");
  const [appliedVideo, setAppliedVideo] = React.useState(null);

  // Update CSS vars based on accent choice.
  React.useEffect(() => {
    const root = document.documentElement;
    if (t.accent === "champagne") {
      root.style.setProperty("--gold", "oklch(0.82 0.08 85)");
      root.style.setProperty("--gold-soft", "oklch(0.82 0.08 85 / 0.5)");
      root.style.setProperty("--gold-line", "oklch(0.82 0.08 85 / 0.35)");
    } else if (t.accent === "platinum") {
      root.style.setProperty("--gold", "oklch(0.88 0.015 250)");
      root.style.setProperty("--gold-soft", "oklch(0.88 0.015 250 / 0.5)");
      root.style.setProperty("--gold-line", "oklch(0.88 0.015 250 / 0.35)");
    } else if (t.accent === "electric") {
      root.style.setProperty("--gold", "#4ba6ff");
      root.style.setProperty("--gold-soft", "rgba(75, 166, 255, 0.5)");
      root.style.setProperty("--gold-line", "rgba(75, 166, 255, 0.35)");
    } else if (t.accent === "rose") {
      root.style.setProperty("--gold", "oklch(0.78 0.08 25)");
      root.style.setProperty("--gold-soft", "oklch(0.78 0.08 25 / 0.5)");
      root.style.setProperty("--gold-line", "oklch(0.78 0.08 25 / 0.35)");
    }
  }, [t.accent]);

  // Glass intensity — change blur strength via data attr.
  React.useEffect(() => {
    document.documentElement.dataset.glass = t.glassIntensity;
    const map = {
      subtle:   { blur: "16px", sat: "140%", bg: "0.03" },
      balanced: { blur: "32px", sat: "180%", bg: "0.045" },
      maximal:  { blur: "44px", sat: "220%", bg: "0.07" },
    };
    const cfg = map[t.glassIntensity] || map.balanced;
    document.documentElement.style.setProperty("--glass-blur", cfg.blur);
    document.documentElement.style.setProperty("--glass-sat", cfg.sat);
  }, [t.glassIntensity]);

  // Light/dark base. (Dark is the canonical luxury look; light is provided as an alternate.)
  React.useEffect(() => {
    if (t.darkMode) {
      document.body.style.background = "";
      document.body.style.color = "";
    } else {
      document.body.style.background = "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(26,140,255,0.10), transparent 60%), #f4f6fa";
      // Note: light mode is a quick alt — full pass would re-tune card surfaces.
    }
  }, [t.darkMode]);

  return (
    <div className="page">
      <LiquidBackground motion={t.bgMotion} videoSrc={appliedVideo} />
      <GlassNav />
      <main className="hero" role="main">
        <div className="hero__grid">
          <HeroCard headlineStyle={t.headlineStyle} />
          <AmbientCards show={t.showStats} />
        </div>

        <div className="scroll-hint" aria-hidden="true">
          <span>Scroll</span>
          <span className="scroll-hint__line"></span>
        </div>
      </main>

      <div className="marquee" aria-label="Selected clients">
        <span className="marquee__label">Trusted by</span>
        <div className="marquee__track">
          {["Atelier & Co.", "Lumen Health", "Vela Spirits", "Northbank Capital", "Maison Verre", "Orchard Studio", "Atelier & Co.", "Lumen Health", "Vela Spirits", "Northbank Capital", "Maison Verre", "Orchard Studio"].map((name, i) => (
            <React.Fragment key={i}>
              <span className="marquee__item">{name}</span>
              <span className="marquee__dot"></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Aesthetic" />
        <TweakColor
          label="Luxury accent"
          value={t.accent}
          options={["champagne", "platinum", "electric", "rose"]}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakRadio
          label="Headline"
          value={t.headlineStyle}
          options={["serif", "sans"]}
          onChange={(v) => setTweak("headlineStyle", v)}
        />
        <TweakSelect
          label="Glass depth"
          value={t.glassIntensity}
          options={["subtle", "balanced", "maximal"]}
          onChange={(v) => setTweak("glassIntensity", v)}
        />

        <TweakSection label="Hero video" />
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ fontSize: 10.5, color: "rgba(41,38,27,0.6)", lineHeight: 1.45 }}>
            Currently using an animated abstract background. Paste an MP4 URL to swap in your own footage (looping, muted, full‑bleed).
          </div>
          <input
            type="text"
            placeholder="https://… .mp4"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            style={{
              padding: "6px 8px",
              borderRadius: 7,
              border: "0.5px solid rgba(0,0,0,0.15)",
              background: "rgba(255,255,255,0.7)",
              fontSize: 11,
              fontFamily: "inherit",
              color: "#29261b",
              outline: "none",
            }}
          />
          <div style={{ display: "flex", gap: 6 }}>
            <TweakButton label="Apply" onClick={() => setAppliedVideo(videoUrl || null)} />
            <TweakButton label="Clear" variant="ghost" onClick={() => { setVideoUrl(""); setAppliedVideo(null); }} />
          </div>
        </div>

        <TweakSection label="Layout" />
        <TweakToggle
          label="Ambient data tiles"
          value={t.showStats}
          onChange={(v) => setTweak("showStats", v)}
        />
        <TweakToggle
          label="Dark mode"
          value={t.darkMode}
          onChange={(v) => setTweak("darkMode", v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
