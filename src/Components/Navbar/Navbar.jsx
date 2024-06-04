import "./Navbar.css"
import { LinearGradient } from 'react-text-gradients'
import { useState } from "react"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  
  return (
    <>
      <div className="navbar">
        <div className="left-navbar">
            <LinearGradient
              className='left-navbar-logo'
              gradient={['to left', '#17acff ,#ff68f0']}
            >
              LL   
            </LinearGradient>
            <LinearGradient
              className='left-navbar-text'
              gradient={['to left', '#17acff ,#ff68f0']}
            >
              Linux-DEX
            </LinearGradient>
        </div>
        <div className={toggleMenu ? "right-navbar active" : "right-navbar"}>
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
        <div id="mobile" onClick={() => setToggleMenu(!toggleMenu)}>
          <i id="bar" className={toggleMenu ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </>
  )
}

export default Navbar
