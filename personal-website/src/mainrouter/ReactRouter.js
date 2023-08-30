import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./ReactRouters/componets/Home";
import Footer from "./ReactRouters/componets/Footer";
import Navbar from "./ReactRouters/componets/Navbar";
import Projects from "./ReactRouters/componets/Projects";
import Contact from "./ReactRouters/componets/Contact";


const ReactRouter = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element= {<Home/>} />
                <Route path="Projects" element = {<Projects/>} />
                <Route path="Contact" element = {<Contact/>} />
            </Routes>
            <Footer/>
        </div>
    );
};

export default ReactRouter;
