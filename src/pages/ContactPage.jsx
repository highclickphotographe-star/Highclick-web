import { useState } from "react";
import "./ContactPage.css";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form handling later
  };

  return (
    <main className="contact-page">
      <div className="contact-page__container">
        <div className="contact-page__header">
          <a href="/" className="contact-page__back">
            ← Back
          </a>
          <span className="contact-page__label">Contact</span>
          <h1 className="contact-page__title">Let’s Connect</h1>
          <p className="contact-page__text">
            Tell us about your story. We’ll get back to you within 24 hours.
          </p>
        </div>

        <form className="contact-page__form" onSubmit={handleSubmit}>
          <div className="contact-page__row">
            <div className="contact-page__field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="contact-page__field">
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

          <div className="contact-page__field">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone number"
            />
          </div>

          <div className="contact-page__field">
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

          <div className="contact-page__field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell us about your project..."
            />
          </div>

          <button type="submit" className="contact-page__submit">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
