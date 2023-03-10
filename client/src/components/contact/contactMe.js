import {useState, useRef } from "react"
import { useHistory } from 'react-router-dom';
import emailjs from 'emailjs-com';

import s from "./contact.css"
import Imagenes from "../img/imagenes";

const validate = (input) =>{
    let errors = {}

    let regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

	if (!input.name || input.name?.trim() >= 1) {
		errors.name = 'Introduce a name!';
	} else if (!regexEmail.test(input.email)) {
		errors.email = 'Introduce a valid email!';
	} else if (!input.subject) {
		errors.subject = 'Introduce a subject';
	}else if (!input.message.length) {
		errors.message = 'Message is required!';
	}
	const sendButton = document.getElementById('sendButtom');

	if (Object.entries(errors).length) {
		sendButton.disabled = true;
	} else {
		sendButton.disabled = false;
	}
    

    return errors
}

const ContactMe = ()=>{

    const form = useRef()
    const history = useHistory()

    const [input, setInput]= useState({
        name: "",
        subject:"",
        email:"",
        message: "",
    })

    const [error, setError]= useState({
        name: "",
        subject:"",
        email:"",
        message: "",
    })

    const verify = (event)=>{
        const {name, value} = event.target

        setInput({...input,[name]:value})
        setError(validate({...input,[name]:value}))

    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_whuelqj', 'template_portfolio', form.current, '9phUVeXmt1vnt_ANR')
          .then((result) => {
              console.log(result.text);
              history.push("/contactme/emailsended")
          }, (error) => {
              console.log(error.text);
          });
    
    };


    return(
        <div className="backgroundContactMe">

            <div className="titleContactMe">
                <h3>Contactame</h3>
            </div>

            <div className="contentContactMe">
                <form ref={form} onSubmit={sendEmail}>
                    
                    <label className="labelContactMe">Nombre</label> 
                    <input 
                        name="name" 
                        type="text"
                        value={input.name} 
                        onChange={verify} 
                        autoComplete='off'
                        placeholder="Introduce tu nombre..."
                        className="inputContactMe"
                    />
                    {error? <p>{error.name}</p> : ""}
                    
                    <label className="labelContactMe">Email</label>
                    <input 
                        name="email" 
                        value={input.email} 
                        onChange={verify}
                        autoComplete='off'
                        placeholder="Introduce tu email: ejemplo@outlook.com..." 
                        className="inputContactMe"
                    />
                    {error ? <p>{error.email}</p> : ""}

                    <label className="labelContactMe">Tema</label>
                    <input 
                        name="subject" 
                        value={input.subject} 
                        onChange={verify}
                        autoComplete='off'
                        placeholder="Introduce tu raz??n de contactarme..." 
                        className="inputContactMe"
                    />
                    {error ? <p>{error.subject}</p> : ""}


                    <label className="labelContactMe">Mensaje</label>
                    <textarea 
                        name="message" 
                        value={input.message} 
                        onChange={verify} 
                        autoComplete='off'
                        placeholder="Introduce tu mensaje..."
                        className="messageContactMe"
                    />
                    {error ? <p>{error.message}</p> : ""}

                    <input 
                        type="submit"
                        value="SEND"
                        id="sendButtom"
                        className="sendButtonContactMe"
                        disabled 
                    />
                </form>
            </div>

            <div>
                <img src={Imagenes.backgroundContactMe} alt="ContactMe img" className="backgroundImgContactMe"></img>
            </div>

            <div className="backgroundColorContactMe"></div>

        </div>
    )
}

export default ContactMe