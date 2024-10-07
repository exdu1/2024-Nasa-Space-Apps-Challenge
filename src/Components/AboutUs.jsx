import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
 
 
const AboutUs = () => {
  const [selectedId, setSelectedId] = useState(null);
 
  const teamMembers = [
    {
      id: 'Mahlia Omar',
      name: 'Mahlia Omar',
      role: 'Software Developer',
      description:<p className='p'> I am a health informatics student with a strong interest in leveraging technology to address critical challenges in agriculture and healthcare.
      As part of Project SunTracker, I contributed to developing a web application that empowers farmers to tackle water-related issues through real-time geospatial data. My skills in JavaScript, React, C#, and Python enable me to create user-friendly solutions that simplify complex data for decision-making.
 
      I’m passionate about exploring innovative approaches to improve farming practices and enhance food security. With a collaborative spirit and a commitment to learning,
      I aim to make a meaningful impact in both healthcare and agriculture.</p>,
      imgSrc: 'src/Images/Mahlia_Omar.png'
    },
    {
      id: 'Alwyn Lynch',
      name: 'Alwyn Lynch',
      role: 'Software Developer',
      description:<p className='p'> Alwyn Lynch is an aspiring software engineer with a passion for leveraging technology to solve real-world problems. Currently pursuing a degree in Software Engineering with a focus on Health Informatics, Alwyn has a strong foundation in data analysis, machine learning, and full-stack development. With a background in projects ranging from healthcare to environmental sustainability, Alwyn is eager to apply their skills to the challenges posed by the NASA Space App Challenge. Alwyn’s technical expertise includes Python, JavaScript, and MongoDB, which they plan to utilize in creating innovative solutions that could help shape the future of space exploration and earth science. </p>,
     
      imgSrc: 'src/Images/Alwyn Lynch.jpg'
    },
    {
      id: 'Eric Du',
      name: 'Eric Du',
      role: '',
      description:<p className='p'> </p>,
      imgSrc: 'src/Images/Eric Du.jpg'
    },
    {
      id: 'Apple Jan Tacardon',
      name: 'Apple Jan Tacardon',
      role: '',
      description:<p className='p'> </p>,
     
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