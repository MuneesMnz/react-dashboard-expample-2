import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";

const FeaturedInfo = () => {
  return (
    <div className="w-full flex justify-between ">
      <div className="flex-1 mx-5 p-7 rounded-lg shadow-lg ">
        <span className="text-lg">Revenue</span>
        <div className="my-2 flex items-center">
          <span className="text-xl font-semibold">$2,415</span>
          <span className="flex items ml-5">
            -11.4 <ArrowDownward className={`text-sm ml-1 text-red-800`} />{" "}
          </span>
        </div>
        <span className="text-[15px] text-gray-600">
          Compared to last Month
        </span>
      </div>
      <div className="flex-1 mx-5 p-7 rounded-lg shadow-lg  ">
        <span className="text-lg">Sales</span>
        <div className="my-2 flex items-center">
          <span className="text-xl font-semibold">$5,115</span>
          <span className="flex items ml-5">
            -1.4 <ArrowDownward className={`text-sm ml-1 text-red-800`} />{" "}
          </span>
        </div>
        <span className="text-[15px] text-gray-600">
          Compared to last Month
        </span>
      </div>
      <div className="flex-1 mx-5 p-7 rounded-lg shadow-lg  ">
        <span className="text-lg">Cost</span>
        <div className="my-2 flex items-center">
          <span className="text-xl font-semibold">$2,215</span>
          <span className="flex items ml-5">
            +10.4 <ArrowUpward className={`text-sm ml-1 text-green-800`} />{" "}
          </span>
        </div>
        <span className="text-[15px] text-gray-600">
          Compared to last Month
        </span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
