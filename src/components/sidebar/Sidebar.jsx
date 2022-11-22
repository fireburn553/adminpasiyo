import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import {Button} from "@aws-amplify/ui-react"


const Sidebar = ({signOut}) => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">PasiyoApp Admin</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <Person2OutlinedIcon className="icon" />
                        <span>Driver</span>
                    </li>
                    <li>
                        <PersonAddIcon className="icon" />
                        <span>New Drivers</span></li>
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