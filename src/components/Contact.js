import React, { useState } from "react";
import "./style/Contact.css"


const ContactForm = (props) => {
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
        return re.test(String(email).toLowerCase());
      }
      

    const [enteredName, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredMessage, setEnteredMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState('');

    const enteredNameHandler = (event) => {
        setEnteredName(event.target.value)
    }

    const enteredEmailHandler = (event) => {
        setEnteredEmail(event.target.value)
    }

    const enteredMessageHandler = (event) => {
        setEnteredMessage(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const contactData = {
            name: enteredName,
            email: enteredEmail,
            message: enteredMessage
        };

        if (!validateEmail(enteredEmail)) {
            setErrorMessage('Email is invalid');
               console.log("invalid email")
            return;
         
        } 

        
        setEnteredName("");
        setEnteredEmail("");
        setEnteredMessage("");
        console.log(contactData)
    }

return (
    <div >
        <form onSubmit={submitHandler}>
            <div className="form">
                <div>
                    {/* <label>Name</label> */}
                    <input type="text" placeholder="Name" value={enteredName} onChange={enteredNameHandler}/>
                </div>
                <div>
                    {/* <label>Email</label> */}
                    <input type="email" placeholder="email" value={enteredEmail} onChange={enteredEmailHandler}/>
                </div>
                <div>
                    {/* <label>Message</label> */}
                    <input className="message" type="text" placeholder="message" value={enteredMessage} onChange={enteredMessageHandler}/>
                </div>
            </div>
            <div>
            <button type="submit" className="btn btn-secondary">Submit</button>
            </div>
        </form>
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
    
)

}

export default ContactForm