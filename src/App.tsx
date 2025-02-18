import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../public/style.scss";
import projects from "../public/data/projects.json";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionAboutMe from "./components/SectionAboutMe";
import SectionRecentProjects from "./components/SectionRecentProjects";
import SectionContacts from "./components/SectionContacts";
import { Container, Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(true);
  const [isProjectsOpen, setIsProjectsOpen] = useState(true);
  const [isConnectOpen, setIsConnectOpen] = useState(true);

  useEffect(() => {
    const userPreference = localStorage.getItem("theme");
    if (userPreference) {
      setIsDarkMode(userPreference === "dark");
    } else {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    const newTheme = !isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    const html = document.documentElement;
    if (newTheme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  };

  const toggleSection = (section: string) => {
    if (section === "aboutme") {
      setIsAboutMeOpen(!isAboutMeOpen);
    } else if (section === "projects") {
      setIsProjectsOpen(!isProjectsOpen);
    } else if (section === "connect") {
      setIsConnectOpen(!isConnectOpen);
    }
  };

  return (
    <Router>
      <div className={`${isDarkMode ? 'bg-dark-bg text-light-text' : 'bg-light-bg text-dark-text'}`}>
        <header className="fixed top-0 left-0 w-full z-50 bg-opacity-30 backdrop-blur-md">
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </header>
        <main>
          <Container>
            <Box className="space-y-8 rounded-b-3xl">
           
              <motion.div
                id="projects"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
                }}
                key="projects"
                className={` backdrop-blur-md bg-opacity-30 shadow-lg bg-color2 ${isDarkMode ? ' text-light-text' : 'text-dark-text'} rounded-3xl`}
              >
                <div
                  className="px-6 py-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection("projects")}
                >
                        <h1 className={`${isDarkMode ? 'text-light-text' : 'text-dark-text'} font-header font-thin tracking-tight text-center uppercase`}>
                    Recent Projects
                  </h1>
                  <span className={`material-icons-outlined ${isDarkMode ? 'text-light-text' : 'text-dark-text'}`}>
                    {isProjectsOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                  </span>
                </div>
                <AnimatePresence>
                  {isProjectsOpen && (
                    <motion.div
                      className={`p-2 bg-opacity-60 backdrop-blur-md ${isDarkMode ? 'bg-dark-bg text-light-text' : 'bg-light-bg text-dark-text'} rounded-b-3xl`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <SectionRecentProjects projects={projects} isDarkMode={isDarkMode} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div
                id="aboutme"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
                }}
                key="aboutme"
                className={` backdrop-blur-md bg-opacity-30 shadow-lg bg-color2 ${isDarkMode ? ' text-light-text' : 'text-dark-text'} rounded-3xl`}
              >
                <div
                  className="px-6 py-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection("aboutme")}
                >
                  <h1 className={`${isDarkMode ? 'text-light-text' : 'text-dark-text'} font-header font-thin tracking-tight text-center uppercase`}>
                    About Me
                  </h1>
                  <span className={`material-icons-outlined ${isDarkMode ? 'text-light-text' : 'text-dark-text'}`}>
                    {isAboutMeOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                  </span>
                </div>
                <AnimatePresence>
                  {isAboutMeOpen && (
                    <motion.div
                      className={`bg-opacity-60 backdrop-blur-md rounded-b-3xl ${isDarkMode ? 'bg-dark-bg text-light-text' : 'bg-light-bg text-dark-text'}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <SectionAboutMe isDarkMode={isDarkMode} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div
                id="connect"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
                }}
                key="connect"
                className={`w-full backdrop-blur-md bg-opacity-30 border-b border-[#0000001a] shadow-lg rounded-3xl  bg-color2 ${isDarkMode ? ' text-light-text' : 'text-dark-text'}}`}
              >
                <div
                  className="px-6 py-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection("connect")}
                >
                                  <h1 className={`${isDarkMode ? 'text-light-text' : 'text-dark-text'} font-header font-thin tracking-tight text-center uppercase`}>
                    Contacts
                  </h1>
                  <span className={`material-icons-outlined ${isDarkMode ? 'text-light-text' : 'text-dark-text'}`}>
                    {isConnectOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                  </span>
                </div>
                <AnimatePresence>
                  {isConnectOpen && (
                    <motion.div
                      className={`px-6 py-4 bg-opacity-60 backdrop-blur-md ${isDarkMode ? 'bg-dark-bg text-light-text' : 'bg-light-bg text-dark-text'} rounded-b-3xl`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <SectionContacts isDarkMode={isDarkMode} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Box>
          </Container>
        </main>
        <footer>
          <Footer isDarkMode={isDarkMode} />
        </footer>
        <Routes>
          <Route path="*" element={null} />
        </Routes>
      </div>
    </Router>
  );
}