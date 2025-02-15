import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`fixed flex items-center justify-between top-0 left-0 z-50 w-full border-b border-[#0000001a] shadow-[0_4px_6px_0_rgba(0,0,0,0.3)] bg-opacity-30 backdrop-blur-md font-header font-thin text-sm tracking-tight px-6 py-2 ${
        isDarkMode ? "bg-dark-bg text-light-text" : "bg-light-bg text-dark-text"
      }`}
    >
      <div className="flex flex-col items-start gap-1 text-color3 uppercase">
          <h2 className="text-lg font-extrabold">
            <Link to="aboutme" smooth={true} duration={500}>
              Marie Slovokhotov
            </Link>
          </h2>
          <div className="text-lg font-thin uppercase flex-1" style={{ width: "100%" }}>
            Full Stack Developer
          </div>
        </div>
      <div
        className="flex flex-col lg:hidden items-center cursor-pointer relative"
        onClick={toggleMenu}
      >
            <motion.div
          initial={{ rotate: 0, translateY: 0 }}
          animate={{
            rotate: isMenuOpen ? 45 : 0,
            translateY: isMenuOpen ? 10 : 0,
          }}
          transition={{ duration: 0.3 }}
          className={`w-6 h-0.5 my-1 ${
            isDarkMode ? "bg-dark-text" : "bg-light-text" 
          }`}
        />
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isMenuOpen ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className={`w-6 h-0.5 my-1 ${
            isDarkMode ? "bg-dark-text" : "bg-light-text"
          }`}
        />
        <motion.div
          initial={{ rotate: 0, translateY: 0 }}
          animate={{
            rotate: isMenuOpen ? -45 : 0,
            translateY: isMenuOpen ? -10 : 0,
          }}
          transition={{ duration: 0.3 }}
          className={`w-6 h-0.5 my-1 ${
            isDarkMode ? "bg-dark-text" : "bg-light-text" 
          }`}
        />
        </div>
        <motion.div
          className={`lg:hidden right-0 bg-opacity-90 ${
            isMenuOpen ? "block" : "hidden"
          } bg-transparent`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
        <div className="flex flex-col items-start gap-4 p-4">
          <Link
            to="aboutme"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-"
          >
            About Me
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-color-dark"
          >
            Recent Projects
          </Link>
          <Link
            to="connect"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-color-dark"
          >
            Contact
          </Link>
        </div>
      </motion.div>
      <div className="hidden lg:flex lg:gap-8 lg:px-6 lg:items-center">
        <Link
          to="aboutme"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-color-dark"
        >
          About Me
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-color-dark"
        >
          Recent Projects
        </Link>
        <Link
          to="connect"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-color-dark"
        >
          Contacts
        </Link>
      </div>
      <div className="flex items-center cursor-pointer lg:ml-6" onClick={toggleDarkMode}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
          <span className="material-icons">
            {isDarkMode ? "brightness_4" : "brightness_7"}
          </span>
        </motion.div>
      </div>
    </div>
  );
}