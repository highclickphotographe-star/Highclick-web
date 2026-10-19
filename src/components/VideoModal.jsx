import { useEffect } from "react";
import "./VideoModal.css";

export default function VideoModal() {
  useEffect(() => {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("modalVideo");
    const closeBtn = document.getElementById("vmClose");

    const close = () => {
      if (!modal || !video) return;
      modal.classList.remove("is-open");
      video.pause();
      video.removeAttribute("src");
      video.load();
      document.body.style.overflow = "";
    };

    const onKey = (e) => {
      if (e.key === "Escape") close();
    };

    const onBackdrop = (e) => {
      if (e.target === modal) close();
    };

    closeBtn?.addEventListener("click", close);
    modal?.addEventListener("click", onBackdrop);
    document.addEventListener("keydown", onKey);

    return () => {
      closeBtn?.removeEventListener("click", close);
      modal?.removeEventListener("click", onBackdrop);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      className="video-modal"
      id="videoModal"
      role="dialog"
      aria-modal="true"
    >
      <div className="video-modal__inner">
        <button
          type="button"
          className="video-modal__close"
          id="vmClose"
          aria-label="Close video"
        >
          ×
        </button>
        <video
          id="modalVideo"
          className="video-modal__player"
          controls
          playsInline
        />
        <p className="video-modal__caption" id="vmCaption" />
      </div>
    </div>
  );
}
