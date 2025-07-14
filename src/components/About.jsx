import React from 'react';
import './About.css';
import profilePic from '../assets/profile.jpg'; // your photo
import { FaUniversity, FaGraduationCap, FaCode, FaBookOpen, FaStarHalfAlt } from 'react-icons/fa';
import { FaLaptopCode, FaBuilding, FaCalendarAlt, FaProjectDiagram, FaGithub, FaToolbox } from 'react-icons/fa';
import { FaAward } from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';

function About() {
  return (
    <div className="about-page">
      <h2 className="about-title">ABOUT ME</h2>

      <div className="bio-container">
        <div className="bio-description">
            <p>
            Hi, I’m Ankita Gupta, a B.Tech (Hons.) CSE with specilization in CCFDS(Cloud Computing and Full stack Developer). A student passionate about Machine Learning and modern web development. My academic journey has equipped me with a solid foundation in Java, machine learning concepts, and full stack technologies. I’m eager to apply my knowledge in real-world projects and contribute to innovative solutions. I believe in continuous learning and staying updated with the latest advancements in ML and software development.
            </p>
        </div>
        <div className="bio-image">
            <img src="/src/assets/profile.jpg" alt="Ankita Gupta" />
        </div>
        </div>


      <div className="about-cards">
        <div className="about-card">
          <h2><FaUserGraduate className="card-icon" /> Education</h2>

          <p> 
            <FaGraduationCap style={{ marginRight: '8px', color: '#00bcd4' }} />
            <b>Degree: </b>Bachelor of Technology (Hons.) CSE  
            <br></br>
            <br></br>
           <b>
            <FaCode style={{ marginRight: '8px', color: '#00bcd4' }} />
            Specialization: </b> Cloud Computing and Full Stack Development  
            <br></br>
            <br></br>
            <FaStarHalfAlt style={{ marginRight: '8px', color: '#00bcd4' }} />
            <b>CGPA:</b>
              <span style={{
                marginLeft: '10px',
                backgroundColor: '#e0f7fa',
                padding: '4px 12px',
                borderRadius: '12px',
                fontWeight: '500',
                color: '#007c91',
                fontSize: '0.95rem'
              }}>
                8.67 / 10
              </span>
              <span style={{
                marginLeft: '8px',
                fontSize: '0.85rem',
                color: '#666',
                fontStyle: 'italic'
              }}>
              </span>
            <br></br>
            <br></br>
            <b>
            <FaUniversity style={{ marginRight: '8px', color: '#00bcd4' }} />  
            University: </b> Jagran Lakecity University | 2022 – 2026
            <br></br>
            <br></br>
            <FaBookOpen style={{ marginRight: '8px', color: '#00bcd4' }} />
            <b>Academic Highlights: </b>Full Stack Development, Database Systems, Cloud Architecture and more.
            </p>
        </div>

        <div className="about-card">
         <h2><FaBriefcase className="card-icon" /> Experience</h2>

          <div className="about-card-section">
            <FaLaptopCode className="card-icon" />
            <b>Role:</b> Frontend Developer Intern
          </div>

          <div className="about-card-section">
            <FaBuilding className="card-icon" />
            <b>Company:</b> NullClass <span className="location">| Remote</span>
          </div>

          <div className="about-card-section">
            <FaCalendarAlt className="card-icon" />
            <b>Duration:</b> Jan 2025 – May 2025
          </div>

          <div  className="about-card-section">
            <p><FaToolbox style={{ color: '#00bcd4', marginRight: '0.5rem' }} />
            <strong>Tech Stack:</strong> HTML, CSS, JavaScript, React.js
          </p>

          </div>

          <div className="about-card-section">
            <FaProjectDiagram className="card-icon" />
            <b>Project:</b> YouTube Frontend Clone
            <br />
            <a
              href="https://github.com/ankita34359/Web-development-training"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <FaGithub className="card-icon" /> View on GitHub
            </a>
          </div>

          <ul className="experience-points">
            <li>
              Developed a fully functional YouTube front-end clone using <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>React.js</b>.
            </li>
            <li>
              Implemented responsive UI components like video thumbnails, sidebar navigation, and embedded player layout.
            </li>
          </ul>
        </div>

         <div className="about-card">
            <h2><FaAward className="card-icon" /> Achievements</h2>

            <p className="achievement-intro">
              My journey is marked by technical wins, leadership, and creative achievements across academic and co-curricular domains.
            </p>

            <ul className="achievement-list">
              <li>🥇 <strong>1st Place</strong> – Sunstone Hackathon 2023</li>
              <li>🏆 Awarded <strong>Markers Cup</strong> for highest CGPA in my specialization (First Year)</li>
              <li>👩‍💼 <strong>Team Lead</strong> – Twice at national-level hackathons (SIH & Lakecity Hack)</li>
              <li>🥉 <strong>2nd Runner-up</strong> – Group Discussion organized by Sunstone</li>
              <li>🧠 <strong>Top Performer</strong> in various inter-college technical quizzes and competitions</li>
              <li>🎨 <strong>2-time Winner</strong> – Technical Rangoli (Inter-school)</li>
              <li>🏅 <strong>2nd Runner-up</strong> – Technical Rangoli (Inter-college, SIRT Bhopal)</li>
            </ul>

            {/* <h4 className="cert-heading">Certifications</h4>
            <div className="certification-tags">
              <span className="tag">Machine Learning Fundamentals (Best Project)</span>
              <span className="tag">Backend Development</span>
              <span className="tag">C Programming</span>
              <span className="tag">Python Programming</span>
            </div> */}
          </div>

        <div className="about-card">
            <h2><FaTools className="card-icon" /> Skills</h2>

            <div className="skill-section">
              <h4 className="skill-subtitle">💻 Full Stack Web Development</h4>
              <div className="skill-tags">
                <span className="tag">HTML5</span>
                <span className="tag">CSS3</span>
                <span className="tag">JavaScript</span>
                <span className="tag">React.js</span>
                <span className="tag">Node.js</span>
                <span className="tag">Express.js</span>
                <span className="tag">MongoDB</span>
                <span className="tag">MySQL</span>
                <span className="tag">REST APIs</span>
              </div>
            </div>

            <div className="skill-section">
              <h4 className="skill-subtitle">🤖 Machine Learning & Data Science</h4>
              <div className="skill-tags">
                <span className="tag">Python</span>
                <span className="tag">NumPy</span>
                <span className="tag">Pandas</span>
                <span className="tag">Matplotlib</span>
                <span className="tag">Scikit-learn</span>
                <span className="tag">Data Preprocessing</span>
                <span className="tag">EDA</span>
                <span className="tag">ML Projects</span>
              </div>
            </div>

            <div className="skill-section">
              <h4 className="skill-subtitle">🛠️ Tools & Soft Skills</h4>
              <div className="skill-tags">
                <span className="tag">VS Code</span>
                <span className="tag">Jupyter Notebook</span>
                <span className="tag">Google Colab</span>
                <span className="tag">Git & GitHub</span>
                <span className="tag">Team Collaboration</span>
                <span className="tag">Problem Solving</span>
                <span className="tag">Adaptability</span>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}

export default About;
