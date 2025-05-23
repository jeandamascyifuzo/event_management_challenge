import { QRCode, Switch } from "antd";
import moment from "moment";
import React, { useState } from "react";
import ThreeDotDropdownOnCard from "../buttons/ThreeDotDropdownOnCard";
import ReusableModel from "../models/ReusableModel";
import ConfirmTicketForm from "../form/ConfirmTicketForm";
const format = "ddd, MMM DD, YYYY";

const SearchResultCard = () => {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [ticketData, setTicketData] = useState(null);
  const [action, setAction] = useState(null);
  const [openConfirmModel, setOpenConfirmModel] = useState(false);

  const hanldeCloseModel = () => {
    setOpenConfirmModel(false);
    setOpenDropdownId(null);
    setTicketData(null);
    setAction(null);
  };

  const hanldeOpenModel = (action) => {
    setAction(action);
    setOpenConfirmModel(true);
    setOpenDropdownId(null);
  };

  const handleDropdownToggle = (cardData) => {
    setTicketData(cardData);
    setOpenDropdownId(openDropdownId === cardData?._id ? null : cardData?._id);
  };

  const menuItems = [
    {
      label: "Resend Ticket",
      action: () => {
        hanldeOpenModel("resend");
      },
    },
    {
      label: "Verify Ticket",
      action: () => {
        hanldeOpenModel("verify");
      },
    },
  ];

  return (
    <>
      {[]?.map((el, index) => {
        const userData = {
          names: el?.ticketHolder?.name,
          ticketId: el?.ticketId,
          ticketType: el?.ticketType,
        };
        const userDataJson = JSON.stringify(userData);

        return (
          <div
            key={index}
            className="bg-primary-darkBg shadow-md rounded-lg py-4 px-6 relative"
          >
            <ThreeDotDropdownOnCard
              setShowDropdownMenu={() => handleDropdownToggle(el)}
              showDropdownMenu={openDropdownId === el._id}
              components={
                <>
                  <ul
                    role="menu"
                    dataPopover="menu"
                    dataPopoverPlacement="left"
                    className={`${
                      openDropdownId === el._id ? "" : "hidden"
                    } absolute z-50 min-w-[180px] -left-40 overflow-auto rounded-md border border-gray-800 bg-primary-darkLight p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none`}
                  >
                    {menuItems.map((item, index) => (
                      <li
                        key={index}
                        role="menuitem"
                        onClick={item.action}
                        className="block w-full cursor-pointer select-none rounded-md border border-white text-center px-3 pt-[9px] pb-2 leading-tight transition-all hover:bg-primary hover:border-gray-600 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 my-2.5"
                      >
                        {item.label}
                      </li>
                    ))}
                  </ul>
                </>
              }
            />
            <div className="flex flex-col xitems-center">
              <h1 className="text-2xl font-bold text-white">
                {el?.event?.title}
              </h1>
              <p className="text-white mt-1">
                {el?.event && el?.event?.date
                  ? moment(el?.event?.date).format(format)
                  : ""}
              </p>
            </div>

            <div className="flex justify-between mt-4">
              <div>
                <p className="text-white font-semibold capitalize">
                  <span className="font-normal">Ticket Holder:</span>{" "}
                  {el?.ticketHolder?.name}
                </p>
                <p className="text-white font-semibold capitalize">
                  <span className="font-normal">Ticket Type:</span>{" "}
                  {el?.ticketType}
                </p>
                <p className="text-white font-semibold capitalize">
                  <span className="font-normal">Ticket ID:</span> {el?.ticketId}
                </p>
                <p className="text-white font-semibold capitalize">
                  <span className="font-normal">Verified:</span>{" "}
                  <Switch
                    checkedChildren="Yes"
                    unCheckedChildren="No"
                    checked={el?.isVerified}
                    className="outline-none"
                  />
                </p>
                <p className="text-white font-semibold capitalize mt-2">
                  <span className="font-normal">Time:</span>{" "}
                  {el?.event?.time_start}
                </p>
                <p className="text-white font-semibold capitalize">
                  <span className="font-normal">Doors open:</span>{" "}
                  {el?.event?.time_start}
                </p>
              </div>
              <QRCode type="svg" value={userDataJson} color="white" />
            </div>

            <p className="text-green-500 font-bold text-lg">{`Amount Paid: ${el?.ticketPrice?.toLocaleString()} $`}</p>

            <div className="flex justify-between items-center mt-6 text-xs text-white">
              {/* <p>{`Purchased: ${
                ticketData && ticketData?.date
                  ? moment(ticketData?.date).format(format)
                  : ""
              }`}</p> */}
              <p>Support Line: 1190</p>
              <p>Powered by Jean Kaka</p>
            </div>
          </div>
        );
      })}
      <ReusableModel isOpen={openConfirmModel} onClose={hanldeCloseModel}>
        <ConfirmTicketForm
          action={action}
          onClose={hanldeCloseModel}
          ticketData={ticketData}
        />
      </ReusableModel>
    </>
  );
};

export default SearchResultCard;
