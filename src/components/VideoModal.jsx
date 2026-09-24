/** VideoModal section */
export default function VideoModal() {
  return (
    <>
{/* ============================== VIDEO MODAL ============================== */}
    <div
      className="video-modal"
      id="videoModal"
      role="dialog"
      aria-modal="true"
      aria-label="Wedding film"
    >
      <div className="vm-inner">
        <video
          id="modalVideo"
          controls
          playsinline
          preload="none"
          poster="media/films/stefi-joseph-poster.jpg"
          src="media/films/stefi-joseph.mp4"
        ></video>
        <p className="vm-caption" id="vmCaption">
          Stefi Rose &amp; Joseph Thomas &mdash; Wedding Trailer
        </p>
        <button className="lb-close" id="vmClose" aria-label="Close">
          <svg
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="none"
            strokeWidth="1.6"
          >
            <path d="M3 3 L13 13 M13 3 L3 13" />
          </svg>
        </button>
      </div>
    </div>
    </>
  );
}
