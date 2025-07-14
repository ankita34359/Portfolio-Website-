import React from 'react';
import './Resume.css';
import { FaLaptopCode, FaHtml5 } from 'react-icons/fa';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Resume() {
  return (
    <div className="resume-page">
      <h2 className="resume-title">Explore My Roles</h2>
      <p className="resume-subheading">
        Tailored resumes for different roles I specialize in.
      </p>

      <div className="resume-cards">
        {/* Full Stack Developer Card */}
        <div className="resume-card">
          <h3>
            <FaLaptopCode className="role-icon" /> 
            Full Stack Web Developer 
            </h3>
          <p>
            Skilled in building scalable web applications using React, Node.js, MongoDB, and Express. 
            Passionate about end-to-end development and deploying efficient solutions.
          </p>
          <a
            href="/resumes/FullStack_Resume.pdf"
            download="FullStack_Resume.pdf"
            className="download-btn"
          >
            Download Resume
          </a>
        </div>

        {/* Frontend Developer Card */}
        <div className="resume-card">
          <h3>
            <FaHtml5 className="role-icon" />
            Frontend Developer
            </h3>
          <p>
            Specializes in creating responsive UI using React, HTML, CSS, and JavaScript. 
            Focused on user experience, accessibility, and modern design systems.
          </p>
          <a
        //   Rename it as per your pdf name
            href="/resumes/FullStack_Resume.pdf"
            download="FullStack_Resume.pdf"
            className="download-btn"
          >
            Download Resume
          </a>
        </div>

        {/* Machine Learning Engineer Card */}
        <div className="resume-card">
          <h3>
            <GiArtificialIntelligence className="role-icon" />
            Machine Learning Engineer
            </h3>
          <p>
            Experienced in building ML models with Python, scikit-learn, TensorFlow, and real-world datasets. 
            Interested in AI solutions for automation and decision-making.
          </p>
          <a
        //   Rename it as per your pdf name
           href="/resumes/FullStack_Resume.pdf"
            download="FullStack_Resume.pdf"
            className="download-btn"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
