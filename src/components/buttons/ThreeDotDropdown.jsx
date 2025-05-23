import { useEffect, useState } from "react";
import { Dropdown, Modal, Button } from "antd";
import { BsThreeDots } from "react-icons/bs";
import CustomModel from "../models/CustomModel";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import ConfrimDeleteModel from "../models/ConfrimDeleteModel";
import ReusableDrawer from "../models/ReusableDrawer";
import ReusableTable from "../tables/ReusableTable";
import DynamicFormList from "../form/DynamicFormList";

const ThreeDotDropdown = ({
  title,
  onOpen,
  onCancel,
  component,
  items,
  modelToOpen,
}) => {
  const initinial = { type: "", price: "", quantity: "" };
  const [openTicketModel, setOpenTicketModel] = useState(false);
  const [openDeleteModel, setOpenDeleteModel] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [ticketToUpdate, setTicketToUpdate] = useState(null);
  const [tickeFields, setTicketFields] = useState([initinial]);

  const handleCancelTicketModel = async () => {
    setOpenTicketModel(false);
    setTicketToUpdate(null);
  };

  const handleCreateNewTicket = (data, action) => {
    setOpenTicketModel(true);
    if (action === "create") {
      setTicketToUpdate(null);
    } else {
      setTicketToUpdate(data);
    }
  };

  const handleSelectItemToDelete = (item) => {
    setOpenDeleteModel(true);
    setItemToDelete(item);
  };

  const handleCancelDelete = async () => {
    setOpenDeleteModel(false);
    setItemToDelete(null);
  };

  const columns = [
    {
      title: "Ticket Category",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Available",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Sold",
      dataIndex: "sold",
      key: "sold",
    },
    {
      title: "",
      key: "action",
      render: (row) => {
        return (
          <div className="flex items-center justify-center cursor-pointer gap-x-4">
            <Button
              type="primary"
              onClick={() => handleCreateNewTicket(row, "update")}
            >
              <EditOutlined />
            </Button>
            <Button danger onClick={() => handleSelectItemToDelete(row)}>
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    },
  ];

  const data = []?.map((el) => {
    return {
      key: el?._id,
      type: el?.type,
      price: el?.price,
      quantity: el?.quantity,
      sold: el?.sold,
    };
  });

  const handleDelete = async () => {};

  const onFinish = async (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (ticketToUpdate !== null) {
      setTicketFields([
        {
          type: ticketToUpdate?.type,
          price: ticketToUpdate?.price,
          quantity: ticketToUpdate?.quantity,
        },
      ]);
    }
  }, [ticketToUpdate]);

  return (
    <>
      <Dropdown menu={{ items }} placement="bottom" trigger={["click"]}>
        <BsThreeDots size={20} />
      </Dropdown>
      {modelToOpen === "drawer" && (
        <>
          <ReusableDrawer
            isOpen={onOpen}
            onClose={onCancel}
            createButton={
              <Button
                type="primary"
                onClick={() => handleCreateNewTicket({}, "create")}
              >
                Add New Ticket Category
              </Button>
            }
            title="Right Drawer"
          >
            <ReusableTable columns={columns} data={data} loading={false} />
          </ReusableDrawer>
        </>
      )}

      {modelToOpen === "model" && (
        <Modal
          title={title}
          centered
          open={onOpen}
          onCancel={onCancel}
          footer={null}
          className="min-w-min"
        >
          <div className="w-[100vh]">{component}</div>
        </Modal>
      )}

      <CustomModel
        width={900}
        component={
          <form
            method="POST"
            onSubmit={onFinish}
            className="text-white bg-primary-darkBg"
          >
            <h3 className="my-4 font-semibold font-roboto capitalize text-white">
              Ticket options
            </h3>
            <DynamicFormList
              fields={tickeFields}
              setFields={setTicketFields}
              ticketToUpdate={ticketToUpdate || null}
            />

            <Button type="primary" htmlType="submit" className="w-60 h-12 mt-6">
              {ticketToUpdate !== null ? "Update" : "Submit"}
            </Button>
          </form>
        }
        openModal={openTicketModel}
        onCancel={handleCancelTicketModel}
      />

      <ConfrimDeleteModel
        isOpen={openDeleteModel}
        onClose={handleCancelDelete}
        onConfirm={handleDelete}
        message={itemToDelete?.type}
        isLoading={false}
      />
    </>
  );
};

export default ThreeDotDropdown;
