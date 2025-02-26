import React from "react";
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


const Menu = ({ isDarkMode, toggleDarkMode }: { isDarkMode: boolean; toggleDarkMode: () => void }) => (
  <div className={`flex flex-row justify-center p-1 gap-4 center font-bodytext text-sm ${isDarkMode ? "text-light-text" : "text-dark-text"}`}>
    <MenuLink to="projects">recent projects</MenuLink>
    <MenuLink to="aboutme">about me</MenuLink>
    <MenuLink to="connect">contacts</MenuLink>
    <div
      className={`flex items-center cursor-pointer ${isDarkMode ? "text-light-text" : "text-dark-text"}`}
      onClick={toggleDarkMode}
    >
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
          <span
            className="material-icons-outlined"
            style={{ fontSize: '16px' }}
          >
            {isDarkMode ? "light_mode" : "dark_mode"}
          </span>
        </motion.div>

    </div>
  </div>
);

export default function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  return (
    <div
    className={`fixed flex flex-col sm:flex-row items-center md:justify-between top-0 left-0 z-50 w-full border-b border-[#0000001a] shadow-[0_4px_6px_0_rgba(0,0,0,0.3)] font-bodytext font-thin tracking-tight px-6 py-2 ${
      isDarkMode ? "bg-dark-bg text-light-text" : "bg-light-bg text-dark-text"
    }`}
    >
      <div>
        <Menu isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <div className="flex flex-col gap-0 text-center">
        <h2 className="font-header font-bold text-lg">
          Marie Slovokhotov
        </h2>
        <div className="flex items-center justify-center w-full">
          <hr className="flex-1 border-t-1 border-color3 mx-1" />
          <span className="font-thin text-xl text-color3">•</span>
          <hr className="flex-1 border-t-1 border-color3 mx-1" />
        </div>
        <div className="font-thin text-xs sm:text-sm uppercase w-full">
        From idea to finished project
        </div>
      </div>
     
    </div>
  );
}
