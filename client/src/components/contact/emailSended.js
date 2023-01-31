import Imagenes from "../img/imagenes"

const EmailSended = ()=>{

    return(
        <div className="backgroundEmailSended">
            <div className="titleEmailSended">
                <h3>¡Mensaje Enviado!</h3>
            </div>
            <div className="mesaggeEmailSended">
                <h4>En la brevedad estaré respondiendo</h4>
                <h4>Muchas gracias por su tiempo y que tengas un buen día</h4>
            </div>
            <div className="backgroundColorEmailSended"></div>
            <img src={Imagenes.backgroundEmailSended} alt="backImgEmailSended" className="backgroundImgEmailSended"></img>
        </div>
    )
}

export default EmailSended