import s from "./Skills.css"
import ImagenesSkills from "../helper/imgSkills/ImagenesSkills"
import 'intersection-observer';

import {useEffect, useRef} from "react"

const Skills = ()=>{

const elementRefs = useRef([]);
  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.5 }
    );
    
    elementRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [elementRefs]);

    return(
        <div className="mainContainerSkills" id="Habilidades">

                <div className="containerFlexSkills">

                    {/* FIRST FLEX DIV */}
                    <div className="element-to-show" ref={(el) => { elementRefs.current[0] = el; console.log("elemento 1", el); }}>

                        <div className="titleSkills">
                            <h4>SKILLS</h4>
                        </div>

                        <div className="subtitleSkills">
                            <h4>Habilidades técnicas</h4>
                        </div>

                        <div className="contentSkills">
                            <div className="alingTechSkills">
                                <p className="textTechSkills">JavaScript</p>
                                <img src={ImagenesSkills.logoJS} alt="logoJS" className="imgTechSkills"></img>
                            </div>

                            <div>
                                <p className="textTechSkills">HTML5</p>
                                <img src={ImagenesSkills.logoHTML5} alt="logohtml" className="imgTechSkills"></img>
                            </div>

                            <div>
                                <p className="textTechSkills">CSS</p>
                                <img src={ImagenesSkills.logoCSS3} alt="logoCSS" className="imgTechSkills"></img>
                            </div>

                            <div>
                                <p className="textTechSkills">React</p>
                                <img src={ImagenesSkills.logoReact} alt="logoReact" className="imgTechSkills"></img>
                            </div>

                            <div>
                                <p className="textTechSkills">Redux</p>
                                <img src={ImagenesSkills.logoRedux} alt="logoRedux" className="imgTechSkills"></img>
                            </div>

                            <div>
                                <p className="textTechSkills">Node</p>
                                <img src={ImagenesSkills.logoNode} alt="logoNode" className="imgTechSkills"></img>
                            </div>

                            <div>
                                <p className="textTechSkills">Sequelize</p>
                                <img src={ImagenesSkills.logoSequelize} alt="logoSequelize" className="imgTechSkills"></img>
                            </div>

                            <div>
                                <p className="textTechSkills">Express</p>
                                <img src={ImagenesSkills.logoExpress} alt="logoExpress" className="imgTechSkills"></img>
                            </div>

                            <div>
                                <p className="textTechSkills">PostgreSQL</p>
                                <img src={ImagenesSkills.logoPostgreSQL} alt="logoPostgreSQL" className="imgTechSkills"></img>
                            </div>

                            <div>
                                <p className="textTechSkills">Python</p>
                                <img src={ImagenesSkills.logoPython} alt="logoPython" className="imgTechSkills"></img>
                            </div>

                        </div>

                    </div>

                    {/* SECOND FLEX DIV */}

                    <div className="element-to-show" ref={(el) => { elementRefs.current[1] = el; console.log("elemento 2", el); }}>

                        <div className="subtitleSkills">
                            <h4>Tecnologías en proceso</h4>
                        </div> 

                        <div className="contentSkills">

                            <div>
                                <p className="textTechSkills">TypeScript</p>
                                <img src={ImagenesSkills.logoTypeScript} alt="logoTypeScript" className="imgTechSkills"></img>
                            </div>
                            
                            <div>
                                <p className="textTechSkills">React Native</p>
                                <img src={ImagenesSkills.logoReactNative} alt="logoReactNative" className="imgTechSkills"></img>
                            </div>
                
                        </div>

                    </div>

                    {/* THIRD FLEX DIV */}
                   
                    <div className="element-to-show" ref={(el) => { elementRefs.current[2] = el; console.log("elemento 3", el); }}>

                        <div className="subtitleSkills">
                            <h4>Herramientas</h4>
                        </div>

                        <div className="contentSkills">

                            <div>
                                <p className="textTechSkills">Postman</p>
                                <img src={ImagenesSkills.logoPostman} alt="logoPostman" className="imgTechSkills"></img>
                            </div>
                            
                            <div>
                                <p className="textTechSkills">VSCode</p>
                                <img src={ImagenesSkills.logoVSCode} alt="logoVSCode" className="imgTechSkills"></img>
                            </div>

                            <div>
                                <p className="textTechSkills">Git</p>
                                <img src={ImagenesSkills.logoGit} alt="logoGit" className="imgTechSkills"></img>
                            </div>

                            <div>
                                <p className="textTechSkills">GitHub</p>
                                <img src={ImagenesSkills.logoGitHub} alt="logoGitHub" className="imgTechSkills"></img>
                            </div>

                            <div>
                                <p className="textTechSkills">Trello</p>
                                <img src={ImagenesSkills.logoTrello} alt="logoTrello" className="imgTechSkills"></img>
                            </div>

                        </div>

                    </div>

                    {/* FOURTH FLEX DIV */}

                    <div className="element-to-show" ref={(el) => { elementRefs.current[3] = el; console.log("elemento 4", el); }}>

                        <div className="subtitleSkills">
                            <h4>Certificaciones</h4>
                        </div>

                        <div className="contentSkills">

                            <div>
                                <p className="textTechSkills">Henry</p>
                                <img src={ImagenesSkills.henryCertificate} alt="henryCertificate" className="imgCertificatesSkills"></img>
                            </div>

                            <div>
                                <p className="textTechSkills">EF SET</p>
                                <img src={ImagenesSkills.EFSETCertificate} alt="EFSETCertificate" className="imgCertificatesSkills"></img>
                            </div>

                            <div>
                                <p className="textTechSkills">Codo a Codo</p>
                                <img src={ImagenesSkills.CACCertificate} alt="CACCertificate" className="imgCertificatesSkills"></img>
                            </div>

                            <div>
                                <p className="textTechSkills">Python</p>
                                <img src={ImagenesSkills.PythonCertificate} alt="PythonCertificate" className="imgCertificatesSkills"></img>
                            </div>

                        </div>

                    </div>

                </div>

            

        </div>
    )
}

export default Skills