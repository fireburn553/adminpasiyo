import Charts from "../../components/chart/Charts";
import Sidebar from "../../components/sidebar/Sidebar";
import WidgetBaseFare from "../../components/widget/widgetBaseFare/WidgetBaseFare";
import WidgetEarnings from "../../components/widget/widgetEarnings/WidgetEarnings";
import WidgetRider from "../../components/widget/widgetRider/WidgetRider";
import WidgetRides from "../../components/widget/widgetRides/WidgetRides";
import Table from "../../components/table/Table"
import "./home.scss";
import { listOrders } from "../../graphql/queries"
import { API, graphqlOperation } from "aws-amplify"
import { useState, useEffect } from 'react';


const Home = ({ signOut }) => {

  const [orders, setOrders] = useState(null)
  const fecthOrders = async () => {
    try {
      const orderData = await API.graphql(
        graphqlOperation(
          listOrders,
          {
            filter: { payment: { eq: true } }
          }
        )
      )
      setOrders(orderData.data.listOrders.items)
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {
    fecthOrders()

  }, [])

  return (
    <div className="home">
      <Sidebar signOut={signOut} />
      <div className="homeContainer">
        <div className="widgets">
          <WidgetRider />
          {orders && <WidgetRides orders={orders} />}
          {orders && <WidgetEarnings orders={orders} />}
          <WidgetBaseFare />
        </div>
        <div className="charts">
          <Charts title="Last 6 months (Revenue)" aspect={2 / 0.55} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          {orders && <Table orders={orders} />}
        </div>
      </div>
    </div>
  )
}

export default Home