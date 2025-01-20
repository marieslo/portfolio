import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import "./App.css"

import Footer from "./components/Footer/Footer";
import Cursor from "./components/Cursor/Cursor";
import Skills from "./components/Skills/Skills";
import Navbar from "./components/Navbar/Navbar";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import CarouselOfProjects from "./components/CarouselOfProjects/CarouselOfProjects";
import AboutMe from "./components/AboutMe/AboutMe";
import Matrix from "./components/Matrix/Matrix";
import ContactEmail from "./components/ContactEmail/ContactEmail";
import { TagsProvider } from "./context/TagsProvider";
import WaveLines from "./components/WaveLines/WaveLines";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  // Refs for sections
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const socialMediaRef = useRef<HTMLDivElement | null>(null);
  const aboutMeRef = useRef<HTMLDivElement | null>(null);

  // Scroll to a specific section
  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

    // GSAP ScrollTrigger Animations for Each Section
  useEffect(() => {
    gsap.utils.toArray('.section').forEach((section: any) => {
      gsap.fromTo(
        section,
        { y: "100px" }, 
        {
          y: "0px",  
          opacity: 1, 
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top bottom", 
            end: "bottom top",   
            scrub: 1, 
            markers: false,
          },
        }
      );
    });
    gsap.to(".section", {
      scrollTrigger: {
        trigger: ".section",
        start: "top top", 
        end: "+=100%", 
        scrub: 1,
        markers: false,
      },
    });

  }, []);

  type ProjectType = {
    id: number;
    name: string;
    imageUrl: string;
    size: string;
    description: string;
    tags: string[];
    tagIds: number[];
    itemCount: number;
  };

  const projects: ProjectType[] = [
    { id: 1, name: "Project 1", imageUrl: "/mockpics/image1.png", size: "small", description: "Description of Project 1", tags: ["tag1", "tag2"], tagIds: [101, 102], itemCount: 1 },
    { id: 2, name: "Project 2", imageUrl: "/mockpics/image2.png", size: "medium", description: "Description of Project 2", tags: ["tag3", "tag4"], tagIds: [103, 104], itemCount: 2 },
    { id: 3, name: "Project 3", imageUrl: "/mockpics/image3.png", size: "small", description: "Description of Project 3", tags: ["tag1", "tag2"], tagIds: [101, 102], itemCount: 3 },
    { id: 1, name: "Project 1", imageUrl: "/mockpics/image1.png", size: "small", description: "Description of Project 1", tags: ["tag1", "tag2"], tagIds: [101, 102], itemCount: 1 },
    { id: 2, name: "Project 2", imageUrl: "/mockpics/image2.png", size: "medium", description: "Description of Project 2", tags: ["tag3", "tag4"], tagIds: [103, 104], itemCount: 2 },
    { id: 3, name: "Project 3", imageUrl: "/mockpics/image3.png", size: "small", description: "Description of Project 3", tags: ["tag1", "tag2"], tagIds: [101, 102], itemCount: 3 },
  ];

  return (
    <TagsProvider>
      <Router>
        <div className="bg-gradient-to-b">
          <Cursor />
          <Matrix />
      
          <header style={{ position: "fixed", top: "0", width: "100%", transition: "top 0.3s" }}>
          <Navbar
          onClickProjects={() => scrollToSection(projectsRef)}
          onClickSkills={() => scrollToSection(skillsRef)}
          onClickContact={() => scrollToSection(socialMediaRef)}
          onClickAboutMe={() => scrollToSection(aboutMeRef)} 
        />
              <WaveLines />
          </header>
      
          <main>
            <Routes>
              <Route path="*" />
            </Routes>

            {/* Projects Section */}
            <section className="section projects-section" ref={projectsRef}>
              {/* <h1 className="section-title">Recent Projects</h1> */}
              <CarouselOfProjects projects={projects} />
            </section>

            {/* Skills Section */}
            <section className="section skills-section" ref={skillsRef}>
              {/* <h1 className="section-title">Skills</h1> */}
              <Skills />
            </section>

            {/* About Me Section */}
            <section className="section about-me-section" ref={aboutMeRef}>
              {/* <h1 className="section-title">About Me</h1> */}
              <AboutMe />
            </section>

            {/* Contact Section */}
            <section className="section contact-section" ref={socialMediaRef}>
              {/* <h1 className="section-title">Contacts</h1> */}
              <SocialMedia />
              <ContactEmail />
            </section>
          </main>

          <footer >
            <Footer />
          </footer>
        </div>
      </Router>
    </TagsProvider>
  );
}