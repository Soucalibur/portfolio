import image from "../img/Proyects.jpg"
import s from "./projects.css"

const Projects = ()=>{

    return(
        <div className="backgroundProjects">

            <div className="titleProjects"> 
                <h3>Projects</h3>
            </div>
            <div className="contentProjects">
                <p>
                    clima(mirar de terminarlo bien y subirlo), LatamCom (E-commerce), 
                    CountriesApp (app de paises), Página estática (primeros pasos) 
                </p>
            </div>

            <div className="backgroundImgProjects">
                <img src={image} alt="projects img"></img>
            </div>

            <div className="backgroundColorProjects"></div>

        </div>
    )
}

export default Projects