import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <Link to="/" className="nav-link">Homess</Link>
                </li>
                <li className="nav-item">
                <Link to="/about" className="nav-link" href="#">About Us</Link>
                </li>
                <li className="nav-item">
                <Link to="/contact" className="nav-link" href="#">Contact Us</Link>
                </li>
               
                </ul>
               
            </div>
      </nav>
    </div>
  )
}

export default Navbar
