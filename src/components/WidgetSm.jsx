import { Visibility } from "@material-ui/icons";
import React from "react";

const WidgetSm = () => {
  return (
    <div className="flex-1 shadow-lg p-5 mr-5">
      <span className="text-2xl font-semibold ">New Join Members</span>
      <ul>
        <li className="flex items-center justify-between m-5">
          <img
            src="https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo="
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex flex-col items-start w-1/2">
            <span className="font-semibold">Ali</span>
            <span className=" font-light">Software Engineer</span>
          </div>
          <button className="flex items-center rounded-md bg-gray-200 px-2 py-1.5 gap-1 text-gray-600 cursor-pointer">
            <Visibility className="!text-sm" />
            Display
          </button>
        </li>
        <li className="flex items-center justify-between m-5">
          <img
            src=" https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fHww&w=1000&q=80"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex flex-col items-start w-1/2">
            <span className="font-semibold">Athul</span>
            <span className=" font-light">CEO</span>
          </div>
          <button className="flex items-center rounded-md bg-gray-200 px-2 py-1.5 gap-1 text-gray-600 cursor-pointer">
            <Visibility className="!text-sm" />
            Display
          </button>
        </li>
        <li className="flex items-center justify-between m-5">
          <img
            src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?w=2000"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex flex-col items-start w-1/2">
            <span className="font-semibold">Shifad</span>
            <span className=" font-light">Devoloper</span>
          </div>
          <button className="flex items-center rounded-md bg-gray-200 px-2 py-1.5 gap-1 text-gray-600 cursor-pointer">
            <Visibility className="!text-sm" />
            Display
          </button>
        </li>
        <li className="flex items-center justify-between m-5">
          <img
            src="https://www.realmenrealstyle.com/wp-content/uploads/2023/03/The-Side-Part.jpg"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex flex-col items-start w-1/2">
            <span className="font-semibold">Shafeeq</span>
            <span className=" font-light">Manager</span>
          </div>
          <button className="flex items-center rounded-md bg-gray-200 px-2 py-1.5 gap-1 text-gray-600 cursor-pointer">
            <Visibility className="!text-sm" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
