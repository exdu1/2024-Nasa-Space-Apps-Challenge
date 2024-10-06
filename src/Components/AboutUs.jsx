import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const AboutUs = () => {
  const [selectedId, setSelectedId] = useState(null);

  const teamMembers = [
    {
      id: 'Mahlia Omar',
      name: 'Mahlia OMar ',
      role: '',
      description: 'Add description here',
      imgSrc: 'https://via.placeholder.com/150'
    },
    {
      id: 'Eric Du',
      name: 'Eric Du',
      role: '',
      description: 'Add description here',
      imgSrc: 'https://via.placeholder.com/150'
    },
    {
      id: 'Apple Jan Tacardon',
      name: 'Apple Jan Tacardon',
      role: '',
      description: 'Add description here',
      imgSrc: 'https://via.placeholder.com/150'
    },
    {
      id: 'Alwyn Lynch',
      name: 'Alwyn Lynch',
      role: '',
      description: 'Add description here',
      imgSrc: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>Welcome to our application. Here is some information about us.</p>
      <h2>The Team</h2>
      <div className="team-grid">
        {teamMembers.map(member => (
          <motion.div 
            key={member.id} 
            layoutId={member.id} 
            className="team-member"
            onClick={() => setSelectedId(member.id)}
          >
            <img src={member.imgSrc} alt={member.name} className="team-image" />
            <div className="team-description">
              <motion.h2>{member.name}</motion.h2>
              <motion.p>{member.role}</motion.p>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedId && (
          <motion.div 
            layoutId={selectedId} 
            className="team-details"
            onClick={() => setSelectedId(null)}
          >
            <div className="team-details-content">
              <motion.button 
                className="close-button" 
                onClick={() => setSelectedId(null)}
              >
                ×
              </motion.button>
              <motion.img 
                src={teamMembers.find(member => member.id === selectedId).imgSrc} 
                alt={teamMembers.find(member => member.id === selectedId).name} 
                className="team-details-image"
              />
              <motion.h2>{teamMembers.find(member => member.id === selectedId).name}</motion.h2>
              <motion.p>{teamMembers.find(member => member.id === selectedId).role}</motion.p>
              <motion.p>{teamMembers.find(member => member.id === selectedId).description}</motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutUs;