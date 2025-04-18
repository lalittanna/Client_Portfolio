import React from "react";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";
import workItems from "./WorkData";

const Work = () => {
    return (
        <>
            <h2 className="work-title">
                My <span>Work</span>
            </h2>

            <motion.div
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio"
            >
                {workItems.map((item, index) => (
                    <div className="app__work-item app__flex" key={index}>
                        <div className="app__work-img app__flex">
                            <video autoPlay loop muted>
                                <source src={item.video} type="video/mp4" />
                            </video>

                            <a
                                href={`/work/${index}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="app__work-hover app__flex"
                            >
                                <motion.div
                                    whileInView={{ scale: [0, 1] }}
                                    whileHover={{ scale: [1, 0.9] }}
                                    transition={{ duration: 0.25 }}
                                    className="app__flex"
                                >
                                    <AiFillEye />
                                </motion.div>
                            </a>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">{item.title}</h4>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Work, "app__works"),
    "work",
    "app__primarybg"
);
