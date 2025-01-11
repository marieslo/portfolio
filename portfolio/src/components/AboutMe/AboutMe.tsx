import React from "react";
import "./AboutMe.css";

type AboutMeProps = {
  isOpen: boolean;
};

export default function AboutMe({ isOpen }: AboutMeProps) {
  return (
    <div className="about-me-container">
      <div className="name"></div>
      <div className="available">available for work</div>
      <div className={`about-me ${isOpen ? "about-me--open" : "about-me--closed"}`}>
        <section className="about-me__content">
          <p className="about-me__text">Text about me Text about me Text about me</p>
          <p className="about-me__text">Text about me Text about me Text about me</p>
          <p className="about-me__text">Text about me Text about me Text about me</p>
        </section>
      </div>
    </div>
  );
}