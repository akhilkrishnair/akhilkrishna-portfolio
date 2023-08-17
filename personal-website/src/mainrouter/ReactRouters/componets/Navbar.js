import React from "react";
import "./css/Navbar.css";
import { Link,NavLink } from "react-router-dom";

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
                        <NavLink className="links" to={"/"}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        |
                    </li>

                    <li>
                        <NavLink className="links" to={"projects"}>
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        |
                    </li>

                    <li>
                        <NavLink className="links" to={"contact"}>
                            Contact me
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
