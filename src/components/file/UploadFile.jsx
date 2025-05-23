const UploadFile = ({ setHasError }) => {
  const validFileTypes = ["image/webp", "image/jpeg", "image/png", "image/jpg"];

  const handleDragOver = (e) => {
    e.preventDefault();
    e?.currentTarget?.classList?.add("border-indigo-600");
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e?.currentTarget?.classList?.remove("border-indigo-600");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e?.currentTarget?.classList?.remove("border-indigo-600");
    const file = e?.dataTransfer?.files[0];
    validateAndProcessFile(file);
  };

  const handleFileChange = (e) => {
    const file = e?.target?.files[0];
    validateAndProcessFile(file);
  };

  const validateAndProcessFile = (file) => {
    if (!file) {
      return;
    }

    if (!validFileTypes?.includes(file?.type)) {
      return;
    }
    setHasError(false);
    uploadFile(file);
    displayPreview(file);
  };

  const displayPreview = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.info(reader.result);
    };
  };

  const uploadFile = async (file) => {
    const payload = new FormData();
    payload.append("images", file);
  };

  return (
    <div
      className="w-[400px] relative border-2 border-gray-300 border-dashed rounded-lg p-6 text-white"
      id="dropzone"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 z-50"
        onChange={handleFileChange}
      />
      {
        <div className="text-center">
          <img
            className="mx-auto h-12 w-12 text-white bg-white rounded-md"
            src="https://www.svgrepo.com/show/357902/image-upload.svg"
            alt="Upload icon"
          />
          <h3 className="mt-2 text-sm font-medium text-white">
            <label htmlFor="file-upload" className="relative cursor-pointer">
              <span>Drag and drop</span>
              <span className="text-white"> or browse</span>
              <span> to upload</span>
            </label>
          </h3>
          <p className="mt-1 text-xs text-white">PNG, JPG, GIF up to 10MB</p>
        </div>
      }
    </div>
  );
};

export default UploadFile;
