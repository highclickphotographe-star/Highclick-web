/** Footer section */
export default function Footer() {
  return (
    <>
{/* ============================== FOOTER ============================== */}
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="logo footer-logo">
              <img
                className="mark"
                src="media/logo-hc.png"
                alt="High Click Studio"
                width="44"
                height="44"
              />
            </a>
            <p>
              Cinematic wedding photography and films for modern Chennai
              couples.
            </p>
            <div className="footer-social">
              <a href="#" target="_blank" rel="noopener" aria-label="Instagram"
                ><svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.6"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" /></svg
              ></a>
              <a href="#" target="_blank" rel="noopener" aria-label="YouTube"
                ><svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.6"
                >
                  <rect x="3" y="6" width="18" height="12" rx="3" />
                  <path d="M11 9.5 15 12 11 14.5Z" /></svg
              ></a>
              <a href="#" target="_blank" rel="noopener" aria-label="Pinterest"
                ><svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.6"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path
                    d="M9.5 18c1-3.5 1.5-6 1.5-7.5a2 2 0 1 1 4 .2c0 1.6-1 4-2 4.3 0 0 2 0.6 2-1.8"
                  /></svg
              ></a>
            </div>
          </div>
          <div className="footer-col">
            <b>Explore</b>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#films">Portfolio</a></li>
              <li><a href="#stories">Stories</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <b>Services</b>
            <ul>
              <li><span>Wedding Photography</span></li>
              <li><span>Cinematic Films</span></li>
              <li><span>Pre-Wedding Shoots</span></li>
              <li><span>Destination Weddings</span></li>
            </ul>
          </div>
          <div className="footer-col">
            <b>Contact</b>
            <ul>
              <li>
                <span
                  >44, 1st Floor, Krishnashree Enclave,<br />Gandhi Nagar,
                  Adyar,<br />Chennai, Tamil Nadu – 600020</span
                >
              </li>
              <li><a href="tel:+919514284820">095142 84820</a></li>
              <li>
                <a
                  href="https://wa.me/919514284820"
                  target="_blank"
                  rel="noopener"
                  >WhatsApp</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 High Click Studio. All rights reserved.</span>
          <span>Adyar, Chennai · Tamil Nadu</span>
        </div>
      </div>
    </footer>
    </>
  );
}
