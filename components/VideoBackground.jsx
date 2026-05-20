// VideoBackground.jsx — full-bleed looping video, HARD-MUTED.
//
// Audio is impossible by construction:
//   1. The <video> element has the `muted` HTML attribute (frame-zero mute).
//   2. JS sets `muted=true` and `volume=0` on every relevant event
//      (loadedmetadata, canplay, volumechange, play).
//   3. Every track in `audioTracks` is disabled once tracks become available.
//
// The visual still animates exactly as before — the cloudfront looping clip
// plays full-bleed, with a custom JS fade-in/out per loop.

const DEFAULT_VIDEO_SRC = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4";

function VideoBackground({ src = DEFAULT_VIDEO_SRC, fade = true }) {
  const videoRef = React.useRef(null);
  const rafRef = React.useRef(null);
  const resumeTimerRef = React.useRef(null);

  React.useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    // ── Mute enforcement (every safeguard we have) ───────────────────────
    const enforceMute = () => {
      vid.muted = true;
      try { vid.volume = 0; } catch (e) {}
      try {
        if (vid.audioTracks && vid.audioTracks.length) {
          for (let i = 0; i < vid.audioTracks.length; i++) {
            vid.audioTracks[i].enabled = false;
          }
        }
      } catch (e) {}
    };
    enforceMute();
    vid.addEventListener("loadedmetadata", enforceMute);
    vid.addEventListener("volumechange",   enforceMute);
    vid.addEventListener("canplay",        enforceMute);

    // ── Web Audio silencing: capture the video's audio at the source and
    //    route it through a gain=0 node, so any sound is killed BEFORE the
    //    browser's audio output. Survives even if vid.muted somehow flips.
    let audioCtx = null;
    const wireAudioSink = () => {
      if (audioCtx) return;
      try {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        audioCtx = new AC();
        const source = audioCtx.createMediaElementSource(vid);
        const silentGain = audioCtx.createGain();
        silentGain.gain.value = 0;
        source.connect(silentGain);
        silentGain.connect(audioCtx.destination);
      } catch (e) {
        // Some browsers throw if MediaElementSource is created more than
        // once on the same element — that's fine, the muted attr + JS
        // enforcement already cover us.
        audioCtx = null;
      }
    };
    // Wire on the first user interaction (AudioContext requires a gesture
    // in most browsers); also try immediately in case it's already allowed.
    wireAudioSink();
    const onFirstGesture = () => {
      wireAudioSink();
      if (audioCtx && audioCtx.state === "suspended") {
        try { audioCtx.resume(); } catch (e) {}
      }
      window.removeEventListener("pointerdown", onFirstGesture);
      window.removeEventListener("keydown",     onFirstGesture);
      window.removeEventListener("touchstart",  onFirstGesture);
    };
    window.addEventListener("pointerdown", onFirstGesture, { passive: true });
    window.addEventListener("keydown",     onFirstGesture, { passive: true });
    window.addEventListener("touchstart",  onFirstGesture, { passive: true });

    // ── Custom fade-in/out loop ──────────────────────────────────────────
    const FADE_MS = 500;

    const cancelLoop = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };

    const tick = () => {
      if (!vid || vid.paused) { rafRef.current = null; return; }
      const dur = vid.duration;
      const t = vid.currentTime;

      if (!fade) {
        vid.style.opacity = 1;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      if (!isFinite(dur) || dur <= 0) {
        vid.style.opacity = Math.min(1, t / (FADE_MS / 1000));
      } else {
        const fadeInTime = FADE_MS / 1000;
        const fadeOutStart = Math.max(0, dur - FADE_MS / 1000);
        if (t < fadeInTime) {
          vid.style.opacity = Math.max(0, t / fadeInTime);
        } else if (t >= fadeOutStart) {
          const remaining = Math.max(0, dur - t);
          vid.style.opacity = Math.max(0, remaining / (FADE_MS / 1000));
        } else {
          vid.style.opacity = 1;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    const onPlay = () => { enforceMute(); cancelLoop(); rafRef.current = requestAnimationFrame(tick); };
    const onPause = () => { cancelLoop(); };
    const onEnded = () => {
      cancelLoop();
      vid.style.opacity = 0;
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = setTimeout(() => {
        try {
          vid.currentTime = 0;
          const p = vid.play();
          if (p && p.catch) p.catch(() => {});
        } catch (e) { /* ignore */ }
      }, 100);
    };

    vid.addEventListener("play", onPlay);
    vid.addEventListener("pause", onPause);
    vid.addEventListener("ended", onEnded);

    const p = vid.play();
    if (p && p.catch) p.catch(() => {});

    return () => {
      cancelLoop();
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      vid.removeEventListener("play", onPlay);
      vid.removeEventListener("pause", onPause);
      vid.removeEventListener("ended", onEnded);
      vid.removeEventListener("loadedmetadata", enforceMute);
      vid.removeEventListener("volumechange",   enforceMute);
      vid.removeEventListener("canplay",        enforceMute);
      window.removeEventListener("pointerdown", onFirstGesture);
      window.removeEventListener("keydown",     onFirstGesture);
      window.removeEventListener("touchstart",  onFirstGesture);
      if (audioCtx) {
        try { audioCtx.close(); } catch (e) {}
      }
    };
  }, [src, fade]);

  return (
    <React.Fragment>
      {/* Soft CSS scene sits behind the video so the hero never looks bare
          (video poster gap, loading state, the brief moment between loops). */}
      <div className="video-fallback" aria-hidden="true">
        <div className="vf-orb vf-orb--a"></div>
        <div className="vf-orb vf-orb--b"></div>
        <div className="vf-orb vf-orb--c"></div>
        <div className="vf-orb vf-orb--d"></div>
        <div className="vf-aurora"></div>
        <div className="vf-grain"></div>
        <div className="vf-vignette"></div>
      </div>

      <video
        ref={videoRef}
        className="bg-video"
        src={src}
        muted
        playsInline
        autoPlay
        preload="auto"
        aria-hidden="true"
        disablePictureInPicture
        disableRemotePlayback
      />
    </React.Fragment>
  );
}

window.VideoBackground = VideoBackground;
window.__DEFAULT_VIDEO_SRC = DEFAULT_VIDEO_SRC;
