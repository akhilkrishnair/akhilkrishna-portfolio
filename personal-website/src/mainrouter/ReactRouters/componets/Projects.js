import React from "react";
import './css/Project.css';


const Projects = () => {
    return (
        <div className="main">
            <h1>Projects</h1>
            <div className="container">
                <div className="left-section">
                    <h3>Project name</h3>
                    <p>lorem words not available</p>
                </div>
                <div className="right-section">
                    <div className="img-container">
                        <img className="image" alt="project" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
