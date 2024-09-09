import React, { useEffect, useState } from "react";
import './Projects.css';
import { chatApplication, eCommerce } from "data/projects";
import Project from "./components/Project";
import ImagePopUpView from "components/ImagePopUpView/ImagePopUpView";


const Projects = () => {

    const [previewImage, setPreviewImage] = useState("");

    useEffect(() => {
        window.scroll(0,0)
    },[])

    return (
        <main>

            {previewImage&&<ImagePopUpView previewImage={previewImage} setPreviewImage={setPreviewImage} />}

            <h1>Projects</h1>
            <Project setPreviewImage={setPreviewImage} project={chatApplication} />
            <Project setPreviewImage={setPreviewImage} project={eCommerce} />
        </main>
    );
};

export default Projects;
