import React from "react";
import ReusableModel from "./ReusableModel";
import Confirmation from "../Confirmation";

const NotifyModel = () => {
  return (
    <ReusableModel isOpen={false}>
      <Confirmation />
    </ReusableModel>
  );
};

export default NotifyModel;
