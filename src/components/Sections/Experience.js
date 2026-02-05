import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineCalendar, AiOutlineEnvironment, AiOutlineUser } from 'react-icons/ai';
import Card from '../UI/Card';
import { RESUME_DATA } from '../../utils/constants';
import './Experience.css';

const Experience = memo(() => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Professional journey and contributions</p>
        </motion.div>
        
        <div className="experience-wrapper">
          {RESUME_DATA.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="experience-glass-card"
            >
              {/* Top Header Section */}
              <div className="exp-card-header">
                <div className="exp-main-info">
                  <h3 className="exp-role">{exp.title}</h3>
                  <div className="exp-branding">
                    <span className="exp-company">{exp.company}</span>
                    {exp.client && (
                      <span className="exp-client">
                        <AiOutlineUser className="icon" /> 
                        <span className="label">Client:</span> {exp.client}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="exp-stats-row">
                  <div className="stat-item">
                    <AiOutlineCalendar className="icon" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="stat-item">
                    <AiOutlineEnvironment className="icon" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Branching Content Section */}
              <div className="exp-content-body">
                {exp.categories.map((cat, catIdx) => (
                  <div key={catIdx} className="exp-branch-item">
                    <div className="branch-visual">
                      <div className="branch-dot"></div>
                      <div className="branch-line-vertical"></div>
                    </div>
                    <div className="branch-text-content">
                      <h4 className="branch-title">{cat.subTitle}</h4>
                      <ul className="branch-points">
                        {cat.points.map((point, pIdx) => (
                          <li key={pIdx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Experience.displayName = 'Experience';
export default Experience;