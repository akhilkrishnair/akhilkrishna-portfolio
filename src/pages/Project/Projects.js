import React from "react";
import './Projects.css';
import { chatApplication, eCommerce } from "data/projects";
import Project from "./components/Project";


const Projects = () => {
    
    return (
        <main>
            <h1>Projects</h1>
            <Project project={chatApplication} />
            <Project project={eCommerce} />
        </main>
    );
};

export default Projects;
