import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import { useState, useEffect } from 'react';
import "./widgetRides.scss"


const WidgetRides = ({ orders }) => {


    const [todayTotal, setTodayTotal] = useState(0)
    const [monthTotal, setMonthTotal] = useState(0)
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const day = new Date().getDate();

    function totalRides() {

        let tempMonthTotal = 0
        let tempTodayTotal = 0


        for (let i = 0; i < orders.length; i++) {
            let orderDates = (orders[i].createdAt).slice(0, 10)
            let tempDate = orderDates.split("-")

            if (tempDate[0] == year) {
                
                if (tempDate[1]-1 == month) {
                    tempMonthTotal++

                    if (tempDate[2] == day) {
                        tempTodayTotal++
                    }

                }

            }
        }

        setMonthTotal(tempMonthTotal)
        setTodayTotal(tempTodayTotal)
    }


    useEffect(() => {
        totalRides()

    }, [])




    return (
        <div className="widgetRides">
            <div className="left">
                <span className="title">Rides</span>
                <span className="counter">Today: {todayTotal}</span>
                <div className="totalContainer">
                    Month:<span className="totalRides"> {monthTotal}</span>
                </div>
                <div className="totalContainer">
                    Total Rides:<span className="totalRides"> {orders?.length}</span>
                </div>
            </div>
            <div className="right">
                <TwoWheelerIcon className="icon" />
            </div>
        </div>
    )
}

export default WidgetRides