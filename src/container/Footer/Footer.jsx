import React, { useState } from "react";

import { images, pdfs } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1 className="head-text2">
        <span>Chat</span> With Me
      </h1>

      <div className="footer-content">
        <div className="footer-text">
          <h2 className="head-text3">
            Thanks for scrolling all the way down here. I like you n’all.
          </h2>

          <p>
            Want to work together, or experiment homegrown coffee? Slide into my
            dm's with the form or -
          </p>

          <div className="app__footer-cards">
            <div className="app__footer-card">
              <img src={images.mobile} alt="phone" />
              <a href="tel:+91 9920058807" className="p-text2">
                +91 9920058807
              </a>
            </div>
            <div className="app__footer-card">
              <img src={images.email} alt="email" />
              <a href="mailto:ruchika.jashnani@gmail.com" className="p-text2">
                ruchika.jashnani@gmail.com
              </a>
            </div>
          </div>

          <a href={pdfs.Resume}>RESUME</a>
        </div>

        <div className="footer-main">
          {!isFormSubmitted ? (
            <div className="app__footer-form app__flex">
              <div className="app__flex">
                <input
                  className="p-text"
                  type="text"
                  placeholder="Your Name"
                  name="username"
                  value={username}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="app__flex">
                <input
                  className="p-text"
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={email}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <textarea
                  className="p-text"
                  placeholder="Your Message"
                  value={message}
                  name="message"
                  onChange={handleChangeInput}
                />
              </div>
              <button type="button" className="p-text" onClick={handleSubmit}>
                {!loading ? "Send Message" : "Sending..."}
              </button>
            </div>
          ) : (
            <div>
              <h3 className="head-text">Thank you for getting in touch!</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
