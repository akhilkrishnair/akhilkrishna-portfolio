import React from "react";
import "./css/Home.css";
import akhil from "./images/akhil.jpg";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="bio-container">
            <div className="img-container">
                <div className="img">

                <img className="image" src={akhil} alt="akhil.jpg" />
                </div>
            </div>
            <div className="about-me">
                <div className="hello">Hello</div>
                <h3>&nbsp;A bit about me</h3>
                <p>
                    &nbsp;I'm a <span className="pyth">Pyth</span>
                    <span className="dj">on Dj</span>
                    <span className="ngo">ango</span>{" "}
                    <span className="react">
                        React <span className="js">JS</span>
                    </span>{" "}
                    Developer, <br />
                    &nbsp;specialiazed in web technologies
                </p>

                <div className="services">
                    <Link className="service-link" >
                        <div className="my-cv">Resume</div>
                    </Link>
                    <Link className="service-link" to={"Projects"} >
                        <div className="projects">Projects</div>
                    </Link>
                    <Link className="service-link" to={"Contact"} >
                        <div className="contact-me">Contact me</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
