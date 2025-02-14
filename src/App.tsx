import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../public/style.scss";

import projects from "./data/projects.json";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CV from "./components/CV";
import ScrollProjects from "./components/ScrollProjects";
import SocialMedia from "./components/SocialMedia";
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
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
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
      <div className={`app-container ${isDarkMode ? "dark" : "light"}`} >
        <header className="fixed top-0 left-0 w-full z-50 bg-opacity-30 backdrop-blur-md">
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </header>
        <main className="mt-20">
          <Container>
            <Box className="space-y-8 rounded-3xl">
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
                className={`bg-opacity-30 backdrop-blur-md shadow-lg rounded-3xl  ${isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'}`}
              >
                <div
                  className="px-6 py-4 flex justify-between items-center cursor-pointer rounded-3xl"
                  onClick={() => toggleSection("aboutme")}
                >
                  <h1 className={`text-color2 text-thin font-header font-thin tracking-tight text-center uppercase ${isDarkMode ? 'text-dark-text' : 'text-light-text'}`}>
                    About Me
                  </h1>
                  <span className="material-icons text-color2">
                    {isAboutMeOpen ? "expand_less" : "expand_more"}
                  </span>
                </div>
                <AnimatePresence>
                  {isAboutMeOpen && (
                    <motion.div
                      className={`px-6 py-4 bg-opacity-40 backdrop-blur-md rounded-3xl ${isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CV isDarkMode={isDarkMode} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
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
                className={`w-full bg-opacity-30 backdrop-blur-md border-b border-[#0000001a] shadow-lg rounded-3xl ${isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'}`}
              >
                <div
                  className="px-6 py-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection("projects")}
                >
                  <h1 className={`text-color2 font-header font-thin tracking-tight text-center uppercase ${isDarkMode ? 'text-dark-text' : 'text-light-text'}`}>
                    Recent Projects
                  </h1>
                  <span className="material-icons text-color2">
                    {isProjectsOpen ? "expand_less" : "expand_more"}
                  </span>
                </div>
                <AnimatePresence>
                  {isProjectsOpen && (
                    <motion.div
                      className={`px-6 py-4 bg-opacity-40 backdrop-blur-md  ${isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ScrollProjects projects={projects} isDarkMode={isDarkMode} />
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
                className={`w-full bg-opacity-30 backdrop-blur-md border-b border-[#0000001a] shadow-lg rounded-3xl  ${isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'}`}
              >
                <div
                  className="px-6 py-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection("connect")}
                >
                  <h1 className={`text-color2 font-header font-thin tracking-tight text-center uppercase  ${isDarkMode ? 'text-dark-text' : 'text-light-text'}`}>
                    Connect with Me
                  </h1>
                  <span className="material-icons text-color2">
                    {isConnectOpen ? "expand_less" : "expand_more"}
                  </span>
                </div>
                <AnimatePresence>
                  {isConnectOpen && (
                    <motion.div
                      className={`px-6 py-4 bg-opacity-40 backdrop-blur-md ${isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <SocialMedia isDarkMode={isDarkMode} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Box>
          </Container>
        </main>
        <footer className={`${isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'}`}>
          <Footer isDarkMode={isDarkMode} />
        </footer>
        <Routes>
          <Route path="*" element={null} />
        </Routes>
      </div>
    </Router>
  );
}