import React from "react";
import "./AboutMe.css";


export default function AboutMe() {

  return (
    <div className="about-me-container">

      <div className="about-me-content">
        {/* <div className="available">available for work</div> */}
        <div className="about-me__content">
      
          <div className="about-me__content-wrapper">
            <p className="about-me__text">
              <span className="about-me__photo-wrapper">
                <img
                  src="/images/Marie's photo.jpg"
                  alt="Marie Slovokhotov"
                  className="about-me__photo"
                />
              </span>
              Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}