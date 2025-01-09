import React, { useState } from "react";
import "./Header.css";
import AboutMe from "../AboutMe/AboutMe";
import ButtonDarkMode from "../ButtonDarkMode/ButtonDarkMode";

export default function Header() {
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);

  const toggleAboutMe = () => {
    setIsAboutMeOpen((prev) => !prev); 
  };

  return (
    <header className="header">
      <ButtonDarkMode />
      <AboutMe isOpen={isAboutMeOpen} /> 
      <div className="header__toggle-about-me" onClick={toggleAboutMe}>
        <img
          src={isAboutMeOpen 
            ? "/icons/keyboard_arrow_up_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" 
            : "/icons/keyboard_arrow_down_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"
          }
          className="toggle-icon"
        />
        {isAboutMeOpen ? (
          <img 
            src="/icons/close_icon.png" 
            className="close-icon" 
          />
        ) : (
          "About Me"
        )}
      </div>
    </header>
  );
}