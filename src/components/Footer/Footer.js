import React from 'react';
import './Footer.css';
import {FaLinkedin, FaGithub} from 'react-icons/fa/';
import personalInfo from 'data/personalInfo';


const Footer = ({darkMode}) => {
    const { name, email, phone, linkedInLink, gitHubLink} = personalInfo 
  return (
    <div className='footer-container'>
        <h3>Phone <br/><div className={`detail ${darkMode?'dark':''}`}>{phone}</div></h3>
        <h3>Email <br/><div className={`detail ${darkMode?'dark':''}`}>{email}</div></h3>
        <h3>Follow me<br/>
            <a 
            className={`social-media-links ${darkMode?'dark':''}`}  
            href={linkedInLink} 
            target='_black' rel="noreferrer"  >
                <div className='icon'>
                    <FaLinkedin size={25} />
                </div>
            </a>
            <a 
            className={`social-media-links ${darkMode?'dark':''}`} 
            href={gitHubLink} 
            target='_blank' rel="noreferrer" >
                <div className='icon'>
                    <FaGithub size={25} />
                </div>
            </a>
        </h3>
        <h3 className={`detail ${darkMode?'dark':''}`}> © 2023 By {name}</h3>
    </div>
  )
}

export default Footer