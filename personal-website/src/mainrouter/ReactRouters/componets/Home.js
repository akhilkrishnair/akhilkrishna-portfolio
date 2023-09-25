import React from "react";
import "./css/Home.css";
import akhil from "./images/akhil.jpg";
import { Link } from "react-router-dom";
import git from "./icons/git.png";
import django from './icons/django.png';
import python from './icons/python.png';
import jscript from './icons/jscript.png';
import react from './icons/react.png';
import mysql from './icons/mysql.png';
import postgres from './icons/postgres.png';
import css from './icons/css.png';

const Home = () => {
    return (
        <div className="bio-container">





            <div className="img-container">
                <div className="social-media-icon-profile git">
                    
                    <img src={git} alt="git.png" />
                </div>
                <div className="social-media-icon-profile python">
                <img src={python} alt="python.png" />

                </div>
                <div className="social-media-icon-profile javascript">
                <img src={jscript} alt="javascript.png" />
                </div>
                <div className="social-media-icon-profile django">
                <img src={django} alt="django.png" />

                </div>
                <div className="social-media-icon-profile react">
                <img src={react} alt="react.png" />

                </div>
                <div className="social-media-icon-profile rest-api">
                <img src={css} alt="css.png" />

                </div>
                <div className="social-media-icon-profile mysql">
                <img src={mysql} alt="mysql.png" />

                </div>
                <div className="social-media-icon-profile sql">
                <img src={postgres} alt="postgres.png" />

                </div>

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
                    <Link className="service-link">
                        <div className="my-cv">Resume</div>
                    </Link>
                    <Link className="service-link" to={"Projects"}>
                        <div className="projects">Projects</div>
                    </Link>
                    <Link className="service-link" to={"Contact"}>
                        <div className="contact-me">Contact me</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
