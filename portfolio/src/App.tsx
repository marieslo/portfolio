import React, { useRef, useEffect } from "react";
import "./App.css";

import Footer from "./components/Footer/Footer";
import Cursor from "./components/Cursor/Cursor";
import Skills from "./components/Skills/Skills";
import Navbar from "./components/Navbar/Navbar";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import CarouselOfProjects from "./components/CarouselOfProjects/CarouselOfProjects";
import AboutMe from "./components/AboutMe/AboutMe";
import Matrix from "./components/Matrix/Matrix";
import ContactEmail from "./components/ContactEmail/ContactEmail"

export default function App() {
  // Refs for audio and sections
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const socialMediaRef = useRef<HTMLDivElement | null>(null);
  const aboutMeRef = useRef<HTMLDivElement | null>(null);

  // Handle click sound effect
  useEffect(() => {
    const handleClick = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((err) =>
          console.error("Audio playback error:", err)
        );
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  // Header scroll effect
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const header = document.querySelector("header") as HTMLElement;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollDifference = prevScrollPos - currentScrollPos;

      if (currentScrollPos > 100) {
        if (scrollDifference >= 10) {
          header.style.top = "0";
        } else if (scrollDifference <= -10) {
          header.style.top = `-${header.offsetHeight}px`;
        }
      } else {
        header.style.top = "0";
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Project type and data
  type ProjectType = {
    id: number;
    name: string;
    imageUrl: string;
    size: string;
    description: string;
    tags: string[];
    itemCount: number;
  };

  const projects: ProjectType[] = [
    {
      id: 1,
      name: "Project 1",
      imageUrl: "/mockpics/image1.png",
      size: "small",
      description: "Description of Project 1",
      tags: ["tag1", "tag2"],
      itemCount: 1,
    },
    {
      id: 2,
      name: "Project 2",
      imageUrl: "/mockpics/image2.png",
      size: "medium",
      description: "Description of Project 2",
      tags: ["tag3", "tag4"],
      itemCount: 2,
    },
    {
      id: 3,
      name: "Project 3",
      imageUrl: "/mockpics/image3.png",
      size: "small",
      description: "Description of Project 3",
      tags: ["tag1", "tag2"],
      itemCount: 3,
    },
  ];

  // Scroll to a specific section
  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-b">
      <Cursor />
      <audio ref={audioRef} src="/sound/773604__kreha__smallclick.wav" />
      <Matrix /> 
      <header style={{ position: "fixed", top: "0", width: "100%", transition: "top 0.3s", zIndex:8000  }}>
        <Navbar
          onClickProjects={() => scrollToSection(projectsRef)}
          onClickSkills={() => scrollToSection(skillsRef)}
          onClickContact={() => scrollToSection(socialMediaRef)}
        />
      </header>

      <main>
       

      {/* Projects Section */}
        <section className="projects-section" ref={projectsRef}>
          <h1 className="section-title">Recent Projects</h1>
          <CarouselOfProjects projects={projects} />
        </section> 

        {/* Skills Section */}
        <section className="skills-section" ref={skillsRef}>
          <h1 className="section-title">Skills</h1>
          <Skills />
        </section>

        {/* About Me Section */}
        <section className="skills-section" ref={aboutMeRef}>
                  <h1 className="section-title">About Me</h1>
          <AboutMe/>
        </section>

        {/* Contacts Section */}
        <section className="social-media-section" ref={socialMediaRef}>
          <h1 className="section-title">Contacts</h1>
          <SocialMedia />
         <ContactEmail/>
        </section>
      </main>

      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
}
