import { QRCode } from "antd";
import moment from "moment/moment";
import React from "react";
const format = "ddd, Do MMM YYYY";

const TicketCard = ({ ticketData }) => {
  return (
    <>
      {ticketData?.data?.map((el, index) => {
        const userData = {
          names: el?.ticketHolder?.name,
          ticketId: el?.ticketId,
          ticketType: el?.ticketType,
        };

        const userDataJson = JSON.stringify(userData);
        return (
          <div
            key={index}
            className="bg-primary-darkBg  shadow-md rounded-lg py-4 px-6 mx-4 mb-4"
          >
            <div className="flex flex-col xitems-center">
              <h1 className="text-2xl font-bold text-white">
                {ticketData?.event}
              </h1>
              <p className="text-white mt-1">
                {ticketData && ticketData?.date
                  ? moment(ticketData?.date).format(format)
                  : ""}
              </p>
            </div>

            <div className="flex justify-between mt-4 text-white">
              <div>
                <p className=" font-semibold capitalize">
                  <span className="font-normal">Ticket Holder:</span>{" "}
                  {el?.ticketHolder?.name}
                </p>
                <p className=" font-semibold capitalize">
                  <span className="font-normal">Ticket Type:</span>{" "}
                  {el?.ticketType}
                </p>
                <p className=" font-semibold capitalize">
                  <span className="font-normal">Ticket ID:</span> {el?.ticketId}
                </p>
                <p className=" font-semibold capitalize mt-2">
                  <span className="font-normal">Time:</span> {ticketData?.time}
                </p>
                <p className=" font-semibold capitalize">
                  <span className="font-normal">Doors open:</span>{" "}
                  {ticketData?.time}
                </p>
              </div>
              <QRCode type="svg" value={userDataJson} color="white" />
            </div>

            <p className="text-green-600 font-bold text-lg">{`Amount Paid: ${el?.ticketPrice?.toLocaleString()} $`}</p>

            <div className="flex justify-between items-center mt-6 text-xs text-white">
              <p>{`Purchased: ${
                ticketData && ticketData?.date
                  ? moment(ticketData?.date).format(format)
                  : ""
              }`}</p>
              <p>Support Line: 1190</p>
              <p>Powered by Jean Kaka</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default TicketCard;
