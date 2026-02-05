import React, { memo } from 'react';
import { motion } from 'framer-motion';
import Card from '../UI/Card';
import { RESUME_DATA } from '../../utils/constants';
import './About.css';

const About = memo(() => {
  return (
    <section id="about" className="section about-section">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>


        {/* New Top Section matching Screenshot */}
        <div className="about-hero-wrapper">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-image-side"
          >
            {/* Replace with your actual image path */}
            <div className="profile-image-mask">
              <img src={RESUME_DATA.profile} alt="Prasanjit Sarkar" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-info-side"
          >
            <p className="about-description">
              Hi, I'm <strong>{RESUME_DATA.about[0].myName}</strong>, {RESUME_DATA.about[0].aboutSummary}
            </p>
            <p className="bug-quote">
              <i>{RESUME_DATA.about[0].aboutTag}</i>
            </p>

            <div className="stats-grid">
              <div className="stat-card">
                <h3>100%</h3>
                <p>on Time</p>
              </div>
              <div className="stat-card">
                <h3>99%</h3>
                <p>Clients Satisfaction rate</p>
              </div>
              <div className="stat-card">
                <h3>90%</h3>
                <p>GenAI focus</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Your Original Sections Below */}

        
        <div className="about-content">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-text"
          >
             <h3 className="about-subtitle">Core Expertise</h3>

            <Card>
              
              <div className="about-highlights">
                <div className="highlight">
                  <div>
                    <h4>System Architect</h4>
                    <p>Architecting robust multi-agent systems and stateful orchestrations using <strong>LangGraph</strong> to automate complex enterprise logic."</p>
                  </div>
                </div>
                
                <div className="highlight">
                  <div>
                    <h4>GenAI Expert</h4>
                    <p>Engineering advanced <strong>RAG architectures</strong> with optimized retrieval pipelines and conversational interfaces that prioritize factual accuracy.</p>
                  </div>
                </div>
                
                <div className="highlight">
                  <div>
                    <h4>Full-Stack Integration</h4>
                    <p>Developing seamless, high-concurrency web solutions by bridging responsive <strong>React</strong> frontends with high-performance <strong>Python/FastAPI</strong> backends.</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-education"
          >
            <h3 className="about-subtitle">Education</h3>
            
            {RESUME_DATA.education.map((edu, index) => (
              <Card key={index} delay={index * 0.1}>
                <div className="education-item">
                  <h4>{edu.degree}</h4>
                  <p className="education-institution">{edu.institution}</p>
                  <div className="education-details">
                    <span className="education-location">{edu.location}</span>
                    <span className="education-period">{edu.period}</span>
                  </div>
                </div>
              </Card>
              
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';
export default About;