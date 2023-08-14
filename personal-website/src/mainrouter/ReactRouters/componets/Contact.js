import React from "react";
import "./css/Contact.css";
const Contact = () => {
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
                    <form>
                        <div className="input">
                            <input id="first-name" />
                            <label for="first-name" >Your Name</label>
                        </div>
                      
                        <div className="input">
                            <input id="subject" />
                            <label for="subject" >Email</label>
                        </div>
                        <div className="input">
                            <textarea id="message" ></textarea>
                            <label for="message" >Message</label>
                        </div>
                        <div className="input">
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
