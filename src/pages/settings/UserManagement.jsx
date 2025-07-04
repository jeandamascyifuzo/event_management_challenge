import React, { useState } from "react";
import TopSetion from "../../components/cards/TopSetion";
import { Button } from "antd";
import ThreeDotDropdown from "../../components/buttons/ThreeDotDropdown";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import UserForm from "../../components/form/UserForm";
import ConfrimDeleteModel from "../../components/models/ConfrimDeleteModel";
import ReusableTable from "../../components/tables/ReusableTable";
import { userData } from "../../utils/constantData";

const UserManagement = () => {
  const [selectedItemData, setSelectedItemData] = useState(null);
  const [modelToOopen, setModelToOpen] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpenActionModel, setIsOpenActionModel] = useState(false);
  const [isOpenDeleteModel, setIsOpenDeleteModel] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOpenModel = (data, model) => {
    setIsOpenDeleteModel(true);
    setIsOpenActionModel(true);
    setModelToOpen(model);
    setSelectedItemData(data);
  };

  const onCancelModel = async () => {
    setIsOpenActionModel(false);
    setModelToOpen(null);
    setSelectedItemData(null);
    setIsOpenDeleteModel(false);
  };

  const handleConfirmDeleteEvent = async () => {};

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (row) => <p className="capitalize">{row?.name}</p>,
    },
    {
      title: "Telephone",
      dataIndex: "telephone",
      key: "telephone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (row) => <p className="capitalize">{row?.role}</p>,
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
                className="w-20"
                type="primary"
                onClick={() => handleOpenModel(row.data, "model")}
              >
                <EditOutlined /> Update
              </Button>
            ),
          },
          {
            key: "2",
            label: (
              <Button
                className="w-20"
                danger
                onClick={() => handleOpenModel(row.data, "delete")}
              >
                <DeleteOutlined /> Delete
              </Button>
            ),
          },
        ];
        return (
          <>
            <div className="border w-10 flex items-center justify-center py-0.5 rounded-md cursor-pointer">
              <ThreeDotDropdown
                items={actionItems}
                onOpen={isOpenActionModel}
                modelToOpen={modelToOopen}
                onCancel={onCancelModel}
                component={
                  <UserForm
                    dataToUpdate={selectedItemData}
                    action={"update"}
                    onCancel={onCancelModel}
                  />
                }
              />
            </div>
          </>
        );
      },
    },
  ];

  const data = userData?.map((el) => {
    return {
      key: el?._id,
      name: el?.name,
      email: el?.email,
      telephone: el?.telephone,
      address: `${el?.city || " "}`,
      role: el?.role,
      data: el,
    };
  });

  return (
    <>
      <TopSetion
        pageName="Setting"
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleCancel={handleCancel}
        item="User"
        title="User"
        showButton
        modalComponent={
          <UserForm
            dataToUpdate={null}
            action={"create"}
            onCancel={handleCancel}
          />
        }
      />
      <ReusableTable columns={columns} data={data} />
      {modelToOopen === "delete" && (
        <ConfrimDeleteModel
          isOpen={isOpenDeleteModel}
          onClose={onCancelModel}
          onConfirm={handleConfirmDeleteEvent}
          message={`${selectedItemData?.firstName} ${selectedItemData?.lastName}`}
          isLoading={false}
        />
      )}
    </>
  );
};

export default UserManagement;
