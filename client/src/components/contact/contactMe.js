import s from "./contact.css"
import image from "../img/ContactMe2.jpg"

const ContactMe = ()=>{

    return(
        <div className="backgroundContactMe">

            <div className="titleContactMe">
                <h3>Contactame</h3>
            </div>

            <div className="contentContactMe">
                <p>
                    Formulario de correo
                    Posibles reseñas de personas con las que he trabajado 

                </p>
            </div>

            <div className="backgroundImgContactMe">
                <img src={image} alt="ContactMe img"></img>
            </div>

            <div className="backgroundColorContactMe"></div>

        </div>
    )
}

export default ContactMe