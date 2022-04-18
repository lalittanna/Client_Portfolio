import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/ruchika-jashnani/"
          style={{ marginBottom: "none" }}
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="mailto:ruchika.jashnani@gmail.com">
          <FiMail />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/ruchikajashnani/?hl=en">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
