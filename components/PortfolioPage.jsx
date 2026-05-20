// PortfolioPage.jsx — full portfolio synced from banayoti.com/portfolio.
// Real client list, real screenshots, real outbound links, and where you've
// published a testimonial on banayoti.com we pull the quote in too.

const PROJECTS = [
  {
    n: "01",
    client: "Tribus International",
    sector: "Website development",
    visual: "https://banayoti.com/wp-content/uploads/2025/11/Macbook-Laptop-Screen-Mockup-1-1.png",
    url: "https://tribus.ae/",
    cta: "Visit Website",
    tint: ["#6366f1", "#1a3aa8"],
    aspect: "landscape",
  },
  {
    n: "02",
    client: "Harvard Hearns Logistics",
    sector: "Website development",
    visual: "https://image.thum.io/get/width/1200/crop/750/noanimate/https://harvardhearns.com/",
    url: "https://harvardhearns.com/",
    cta: "Visit Website",
    quote: "A clean, conversion-focused website for a London-based logistics and supply chain company — built to communicate trust, speed, and nationwide reach.",
    tint: ["#1a8cff", "#0a3a8a"],
    aspect: "landscape",
    frame: true,
  },
  {
    n: "03",
    client: "Luxx Stairwell Chandeliers",
    sector: "Website development · Payment integration",
    visual: "assets/luxx-preview.webp",
    url: "https://luxxstairwellchandeliers.co.uk/",
    cta: "Visit Website",
    quote: "A fully custom e-commerce experience for a luxury UK chandelier brand — complete product catalogue, variant selection, and end-to-end payment integration.",
    tint: ["#fcd34d", "#c4860a"],
    aspect: "landscape",
    frame: true,
  },
  {
    n: "04",
    client: "Excela Properties",
    sector: "Website development",
    visual: "https://banayoti.com/wp-content/uploads/2025/11/Macbook-Laptop-Screen-Mockup-1-1-1.png",
    url: "http://excelahomes.com/",
    cta: "Visit Website",
    quote: "Their team's expertise in digital marketing has significantly increased our online engagement.",
    by: "Ayman Girgis",
    tint: ["#fcd34d", "#b88a17"],
    aspect: "landscape",
  },
  {
    n: "05",
    client: "INVICTUS Investment Company",
    sector: "Website development",
    visual: "https://banayoti.com/wp-content/uploads/2025/05/Macbook-Laptop-Screen-Mockup-2.png",
    url: "https://invictusinvestment.ae/",
    cta: "Visit Website",
    tint: ["#1a8cff", "#0a4cb2"],
    aspect: "landscape",
  },
  {
    n: "06",
    client: "GI Interiors",
    sector: "Website development",
    visual: "https://banayoti.com/wp-content/uploads/2025/05/Macbook-Laptop-Screen-Mockup.png",
    url: "https://www.giinteriors.com/",
    cta: "Visit Website",
    quote: "Their attention to detail and deep understanding of our brand were exceptional.",
    by: "Grace Iskander",
    tint: ["#a855f7", "#4b1f9a"],
    aspect: "landscape",
  },
  {
    n: "07",
    client: "INVICTUS Trading",
    sector: "Website development",
    visual: "https://banayoti.com/wp-content/uploads/2025/06/d2713a9de67e16d6ed6a0335c242a57c63424d6c-e1748971532969.webp",
    url: "https://invictustrading.ae/",
    cta: "Visit Website",
    tint: ["#4ba6ff", "#1144aa"],
    aspect: "landscape",
  },
  {
    n: "08",
    client: "Wista UAE",
    sector: "Website development",
    visual: "https://banayoti.com/wp-content/uploads/2025/06/Group-1707478734.png",
    url: "https://www.wistauae.com/",
    cta: "Visit Website",
    quote: "The communication throughout the entire process was excellent. They always delivered prompt replies, clear information, and kept us informed at every step.",
    by: "Liana Kouimtzi",
    tint: ["#1a8cff", "#0a4cb2"],
    aspect: "landscape",
  },
  {
    n: "09",
    client: "Sip and Rise",
    sector: "Social media management",
    visual: "https://banayoti.com/wp-content/uploads/2025/05/Frame-3.png",
    url: "https://www.instagram.com/sipandriselondon",
    cta: "Visit Page",
    tint: ["#a855f7", "#6366f1"],
    aspect: "portrait",
  },
  {
    n: "10",
    client: "Design 2000 (UK) Ltd",
    sector: "Website development",
    visual: "https://banayoti.com/wp-content/uploads/2025/05/Macbook-Laptop-Screen-Mockup-1.png",
    url: "https://www.design2000.co.uk/",
    cta: "Visit Website",
    tint: ["#8cc4ff", "#1a4d8c"],
    aspect: "landscape",
  },
  {
    n: "11",
    client: "GI Interiors",
    sector: "Social media management",
    visual: null,
    url: "https://www.instagram.com/gi_interior_fitouts",
    cta: "Visit Page",
    tint: ["#a855f7", "#4b1f9a"],
    aspect: "portrait",
  },
];

function LaptopMockup({ src, onError }) {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <div className="laptop-mock">
      <div className="laptop-mock__lid">
        <div className="laptop-mock__screen">
          <div className="laptop-mock__display-notch" />
          {!loaded && <div className="laptop-mock__skeleton" />}
          <img
            src={src}
            alt=""
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={onError}
            onLoad={() => setLoaded(true)}
            style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" }}
          />
        </div>
      </div>
      <div className="laptop-mock__base">
        <div className="laptop-mock__groove" />
      </div>
    </div>
  );
}

function CaseStudy({ n, client, sector, visual, url, cta, quote, by, tint, aspect = "landscape", frame = false }) {
  const [imgFailed, setImgFailed] = React.useState(false);

  return (
    <article className="case-row">
      <div className="case-row__inner section__inner">
        <div className="case-row__index">
          <span className="case-row__n">{n}</span>
          <span className="case-row__sector">{sector}</span>
        </div>

        <div className={`case-row__visual case-row__visual--${aspect}`} aria-hidden="true">
          <div
            className="case-row__visual-fill"
            style={{
              background:
                `radial-gradient(120% 100% at 30% 20%, ${tint[0]}55, ${tint[1]}aa 60%, ${tint[1]}ee 100%)`,
            }}
          ></div>
          <div className="case-row__visual-grid"></div>
          {visual && !imgFailed ? (
            frame ? (
              <LaptopMockup src={visual} onError={() => setImgFailed(true)} />
            ) : (
              <img
                src={visual}
                alt=""
                loading="lazy"
                className="case-row__visual-img"
                referrerPolicy="no-referrer"
                onError={() => setImgFailed(true)}
              />
            )
          ) : (
            <span className="case-row__visual-mark">{client[0]}</span>
          )}
        </div>

        <div className="case-row__body">
          <h2 className="case-row__client">{client}</h2>
          {quote ? (
            <blockquote className="case-row__quote">
              &ldquo;{quote}&rdquo;
              <cite>— {by}</cite>
            </blockquote>
          ) : null}
          <a
            href={url}
            className="case-row__cta"
            target="_blank"
            rel="noreferrer"
          >
            {cta}
            <svg viewBox="0 0 14 14" fill="none">
              <path d="M4 10 10 4M5 4h5v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

function PortfolioPage() {
  return (
    <React.Fragment>
      <div className="case-list">
        {PROJECTS.map((p) => <CaseStudy key={p.n} {...p} />)}
      </div>

      <CTASection />
    </React.Fragment>
  );
}

window.PortfolioPage = PortfolioPage;
