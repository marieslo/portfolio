import React, { useEffect, useRef } from "react";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cursor from "./components/Cursor/Cursor";
import ProjectItem from "./components/ProjectItem/ProjectItem";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((err) => {
          console.error("Audio playback error:", err);
        });
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const projects = projectsRef.current?.querySelectorAll(".project-item");
  
    projects?.forEach((project, index) => {
      gsap.fromTo(
        project,
        { opacity: 0, y: 100 }, 
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: project,
            start: "top bottom",   
            end: "top center",     
            scrub: true,      
            once: true,            
          },
        }
      );
    });
  }, []);
  

  const projects = [
    { id: 1, name: "Project 1", imageUrl: "https://picsum.photos/300?random=1", size: "big", description: "This is a big project about AI." },
    { id: 2, name: "Project 2", imageUrl: "https://picsum.photos/300?random=2", size: "medium", description: "This is a medium project on web development." },
    { id: 3, name: "Project 3", imageUrl: "https://picsum.photos/300?random=3", size: "small", description: "This is a small project for mobile apps." },
    { id: 4, name: "Project 4", imageUrl: "https://picsum.photos/300?random=4", size: "medium", description: "This project focuses on UI/UX design." },
    { id: 5, name: "Project 5", imageUrl: "https://picsum.photos/300?random=5", size: "big", description: "An advanced project about machine learning." },
  ];

  return (
    <div>
      <Cursor />
      <audio ref={audioRef} src="/sound/773604__kreha__smallclick.wav" />
      <div className="bg-gradient-to-b">
        <header>
          <Header />
        </header>

        <main className="w-full overflow-hidden">
          <div ref={projectsRef} className="bento-grid">
            {projects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </div>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
