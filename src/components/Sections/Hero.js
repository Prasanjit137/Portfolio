import React, { memo } from 'react';
import { motion } from 'framer-motion';
import Button from '../UI/Button';
import './Hero.css';
import { RESUME_DATA } from '../../utils/constants';

const Hero = memo(() => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="home" className="hero-section">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Prasanjit Sarkar</span>
          </h1>
          
          <motion.p variants={itemVariants} className="hero-subtitle">
            {/* Building intelligent solutions with Generative AI, RAG architectures,
            and conversational agents using modern frameworks. */}

            {RESUME_DATA.introduction}
                          
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-actions">
            <Button onClick={() => window.open('#contact', '_self')}>
              Get In Touch
            </Button>
            <Button variant="outline" onClick={() => window.open('#projects', '_self')}>
              View Projects
            </Button>
             <a href={RESUME_DATA.resume} download="Prasanjit_Sarkar_Resume.pdf">
              <Button variant="outline" /*className='connect-btn-yellow'*/>
                Resume
              </Button>
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="hero-stats">
          <div className="stat">
            <h3>2+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat">
            <h3>10+</h3>
            <p>AI Projects</p>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <p>Success Rate</p>
          </div>
        </motion.div>
      </motion.div>
      

    </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;