import { useState } from "react";
import SalesReportTable from "../../components/tables/SalesReportTable";

const SalesReport = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  return (
    <SalesReportTable
      setLimit={setLimit}
      setPage={setPage}
      limit={limit}
      page={page}
    />
  );
};

export default SalesReport;
