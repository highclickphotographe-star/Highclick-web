/** Decor section */
export default function Decor() {
  return (
    <>
{/* custom cursor */}
    <div className="cursor-dot" id="cursorDot"></div>
    <div className="cursor-ring" id="cursorRing"></div>

    {/* floating particles */}
    <canvas id="particles" className="particles-canvas" aria-hidden="true"></canvas>

    {/* subtle gold curve accents */}
    <svg
      className="deco-curve deco-curve-1"
      viewBox="0 0 420 180"
      fill="none"
      aria-hidden="true"
    >
      <path
        className="draw-path"
        d="M10 150 C 80 30, 160 160, 250 50 S 360 130, 410 70"
        stroke="#B9975B"
        strokeWidth="1.15"
      />
    </svg>
    <svg
      className="deco-curve deco-curve-2"
      viewBox="0 0 280 280"
      fill="none"
      aria-hidden="true"
    >
      <path
        className="draw-path"
        d="M30 250 C 20 100, 140 30, 200 140 S 260 50, 250 25"
        stroke="#B9975B"
        strokeWidth="1"
      />
    </svg>

    {/* side page indicator */}
    <nav className="page-dots" id="pageDots" aria-label="Page sections">
      <button data-target="#home" data-label="Home" className="active"></button>
      <button data-target="#about" data-label="About"></button>
      <button data-target="#films" data-label="Portfolio"></button>
      <button data-target="#services" data-label="Services"></button>
      <button data-target="#stories" data-label="Stories"></button>
      <button data-target="#contact" data-label="Contact"></button>
    </nav>
    </>
  );
}
