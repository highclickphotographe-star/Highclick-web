import { Link } from "react-router-dom";
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

const GOOGLE_FORM_EMBED =
  "https://docs.google.com/forms/d/e/1FAIpQLSe4lWv8H3qOLV0bxdkt2iPIMNSFNb7BHwPWBrUShGmORcHNTg/viewform?embedded=true";

export default function Careers() {
  return (
    <main className="careers">
      <div className="careers__inner">
        <Link to="/" className="careers__back">
          ← Back to Home
        </Link>

        <header className="careers__header">
          <span className="careers__label">Careers</span>
          <h1 className="careers__title">Join High Click Studio</h1>
          <p className="careers__intro">
            We’re always open to passionate photographers, filmmakers, and
            creatives. Browse open roles and apply below.
          </p>
        </header>

        <section className="careers__openings">
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
        </section>

        <section className="careers__apply" id="apply">
          <h2 className="careers__section-title">Apply Now</h2>
          <p className="careers__form-note">
            Fill out the form and upload your resume. You’ll see a confirmation
            after submitting.
          </p>

          <div className="careers__form-card">
            <iframe
              src={GOOGLE_FORM_EMBED}
              title="High Click Studio Career Application"
              width="100%"
              height="1200"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>
        </section>
      </div>
    </main>
  );
}
