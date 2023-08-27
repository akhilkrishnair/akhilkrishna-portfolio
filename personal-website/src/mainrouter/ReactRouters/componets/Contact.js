import React, { useRef,useState } from 'react';
import "./css/Contact.css";
import emailjs from '@emailjs/browser';


const Contact = () => {
  
    const [successmsg,setSuccessmsg] = useState("")
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_j7vqcys', 'template_se7kjno', form.current, 'hfRWiExAtPMRrdmAZ')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              setSuccessmsg("Thanks for contacting me");
          }, (error) => {
              console.log(error.text);
          });
      };
    



    return (
        <div className="main">
            <h1>Contact</h1>
            <div className="contact-container">
                <div className="address">
                  <h3>Phone</h3>
                  <p>98-95-04-77-16</p><br/>
                  <h3>Email</h3>
                  <p>akhilkrishnair@gmail.com</p><br/>
                  <h3>Location</h3>
                  <p>Kerala</p>

                </div>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail} >
                        <div className="input">
                            <input type="text" name="user_name" id="first-name" required/>
                            <label  >Your Name</label>
                        </div>
                      
                        <div className="input">
                            <input type="email" name="reply_to" id="subject" required/>
                            <label  >Email</label>
                        </div>
                        <div className="input">
                            <textarea name='message' id="message" required ></textarea>
                            <label >Message</label>
                        </div>
                        <div className="input">
                            <button type="submit" >Submit</button>
                        </div>
                    </form>
                  <p className='successmsg'>{successmsg}</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
