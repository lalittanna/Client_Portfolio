import React from "react";
import ReactDom from "react-dom";
import { motion } from "framer-motion";

const flip = {
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: "scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Modal = ({ open, close, children }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <motion.div onClick={close} className="overlay">
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modalContainer"
        variants={flip}
        initial="hidden"
        animate="visible"
        exit="exit"
        drag
      >
        <p onClick={close} className="closeBtn">
          X
        </p>
        {children}
      </motion.div>
    </motion.div>,
    document.getElementById("portal")
  );
};

export default Modal;
