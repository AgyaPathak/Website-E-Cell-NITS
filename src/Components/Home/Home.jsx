import React,{useEffect, useRef} from "react";
import "./Home.css";
import {Link,useHistory} from 'react-router-dom';
import img1 from "../images/svg1.svg";
import img2 from "../images/svg2.svg";
import data from "../../data/data.json";
import Animation from "../../Amination/Lottie"
const Home=()=>{
    console.log(data);
    

    return (
        <>
  <div className="parallax">
    <div className="wrapper">
      <div>
        <h3>Virtue</h3>
        <h3>Self-Dependency</h3>
        <h3>Willingness</h3>
      </div>
      <h2>
        <span>E</span><span>n</span><span>t</span>r<span>e</span><span>p</span><span>r</span><span>e</span><span>n</span><span>e</span><span>u</span><span>r</span><span>s</span><span>h</span><span>i</span><span>p</span> <span>C</span><span>e</span><span>l</span><span>l</span>
      </h2>
      <h1>
        <span>N</span><span>I</span><span>T</span> <span>S</span><span>I</span><span>L</span><span>C</span><span>H</span><span>A</span><span>R</span>
      </h1>
      <button>Explore</button>
    </div>
    <div className="social">
      <ul>
        <li>
          <a href="https://www.facebook.com/adityasingh.sisodiya.927"><i className="fa fa-facebook" aria-hidden="true" /></a>
        </li>
        <li>
          <a href="https://www.instagram.com/__scortier__/"><i className="fa fa-instagram" aria-hidden="true" /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/scortier/"><i className="fa fa-linkedin" aria-hidden="true" /></a>
        </li>
      </ul>
    </div>
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
      <Animation/>
    </div>
    <div className="about">
      <div className="line" />
      <h1>About us</h1>
      <h3>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ratione
        rem quam alias consequatur asperiores odit necessitatibus id, voluptas
        nostrum excepturi veritatis delectus? Repellendus, quibusdam a
        provident distinctio blanditiis debitis rerum necessitatibus sequi
        impedit maiores beatae corrupti amet nemo libero enim nulla est!
        Nostrum, maiores esse. Velit vero aut architecto?
      </h3>
    </div>
  </div>
  <div id="timeline">
    <h1>Timeline</h1>
    <ul>
        {
            data.map((obj,index)=>{
                index=index+1;
                return(
                    <li>
                                        <a
                                    href={obj.url}
                                    style={{animationDelay:`${index * 0.5}s`}}>
                                    <div class="pic">
                                        <img
                                            src={obj.src}
                                            alt=""
                                        />
                                    </div>
                                    <div class="txt">
                                        <h3>{obj.date}</h3>
                                        <p>
                                            {obj.content}
                                        </p>
                                    </div>
                                </a>
                                <div
                                    class="line"
                                    style={{animationDelay:`${index * 0.5}s`}}>
                                </div>
                    </li>
                )
            })
        }



    </ul>
  </div>
  {/* <div className="conference">
    <div className="background-container">
      <div className="image-divider" />
      <div className="background-divider" />
    </div>
  </div> */}




  {/*Utility and CDN's*/}
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />

        </>
 )
}


export default Home;