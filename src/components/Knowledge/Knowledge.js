import React from "react";
import './Knowledge.css';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Knowledge = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15
  });

  const knowledgeItems = [
    'Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 
    'scikit-learn', 'Machine Learning', 'Deep Learning', 
    'Neural Networks', 'CNN', 'RNN', 'Computer Vision', 
    'NLP', 'Git', 'GitHub', 'Jupyter Notebook', 'Anaconda'
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="knowledge-section"
    >
      <h3 className="knowledge-title">Knowledge</h3>
      <ul className="knowledge-list">
        {knowledgeItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Knowledge;
