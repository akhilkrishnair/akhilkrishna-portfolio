import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link,NavLink } from "react-router-dom";
import { FaBars,FaTimes } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";


const Navbar = ({setDarkMode,darkMode}) => {

    const [menuclass,setMenuClass] = useState("navlinks-container");

    const [linksClass, setLinksClass] = useState('')

    useEffect(() => {
        if(darkMode) setLinksClass('links dark')
        else setLinksClass('links')
    },[darkMode])
     
    const showMenu = () => {
          setMenuClass("navlinks-container menu-clicked");
    }
    
    const hideMenu = () => {
        setMenuClass("navlinks-container");
    }

    const handleDarkMode = () => {
        let bodyElement =  document.getElementsByTagName('body')[0]
        if(darkMode){
            setDarkMode(false)
            bodyElement.classList.remove('dark')
        }else{
            setDarkMode(true)
            bodyElement.classList.add('dark')
        }
    }


    return (
        <>
            <div id={linksClass} className={`nav-container ${darkMode?'dark':''}`}>
                <div className="my-name">
                    <div onClick={handleDarkMode} className="rounded"></div>
                    <Link className={`name-link ${darkMode?'dark':''}`} to={"/"} >
                    <span className="letter-a">A</span>khil <span className="letter-a">K</span>rishna
                    <span className="role"> Developer</span> <HiOutlineDesktopComputer />
                    </Link>
                </div>
                    <FaBars onClick={showMenu} className="fa-bars" />
                <ul className={menuclass}>

                    <FaTimes onClick={hideMenu} className="fa-close-Btn"/>

                    <li className="top-navlink">
                        <NavLink onClick={hideMenu} className={linksClass} to={"resume"}>
                            Resume
                        </NavLink>
                    </li>
                    <li className="pipe-symbols">
                        |
                    </li>
                    <li>
                        <NavLink onClick={hideMenu} className={linksClass} to={"projects"}>
                            Projects
                        </NavLink>
                    </li>
                    <li className="pipe-symbols" >
                        |
                    </li>
                    <li>
                        <NavLink onClick={hideMenu} className={linksClass} to={"contact"}>
                            Contact
                        </NavLink>
                    </li>

                </ul>
            </div>
        </>
    );
};

export default Navbar;
