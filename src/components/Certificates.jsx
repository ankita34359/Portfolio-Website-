import React from 'react';
import './Certificates.css';

// Import your certificate images 
import cert1 from '../assets/cert1.png';
import cert2 from '../assets/cert2.png';
import cert3 from '../assets/cert3.png';
import cert4 from '../assets/cert4.png';
import cert5 from '../assets/cert5.png';
import cert6 from '../assets/cert6.png';
import cert7 from '../assets/cert7.png';
import cert8 from '../assets/cert8.png';
import cert9 from '../assets/cert9.png';
import cert10 from '../assets/cert10.png';
import cert11 from '../assets/cert11.png';
import cert12 from '../assets/cert12.png';
import cert13 from '../assets/cert13.png';
import cert14 from '../assets/cert14.jpeg';
import cert15 from '../assets/cert15.jpeg';
import cert16 from '../assets/cert16.png';
import cert17 from '../assets/cert17.png';
import cert18 from '../assets/cert18.png';
import cert19 from '../assets/cert19.png';
import cert20 from '../assets/cert20.png';

const certificates = [
  {
    id: 1,
    image: cert1,
    title: 'Training Certificate at NullClass',
    issuer: 'NullClass • 2025',
  },
  {
    id: 2,
    image: cert2,
    title: 'Backend Development',
    issuer: 'Sunstone • 2024',
  },
  {
    id: 19,
    image: cert19,
    title: 'Tech Quiz Winner',
    issuer: 'Sunstone TechChunauti  • 2023',
  },
  {
    id: 20,
    image: cert20,
    title: 'Technical Rangoli Winner',
    issuer: 'JLU • 2023',
  },
  {
    id: 3,
    image: cert3,
    title: 'Best Machine Learning Project',
    issuer: 'Sunstone • 2024',
  },
  {
    id: 4,
    image: cert4,
    title: 'Fundamentals of Azure AI Services',
    issuer: 'Microsoft • 2024',
  },
  {
    id: 5,
    image: cert5,
    title: 'Fundamentals of Machine Learning',
    issuer: 'Microsoft • 2024',
  },
  {
    id: 6,
    image: cert6,
    title: 'Fundamentals AI Concepts',
    issuer: 'Microsoft • 2024',
  },
  {
    id: 7,
    image: cert7,
    title: 'Machine Learning Fundamentals',
    issuer: 'Sunstone • 2024',
  },
  {
    id: 8,
    image: cert8,
    title: '2nd Runner Up in GD Competition',
    issuer: 'Sunstone • 2024',
  },
  {
    id: 9,
    image: cert9,
    title: 'Python for Beginners',
    issuer: 'Sunstone • 2024',
  },
  {
    id: 11,
    image: cert11,
    title: 'Effective Communication Skills',
    issuer: 'Coursera • 2023',
  },
  {
    id: 12,
    image: cert12,
    title: 'Workplace Communication Skills',
    issuer: 'Coursera • 2023',
  },
  {
    id: 13,
    image: cert13,
    title: 'Portfolio Website Design',
    issuer: 'Coursera • 2023',
  },
  {
    id: 14,
    image: cert14,
    title: 'Academic Excellence Award',
    issuer: 'JLU • 2024',
  },
  {
    id: 15,
    image: cert15,
    title: 'Lakecity Hackathon Participant',
    issuer: 'JLU • 2024',
  },
  {
    id: 17,
    image: cert17,
    title: '2nd Runner Up in Technical Rangoli',
    issuer: 'SIRT Bhopal • 2024',
  },
  {
    id: 18,
    image: cert18,
    title: 'National Level Winner in Poster Making Contest',
    issuer: 'JLU • 2023',
  },
  {
    id: 10,
    image: cert10,
    title: 'Sunstone Organizer Certificate',
    issuer: 'Sunstone • 2025',
  },
  {
    id: 16,
    image: cert16,
    title: 'SISTec Innovation Hackathon Participation',
    issuer: 'Coursera • 2024',
  },
];

const Certificates = () => {
  return (
    <div className="certificates-page">
      <h2 className="certificates-title">Certificates</h2>
      <p className="certificates-subtitle">
        A collection of certifications that highlight my skills in Web Development, Machine Learning,
        and Extracurricular Activities.
      </p>

      <div className="certificate-grid">
        {certificates.map((cert) => (
          <div className="certificate-card" key={cert.id}>
            <img src={cert.image} alt={cert.title} />
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;


