import React, { useState } from "react";
import { Button } from "antd";
import TicketCard from "../cards/TicketCard";
import ReusableTable from "./ReusableTable";
import ReusableDrawer from "../models/ReusableDrawer";

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
      title: "Tickets Categories",
      dataIndex: "tCategory",
      key: "tCategory",
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

  const data = []?.map((el) => {
    return {
      key: el?._id,
      date: el?.createdAt?.slice(0, 10),
      event: el?.booking?.event?.title,
      time: el?.booking?.event?.time_start,
      tCategory: el?.booking?.tickets?.length,
      tNumber: el?.booking?.tickets?.reduce(
        (curr, item) => curr + item?.quantity,
        0
      ),
      amount: el?.amount?.toLocaleString(),
      paymentId: el?.transactionId,
      method: el?.method,
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
