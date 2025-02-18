import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const MenuLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    smooth={true}
    duration={200}
    className="cursor-pointer hover:underline"
  >
    {children}
  </Link>
);

const HamburgerIcon = ({
  isMenuOpen,
  onClick,
  isDarkMode,
}: {
  isMenuOpen: boolean;
  onClick: () => void;
  isDarkMode: boolean;
}) => (
  <div className="flex flex-col lg:hidden cursor-pointer relative" onClick={onClick}>
    <motion.div
      initial={{ rotate: 0, translateY: 0 }}
      animate={{
        rotate: isMenuOpen ? 45 : 0,
        translateY: isMenuOpen ? 2 : 0,
      }}
      transition={{ duration: 0.3 }}
      className={`w-6 h-0.5 my-0.5 ${isDarkMode ? "bg-light-text" : "bg-dark-text"}`}
    />
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isMenuOpen ? 0 : 1 }}
      transition={{ duration: 0.3 }}
      className={`w-6 h-0.5 my-0.5 ${isDarkMode ? "bg-light-text" : "bg-dark-text"}`}
    />
    <motion.div
      initial={{ rotate: 0, translateY: 0 }}
      animate={{
        rotate: isMenuOpen ? -45 : 0,
        translateY: isMenuOpen ? -10 : 0,
      }}
      transition={{ duration: 0.3 }}
      className={`w-6 h-0.5 my-0.5 ${isDarkMode ? "bg-light-text" : "bg-dark-text"}`}
    />
  </div>
);

const Menu = ({ isDarkMode, toggleDarkMode }: { isDarkMode: boolean; toggleDarkMode: () => void }) => (
  <div className={`flex flex-col lg:flex-row p-1 gap-4 center font-subheader ${isDarkMode ? "text-light-text" : "text-dark-text"}`}>
    <MenuLink to="projects">recent projects</MenuLink>
    <MenuLink to="aboutme">about me</MenuLink>
    <MenuLink to="connect">contacts</MenuLink>
    <div
      className={`flex items-center cursor-pointer ${isDarkMode ? "text-light-text" : "text-dark-text"}`}
      onClick={toggleDarkMode}
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        <span className="material-icons-outlined">
          {isDarkMode ? "light_mode" : "dark_mode"}
        </span>
      </motion.div>
    </div>
  </div>
);


export default function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`fixed flex flex-row items-start justify-between top-0 left-0 z-50 w-full border-b border-[#0000001a] shadow-[0_4px_6px_0_rgba(0,0,0,0.3)] bg-opacity-30 backdrop-blur-md font-bodytext font-thintracking-tight px-6 py-2 ${
        isDarkMode ? "bg-dark-bg text-light-text" : "bg-light-bg text-dark-text"
      }`}
    >
      <div className="flex flex-col gap-1 font-header text-color3 uppercase">
        <h2 className="font-header font-bold">
          <Link to="aboutme" smooth={true} duration={500}>
            Marie Slovokhotov
          </Link>
        </h2>
        <div className="font-thin uppercase flex-1" style={{ width: "100%" }}>
          Full Stack Developer
        </div>
      </div>
      <div className="hidden lg:flex">
        <Menu isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <motion.div
        className={`lg:hidden w-full bg-opacity-90 transition-all ${isMenuOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col gap-2 bg-transparent items-end p-4 font-subheader text-color3">
          <Menu isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </motion.div>
      <HamburgerIcon isDarkMode={isDarkMode} isMenuOpen={isMenuOpen} onClick={toggleMenu} />
    </div>
  );
}