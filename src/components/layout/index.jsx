import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Index = (props) => {
  return (
    <div className="flandScreenBack text-white">
      <div className={"gap-8 w-full h-screen overflow-y-auto "}>
        <Sidebar />
        <div className="min-h-screen">
          <Navbar />
          <div
            className={`pt-[5rem] bg-primary-darkBgSecondary w-full pl-56 pr-8 duration-700 min-h-screen`}
          >
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
