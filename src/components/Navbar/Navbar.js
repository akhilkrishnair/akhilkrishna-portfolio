import React, { useState } from "react";
import "./Navbar.css";
import { Link,NavLink } from "react-router-dom";
import { FaBars,FaTimes } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";


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
                    <span className="role"> Developer</span> <HiOutlineDesktopComputer />
                    </Link>
                </div>
                    <FaBars onClick={showMenu} className="fa-bars" />
                <ul className={menuclass}>

                    <FaTimes onClick={hideMenu} className="fa-close-Btn"/>

                    <li className="top-navlink">
                        <NavLink onClick={hideMenu} className="links" to={"resume"}>
                            Resume
                        </NavLink>
                    </li>
                    <li className="pipe-symbols">
                        |
                    </li>
                    <li>
                        <NavLink onClick={hideMenu} className="links" to={"projects"}>
                            Projects
                        </NavLink>
                    </li>
                    <li className="pipe-symbols" >
                        |
                    </li>
                    <li>
                        <NavLink onClick={hideMenu} className="links" to={"contact"}>
                            Contact
                        </NavLink>
                    </li>

                </ul>
            </div>
        </>
    );
};

export default Navbar;
