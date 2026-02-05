import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineLink } from 'react-icons/ai';
import Card from '../UI/Card';
import { RESUME_DATA } from '../../utils/constants';
import './Projects.css';

const Projects = memo(() => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Projects & Achievements</h2>
          <p className="section-subtitle">Notable work and publications</p>
        </motion.div>
        
        <div className="projects-grid">
          {RESUME_DATA.achievements.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="project-card">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <AiOutlineLink />
                  </a>
                </div>
                
                <div className="project-meta">
                  <span className="project-publisher">
                    Published by: {project.publisher}
                  </span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  <span className="tech-tag">IoT</span>
                  <span className="tech-tag">Hardware</span>
                  <span className="tech-tag">Safety</span>
                  <span className="tech-tag">Location Tracking</span>
                </div>
              </Card>
            </motion.div>
          ))}
          
          {/* Additional project placeholders */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="project-card">
              <div className="project-header">
                <h3 className="project-title">Enterprise RAG System</h3>
              </div>
              <p className="project-description">
                Built a scalable Retrieval-Augmented Generation system using LangChain,
                Chroma DB, and GPT-4 for enterprise document processing and intelligent querying.
              </p>
              <div className="project-tech">
                <span className="tech-tag">LangChain</span>
                <span className="tech-tag">Chroma DB</span>
                <span className="tech-tag">GPT-4</span>
                <span className="tech-tag">Python</span>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Card className="project-card">
              <div className="project-header">
                <h3 className="project-title">AI Agent Orchestration Platform</h3>
              </div>
              <p className="project-description">
                Developed a multi-agent system using LangGraph for complex workflow automation,
                featuring autonomous task delegation and result synthesis.
              </p>
              <div className="project-tech">
                <span className="tech-tag">LangGraph</span>
                <span className="tech-tag">AI Agents</span>
                <span className="tech-tag">Automation</span>
                <span className="tech-tag">Workflow</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';
export default Projects;