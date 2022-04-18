import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

const About = () => {
  return (
    <>
      <div className="app__profiles">
        <h2 className="head-text1">
          My <span>Philosopy</span>
        </h2>
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__profile-item"
        >
          <div className="content">
            <p className="p-text" style={{ marginTop: 10 }}>
              <FaQuoteLeft />
              I write, mostly digital. I believe that moving culture should also
              deliver great business results, that being digital-first is how
              everything works and that being strategically driven is how great
              a creative is made. My response to “We have short timelines and
              tight budgets”, is a content engine capable of putting out content
              in 4 hours to a week (*Terms and conditions apply). In past, I
              have made thumb-stopping content across platforms from bumper ads,
              GIFs, cinemagraphs to product shoots.
              <FaQuoteRight />
            </p>
          </div>
          <h2 className="subscribe">P.S. You can subscribe to this service.</h2>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
