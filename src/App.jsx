import { useEffect } from "react";
import { initSiteEffects } from "./siteEffects.js";

import Decor from "./components/Decor.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Films from "./components/Films.jsx";
import Services from "./components/Services.jsx";
import Destination from "./components/Destination.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Lightbox from "./components/Lightbox.jsx";
import VideoModal from "./components/VideoModal.jsx";

export default function App() {
  useEffect(() => {
    // After components mount, run the original interactions
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
      <Decor />
      <Nav />
      <Hero />
      <About />
      <Films />
      <Services />
      <Destination />
      <Testimonial />
      <Contact />
      <Footer />
      <Lightbox />
      <VideoModal />
    </div>
  );
}
