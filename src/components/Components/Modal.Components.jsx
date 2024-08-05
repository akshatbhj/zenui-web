import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="relative z-10">
      <button
        className="bg-gray-100 text-gray-900 font-medium py-2 px-6 rounded-md shadow-sm hover:bg-gray-200 focus:outline-none transition duration-200 ease-in-out"
        onClick={openModal}
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-900 w-11/12 max-w-lg mx-auto p-6 rounded-lg shadow-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              onClick={closeModal}
            >
              <FaTimes className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                iOS-like Modal
              </h2>
              <p className="text-gray-300 mb-4">
                This is a modal with a design inspired by iOS. It features
                smooth transitions, subtle shadows, and rounded corners.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
