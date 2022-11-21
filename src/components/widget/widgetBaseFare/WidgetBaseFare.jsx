import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import "./widgetBaseFare.scss"

const WidgetBaseFare = () => {
    return (
        <div className="widgetBaseFare">
            <div className="left">
                <span className="title">Base Fare</span>
                <div className="form">
                    <form action="">
                        <div className="formInput">
                            <label>Update Base Fare</label>
                            <div>
                                <input type="number" placeholder='100' />
                            </div>
                        </div>
                        <button>Update</button>
                    </form>
                </div>
            </div>
            <div className="right">
                <CurrencyRubleIcon className="icon" />
            </div>
        </div>
    )
}

export default WidgetBaseFare