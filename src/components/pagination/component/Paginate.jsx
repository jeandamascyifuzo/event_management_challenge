/* eslint-disable react/prop-types */
import { Select } from "antd";

export function PaginationControlled(props) {
  const handleChangePages = (value) => {
    props?.setLimit(value);
  };

  return (
    <div className="flex justify-center items-center xbg-blue-500">
      <Select
        defaultValue={props?.limit}
        style={{ width: 120 }}
        onChange={handleChangePages}
        options={
          props?.pages || [
            { value: 10, label: "10 / Page" },
            { value: 15, label: "15 / Page" },
            { value: 20, label: "20 / Page" },
            { value: 25, label: "25 / Page" },
            { value: 30, label: "30 / Page" },
            { value: 50, label: "50 / Page" },
            { value: 100, label: "100 / Page" },
          ]
        }
      />

      <span className="pr-4 text-white">Results: {props?.total}</span>
    </div>
  );
}
