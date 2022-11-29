import "./singleNewDriver.scss"
import Sidebar from "../../components/sidebar/Sidebar";

const SingleNewDriver = ({signOut}) => {
  return (
    <div className="singleNewDriver">
        <Sidebar signOut={signOut} />
        <div className="singleNewDriverListContainer">
        singleNewDriverListContainer
        </div>
    </div>
  )
}

export default SingleNewDriver