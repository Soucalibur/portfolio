import Navbar from "../navbar/Navbar"
import AboutMe from "../aboutMe/AboutMe"
import Skills from "../skills/Skills"
import Projects from "../projects/Projects"
import ContactMe from "../contactMe/ContactMe"
import ImagenesProjects from "../helper/imgProyects/imagenesProjects"

import s from "./landingPage.css"

const Index = ()=>{
    window.onload = ()=>{
        const primerDiv = document.getElementById("primerDiv")
        primerDiv.style.display = "none"
        const segundoDiv = document.getElementById("segundoDiv")
        segundoDiv.hidden = false
        segundoDiv.className = "containerIndex"
    }

    return(
        <div>
            <div id="primerDiv">
                <img src={ImagenesProjects.loading1} alt="logoContactPoint" className="imgLoading"></img>
            </div>
            <div id="segundoDiv" hidden={true}>
                <Navbar></Navbar>
                <AboutMe></AboutMe>
                <Skills></Skills>
                <Projects></Projects>
                <ContactMe></ContactMe>
            </div>
        </div>
    )
}

export default Index