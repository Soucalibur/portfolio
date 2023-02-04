import Imagenes from "../img/imagenes"
import s from "./home.css"

const Home = ()=>{
    return(
        <div className="backgroundHome">
            <div className="backHome"></div>

            <div className="titleHome">
                <h3>FullStack Web Developer</h3>
                <h4 className="subtitleHome">Matthew Gallar</h4>
            </div>
            
            
            <div className="descriptionHome">
                <p>
                    Desarrollador web con fortaleza en Front end, apasionado con el mundo de la programación en 
                    búsqueda del fortalecimiento de tecnologías adquiridas y nuevos desafíos que me permitan 
                    perfeccionar mi carrera.

                </p>
            </div>

            <div >
                <img src={Imagenes.backgroundHome} alt="HomeImg" className="backgroundImgHome" />
            </div>

        </div>
    )
}

export default Home