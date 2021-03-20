import React, { useEffect, useRef } from "react";
import "./Home.css";
import { Link, useHistory } from "react-router-dom";
import Event from "../Event/Event";
import img1 from "../images/svg1.svg";
import img2 from "../images/svg2.svg";
import data from "../../data/data.json";
import Animation from "../../Animation/Lottie";
import { fade, fadeAnimation, leftAnim } from "../../animation";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <div className="parallax">
        <motion.div className="wrapper">
          <motion.div variants={fadeAnimation} initial="hidden" animate="show">
            <motion.h3>Virtue</motion.h3>
            <motion.h3>Self-Dependency</motion.h3>
            <motion.h3>Willingness</motion.h3>
          </motion.div>
          <motion.h2 variants={fadeAnimation} initial="hidden" animate="show">
            <motion.span variants={fade}>E</motion.span>
            <motion.span variants={fade}>n</motion.span>
            <motion.span variants={fade}>t</motion.span>
            <motion.span variants={fade}>r</motion.span>
            <motion.span variants={fade}>e</motion.span>
            <motion.span variants={fade}>p</motion.span>
            <motion.span variants={fade}>r</motion.span>
            <motion.span variants={fade}>e</motion.span>
            <motion.span variants={fade}>n</motion.span>
            <motion.span variants={fade}>e</motion.span>
            <motion.span variants={fade}>u</motion.span>
            <motion.span variants={fade}>r</motion.span>
            <motion.span variants={fade}>s</motion.span>
            <motion.span variants={fade}>h</motion.span>
            <motion.span variants={fade}>i</motion.span>
            <motion.span variants={fade}>p</motion.span>{" "}
            <motion.span variants={fade}>C</motion.span>
            <motion.span variants={fade}>e</motion.span>
            <motion.span variants={fade}>l</motion.span>
            <motion.span variants={fade}>l</motion.span>
          </motion.h2>
          <motion.h1 variants={fadeAnimation} initial="hidden" animate="show">
            <motion.span variants={fade}>N</motion.span>
            <motion.span variants={fade}>I</motion.span>
            <motion.span variants={fade}>T</motion.span>{" "}
            <motion.span variants={fade}>S</motion.span>
            <motion.span variants={fade}>I</motion.span>
            <motion.span variants={fade}>L</motion.span>
            <motion.span variants={fade}>C</motion.span>
            <motion.span variants={fade}>H</motion.span>
            <motion.span variants={fade}>A</motion.span>
            <motion.span variants={fade}>R</motion.span>
          </motion.h1>
          <motion.button
            variants={fadeAnimation}
            initial="hidden"
            animate="show"
          >
            Explore
          </motion.button>
        </motion.div>
        <motion.div
          className="social"
          variants={leftAnim}
          initial="hidden"
          animate="show"
        >
          <ul>
            <li>
              <a href="https://www.facebook.com/adityasingh.sisodiya.927">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/__scortier__/">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/scortier/">
                <i className="fa fa-linkedin" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
      <div className="second-section">
        <div className="lottie">
          <div className="svg-upper">
            <img src={img1} alt />
          </div>
          <div className="svg-lower">
            <img src={img2} alt />
          </div>
          {/* <Lottie lottieRef={lottie} animationData={"https://assets8.lottiefiles.com/packages/lf20_k4qdp0xw.json"} background={"transparent"} speed={1} loop autoPlay /> */}
          <Animation />
        </div>
        <div className="about">
          <div className="line" />
          <h1>About us</h1>
          <h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ratione
            rem quam alias consequatur asperiores odit necessitatibus id,
            voluptas nostrum excepturi veritatis delectus? Repellendus,
            quibusdam a provident distinctio blanditiis debitis rerum
            necessitatibus sequi impedit maiores beatae corrupti amet nemo
            libero enim nulla est! Nostrum, maiores esse. Velit vero aut
            architecto?
          </h3>
        </div>
      </div>
      <div id="timeline">
        <h1>Timeline</h1>
        <ul>
          {data.map((obj, index) => {
            index = index + 1;
            return (
              <li>
                <a href={obj.url} style={{ animationDelay: `${index * 0.5}s` }}>
                  <div class="pic">
                    <img src={obj.src} alt="" />
                  </div>
                  <div class="txt">
                    <h3>{obj.date}</h3>
                    <p>{obj.content}</p>
                  </div>
                </a>
                <div
                  class="line"
                  style={{ animationDelay: `${index * 0.5}s` }}
                ></div>
              </li>
            );
          })}
        </ul>
      </div>
      <Event />
      {/* <div className="conference">
    <div className="background-container">
      <div className="image-divider" />
      <div className="background-divider" />
    </div>
  </div> */}

      {/*Utility and CDN's*/}
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossOrigin="anonymous"
      />
    </>
  );
};

export default Home;
