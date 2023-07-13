import React from "react";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return (
      <button
        className={`px-2 py-1 rounded-md ${
          type === "Approved" && "bg-green-100 text-green-800"
        }  ${type === "Declain" && "bg-red-100 text-red-800"}  ${
          type === "Pending" && "bg-blue-100 text-blue-800"
        } `}
      >
        {type}
      </button>
    );
  };

  return (
    <div className="flex-[2]  shadow-lg p-5">
      <h2 className="text-xl font-semibold ">Latest Transations </h2>
      <table className="w-full  border-spacing-5">
        <tr>
          <th className="text-left">Customer</th>
          <th className="text-left">Date </th>
          <th className="text-left">Amount</th>
          <th className="text-left">Status</th>
        </tr>
        <tr>
          <td className="mb-5 mt-5 flex items-center gap-2 font-semibold">
            <img
              src="https://awbi.org/wp-content/uploads/2023/04/kim.jpg"
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <span>Hadi</span>
          </td>
          <td className="font-normal">2 Jan 2023</td>
          <td className="font-normal">$155.00</td>
          <td>
            <Button type="Approved" />
          </td>
        </tr>
        <tr>
          <td className="mb-5 flex items-center gap-2 font-semibold">
            <img
              src="https://t3.ftcdn.net/jpg/04/97/66/28/360_F_497662812_7rGW6PMBJR9AbrKcGgN5S1luXYTjH92i.jpg"
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <span>Riyas</span>
          </td>
          <td className="font-normal">6 Feb 2023</td>
          <td className="font-normal">$100.00</td>
          <td>
            <Button type="Declain" />
          </td>
        </tr>
        <tr>
          <td className="mb-5 flex items-center gap-2 font-semibold">
            <img
              src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg"
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <span>Sharika</span>
          </td>
          <td className="font-normal">1 Apr 2023</td>
          <td className="font-normal">$55.00</td>
          <td>
            <Button type="Pending" />
          </td>
        </tr>
        <tr>
          <td className="mb-5 flex items-center gap-2 font-semibold">
            <img
              src="https://t4.ftcdn.net/jpg/01/15/85/23/360_F_115852367_E6iIYA8OxHDmRhjw7kOq4uYe4t440f14.jpg"
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <span>Ananthu</span>
          </td>
          <td className="font-normal">25 Jan 2023</td>
          <td className="font-normal">$85.00</td>
          <td>
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
