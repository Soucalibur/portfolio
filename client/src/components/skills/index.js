import image from "../img/Skills.jpg"
import s from "./skills.css"

const Skills = ()=>{

    return(
        <div className="backgroundSkills">

            <div className="titleSkills">
                <h2>Skills</h2>
            </div>
            <div className="titleTechSkills">
                <h3>Habilidades técnicas</h3>
            </div>
            <div className="contentTechSkills">
                <p>JavaScript,HTML5, CSS, React, Redux, Node, Sequelize, Express, PostgreSQL, Python</p>
            </div>

            <div className="titleProcessSkills">
                <h3>Tecnologías en proceso</h3>
            </div>
            <div className="contentProcessSkills">
                <p>TypeScript, React Native </p>
            </div>

            <div className="titleToolSkills">
                <h3>Herramientas</h3>
            </div>
            <div className="contentToolSkills">
                <p>Postman, VSCode, Git, GitHub, Trello</p>
            </div>

            <div className="titleCertificationsSkills">
                <h3>Certificaciones</h3>
            </div>
            <div className="contentCertificationsSkills"> 
                <p>inglés B2, certificado de Henry, certificados de las dos entidades publicas </p>
            </div>

            <div className="backgroundImgSkills">
                <img src={image} alt="skills img"></img>
            </div>
            <div className="backgroundColorSkills"></div>

        </div>
    )
}

export default Skills