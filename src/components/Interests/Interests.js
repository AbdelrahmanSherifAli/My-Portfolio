import React from "react";
import './Interests.css';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Interests = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15
  });

  const interests = [
    'AI Research', 'Machine Learning Projects', 'Data Analysis', 
    'Model Building', 'Kaggle Competitions', 'Deep Learning', 
    'Computer Vision', 'NLP Applications'
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="interests-section"
    >
      <h3 className="interests-title">Interests</h3>
      <ul className="interests-list">
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Interests;
