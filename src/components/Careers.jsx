import { Link } from "react-router-dom";
import { useState } from "react";
import "./Careers.css";

const openings = [
  {
    id: 1,
    title: "Photography Intern",
    type: "Internship",
    location: "Chennai · On-site",
    description:
      "Assist on shoots, learn lighting and composition, and support post-production. Ideal for students building a portfolio.",
  },
  {
    id: 2,
    title: "Videography Intern",
    type: "Internship",
    location: "Chennai · On-site",
    description:
      "Support film shoots, help with camera setup, and learn cinematic storytelling and basic editing workflows.",
  },
  {
    id: 3,
    title: "Junior Photographer",
    type: "Full-time",
    location: "Chennai · On-site",
    description:
      "Shoot weddings, portraits, and commercial work under senior guidance. Strong portfolio and camera skills required.",
  },
  {
    id: 4,
    title: "Editor / Post-Production",
    type: "Full-time / Part-time",
    location: "Chennai · Hybrid",
    description:
      "Color grade, edit films, and deliver polished photo sets. Experience with Premiere, DaVinci, or Lightroom preferred.",
  },
];

export default function Careers() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    type: "Internship",
    portfolio: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted. We’ll get back to you soon.");
  };

  return (
    <main className="careers">
      <div className="careers__inner">
        <Link to="/" className="careers__back">
          ← Back to Home
        </Link>

        <div className="careers__header">
          <span className="careers__label">Careers</span>
          <h1 className="careers__title">Join High Click Studio</h1>
          <p className="careers__intro">
            We’re always open to passionate photographers, filmmakers, and
            creatives. Apply for internships or full-time roles below.
          </p>
        </div>

        <div className="careers__openings">
          <h2 className="careers__section-title">Open Positions</h2>
          <div className="careers__list">
            {openings.map((job) => (
              <article key={job.id} className="careers__card">
                <div className="careers__card-top">
                  <h3>{job.title}</h3>
                  <span className="careers__badge">{job.type}</span>
                </div>
                <p className="careers__location">{job.location}</p>
                <p className="careers__desc">{job.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="careers__apply">
          <h2 className="careers__section-title">Apply Now</h2>
          <form className="careers__form" onSubmit={handleSubmit}>
            <div className="careers__row">
              <div className="careers__field">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="careers__field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>
            </div>

            <div className="careers__row">
              <div className="careers__field">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                />
              </div>
              <div className="careers__field">
                <label htmlFor="type">Application Type</label>
                <select
                  id="type"
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                >
                  <option value="Internship">Internship</option>
                  <option value="Full-time">Full-time Job</option>
                  <option value="Part-time">Part-time Job</option>
                </select>
              </div>
            </div>

            <div className="careers__field">
              <label htmlFor="role">Position Applying For</label>
              <select
                id="role"
                name="role"
                value={form.role}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a position
                </option>
                {openings.map((job) => (
                  <option key={job.id} value={job.title}>
                    {job.title}
                  </option>
                ))}
                <option value="General Application">General Application</option>
              </select>
            </div>

            <div className="careers__field">
              <label htmlFor="portfolio">Portfolio / Instagram / Website</label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                value={form.portfolio}
                onChange={handleChange}
                placeholder="https://"
              />
            </div>

            <div className="careers__field">
              <label htmlFor="message">Why do you want to join us?</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about yourself..."
                required
              />
            </div>

            <button type="submit" className="careers__submit">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
