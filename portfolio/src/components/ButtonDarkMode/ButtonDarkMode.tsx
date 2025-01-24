import React, { useEffect, useState } from "react";
import "./ButtonDarkMode.css";

export default function ButtonDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle("dark");
    setIsDarkMode(htmlElement.classList.contains("dark"));
  };

  // Detect user's system theme on initial load
  useEffect(() => {
    const htmlElement = document.documentElement;
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDarkMode) {
      htmlElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      htmlElement.classList.remove("dark");
      setIsDarkMode(false);
    }
    // Listen for changes to system theme
    const handleThemeChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        htmlElement.classList.add("dark");
        setIsDarkMode(true);
      } else {
        htmlElement.classList.remove("dark");
        setIsDarkMode(false);
      }
    };
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleThemeChange);
    // Cleanup listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  return (
      <button
        onClick={toggleDarkMode}
      >
        {isDarkMode ? (
          <img
            width="24"
            height="24"
            src="/icons/light_mode_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"
            alt="light-mode-icon"
            className="button-darkmode"
          />
        ) : (
          <img
            width="24"
            height="24"
            src="/icons/dark_mode_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"
            alt="dark-mode-icon"
            className="button-darkmode"
            // style={{ filter: "invert(1)" }}
          />
        )}
      </button>
  );
}