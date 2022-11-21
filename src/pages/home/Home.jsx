import Sidebar from "../../components/sidebar/Sidebar";
import WidgetBaseFare from "../../components/widget/widgetBaseFare/WidgetBaseFare";
import WidgetEarnings from "../../components/widget/widgetEarnings/WidgetEarnings";
import WidgetRider from "../../components/widget/widgetRider/WidgetRider";
import WidgetRides from "../../components/widget/widgetRides/WidgetRides";
import "./home.scss";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="widgets">
          <WidgetRider/>
          <WidgetRides/>  
          <WidgetEarnings/>
          <WidgetBaseFare/>
        </div>
      </div>
    </div>
  )
}

export default Home