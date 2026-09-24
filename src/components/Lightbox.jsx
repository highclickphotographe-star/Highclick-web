/** Lightbox section */
export default function Lightbox() {
  return (
    <>
{/* ============================== LIGHTBOX ============================== */}
    <div
      className="lightbox"
      id="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <img id="lightboxImg" src="" alt="" />
      <button className="lb-close" id="lbClose" aria-label="Close">
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
    </>
  );
}
