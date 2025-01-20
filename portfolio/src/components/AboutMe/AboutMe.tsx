import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-me-container" id="about-me">
      <div className="about-me__content-wrapper">
        <div className="about-me__text">
          <span className="about-me__photo-wrapper">
            <div className="about-me__photo-container">
              <div className="about-me__photo-border">
              </div>
              <div className="about-me__photo">
                <img
                  src="/images/Marie's photo.png"
                  alt="My photo"
                  className="about-me__image"
                />
              </div>
            </div>
          </span>
          Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

          Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

          Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          
        </div>
      </div>
    </div>
  );
}
