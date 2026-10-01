import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        {/* Left Content */}
        <div className="about__content" data-reveal>
          <span className="about__label">About Us</span>

          <h2 className="about__title">
            More than photography.
            <span>A way of seeing.</span>
          </h2>

          <p className="about__text">
            At High Click Studio, we believe every frame should feel honest,
            intentional, and timeless. Whether it’s a wedding, a brand campaign,
            or a personal portrait — we approach each story with the same quiet
            attention and cinematic eye.
          </p>

          <p className="about__text">
            Based in Chennai, we work across India and beyond, creating images
            that feel lived-in rather than posed.
          </p>

          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-number">8+</span>
              <span className="about__stat-label">Years</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">400+</span>
              <span className="about__stat-label">Projects</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">12</span>
              <span className="about__stat-label">Cities</span>
            </div>
          </div>

          <a href="#films" className="about__link">
            View our work
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
              <path
                d="M0 5h16M12 1l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </a>
        </div>

        {/* Right - Image Grid */}
        <div className="about__gallery" data-reveal style={{ "--i": 1 }}>
          <div className="about__img about__img--main">
            <img
              src="media/home-1.jpg"
              alt="High Click Studio work"
              loading="lazy"
            />
          </div>
          <div className="about__img about__img--top">
            <img
              src="media/home-2.jpg"
              alt="High Click Studio work"
              loading="lazy"
            />
          </div>
          <div className="about__img about__img--bottom">
            <img
              src="media/home-3.jpg"
              alt="High Click Studio work"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
