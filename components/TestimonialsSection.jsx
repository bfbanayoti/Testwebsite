// TestimonialsSection.jsx — real client testimonials from banayoti.com.

const TESTIMONIALS = [
  {
    quote: "We highly recommend Banayoti Consulting. They are easy to work with and very responsive. The communication throughout the entire process was excellent. They always delivered prompt replies, clear information, and kept us informed at every step. Our website now includes numerous new features, which we anticipate will increase traffic.",
    name: "Liana Kouimtzi",
    org: "Wista UAE",
  },
  {
    quote: "Working with Banayoti Consulting was a game changer for us. They built a sleek, functional website and grew our Instagram by 1,000 followers organically. Their attention to detail and deep understanding of our brand were exceptional. We highly recommend them for any business looking to elevate their online presence.",
    name: "Grace Iskander",
    org: "GI Interiors",
  },
  {
    quote: "Banayoti Consulting transformed our online presence with a sleek, responsive website that truly represents our brand. Their team's expertise in digital marketing has significantly increased our online engagement. Their ongoing support and attention to detail have made them an invaluable digital partner.",
    name: "Ayman Girgis",
    org: "Excela Properties",
  },
  {
    quote: "Banayoti gave our brand a fresh, modern look and a website that truly works. Fast, professional, and creative.",
    name: "Ranya Al Qasim",
    org: "Client",
  },
  {
    quote: "They delivered a website that truly reflects our company's vision and professionalism. We've received great feedback from clients and partners.",
    name: "Fadil Mikhail",
    org: "Tribus International",
  },
  {
    quote: "The website perfectly captures the luxury feel of our brand. Our customers love it, and so do we.",
    name: "Hardeep Chana",
    org: "Luxx Stairwell Chandeliers",
  },
  {
    quote: "Working with the team was seamless. They delivered exactly what we needed, on time and on brief.",
    org: "Harvard Hearns Logistics",
  },
  {
    quote: "After years with an outdated site, they gave us a modern platform we're genuinely proud of. Enquiries have increased noticeably since launch.",
    org: "Design 2000 (UK) Ltd",
  },
];

function Stars() {
  return (
    <span className="t-stars" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 12 12" fill="currentColor">
          <path d="M6 1l1.5 3.2 3.5.4-2.6 2.4.7 3.5L6 8.9 2.9 10.5l.7-3.5L1 4.6l3.5-.4L6 1z" />
        </svg>
      ))}
    </span>
  );
}

function TestimonialCard({ quote, name, org, featured }) {
  return (
    <figure className={`t-card${featured ? " t-card--featured" : ""}`}>
      <Stars />
      <blockquote className="t-card__quote">{quote}</blockquote>
      <figcaption className="t-card__byline">
        {name && <span className="t-card__avatar" aria-hidden="true">{name[0]}</span>}
        <span>
          {name && <strong>{name}</strong>}
          <span className="t-card__org">{org}</span>
        </span>
      </figcaption>
    </figure>
  );
}

function TestimonialsSection() {
  return (
    <section className="section section--testimonials" id="testimonials" aria-labelledby="t-title">
      <div className="section__inner">
        <div className="section__head section__head--center">
          <span className="section__eyebrow"><span className="section__eyebrow-dot"></span>Testimonials</span>
          <h2 id="t-title" className="section__title section__title--center">
            What our clients <span className="section__title-grad">actually say.</span>
          </h2>
        </div>

        <div className="t-masonry">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

window.TestimonialsSection = TestimonialsSection;
