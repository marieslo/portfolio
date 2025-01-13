import React, { useState } from "react";
import "./Header.css";
import AboutMe from "../AboutMe/AboutMe";
import SocialMedia from "../SocialMedia/SocialMedia";

export default function Header() {
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);

  const toggleAboutMe = () => {
    setIsAboutMeOpen((prev) => !prev); 
  };

  return (
    <div className="header-wrapper">
   
      <div className="header">
        <AboutMe isOpen={isAboutMeOpen} />
        <div className="header__toggle-about-me" onClick={toggleAboutMe}>
          <img
            src={
              isAboutMeOpen
                ? "/icons/keyboard_arrow_up_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"
                : "/icons/menu_icon.png"
            }
            className="toggle-icon"
          />
          {isAboutMeOpen ? (
            <img src="/icons/close_icon.png" className="close-icon" />
          ) : (
            <span>Marie Slovokhotov</span>
          )}
        </div>
        <SocialMedia />
      </div>
    </div>
  );
}