import React from "react";
import {
  resendTicketAction,
  verifyTicketAction,
} from "../../store/tickets/actions";
import { handleNotify } from "../../store/layout/actions";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const ConfirmTicketForm = ({ action, onClose, ticketData }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const payloads = {
    resend: {
      data: {
        email: ticketData?.ticketHolder?.email,
        eventId: ticketData?.event?._id,
        ticketId: ticketData?.ticketId,
      },
      action: resendTicketAction,
    },
    verify: {
      data: {
        ticketId: ticketData?.ticketId,
        eventId: ticketData?.event?._id,
        ticketHolderName: ticketData?.ticketHolder?.name,
        ticketHolderEmail: ticketData?.ticketHolder?.email,
      },
      action: verifyTicketAction,
    },
  };

  const handleConfirm = async () => {
    const { data, action: selectedAction } = payloads[action];
  };

  return (
    <div>
      <svg
        className="mx-auto mb-4 w-12 h-12 text-default-error"
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
      <h1>
        {" "}
        Are you sure, you want to
        <span className="capitalize font-semibold">{` ${action} `}</span>
        ticket for
        <span className="capitalize font-bold">{` ${ticketData?.ticketHolder?.name} ? `}</span>
        Please confirm your decision.
      </h1>
      <div className="mt-6 mx-auto flex items-center justify-center">
        <button
          onClick={onClose}
          className="py-2.5 px-5 text-sm font-medium  rounded-lg border focus:outline-none focus:ring-4 focus:ring-gray-100 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
        >
          No, cancel
        </button>
        <button
          onClick={handleConfirm}
          className="text-white ml-3 bg-primary focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5"
          // disabled={ticketsManagement?.isUpdating}
        >
          {"Yes, I'm sure"}
        </button>
      </div>
    </div>
  );
};

export default ConfirmTicketForm;
