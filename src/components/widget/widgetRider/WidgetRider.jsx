import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import "./widgetRider.scss"
import { listRides } from "../../../graphql/queries"
import { API, graphqlOperation } from "aws-amplify"
import { useState, useEffect } from 'react';

const WidgetRider = () => {

    const [riders, setRiders] = useState(null)
    const [activeRiders, setActiveRiders] = useState(null)
    const fecthRides = async () => {
        try {
            const rideData = await API.graphql(
                graphqlOperation(
                    listRides
                )
            )
            console.log(rideData);
            setRiders(rideData.data.listRides.items)
        } catch (error) {
            console.error(error)
        }
    }



    const fetchActiveRiders = async () => {
        try {
            const rideData = await API.graphql(
                graphqlOperation(
                    listRides,
                    {
                        filter: { isActive: { eq: true } }
                    }
                )
            )
            console.log(rideData);
            setActiveRiders(rideData.data.listRides.items)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fecthRides()
        fetchActiveRiders()
    }, [])


    return (

        <div className="widgetRider">
            <div className="left">
                <span className="title">Driver</span>
                <div className="activeRider">
                    Active Rider: {activeRiders?.length}
                </div>
                <span className="counter">Total Riders: {riders?.length}</span>
                <span className="link">See all Drivers</span>
            </div>
            <div className="right">
                <PersonOutlinedIcon className="icon" />
            </div>
        </div>
    )
}

export default WidgetRider