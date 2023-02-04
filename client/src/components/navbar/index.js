import {Link} from "react-router-dom"
import s from "./navbar.css"
import Imagenes from "../img/imagenes"

const  Navbar =()=>{
    return(
        <div className="backgroundNav">
            
                <Link to="/">
                        Home
                </Link>
                <Link to="/skills">
                        Skills    
                </Link>
                <Link to="/projects"> 
                        Projects
                </Link>
                
            
        </div>
    )
}

export default Navbar