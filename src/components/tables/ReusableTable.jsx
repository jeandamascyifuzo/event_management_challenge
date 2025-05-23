import React from "react";
import Spinner from "../buttons/Spinner";

const ReusableTable = ({ columns, data, loading }) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-400 relative">
      {loading && <Spinner />}
      <thead className="text-xs uppercase bg-[#1d1d1d] text-gray-400">
        <tr>
          {columns?.map((col) => (
            <th key={col.key} scope="col" className="px-6 py-5">
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={`${
              rowIndex % 2 === 0 ? "bg-[#141414]" : "bg-[#1d1d1d]"
            } border-b border-gray-800`}
          >
            {columns.map((col) => (
              <td key={col.key} className="px-6 py-4">
                {col.render ? col.render(row) : row[col.dataIndex]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReusableTable;
