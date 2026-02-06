import React from "react";
import "./Preloader.css";
import { AnimatePresence, motion } from "framer-motion";

const Preloader = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="preloader-inner">
            <div className="preloader-spinner" />
            <div className="preloader-text">Loading</div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Preloader;

