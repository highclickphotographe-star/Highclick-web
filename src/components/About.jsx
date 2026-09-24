/** About section */
export default function About() {
  return (
    <>
{/* ============================== ABOUT / PHILOSOPHY ============================== */}
    <section className="about" id="about">
      {/* ===== about decoration: shared defs + corner flowers, curves, rings, ribbons =====
           One hidden svg holds reusable flower/leaf shapes; the rest are corner-anchored
           so the art stays put at any section height instead of stretching like a photo. */}
      <div className="about-scenery" data-reveal aria-hidden="true">
        <svg width="0" height="0" style={{position: 'absolute'}} focusable="false">
          <defs>
            <linearGradient id="abGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#eccb9a" />
              <stop offset="0.55" stopColor="#c9a06a" />
              <stop offset="1" stopColor="#b9975b" stopOpacity="0.35" />
            </linearGradient>
            <radialGradient id="abRing" cx="0.32" cy="0.28" r="0.85">
              <stop offset="0" stopColor="#f6e2ba" stopOpacity="0.85" />
              <stop offset="1" stopColor="#c9a06a" stopOpacity="0.1" />
            </radialGradient>
            <linearGradient id="abRibbon1" x1="0" y1="0" x2="1" y2="0.15">
              <stop offset="0" stopColor="#e4c193" stopOpacity="0.5" />
              <stop offset="0.6" stopColor="#d9c39c" stopOpacity="0.24" />
              <stop offset="1" stopColor="#d9c39c" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="abRibbon2" x1="0" y1="0" x2="1" y2="0.15">
              <stop offset="0" stopColor="#cf9f74" stopOpacity="0.4" />
              <stop offset="1" stopColor="#cf9f74" stopOpacity="0" />
            </linearGradient>
            <g id="abFlowerDef">
              <g fill="#fdf8ef" stroke="#c9a06a" strokeWidth="0.6">
                <path d="M0,0 C-6,-6 -6,-16 0,-20 C6,-16 6,-6 0,0 Z" />
                <path
                  d="M0,0 C-6,-6 -6,-16 0,-20 C6,-16 6,-6 0,0 Z"
                  transform="rotate(72)"
                />
                <path
                  d="M0,0 C-6,-6 -6,-16 0,-20 C6,-16 6,-6 0,0 Z"
                  transform="rotate(144)"
                />
                <path
                  d="M0,0 C-6,-6 -6,-16 0,-20 C6,-16 6,-6 0,0 Z"
                  transform="rotate(216)"
                />
                <path
                  d="M0,0 C-6,-6 -6,-16 0,-20 C6,-16 6,-6 0,0 Z"
                  transform="rotate(288)"
                />
              </g>
              <circle r="2.6" fill="#c9a06a" />
            </g>
            <g id="abLeafDef">
              <path
                d="M0,-24 C8,-15 8,9 0,24 C-8,9 -8,-15 0,-24 Z"
                fill="#e3a89f"
                opacity="0.85"
              />
              <path
                d="M0,-22 L0,22"
                stroke="#c98d81"
                strokeWidth="0.6"
                opacity="0.55"
              />
            </g>
          </defs>
        </svg>

        {/* top-left corner flower spray */}
        <svg
          className="ab-deco ab-deco-tl"
          viewBox="0 0 180 200"
          fill="none"
          focusable="false"
        >
          <path
            className="ab-draw"
            pathLength="1"
            d="M14 196 C 26 148 54 106 54 42"
            stroke="url(#abGold)"
            strokeWidth="1"
          />
          <use
            href="#abFlowerDef"
            transform="translate(56,38) scale(1)"
            className="ab-fade"
          />
          <use
            href="#abFlowerDef"
            transform="translate(22,86) scale(0.55)"
            className="ab-fade"
          />
          <use
            href="#abLeafDef"
            transform="translate(92,66) rotate(18) scale(0.85)"
            className="ab-fade"
          />
          <use
            href="#abLeafDef"
            transform="translate(30,132) rotate(-24) scale(0.7)"
            className="ab-fade"
          />
        </svg>

        {/* top-right ring cluster */}
        <svg
          className="ab-deco ab-deco-tr"
          viewBox="0 0 460 420"
          fill="none"
          focusable="false"
        >
          <circle
            className="ab-draw ab-soft"
            pathLength="1"
            cx="430"
            cy="6"
            r="190"
            stroke="url(#abRing)"
            strokeWidth="1.2"
          />
          <circle
            className="ab-draw"
            pathLength="1"
            cx="388"
            cy="58"
            r="96"
            stroke="url(#abGold)"
            strokeWidth="1"
          />
          <path
            className="ab-draw"
            pathLength="1"
            d="M170 46 C 250 -6 336 34 358 112 C 374 168 338 212 278 224"
            stroke="url(#abGold)"
            strokeWidth="1"
          />
          <use
            href="#abFlowerDef"
            transform="translate(150,232) scale(1)"
            className="ab-fade"
          />
          <use
            href="#abLeafDef"
            transform="translate(190,272) rotate(198) scale(0.85)"
            className="ab-fade"
          />
          <use
            href="#abLeafDef"
            transform="translate(116,258) rotate(140) scale(0.65)"
            className="ab-fade"
          />
          <circle className="ab-spark" cx="248" cy="18" r="2" fill="#e3c496" />
          <circle className="ab-spark" cx="92" cy="54" r="1.5" fill="#c9a06a" />
          <circle className="ab-spark" cx="312" cy="146" r="1.8" fill="#e3c496" />
        </svg>

        {/* bottom-left flowing ribbon */}
        <svg
          className="ab-deco ab-deco-bl"
          viewBox="0 0 620 260"
          fill="none"
          focusable="false"
        >
          <path
            className="ab-fade"
            d="M0 260 C 120 190 260 230 380 190 C 460 165 520 190 620 150 L620 260 Z"
            fill="url(#abRibbon1)"
          />
          <path
            className="ab-fade"
            d="M0 260 C 100 222 220 250 340 220 C 430 198 500 215 600 190 L600 260 Z"
            fill="url(#abRibbon2)"
          />
          <path
            className="ab-draw"
            pathLength="1"
            d="M0 210 C 130 150 260 190 380 150 C 470 122 540 145 620 100"
            stroke="url(#abGold)"
            strokeWidth="1"
          />
          <use
            href="#abLeafDef"
            transform="translate(140,150) rotate(-30) scale(0.8)"
            className="ab-fade"
          />
          <use
            href="#abLeafDef"
            transform="translate(300,138) rotate(20) scale(0.6)"
            className="ab-fade"
          />
          <use
            href="#abLeafDef"
            transform="translate(460,108) rotate(-15) scale(0.7)"
            className="ab-fade"
          />
        </svg>

        {/* bottom-right flowing ribbon + flower cluster */}
        <svg
          className="ab-deco ab-deco-br"
          viewBox="0 0 620 300"
          fill="none"
          focusable="false"
        >
          <path
            className="ab-fade"
            d="M620 300 C 500 230 360 270 240 230 C 160 205 100 230 0 190 L0 300 Z"
            fill="url(#abRibbon1)"
          />
          <path
            className="ab-fade"
            d="M620 300 C 520 262 400 290 280 260 C 190 238 120 255 20 230 L20 300 Z"
            fill="url(#abRibbon2)"
          />
          <path
            className="ab-draw"
            pathLength="1"
            d="M620 250 C 490 190 360 230 240 190 C 150 162 80 185 0 140"
            stroke="url(#abGold)"
            strokeWidth="1"
          />
          <use
            href="#abFlowerDef"
            transform="translate(560,42) scale(1.05)"
            className="ab-fade"
          />
          <use
            href="#abLeafDef"
            transform="translate(516,84) rotate(200) scale(0.8)"
            className="ab-fade"
          />
          <use
            href="#abLeafDef"
            transform="translate(596,96) rotate(158) scale(0.6)"
            className="ab-fade"
          />
          <circle className="ab-spark" cx="472" cy="20" r="1.8" fill="#e3c496" />
        </svg>

        {/* fine dust of sparkles scattered across the whole panel */}
        <svg
          className="ab-deco ab-deco-sparkle"
          viewBox="0 0 1000 560"
          preserveAspectRatio="none"
          fill="none"
          focusable="false"
        >
          <circle className="ab-spark" cx="600" cy="46" r="1.8" fill="#c9a06a" />
          <circle className="ab-spark" cx="700" cy="92" r="1.3" fill="#c9a06a" />
          <circle className="ab-spark" cx="555" cy="130" r="1.1" fill="#c9a06a" />
          <circle className="ab-spark" cx="820" cy="70" r="1.5" fill="#c9a06a" />
          <circle className="ab-spark" cx="500" cy="260" r="1.1" fill="#c9a06a" />
          <circle className="ab-spark" cx="860" cy="320" r="1.4" fill="#c9a06a" />
          <circle className="ab-spark" cx="120" cy="60" r="1.3" fill="#c9a06a" />
        </svg>
      </div>

      <div className="wrap about-grid">
        <div className="about-media" data-reveal>
          <svg
            className="about-botanical"
            viewBox="0 0 160 160"
            fill="none"
            stroke="#B9975B"
            strokeWidth="1"
          >
            <path d="M80 10C60 40 60 70 80 100" />
            <path d="M80 10C100 40 100 70 80 100" />
            <path d="M40 40C55 45 65 60 65 80" />
            <path d="M120 40C105 45 95 60 95 80" />
          </svg>
          {/* vertical stem tucked into the gap between the photo and the copy */}
          <svg
            className="ab-deco ab-deco-stem"
            viewBox="0 0 80 480"
            fill="none"
            focusable="false"
            aria-hidden="true"
          >
            <path
              className="ab-draw ab-soft"
              pathLength="1"
              d="M42 470 C 34 380 46 300 36 222 C 30 150 46 80 40 10"
              stroke="url(#abGold)"
              strokeWidth="1.1"
            />
            <circle
              className="ab-fade"
              cx="37"
              cy="228"
              r="4"
              fill="url(#abGold)"
            />
            <use
              href="#abLeafDef"
              transform="translate(56,340) rotate(48) scale(0.8)"
              className="ab-fade"
            />
            <use
              href="#abLeafDef"
              transform="translate(18,352) rotate(-58) scale(-0.75,0.75)"
              className="ab-fade"
            />
            <use
              href="#abLeafDef"
              transform="translate(58,150) rotate(38) scale(0.6)"
              className="ab-fade"
            />
            <use
              href="#abLeafDef"
              transform="translate(16,158) rotate(-48) scale(-0.55,0.55)"
              className="ab-fade"
            />
            <use
              href="#abFlowerDef"
              transform="translate(40,20) scale(0.85)"
              className="ab-fade"
            />
          </svg>
          <div className="about-arch" data-lightbox="media/home-4.jpg">
            <img
              src="media/home-4.jpg"
              alt="Bride and groom exchanging garlands beneath a floral arch"
              loading="lazy"
              data-parallax="0.07"
            />
          </div>
          <div className="about-overlap" data-lightbox="media/home-3.jpg">
            <img
              src="media/home-3-bw.jpg"
              alt="Candid black and white moment between bride and groom"
              loading="lazy"
              data-parallax="0.1"
            />
          </div>
        </div>

        <div className="about-copy" data-reveal data-reveal-delay="1">
          <span className="accent-label">Our philosophy</span>
          <h2>More Than Photography</h2>
          <p className="lead">
            A wedding is not a schedule of poses — it's a day that happens once
            and is gone. We stay close, stay quiet, and let it unfold. What we
            hand back isn't a album of performances; it's the day as it actually
            was, worth returning to for the rest of your life.
          </p>
          <div className="about-stats">
            <div className="stat"><b>500+</b><span>Weddings</span></div>
            <div className="stat"><b>5+</b><span>Years</span></div>
            <div className="stat"><b>100%</b><span>Happy Couples</span></div>
          </div>
          <a className="btn btn-outline-light" href="#films">See Our Work</a>
        </div>
      </div>
    </section>
    </>
  );
}
