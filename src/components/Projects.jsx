import React, { useState } from 'react';
import './Projects.css';

// Step 1: Import your local images from src/assets/
import resqnow from '../assets/resqnow.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';
import project7 from '../assets/project7.png';
import project8 from '../assets/project8.png';
import project9 from '../assets/project9.png';
import project10 from '../assets/project10.png';
import project11 from '../assets/project11.png';
import project12 from '../assets/project12.png';
import project13 from '../assets/project13.png';
import project14 from '../assets/project14.png';
import project15 from '../assets/project15.png';

// Step 2: Your category filter buttons
const categories = ['Featured', 'Web Development', 'Machine Learning', 'Backend'];

// Step 3: Your project data with local images
const projects  = [
  {
    id: 1,
    title: "ResQNow - Disaster Management Website",
    description: "Developed a full-stack disaster management web app integrating four machine learning models to assess risk zones and community preparedness.",
    tech: ["HTML", "CSS", "JavaScript", "Flask", "ML"],
    category: "Web Development",
    github: "https://github.com/ankita34359/ResQNow-Disaster-Website",
    image: resqnow,
    featured: true 
  },
  {
    id: 2,
    title: "Text-To-Speech-Converter",
    description: "It is a web-based application that convert text into speech. It supports multiple voices, user-friendly interface, and utilizes the Web Speech API for functionality.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web Development",
    github: "https://ankita34359.github.io/Text-To-Speech-Converter/",
    image: project2,
    featured: true 
  },
  {
    id: 3,
    title: "Education Management System",
    description: "It built using Flask, featuring dynamic templates for managing student records, offering a seamless interface for efficient education administration.",
    tech: ["Flask", "HTML", "CSS", "Jinja2", " SQLite"],
    category: "Backend",
    github: "https://github.com/ankita34359/Education-Managment-System",
    image: project6,
    featured: true 
  },
  {
    id: 4,
    title: "Heart Disease Prediction Model",
    description: "It is a leveraging Machine Learning model that analyze medical data, build predictive models, and identify factors contributing to heart disease, ensuring accurate and insightful outcomes.",
    tech: ["Python", "Sklearn", "Pandas", "LR Algo"],
    category: "Machine Learning",
    github: "https://github.com/ankita34359/Machine-Learning-Heart-Disease-Prediction-Project-1-",
    image: project3,
    featured: true 
  },
  {
    id: 5,
    title: "Bank Customer Churn Prediction",
    description: "This ML models used to analyze customer data, predict churn behavior, and provide actionable insights to improve customer retention strategies.",
    tech: ["Streamlit", "NumPy","KNN", "XGBoost"],
    category: "Machine Learning",
    github: "https://github.com/ankita34359/Machine-Learning-Bank-Customer-Churn-Prediction-Project-3",
    image: project4,
    featured: true 
  },
  
  {
    id: 6,
    title: "Mars Rover",
    description: "It displays various photos of Mars, showcasing basic Python functionality to handle and display image data related to Mars exploration.",
    tech: ["Python"],
    category: "Python",
    github: "https://github.com/ankita34359/Mars-Rover-python-project",
    image: project5,
    featured: true 
  },
  
  {
    id: 7,
    title: "Loan Approval Model",
    description: "This model is used to analyze applicant data, predict loan approval outcomes, and provide insights for financial decision-making with high interpretability.",
    tech: ["Python", "Pandas", "Decision Tree"],
    category: "Machine Learning",
    github: "https://github.com/ankita34359/Machine-Learning-Decision-Tree-Loan-Approval-Model",
    image: project10
  },
  {
    id: 8,
    title: "Titanic Passenger Survival Prediction Model",
    description: "This model include training, evaluation, and predictions, demonstrating a classic binary classification task.",
    tech: ["Python", "Sklearn", "Logistic Regression"],
    category: "Machine Learning",
    github: "https://github.com/ankita34359/Machine-Learning-Logistic-Regression-Titanic-",
    image: project11
  },
  {
    id: 9,
    title: "Household Income Analysis",
    description: "It preprocess the data, and analyze income data, offering valuable insights through predictive modeling and data visualization.",
    tech: ["Random Forest", "GBM", "Decision Tree"],
    category: "Machine Learning",
    github: "https://github.com/ankita34359/Machine-Learning-Household-Income-Analysis-Project-2",
    image: project12
  },
  {
    id: 10,
    title: "Task Manager App",
    description: "A feature-rich Task Manager App built using Flask, enabling efficient task organization with a user-friendly interface, CRUD functionality, and dynamic templates for seamless task management.",
    tech: ["Flask", "HTML", "CSS", "Jinja2", " SQLite"],
    category: "Backend",
    github: "https://github.com/ankita34359/TaskManagerApp",
    image: project13
  },
  {
    id: 11,
    title: "To Do App",
    description: "It offering users the ability to add, edit, and delete tasks easily. This project demonstrates core React concepts like state management, component-based architecture, and event handling.",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    category: "Backend",
    github: "https://github.com/ankita34359/To-Do-App-in-React.js",
    image: project14
  },
  {
    id: 12,
    title: "Weather App",
    description: "It offering users the ability to add, edit, and delete tasks easily. This project demonstrates core React concepts like state management, component-based architecture, and event handling.",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    category: "Backend",
    github: "https://github.com/ankita34359/Weather-app-js-project",
    image: project15
  },
  {
    id: 13,
    title: "Ecommerce Website",
    description: "It is a responsive online store interface, focusing on a user-friendly design and functionality. It features product listings, cart functionality, and a clean UI to simulate an online shopping experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web Development",
    github: "https://github.com/ankita34359/Project-1_E-commerce-Website",
    image: project7
  },
  {
    id: 14,
    title: "Quote Generator Website",
    description: "It fetches random quotes via API and allows users to directly share their favorite quotes on X (formerly Twitter) and Linkedin with a single click.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web Development",
    github: "https://github.com/ankita34359/Quote-Generator-Website",
    image: project9
  },
  {
    id: 15,
    title: "QR Code Generator",
    description: "This is a simple, user-friendly tool that allows users to generate QR codes for any text or URL. Users can easily download the generated QR code as a .png file for their personal or professional use.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web Development",
    github: "https://github.com/ankita34359/QR-Code-Generator-Website",
    image: project8
  },
  
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState('Featured');

const filteredProjects =
  activeCategory === "Featured"
    ? projects.filter((p) => p.featured).slice(0, 6) // 🎯 "Featured" shows only featured
    : projects.filter((p) => p.category === activeCategory && !p.featured); // 🎯 others exclude featured


  return (
    <div className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-subtitle">
        A showcase of my most impactful projects, crafted using modern tools in Web Development, Machine Learning, Python, and Backend technologies.
      </p>

      <div className="project-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`tab-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {(activeCategory === "Featured" ? filteredProjects.slice(0, 6) : filteredProjects).map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-detail">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="tech-tags">
              {project.tech.map((tag, i) => (
                <span key={i} className="tech-tag">{tag}</span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Projects;
