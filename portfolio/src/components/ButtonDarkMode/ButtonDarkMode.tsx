import React, { useState } from "react";
import "./ButtonDarkMode.css";

export default function ButtonDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle("dark");
    setIsDarkMode(htmlElement.classList.contains("dark"));
  };

  return (
    <div>
      <button onClick={toggleDarkMode} className="button-darkmode p-2 bg-transparent">
        {isDarkMode ? (
          <img
          width="24"
          height="24"
          src="/icons/light_mode_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"
          alt="light-mode-icon"
           
            
          />
        ) : (
          <img
          width="24"
          height="24"
          src="/icons/dark_mode_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"
          alt="dark-mode-icon"
          style={{ filter: "invert(1)" }}
          />
        )}
      </button>
    </div>
  );
}