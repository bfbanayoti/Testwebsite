// AmbientCards.jsx — floating glass tiles on the right side of the hero.
// They provide the "luxury data viz" depth without being slop — one metric,
// one tiny chart, one award badge, one quote.

function MetricTile() {
  return (
    <div className="tile tile--metric">
      <span className="tile__label">Avg. conversion lift</span>
      <div>
        <div className="tile__value">+218<sup>%</sup></div>
        <div className="tile__sub">Across 14 launches, last 12 months</div>
      </div>
    </div>
  );
}

function ChartTile() {
  // Simple, hand-tuned line — no slop, just one elegant rising curve.
  const pts = [
    [0, 78], [40, 70], [80, 74], [120, 58], [160, 62],
    [200, 44], [240, 48], [280, 32], [320, 22], [360, 28], [400, 12],
  ];
  const d = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" ");
  const fillD = d + ` L 400 100 L 0 100 Z`;

  return (
    <div className="tile tile--chart">
      <div className="tile__chart">
        <div className="tile__chart-head">
          <div>
            <div className="tile__chart-title">Search visibility</div>
            <div style={{ fontSize: 11, color: "var(--ink-fade)", marginTop: 2 }}>Q1 → Q4, client portfolio</div>
          </div>
          <div className="tile__chart-delta">
            <svg viewBox="0 0 10 10" width="10" height="10" fill="currentColor"><path d="M5 1 9 7H1z" /></svg>
            +312%
          </div>
        </div>
        <svg className="tile__chart-svg" viewBox="0 0 400 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4ba6ff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#4ba6ff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="chartStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8cc4ff" />
              <stop offset="100%" stopColor="oklch(0.82 0.08 85)" />
            </linearGradient>
          </defs>
          {/* baseline grid */}
          {[20, 40, 60, 80].map(y => (
            <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
          ))}
          <path d={fillD} fill="url(#chartFill)" />
          <path d={d} fill="none" stroke="url(#chartStroke)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          {pts.filter((_, i) => i % 2 === 0).map((p, i) => (
            <circle key={i} cx={p[0]} cy={p[1]} r="2" fill="#0a1638" stroke="#8cc4ff" strokeWidth="1" />
          ))}
          <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="3.5" fill="oklch(0.82 0.08 85)" />
        </svg>
      </div>
    </div>
  );
}

function BadgeTile() {
  return (
    <div className="tile tile--badge" style={{ alignItems: "center", justifyContent: "center", gap: 12 }}>
      <div className="tile__badge-ring">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 2 14.5 8.5 21 9.5 16 14.5 17 21 12 18 7 21 8 14.5 3 9.5 9.5 8.5z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="tile__badge-text">
        <strong>Awwwards SOTD</strong>
        Two‑time honoree, 2024
      </div>
    </div>
  );
}

function QuoteTile() {
  return (
    <div className="tile tile--quote">
      <div className="tile__quote">
        “They didn't just redesign our site. They reframed the business.”
      </div>
      <div className="tile__quote-byline">
        L. Marchetti · CEO, Atelier &amp; Co.
      </div>
    </div>
  );
}

function AmbientCards({ show = true }) {
  if (!show) return <div className="ambient" aria-hidden="true"></div>;
  return (
    <div className="ambient" aria-hidden="true">
      <MetricTile />
      <ChartTile />
      <BadgeTile />
      <QuoteTile />
    </div>
  );
}

window.AmbientCards = AmbientCards;
