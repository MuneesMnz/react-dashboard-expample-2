import React from "react";
import FeaturedInfo from "../components/FeaturedInfo";
import Chart from "../components/Chart";
import { data } from "../dummyData";
import WidgetSm from "../components/WidgetSm";

const Home = () => {
  
  return (
    <div className="flex-[4]">
      <FeaturedInfo />
      <Chart title={"Sales Analytics"} data={data} dataKey={"User"}  grid />
      <div className="flex m-5">
    <WidgetSm />
      </div>
    </div>
  );
};

export default Home;
