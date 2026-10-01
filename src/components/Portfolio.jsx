import { useRef } from "react";
import "./Portfolio.css";
const works = [
  // 4 Videos (covers unchanged)
  {
    id: 1,
    title: "Stefi & Joseph",
    category: "Wedding Film",
    poster: "media/films/stefi-joseph-poster-v.jpg",
    video: "media/films/stefi-joseph.mp4",
    type: "video",
  },
  {
    id: 2,
    title: "Brindha & Kailash",
    category: "Wedding Film",
    poster: "media/films/brindha-kailash-poster-v.jpg",
    video: "media/films/brindha-kailash.mp4",
    type: "video",
  },
  {
    id: 3,
    title: "Kani & Kathir",
    category: "Wedding Film",
    poster: "media/films/kani-kathir-poster-v.jpg",
    video: "media/films/kani-kathir.mp4",
    type: "video",
  },
  {
    id: 4,
    title: "Pooja",
    category: "Reel",
    poster: "media/films/reel-pooja-poster-v.jpg",
    video: "media/films/reel-pooja.mp4",
    type: "video",
  },

  // 4 Images (your links)
  {
    id: 5,
    title: "Wedding Story",
    category: "Photography",
    image:
      "https://res.cloudinary.com/rivla2yw/image/upload/v1790831714/For_Wedding_Photography_Booking-_91_8072724174_weddings_indianweddings_weddingblogger_wedding_dhmlso.jpg",
    type: "image",
  },
  {
    id: 6,
    title: "Portrait",
    category: "Photography",
    image:
      "https://res.cloudinary.com/rivla2yw/image/upload/v1790830763/7H6A8730_hb7ejy.jpg",
    type: "image",
  },
  {
    id: 7,
    title: "Ceremony",
    category: "Photography",
    image:
      "https://res.cloudinary.com/rivla2yw/image/upload/v1790830063/KALA0919_p0qox1.jpg",
    type: "image",
  },
  {
    id: 8,
    title: "Details",
    category: "Photography",
    image:
      "https://res.cloudinary.com/rivla2yw/image/upload/v1790829792/DSC_0313_btvex3.jpg",
    type: "image",
  },
];

export default function Portfolio() {
  const videoRefs = useRef({});

  const handleMouseEnter = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const openVideo = (item) => {
    if (item.type !== "video") return;

    const modal = document.getElementById("videoModal");
    const video = document.getElementById("modalVideo");
    const caption = document.getElementById("vmCaption");

    if (modal && video) {
      video.src = item.video;
      video.poster = item.poster;
      if (caption) caption.textContent = `${item.title} — ${item.category}`;
      modal.classList.add("is-open");
      document.body.style.overflow = "hidden";
      video.play().catch(() => {});
    }
  };

  return (
    <section className="portfolio" id="films">
      <div className="portfolio__header">
        <h2 className="portfolio__title">Our Works</h2>
      </div>

      <div className="portfolio__grid">
        {works.map((item) => (
          <article
            key={item.id}
            className="portfolio__card"
            onMouseEnter={() =>
              item.type === "video" && handleMouseEnter(item.id)
            }
            onMouseLeave={() =>
              item.type === "video" && handleMouseLeave(item.id)
            }
            onClick={() => openVideo(item)}
          >
            <div className="portfolio__image">
              {item.type === "video" ? (
                <>
                  {/* Cover image (always present) */}
                  <img
                    className="portfolio__cover"
                    src={item.poster}
                    alt={item.title}
                    loading="lazy"
                  />

                  {/* Video plays under cover on hover */}
                  <video
                    ref={(el) => (videoRefs.current[item.id] = el)}
                    className="portfolio__video"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>

                  <div className="portfolio__overlay">
                    <button className="portfolio__play" aria-label="Play video">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 5.14v14l11-7-11-7z" />
                      </svg>
                    </button>
                  </div>
                </>
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80";
                  }}
                />
              )}
            </div>

            <div className="portfolio__meta">
              <h3 className="portfolio__name">{item.title}</h3>
              <span className="portfolio__category">{item.category}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
