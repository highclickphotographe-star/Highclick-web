import { useEffect, useRef, useState } from "react";
import "./Hero.css";

const slides = [
  {
    id: 1,
    src: "media/hero-teaser.mp4",
    poster: "media/hero-poster.jpg",
  },
  {
    id: 2,
    src: "media/hero-2.mp4",
    poster: "media/hero-2-poster.jpg",
  },
  {
    id: 3,
    src: "media/films/brindha-kailash.mp4",
    poster: "media/films/brindha-kailash-poster-v.jpg",
  },
  {
    id: 4,
    src: "media/films/kani-kathir.mp4",
    poster: "media/films/kani-kathir-poster-v.jpg",
  },
];

const brands = [
  { name: "LAKME ACADEMY ADYAR", logo: "media/brands/brand-1.png" },
  { name: "PATHWAY ", logo: "media/brands/brand-2.png" },
  { name: "STAR HEALTH INSURANCE", logo: "media/brands/brand-3.png" },
  { name: "LAKME ACADEMY T.NAGAR", logo: "media/brands/brand-4.png" },
  // { name: "Brand 5", logo: "media/brands/brand-5.png" },
  // { name: "Brand 6", logo: "media/brands/brand-6.png" },
  // { name: "Brand 7", logo: "media/brands/brand-7.png" },
  // { name: "Brand 8", logo: "media/brands/brand-8.png" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef([]);

  // Auto slide every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Play active video, pause others
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === current) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [current]);

  const brandItems = [...brands, ...brands];

  return (
    <header className="hero" id="home">
      {/* Video slides */}
      <div className="hero__media">
        {slides.map((slide, i) => (
          <video
            key={slide.id}
            ref={(el) => (videoRefs.current[i] = el)}
            className={`hero__video ${i === current ? "is-active" : ""}`}
            muted
            loop
            playsInline
            preload={i === 0 ? "auto" : "metadata"}
            poster={slide.poster}
          >
            <source src={slide.src} type="video/mp4" />
          </video>
        ))}
        <div className="hero__overlay" />
      </div>

      {/* Text */}
      <div className="hero__content">
        <p className="hero__eyebrow">High Click Studio · Chennai</p>
        <h1 className="hero__title">
          Stories told
          <br />
          through light
        </h1>
        <p className="hero__subtitle">Premium Photography & Films</p>
      </div>

      {/* Slide dots */}
      <div className="hero__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === current ? "is-active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Brands over hero bottom */}
      <div className="hero__brands">
        <span className="hero__brands-label">Trusted By</span>
        <div className="hero__brands-track">
          {brandItems.map((brand, i) => (
            <div className="hero__brands-item" key={`${brand.name}-${i}`}>
              <img
                src={brand.logo}
                alt={brand.name}
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <span className="hero__brands-fallback">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
