import React from "react";
import "./css/Home.css";
import akhil from "./images/akhil.jpg";
const Home = () => {
    return (
        <div className="bio-container">
            <div className="img-container">
                <img className="image" src={akhil} />
            </div>
            <div className="about-me">
                <div className="hello">Hello</div>
                <h2>&nbsp;A bit about me</h2>
                <p>
                    &nbsp;I'm a <span className="pyth">Pyth</span>
                    <span className="dj">on Dj</span>
                    <span className="ngo">ango</span> <span className="react">React</span> Developer, <br />
                    &nbsp;specialiazed in web technologies
                </p>

                <div className="services">
                    <div className="my-cv">Resume</div>
                    <div className="projects">Projects</div>
                    <div className="contact-me">Contact me</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
