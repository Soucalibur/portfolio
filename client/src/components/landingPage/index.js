import React from "react"
import {Link} from "react-router-dom"

export default function LandingPage (){
    return(
        <div>
            <h2>LandingPage</h2>
            <Link to="/home">
                <h3>HOME</h3>
            </Link>
        </div>
    )
}