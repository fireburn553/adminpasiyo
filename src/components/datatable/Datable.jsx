import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from "../../datatable";
import { Link } from "react-router-dom";
import { listOrders } from "../../graphql/queries";
import { useState, useEffect } from "react";
import { breadcrumbsClasses } from "@mui/material";

const Datable = () => {

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div style={{ height: 700, width: '100%' }}>
        <DataGrid
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    </div>
  )
}

export default Datable