import React, { useRef } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cursor from "./components/Cursor/Cursor";
import ProjectWithScroll from "./components/ProjectWithScroll/ProjectWithScroll";
import SquareBackground from "./components/SquareBackground/SquareBackground";
import ButtonDarkMode from "./components/ButtonDarkMode/ButtonDarkMode";

export default function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  document.body.addEventListener('click', function() {
    if (document.body.style.backgroundColor === 'rgb(0, 0, 0)') {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    } else {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
  });

  
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
    { id: 1, name: "Project 1", imageUrl: "https://picsum.photos/300?random=1", size: "big", description: "This is a big project about AI. This is a big project about AI.This is a big project about AI.This is a big project about AI.This is a big project about AI.This is a big project about AI." },
    { id: 2, name: "Project 2", imageUrl: "https://picsum.photos/300?random=2", size: "medium", description: "This is a medium project on web development.This is a medium project on web development.This is a medium project on web development.This is a medium project on web development.This is a medium project on web development." },
    { id: 3, name: "Project 3", imageUrl: "https://picsum.photos/300?random=3", size: "small", description: "This is a small project for mobile apps." },
    { id: 4, name: "Project 4", imageUrl: "https://picsum.photos/300?random=4", size: "medium", description: "This project focuses on UI/UX design." },
    { id: 5, name: "Project 5", imageUrl: "https://picsum.photos/300?random=5", size: "big", description: "An advanced project about machine learning." },
  ];

  return (
    <div className="bg-gradient-to-b">
      <Cursor />
      <audio ref={audioRef} src="/sound/773604__kreha__smallclick.wav" />
      <div>
      <header>
          <Header />  
          <ButtonDarkMode />
        </header>  
        <main>
        <div className="square-background">
                  <SquareBackground />
                </div>
          <h1>Recent projects</h1>
          <div className="square-background">
                  <SquareBackground />
                </div>
          <div className="bento-grid">
            {projects.map((project) => (
              <ProjectWithScroll key={project.id} project={project} />
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

<ProjectWithScroll project={undefined}/>