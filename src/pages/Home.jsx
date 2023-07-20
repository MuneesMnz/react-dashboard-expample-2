import React, { useEffect, useMemo, useState } from "react";
import FeaturedInfo from "../components/FeaturedInfo";
import Chart from "../components/Chart";
import { data } from "../dummyData";
import WidgetSm from "../components/WidgetSm";
import WidgetLg from "../components/WidgetLg";
import { userRequest } from "../requestmethods";

const Home = () => {
  const [userStats, setUserStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/user/stats");
        // console.log("stats",res.data);
        const updatedStats = res.data.map((item) => ({
          name: MONTHS[item._id - 1],
          "Active User": item.total,
        }));

        setUserStats(updatedStats)
      } catch (err) {
        console.log(err);
      }
    };
    getStats();   
  }, [MONTHS]);   
  return (
    <div className="flex-[4]">
      <FeaturedInfo />
      <Chart
        title={"User Analytics"}
        data={userStats}
        dataKey={"Active User"}
        grid
      />
      <div className="flex m-5">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
