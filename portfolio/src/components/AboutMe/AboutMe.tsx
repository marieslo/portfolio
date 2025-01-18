import React from "react";
import "./AboutMe.css";


type AboutMeProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AboutMe({ isOpen, onClose }: AboutMeProps) {
  if (!isOpen) return null; 

  return (
    <div className="about-me-container">

      <div className="about-me-content">
        <button className="about-me__close-button" onClick={onClose}>
          &times;
        </button>
        {/* <div className="available">available for work</div> */}
        <section className="about-me__content">
      
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
        </section>
      </div>
    </div>
  );
}