/** Testimonial section */
export default function Testimonial() {
  return (
    <>
{/* ============================== TESTIMONIAL ============================== */}
    <section className="testimonial" id="stories">
      {/* warm stage: gold curves, petals, side labels, botanical */}
      <div className="testi-scenery" aria-hidden="true">
        <svg
          className="testi-curve testi-curve-tl"
          viewBox="0 0 480 320"
          fill="none"
        >
          <defs>
            <linearGradient id="tcTL" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#c9a86c" stopOpacity="0" />
              <stop offset="0.35" stopColor="#c9a86c" stopOpacity="0.85" />
              <stop offset="0.7" stopColor="#e8c48a" stopOpacity="0.7" />
              <stop offset="1" stopColor="#c9a86c" stopOpacity="0" />
            </linearGradient>
            <filter id="tcGlow">
              <feGaussianBlur stdDeviation="1.8" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#tcGlow)">
            <path
              className="testi-draw"
              pathLength="1"
              d="M0 280 C 80 200, 160 240, 240 140 C 300 80, 380 40, 480 20"
              stroke="url(#tcTL)"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <path
              className="testi-draw testi-draw-soft"
              pathLength="1"
              d="M40 300 C 120 220, 200 260, 280 180"
              stroke="url(#tcTL)"
              strokeWidth="0.9"
              opacity="0.5"
            />
          </g>
        </svg>
        <svg
          className="testi-curve testi-curve-tr"
          viewBox="0 0 400 280"
          fill="none"
        >
          <defs>
            <linearGradient id="tcTR" x1="1" y1="1" x2="0" y2="0">
              <stop offset="0" stopColor="#c9a86c" stopOpacity="0" />
              <stop offset="0.4" stopColor="#c9a86c" stopOpacity="0.8" />
              <stop offset="1" stopColor="#e8c48a" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g filter="url(#tcGlow)">
            <path
              className="testi-draw"
              pathLength="1"
              d="M400 240 C 320 180, 260 200, 180 120 C 120 70, 60 40, 0 10"
              stroke="url(#tcTR)"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </g>
        </svg>
        <svg
          className="testi-curve testi-curve-bl"
          viewBox="0 0 420 260"
          fill="none"
        >
          <defs>
            <linearGradient id="tcBL" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#c9a86c" stopOpacity="0.9" />
              <stop offset="0.55" stopColor="#e8c48a" stopOpacity="0.7" />
              <stop offset="1" stopColor="#c9a86c" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g filter="url(#tcGlow)">
            <path
              className="testi-draw"
              pathLength="1"
              d="M0 40 C 70 100, 150 30, 240 90 C 310 130, 360 180, 420 230"
              stroke="url(#tcBL)"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </g>
        </svg>
        <svg
          className="testi-curve testi-curve-br"
          viewBox="0 0 420 260"
          fill="none"
        >
          <defs>
            <linearGradient id="tcBR" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#c9a86c" stopOpacity="0.9" />
              <stop offset="0.55" stopColor="#e8c48a" stopOpacity="0.7" />
              <stop offset="1" stopColor="#c9a86c" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g filter="url(#tcGlow)">
            <path
              className="testi-draw"
              pathLength="1"
              d="M420 40 C 350 100, 270 30, 180 90 C 110 130, 60 180, 0 230"
              stroke="url(#tcBR)"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </g>
        </svg>

        {/* botanical sketch near polaroid */}
        <svg className="testi-botanical" viewBox="0 0 120 180" fill="none">
          <path
            d="M20 170 C 30 120, 50 90, 55 40"
            stroke="#c9a86c"
            strokeWidth="1"
            opacity="0.55"
          />
          <path
            d="M55 90 C 70 80, 95 85, 110 70"
            stroke="#c9a86c"
            strokeWidth="0.9"
            opacity="0.45"
          />
          <path
            d="M50 120 C 35 110, 20 115, 10 100"
            stroke="#c9a86c"
            strokeWidth="0.9"
            opacity="0.45"
          />
          <path
            d="M58 55 C 72 48, 88 52, 100 40"
            stroke="#c9a86c"
            strokeWidth="0.8"
            opacity="0.4"
          />
          <ellipse
            cx="55"
            cy="38"
            rx="8"
            ry="12"
            stroke="#c9a86c"
            strokeWidth="0.8"
            opacity="0.4"
            transform="rotate(-20 55 38)"
          />
          <ellipse
            cx="48"
            cy="70"
            rx="6"
            ry="10"
            stroke="#c9a86c"
            strokeWidth="0.7"
            opacity="0.35"
            transform="rotate(25 48 70)"
          />
        </svg>

        <span className="testi-petal p1"></span>
        <span className="testi-petal p2"></span>
        <span className="testi-petal p3"></span>
        <span className="testi-petal p4"></span>
        <span className="testi-petal p5"></span>
        <span className="testi-petal p6"></span>
        <span className="testi-bokeh b1"></span>
        <span className="testi-bokeh b2"></span>
        <span className="testi-bokeh b3"></span>
        <span className="testi-bokeh b4"></span>
      </div>

      {/* side labels */}
      <span className="testi-side-label testi-side-tl" aria-hidden="true"
        >A Day<br />A Thousand<br />Emotions</span
      >
      <span className="testi-side-label testi-side-bl" aria-hidden="true"
        >Weddings<br />Through<br />Our Lens</span
      >
      <span className="testi-side-label testi-side-tr" aria-hidden="true"
        >Real People<br />Real Moments</span
      >
      <div className="testi-side-rail" aria-hidden="true">
        <span className="testi-rail-label">Stories</span>
        <span className="testi-rail-line"></span>
        <span className="testi-rail-dot active"></span>
        <span className="testi-rail-dot"></span>
        <span className="testi-rail-dot"></span>
      </div>

      <div className="wrap testi-grid">
        <figure className="polaroid" data-reveal>
          <img
            id="testiImg"
            src="media/home-3-bw.jpg"
            alt="Couple portrait, black and white"
          />
          <figcaption>
            <span className="polaroid-names" id="testiTag"
              >Aishwarya &amp; Karthik</span
            >
            <span className="polaroid-place" id="testiPlace">Chennai</span>
          </figcaption>
        </figure>

        <div className="testi-copy" data-reveal data-reveal-delay="1">
          <span className="testi-quote-mark" aria-hidden="true">&ldquo;</span>
          <p className="testi-quote" id="testiQuote">
            They didn't direct our wedding, they disappeared into it — and
            somehow that's how every real moment got caught.
          </p>
          <p className="testi-name" id="testiName">
            <b>Aishwarya &amp; Karthik</b> · Chennai
          </p>
          <div className="testi-controls">
            <button id="testiPrev" aria-label="Previous story">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                strokeWidth="1.6"
              >
                <path d="M10 2L4 8L10 14" />
              </svg>
            </button>
            <button id="testiNext" aria-label="Next story">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                strokeWidth="1.6"
              >
                <path d="M6 2L12 8L6 14" />
              </svg>
            </button>
            <div className="testi-dots" id="testiDots">
              <span className="active"></span><span></span><span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
