import React, { useEffect } from "react";
import "./Home.css";
import ProfileImage from "./components/ProfileImage";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";

const Home = () => {
    useEffect(() => {
        window.scroll(0,0)
    },[])
    return (
        <div className="bio-container">
            <ProfileImage />
            <div className="about-me">
                <AboutMe />
                <Services />
            </div>
        </div>
    );
};

export default Home;
