/** Destination section */
export default function Destination() {
  return (
    <>
      {/* ============================== DESTINATION / FEATURED ============================== */}
      <section className="destination lux-dest" id="destination">
        <div className="lux-dest-bg" aria-hidden="true">
          <span className="lux-petal p1"></span>
          <span className="lux-petal p2"></span>
          <span className="lux-petal p3"></span>
          <span className="lux-petal p4"></span>
          <span className="lux-petal p5"></span>
          <svg
            className="lux-curve lux-curve-tl"
            viewBox="0 0 400 300"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M0 280 C 80 120, 180 200, 280 80 S 380 40, 400 20"
              stroke="#B9975B"
              strokeWidth="1.2"
              opacity="0.45"
            />
          </svg>
          <svg
            className="lux-curve lux-curve-br"
            viewBox="0 0 400 300"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M400 20 C 320 160, 220 100, 120 220 S 40 260, 0 280"
              stroke="#B9975B"
              strokeWidth="1.2"
              opacity="0.4"
            />
          </svg>
        </div>

        <div className="wrap lux-dest-grid">
          <div className="lux-dest-copy" data-reveal>
            <h2 className="lux-dest-title">
              Anywhere Your
              <br />
              <span className="gold">Love Takes You</span>
            </h2>
            <a className="lux-pill-btn" href="#contact">
              Plan a Destination Wedding
              <span className="pill-arrow">→</span>
            </a>

            <div className="lux-dest-cards" data-stagger>
              <article className="lux-dest-card">
                <img
                  src="media/goa.jpg"
                  alt="Goa beach wedding"
                  loading="lazy"
                />
                <span className="lux-dest-tag">
                  <span className="pin">📍</span> GOA
                </span>
              </article>
              <article className="lux-dest-card">
                <img src="media/ooty.jpg" alt="Ooty hills" loading="lazy" />
                <span className="lux-dest-tag">
                  <span className="pin">📍</span> OOTY
                </span>
              </article>
              <article className="lux-dest-card">
                <img
                  src="media/jaipur.jpg"
                  alt="Jaipur palace"
                  loading="lazy"
                />
                <span className="lux-dest-tag">
                  <span className="pin">📍</span> JAIPUR
                </span>
              </article>
              <article className="lux-dest-card">
                <img
                  src="media/hawai.jpg"
                  alt="International destination"
                  loading="lazy"
                />
                <span className="lux-dest-tag">
                  <span className="pin">📍</span> INTERNATIONAL
                </span>
              </article>
            </div>

            <div className="lux-dest-nav">
              <button
                type="button"
                className="lux-nav-btn"
                id="destPrev"
                aria-label="Previous"
              >
                ‹
              </button>
              <div className="lux-dots">
                <span className="active"></span>
                <span></span>
                <span></span>
              </div>
              <button
                type="button"
                className="lux-nav-btn"
                id="destNext"
                aria-label="Next"
              >
                ›
              </button>
            </div>
          </div>

          <div className="lux-dest-photo" data-reveal data-reveal-delay="1">
            <div className="lux-arch">
              <img
                src="media/home-2.jpg"
                alt="Couple smiling together"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
