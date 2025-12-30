import { createPortal } from "react-dom";

const Modal = ({ children, onClose }) => {
  return createPortal(
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60">
      <div className="relative w-full max-w-5xl max-h-[85vh] bg-white rounded-3xl p-6 overflow-y-auto">

        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 text-2xl font-bold"
        >
          ✕
        </button>

        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
