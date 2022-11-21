import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import "./widgetEarnings.scss"


const WidgetEarnings = () => {
    return (
        <div className="widgetEarnings">
            <div className="left">
                <span className="title">Earnings</span>
                <span className="counter">₱10</span>
                <div className="totalContainer">
                    Today: <span className="totalRides">₱10</span>
                </div>
                <div className="totalContainer">
                    Month: <span className="totalRides">₱100</span>
                </div>
                <div className="totalContainer">
                    Year: <span className="totalRides">₱1000</span>
                </div>
                <span className="link">See all earnings</span>
            </div>
            <div className="right">
                <AccountBalanceWalletOutlinedIcon className="icon" />
            </div>
        </div>
    )
}

export default WidgetEarnings