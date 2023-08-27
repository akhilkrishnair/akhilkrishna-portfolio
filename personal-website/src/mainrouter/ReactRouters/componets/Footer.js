import React from 'react'
import './css/Footer.css'
import {FaLinkedin, FaGithub} from 'react-icons/fa/';

const Footer = () => {
  return (
    <div className='footer-container'>
        <h3>Phone <br/><div className='detail'>98-95-04-77-16</div></h3>
        <h3>Email <br/><div className='detail'>akhilkrishnair@gmail.com</div></h3>
        <h3>Follow me<br/><a className='social-media-links' href='https://www.linkedin.com/in/akhil-krishna-ir/' target='_black' rel="noreferrer"  ><div className='icon'><FaLinkedin/></div></a><a className='social-media-links' href='https://github.com/akhilkrishnair' target='_blank' rel="noreferrer"  ><div className='icon'><FaGithub/></div></a></h3>
        <h3 className='detail'> © 2023 By Akhil Krishna.</h3>

    </div>
  )
}

export default Footer