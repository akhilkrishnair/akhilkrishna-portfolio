import './Services.css';
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className="services">
        <Link className="service-link my-cv" to={"resume"} >
            <div className="my-cv">Resume</div>
        </Link>
        <Link className="service-link projects" to={"projects"}>
            <div className="projects">Projects</div>
        </Link>
        <Link className="service-link contact-me" to={"contact"}>
            <div className="contact-me">Contact</div>
        </Link>
    </div>
  )
}

export default Services