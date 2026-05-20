// LiquidBackground.jsx — animated abstract motion that fills behind the hero.
// Acts as a "video placeholder" — real MP4 can be swapped in via the Tweaks panel.

function LiquidBackground({ motion = "liquid", videoSrc = null }) {
  return (
    <div className="liquid-bg" aria-hidden="true">
      {videoSrc ? (
        <video
          className="liquid-bg__video"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : null}
      <div className={`liquid-bg__orb orb-a motion-${motion}`}></div>
      <div className={`liquid-bg__orb orb-b motion-${motion}`}></div>
      <div className={`liquid-bg__orb orb-c motion-${motion}`}></div>
      <div className={`liquid-bg__orb orb-d motion-${motion}`}></div>
      <div className="liquid-bg__aurora"></div>
      <div className="liquid-bg__grain"></div>
      <div className="liquid-bg__vignette"></div>
    </div>
  );
}

window.LiquidBackground = LiquidBackground;
