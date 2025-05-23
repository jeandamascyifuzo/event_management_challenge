import React from "react";
import { HiDotsVertical } from "react-icons/hi";

const ThreeDotDropdownOnCard = ({
  showDropdownMenu,
  setShowDropdownMenu,
  components,
}) => {
  return (
    <div className="absolute right-0 top-0 z-10">
      <button
        dataRippleLight="true"
        dataPopoverTarget="menu"
        className="xshadow p-2 text-gray-950"
        onClick={() => setShowDropdownMenu(!showDropdownMenu)}
      >
        <HiDotsVertical color="white" size={20} />
      </button>
      {components}
    </div>
  );
};

export default ThreeDotDropdownOnCard;
