import React from 'react'

const Project = ({project}) => {
    const {
        title,
        description,
        description2,
        description3,
        technologiesUsed,
        keyFeatures,
    } = project

    const renderProjectLinks = () => {
        return (
            <div className='each-details-container project-links'>
                <h3>Links </h3> 
                <ul>
                    <li><a href='https://e-shop-personal-af87f.web.app/#/' target='_blank' >Live Demo</a></li>
                    <li>GitHub Repository <a href='#' target='_blank' > Backend</a> | <a href='#' target='_blank' >Frontend</a> </li>
                </ul>
            </div>
        )
    }

    const renderTechnologiesUsed = () => {
        if(technologiesUsed){
            return (
                <div className='each-details-container technologies-used'>
                    <h3>Technologies Used </h3> 
                    {technologiesUsed}
                </div>
            )
        }
    }

    const renderKeyFeatures = () => {
        if(keyFeatures){
            return (
                <div className='each-details-container key-features'>
                    <h3> Key Features Implemented: </h3> 
                    <ul className='key-features'>
                        {keyFeatures.map(kf => <li><b>{kf.title} : </b>{kf.description}</li>)}
                    </ul>
                </div>
            )
        }
    }

    return (
        <div className="container">

            <div className="left-section">
                <div className="proj-title">{title}</div>
                <div className="description">{description}</div>
                {description2&&<><br/> <div className="description">{description2}</div></>}
                {description3&&<><br/> <div className="description">{description3}</div></>}
            </div>

            <div className="right-section">
                <div className="proj-video-container">
                    <iframe className='proj-video' width="964" height="523" src="https://www.youtube.com/embed/IYQ-qLFd0Ow?autoplay=0&mute=1" title="CSS Selectors, Combinators, Logical Properties | Css malayalam | web development tutorial" frameborder="0" allow="accelerometer; autoplay; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            {renderProjectLinks()}
            
            {renderTechnologiesUsed()}

            {renderKeyFeatures()}
                
        </div>
    )
}

export default Project