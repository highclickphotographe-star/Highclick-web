/** Hero section */
export default function Hero() {
  return (
    <>
{/* ============================== HERO ============================== */}
    <header className="hero" id="home">
      <div className="hero-media">
        <video
          id="heroVideo"
          className="hero-scale"
          muted
          loop
          playsinline
          autoplay
          disablepictureinpicture
          preload="metadata"
          poster="media/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="media/hero-teaser.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay"></div>

      {/* ===== hero decoration: glowing curves, botanical, sparkles =====
           Three corner-anchored SVGs so the art stays in its corner at any
           aspect ratio instead of being cropped like a background image. */}

      {/* top-left: sweeping S-curve that passes the lamp */}
      <svg
        className="hero-deco hero-deco-tl"
        viewBox="0 0 560 460"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="hcCurveTL" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#b44be0" stopOpacity="0.95" />
            <stop offset="0.22" stopColor="#e8709a" />
            <stop offset="0.42" stopColor="#ffc07a" />
            <stop offset="0.7" stopColor="#f0a45e" stopOpacity="0.85" />
            <stop offset="1" stopColor="#f0a45e" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hcArcTL" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#d98bd6" stopOpacity="0" />
            <stop offset="0.5" stopColor="#d98bd6" stopOpacity="0.7" />
            <stop offset="1" stopColor="#f0a45e" stopOpacity="0.3" />
          </linearGradient>
          <filter id="hcGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="b1" />
            <feGaussianBlur stdDeviation="9" result="b2" />
            <feMerge>
              <feMergeNode in="b2" />
              <feMergeNode in="b1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* faint orbit at the left edge */}
        <path
          className="hero-draw hero-draw-soft"
          pathLength="1"
          d="M72 282 C 76 352, 42 412, 0 444"
          stroke="url(#hcArcTL)"
          strokeWidth="1"
        />
        <path
          className="hero-draw hero-draw-soft"
          pathLength="1"
          d="M72 282 C 70 236, 48 196, 0 170"
          stroke="url(#hcArcTL)"
          strokeWidth="1"
        />
        {/* main curve */}
        <g filter="url(#hcGlow)">
          <path
            className="hero-draw"
            pathLength="1"
            d="M0 388 C 50 335, 130 292, 250 257 C 340 231, 420 215, 470 165 C 520 115, 545 55, 534 0"
            stroke="url(#hcCurveTL)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </g>
        {/* sparkles */}
        <circle className="hero-spark" cx="84" cy="384" r="3.2" fill="#ffb066" />
        <circle className="hero-spark s2" cx="24" cy="313" r="1.8" fill="#d36fe0" />
        <circle className="hero-spark s3" cx="66" cy="418" r="1.6" fill="#f0a45e" />
        <circle
          className="hero-spark s4"
          cx="112"
          cy="338"
          r="1.2"
          fill="#ffd9a8"
        />
        <circle
          className="hero-spark s2"
          cx="168"
          cy="410"
          r="1.4"
          fill="#d36fe0"
        />
      </svg>

      {/* bottom-left: botanical sprig with orbit arcs */}
      <svg
        className="hero-deco hero-deco-bl"
        viewBox="0 0 400 340"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient
            id="hcLeaf"
            gradientUnits="userSpaceOnUse"
            x1="30"
            y1="340"
            x2="170"
            y2="120"
          >
            <stop offset="0" stopColor="#e58fc9" />
            <stop offset="0.5" stopColor="#f4a86c" />
            <stop offset="1" stopColor="#ffe0b0" />
          </linearGradient>
          <linearGradient
            id="hcOrbitBL"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="90"
            x2="260"
            y2="340"
          >
            <stop offset="0" stopColor="#c76ad8" stopOpacity="0.95" />
            <stop offset="0.5" stopColor="#f4a86c" stopOpacity="0.9" />
            <stop offset="1" stopColor="#f0a45e" stopOpacity="0.1" />
          </linearGradient>
          <filter id="hcGlowBL" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* beaded orbit rising from the top of the sprig */}
        <path
          className="hero-leaf"
          d="M125 6 C 62 40, 40 102, 38 176"
          stroke="url(#hcOrbitBL)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray="0.1 6"
        />
        {/* orbit arcs */}
        <g filter="url(#hcGlowBL)">
          <path
            className="hero-draw"
            pathLength="1"
            d="M0 96 C 62 116, 92 186, 82 236 C 76 270, 50 306, 22 340"
            stroke="url(#hcOrbitBL)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            className="hero-draw"
            pathLength="1"
            d="M28 330 C 70 285, 130 268, 175 274 C 220 282, 246 312, 256 340"
            stroke="url(#hcOrbitBL)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
        <path
          className="hero-draw hero-draw-soft"
          pathLength="1"
          d="M125 270 C 190 232, 290 236, 350 280 C 380 302, 392 322, 396 340"
          stroke="url(#hcOrbitBL)"
          strokeWidth="1"
        />
        {/* stem */}
        <g filter="url(#hcGlowBL)">
          <path
            className="hero-draw"
            pathLength="1"
            d="M25 340 C 48 300, 80 264, 102 234 C 106 228, 108 222, 109 216"
            stroke="url(#hcLeaf)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </g>
        {/* leaves: outline, midrib and fine veins */}
        <g
          className="hero-leaf"
          stroke="url(#hcLeaf)"
          strokeWidth="1"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="rgba(244, 168, 108, 0.07)"
          filter="url(#hcGlowBL)"
        >
          <path
            d="M109 216 C 139.6 201, 143.7 154.7, 126 125 C 109.3 148.2, 96.6 193, 109 216 Z"
          />
          <path
            d="M109 216 Q 121.1 171.2 126 125"
            fill="none"
            strokeWidth="0.9"
          />
          <path
            className="hero-vein"
            d="M113.5 201.8 L 128.8 189.6 M113.5 201.8 L 109 185.9 M116 193.1 L 131.8 181 M116 193.1 L 110.5 177 M118.3 184.4 L 133.3 172.1 M118.3 184.4 L 112.4 168.2 M120.3 175.6 L 133.5 163 M120.3 175.6 L 114.8 159.5 M121.9 166.8 L 132.7 153.7 M121.9 166.8 L 117.4 150.8 M123.2 157.8 L 130.9 144.2 M123.2 157.8 L 120.2 142.2 M124.3 148.9 L 128.6 134.6 M124.3 148.9 L 123.1 133.6 M125 139.9 L 127.3 130 M125 139.9 L 124.5 129.4"
            fill="none"
          />
          <path
            d="M106 244 C 131.8 246, 172.2 218.4, 191 196 C 157 191.4, 112.7 212.2, 106 244 Z"
          />
          <path
            d="M106 244 Q 146.1 215.8 191 196"
            fill="none"
            strokeWidth="0.9"
          />
          <path
            className="hero-vein"
            d="M118.4 234.3 L 135.1 232.1 M118.4 234.3 L 126.4 216.5 M126.1 228.6 L 143.4 227.4 M126.1 228.6 L 134 210.7 M134 223.2 L 151.5 222.5 M134 223.2 L 142.3 206.1 M142 218.1 L 159.5 217.3 M142 218.1 L 151.2 202.6 M150.3 213.5 L 167.4 212 M150.3 213.5 L 160.6 200.1 M158.7 209.2 L 175.3 206.7 M158.7 209.2 L 170.5 198.3 M167.4 205.3 L 183.1 201.3 M167.4 205.3 L 180.7 197 M176.2 201.6 L 186.9 198.7 M176.2 201.6 L 185.7 196.5"
            fill="none"
          />
          <path
            d="M78 262 C 87.1 241.2, 70.3 211.8, 49 201 C 50.4 221.3, 62.3 253, 78 262 Z"
          />
          <path
            d="M78 262 Q 66.5 230.1 49 201"
            fill="none"
            strokeWidth="0.9"
          />
          <path
            className="hero-vein"
            d="M74.8 251.5 L 77.5 238.3 M74.8 251.5 L 66.1 243.7 M71.9 242.8 L 74.5 229.6 M71.9 242.8 L 62.2 235.4 M68.5 234.2 L 69.8 221.6 M68.5 234.2 L 58.7 226.9 M64.5 225.9 L 63.7 214.3 M64.5 225.9 L 55.4 218.3 M60 217.9 L 56.6 207.5 M60 217.9 L 52.2 209.7 M55.1 210.1 L 51.8 203.4 M55.1 210.1 L 50.2 204.2"
            fill="none"
          />
          <path
            d="M72 299 C 82.6 305.8, 105.5 302.8, 118 296 C 104.7 290.9, 81.6 290.9, 72 299 Z"
          />
          <path d="M72 299 Q 95 297.5 118 296" fill="none" strokeWidth="0.9" />
          <path
            className="hero-vein"
            d="M79.4 298.5 L 86.9 301.5 M79.4 298.5 L 86.5 294.6 M89.8 297.8 L 97.4 300.9 M89.8 297.8 L 96.9 293.8 M100.2 297.2 L 107.7 298.8 M100.2 297.2 L 107.4 294.5 M110.6 296.5 L 115.7 296.6 M110.6 296.5 L 115.7 295.7"
            fill="none"
          />
          <path
            d="M118 296 C 121.9 301.8, 133.1 302.8, 140 300 C 134.6 294.9, 123.7 292, 118 296 Z"
          />
          <path d="M118 296 Q 129 298 140 300" fill="none" strokeWidth="0.9" />
        </g>
        {/* sparkles */}
        <circle className="hero-spark s2" cx="20" cy="190" r="2" fill="#d36fe0" />
        <circle className="hero-spark" cx="68" cy="43" r="2.2" fill="#d36fe0" />
        <circle className="hero-spark s3" cx="91" cy="19" r="2.8" fill="#ffb066" />
        <circle className="hero-spark s4" cx="131" cy="86" r="2.2" fill="#f0a45e" />
        <circle
          className="hero-spark s2"
          cx="202"
          cy="284"
          r="2.6"
          fill="#fff1d6"
        />
        <circle className="hero-spark" cx="353" cy="284" r="3" fill="#ffb066" />
        <circle
          className="hero-spark s3"
          cx="378"
          cy="312"
          r="2.2"
          fill="#f0a45e"
        />
      </svg>

      {/* bottom-right: large arc with an inner orbit */}
      <svg
        className="hero-deco hero-deco-br"
        viewBox="0 0 590 360"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="hcCurveBR" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#c04be0" stopOpacity="0.95" />
            <stop offset="0.22" stopColor="#e8709a" />
            <stop offset="0.55" stopColor="#ffb066" />
            <stop offset="1" stopColor="#f0a45e" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="hcOrbitBR" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#d36fe0" stopOpacity="0" />
            <stop offset="0.5" stopColor="#f0a45e" stopOpacity="0.7" />
            <stop offset="1" stopColor="#c04be0" stopOpacity="0.35" />
          </linearGradient>
          <filter id="hcGlowBR" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="b1" />
            <feGaussianBlur stdDeviation="9" result="b2" />
            <feMerge>
              <feMergeNode in="b2" />
              <feMergeNode in="b1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          className="hero-draw hero-draw-soft"
          pathLength="1"
          d="M12 360 C 88 290, 208 246, 310 244 C 372 243, 412 290, 424 360"
          stroke="url(#hcOrbitBR)"
          strokeWidth="1"
        />
        <g filter="url(#hcGlowBR)">
          <path
            className="hero-draw"
            pathLength="1"
            d="M144 360 C 172 224, 290 84, 590 22"
            stroke="url(#hcCurveBR)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        {/* sparkles */}
        <circle
          className="hero-spark s2"
          cx="294"
          cy="236"
          r="2.2"
          fill="#d36fe0"
        />
        <circle className="hero-spark" cx="236" cy="240" r="1.6" fill="#ffb066" />
        <circle
          className="hero-spark s3"
          cx="344"
          cy="330"
          r="2.2"
          fill="#ffb066"
        />
        <circle
          className="hero-spark s4"
          cx="508"
          cy="116"
          r="1.6"
          fill="#f0a45e"
        />
        <circle className="hero-spark s2" cx="468" cy="66" r="1.4" fill="#d36fe0" />
        <circle className="hero-spark" cx="416" cy="312" r="1.4" fill="#ffd9a8" />
      </svg>

      <div className="hero-body">
        <div className="hero-content">
          <h1 className="hero-title">Wedding Stories</h1>
          <span className="hero-title-rule" aria-hidden="true"></span>
        </div>
      </div>

      <div className="hero-scroll"><span className="line"></span>Scroll to explore</div>
      <div className="hero-index">Chennai <b>·</b> Since 2021</div>
      <div className="hero-marker" aria-hidden="true">
        <span className="hero-marker-dot"></span>
        <span className="hero-marker-star">✦</span>
        <span className="hero-marker-line"></span>
      </div>
    </header>
    </>
  );
}
