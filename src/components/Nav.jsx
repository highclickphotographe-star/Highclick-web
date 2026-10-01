export default function Nav() {
  return (
    <>
      <nav className="nav" id="nav">
        <div className="wrap nav-inner">
          {/* Left Links */}
          <ul className="nav-links nav-links-left">
            <li>
              <a href="#home" className="is-active">
                HOME
              </a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#films">PORTFOLIO</a>
            </li>
          </ul>

          {/* Logo */}
          <a href="#home" className="logo" aria-label="High Click Studio home">
            <img
              className="mark"
              src="media/logo-hc.png"
              alt="High Click Studio"
              width="46"
              height="46"
            />
          </a>

          {/* Right Group */}
          <div className="nav-right-group">
            <ul className="nav-links nav-links-right">
              <li>
                <a href="#services">SERVICES</a>
              </li>
              <li>
                <a href="#stories">STORIES</a>
              </li>
            </ul>

            <a
              className="nav-cta"
              href="https://wa.me/919514284820?text=Hello%20High%20Click%20Studio%2C%20I%27d%20like%20to%20enquire."
              target="_blank"
              rel="noopener noreferrer"
            >
              Inquire
            </a>

            <button
              className="hamburger"
              id="hamburger"
              aria-label="Open menu"
              aria-expanded="false"
              aria-controls="mobileMenu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="mobile-menu" id="mobileMenu">
        <span className="mobile-label">High Click Studio</span>
        <ul>
          {[
            ["#home", "HOME"],
            ["#about", "ABOUT"],
            ["#films", "PORTFOLIO"],
            ["#services", "SERVICES"],
            ["#stories", "STORIES"],
            ["#contact", "CONTACT"],
          ].map(([href, label], i) => (
            <li key={href} style={{ "--i": i }}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <a
          className="mobile-cta"
          style={{ "--i": 6 }}
          href="https://wa.me/919514284820?text=Hello%20High%20Click%20Studio%2C%20I%27d%20like%20to%20enquire."
          target="_blank"
          rel="noopener noreferrer"
        >
          Inquire on WhatsApp
        </a>
      </div>
    </>
  );
}
