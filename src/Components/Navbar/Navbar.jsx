import React from 'react'
import "./Navbar.css"
import { LinearGradient } from 'react-text-gradients'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="left-navbar">
            <LinearGradient
              className='left-navbar-logo'
              gradient={['to left', '#17acff ,#ff68f0']}
            >
                  
            </LinearGradient>
            <LinearGradient
              className='left-navbar-text'
              gradient={['to left', '#17acff ,#ff68f0']}
            >
              Linux-DEX
            </LinearGradient>
        </div>
        <div className="right-navbar">
          <ul>
            <li>
              <a href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">
                About
              </a>
            </li>
            <li>
              <a href="#">
                Skills
              </a>
            </li>
            <li>
              <a href="#">
                My Work
              </a>
            </li>
            <li>
              <a href="#">
                Experience
              </a>
            </li>
            <li>
              <a href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="space"></div>
      </div>
    </>
  )
}

export default Navbar
