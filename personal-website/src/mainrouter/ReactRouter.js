import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./ReactRouters/componets/Home";
import Footer from "./ReactRouters/componets/Footer";
import Navbar from "./ReactRouters/componets/Navbar";
import Projects from "./ReactRouters/componets/Projects";
import Contact from "./ReactRouters/componets/Contact";
import Otherpages from "./ReactRouters/componets/Otherpages";


const ReactRouter = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element= {<Home/>} />
                <Route path="projects" element = {<Projects/>} />
                <Route path="contact" element = {<Contact/>} />
                <Route path="*" element = {<Otherpages/>} />
            </Routes>
            <Footer/>
        </div>
    );
};

export default ReactRouter;
