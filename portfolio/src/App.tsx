import React, { useRef } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cursor from "./components/Cursor/Cursor";
import ProjectWithScroll from "./components/ProjectWithScroll/ProjectWithScroll";
import SquareBackground from "./components/SquareBackground/SquareBackground";
import Skills from "./components/Skills/Skills";
import Navbar from "./components/Navbar/Navbar";
import SocialMedia from "./components/SocialMedia/SocialMedia";
// import ContactEmail from "./components/ContactEmail/ContactEmail";

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

  const projects = [
    { id: 1, name: "Project 1", imageUrl: "/mockpics/image1.png", size: "big", description: "This is a big project about AI.", tags: ["AI", "React", "JavaScript"] },
    { id: 2, name: "Project 2", imageUrl: "/mockpics/image2.png", tags: ["Web Development", "JavaScript"] },
    { id: 3, name: "Project 3", imageUrl: "/mockpics/image3.png", size: "small", description: "This is a small project for mobile apps.", tags: ["React", "Mobile"] },
  ];

  // Scroll functions
  const scrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    console.log("Scrolling to Projects...");
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("projectsRef is not defined");
    }
  };
  
  const scrollToSocialMedia = () => {
    console.log("Scrolling to Social Media...");
    if (socialMediaRef.current) {
      socialMediaRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("socialMediaRef is not defined");
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
        <h2 className="text-4xl font-bold mb-10  bg-transparent text-white">Skills</h2>
          <div ref={skillsRef}>
            <Skills />
          </div>

          {/* Square Background */}
          <div className="square-background">
            <SquareBackground />
          </div>

          {/* Projects Section */}
          <h1>Recent Projects</h1>
          <div className="square-background">
            <SquareBackground />
          </div>
          <div ref={projectsRef} className="projects-container">
            {projects.map((project) => (
              <ProjectWithScroll key={project.id} project={project} />
            ))}
          </div>
        </main>

        <h2 className="text-4xl font-bold mb-10 bg-transparent text-white">Contacts</h2>
        <footer id="social-media" className="footer-container">
          <div ref={socialMediaRef} className="contact-social-wrapper">
            {/* <ContactEmail /> */}
            <SocialMedia />
          </div>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
