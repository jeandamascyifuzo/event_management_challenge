import React from "react";

const ReusableModel = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-primary-darkBg bg-opacity-70">
      <div className="relative p-4 w-full max-w-md">
        <div className="relative rounded-lg shadow bg-[#1d1d1d]">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 bg-transparent  rounded-lg text-sm w-8 h-8 flex justify-center items-center hover:bg-gray-600 hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>

          <div className="p-4 md:p-5">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ReusableModel;
