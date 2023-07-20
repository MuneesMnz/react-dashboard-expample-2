import { Visibility } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { userRequest } from "../requestmethods";

const WidgetSm = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("user/");
        console.log(res.data);
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);
  return (
    <div className="flex-1 shadow-lg p-5 mr-5">
      <span className="text-2xl font-semibold ">New Join Members</span>
      <ul>
        {users.map((item) => {
          return (
            <li className="flex items-center justify-between m-5" key={item._id}>
              <img
                src="https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo="
                alt=""
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex flex-col items-start w-1/2">
                <span className="font-semibold">{item.username}</span>
                <span className=" font-light">{item.email}</span>
              </div>
              <button className="flex items-center rounded-md bg-gray-200 px-2 py-1.5 gap-1 text-gray-600 cursor-pointer">
                <Visibility className="!text-sm" />
                Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WidgetSm;
