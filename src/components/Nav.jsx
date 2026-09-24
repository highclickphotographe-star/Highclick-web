/** Nav section */
export default function Nav() {
  return (
    <>
{/* ============================== NAV ============================== */}
    <nav className="nav" id="nav">
      <div className="wrap nav-inner">
        <ul className="nav-links nav-links-left">
          <li>
            <a href="#home" className="is-active" aria-current="true">Home</a>
          </li>
          <li><a href="#about">About</a></li>
          <li><a href="#films">Portfolio</a></li>
          <li><a href="#stories">Journal</a></li>
        </ul>

        <a href="#home" className="logo" aria-label="High Click Studio home">
          <img
            className="mark"
            src="media/logo-hc.png"
            alt="High Click Studio"
            width="48"
            height="48"
          />
        </a>

        <div className="nav-right-group">
          <ul className="nav-links nav-links-right">
            <li><a href="#services">Services</a></li>
            <li><a href="#stories">Stories</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a
            className="nav-cta"
            href="https://wa.me/919514284820?text=Hello%20High%20Click%20Studio%2C%20I%27d%20like%20to%20enquire%20about%20wedding%20photography."
            target="_blank"
            rel="noopener"
            ><span>Inquire</span>
            <svg
              className="nav-cta-arrow"
              width="22"
              height="10"
              viewBox="0 0 22 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.1"
              aria-hidden="true"
            >
              <path d="M0 5h20M16 1l4 4-4 4" />
            </svg>
          </a>
          <button
            className="hamburger"
            id="hamburger"
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="mobileMenu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>

    <div className="mobile-menu" id="mobileMenu">
      <span className="accent-label">Wedding Stories</span>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#films">Portfolio</a></li>
        <li><a href="#stories">Journal</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#stories">Stories</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a
        className="btn btn-outline-dark"
        href="https://wa.me/919514284820"
        target="_blank"
        rel="noopener"
        >Chat on WhatsApp</a
      >
    </div>
    </>
  );
}
