import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";
import ButtonDarkMode from "../ButtonDarkMode/ButtonDarkMode";

export default function Navbar({ onClickProjects, onClickContact, onClickSkills }) {
  const [isSticky, setIsSticky] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Handle scroll and set which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 60);
      setIsScrolledDown(window.scrollY > 120);
    };

    // Intersection Observer setup to track visibility of sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Update the active section when it is in view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
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
    <>
      <motion.nav
        className={`navbar ${isSticky ? "navbar--sticky" : ""}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="mx-auto flex justify-between items-center w-full">
          {/* Dark Mode Button aligned to the left */}
          <ButtonDarkMode />

          <motion.div
            className="flex space-x-6"
            initial={false}
            variants={{
              normal: {
                gap: "1.5rem",
                y: 0,
                opacity: 1,
              },
              spread: {
                gap: "3rem",
                y: 20,
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
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

            <motion.a
              href="#skills"
              className={`navbar__link ${activeSection === "skills" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                onClickSkills();
              }}
              whileHover={{ scale: 1.1 }}
            >
              Skills
            </motion.a>

            <motion.a
              href="#about-me"
              className={`navbar__link ${activeSection === "about-me" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
              }}
              whileHover={{ scale: 1.1 }}
            >
              About Me
            </motion.a>

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
        </div>
      </motion.nav>

    </>
  );
}
