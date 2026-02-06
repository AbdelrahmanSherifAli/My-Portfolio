import React from "react";
import "./skills.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const programmingSkills = [
    { name: "Python", percentage: 90 },
    { name: "Machine Learning", percentage: 85 },
    { name: "Deep Learning", percentage: 80 },
    { name: "Data Analysis", percentage: 88 },
  ];

  const languageSkills = [
    { name: "Arabic", percentage: 100 },
    { name: "English", percentage: 85 },
  ];

  return (
    <div id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="skills-content"
        >
          <span className="section-label">SKILLS</span>
          <h1 className="section-title">Programming Skills</h1>

          <div className="skills-grid">
            {/* Programming Skills */}
            <div className="skills-column">
              <h3 className="skills-subtitle">Programming Skills</h3>
              <div className="skills-progress-list">
                {programmingSkills.map((skill, index) => (
                  <div key={index} className="skill-progress-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.percentage}%</span>
                    </div>
                    <div className="progress-bar-container">
                      <motion.div
                        className="progress-bar-fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Language Skills */}
            <div className="skills-column">
              <h3 className="skills-subtitle">Language Skills</h3>
              <div className="skills-progress-list">
                {languageSkills.map((skill, index) => (
                  <div key={index} className="skill-progress-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.percentage}%</span>
                    </div>
                    <div className="progress-bar-container">
                      <motion.div
                        className="progress-bar-fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: (index + programmingSkills.length) * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
