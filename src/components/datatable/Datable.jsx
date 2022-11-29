import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { Storage } from "aws-amplify"
import { useEffect, useState } from "react";
import SingleNewDriver from "../../pages/singleNewDriver/SingleNewDriver"

const Datable = ({ data }) => {

  const [popupOpen, setPopupOpen] = useState(false);
  const [userRows, setUserRows] = useState(null)
  const [riderUnverifiedId, setUnverifiedRiderId] = useState(null)

  const togglePopup = () => {
    setPopupOpen(!popupOpen)
  }
  async function dataSet() {
    let arr = []
    for (let i = 0; i < data.length; i++) {

      let object = {
        createdAt: data[i].createdAt,
        id: data[i].id,
        name: `${data[i].user.userDetails.firstName} ${data[i].user.userDetails.lastName}`,
        email: data[i].user.email,
        phoneNumber: data[i].user.userDetails.phoneNumber,
        type: data[i].type,
        img: await Storage.get(data[i].user.userDetails.profileImage)
      }
      arr.push(object)
    }

    setUserRows(arr)
  }

  useEffect(() => {
    dataSet()
  }
    , [])

  const userColumns = [
    { field: "createdAt", headerName: "Date of Application", width: 150 },
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "name", headerName: "Full Name", width: 150,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phoneNumber", headerName: "Phone Number ", width: 200 },
    { field: "type", headerName: "Ride Type", width: 100 }
  ];


  return (
    <div className="datatable">
      <div style={{ height: 700, width: '100%' }}>
        {popupOpen && <SingleNewDriver row={riderUnverifiedId} handleClose={togglePopup} />}
        {userRows && <DataGrid
          rows={userRows}
          columns={userColumns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          onCellClick={e => {
            for (let i = 0; i < data.length; i++) {
              if (data[i].id == e.row.id) {
                setUnverifiedRiderId(data[i])
              }
            }
            setPopupOpen(!popupOpen)
          }}
        />}
      </div>
    </div>
  )
}

export default Datable