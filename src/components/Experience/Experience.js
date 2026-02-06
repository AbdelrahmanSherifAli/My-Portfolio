import React from "react";
import './Experience.css';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15
  });

  const experiences = [
    {
      period: "2022 - Present",
      company: "AI Student",
      position: "Machine Learning Projects",
      description: "Building ML models, data analysis, and AI solutions"
    },
    {
      period: "2020 - 2022",
      company: "Self-Learning",
      position: "AI & ML Enthusiast",
      description: "Learning and practicing AI/ML concepts and projects"
    }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="experience-section"
    >
      <h3 className="experience-title">Experience</h3>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-period">{exp.period}</div>
            <div className="experience-content">
              <h4 className="experience-company">{exp.company}</h4>
              <p className="experience-position">{exp.position}</p>
              <p className="experience-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
