import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* <div className="logo">MyPortfolio</div> */}
        <div className="logo" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#00bcd4" viewBox="0 0 24 24">
    <path d="M8.7 16.7 4 12l4.7-4.7 1.4 1.4L6.8 12l3.3 3.3-1.4 1.4Zm6.6 0-1.4-1.4 3.3-3.3-3.3-3.3 1.4-1.4L20 12l-4.7 4.7Z"/>
  </svg>
  <span>Ankita.</span>
</div>

        <ul className="nav-links">
          {/* <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/certificates">Certificates</Link></li>
          <li><Link to="/contact">Contact</Link></li> */}

          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            About
          </NavLink>
          <NavLink to="/resume" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Resume
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Projects
          </NavLink>
          <NavLink to="/certificates" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Certificates
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Contact
          </NavLink>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

