import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // Set hover effect on mouse over links or elements
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    const handleClick = () => {
      const clickSound = document.getElementById("click-sound") as HTMLAudioElement;
      if (clickSound) {
        clickSound.currentTime = 0; 
        clickSound.play(); 
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const projects = Array.from({ length: 10 }).map((_, index) => ({
    id: index,
    name: `Project ${index + 1}`,
    dateAdded: new Date(2022, index, 1),
    imageUrl: `https://picsum.photos/300?random=${index + 1}`,
  }));

  return (
    <div id="root">
      {/* Custom cursor */}
      <div
        className={`cursor-dot ${isHovered ? "cursor-dot--hovered" : ""}`}
        style={{
          transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`,
        }}
      ></div>
    

      <audio id="click-sound" src="/sound/mouse-click-117076.mp3"></audio>
      <div className="dot dot1"></div>
      <div className="dot dot2"></div>
      <div className="dot dot3"></div>
      <div className="flex flex-col items-center text-center text-white py-10 space-y-10">
        <header>
          <div className="header-container flex items-center">
            <div className="text-container mr-6">
              <div>Text about me Text about me Text about me</div>
            </div>
          </div>
        </header>
        <main className="text-xl w-full overflow-hidden">
          <h1 className="my-projects">MY PROJECTS</h1>
          <div className="slider">
            <div className="slider-track">
              {projects.map((project) => (
                <div key={project.id} className="slider-item">
                  <img src={project.imageUrl} alt={project.name} />
                </div>
              ))}
              {projects.map((project) => (
                <div key={`dup-${project.id}`} className="slider-item">
                  <img
                    src={project.imageUrl}
                    alt={`Project Duplicate ${project.name}`}
                  />
                  <p>{project.name}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
        <footer className="footer-container">
          <div className="icons-by-icons8">
            Icons by&nbsp;
            <a
              href="https://icons8.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icons-by-icons8"
            >
              Icons8
            </a>
          </div>
          <div className="social-media">
            <div className="flex justify-center space-x-8 mt-4">
              <a
                href="https://github.com/marieslo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios/505A5B/github.png"
                  alt="github"
                />
              </a>
              <a
                href="https://linkedin.com/marie-slovokhotov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios/505A5B/linkedin.png"
                  alt="linkedin"
                />
              </a>
              <a
                href="https://t.me/marieslo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios/505A5B/telegram.png"
                  alt="telegram"
                />
              </a>
            </div>
          </div>
          <div className="text-center text-white mt-20 text-sm">
            &copy; 2022 - {new Date().getFullYear()} | Marie Slovokhotov
          </div>
        </footer>
      </div>
    </div>
  );
}