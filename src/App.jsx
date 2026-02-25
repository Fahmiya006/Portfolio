import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// --- SHARED COMPONENTS ---
const Navbar = () => (
  <nav className="navbar">
    <div className="nav-logo">FF.</div>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/education">Education</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

// --- 1. HOME PAGE ---
const Home = () => (
  <div className="page hero fadeIn">
    <p className="accent-text mono" style={{ letterSpacing: '3px', marginBottom: '1rem' }}>
      FF
    </p>
    
    <h1 style={{ marginBottom: '1.5rem' }}>FATHIMA FAHMIYA</h1>
    
    <div className="summary-container" style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '2rem' }}>
      <p className="summary" style={{ fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '800px', color: 'var(--text)' }}>
        Passionate tech enthusiast with leadership in event coordination, teamwork, and community engagement. 
        Pursuing B.E. Computer Science and Engineering studies at Anna University-MIT Campus, to apply 
        emerging technologies for impact. Experienced in organizing large-scale tech and interdisciplinary 
        events, and eager to contribute, to inspire and connect developers.
      </p>
    </div>

    <div className="cta-buttons" style={{ marginTop: '3rem', display: 'flex', gap: '20px' }}>
      <Link to="/projects" className="skill-badge" style={{ padding: '12px 25px', textDecoration: 'none' }}>
        Explore My Work
      </Link>
      <Link to="/contact" style={{ color: 'var(--accent)', textDecoration: 'none', alignSelf: 'center', fontWeight: 'bold' }}>
        Get in Touch →
      </Link>
    </div>
  </div>
);


