import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        {/* Brand */}
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <img
              src="media/logo-hc.png"
              alt="High Click Studio"
              width="44"
              height="44"
            />
            <span className="footer__studio-name">HIGH CLICK STUDIO</span>
          </a>
          <p className="footer__tagline">Stories told through light.</p>
        </div>

        {/* Links */}
        <div className="footer__col">
          <h4 className="footer__heading">Explore</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#films">Portfolio</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#stories">Stories</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__heading">Contact</h4>
          <ul>
            <li>
              <a href="mailto:highclickphotographe@gmail.com">
                highclickphotographe@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+919514284820">+91 95142 84820</a>
            </li>
            <li>Adyar, Chennai</li>
          </ul>
        </div>

        {/* Social */}
        {/* Social */}
        <div className="footer__col">
          <h4 className="footer__heading">Follow</h4>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/highcliickstudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/919514284820"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer__bottom">
        <span>
          © {new Date().getFullYear()} High Click Studio. All rights reserved.
        </span>
        <span>Adyar, Chennai · Tamil Nadu</span>
      </div>
    </footer>
  );
}
