import React from "react";
import "./Hero.css";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="tokyo-home" aria-label="Home">
      <div className="tokyo-home-inner">
        <div className="tokyo-avatar-wrap" aria-hidden="true">
          <div className="tokyo-avatar-ring">
            <img
              src="/personal_photo.jpeg"
              alt="Abdelrahman Sherif"
              className="tokyo-avatar"
            />
          </div>
        </div>

        <div className="tokyo-home-text">
          <h1 className="tokyo-name">Abdelrahman Sherif</h1>
          <p className="tokyo-role">
            AI student focused on Machine Learning and building practical models.
          </p>

          <div className="tokyo-socials" aria-label="Social links">
            <a
              className="tokyo-social"
              href="https://www.linkedin.com/in/abdelrahman-sherif-648aa9276/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="tokyo-social"
              href="https://github.com/AbdelrahmanSh7"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              className="tokyo-social"
              href="https://www.instagram.com/3bdelrahman_sherif/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
