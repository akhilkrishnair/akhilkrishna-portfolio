import React, { useRef, useState } from 'react';
import "./Contact.css";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'


const Contact = () => {
  
    const [isSubmiting, setIsSubmiting] = useState(false);
    const form = useRef();

    const setSuccessmsg = () =>  Swal.fire(
        'Message received',
        'Thank You for contacting me i will replay soon',
        'success'
    )

    const sendEmail = (e) => {
        setIsSubmiting(true)
        e.preventDefault();
    
        emailjs
        .sendForm('service_j7vqcys', 'template_se7kjno', form.current, 'hfRWiExAtPMRrdmAZ')
        .then((result) => {
            // console.log(result.text);
            e.target.reset();
            setSuccessmsg();
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            setIsSubmiting(false)
        })
    };
    

    return (
        <main>
            <h1>Contact</h1>
            <div className="contact-container">
                <div className="address">
                  <h3>Phone</h3>
                  <p className='phone'>98-95-04-77-16</p><br/>
                  <h3>Email</h3>
                  <p>akhilkrishnair@gmail.com</p><br/>
                  <h3>Location</h3>
                  <p>Kerala</p>

                </div>
                <div className="contact-form">

                    <form ref={form} onSubmit={sendEmail} >
                        <div className="input user-name">
                            <input type="text" name="user_name" id="user-name" required/>
                            <label  >Your Name</label>
                        </div>                     
                        <div className="input email">
                            <input type="email" name="reply_to" id="email" required/>
                            <label  >Email</label>
                        </div>
                        <div className="input subject">
                            <input type="text" name="subject" id="subject" required/>
                            <label  >Subject</label>
                        </div>
                        <div className="input message">
                            <textarea name='message' id="message" required ></textarea>
                            <label >Message</label>
                        </div>
                        <div className="input submit-btn">
                            <button type={isSubmiting?"":"submit"} >
                                {isSubmiting?<div className='loader'></div>:"Submit"}
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </main>
    );
};

export default Contact;
