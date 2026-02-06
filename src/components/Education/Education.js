import React from "react";
import './Education.css';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15
  });

  const education = [
    {
      period: "2022 - Present",
      institution: "Kafr El-Sheikh University",
      degree: "Bachelor Degree - AI",
      description: "Faculty of Artificial Intelligence"
    },
    {
      period: "2020 - 2022",
      institution: "Route Academy",
      degree: "AI & ML Diploma",
      description: "Artificial Intelligence & Machine Learning Diploma"
    }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="education-section"
    >
      <h3 className="education-title">Education</h3>
      <div className="education-timeline">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-period">{edu.period}</div>
            <div className="education-content">
              <h4 className="education-institution">{edu.institution}</h4>
              <p className="education-degree">{edu.degree}</p>
              <p className="education-description">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
