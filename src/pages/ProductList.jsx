import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Products } from "../dummyData";
import { Link } from "react-router-dom";
import { DeleteOutline, Edit } from "@material-ui/icons";

const ProductList = () => {
  const [data, setData] = useState(Products);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "Products",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex gap-3 items-center">
            <img
              src={params.row.avathar}
              alt=""
              className="w-8 h-8 rounded-full object-fit"
            />
            <div className="text-[15px] ">{params.row.username}</div>
          </div>
        );
      },
    },
    { field: "price", headerName: "Price", width: 150 },
    { field: "stock", headerName: "Stock", width: 150 },
    { field: "color", headerName: "Color", width: 150 },
    {
      filed: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div >
            <Link to={`/products/${params.row.id}`}>
              <Edit className="text-blue-800 mr-3 cursor-pointer " />
            </Link>
            <DeleteOutline
              className="text-red-800 cursor-pointer"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className="flex-[4] p-5">
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;
