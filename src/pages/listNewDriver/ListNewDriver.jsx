import "./listNewDriver.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Datable from "../../components/datatable/Datable";
import { listRides } from "../../graphql/queries"
import { API, graphqlOperation } from "aws-amplify"
import { useState, useEffect } from 'react';

const ListNewDriver = ({signOut}) => {

  const [driverUnverifiedData, setDriverUnverifiedData] = useState(null)

  const fecthUnverifiedDrivers = async () => {
    try {
      const dataUnverifiedDriver = await API.graphql(
        graphqlOperation(
          listRides,
          {
            filter: { isVerified: { eq: false} }
          }
        )
      )
      setDriverUnverifiedData(dataUnverifiedDriver.data.listRides.items)
      // console.log(dataUnverifiedDriver.data.listRides.items)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fecthUnverifiedDrivers()

  }, [])

  return (
    <div className="newDriverList">
      <Sidebar signOut={signOut} />
      <div className="newDriverListContainer">
        <h1 className="title">New Drivers</h1>
        {driverUnverifiedData && <Datable data={driverUnverifiedData}/>}
      </div>
    </div>
  )
}

export default ListNewDriver