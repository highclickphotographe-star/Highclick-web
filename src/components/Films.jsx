/** Films section */
export default function Films() {
  return (
    <>
{/* ============================== CINEMATIC FILMS ============================== */}
    <section className="films" id="films">
      {/* cinematic stage: film strips, petals, golden curves, floor glow */}
      <div className="films-scenery" aria-hidden="true">
        <svg className="films-strip films-strip-l" viewBox="0 0 80 520" fill="none">
          <path
            d="M12 0v520M68 0v520"
            stroke="url(#fsGradL)"
            strokeWidth="1.2"
            opacity="0.55"
          />
          <g fill="url(#fsGradL)" opacity="0.45">
            <rect x="22" y="18" width="36" height="22" rx="2" />
            <rect x="22" y="58" width="36" height="22" rx="2" />
            <rect x="22" y="98" width="36" height="22" rx="2" />
            <rect x="22" y="138" width="36" height="22" rx="2" />
            <rect x="22" y="178" width="36" height="22" rx="2" />
            <rect x="22" y="218" width="36" height="22" rx="2" />
            <rect x="22" y="258" width="36" height="22" rx="2" />
            <rect x="22" y="298" width="36" height="22" rx="2" />
            <rect x="22" y="338" width="36" height="22" rx="2" />
            <rect x="22" y="378" width="36" height="22" rx="2" />
            <rect x="22" y="418" width="36" height="22" rx="2" />
            <rect x="22" y="458" width="36" height="22" rx="2" />
          </g>
          <defs>
            <linearGradient id="fsGradL" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f0a45e" stopOpacity="0" />
              <stop offset="0.2" stopColor="#f0a45e" stopOpacity="0.9" />
              <stop offset="0.55" stopColor="#d36fe0" stopOpacity="0.7" />
              <stop offset="1" stopColor="#c04be0" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg className="films-strip films-strip-r" viewBox="0 0 80 520" fill="none">
          <path
            d="M12 0v520M68 0v520"
            stroke="url(#fsGradR)"
            strokeWidth="1.2"
            opacity="0.55"
          />
          <g fill="url(#fsGradR)" opacity="0.45">
            <rect x="22" y="18" width="36" height="22" rx="2" />
            <rect x="22" y="58" width="36" height="22" rx="2" />
            <rect x="22" y="98" width="36" height="22" rx="2" />
            <rect x="22" y="138" width="36" height="22" rx="2" />
            <rect x="22" y="178" width="36" height="22" rx="2" />
            <rect x="22" y="218" width="36" height="22" rx="2" />
            <rect x="22" y="258" width="36" height="22" rx="2" />
            <rect x="22" y="298" width="36" height="22" rx="2" />
            <rect x="22" y="338" width="36" height="22" rx="2" />
            <rect x="22" y="378" width="36" height="22" rx="2" />
            <rect x="22" y="418" width="36" height="22" rx="2" />
            <rect x="22" y="458" width="36" height="22" rx="2" />
          </g>
          <defs>
            <linearGradient id="fsGradR" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f0a45e" stopOpacity="0" />
              <stop offset="0.25" stopColor="#f0a45e" stopOpacity="0.85" />
              <stop offset="0.6" stopColor="#d36fe0" stopOpacity="0.65" />
              <stop offset="1" stopColor="#c04be0" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="films-curve films-curve-tl"
          viewBox="0 0 420 280"
          fill="none"
        >
          <defs>
            <linearGradient id="fcTL" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#c04be0" stopOpacity="0.95" />
              <stop offset="0.35" stopColor="#e8709a" />
              <stop offset="0.7" stopColor="#ffb066" />
              <stop offset="1" stopColor="#f0a45e" stopOpacity="0" />
            </linearGradient>
            <filter id="fcGlow">
              <feGaussianBlur stdDeviation="2.5" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#fcGlow)">
            <path
              className="films-draw"
              pathLength="1"
              d="M0 220 C 60 160, 140 200, 220 120 C 280 70, 340 40, 420 10"
              stroke="url(#fcTL)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              className="films-draw films-draw-soft"
              pathLength="1"
              d="M20 260 C 90 200, 160 240, 250 160"
              stroke="url(#fcTL)"
              strokeWidth="1"
              opacity="0.5"
            />
          </g>
        </svg>
        <svg
          className="films-curve films-curve-tr"
          viewBox="0 0 420 280"
          fill="none"
        >
          <defs>
            <linearGradient id="fcTR" x1="1" y1="1" x2="0" y2="0">
              <stop offset="0" stopColor="#c04be0" stopOpacity="0.95" />
              <stop offset="0.35" stopColor="#e8709a" />
              <stop offset="0.7" stopColor="#ffb066" />
              <stop offset="1" stopColor="#f0a45e" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g filter="url(#fcGlow)">
            <path
              className="films-draw"
              pathLength="1"
              d="M420 220 C 360 160, 280 200, 200 120 C 140 70, 80 40, 0 10"
              stroke="url(#fcTR)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </g>
        </svg>
        <svg
          className="films-curve films-curve-bl"
          viewBox="0 0 380 220"
          fill="none"
        >
          <defs>
            <linearGradient id="fcBL" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#d36fe0" stopOpacity="0.9" />
              <stop offset="0.5" stopColor="#f0a45e" stopOpacity="0.85" />
              <stop offset="1" stopColor="#f0a45e" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g filter="url(#fcGlow)">
            <path
              className="films-draw"
              pathLength="1"
              d="M0 40 C 50 90, 120 30, 200 80 C 270 120, 320 160, 380 200"
              stroke="url(#fcBL)"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </g>
        </svg>
        <svg
          className="films-curve films-curve-br"
          viewBox="0 0 380 220"
          fill="none"
        >
          <defs>
            <linearGradient id="fcBR" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#d36fe0" stopOpacity="0.9" />
              <stop offset="0.5" stopColor="#f0a45e" stopOpacity="0.85" />
              <stop offset="1" stopColor="#f0a45e" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g filter="url(#fcGlow)">
            <path
              className="films-draw"
              pathLength="1"
              d="M380 40 C 330 90, 260 30, 180 80 C 110 120, 60 160, 0 200"
              stroke="url(#fcBR)"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </g>
        </svg>
        <span className="films-petal p1"></span><span className="films-petal p2"></span>
        <span className="films-petal p3"></span><span className="films-petal p4"></span>
        <span className="films-petal p5"></span><span className="films-petal p6"></span>
        <span className="films-petal p7"></span><span className="films-petal p8"></span>
        <span className="films-bokeh b1"></span><span className="films-bokeh b2"></span>
        <span className="films-bokeh b3"></span><span className="films-bokeh b4"></span>
        <span className="films-bokeh b5"></span>
        <div className="films-floor"></div>
      </div>

      <div className="wrap">
        <div className="reels-head" data-reveal>
          <h2>Stories in Motion</h2>
          <span className="reels-rule"></span>
        </div>
      </div>

      <div className="reels-row-outer" data-reveal>
        <button
          className="reels-arrow prev"
          id="reelsPrev"
          aria-label="Previous reel"
        >
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="reels-track" id="reelsTrack">
          <button
            className="reel-card"
            type="button"
            data-src="media/films/stefi-joseph.mp4"
            data-poster="media/films/stefi-joseph-poster.jpg"
            aria-label="Play Stefi Rose and Joseph Thomas wedding trailer"
          >
            <img
              src="media/films/stefi-joseph-poster-v.jpg"
              alt="Still from Stefi Rose and Joseph Thomas's wedding trailer"
              loading="lazy"
              decoding="async"
              width="720"
              height="1282"
              sizes="(max-width: 480px) 42vw, (max-width: 900px) 28vw, 260px"
            />
            <video muted loop playsinline preload="none" aria-hidden="true">
              <source
                src="media/films/stefi-joseph-preview-v.mp4"
                type="video/mp4"
              />
            </video>
            <span className="reel-dur">0:20</span>
            <span className="reel-play">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                <path d="M5.5 3.5L14 9L5.5 14.5V3.5Z" fill="#F3ECE0" />
              </svg>
            </span>
            <span className="reel-info">
              <span className="reel-kind">Wedding Trailer</span>
              <span className="reel-title">Stefi &amp; Joseph</span>
            </span>
          </button>

          <button
            className="reel-card"
            type="button"
            data-src="media/films/brindha-kailash.mp4"
            data-poster="media/films/brindha-kailash-poster.jpg"
            aria-label="Play Brindha and Kailash Kumar candid film"
          >
            <img
              src="media/films/brindha-kailash-poster-v.jpg"
              alt="Candid still of Brindha and Kailash Kumar"
              loading="lazy"
              decoding="async"
              width="720"
              height="1284"
              sizes="(max-width: 480px) 42vw, (max-width: 900px) 28vw, 260px"
            />
            <video muted loop playsinline preload="none" aria-hidden="true">
              <source
                src="media/films/brindha-kailash-preview-v.mp4"
                type="video/mp4"
              />
            </video>
            <span className="reel-dur">2:44</span>
            <span className="reel-play">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                <path d="M5.5 3.5L14 9L5.5 14.5V3.5Z" fill="#F3ECE0" />
              </svg>
            </span>
            <span className="reel-info">
              <span className="reel-kind">Candid Film</span>
              <span className="reel-title">Brindha &amp; Kailash</span>
            </span>
          </button>

          <button
            className="reel-card"
            type="button"
            data-src="media/films/kani-kathir.mp4"
            data-poster="media/films/kani-kathir-poster.jpg"
            aria-label="Play Kani and Kathir wedding promo"
          >
            <img
              src="media/films/kani-kathir-poster-v.jpg"
              alt="Still from Kani and Kathir's wedding promo"
              loading="lazy"
              decoding="async"
              width="720"
              height="1284"
              sizes="(max-width: 480px) 42vw, (max-width: 900px) 28vw, 260px"
            />
            <video muted loop playsinline preload="none" aria-hidden="true">
              <source
                src="media/films/kani-kathir-preview-v.mp4"
                type="video/mp4"
              />
            </video>
            <span className="reel-dur">0:28</span>
            <span className="reel-play">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                <path d="M5.5 3.5L14 9L5.5 14.5V3.5Z" fill="#F3ECE0" />
              </svg>
            </span>
            <span className="reel-info">
              <span className="reel-kind">Wedding Promo</span>
              <span className="reel-title">Kani &amp; Kathir</span>
            </span>
          </button>

          <button
            className="reel-card"
            type="button"
            data-src="media/films/reel-pooja.mp4"
            data-poster="media/films/reel-pooja-poster.jpg"
            aria-label="Play Pooja's portrait reel"
          >
            <img
              src="media/films/reel-pooja-poster-v.jpg"
              alt="Still from Pooja's portrait reel"
              loading="lazy"
              decoding="async"
              width="720"
              height="1278"
              sizes="(max-width: 480px) 42vw, (max-width: 900px) 28vw, 260px"
            />
            <video muted loop playsinline preload="none" aria-hidden="true">
              <source
                src="media/films/reel-pooja-preview-v.mp4"
                type="video/mp4"
              />
            </video>
            <span className="reel-dur">0:18</span>
            <span className="reel-play">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                <path d="M5.5 3.5L14 9L5.5 14.5V3.5Z" fill="#F3ECE0" />
              </svg>
            </span>
            <span className="reel-info">
              <span className="reel-kind">Portrait Reel</span>
              <span className="reel-title">Pooja</span>
            </span>
          </button>
        </div>

        <button className="reels-arrow next" id="reelsNext" aria-label="Next reel">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="films-note" data-reveal>
        <span>Every reel above is a real wedding we shot in full.</span>
        <a
          className="btn-text"
          href="https://wa.me/919514284820?text=Hello%20High%20Click%20Studio%2C%20I%27d%20like%20to%20see%20more%20of%20your%20films."
          target="_blank"
          rel="noopener"
          >Ask to see more films</a
        >
      </div>
    </section>
    </>
  );
}
