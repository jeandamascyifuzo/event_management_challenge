import { useNavigate } from "react-router-dom";
import { Modal, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const TopSetion = ({
  modalComponent,
  buttonsComponent,
  isModalOpen,
  handleCancel,
  setIsModalOpen,
  item,
  goForward,
  showButton,
}) => {
  const navigate = useNavigate();
  const showModal = () => {
    !goForward && setIsModalOpen(true);
    goForward && navigate(goForward);
  };

  return (
    <div className="flex justify-between mb-6 pt-2.5">
      <div></div>
      <div>{buttonsComponent && <div>{buttonsComponent}</div>}</div>
      {showButton && (
        <Button
          type="primary"
          icon={<PlusCircleOutlined />}
          onClick={showModal}
          className="min-w-40 h-10"
        >
          Add New {item}
        </Button>
      )}

      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        className="min-w-min"
      >
        <div>
          <div className="w-[100vh]">{modalComponent}</div>
        </div>
      </Modal>
    </div>
  );
};

export default TopSetion;
