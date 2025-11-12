import Gallery from "../../molecules/gallery/Gallery"

export default function CameraOverlay({ isOpen, onClose, onTakePicture }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-lg z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Câmera"
    >
      <button
        onClick={onClose}
        className="absolute top-6 left-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-200 backdrop-blur-sm border border-white/20 hover:scale-105"
        aria-label="Fechar"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="w-full max-w-4xl max-h-[95vh] overflow-hidden bg-white rounded-2xl shadow-2xl">
        <Gallery />
      </div>
    </div>
  );
}