import React from "react";

const ReusableDrawer = ({ isOpen, onClose, createButton, children }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-primary-darkBg bg-opacity-45 ${
          isOpen ? "opacity-45" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`transition-all duration-800 ease-in-out fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }  w-2/5 bg-[#242424]`}
        tabIndex="-1"
      >
        <div className="flex items-center justify-between pr-4 mb-6">
          <button
            onClick={onClose}
            className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center hover:bg-gray-600 hover:text-white"
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
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>

          {createButton ? createButton : ""}
        </div>

        <div>{children}</div>
      </div>
    </>
  );
};

export default ReusableDrawer;
