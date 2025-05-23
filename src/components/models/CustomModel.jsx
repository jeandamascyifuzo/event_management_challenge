import React from "react";
import { Modal } from "antd";

const CustomModel = ({ component, title, width, openModal, onCancel }) => {
  return (
    <>
      <Modal
        title={title}
        open={openModal}
        onCancel={onCancel}
        width={width}
        footer={null}
        centered
      >
        {component}
      </Modal>
    </>
  );
};

export default CustomModel;
