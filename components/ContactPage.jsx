// ContactPage.jsx — Neuralyn-inspired dark glass contact page.

function ContactInfoItem({ icon, label, value, href }) {
  const content = (
    <React.Fragment>
      <span className="cp-info__icon" aria-hidden="true">{icon}</span>
      <span className="cp-info__text">
        <span className="cp-info__label">{label}</span>
        <span className="cp-info__value">{value}</span>
      </span>
    </React.Fragment>
  );
  return (
    <li className="cp-info__item">
      {href ? <a href={href} className="cp-info__link">{content}</a> : <span className="cp-info__link">{content}</span>}
    </li>
  );
}

function ContactPage() {
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = React.useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const data = new FormData();
      Object.entries(form).forEach(([key, val]) => {
        if (val) data.append(key, val);
      });
      const res = await fetch("https://formspree.io/f/xjgzoqqd", {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        const json = await res.json().catch(() => ({}));
        console.error("Formspree error:", json);
        setStatus("error");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="al-page cp-root">

      {/* ── Ambient glow orbs ── */}
      <div className="cp-orb cp-orb--a" aria-hidden="true" />
      <div className="cp-orb cp-orb--b" aria-hidden="true" />

      {/* ── Two-column body ── */}
      <section className="cp-body section__inner" aria-label="Contact details and form">

        {/* LEFT — info panel */}
        <aside className="cp-panel cp-glass" aria-label="Contact information">

          {/* gradient border line top */}
          <div className="cp-glass__top-line" aria-hidden="true" />

          <div className="cp-panel__inner">
            <p className="cp-panel__intro">
              We&rsquo;re a digital consultancy headquartered in Dubai, partnering with brands across the GCC and beyond.
            </p>

            <ul className="cp-info__list">
              <ContactInfoItem
                icon={
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M3 8l7 5 7-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                }
                label="Email"
                value="info@banayoti.com"
                href="mailto:info@banayoti.com"
              />
              <ContactInfoItem
                icon={
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M10 2a5.5 5.5 0 0 0-5.5 5.5c0 3.75 5.5 10.5 5.5 10.5s5.5-6.75 5.5-10.5A5.5 5.5 0 0 0 10 2z" stroke="currentColor" strokeWidth="1.2"/>
                    <circle cx="10" cy="7.5" r="1.8" stroke="currentColor" strokeWidth="1.2"/>
                  </svg>
                }
                label="Location"
                value="Dubai, UAE"
              />
              <ContactInfoItem
                icon={
                  <svg viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                }
                label="Working hours"
                value="Mon–Fri, 9 AM – 6 PM (GMT +4)"
              />
            </ul>

            <div className="cp-panel__divider" aria-hidden="true" />

            <div className="cp-socials">
              <span className="cp-socials__label">Connect</span>
              <div className="cp-socials__links">
                <a href="https://www.instagram.com/banayoticonsulting" target="_blank" rel="noreferrer" className="cp-social-btn" aria-label="Instagram">
                  <svg viewBox="0 0 20 20" fill="none">
                    <rect x="2.5" y="2.5" width="15" height="15" rx="4.5" stroke="currentColor" strokeWidth="1.3"/>
                    <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.3"/>
                    <circle cx="14.5" cy="5.5" r="0.8" fill="currentColor"/>
                  </svg>
                  Instagram
                </a>
                <a href="https://www.linkedin.com/company/banayoti-consulting/" target="_blank" rel="noreferrer" className="cp-social-btn" aria-label="LinkedIn">
                  <svg viewBox="0 0 20 20" fill="none">
                    <rect x="2.5" y="2.5" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="1.3"/>
                    <path d="M6.5 8.5v5M6.5 6.5v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                    <path d="M10 13.5v-3a1.5 1.5 0 0 1 3 0v3M10 8.5v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* RIGHT — form */}
        <div className="cp-form-wrap cp-glass" aria-label="Contact form">
          <div className="cp-glass__top-line" aria-hidden="true" />

          {status === "sent" ? (
            <div className="cp-sent">
              <div className="cp-sent__icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" stroke="url(#cg)" strokeWidth="1.5"/>
                  <path d="M14 24l7 7 13-13" stroke="url(#cg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="cg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#6366f1"/>
                      <stop offset="1" stopColor="#1a8cff"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h2 className="cp-sent__title">Message sent!</h2>
              <p className="cp-sent__sub">We&rsquo;ll get back to you within one business day.</p>
              <button className="cp-btn" onClick={() => setStatus("idle")}>Send another</button>
            </div>
          ) : (
            <form className="cp-form" onSubmit={handleSubmit} noValidate>
              <div className="cp-form__row">
                <div className="cp-field">
                  <label className="cp-field__label" htmlFor="cp-name">Full name <span className="cp-required">*</span></label>
                  <input
                    id="cp-name"
                    className="cp-field__input"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Barsoum Banayoti"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="cp-field">
                  <label className="cp-field__label" htmlFor="cp-email">Email <span className="cp-required">*</span></label>
                  <input
                    id="cp-email"
                    className="cp-field__input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="cp-form__row">
                <div className="cp-field">
                  <label className="cp-field__label" htmlFor="cp-phone">Phone <span className="cp-optional">(optional)</span></label>
                  <input
                    id="cp-phone"
                    className="cp-field__input"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+971 50 000 0000"
                    autoComplete="tel"
                  />
                </div>
                <div className="cp-field">
                  <label className="cp-field__label" htmlFor="cp-subject">Subject <span className="cp-required">*</span></label>
                  <input
                    id="cp-subject"
                    className="cp-field__input"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Website project"
                    required
                  />
                </div>
              </div>

              <div className="cp-field cp-field--full">
                <label className="cp-field__label" htmlFor="cp-message">Message <span className="cp-required">*</span></label>
                <textarea
                  id="cp-message"
                  className="cp-field__input cp-field__textarea"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, and timeline…"
                  required
                  rows="5"
                />
              </div>

              {status === "error" && (
                <p className="cp-form__error" role="alert">Something went wrong — please try again or email us directly at info@banayoti.com.</p>
              )}

              <button
                type="submit"
                className={`cp-btn cp-btn--submit${status === "sending" ? " cp-btn--loading" : ""}`}
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <React.Fragment>
                    <span className="cp-spinner" aria-hidden="true" />
                    Sending…
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    Send message
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </React.Fragment>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

window.ContactPage = ContactPage;
