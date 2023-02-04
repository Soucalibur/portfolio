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
            <div className="informationEmailSended">
                <p>Si necesitas buscarme por otros medios, puedes hacerlo por: </p>
            </div>
            <div className="informationEmailSended">
                <p>Gmail: matthewgallar2112@gmail.com</p>
            </div>
            <div className="informationEmailSended">
                <p>Outlook: matthewgallar2112@outlook.com</p>
            </div>
            <div className="informationEmailSended">
                <p>Tel: (+54) 2613006290</p>
            </div>
            <div className="backgroundColorEmailSended"></div>
            <img src={Imagenes.backgroundEmailSended} alt="backImgEmailSended" className="backgroundImgEmailSended"></img>
        </div>
    )
}

export default EmailSended