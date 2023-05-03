import s from "./Projects.css"
import ImagenesProjects from "../helper/imgProyects/imagenesProjects"
import ImagenesBackground from "../helper/imgBackgrounds/imagenesBackground"
import { Link } from "react-router-dom"
const Projects = ()=>{


    return(
        <div className="mainContainerProjects" id="Proyectos">
            <img src={ImagenesBackground.backgroundProjects} alt="imgbackground" className="imgBackgroundProjects"></img>
            <div className="containerShowSecondProjects" id="segundoProjects"> 

                <div className="titleProjects"> 
                    <h4>PROJECTS</h4>
                </div>
                
                                        {/* CONTACT POINT */}

                <div className="titleOfProjectsCP">
                    <h4>Contact Point</h4>
                </div>
                <div className="contentProjectsCP">
                    <Link to="https://emprendimiento.vercel.app/" target="_blank" className="positionImgProjectsCP">
                        
                            <div className="contectImgProjectsCP">
                                <img src={ImagenesProjects.proyecto3ContactPoint} alt="HenryCountries" className="imgProjectsCP"></img>
                                <p>Visitar página</p>
                            </div>
                        
                    </Link>
                    <div className="descriptionProjectsCP">
                    
                        <p>
                            <b>Contact Point:</b> ¡Te presentamos un emprendimiento de servicios que busca destacar tu marca y llevarla al siguiente nivel! 
                            Nos especializamos en cuatro áreas clave que pueden transformar la manera en que te relacionas con tus clientes:
                            Marketing y Publicidad, Fotografía, Desarrollo Web y Diseño Gráfico. <br/><br/>

                            Con nuestra experiencia y dedicación, nos comprometemos a ofrecerte soluciones innovadoras y personalizadas 
                            que se adapten a tus necesidades específicas. Desde la creación de estrategias de marketing hasta el diseño 
                            de sitios web y la producción de contenido visual de alta calidad, nuestro objetivo es ayudarte a alcanzar tus metas 
                            y objetivos empresariales.<br/><br/>

                            Ya sea que estés buscando aumentar la visibilidad de tu marca, mejorar la experiencia del usuario en tu 
                            sitio web o destacar la estética de tu marca, nuestro equipo de expertos en marketing, fotografía, diseño 
                            gráfico y desarrollo web está a tu disposición para brindarte soluciones de calidad. ¡Ponte en contacto con
                            nosotros y descubre cómo podemos ayudarte a destacar en un mundo cada vez más competitivo!<br/>
                        
                        </p>
                    </div>
                </div> 
                        {/* ------------------------------------------------ */}

                                            {/* LATAMCOM */}
                <div className="titleOfProjects">
                    <h4>LatamCom</h4>
                </div>
                <div className="contentProjects">
                    <div className="positionImgProjects">
                        <img src={ImagenesProjects.proyecto2LatamCom} alt="LatamCom" className="imgProjects"></img>
                    </div>
                    <div className="descriptionProjects">
                        <p>
                            <b>LatamCom:</b> E-commerce de compra y venta de productos para toda América Latina <br/>
                            Tecnologías utilizadas: JavaScript, Node.js, Express, React, Redux, Sequelize,<br/>
                             PostgreSQL, EmailJS, Auth0, Cloudinary, Paypal (pasarela de pagos)<br/><br/>
                             Actividades a realizar como invitado:<br/>
                            - Observar productos (detalles, precios, cantidades disponibles)<br/>
                            - Registrarse (mediante la propia aplicación o a través de Google)<br/>
                            - Solicitar información (enviando un correo o por chatbot)<br/><br/>

                            Actividades a realizar como usuario:<br/>
                            - Idem de actividades como invitado<br/>
                            - Comprar productos mediante Paypal<br/>
                            - Realizar comentarios (redactar mensajes, colocar rating, reportar otros comentarios)<br/>
                            - Perfil personal (figuran las compras realizadas y la información personal)<br/><br/>

                            Actividades como administrador:<br/>
                            -Idem de actividades como usuario (sin poder comprar productos)<br/>
                            - Visualizar productos comprados por usuarios (cantidad, monto unitario y total, usuario)<br/>
                            - Agregar, actualizar y eliminar productos y comentarios 
                            
                        </p>
                    </div>
                </div>
                        {/* ------------------------------------------------ */}

                                        {/* HENRY COUNTRIES */}

                <div className="titleOfProjectsHC">
                    <h4>HenryCountries</h4>
                </div>
                <div className="contentProjectsHC">
                    <div className="positionImgProjects">
                        <img src={ImagenesProjects.proyecto1HenryCountries} alt="HenryCountries" className="imgProjects"></img>
                    </div>
                    <div className="descriptionProjects">
                        <p>
                            <b>Henry Countries:</b> aplicación que muestra los países de una api externa. <br/>
                            Tecnologías utilizadas: JavaScript, Node.js, Express, React, Redux, Sequelize, PostgreSQL.<br/>
                            Dentro se pueden acceder las siguientes actividades:<br/>
                            - Filtrar, ordenar y buscar países<br/>
                            - Crear actividades<br/>
                            - Visualizar detalles de los países y sus respectivas actividades  
                        </p>
                    </div>
                </div> 
                        {/* ------------------------------------------------ */}

                        
            </div>

        </div>
    )
}

export default Projects