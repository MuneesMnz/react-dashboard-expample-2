import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";

const Main = () => {
  return (
    <>
      <Topbar />
      <div className="flex mt-2 ">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Main;
