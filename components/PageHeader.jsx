// PageHeader.jsx — cinematic inner-page header.

function PageHeader({ index = "01", eyebrow, title, gradTail, lede, current, onSelect }) {

  const handleScrollCue = () => {
    const main = document.querySelector("main");
    if (main) {
      main.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="page-header page-header--v2">
      <div className="page-header__bg" aria-hidden="true">
        <div className="vf-orb vf-orb--a"></div>
        <div className="vf-orb vf-orb--b"></div>
        <div className="vf-orb vf-orb--c"></div>
        <div className="vf-aurora"></div>
        <div className="vf-grain"></div>
        <div className="vf-vignette"></div>
      </div>

      <HeroNav current={current} onSelect={onSelect} />

      <header className="ph">
        <div className="ph__inner">
          <div className="ph__meta">
            <span className="ph__index">{index}</span>
            <span className="ph__rule"></span>
            <span className="ph__eyebrow">{eyebrow}</span>
          </div>

          <h1 className="ph__title">
            {title}
            {gradTail ? (
              <React.Fragment>
                {" "}<span className="section__title-grad">{gradTail}</span>
              </React.Fragment>
            ) : null}
          </h1>

          {lede ? <p className="ph__lede">{lede}</p> : null}

          <button
            className="ph__cue"
            onClick={handleScrollCue}
            aria-label="Scroll to content"
          >
            <span>Scroll</span>
            <span className="ph__cue-line"></span>
          </button>
        </div>
      </header>
    </div>
  );
}

window.PageHeader = PageHeader;
