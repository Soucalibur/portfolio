import image from "../img/Skills.jpg"
import s from "./skills.css"
import Imagenes from "../img/imagenes"

const Skills = ()=>{

    return(
        <div className="backgroundSkills">
            <div className="containerFlexSkills">

                {/* FIRST FLEX DIV */}
                <div>

                    <div className="titleSkills">
                        <h2>Skills</h2>
                    </div>

                    <br/>
                    <br/>

                    <div className="titleTechSkills">
                        <h3>Habilidades técnicas</h3>
                    </div>

                    <br/>
                    <br/>
                    
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

                </div>

                {/* SECOND FLEX DIV */}

                <div>

                    <br/>
                    <br/>
                    <br/>

                    <div className="titleProcessSkills">
                        <h3>Tecnologías en proceso</h3>
                    </div> 

                    <br/>
                    <br/>  

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

                </div>

                {/* THIRD FLEX DIV */}
                 
                <div>

                    <br/>
                    <br/>
                    <br/>

                    <div className="titleToolSkills">
                        <h3>Herramientas</h3>
                    </div>

                    <br/>
                    <br/>

                    <div className="contentToolSkills">

                        <div>
                            <p className="textTechSkills">Postman</p>
                            <img src={Imagenes.logoPostman} alt="logoPostman" className="imgTechSkills"></img>
                        </div>
                        
                        <div>
                            <p className="textTechSkills">VSCode</p>
                            <img src={Imagenes.logoVSCode} alt="logoVSCode" className="imgTechSkills"></img>
                        </div>

                        <div>
                            <p className="textTechSkills">Git</p>
                            <img src={Imagenes.logoGit} alt="logoGit" className="imgTechSkills"></img>
                        </div>

                        <div>
                            <p className="textTechSkills">GitHub</p>
                            <img src={Imagenes.logoGitHub} alt="logoGitHub" className="imgTechSkills"></img>
                        </div>

                        <div>
                            <p className="textTechSkills">Trello</p>
                            <img src={Imagenes.logoTrello} alt="logoTrello" className="imgTechSkills"></img>
                        </div>

                    </div>

                </div>

                {/* FOURTH FLEX DIV */}

                <div>

                    <br/>
                    <br/>
                    <br/>

                    <div className="titleCertificationsSkills">
                        <h3>Certificaciones</h3>
                    </div>

                    <br/>
                    <br/>

                    <div className="contentCertificationsSkills">

                        <div>
                            <p className="textTechSkills">Henry</p>
                            <img src={Imagenes.henryCertificate} alt="henryCertificate" className="imgCertificatesSkills"></img>
                        </div>

                        <div>
                            <p className="textTechSkills">EF SET</p>
                            <img src={Imagenes.EFSETCertificate} alt="EFSETCertificate" className="imgCertificatesSkills"></img>
                        </div>

                        <div>
                            <p className="textTechSkills">Codo a Codo</p>
                            <img src={Imagenes.CACCertificate} alt="CACCertificate" className="imgCertificatesSkills"></img>
                        </div>

                        <div>
                            <p className="textTechSkills">Python</p>
                            <img src={Imagenes.PythonCertificate} alt="PythonCertificate" className="imgCertificatesSkills"></img>
                        </div>

                    </div>

                </div>

            </div>

            <div className="backgroundImgSkills">
                <img src={image} alt="skills img"></img>
            </div>
            <div className="backgroundColorSkills"></div>
            

        </div>
    )
}

export default Skills