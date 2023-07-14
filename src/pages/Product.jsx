import React from "react";
import { Link } from "react-router-dom";
import Chart from "../components/Chart";
import { productChart } from "../dummyData";
import { Publish } from "@material-ui/icons";

const Product = () => {
  return (
    <div className="flex-[4] p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Product </h1>
        <Link to="/newproduct">
          <button className="w-20 h-8 p-1 rounded text-white font-semibold bg-teal-700 cursor-pointer">
            Create
          </button>
        </Link>
      </div>
      <div className="flex">
        <div className="flex-1">
          <Chart
            data={productChart}
            dataKey={"sales"}
            title={"Sales Performance"}
          />
        </div>
        <div className="flex-1 p-5 m-5 shadow-lg">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pcmag.com/imagery/reviews/02kEUHHVmgMHAwagk9XQcux-5.fit_lim.size_1050x.jpg"
              alt=""
              className="w-10 h-10 object-cover rounded-full"
            />
            <span className="font-semibold">Google Pixel 5</span>
          </div>
          <div className="mt-3">
            <div className="w-[150px] flex justify-between mb-3">
              <span>Id:</span>
              <span className="font-light">123</span>
            </div>
            <div className="w-[150px] flex justify-between mb-3">
              <span>Sales:</span>
              <span className="font-light">6000</span>
            </div>
            <div className="w-[150px] flex justify-between mb-3">
              <span>Stock:</span>
              <span className="font-light">Yes</span>
            </div>
            <div className="w-[150px] flex justify-between mb-3">
              <span>Color:</span>
              <span className="font-light">Green</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 m-5 shadow-lg">
        <form className="flex justify-between gap-10 ">
          <div className="flex flex-col  ">
            <div className="mb-3 flex gap-3 ">
              <label className="w-[100px] text-gray-500">Product Name</label>
              <input type="text" placeholder="Pixel 5"  className="  w-[250px] border border-gray-300 rounded px-2 py-1 outline-none" />
            </div>
            <div className="mb-3 flex gap-3 ">
              <label className="w-[100px] text-gray-500 ">In stock</label>
              <select name="inStock" id="inStock" className=" w-[250px] border border-gray-300 rounded px-2 py-1 outline-none">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="mb-3 flex gap-3 ">
              <label className="w-[100px] text-gray-500">Color</label>
              <select name="color" id="color" className=" w-[250px] border border-gray-300 rounded px-2 py-1 outline-none">
                <option value="green">Green</option>
                <option value="black">Black</option>
              </select>
            </div>
          </div>
          <div className="mr-10 flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <img
                src="https://i.pcmag.com/imagery/reviews/02kEUHHVmgMHAwagk9XQcux-5.fit_lim.size_1050x.jpg"
                alt=""
                className="w-[100px] h-[100px] object-cover rounded-xl"
              />
              <label htmlFor="file">
                <Publish />
                <input type="file" id="file"  className="hidden"/>
              </label> 
            </div>
            <button className="bg-blue-800 text-white cursor-pointer rounded-md font-semibold px-2 py-1">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
