import React, { useState } from "react";
import "./OurSercices.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Machine Learning",
    img: "/Ai-photo.svg",
    description: (
      <>
        <span className="highlight">ML Model Development</span> <br />
        I build and evaluate Machine Learning models including Regression, KNN, Support Vector Machines (SVM), Decision Trees, and Random Forest. I perform comprehensive model evaluation using performance metrics, cross-validation, and hyperparameter tuning techniques.<br />
        <span className="highlight">Data Preprocessing</span> <br />
        I implement full data preprocessing pipelines including data cleaning, missing values handling, outlier detection, feature scaling, and train-test splitting to prepare datasets for optimal model performance.<br />
        <span className="highlight">Model Evaluation & Optimization</span> <br />
        I use advanced techniques like cross-validation and hyperparameter tuning to optimize model performance and ensure robust predictions.
      </>
    ),
  },
  {
    title: "Deep Learning",
    img: "/Ai-photo.svg",
    description: (
      <>
        <span className="highlight">Neural Networks</span> <br />
        I work with Deep Learning models including Artificial Neural Networks (ANN), Convolutional Neural Networks (CNN), and Recurrent Neural Networks (RNN) for real-world data applications.<br />
        <span className="highlight">Computer Vision</span> <br />
        I apply CNN architectures for image classification and computer vision tasks, exploring advanced techniques in visual data processing.<br />
        <span className="highlight">Natural Language Processing</span> <br />
        I work with RNN and transformer models for NLP tasks, processing and understanding textual data for intelligent applications.
      </>
    ),
  },
  {
    title: "Data Science & Analysis",
    img: "/Ai-photo.svg",
    description: (
      <>
        <span className="highlight">Data Analysis</span> <br />
        I perform comprehensive data analysis using NumPy and Pandas for structured datasets, extracting meaningful insights and patterns from complex data.<br />
        <span className="highlight">Data Visualization</span> <br />
        I create visual reports and insights using Matplotlib and Seaborn, transforming data into clear, actionable visualizations that communicate findings effectively.<br />
        <span className="highlight">End-to-End ML Projects</span> <br />
        I develop complete ML solutions from data collection to model deployment, including projects like Ride Pricing & Surge Modeling, Titanic Analysis, Loan Prediction, and Kaggle competitions.
      </>
    ),
  },
];

const OurServices = () => {
  const [current, setCurrent] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    if (offset < -100) {
      setCurrent((prev) => (prev + 1) % services.length);
    } else if (offset > 100) {
      setCurrent((prev) => (prev - 1 + services.length) % services.length);
    }
  };

  return (
    <div id="service" className="our-services-section">
      <div className="container">
        <div className="our-services-content">
          <div className="title">
            <h2>My Expertise</h2>
          </div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="service-card"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                handleDragEnd(e, info);
              }}
              whileTap={{ cursor: "grabbing" }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="title">
                <h3>{services[current].title}</h3>
              </div>
              <div className="data">
                <img src={services[current].img} alt={services[current].title} />
                <p>{services[current].description}</p>
              </div>
              <div className="progress-bar">
                {services.map((_, idx) => (
                  <span
                    key={idx}
                    className={`progress-dot ${idx === current ? "active" : ""}`}
                    onClick={() => setCurrent(idx)}
                  ></span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;