import React from "react";

const NewProduct = () => {
  return (
    <div className="flex-[4] p-5">
      <h1 className="text-3xl font-semibold mb-5">New Product</h1>

      <form>
        <div className="w-[300px] flex flex-col gap-3 mb-5">
          <label className="text-gray-500 font-semibold ">Image</label>
          <input type="file" />
        </div>
        <div className="w-[300px] flex flex-col gap-3 mb-5">
          <label className="text-gray-500 font-semibold ">Product Name</label>
          <input
            type="text"
            className="border border-gray-500 px-2 py-1 outline-none rounded"
          />
        </div>
        <div className="w-[300px] flex flex-col gap-3 mb-5">
          <label className="text-gray-500 font-semibold ">Stock</label>
          <select
            name="inStock"
            id="inStock"
            className=" border border-gray-500 rounded px-2 py-1 outline-none"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="w-[300px] flex flex-col gap-3 mb-5">
          <label className="text-gray-500 font-semibold ">Image</label>
          <select
            name="color"
            id="color"
            className=" border border-gray-500 rounded px-2 py-1 outline-none"
          >
            <option value="green">Green</option>
            <option value="black">Black</option>
          </select>
        </div>
        <button className="bg-blue-800 text-white font-semibold px-5 py-2 rounded-md ">Create</button>
      </form>
    </div>
  );
};

export default NewProduct;
