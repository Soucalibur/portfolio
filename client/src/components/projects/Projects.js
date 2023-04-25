import s from "./Projects.css"
import ImagenesProjects from "../helper/imgProyects/imagenesProjects"

const Projects = ()=>{


    return(
        <div className="mainContainerProjects" id="Proyectos">

            <div className="containerShowSecondProjects" id="segundoProjects"> 

                <div className="titleProjects"> 
                    <h4>PROJECTS</h4>
                </div>

                <div className="titleOfProjects">
                    <h4>HenryCountries</h4>
                </div>
                <div className="contentProjects">
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

            </div>

        </div>
    )
}

export default Projects