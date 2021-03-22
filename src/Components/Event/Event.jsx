import "./event.scss";
import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import contents from "./contents.json";

const Event = () => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      delay: 0,
      duration: 1000
    });
  }, []);

  return (
    <>
      <section className="event-section">
        <div className="event-badge">
          <div className="badgeContent">
            <h3>ECell - NIT Silhar</h3>
            <h4>Event Highlights</h4>
          </div>
        </div>
        {contents.map((obj, index) => {
          return (
            <div
              key={index}
              className={`${obj.event}-container`}
              data-aos="zoom-in"
            >
              <figure>
                <h2>{obj.title}</h2>
                <hr />
                <figcaption>
                  {obj.content}
                  <br />
                  <a href={obj.showMore}>Show More</a>
                </figcaption>
              </figure>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Event;
