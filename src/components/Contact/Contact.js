import React, { useEffect } from 'react';
import './Contact.css';
import { FaGithub, FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  // Scroll to top button handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show/hide scroll-to-top button on scroll
  useEffect(() => {
    const handleScroll = () => {
      const btn = document.getElementById('toTopBtn');
      if (window.scrollY > 300) {
        btn.style.display = 'block';
      } else {
        btn.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for triggering animation when section comes into view
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div id='contact' className='contact-section'>
      <div className="container">
        {/* Section header */}
        <div className="contact-header">
          <div className="title">
            <h2>Contact Us</h2>
          </div>
        </div>

        {/* Animated container for the contact content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >

          <div className="contact-content">

            {/* Left side: Image and social icons */}
            <div className="contact-left">
              <div className="contact-image">
                <img src="/email.svg" alt="email" />
              </div>
              <div className="contact-icons">
                <a href="https://www.linkedin.com/in/abdelrahman-sherif-648aa9276/" className="linkedin" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/AbdelrahmanSh7" className="github" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://www.instagram.com/3bdelrahman_sherif/" className="instagram" target="_blank" rel="noreferrer"><FaInstagram /></a>
              </div>
            </div>

            {/* Center: Contact form */}
            <div className="contact-form">
              <form action="https://formsubmit.co/abdelrhmansherif85@gmail.com" method="POST">
                <div className='form-group'>
                  <input type="text" placeholder='Full Name' name='name' required />
                </div>
                <div className='form-group'>
                  <input type="email" placeholder='E-mail' name='email' required />
                </div>
                <div className='form-group'>
                  <textarea placeholder="Message" name="message" rows="4" required></textarea>
                </div>
                <button type='submit'>Contact Us</button>
              </form>
            </div>

            {/* Right side: Contact info and location */}
            <div className="contact-info">
              <div className='contact-details'>
                <div><b>Contact</b></div>
                <div>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abdelrhmansherif85@gmail.com" className="link" target="_blank" rel="noreferrer">
                    <BiLogoGmail /> abdelrhmansherif85@gmail.com
                  </a>
                </div>
                <div>
                  <a href="https://wa.me/201112659808" className="link" target="_blank" rel="noreferrer">
                    <FaPhoneAlt /> +(20)1112659808
                  </a>
                </div>
              </div>

              <div className='contact-location'>
                <div><b>Based in</b></div>
                <div><IoLocationSharp /> Egypt, Tanta</div>
              </div>
            </div>

            {/* Scroll-to-top button */}
            <button id="toTopBtn" onClick={scrollToTop}>↑</button>
          </div>

        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
