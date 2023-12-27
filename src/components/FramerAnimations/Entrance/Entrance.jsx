// SeuComponente.js
import React from 'react';
import { motion } from 'framer-motion';

const Entrance = ({ children }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: '110vw' },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="entrance"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

export default Entrance;
