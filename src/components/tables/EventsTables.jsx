import { Button, Switch } from "antd";
import { useState } from "react";
import ThreeDotDropdown from "../buttons/ThreeDotDropdown";
import EventForm from "../form/EventForm";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import ConfrimDeleteModel from "../models/ConfrimDeleteModel";
import ReusableTable from "./ReusableTable";
import { eventData } from "../../utils/constantData";

const EventsTables = () => {
  const navigate = useNavigate();

  const [selectedItemData, setSelectedItemData] = useState(null);
  const [modelToOpen, setModelToOpen] = useState(null);
  const [isOpenActionModel, setIsOpenActionModel] = useState(false);
  const [isOpenDeleteModel, setIsOpenDeleteModel] = useState(false);

  const handleOpenModel = (data, model) => {
    setIsOpenDeleteModel(true);
    setIsOpenActionModel(true);
    setModelToOpen(model);
    setSelectedItemData(data);
    model === "drawer" && navigate(`/event/${data?._id}`);
  };

  const onCancelModel = async () => {
    setIsOpenActionModel(false);
    setModelToOpen(null);
    setSelectedItemData(null);
    setIsOpenDeleteModel(false);
    navigate(`/event`);
  };

  const handleConfirmDeleteEvent = async () => {};

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Time(Start-End)",
      dataIndex: "time",
      key: "time",
    },

    {
      title: "Available Tickets (No)",
      dataIndex: "tickets",
      key: "tickets",
    },
    {
      title: "Sold Tickets (No)",
      dataIndex: "ticketSold",
      key: "ticketSold",
    },
    {
      title: "Published",
      dataIndex: "publish",
      key: "publish",
      render: (row) => <Switch defaultChecked={row?.publish} loading={false} />,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "",
      key: "action",
      render: (row) => {
        const actionItems = [
          {
            key: "1",
            label: (
              <Button
                className="w-full text-blue-500 hover:text-blue-700"
                onClick={() => handleOpenModel(row.data, "drawer")}
              >
                <EyeOutlined className="mr-2" /> View
              </Button>
            ),
          },
          {
            key: "2",
            label: (
              <Button
                className="w-full text-green-500 hover:text-green-700"
                onClick={() => handleOpenModel(row.data, "model")}
              >
                <EditOutlined className="mr-2" /> Update
              </Button>
            ),
          },
          {
            key: "3",
            label: (
              <Button
                className="w-full text-red-500 hover:text-red-700"
                onClick={() => handleOpenModel(row.data, "delete")}
              >
                <DeleteOutlined className="mr-2" /> Delete
              </Button>
            ),
          },
        ];
        return (
          <div className="border w-16 flex items-center justify-center py-1 rounded-md cursor-pointer">
            <ThreeDotDropdown
              items={actionItems}
              onOpen={isOpenActionModel}
              modelToOpen={modelToOpen}
              onCancel={onCancelModel}
              component={
                <EventForm
                  dataToUpdate={selectedItemData}
                  action={"update"}
                  onCancel={onCancelModel}
                />
              }
            />
          </div>
        );
      },
    },
  ];

  const dataToDisplay = eventData?.map((el) => {
    return {
      key: el?._id,
      date: el?.date?.slice(0, 10),
      title: el?.title,
      location: el?.location,
      time: el?.time,
      tickets: el?.availableTickets,
      ticketSold: el?.sold,
      organizer: "Jean Kaka",
      status: el?.status,
      publish: el?.published,
      data: el,
    };
  });

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <ReusableTable columns={columns} data={dataToDisplay} loading={false} />
      </div>
      {modelToOpen === "delete" && (
        <ConfrimDeleteModel
          isOpen={isOpenDeleteModel}
          onClose={onCancelModel}
          onConfirm={handleConfirmDeleteEvent}
          message={selectedItemData?.title}
          isLoading={false}
        />
      )}
    </>
  );
};

export default EventsTables;
