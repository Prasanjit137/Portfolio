import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiTypescript, SiTailwindcss, SiReact, SiNextdotjs,
  SiGit, SiNodedotjs, SiDocker, SiPython, 
  SiC, SiCplusplus, SiOpenjdk, SiJavascript, SiMongodb, SiMysql, SiFirebase, 
  SiHtml5, SiCss3, SiPostman, SiOpencv, 
  SiDjango, SiVite, SiPandas, SiNumpy,
  SiProbot
} from 'react-icons/si';
import { GiCircuitry } from 'react-icons/gi'; 
import Card from '../UI/Card';
import { RESUME_DATA } from '../../utils/constants';
import './Skills.css';

const Skills = memo(() => {
  const [activeCert, setActiveCert] = useState(null);

  const toggleCert = (cert) => {
    if (activeCert?.name === cert.name) {
      setActiveCert(null);
    } else {
      setActiveCert(cert);
      setTimeout(() => {
        const element = document.getElementById('cert-preview-section');
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  };

  const services = [
    { title: "Full Stack Development", desc: "Building modern Web Apps using Next.js, TailwindCSS, and Node.js.", icon: <SiNextdotjs color="#ffffff" /> },
    { title: "Single Page Applications", desc: "Fast, dynamic SPAs providing seamless user experiences.", icon: <SiReact color="#61DAFB" /> },
    { title: "AI Integration", desc: "Integrating LLMs and AI agents to enhance performance.", icon: <SiProbot color="#6c8b93" />  }
  ];

  const categories = [
    {
      title: "Languages & Core",
      direction: "left",
      speed: "35s",
      skills: [
        { name: "Python", icon: <SiPython color="#3776AB" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "C", icon: <SiC color="#A8B9CC" /> },
        { name: "C++", icon: <SiCplusplus color="#00599C" /> },
        { name: "Java", icon: <SiOpenjdk color="#ED8B00" /> },
        { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
      ]
    },
    {
      title: "Frameworks & AI",
      direction: "right",
      speed: "45s",
      skills: [
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
        { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
        { name: "Pandas", icon: <SiPandas color="#150458" /> },
        { name: "NumPy", icon: <SiNumpy color="#013243" /> },
        { name: "OpenCV", icon: <SiOpencv color="#5C3EE8" /> },
        { name: "Django", icon: <SiDjango color="#092E20" /> },
        { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
        { name: "LangChain", icon: <span className="custom-emoji">🦜🔗</span> },
      ]
    },
    {
      title: "Databases & Tools",
      direction: "left",
      speed: "40s",
      skills: [
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
        { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
        { name: "Vite", icon: <SiVite color="#646CFF" /> },
        { name: "Docker", icon: <SiDocker color="#2496ED" /> },
        { name: "Git", icon: <SiGit color="#F05032" /> },
        { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
        { name: "JLC PCB", icon: <GiCircuitry color="#007CE8" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* 1. Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technical proficiencies and capabilities</p>
        </motion.div>
        
        {/* 2. Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div key={index} whileHover={{ y: -10 }}>
              <Card className="glass-service-card">
                <div className="service-icon-wrapper">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 3. Tech Scroller */}
        <div className="tech-scroller-section">
          <h3 className="tech-stack-title">I Work With</h3>
          {categories.map((cat, idx) => (
            <div key={idx} className="marquee-wrapper">
              <span className="category-label">{cat.title}</span>
              <div className="marquee-container">
                <div className={`marquee-content ${cat.direction === 'right' ? 'reverse' : ''}`} style={{ animationDuration: cat.speed }}>
                  {[...cat.skills, ...cat.skills].map((tech, i) => (
                    <div key={i} className="tech-item">
                      <span className="tech-icon-large">{tech.icon}</span>
                      <span className="tech-label">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Certifications (With Your Previous logic) */}
        <div className="certifications">
          <h3 className="tech-stack-title">Certifications</h3>
          <div className="certifications-grid">
            {RESUME_DATA.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => toggleCert(cert)}
                style={{ cursor: 'pointer' }}
              >
                <Card className={`certification-card ${activeCert?.name === cert.name ? 'active' : ''}`}>
                  <div className="certification-content">
                    <span className="certification-badge">✓</span>
                    <p>{cert.name}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {activeCert && (
              <motion.div
                id="cert-preview-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="cert-inline-preview"
              >
                <div className="preview-card">
                  <img src={activeCert.file} alt={activeCert.name} className="preview-img" />
                  <div className="preview-details">
                    <h4 className="preview-title">{activeCert.name}</h4>
                    <button className="close-preview-btn" onClick={() => setActiveCert(null)}>&times;</button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';
export default Skills;