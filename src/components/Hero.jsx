import React from 'react';
import { useNavigate } from "react-router-dom";
import './Hero.css'; // We’ll write the CSS next
import profilePic from '../assets/profile.jpg'; // Put your profile image in /src/assets/

function Hero() {
  const navigate = useNavigate();
  return (
    
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="greeting">HELLO!</p>
          <h1>I Am Ankita Gupta</h1>
          <p className="description">
            I'm an aspiring AI/ML Engineer and Full Stack Developer with a passion for creating impactful applications.
          </p>
          <div className="hero-buttons">
            {/* <button className="btn-primary">View Work</button>
            <button className="btn-secondary">Hire Me</button> */}
            <button onClick={() => navigate("/projects")}>View Work</button>
            <button onClick={() => navigate("/contact")}>Hire Me</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={profilePic} alt="Ankita Gupta" />
        </div>
      </div>
      <div className="blob"></div>
    </section>
  );
}

export default Hero;
