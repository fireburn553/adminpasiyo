import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Charts from "../../components/chart/Charts"
import List from "../../components/table/Table"
const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="itemIMG" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+63 9303800012</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Daet, Camarines Norte</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Type of Rides:</span>
                  <span className="itemValue">Motorcycle</span>
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
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single