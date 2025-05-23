import React from "react";
import ReusableModel from "./ReusableModel";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const ConfrimDeleteModel = ({
  isOpen,
  onClose,
  onConfirm,
  message,
  isLoading,
}) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return (
    <ReusableModel isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <svg
          className="mx-auto mb-4 w-12 h-12 text-gray-200"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h3 className="mb-5 text-lg font-normal text-gray-400">
          Are you sure you want to delete {message}
        </h3>
        <button
          onClick={onClose}
          className="py-2.5 px-5 text-sm font-medium  rounded-lg border focus:outline-none focus:ring-4 focus:ring-gray-100 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
        >
          No, cancel
        </button>
        <button
          onClick={onConfirm}
          className="text-white ml-3 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          {isLoading ? <Spin indicator={antIcon} /> : "Yes, I'm sure"}
        </button>
      </div>
    </ReusableModel>
  );
};
export default ConfrimDeleteModel;
