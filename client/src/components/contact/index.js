import s from "./contact.css"
import { Link } from "react-router-dom"

const Contact = ()=>{

    return(
        <div className="backgroundContact">

            <div>
                <a href="https://www.linkedin.com/in/matthewfullstack/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>  
            </div>
            <Link to="/contactme">
                ContactMe
            </Link>
            
            <div>
                <a href="https://github.com/Soucalibur" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
                
            
        </div>
        
    )
}

export default Contact