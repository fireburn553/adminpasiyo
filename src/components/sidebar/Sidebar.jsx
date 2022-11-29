import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { Button } from "@aws-amplify/ui-react"
import { Link } from "react-router-dom"


const Sidebar = ({ signOut }) => {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">PasiyoApp Admin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <Person2OutlinedIcon className="icon" />
                            <span>Driver</span>
                        </li>
                    </Link>
                    <Link to="/newDriver" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonAddIcon className="icon" />
                            <span>New Drivers</span>
                        </li>
                    </Link>
                    <p className="title">USER</p>
                    <li>
                        <Button onClick={signOut}>Sign out</Button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar