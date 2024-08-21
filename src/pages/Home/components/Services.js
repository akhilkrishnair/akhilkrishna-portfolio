import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className="services">
        <Link className="service-link" to={"resume"} >
            <div className="my-cv">Resume</div>
        </Link>
        <Link className="service-link" to={"projects"}>
            <div className="projects">Projects</div>
        </Link>
        <Link className="service-link" to={"contact"}>
            <div className="contact-me">Contact</div>
        </Link>
    </div>
  )
}

export default Services