import Charts from "../../components/chart/Charts";
import Sidebar from "../../components/sidebar/Sidebar";
import WidgetBaseFare from "../../components/widget/widgetBaseFare/WidgetBaseFare";
import WidgetEarnings from "../../components/widget/widgetEarnings/WidgetEarnings";
import WidgetRider from "../../components/widget/widgetRider/WidgetRider";
import WidgetRides from "../../components/widget/widgetRides/WidgetRides";
import Table from "../../components/table/Table"
import "./home.scss";


const Home = ({ signOut }) => {
  return (
    <div className="home">
      <Sidebar signOut={signOut} />
      <div className="homeContainer">
        <div className="widgets">
          <WidgetRider />
          <WidgetRides />
          <WidgetEarnings />
          <WidgetBaseFare />
        </div>
        <div className="charts">
          <Charts title="Last 6 months (Revenue)" aspect={2/0.55}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home