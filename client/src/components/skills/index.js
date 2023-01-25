import image from "../img/Skills.jpg"
import s from "./skills.css"
import Imagenes from "../img/imagenes"

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
                <div className="alingTechSkills">
                    <p className="textTechSkills">JavaScript</p>
                    <img src={Imagenes.logoJS} alt="logoJS" className="imgTechSkills"></img>
                </div>

                <div>
                    <p className="textTechSkills">HTML5</p>
                    <img src={Imagenes.logoHTML5} alt="logohtml" className="imgTechSkills"></img>
                </div>

                <div>
                    <p className="textTechSkills">CSS</p>
                    <img src={Imagenes.logoCSS3} alt="logoCSS" className="imgTechSkills"></img>
                </div>

                <div>
                    <p className="textTechSkills">React</p>
                    <img src={Imagenes.logoReact} alt="logoReact" className="imgTechSkills"></img>
                </div>

                <div>
                    <p className="textTechSkills">Redux</p>
                    <img src={Imagenes.logoRedux} alt="logoRedux" className="imgTechSkills"></img>
                </div>

                <div>
                    <p className="textTechSkills">Node</p>
                    <img src={Imagenes.logoNode} alt="logoNode" className="imgTechSkills"></img>
                </div>

                <div>
                    <p className="textTechSkills">Sequelize</p>
                    <img src={Imagenes.logoSequelize} alt="logoSequelize" className="imgTechSkills"></img>
                </div>

                <div>
                    <p className="textTechSkills">Express</p>
                    <img src={Imagenes.logoExpress} alt="logoExpress" className="imgTechSkills"></img>
                </div>

                <div>
                    <p className="textTechSkills">PostgreSQL</p>
                    <img src={Imagenes.logoPostgreSQL} alt="logoPostgreSQL" className="imgTechSkills"></img>
                </div>

                <div>
                    <p className="textTechSkills">Python</p>
                    <img src={Imagenes.logoPython} alt="logoPython" className="imgTechSkills"></img>
                </div>

            </div>


            <div className="titleProcessSkills">
                <h3>Tecnologías en proceso</h3>
            </div> 

            <div className="contentProcessSkills">

                <div>
                    <p className="textTechSkills">TypeScript</p>
                    <img src={Imagenes.logoTypeScript} alt="logoTypeScript" className="imgTechSkills"></img>
                </div>
                
                <div>
                    <p className="textTechSkills">React Native</p>
                    <img src={Imagenes.logoReactNative} alt="logoReactNative" className="imgTechSkills"></img>
                </div>
    
            </div>
            
{/* 
            

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
            </div> */}

            <div className="backgroundImgSkills">
                <img src={image} alt="skills img"></img>
            </div>
            <div className="backgroundColorSkills"></div>
            

        </div>
    )
}

export default Skills