import React from "react";

const Nodata = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full py-20">
      <div className="flex flex-col items-center space-y-2">
        <div className="w-64 h-6 bg-gray-700 rounded-full flex items-center px-4">
          <div className="w-40 h-2 bg-gray-500 rounded-full"></div>
          <div className="w-4 h-4 bg-primary rounded-full ml-auto"></div>
        </div>
        <div className="w-40 h-2 bg-primary rounded-full"></div>
        <div className="w-48 h-2 bg-gray-600 rounded-full"></div>
        <div className="w-36 h-2 bg-gray-600 rounded-full"></div>
      </div>
      <h1 className="mt-8 text-2xl font-semibold text-white">
        No Data Available
      </h1>
      <p className="mt-2 text-gray-400">{message}</p>
    </div>
  );
};

export default Nodata;
