import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";


export default function Navbar({ onClickProjects, onClickSkills, onClickAboutMe, onClickContact }) {

  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
   
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.nav
      className={`navbar`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
          <motion.div
            className="flex space-x-6"
            initial={false}
            variants={{
              normal: { gap: "1.5rem", y: 0, opacity: 1 },
              spread: { gap: "3rem", y: 20, opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
    
          <motion.a
              href="#about-me"
              className={`navbar__link ${activeSection === "about-me" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                onClickAboutMe();
              }}
              whileHover={{ scale: 1.1 }}
            >
              About Me
            </motion.a>

            <motion.a
              href="#projects"
              className={`navbar__link ${activeSection === "projects" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                onClickProjects();
              }}
              whileHover={{ scale: 1.1 }}
            >
              Projects
            </motion.a>

            {/* <motion.a
              href="#skills"
              className={`navbar__link ${activeSection === "skills" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                onClickSkills();
              }}
              whileHover={{ scale: 1.1 }}
            >
              Skills
            </motion.a> */}

            <motion.a
              href="#contact"
              className={`navbar__link ${activeSection === "contact" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                onClickContact();
              }}
              whileHover={{ scale: 1.1 }}
            >
              Contacts
            </motion.a> 
          </motion.div>
    </motion.nav>
  );
}