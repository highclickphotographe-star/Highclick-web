/** Contact section */
export default function Contact() {
  return (
    <>
{/* ============================== FINAL CTA ============================== */}
    <section className="final-cta lux-contact" id="contact">
      <div className="lux-contact-bg" aria-hidden="true">
        <span className="lux-petal p1"></span>
        <span className="lux-petal p2"></span>
        <span className="lux-petal p3"></span>
        <span className="lux-petal p4"></span>
        <span className="lux-petal p5"></span>
        <span className="lux-petal p6"></span>
        <svg className="lux-curve lux-curve-tl" viewBox="0 0 420 320" fill="none">
          <path d="M0 300 C 100 140, 200 220, 320 60 S 400 30, 420 10" stroke="#B9975B" strokeWidth="1.15" opacity="0.4"/>
        </svg>
        <svg className="lux-curve lux-curve-br" viewBox="0 0 420 320" fill="none">
          <path d="M420 10 C 340 180, 240 100, 120 240 S 40 280, 0 300" stroke="#B9975B" strokeWidth="1.15" opacity="0.35"/>
        </svg>
      </div>

      <div className="wrap lux-contact-grid">
        <div className="lux-contact-form-col" data-reveal>
          <span className="lux-contact-rule"></span>
          <h2 className="lux-contact-title">Get In <span className="gold">Touch</span></h2>
          <p className="lux-contact-lead">
            We&rsquo;d love to hear from you. Share your plans, ideas or questions
            and we&rsquo;ll get back to you soon.
          </p>

          <form className="lux-form" id="contactForm" onSubmit={(e) => e.preventDefault()}>
            <div className="lux-form-row">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <input type="tel" name="phone" placeholder="Phone Number" />
            <select name="enquiry" aria-label="Type of Enquiry">
              <option value="">Type of Enquiry</option>
              <option>Wedding Photography</option>
              <option>Cinematic Film</option>
              <option>Pre-Wedding Shoot</option>
              <option>Destination Wedding</option>
              <option>Other</option>
            </select>
            <textarea name="message" rows="4" placeholder="Your Message"></textarea>
            <button type="submit" className="lux-send-btn">
              Send Message
              <span className="send-arrow">→</span>
            </button>
          </form>
        </div>

        <div className="lux-contact-info" data-reveal data-reveal-delay="1">
          <div className="lux-info-item">
            <span className="lux-info-icon">📍</span>
            <div>
              <b>Location</b>
              <span>Adyar, Chennai</span>
            </div>
          </div>
          <div className="lux-info-item">
            <span className="lux-info-icon">📞</span>
            <div>
              <b>Phone</b>
              <a href="tel:+919514284820">+91 95142 84820</a>
            </div>
          </div>
          <div className="lux-info-item">
            <span className="lux-info-icon">✉️</span>
            <div>
              <b>Email</b>
              <a href="mailto:highclickphotographe.com">highclickphotographe.com</a>
            </div>
          </div>
          <div className="lux-info-item">
            <span className="lux-info-icon">🌐</span>
            <div>
              <b>WhatsApp</b>
              <a href="https://wa.me/919514284820" target="_blank" rel="noopener">Chat with us</a>
            </div>
          </div>
        </div>

        <div className="lux-contact-photo" data-reveal data-reveal-delay="2">
          <div className="lux-arch">
            <img src="media/home-4.jpg" alt="Bride and groom under floral arch" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
