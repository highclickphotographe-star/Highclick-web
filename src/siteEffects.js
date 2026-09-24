/**
 * Original site interactions ported for React.
 * Call initSiteEffects() once after the markup is in the DOM.
 */
export function initSiteEffects() {
  // Prevent double-init on React StrictMode / HMR
  if (window.__hcsEffectsInitialized) return;
  window.__hcsEffectsInitialized = true;

"use strict";

  var reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  var isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  document.documentElement.classList.add("js-anim");

  /* ---------------- ambient luxury orbs ---------------- */
  if (!reduceMotion) {
    var orbHost = document.body;
    ["o1", "o2", "o3"].forEach(function (cls) {
      var orb = document.createElement("div");
      orb.className = "lux-orb " + cls;
      orb.setAttribute("aria-hidden", "true");
      orbHost.appendChild(orb);
    });
  }


  /* ---------------- smooth scroll (lightweight, no deps) ---------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
      closeMobileMenu();
    });
  });

  /* ---------------- nav: solid on scroll + theme (light/dark sections) ---------------- */
  var nav = document.getElementById("nav");
  var lightSections = document.querySelectorAll(
    ".about, .services, .destination, footer",
  );

  function updateNav() {
    var y = window.scrollY;
    nav.classList.toggle("scrolled", y > 40);

    var navMid = 46;
    var onLight = false;
    lightSections.forEach(function (sec) {
      var r = sec.getBoundingClientRect();
      if (r.top <= navMid && r.bottom >= navMid) onLight = true;
    });
    nav.classList.toggle("on-light", onLight);
  }
  window.addEventListener("scroll", updateNav, { passive: true });
  updateNav();

  /* ---------------- mobile menu ---------------- */
  var hamburger = document.getElementById("hamburger");
  function closeMobileMenu() {
    document.body.classList.remove("menu-open");
    hamburger.setAttribute("aria-expanded", "false");
  }
  hamburger.addEventListener("click", function () {
    var open = document.body.classList.toggle("menu-open");
    hamburger.setAttribute("aria-expanded", open ? "true" : "false");
  });

  /* ---------------- custom cursor ---------------- */
  if (!isTouch) {
    var dot = document.getElementById("cursorDot");
    var ring = document.getElementById("cursorRing");
    var rx = 0,
      ry = 0,
      tx = 0,
      ty = 0;
    window.addEventListener("mousemove", function (e) {
      document.body.classList.add("cursor-ready");
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      tx = e.clientX;
      ty = e.clientY;
    });
    function tick() {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      requestAnimationFrame(tick);
    }
    tick();
    document.querySelectorAll("a, button, .reel-card").forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        ring.classList.add("hovering");
      });
      el.addEventListener("mouseleave", function () {
        ring.classList.remove("hovering");
      });
    });
  }

  /* ---------------- scroll reveal (luxury / continuous) ---------------- */
  var revealEls = document.querySelectorAll(
    "[data-reveal], [data-stagger], [data-img-reveal], .deco-curve, .films-scenery, .films, .about-scenery, .testi-scenery, .lux-divider",
  );
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("in-view");
    });
  }

  /* Auto-tag common groups for stagger if not already marked */
  document.querySelectorAll(".services-list, .about-stats, .footer-top, .reels-track").forEach(function (el) {
    if (!el.hasAttribute("data-stagger") && !el.hasAttribute("data-reveal")) {
      el.setAttribute("data-stagger", "");
      if ("IntersectionObserver" in window && !reduceMotion) {
        var io2 = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              e.target.classList.add("in-view");
              io2.unobserve(e.target);
            }
          });
        }, { threshold: 0.12 });
        io2.observe(el);
      } else {
        el.classList.add("in-view");
      }
    }
  });

  /* Image reveal on key media blocks */
  document.querySelectorAll(".about-arch, .about-overlap, .destination-media, .final-cta-frame .inner, .polaroid").forEach(function (el) {
    if (!el.hasAttribute("data-img-reveal")) {
      el.setAttribute("data-img-reveal", "");
      if ("IntersectionObserver" in window && !reduceMotion) {
        var io3 = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              e.target.classList.add("in-view");
              io3.unobserve(e.target);
            }
          });
        }, { threshold: 0.15 });
        io3.observe(el);
      } else {
        el.classList.add("in-view");
      }
    }
  });

  /* ---------------- subtle connected parallax ---------------- */
  if (!reduceMotion && !isTouch) {
    var parallaxEls = document.querySelectorAll("[data-parallax]");
    var ticking = false;
    function updateParallax() {
      var vh = window.innerHeight;
      parallaxEls.forEach(function (el) {
        var speed = parseFloat(el.getAttribute("data-parallax")) || 0.06;
        var rect = el.getBoundingClientRect();
        if (rect.bottom < -40 || rect.top > vh + 40) return;
        var progress = (vh * 0.5 - (rect.top + rect.height * 0.5)) / vh;
        var y = progress * speed * 120;
        el.style.transform = "translate3d(0," + y.toFixed(2) + "px,0)";
      });
      ticking = false;
    }
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
        }
      },
      { passive: true },
    );
    updateParallax();
  }

  /* ---------------- page dot scrollspy ---------------- */
  var dots = document.querySelectorAll(".page-dots button");
  var sections = Array.prototype.map.call(dots, function (d) {
    return document.querySelector(d.getAttribute("data-target"));
  });
  dots.forEach(function (d) {
    d.addEventListener("click", function () {
      var target = document.querySelector(d.getAttribute("data-target"));
      if (target)
        target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    });
  });
  function updateDots() {
    var mid = window.scrollY + window.innerHeight * 0.4;
    var activeIndex = 0;
    sections.forEach(function (sec, i) {
      if (sec && sec.offsetTop <= mid) activeIndex = i;
    });
    dots.forEach(function (d, i) {
      d.classList.toggle("active", i === activeIndex);
    });

    // mirror the active section onto the top nav links (Home gets the gold dot)
    var activeId = dots[activeIndex]
      ? dots[activeIndex].getAttribute("data-target")
      : "#home";
    document.querySelectorAll(".nav-links a").forEach(function (a) {
      var on = a.getAttribute("href") === activeId;
      a.classList.toggle("is-active", on);
      if (on) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }
  window.addEventListener("scroll", updateDots, { passive: true });
  updateDots();

  /* ---------------- hero video autoplay fallback ---------------- */
  var heroVideo = document.getElementById("heroVideo");
  if (heroVideo) {
    heroVideo.preload = "auto";
    var playPromise = heroVideo.play();
    if (playPromise && playPromise.catch) playPromise.catch(function () {});
  }

  /* ---------------- video modal (plays any film) ---------------- */
  var videoModal = document.getElementById("videoModal");
  var modalVideo = document.getElementById("modalVideo");
  var vmCaption = document.getElementById("vmCaption");
  var lastFocused = null;

  // the film the hero / section play buttons open
  var SHOWREEL = {
    src: "media/films/stefi-joseph.mp4",
    poster: "media/films/stefi-joseph-poster.jpg",
    title: "Stefi Rose & Joseph Thomas \u2014 Wedding Trailer",
  };

  function openVideoModal(film) {
    if (!videoModal || !modalVideo) return;
    var f = film || SHOWREEL;
    lastFocused = document.activeElement;

    // only reload the file when a different film was chosen
    if (modalVideo.getAttribute("src") !== f.src) {
      modalVideo.setAttribute("src", f.src);
      if (f.poster) modalVideo.setAttribute("poster", f.poster);
      modalVideo.load();
    }
    if (vmCaption) vmCaption.textContent = f.title || "";

    videoModal.classList.add("open");
    document.body.style.overflow = "hidden";
    try {
      modalVideo.currentTime = 0;
    } catch (err) {}
    var pp = modalVideo.play();
    if (pp && pp.catch) pp.catch(function () {});
    var closeBtn = document.getElementById("vmClose");
    if (closeBtn) closeBtn.focus();
  }

  function closeVideoModal() {
    if (!videoModal || !videoModal.classList.contains("open")) return;
    videoModal.classList.remove("open");
    modalVideo.pause();
    document.body.style.overflow = "";
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  var watchFilmBtn = document.getElementById("watchFilmBtn");
  if (watchFilmBtn) {
    watchFilmBtn.addEventListener("click", function () {
      openVideoModal(SHOWREEL);
    });
  }
  var vmClose = document.getElementById("vmClose");
  if (vmClose) vmClose.addEventListener("click", closeVideoModal);
  if (videoModal) {
    videoModal.addEventListener("click", function (e) {
      if (e.target === videoModal) closeVideoModal();
    });
  }

  /* ---------------- reels carousel: hover preview + click to play ---------------- */
  var reelCards = document.querySelectorAll(".reel-card");
  reelCards.forEach(function (card) {
    var preview = card.querySelector("video");
    var title = card.querySelector(".reel-title");
    var kind = card.querySelector(".reel-kind");

    var film = {
      src: card.getAttribute("data-src"),
      poster: card.getAttribute("data-poster"),
      title:
        (title ? title.textContent.trim() : "High Click Studio") +
        (kind ? " \u2014 " + kind.textContent.trim() : ""),
    };

    card.addEventListener("click", function () {
      if (film.src) openVideoModal(film);
    });

    // muted preview on hover, desktop pointers only
    if (preview && !isTouch && !reduceMotion) {
      var loaded = false;
      card.addEventListener("mouseenter", function () {
        if (!loaded) {
          preview.load();
          loaded = true;
        }
        card.classList.add("previewing");
        var pp = preview.play();
        if (pp && pp.catch) pp.catch(function () {});
      });
      card.addEventListener("mouseleave", function () {
        card.classList.remove("previewing");
        preview.pause();
      });
    }
  });

  /* ---------------- reels carousel: arrows + drag-to-scroll ---------------- */
  var reelsTrack = document.getElementById("reelsTrack");
  if (reelsTrack) {
    var reelsPrev = document.getElementById("reelsPrev");
    var reelsNext = document.getElementById("reelsNext");

    function reelsStep() {
      var card = reelsTrack.querySelector(".reel-card");
      var cardW = card ? card.getBoundingClientRect().width : 220;
      var gap = parseFloat(getComputedStyle(reelsTrack).columnGap) || 18;
      // move roughly two cards at a time, but never more than the track itself
      return Math.min(reelsTrack.clientWidth * 0.9, (cardW + gap) * 2);
    }
    if (reelsPrev) {
      reelsPrev.addEventListener("click", function () {
        reelsTrack.scrollBy({ left: -reelsStep(), behavior: "smooth" });
      });
    }
    if (reelsNext) {
      reelsNext.addEventListener("click", function () {
        reelsTrack.scrollBy({ left: reelsStep(), behavior: "smooth" });
      });
    }

    // desktop mouse drag-to-scroll; touch keeps native momentum scrolling
    if (!isTouch) {
      var isDown = false,
        startX = 0,
        startScroll = 0,
        moved = false;
      reelsTrack.addEventListener("mousedown", function (e) {
        isDown = true;
        moved = false;
        startX = e.pageX;
        startScroll = reelsTrack.scrollLeft;
        reelsTrack.classList.add("dragging");
      });
      window.addEventListener("mouseup", function () {
        isDown = false;
        reelsTrack.classList.remove("dragging");
      });
      reelsTrack.addEventListener("mouseleave", function () {
        isDown = false;
        reelsTrack.classList.remove("dragging");
      });
      reelsTrack.addEventListener("mousemove", function (e) {
        if (!isDown) return;
        var dx = e.pageX - startX;
        if (Math.abs(dx) > 4) moved = true;
        reelsTrack.scrollLeft = startScroll - dx;
      });
      // suppress the click-to-play that would otherwise fire after a drag
      reelsTrack.addEventListener(
        "click",
        function (e) {
          if (moved) {
            e.stopPropagation();
            e.preventDefault();
          }
        },
        true,
      );
    }

    // only show an arrow when it would actually do something —
    // both fully hidden when the row already fits, and each one
    // individually hidden at its own end of the scroll range
    function updateReelsArrows() {
      var max = reelsTrack.scrollWidth - reelsTrack.clientWidth;
      var hasOverflow = max > 2;
      [reelsPrev, reelsNext].forEach(function (btn) {
        if (btn) btn.style.display = hasOverflow ? "" : "none";
      });
      if (!hasOverflow) return;
      if (reelsPrev)
        reelsPrev.style.visibility =
          reelsTrack.scrollLeft <= 2 ? "hidden" : "visible";
      if (reelsNext)
        reelsNext.style.visibility =
          reelsTrack.scrollLeft >= max - 2 ? "hidden" : "visible";
    }
    updateReelsArrows();
    reelsTrack.addEventListener("scroll", updateReelsArrows);
    window.addEventListener("resize", updateReelsArrows);
    // poster images loading in can change scrollWidth after the initial check
    window.addEventListener("load", updateReelsArrows);
  }

  /* ---------------- lightbox for stills ---------------- */
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");

  function closeLightbox() {
    if (!lightbox || !lightbox.classList.contains("open")) return;
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-lightbox]").forEach(function (el) {
    el.style.cursor = "zoom-in";
    el.addEventListener("click", function () {
      if (!lightbox || !lightboxImg) return;
      var inner = el.querySelector("img");
      lightboxImg.src = el.getAttribute("data-lightbox");
      lightboxImg.alt = inner ? inner.alt : "";
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  var lbClose = document.getElementById("lbClose");
  if (lbClose) lbClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  /* ---------------- escape closes whatever is open ---------------- */
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape" && e.key !== "Esc") return;
    closeLightbox();
    closeVideoModal();
    closeMobileMenu();
  });

  /* ---------------- testimonial slider ---------------- */
  var testimonials = [
    {
      img: "media/home-3-bw.jpg",
      tag: "A. & K. — Chennai",
      quote:
        "They didn't direct our wedding, they disappeared into it — and somehow that's how every real moment got caught.",
      name: "Aishwarya &amp; Karthik · Chennai",
    },
    {
      img: "media/home-2.jpg",
      tag: "D. & R. — Chennai",
      quote:
        "Watching the film back, we noticed things about our own wedding day we hadn't even seen happen in front of us.",
      name: "Divya &amp; Rahul · Chennai",
      bw: true,
    },
    {
      img: "media/home-4.jpg",
      tag: "M. & S. — Adyar",
      quote:
        "No awkward posing, no interrupting the priest mid-ceremony — just a team that quietly knew where to stand.",
      name: "Meera &amp; Suresh · Adyar",
      bw: true,
    },
  ];
  var tIndex = 0;
  var testiImg = document.getElementById("testiImg");
  var testiTag = document.getElementById("testiTag");
  var testiQuote = document.getElementById("testiQuote");
  var testiName = document.getElementById("testiName");
  var testiDotsWrap = document.getElementById("testiDots");
  var testiDotEls = testiDotsWrap ? testiDotsWrap.querySelectorAll("span") : [];

  function renderTesti() {
    var t = testimonials[tIndex];
    testiImg.style.opacity = 0;
    setTimeout(
      function () {
        testiImg.src = t.img;
        testiImg.style.filter = t.bw ? "grayscale(1) contrast(1.08)" : "";
        testiTag.textContent = t.tag;
        testiQuote.textContent = t.quote;
        testiName.innerHTML =
          "<b>" + t.name.split(" · ")[0] + "</b> · " + t.name.split(" · ")[1];
        testiImg.style.opacity = 1;
      },
      reduceMotion ? 0 : 180,
    );
    testiDotEls.forEach(function (d, i) {
      d.classList.toggle("active", i === tIndex);
    });
  }
  testiImg.style.transition = "opacity 0.3s ease";

  var testiPrev = document.getElementById("testiPrev");
  var testiNext = document.getElementById("testiNext");
  if (testiPrev)
    testiPrev.addEventListener("click", function () {
      tIndex = (tIndex - 1 + testimonials.length) % testimonials.length;
      renderTesti();
    });
  if (testiNext)
    testiNext.addEventListener("click", function () {
      tIndex = (tIndex + 1) % testimonials.length;
      renderTesti();
    });
  testiDotEls.forEach(function (d, i) {
    d.style.cursor = "pointer";
    d.addEventListener("click", function () {
      tIndex = i;
      renderTesti();
    });
  });

  /* ---------------- floating particles ---------------- */
  if (!reduceMotion) {
    var canvas = document.getElementById("particles");
    if (canvas && canvas.getContext) {
      var ctx = canvas.getContext("2d");
      var particles = [];
      var particleCount = isTouch ? 22 : 72;
      var w = 0;
      var h = 0;

      function resizeCanvas() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
      }
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas, { passive: true });

      function makeParticle() {
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.8 + 0.35,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18 - 0.06,
          a: Math.random() * 0.4 + 0.1,
        };
      }
      for (var i = 0; i < particleCount; i++) particles.push(makeParticle());

      function drawParticles() {
        ctx.clearRect(0, 0, w, h);
        for (var i = 0; i < particles.length; i++) {
          var p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          if (p.y < -10) {
            p.y = h + 10;
            p.x = Math.random() * w;
          }
          if (p.x < -10) p.x = w + 10;
          if (p.x > w + 10) p.x = -10;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(185, 151, 91," + p.a + ")";
          ctx.fill();
        }
        requestAnimationFrame(drawParticles);
      }
      drawParticles();
    }
  }
}
