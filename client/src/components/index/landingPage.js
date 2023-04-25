import Navbar from "../navbar/Navbar"
import AboutMe from "../aboutMe/AboutMe"
import Skills from "../skills/Skills"
import Projects from "../projects/Projects"
import ContactMe from "../contactMe/ContactMe"

import s from "./landingPage.css"

const Index = ()=>{

    return(
        <div>
            <Navbar></Navbar>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    )
}

export default Index