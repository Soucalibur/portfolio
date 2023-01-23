import {Link} from "react-router-dom"
import s from "./navbar.css"

const  Navbar =()=>{
    return(
        <div className="backgroundNav">
            <div className="containerButtonsNav">
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
        </div>
    )
}

export default Navbar