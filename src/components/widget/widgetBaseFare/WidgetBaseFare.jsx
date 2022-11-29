import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import "./widgetBaseFare.scss"
import BaseFare from '../../baseFare/BaseFare';
import { getFare } from "../../../graphql/queries"
import { API, graphqlOperation } from "aws-amplify"
import { useState, useEffect } from 'react';

const WidgetBaseFare = () => {

    const [tricycleOpen, setTricycleOpen] = useState(false);
    const [motorcycleOpen, setMotorcycleOpen] = useState(false);
    const [fare, setFare] = useState(null);
    const fareId = 'f7c22515-838f-4ddc-bc28-53fb328a0c9e'

    const togglePopupMotorcycle = () => {
        setMotorcycleOpen(!motorcycleOpen);
    }
    const togglePopupTricycle = () => {
        setTricycleOpen(!tricycleOpen);
    }

    const fetchFare = async () => {
        try {
            const fareData = await API.graphql(
                graphqlOperation(
                    getFare, { id: fareId }
                )
            )
            setFare(fareData.data.getFare)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchFare()
    }, [])

    return (
        <div className="widgetBaseFare">
            <div className="left">
                <span className="title">Base Fare</span>
                <div className="container">
                    <div className="totalContainer">
                        <h3>Motorcycle</h3>
                    </div>
                    <div className="totalContainer">
                        Base Fare <span className="totalRides">₱{fare?.motorcycleBaseFare}</span>
                    </div>
                    <div className="totalContainer">
                        Additional Fare <span className="totalRides">₱{fare?.motorcycleAdditionalFare}</span>
                    </div>
                    <span className="link" onClick={togglePopupMotorcycle}>Edit Base Fare</span>
                    
                    {motorcycleOpen && <BaseFare handleClose={togglePopupMotorcycle} content={"Motorcycle"}/>}
                </div>
            </div>
            <div className="right">
                <CurrencyRubleIcon className="icon" />
                <div className="container">

                    <div className="totalContainer">
                        <h3>Tricycle</h3>
                    </div>
                    <div className="totalContainer">
                        Base Fare <span className="totalRides">₱{fare?.tricycleBaseFare}</span>
                    </div>
                    <div className="totalContainer">
                        Additional Fare <span className="totalRides">₱{fare?.tricycleAdditionalFare}</span>
                    </div>
                    <span className="link" onClick={togglePopupTricycle}>Edit Base Fare</span>
                    {tricycleOpen && <BaseFare handleClose={togglePopupTricycle} content={"Tricyle"} />}
                </div>
            </div>
        </div>
    )
}

export default WidgetBaseFare