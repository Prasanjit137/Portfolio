import React, { useState, useRef, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import Card from '../UI/Card';
import Button from '../UI/Button';
import './Contact.css';

const Contact = memo(() => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // { type: 'success'|'error', message: string }

  // Initialize EmailJS once when the component mounts
  useEffect(() => {
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  // auto-clear status messages
  useEffect(() => {
    if (!status) return;
    const t = setTimeout(() => setStatus(null), 4000);
    return () => clearTimeout(t);
  }, [status]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

    if (!SERVICE_ID || !TEMPLATE_ID) {
      setIsSending(false);
      setStatus({ type: 'error', message: 'Email service is not configured.' });
      return;
    }

    // We send form.current so EmailJS picks up the name attributes from HTML
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current)
      .then(() => {
        setStatus({ type: 'success', message: 'Message sent successfully.' });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's discuss your AI project needs</p>
        </motion.div>
        
        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <Card className="glass-card">
              <h3 className="contact-subtitle">Contact Information</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon"><AiOutlineMail /></div>
                  <div>
                    <h4>Email</h4>
                    <p>sprasanjit2023@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><AiOutlinePhone /></div>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 86375 94114</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><AiOutlineEnvironment /></div>
                  <div>
                    <h4>Location</h4>
                    <p>Bengaluru, India</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-availability">
                <h4>Availability</h4>
                <p>Open to full-time opportunities and freelance projects</p>
                <div className="availability-status">
                  <span className="status-dot"></span>
                  <span>Available for work</span>
                </div>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-form"
          >
            <Card className="glass-card">
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`form-status ${status.type}`}
                >
                  {status.message}
                </motion.div>
              )}

              <form ref={form} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name" // Matches {{name}} in EmailJS
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email" // Matches {{email}} in EmailJS
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message" // Matches {{message}} in EmailJS
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="submit-btn" 
                  disabled={isSending}
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';
export default Contact;