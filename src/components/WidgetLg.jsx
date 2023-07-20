import { useEffect, useState } from "react";
import { userRequest } from "../requestmethods";
import { format } from "timeago.js";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return (
      <button
        className={`px-2 py-1 rounded-md ${
          type === "approved" && "bg-green-100 text-green-800"
        }  ${type === "declain" && "bg-red-100 text-red-800"}  ${
          type === "pending" && "bg-blue-100 text-blue-800"
        } `}
      >
        {type}
      </button>
    );
  };

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("order/");
        console.log(res.data);
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);

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
        {orders.map((item) => {
          return (
            <tr key={item._id}>
              <td className="mb-5 mt-5 flex items-center gap-2 font-semibold">
                {/* <img
                  src="https://awbi.org/wp-content/uploads/2023/04/kim.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                /> */}
                <span>{item.userId}</span>
              </td>
              <td className="font-normal">{format(item.createdAt)}</td>
              <td className="font-normal">${item.amount}</td>
              <td>
                <Button type={item.status} />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default WidgetLg;
