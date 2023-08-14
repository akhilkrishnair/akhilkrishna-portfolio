import React from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {

 

    return (
        <>
            <div className="nav-container">
                <div className="my-name">
                    <div className="rounded"></div>
                    <Link className="name-link" to={"/"} >
                    <span className="letter-a">A</span>khil <span className="letter-a">K</span>rishna
                    <span className="role"> Developer</span>
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link className="links" to={"/"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        |
                    </li>

                    <li>
                        <Link className="links" to={"projects"}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        |
                    </li>

                    <li>
                        <Link className="links" to={"contact"}>
                            Contact me
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
