import { useState, useEffect, useRef } from "react";
import "./Testimonial.css";

const testimonials = [
  {
    id: 1,
    quote:
      "Thank you High Click Studio for capturing the best moments of our wedding and reception. We loved the pre-wedding shoots and the traditional pictures. The team was flexible and followed up until we received our albums.",
    name: "Theebica & Purushoth",
    place: "Chennai",
  },
  {
    id: 2,
    quote:
      "We had the pleasure of working with High Click Studio for our engagement, reception and wedding. From start to finish their team showed incredible professionalism and creativity. Every frame felt intentional.",
    name: "Jeevitha & Pawan",
    place: "Coimbatore",
  },
  {
    id: 3,
    quote:
      "Wonderful experience from the pre-shoot all the way through the wedding. The pictures were beautifully captured and they create amazing reels. The team was patient and made us feel completely at ease.",
    name: "Aishwarya & Rahul",
    place: "Bangalore",
  },
  {
    id: 4,
    quote:
      "The candid and traditional photography teams were exceptional. The videography was stunning and every important detail was covered flawlessly. You’ve helped us relive our big day in the best way possible.",
    name: "Nivya & Manoj",
    place: "Chennai",
  },
  {
    id: 5,
    quote:
      "Great teamwork and the crew members were super friendly and talented. The album and photo quality came out beautifully. Thank you to the entire team for making our day feel so special.",
    name: "Pooja & Raveen",
    place: "Hyderabad",
  },
  {
    id: 6,
    quote:
      "Professional staff who showed patience throughout the event. The wedding teaser was awesome and deliverables were exactly as promised. We are fully satisfied and would definitely recommend them.",
    name: "Amrin & Saleem",
    place: "Chennai",
  },
];

const PER_PAGE = 3;

export default function Testimonials() {
  const totalPages = Math.ceil(testimonials.length / PER_PAGE);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);

  // autoplay — pauses while hovering/focusing so cards never move under the cursor
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 7000);
    return () => clearInterval(timer);
  }, [totalPages, paused, page]);

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 50) dx < 0 ? next() : prev();
  };

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  return (
    <section className="testimonials" id="stories">
      <div className="testimonials__header" data-reveal>
        <span className="testimonials__label">Testimonials</span>
        <h2 className="testimonials__title">Kind Words</h2>
      </div>

      <div
        className="testimonials__slider"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="testimonials__track"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className="testimonials__page"
              aria-hidden={pageIndex !== page}
            >
              {testimonials
                .slice(pageIndex * PER_PAGE, pageIndex * PER_PAGE + PER_PAGE)
                .map((item) => (
                  <article key={item.id} className="testimonials__card">
                    <p className="testimonials__quote">“{item.quote}”</p>
                    <div className="testimonials__author">
                      <strong>{item.name}</strong>
                      <span>{item.place}</span>
                    </div>
                  </article>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="testimonials__controls">
        <button
          className="testimonials__arrow"
          onClick={prev}
          aria-label="Previous"
        >
          ←
        </button>

        <div className="testimonials__dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`testimonials__dot ${i === page ? "is-active" : ""}`}
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>

        <button
          className="testimonials__arrow"
          onClick={next}
          aria-label="Next"
        >
          →
        </button>
      </div>
    </section>
  );
}
