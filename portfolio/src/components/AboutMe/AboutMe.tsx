import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-me-container" id="about-me">
  
          <div className="about-me__content-wrapper">
      
              <span className="about-me__photo-wrapper">
                <img
                  src="/images/Marie's photo.png"
                  alt="My photo"
                  className="about-me__photo"
                />
              </span>
              {/* <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/skeuomorphism/50/ok.png"
                  alt="ok"
                  className="about-me__icon"
                />
                <div className="available">available for work</div> */}
                <div className="about-me__text">
              Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
      
        </div>
      </div>
  );
}