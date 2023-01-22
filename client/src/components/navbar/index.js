import {Link} from "react-router-dom"
import s from "./navbar.css"

const  Navbar =()=>{
    return(
        <div className="backgroundNav">
            
            <Link to="/home">
                Home
            </Link>
            <Link to="/">
                Landing
            </Link>
        </div>
    )
}

export default Navbar