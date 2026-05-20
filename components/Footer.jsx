// Footer.jsx — Contact, Quick Links, Connect.

function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="section__inner">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#" className="navbar__logo" aria-label="Banayoti Consulting home">
              <span className="navbar__logo-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M6 4h7.5a4.5 4.5 0 0 1 2.6 8.18A4.8 4.8 0 0 1 13.8 21H6V4z" fill="white" />
                  <path d="M9 7.4h4.3a1.9 1.9 0 1 1 0 3.8H9V7.4zm0 6.4h4.8a2 2 0 1 1 0 4H9v-4z" fill="#1a8cff" />
                </svg>
              </span>
              <span className="navbar__logo-text">
                <span className="navbar__logo-name">Banayoti</span>
                <span className="navbar__logo-sub">Consulting</span>
              </span>
            </a>
            <p className="footer__tagline">
              Experts in web, marketing, and branding.<br />
              We build digital solutions that grow with your business.
            </p>
            <div className="footer__local" aria-label="Dubai-based">
              <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                {/* 8-pointed star — a nod to Khatem geometric ornament */}
                <g transform="translate(9 9)">
                  <rect x="-6" y="-6" width="12" height="12" stroke="currentColor" strokeWidth="0.8" />
                  <rect x="-6" y="-6" width="12" height="12" stroke="currentColor" strokeWidth="0.8" transform="rotate(45)" />
                </g>
              </svg>
              <span>Headquartered in Dubai, serving the GCC and beyond.</span>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Contact</h4>
            <ul className="footer__list">
              <li><a href="mailto:info@banayoti.com">info@banayoti.com</a></li>
              <li>
                <span>
                  <svg viewBox="0 0 14 14" fill="none" className="footer__pin" aria-hidden="true">
                    <path d="M7 1.5c-2.2 0-4 1.8-4 4 0 2.7 3 6.4 3.7 7.3.2.2.5.2.6 0C8 11.9 11 8.2 11 5.5c0-2.2-1.8-4-4-4z" stroke="currentColor" strokeWidth="1" />
                    <circle cx="7" cy="5.4" r="1.3" stroke="currentColor" strokeWidth="1" />
                  </svg>
                  Dubai, UAE
                </span>
              </li>
              <li className="footer__list-meta"><span>GMT +4 &middot; Working hours 9–6</span></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__list">
              <li><a href="#" onClick={(e) => { e.preventDefault(); window.__handleNav && window.__handleNav("Home"); }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); window.__handleNav && window.__handleNav("About Us"); }}>About Us</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); window.__handleNav && window.__handleNav("Services"); }}>Services</a></li>
              <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); window.__handleNav && window.__handleNav("Portfolio"); }}>Portfolio</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); window.__handleNav && window.__handleNav("Contact"); }}>Contact Us</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Connect</h4>
            <ul className="footer__list">
              <li>
                <a href="https://www.instagram.com/banayoticonsulting" target="_blank" rel="noreferrer">
                  Instagram
                  <svg viewBox="0 0 14 14" fill="none" className="footer__arrow"><path d="M4 10 10 4M5 4h5v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/banayoti-consulting/" target="_blank" rel="noreferrer">
                  LinkedIn
                  <svg viewBox="0 0 14 14" fill="none" className="footer__arrow"><path d="M4 10 10 4M5 4h5v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__base">
          <span>© 2025 Banayoti Consulting &middot; Dubai, UAE</span>
          <span className="footer__base-meta">
            <span className="footer__star" aria-hidden="true">✦</span>
            banayoti.ae &middot; built with care in the UAE
          </span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
