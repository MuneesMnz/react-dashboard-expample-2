import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";

const Login = () => {
  const [username, SetUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div className="flex justify-center items-center flex-[4] mt-10">
      <form className="w-[400px] h-[300px] p-5">
        <input
          type="text"
          placeholder="username"
          onChange={(e) => SetUsername(e.target.value)}
          className="border border-gray-500 w-full px-2 py-1 mb-5 rounded "
          />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-500 w-full px-2 py-1 mb-5 rounded "
        />
        <button onClick={handleClick} className="bg-gray-700 text-white rounded-sm px-3 py-1 cursor-pointer ">Login</button>
      </form>
    </div>
  );
};

export default Login;
