import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="background-overlay">
        <div className="content-wrapper">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
          >
            HELIARA
          </motion.h1>
          <motion.p 
            className="mission-statement"
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.5 }}
          >
            Farmers face a deluge of water-related challenges due to unpredictable weather, pests, and diseases. These factors can significantly impact crop health, farmers’ profits, and food security. Depending upon the geography, many farmers may face droughts or floods—sometimes both of these extreme events occur within the same season! Your challenge is to design a tool that empowers farmers to easily explore, analyze, and utilize NASA datasets to address these water-related concerns and improve their farming practices.
          </motion.p>
          <motion.div 
            className="link-container"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1 }}
          >
            <Link to="/Weather" className="nav-link arrow-link"> Learn More</Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;