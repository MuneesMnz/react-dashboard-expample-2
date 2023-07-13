import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import React from "react";

const Topbar = () => {
  return (
    <div className="w-full h-[50px] bg-white sticky top-0 z-50">
      <div className="h-full px-5 flex items-center justify-between">
        <div>
          <span className="font-bold text-2xl text-blue-950">MNZ-Admin</span>
        </div>
        <div className="flex items-center">
          <div className="relative cursor-pointer mr-2 text-[#555] ">
            <NotificationsNone />
            <span className=" absolute -top-1 -right-1 bg-red-700 text-white w-4 h-4 rounded-full flex justify-center items-center text-sm">
              2
            </span>
          </div>
          <div className="relative cursor-pointer mr-2 text-[#555] ">
            <Language />
            <span className=" absolute -top-1 -right-1 bg-red-700 text-white w-4 h-4 rounded-full flex justify-center items-center text-sm">
              2
            </span>
          </div>
          <div className="relative cursor-pointer mr-2 text-[#555] ">
            <Settings />
          </div>
          <img src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg"
          className="w-10 h-10 ml-2 rounded-full cursor-pointer object-cover " 
          alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
