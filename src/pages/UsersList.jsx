import { DeleteOutline, Edit } from "@material-ui/icons";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { users } from "../dummyData";

const UsersList = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "username",
      headerName: "User name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-2">
            <img
              src={params.row.avathar}
              alt=""
              className="w-8 h-8 rounded-full object-cover"
            />
            <span>{params.row.username}</span>
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "transaction", headerName: "Transaction", width: 180 },
    {
      filed: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Edit className="text-blue-800 mr-3 cursor-pointer " />
            <DeleteOutline className="text-red-800 cursor-pointer" />
          </div>
        );
      },
    },
  ];

  return (
    <div className="flex-[4] h-[620px] w-full">
      <DataGrid
        rows={users}
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

export default UsersList;
