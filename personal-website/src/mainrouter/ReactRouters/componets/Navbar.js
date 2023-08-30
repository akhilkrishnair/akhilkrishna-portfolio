import React, { useState } from "react";
import "./css/Navbar.css";
import { Link,NavLink } from "react-router-dom";
import { FaBars,FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [menuclass,setMenuClass] = useState("navlinks-container");
     
    const showMenu = () => {
          setMenuClass("navlinks-container menu-clicked");
    }
    
    const hideMenu = () => {
        setMenuClass("navlinks-container");
    }


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
                    <FaBars onClick={showMenu} className="fa-bars" />
                <ul className={menuclass}>
                    <FaTimes onClick={hideMenu} className="fa-close-Btn"/>
                    <li className="top-navlink">
                        <NavLink className="links" to={"/"}>
                            Home
                        </NavLink>
                    </li>
                    <li className="pipe-symbols">
                        |
                    </li>

                    <li>
                        <NavLink className="links" to={"Projects"}>
                            Projects
                        </NavLink>
                    </li>
                    <li className="pipe-symbols" >
                        |
                    </li>

                    <li>
                        <NavLink className="links" to={"Contact"}>
                            Contact me
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
