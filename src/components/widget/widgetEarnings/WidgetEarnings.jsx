import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import "./widgetEarnings.scss"
import { useState, useEffect } from 'react';


const WidgetEarnings = ({ orders }) => {

    const [todayEarning, setTodayEarning] = useState(0)
    const [monthEarning, setMonthEarning] = useState(0)
    const [totalEarning, setTotalEarning] = useState(0)
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const day = new Date().getDate();

    function totalEarnings() {

        let tempTotalEarning = 0
        let tempMonthEarning = 0
        let tempTodayEarning = 0


        for (let i = 0; i < orders.length; i++) {
            let orderDates = (orders[i].createdAt).slice(0, 10)
            let tempDate = orderDates.split("-")
            let tempAmount = orders[i].amount
            
            tempTotalEarning += tempAmount

            if (tempDate[0] == year) {
                if (tempDate[1] - 1 == month) {
                    tempMonthEarning += tempAmount

                    if (tempDate[2] == day) {
                        tempTodayEarning += tempAmount
                    }

                }

            }
        }

        setTotalEarning(tempTotalEarning)
        setMonthEarning(tempMonthEarning)
        setTodayEarning(tempTodayEarning)
    }


    useEffect(() => {
        totalEarnings()

    }, [])

    return (

        <div className="widgetEarnings">
            <div className="left">
                <span className="title">Earnings</span>
                <span className="counter">Today: ₱{todayEarning}</span>
                <div className="totalContainer">
                    Month: <span className="totalRides">₱{monthEarning}</span>
                </div>
                <div className="totalContainer">
                    Year: <span className="totalRides">₱{totalEarning}</span>
                </div>
            </div>
            <div className="right">
                <AccountBalanceWalletOutlinedIcon className="icon" />
            </div>
        </div>
    )
}

export default WidgetEarnings