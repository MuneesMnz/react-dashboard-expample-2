import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="flex-[4] p-5">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Edit User</h1>
       <Link to='/newuser' >
       <button className="w-20 h-8 p-1 rounded text-white font-semibold bg-teal-700 cursor-pointer">
          Create
        </button>
       </Link>
      </div>
      <div className="flex mt-5">
        <div className="flex-1 p-5 shadow-md">
          <div className="flex items-center">
            <img
              src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=2000"
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />{" "}
            <div className=" flex flex-col ml-3">
              <span className="font-semibold">Joseph</span>
              <span className="font-normal"> Software Engineer</span>
            </div>
          </div>
          <div className="mt-5">
            <span className="text-sm font-semibold text-gray-500">
              Account Details
            </span>
            <div className="flex items-center my-5 text-[#444]">
              <PermIdentity className="!text-[16px] " />
              <span className="ml-5">joseph123</span>
            </div>
            <div className="flex items-center my-5 text-[#444]">
              <CalendarToday className="!text-[16px]" />
              <span className="ml-5">10.12.1998</span>
            </div>
            <span className="text-sm font-semibold text-gray-500">
              Contact Details
            </span>
            <div className="flex items-center my-5 text-[#444]">
              <PhoneAndroid className="!text-[16px]" />
              <span className="ml-5">+91 9745685223</span>
            </div>
            <div className="flex items-center my-5 text-[#444]">
              <MailOutline className="!text-[16px]" />
              <span className="ml-5">joseph@gmail.com</span>
            </div>
            <div className="flex items-center my-5 text-[#444]">
              <LocationSearching className="!text-[16px]" />
              <span className="ml-5">Perinthalmanna</span>
            </div>
          </div>
        </div>
        <div className="flex-[2] ml-5 p-5 shadow-md">
          <span className="text-xl font-semibold">Edit</span>
          <form className="flex justify-between mt-5">
            <div>
              <div className="flex flex-col mt-3 ">
                <label className="mb-1 text-sm">Username</label>
                <input
                  className="w-[250px] h-8 outline-none"
                  style={{ borderBottom: "1px solid gray" }}
                  type="text"
                  placeholder="joseph123"
                />
              </div>
              <div className="flex flex-col mt-3 ">
                <label className="mb-1 text-sm">Fullname</label>
                <input
                  className="w-[250px] h-8 outline-none "
                  style={{ borderBottom: "1px solid gray" }}
                  type="text"
                  placeholder="Joseph"
                />
              </div>
              <div className="flex flex-col mt-3 ">
                <label className="mb-1 text-sm">email</label>
                <input
                  className="w-[250px] h-8 outline-none "
                  style={{ borderBottom: "1px solid gray" }}
                  type="text"
                  placeholder="joseph@gmail.com"
                />
              </div>
              <div className="flex flex-col mt-3 ">
                <label className="mb-1 text-sm">Phone</label>
                <input
                  className="w-[250px] h-8 outline-none "
                  style={{ borderBottom: "1px solid gray" }}
                  type="text"
                  placeholder="+91 9745685223"
                />
              </div>
              <div className="flex flex-col mt-3 ">
                <label className="mb-1 text-sm">Adress</label>
                <input
                  className="w-[250px] h-8 outline-none "
                  style={{ borderBottom: "1px solid gray" }}
                  type="text"
                  placeholder="Perinthalmanna"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex items-center gap-5">
                <img
                  src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=2000"
                  alt=""
                  className="w-[100px] h-[100px] rounded-xl object-cover"
                />
                <label htmlFor="file">
                  {" "}
                  <Publish className="cursor-pointer" />
                </label>
                <input type="file" id="file" className="hidden" />
              </div>
              <button className="rounded p-1 cursor-pointer bg-blue-800 text-white font-semibold">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
