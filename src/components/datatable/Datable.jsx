import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatable";

const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <Link to="/users/test" style={{ textDecoration: "none" }}> */}
              <div className="viewButton">View</div>
            {/* </Link> */}
          </div>
        );
      },
    },
  ];

const Datable = () => {
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