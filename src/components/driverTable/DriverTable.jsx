import "./driverTable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react";
import Single from "../../pages/single/Single";
import { Storage } from "aws-amplify"

const DriverTable = ({ data }) => {

    const [popupOpen, setPopupOpen] = useState(false);
    const [userRows, setUserRows] = useState(null)
    const [riderId, setRiderId] = useState(null)

    const togglePopup = () => {
        setPopupOpen(!popupOpen)
    }

    async function dataSet() {
        let arr = []
        for (let i = 0; i < data.length; i++) {

            let object = {
                id: data[i].id,
                name: `${data[i].user.userDetails.firstName} ${data[i].user.userDetails.lastName}`,
                phoneNumber: data[i].user.userDetails.phoneNumber,
                email: data[i].user.email,
                bday: data[i].user.userDetails.birthDate.slice(0, 10),
                status: data[i].isActive ? "online" : "offline",
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
        { field: "id", headerName: "ID", width: 350 },
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
        { field: "phoneNumber", headerName: "Cellphone Number", width: 150 },
        { field: "email", headerName: "Email", width: 200},
        { field: "bday", headerName: "Birth date", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 100,
            renderCell: (params) => {
                return (
                    <div className={`cellWithStatus ${params.row.status}`}>
                        {params.row.status}
                    </div>
                );
            }
        }
    ];

    return (
        <div className="datatable">
            <div style={{ height: 700, width: '100%' }}>
                {popupOpen && <Single row={riderId} handleClose={togglePopup} />}
                {userRows && <DataGrid
                    rows={userRows}
                    columns={userColumns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    onCellClick={e => {
                        for (let i = 0; i < data.length; i++) {
                            if (data[i].id == e.row.id) {
                                setRiderId(data[i])
                            }
                        }
                        setPopupOpen(!popupOpen)
                    }}
                />}
            </div>
        </div>
    )
}

export default DriverTable