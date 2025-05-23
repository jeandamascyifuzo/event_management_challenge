const Confirmation = () => {
  return (
    <div className="relative p-8 text-center">
      <div
        className={`w-12 h-12 rounded-full ${
          true === "success" ? "border border-green-500" : ""
        } flex items-center justify-center mx-auto mb-3.5`}
      >
        {true === "success" ? (
          <svg
            aria-hidden="true"
            className="w-10 h-10 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            color="red"
            height="6em"
            width="6em"
          >
            <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" />
            <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
          </svg>
        )}
      </div>

      <button
        data-modal-toggle="successModal"
        type="button"
        className="py-2 px-10 text-sm font-medium text-center text-white rounded bg-primary outline-none"
      >
        Back
      </button>
    </div>
  );
};

export default Confirmation;
