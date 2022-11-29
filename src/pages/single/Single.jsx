import "./single.scss"
import Charts from "../../components/chart/Charts"
import { Storage, API, graphqlOperation } from "aws-amplify"
import { useEffect, useState } from "react"
import { listOrders } from "../../graphql/queries"
import { DataGrid } from "@mui/x-data-grid"

const Single = ({ row, handleClose }) => {

  const [profUrl, setProfUrl] = useState(null)
  const [orders, setOrders] = useState([])
  const [dataTransaction, setDataTransaction] = useState(null)

  useEffect(() => {
    const fetchImage = async () => {
      const url = await Storage.get(row.user.userDetails.profileImage)
      setProfUrl(url)
    }

    fetchImage()
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      const orderData = await API.graphql(
        graphqlOperation(
          listOrders,
          {
            filter: { rideId: { eq: row.id }, payment: { eq: true } }
          }
        )
      )
      setOrders(orderData.data.listOrders.items)
    } catch (error) {
      console.error(error)
    }
  }

  const userColumn = [
    { field: "createdAt", headerName: "Date", width: 200 },
    { field: "destinationName", headerName: "Destination", width: 200 },
    { field: "originName", headerName: "Origin", width: 200 },
    { field: "amount", headerName: "Amount", width: 70 },
    { field: "rating", headerName: "Rating", width: 70 },
    { field: "comment", headerName: "Comment", width: 200 }

  ]

  function transactionDate() {
    let arr = []
    for (let i = 0; i < orders.length; i++) {

      let object = {
        id: i,
        createdAt: orders[i].createdAt,
        destinationName: orders[i].destinationName,
        originName: orders[i].originName,
        amount: orders[i].amount,
        rating: orders[i].rating,
        comment: orders[i].comment
      }
      arr.push(object)
    }
    console.log(arr)
    setDataTransaction(arr)
  }

  useEffect(() => {
    if (orders.length > 0) {
      transactionDate()
      
    }
  }, [orders])



  return (
    <div className='popup-box'>
      <div className="box">
        <button className="btn-close" onClick={handleClose}>x</button>
        <div className="single">
          <div className="singleContainer">
            <div className="top">
              <div className="left">
                <h1 className="title">Information</h1>
                <div className="item">
                  {profUrl && <img src={profUrl} alt="itemIMG" className="itemImg" />}
                  <div className="details">
                    <h1 className="itemTitle">{`${row.user.userDetails.firstName} ${row.user.userDetails.lastName}`}</h1>
                    <div className="detailItem">
                      <span className="itemKey">Email:</span>
                      <span className="itemValue">{row.user.email}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Phone:</span>
                      <span className="itemValue">{row.user.userDetails.phoneNumber}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Type of Ride:</span>
                      <span className="itemValue">{row.type}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Rating:</span>
                      <span className="itemValue">{row.rating}✨</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <Charts aspect={3 / 1} title="Driver Income for the last 7 days" />
              </div>
            </div>
            <div className="bottom">
              <h1 className="title">Latest Transaction</h1>
              <div style={{ height: 700, width: '100%' }}>

                {dataTransaction && <DataGrid
                  rows={dataTransaction}
                  columns={userColumn}
                  pageSize={10}
                  rowsPerPageOptions={[10]} />}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Single