import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { initSiteEffects } from "./siteEffects.js";

import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Services from "./components/Services.jsx";
import Testimonials from "./components/Testimonial.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import VideoModal from "./components/VideoModal.jsx";
import Careers from "./components/Careers.jsx";

function HomePage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        initSiteEffects();
      } catch (err) {
        console.error("Site effects init error:", err);
      }
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="hcs-root">
      <Nav />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <VideoModal />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/careers" element={<Careers />} />
    </Routes>
  );
}
