import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Cursor from "./components/Cursor/Cursor";

const ProjectItem = ({ project }: { project: { id: number; name: string; imageUrl: string } }) => (
  <div className="project-item">
    <img src={project.imageUrl} alt={project.name} className="project-image" />
    <p>{project.name}</p>
  </div>
);

export default function App() {
  const el = useRef<HTMLSpanElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Handle click sound effect
  useEffect(() => {
    const handleClick = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((err) => console.error("Audio playback error:", err));
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  // Projects data
  const projects = Array.from({ length: 4 }).map((_, index) => ({
    id: index,
    name: `Project ${index + 1}`,
    imageUrl: `https://picsum.photos/300?random=${index + 1}`,
  }));

// Toggle dark mode
const toggleDarkMode = () => {
  const htmlElement = document.documentElement;
  htmlElement.classList.toggle("dark");
  setIsDarkMode(htmlElement.classList.contains('dark'));
 };

  return (
    <>
      <Cursor />
      <div id="root">
        <audio ref={audioRef} src="/sound/773604__kreha__smallclick.wav" />
        <div className="bg-gradient-to-b from-[#94B0DA] to-[#DCEDFF] dark:bg-gradient-to-b dark:from-[#2c3e50] dark:to-[#34495e]">
          {/* Header */}
          <header>
            <div className="header-container flex items-center">
              <div className="text-container mr-6 bg-red">
                <p className="text-[#000000] dark:text-[#ecf0f1]">Text about me Text about me Text about me</p>
              </div>
            </div>
            <button onClick={toggleDarkMode} className="p-2 bg-transparent">
               {isDarkMode ? (
                <img
                width="50"
                height="50"
                src="https://img.icons8.com/carbon-copy/50/light-on.png"
                alt="light-on"
                style={{ filter: isDarkMode ? 'invert(1)' : 'none' }}
              />
               ) : (
                 <img 
                 width="50" 
                 height="50" 
                 src="https://img.icons8.com/carbon-copy/50/light.png" 
                 alt="light-off" 
                 />
               )}
             </button>
          </header>

          {/* Main Content */}
          <main className="text-sm w-full overflow-hidden">
            {/* Banner */}
            <div className="banner">
              <h1 className="my-projects">
                <span ref={el} />
              </h1>
            </div>

            {/* Project List */}
            <div ref={projectsRef} className="projects-list">
              {projects.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          </main>

          {/* Footer */}
          <footer className="footer-container">
            <div className="icons-by-icons8">
              Icons by&nbsp;
              <a href="https://icons8.com" target="_blank" rel="noopener noreferrer" className="icons-by-icons8">
                Icons8
              </a>
            </div>
            <div className="social-media">
              <div className="flex justify-center space-x-8 mt-4">
                <a href="https://github.com/marieslo" target="_blank" rel="noopener noreferrer">
                  <img width="30" height="30" src="https://img.icons8.com/ios/505A5B/github.png" alt="github" />
                </a>
                <a href="https://linkedin.com/marie-slovokhotov" target="_blank" rel="noopener noreferrer">
                  <img width="30" height="30" src="https://img.icons8.com/ios/505A5B/linkedin.png" alt="linkedin" />
                </a>
                <a href="https://t.me/marieslo" target="_blank" rel="noopener noreferrer">
                  <img width="30" height="30" src="https://img.icons8.com/ios/505A5B/telegram.png" alt="telegram" />
                </a>
              </div>
            </div>
            <div className="text-center text-white mt-20 text-sm">
              &copy; {new Date().getFullYear()} Marie Slovokhotov
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}