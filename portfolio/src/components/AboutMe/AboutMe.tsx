import React from "react";
import "./AboutMe.css";
import Matrix from "../Matrix/Matrix"; 

type AboutMeProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AboutMe({ isOpen, onClose }: AboutMeProps) {
  if (!isOpen) return null; 

  return (
    <div className="about-me-container">
      <Matrix /> 

      <div className="about-me-content">
        <button className="about-me__close-button" onClick={onClose}>
          &times;
        </button>

        <div className="about-me__photo-wrapper">
          <img
            src="/images/Marie's photo.jpg"
            alt="Marie Slovokhotov"
            className="about-me__photo"
          />
        </div>

        <div className="available">Available for work</div>

        <section className="about-me__content">
          <p className="about-me__text">Text about me Text about me Text about me</p>
          <p className="about-me__text">Text about me Text about me Text about me</p>
          <p className="about-me__text">Text about me Text about me Text about me</p>
        </section>
      </div>
    </div>
  );
}