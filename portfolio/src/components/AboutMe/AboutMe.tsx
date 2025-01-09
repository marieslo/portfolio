import React from "react";
import "./AboutMe.css";
import SocialMedia from "../SocialMedia/SocialMedia";

type AboutMeProps = {
  isOpen: boolean;
};

export default function AboutMe({ isOpen }: AboutMeProps) {
  return (
    <>
      <div className="name">Marie Slovokhotov</div>
      <div className="available">available for work</div>
      <div className={`about-me ${isOpen ? "about-me--open" : "about-me--closed"}`}>
        <section className="about-me__content">
          <div className="about-me__icon">
            <img
              src="/icons/keyboard_arrow_up_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"
              alt="icon"
            />
          </div>
          <p className="about-me__text">Text about me Text about me Text about me</p>
          <p className="about-me__text">Text about me Text about me Text about me</p>
          <p className="about-me__text">Text about me Text about me Text about me</p>
          <SocialMedia />
        </section>
      </div>
    </>
  );
}