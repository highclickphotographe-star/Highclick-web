import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form later
  };

  return (
    <>
      {/* CTA Banner on main page */}
      <section className="contact-cta" id="contact">
        <div className="contact-cta__media">
          <img
            src="media/letsconnect.jpeg"
            alt="High Click Studio"
            loading="lazy"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1600&q=80";
            }}
          />
          <div className="contact-cta__overlay" />
        </div>

        <div className="contact-cta__content">
          <span className="contact-cta__label">Contact</span>
          <h2 className="contact-cta__title">
            Let’s create
            <span>something timeless</span>
          </h2>
          <p className="contact-cta__text">
            Tell us about your story. We’ll get back to you within 24 hours.
          </p>
        </div>

        <button
          type="button"
          className="contact-cta__btn"
          onClick={() => setShowForm(true)}
        >
          Let’s Connect
        </button>
      </section>

      {/* Form Overlay (acts as separate page) */}
      {showForm && (
        <div className="contact-form-page">
          <div className="contact-form-page__inner">
            <button
              type="button"
              className="contact-form-page__close"
              onClick={() => setShowForm(false)}
            >
              ← Back
            </button>

            <span className="contact-form-page__label">Contact</span>
            <h2 className="contact-form-page__title">Let’s Connect</h2>
            <p className="contact-form-page__text">
              Tell us about your story. We’ll get back to you within 24 hours.
            </p>

            <form className="contact-form-page__form" onSubmit={handleSubmit}>
              <div className="contact-form-page__row">
                <div className="contact-form-page__field">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="contact-form-page__field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div className="contact-form-page__field">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone number"
                />
              </div>

              <div className="contact-form-page__field">
                <label htmlFor="enquiry">Type of Enquiry</label>
                <select id="enquiry" name="enquiry" defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option>Wedding Film</option>
                  <option>Photography</option>
                  <option>Pre-Wedding</option>
                  <option>Commercial</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="contact-form-page__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button type="submit" className="contact-form-page__submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
