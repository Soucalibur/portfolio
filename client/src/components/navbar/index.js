import {Link} from "react-router-dom"
import s from "./navbar.css"

const  Navbar =()=>{
    return(
        <div className="backgroundNav">
            
            <Link to="/home">
                Home
            </Link>
            <Link to="/skills">
                Skills
            </Link>
            <Link to="/projects">
                Projects
            </Link>
            <Link to="/contactme">
                ContactMe
            </Link>
        </div>
    )
}

export default Navbar