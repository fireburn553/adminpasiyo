import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import "./widgetRides.scss"


const WidgetRides = () => {
    return (
        <div className="widgetRides">
            <div className="left">
                <span className="title">Rides</span>
                <span className="counter">10</span>
                <div className="totalContainer">
                    Today:<span className="totalRides">10</span>
                </div>
                <div className="totalContainer">
                    Month:<span className="totalRides">100</span>
                </div>
                <div className="totalContainer">
                    Year:<span className="totalRides">1000</span>
                </div>
                <span className="link">See all rides</span>
            </div>
            <div className="right">
                <TwoWheelerIcon className="icon" />
            </div>
        </div>
    )
}

export default WidgetRides