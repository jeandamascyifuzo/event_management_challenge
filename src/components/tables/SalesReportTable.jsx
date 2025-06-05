import React, { useState } from "react";
import { Button } from "antd";
import TicketCard from "../cards/TicketCard";
import ReusableTable from "./ReusableTable";
import ReusableDrawer from "../models/ReusableDrawer";
import { reportData } from "../../utils/constantData";

const SalesReportTable = ({ setPage, page, setLimit, limit }) => {
  const [openPaymentDetails, setOpenPaymentDetails] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState(null);

  const handleViewMore = (data) => {
    setOpenPaymentDetails(true);
    setPaymentDetails(data);
  };

  const handleClosePaymentDetails = () => {
    setOpenPaymentDetails(false);
    setPaymentDetails(null);
  };

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Event",
      dataIndex: "event",
      key: "event",
    },
    {
      title: "Total Tickets",
      dataIndex: "tNumber",
      key: "tNumber",
    },
    {
      title: "Total Amount Paid",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Payment ID",
      dataIndex: "paymentId",
      key: "paymentId",
    },
    {
      title: "Payment Method",
      dataIndex: "method",
      key: "method",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: (row) => (
        <Button onClick={() => handleViewMore(row)}>View</Button>
      ),
    },
  ];

  const data = reportData?.map((el) => {
    return {
      key: el?._id,
      date: el?.date,
      event: el?.title,
      tNumber: el?.totalTickets,
      amount: el?.amountPaid,
      paymentId: el?.paymentID,
      method: el?.paymentMethod,
      status: el?.status,
      data: el?.tickets,
    };
  });

  return (
    <>
      <ReusableTable columns={columns} data={data} loading={false} />
      <ReusableDrawer
        isOpen={openPaymentDetails}
        onClose={handleClosePaymentDetails}
      >
        <TicketCard ticketData={paymentDetails} />
      </ReusableDrawer>
    </>
  );
};

export default SalesReportTable;
