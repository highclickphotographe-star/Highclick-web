import { useEffect, useRef } from "react";
import "./Hero.css";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      video.play().catch(() => {});
    };
    play();
    document.addEventListener("click", play, { once: true });
    return () => document.removeEventListener("click", play);
  }, []);

  return (
    <header className="hero" id="home">
      <div className="hero__media">
        <video
          ref={videoRef}
          className="hero__video"
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          poster="media/hero-poster.jpg"
        >
          <source src="media/hero-teaser.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">High Click Studio · Chennai</p>
        <h1 className="hero__title">Stories Told Through Light</h1>
        <p className="hero__subtitle">Premium Photography & Films</p>
      </div>
    </header>
  );
}
