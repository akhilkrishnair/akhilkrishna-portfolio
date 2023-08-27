import React from "react";
import './css/Project.css';
import ecom from './images/ecommerce.jpg'


const Projects = () => {
    return (
        <div className="main">
            <h1>Projects</h1>


            <div className="container">
                <div className="left-section">
                    <div className="proj-title">Social Project </div>
                    <div className="description">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</div>
                </div>
                <div className="right-section">
                    <div className="proj-img-container">
                        <img src={ecom} className="proj-image" alt="project" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="left-section">
                    <div className="proj-title">Ecommerce Project </div>
                    <div className="description">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</div>
                </div>
                <div className="right-section">
                    <div className="proj-img-container">
                        <img src={ecom} className="proj-image" alt="project" />
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="left-section">
                    <div className="proj-title">PSC study meterial Project </div>
                    <div className="description">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</div>
                </div>
                <div className="right-section">
                    <div className="proj-img-container">
                        <img src={ecom} className="proj-image" alt="project" />
                    </div>
                </div>
            </div>







        </div>
    );
};

export default Projects;
