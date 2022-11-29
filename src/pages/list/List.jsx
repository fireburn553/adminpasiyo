import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import DriverTable from "../../components/driverTable/DriverTable"
import { listRides } from "../../graphql/queries"
import { API, graphqlOperation } from "aws-amplify"
import { useState, useEffect } from 'react';


const List = ({ signOut }) => {

  const [driverData, setDriverData] = useState(null)

  const fecthDrivers = async () => {
    try {
      const dataDriver = await API.graphql(
        graphqlOperation(
          listRides,
          {
            filter: { isVerified: { eq: true } }
          }
        )
      )
      setDriverData(dataDriver.data.listRides.items)
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {
    fecthDrivers()

  }, [])


  return (
    <div className="list">

      <Sidebar signOut={signOut} />
      <div className="listContainer">
        <h1 className="title">Drivers</h1>
       { driverData && <DriverTable data={driverData}/>}
      </div>
    </div>
  )
}

export default List