import React, { memo } from 'react';
import { motion } from 'framer-motion';
import './Card.css';

const Card = memo(({ children, className = '', hover = true, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -3, transition: { duration: 0.2 } } : {}}
      className={`card glass ${className}`}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = 'Card';

export const CardHeader = memo(({ children, className = '' }) => (
  <div className={`card-header ${className}`}>
    {children}
  </div>
));

CardHeader.displayName = 'CardHeader';

export const CardTitle = memo(({ children, className = '' }) => (
  <h3 className={`card-title ${className}`}>
    {children}
  </h3>
));

CardTitle.displayName = 'CardTitle';

export const CardContent = memo(({ children, className = '' }) => (
  <div className={`card-content ${className}`}>
    {children}
  </div>
));

CardContent.displayName = 'CardContent';

export default Card;