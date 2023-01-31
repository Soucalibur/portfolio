import image from "../img/Proyects.jpg"
import s from "./projects.css"
import Imagenes from "../img/imagenes"

const Projects = ()=>{

    return(
        <div className="backgroundProjects">


            <div className="titleProjects"> 
                <h3>Projects</h3>
            </div>

            <div className="flexContainerProjects">

                

                <div className="contentProjects">
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
                    <div>
                        <img src={Imagenes.HenryCountries} alt="HenryCountries" className="imgProjects"></img>
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
                    <div>
                        <img src={Imagenes.LatamCom} alt="LatamCom" className="imgProjects"></img>
                    </div>
                </div>

            </div>

            <div >
                <img src={image} alt="projects img" className="backgroundImgProjects"></img>
            </div>

            <div className="backgroundColorProjects"></div>

        </div>
    )
}

export default Projects