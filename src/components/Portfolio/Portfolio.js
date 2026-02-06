import React from 'react';
import './Portfolio.css';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Portfolio = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15
  });

  return (
    <div style={{ background: "var(--dark-bg)" }}>
      <div id='protfolio' className='portfolio-section'>
        <div className="container">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="portfolio-content"
          >
            <div className="title">
              <h2>Portolio</h2>
            </div>

            <div className="portfolio-grid">
              <div className="portfolio-card">
                
                <div className="portfolio-image">
                  <img src="/Edubridge.png" alt="food lover" />
                </div>
                <div className="portfolio-content">
                  <h3>Edubridge (educational-website)</h3>
                  <p>Website Coding <br />
                    (HTML, CSS, JS, React)</p>
                </div>
              </div>

              <div className="portfolio-card">
                
                <div className="portfolio-image">
                  <img src="/Homyz.png" alt="Homyz" />
                </div>
                <div className="portfolio-content">
                  <h3>HomYz <br /> (Real-State-Website)</h3>
                  <p>Website Coding <br />
                    (HTML, CSS, JS ,React)</p>
                </div>
              </div>

              <div className="portfolio-card">
                
                <div className="portfolio-image">
                  <img src="/food.png" alt="food lover" />
                </div>
                <div className="portfolio-content">
                  <h3>Food Lover <br /> (Restaurant-Website)</h3>
                  <p>Website Coding <br />
                    (HTML, CSS, JS)</p>
                </div>
              </div>

              <div className="portfolio-card">
                
                <div className="portfolio-image">
                  <img src="/Todolist.png" alt="Todolist" />
                </div>
                <div className="portfolio-content">
                  <h3>Todo List</h3>
                  <p>Website Coding <br />
                    (HTML, CSS, JS, React)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
