import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Datable from "../../components/datatable/Datable"


const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Datable/>
      </div>
    </div>
  )
}

export default List