import "./listNewDriver.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Datable from "../../components/datatable/Datable";

const ListNewDriver = () => {
  return (
    <div className="newDriverList">
      <Sidebar/>
      <div className="newDriverListContainer">
        <h1 className="title">New Drivers</h1>
        <Datable/>
      </div>
    </div>
  )
}

export default ListNewDriver