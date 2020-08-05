import React from 'react'
import {Link} from 'react-router-dom'
function Header() { 
    return (
        <header id="header">
            <div className="container main-menu">
                <div className="row align-items-center justify-content-between d-flex">
                    <div id="logo">
                        <Link to="./"><img src="img/logo.png" alt="" className="logo" /></Link>
                    </div>
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/resume">Resume</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>{/* #nav-menu-container */}
                </div>
            </div>
        </header>
    )
}

export default Header