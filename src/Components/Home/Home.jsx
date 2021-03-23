import React, { useState } from "react";
import "./Home.css";
import { Link, useHistory } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Event from "../Event/Event";
import Gallery from "../gallery/Gallery";
import img3 from "../images/svg3.svg";
import data from "../../data/data.json";
import {
  fade,
  fadeAnimation,
  leftAnim,
  scrollRightAnim,
  scrollLeftAnim,
  scrollFade,
} from "../../animation";
import { motion } from "framer-motion";
import { useScroll } from "../../scrollAnimation";
const Home = () => {
  const [element1, controls1] = useScroll();
  const [element3, controls3] = useScroll();
  const [element2, controls2] = useScroll();
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
            Entrepreneurship Cell
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
      <div className="second-section" ref={element1}>
        <motion.div
          className="lottie"
          id="the_lottie"
          animate={controls1}
          variants={scrollLeftAnim}
          initial="hidden"
        >
          {/* <Lottie lottieRef={lottie} animationData={"https://assets8.lottiefiles.com/packages/lf20_k4qdp0xw.json"} background={"transparent"} speed={1} loop autoPlay /> */}
          <img src={img3} alt="" className="svg-middle" />
        </motion.div>
        <motion.div
          className="about"
          animate={controls1}
          variants={scrollRightAnim}
          initial="hidden"
        >
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
        </motion.div>
      </div>
      <motion.div
        id="timeline"
        ref={element2}
        variants={scrollFade}
        animate={controls2}
        initial="hidden"
      >
        <h1>Timeline</h1>
        <ul>
          {data.map((obj, index) => {
            index = index + 1;
            return (
              <li key={index}>
                <a href={obj.url} style={{ animationDelay: `${index * 0.5}s` }}>
                  <div className="pic">
                    <img src={obj.src} alt="" />
                  </div>
                  <div className="txt">
                    <h3>{obj.date}</h3>
                    <p>{obj.content}</p>
                  </div>
                </a>
                <div
                  className="line"
                  style={{ animationDelay: `${index * 0.5}s` }}
                ></div>
              </li>
            );
          })}
        </ul>
      </motion.div>
      <motion.div
        ref={element3}
        variants={scrollFade}
        animate={controls3}
        initial="hidden"
      >
        <Gallery />
      </motion.div>
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
