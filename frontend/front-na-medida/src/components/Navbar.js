import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import '../navbar.css'

const Navbar = () => {
    return (
        <div className='theNavbar'>
            <Link to="/" className="nav-link">
                <img style={{width:"10rem"}} id="logo-img" src={require("../logo.jpg")} />
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/about" className="nav-options">
                            Sobre nós
                        </Link>
                    </li>
                    <li>
                        <Link to="/solutions" className="nav-options" >
                            Soluções
                        </Link>
                    </li>
                    <li>
                        <Link to="/cloud" className="nav-options">
                            Cloud
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-options">
                            Contato
                        </Link>
                    </li>
                    <li>
                        <Link to="/portal" className="nav-options">
                            Portal
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default withRouter(Navbar)