// --- 2. EDUCATION PAGE ---
// --- UPDATED EDUCATION & SKILLS PAGE ---
const Education = () => {
  const skillCategories = [
    { title: "Core Programming", skills: ["C", "C++", "Java", "Python"], icon: "💻" },
    { title: "Frontend Development", skills: ["HTML", "CSS", "JavaScript"], icon: "🌐" },
    { title: "Databases", skills: ["MySQL", "SQL*Plus"], icon: "📊" },
    { title: "Tools", skills: ["VS Code", "GitHub"], icon: "🛠️" }
  ];

  const leadership = [
    { role: "Assistant Science Secretary", org: "School" },
    { role: "Science Day-Event Head", org: "School" },
    { role: "Inter-college Symposium", org: "Organizing Committee" },
    { role: "Science & Humanities Assoc.", org: "Event Management Head" },
    { role: "ICC Conference (TNDALU × Anna Uni)", org: "Student Committee" },
    { role: "National Legal Hackathon: AI x Law", org: "Student Committee" },
    { role: "AU Entrepreneurship Club", org: "Media & Marketing" },
    { role: "NSS (National Service Scheme)", org: "Volunteer" }
  ];

  const certifications = [
    "Coursera: Foundations of AI and Machine Learning",
    "Coursera: AI and ML Algorithms & Techniques",
    "Smart India Hackathon (SIH) 2025 - Participant",
    "Deloitte: Technology Job Simulation Certificate",
    "Hack2Skill Hackathon Participation"
  ];

  return (
    <div className="page section fadeIn">
      {/* 1. ACADEMIC JOURNEY */}
      <h2 className="section-title">Academic Journey</h2>
      <div className="grid">
        <div className="card border-accent">
          <h3 className="accent-text">Anna University - MIT Campus</h3>
          <p className="bold">B.E. Computer Science and Engineering</p>
          <p className="dim-text">2024 - 2028 | GPA: 8.2</p>
        </div>
        <div className="card">
          <h3 className="accent-text">National Public School (CBSE)</h3>
          <p className="bold">Higher Secondary Education</p>
          <p className="dim-text">Class of 2023 | 91%</p>
        </div>
      </div>

      {/* 2. TECHNICAL SKILLS */}
      <h2 className="section-title" style={{marginTop: '60px'}}>Technical Skills</h2>
      <div className="grid">
        {skillCategories.map((cat, i) => (
          <div key={i} className="card">
            <div style={{fontSize: '1.5rem', marginBottom: '10px'}}>{cat.icon}</div>
            <h4 className="accent-text" style={{marginBottom: '15px'}}>{cat.title}</h4>
            <div className="skill-list">
              {cat.skills.map(skill => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 3. LEADERSHIP & MANAGEMENT */}
      <h2 className="section-title" style={{marginTop: '60px'}}>Leadership & Management</h2>
      <div className="grid">
        <div className="card" style={{gridColumn: '1 / -1'}}>
          <div className="leadership-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px'}}>
            {leadership.map((item, i) => (
              <div key={i} style={{borderLeft: '2px solid var(--accent)', paddingLeft: '15px'}}>
                <p className="bold" style={{fontSize: '0.9rem'}}>{item.role}</p>
                <p className="dim-text" style={{fontSize: '0.8rem'}}>{item.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. CERTIFICATIONS */}
      <h2 className="section-title" style={{marginTop: '60px'}}>Certifications & Achievements</h2>
      <div className="grid">
        {certifications.map((cert, i) => (
          <div key={i} className="card small-card">
            <p className="bold" style={{fontSize: '0.85rem'}}>{cert}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


// --- 3. PROJECTS PAGE ---
const Projects = () => {
  const allProjects = [
    {
      name: "EduPortal (React)",
      desc: "Comprehensive student management system with administrative CRUD functionality and student grade portals.",
      tech: ["React", "Node.js", "JSON", "CSS"]
    },
    {
      name: "Fake News Prediction",
      desc: "Developed a machine learning model to classify articles as real or fake, focusing on combating misinformation. Implemented data preprocessing and feature extraction.",
      tech: ["Python", "Microsoft Azure", "Scikit-learn", "NLTK", "Pandas"]
    },
    {
      name: "Multi-User Note Taking Application",
      desc: "Built a Python-based app with sign up/login. Enabled line-by-line editing and secure file-based storage with individual user folders.",
      tech: ["Python", "Local File System", "OS", "File I/O"]
    },
    {
      name: "Student Management System",
      desc: "Simple website designed for managing student records effectively.",
      tech: ["HTML", "CSS", "JavaScript", "XML"]
    },
    {
      name: "Node.js Web Server",
      desc: "Built a basic HTTP server handling client requests and responses efficiently.",
      tech: ["Node.js", "HTTP", "JavaScript"]
    },
    {
      name: "Agile Project Management System",
      desc: "Simulated a complete SDLC with structured sprint planning and evaluation.",
      tech: ["SDLC", "Agile", "Management"]
    }
  ];

  return (
    <div className="page section fadeIn">
      <h2 className="section-title">Featured Projects</h2>
      <div className="grid">
        {allProjects.map((proj, i) => (
          <div key={i} className="card">
            <h3 className="accent-text" style={{marginBottom: '10px'}}>{proj.name}</h3>
            <p className="dim-text" style={{fontSize: '0.9rem', marginBottom: '20px'}}>
              {proj.desc}
            </p>
            <div className="tech-stack-container">
              {proj.tech.map((t, index) => (
                <span key={index} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      
      
        </div>
      
    
  );
};


// --- 4. CONTACT PAGE ---
const Contact = () => (
  <div className="page section fadeIn center">
    <h2 className="section-title">Get In Touch</h2>
    <div className="contact-container card">
      <div className="contact-item">
        <span className="accent-text">Email:</span> ffahmiya06@gmail.com
      </div>
      <div className="contact-item">
        <span className="accent-text">Phone:</span> +91 90256 22685
      </div>
      <div className="social-links">
        <a href="https://linkedin.com/in/ffahmiya06" target="_blank" rel="noopener noreferrer">LinkedIn</a><br></br>
        <a href="https://github.com/Fahmiya006" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
