import React, { useState } from "react";
import "./Header.css";
import AboutMe from "../AboutMe/AboutMe";

export default function Header() {
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);

  const toggleAboutMe = () => {
    setIsAboutMeOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="header bg-transparent text-white py-6 flex items-center justify-between relative">
        <div
          className="header__toggle-about-me ml-4 flex items-center cursor-pointer"
          onClick={toggleAboutMe}
        >
          <img
            src={
              isAboutMeOpen
                ? "/icons/keyboard_arrow_up_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"
                : "/icons/menu_icon.png"
            }
            className="toggle-icon"
            alt="Toggle About Me"
          />
          <span className="ml-2">
            {isAboutMeOpen ? (
              <img
                src="/icons/close_icon.png"
                className="close-icon cursor-pointer"
                alt="Close About Me"
                onClick={(e) => {
                  e.stopPropagation(); 
                  setIsAboutMeOpen(false); 
                }}
              />
            ) : (
              ""
            )}
          </span>
        </div>
      </div>

      {/* About Me Section */}
      <AboutMe isOpen={isAboutMeOpen} onClose={() => setIsAboutMeOpen(false)} />
    </div>
  );
}
