import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

import Footer from "./components/Footer/Footer";
import Cursor from "./components/Cursor/Cursor";
import Skills from "./components/Skills/Skills";
import Navbar from "./components/Navbar/Navbar";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import ScrollProjects from "./components/ScrollProjects/SrollProjects";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactEmail from "./components/ContactEmail/ContactEmail";
import { TagsProvider } from "./context/TagsProvider";
import WaveSquares from "./components/WaveSquares/WaveSquares";
import Matrix from "./components/Matrix/Matrix";

gsap.registerPlugin(ScrollTrigger);

export default function App() {

  const projectsRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const socialMediaRef = useRef<HTMLDivElement | null>(null);
  const aboutMeRef = useRef<HTMLDivElement | null>(null);

 
  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
    
      },
    });

    timeline
      .to("img", {
        scale: 2,
        z: 350,
        transformOrigin: "center center",
        ease: "power1.inOut",
      })
      .to(
        ".section.hero",
        {
          scale: 1.1,
          transformOrigin: "center center",
          ease: "power1.inOut",
        },
        "<"
      );
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <TagsProvider>
      <Router>
        <div>
          <Cursor />
         
                 <WaveSquares/>
          <header style={{ position: "fixed", top: "0", transition: "top 0.3s" }}>
          
            <Navbar
              onClickProjects={() => scrollToSection(projectsRef)}
              onClickSkills={() => scrollToSection(skillsRef)}
              onClickContact={() => scrollToSection(socialMediaRef)}
              onClickAboutMe={() => scrollToSection(aboutMeRef)}
            />
          </header>
          {/* <Matrix/> */}
          <main>
            <Routes>
              <Route path="*" element={<></>} />
            </Routes>
           
            <div className="wrapper">
              <div className="content">
               
         
            <section className="section hero section about-me-section" ref={aboutMeRef}>
              <AboutMe />
            </section>

            <section className="section projects-section" ref={projectsRef}>
              <ScrollProjects />
            </section>

     
            <section className="section skills-section" ref={skillsRef}>
              <Skills />
            </section>

         
            <section className="section contact-section" ref={socialMediaRef}>
              <SocialMedia />
              <ContactEmail />
            </section>
 
              </div>
              <div className="image-container">
                <img
                  src="./public/images/33aa7dae-6bb9-467e-af19-a05caf2419f9.png"
                />
        
              </div>
            </div>

          </main>

          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </TagsProvider>
  );
}