import React, { memo } from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const VARIANT_CLASSES = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'btn-outline'
};

const Button = memo(({ children, variant = 'primary', className = '', onClick, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={`btn ${VARIANT_CLASSES[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
});

Button.displayName = 'Button';
export default Button;