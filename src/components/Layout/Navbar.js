import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar glass">
      <div className="nav-container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="nav-logo"
        >
          <span className="gradient-text">Portfolio</span>
        </motion.div>

        <div className="nav-menu">
          {NAV_ITEMS.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ scale: 1.05 }}
              className="nav-link"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        {isOpen && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="nav-mobile"
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link mobile"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';
export default Navbar;