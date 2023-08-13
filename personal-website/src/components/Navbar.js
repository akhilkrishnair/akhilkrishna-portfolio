import React from 'react'
import './css/Navbar.css'
const Navbar = () => {
  return (
    <>
    <div className='nav-container'>
        
        <div className='my-name'><div className='rounded'></div><span className='letter-a'>A</span>khil <span className='letter-a'>K</span>rishna <span className='role'> Developer</span></div>
        <ul>
            <li><a>Home</a></li>
            <li><a>|</a></li>

            <li><a>Projects</a></li>
            <li><a>|</a></li>

            <li><a>Contact me</a></li>

        </ul>
    </div>
    </>
  )
}

export default Navbar