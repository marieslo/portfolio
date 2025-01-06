import React, {useState} from 'react'
import "./ButtonDarkMode.css"

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
        width="50"
        height="50"
        src="https://img.icons8.com/carbon-copy/50/light-on.png"
        alt="light-on"
        style={{ filter: isDarkMode ? "invert(1)" : "none" }}
      />
    ) : (
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/carbon-copy/50/light.png"
        alt="light-off"
      />
    )}
  </button>            
  </div>
  )
}
