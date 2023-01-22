import {Link} from "react-router-dom"
import s from "./navbar.css"

const  Navbar =()=>{
    return(
        <div className="background">
            <h3>NAAAAVBAARRRRR</h3>
            <Link to="/home">
                Home
            </Link>
            <Link to="/landing">
                Landing
            </Link>
        </div>
    )
}

export default Navbar