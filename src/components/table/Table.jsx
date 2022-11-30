import "./table.scss"
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import { Storage } from "aws-amplify"

const List = ({ orders }) => {

    const [data, setData] = useState(null)

    async function dataSet() {
        let arr = []
        for (let i = 0; i < orders.length; i++) {
            let object = {
                createdAt: orders[i].createdAt,
                id: orders[i].id,
                originName: orders[i].originName,
                destinationName: orders[i].destinationName,
                amount: orders[i].amount,
                rideId: `${orders[i].ride.user.userDetails.firstName} ${orders[i].ride.user.userDetails.lastName}`,
                rating: orders[i].rating,
                type: orders[i].type,
                img: await Storage.get(orders[i].ride.user.userDetails.profileImage),
            }
            arr.push(object)
        }
        setData(arr)
    }

    useEffect(() => {
        dataSet()
    }, [])

    const userColumns = [

        { field: "createdAt", headerName: "Date", width: 180 },
        {
            field: "rideId",
            headerName: "Rider Name",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellWithImg">
                        <img className="cellImg" src={params.row.img} alt="avatar" />
                        {params.row.rideId}
                    </div>
                );
            },
        },
        { field: "id", headerName: "Transaction ID", width: 70 },
        {
            field: "originName",
            headerName: "Origin",
            width: 230
        },
        {
            field: "destinationName",
            headerName: "Destination",
            width: 230,
        },

        {
            field: "amount",
            headerName: "Amount",
            width: 70,
        },


        {
            field: "rating",
            headerName: "Rating",
            width: 50
        },
        {
            field: "type",
            headerName: "Ride Type",
            width: 100
        }
    ];
    return (
        <div className="datatable">
            <div style={{ height: 580, width: '100%' }}>
                {data && <DataGrid
                    rows={data}
                    columns={userColumns}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                />}
            </div>
        </div>
    )
}

export default List