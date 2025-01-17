import React, { useRef } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cursor from "./components/Cursor/Cursor";
import Skills from "./components/Skills/Skills";
import Navbar from "./components/Navbar/Navbar";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import CarouselOfProjects from "./components/CarouselOfProjects/CarouselOfProjects";

export default function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Refs for each section
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const socialMediaRef = useRef<HTMLDivElement | null>(null);

  // Handle click sound effect
  React.useEffect(() => {
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
      name: "Project 1",
      imageUrl: "/mockpics/image3.png",
      size: "small",
      description: "Description of Project 1",
      tags: ["tag1", "tag2"],
      itemCount: 3, 
    },
    {
      id: 4,
      name: "Project 2",
      imageUrl: "/mockpics/image4.png",
      size: "medium",
      description: "Description of Project 2",
      tags: ["tag3", "tag4"],
      itemCount: 4, 
    },
  ];

  // Scroll functions
  const scrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSocialMedia = () => {
    if (socialMediaRef.current) {
      socialMediaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-b">
      <Cursor />
      <audio ref={audioRef} src="/sound/773604__kreha__smallclick.wav" />
      <div>
        <header>
          <Header />
          <Navbar
            onClickProjects={scrollToProjects}
            onClickSkills={scrollToSkills}
            onClickContact={scrollToSocialMedia}
          />
        </header>
        <main>
          <h1 className="mb-10">
            {/* Skills */}
          </h1>
          <div ref={skillsRef}>
            <Skills />
          </div>
          <h1 className="mb-10">
            {/* Recent Projects */}
            </h1>
          <div ref={projectsRef} className="projects-container">
            <CarouselOfProjects projects={projects} />
          </div>
        </main>

        <h1
          ref={socialMediaRef}
          id="social-media"
          className="mb-10">
          {/* Contacts */}
        </h1>

        <div className="contact-social-wrapper">
          <SocialMedia />
        </div>
        <footer className="footer-container">
          <Footer />
        </footer>
      </div>
    </div>
  );
}
