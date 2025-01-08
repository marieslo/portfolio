import React, { useRef } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cursor from "./components/Cursor/Cursor";
import ProjectItem from "./components/ProjectItem/ProjectItem";

import { motion, useAnimation, useInView } from "framer-motion";

export default function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Handle click sound effect
  React.useEffect(() => {
    const handleClick = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((err) => console.error("Audio playback error:", err));
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  // Define projects data
  const projects = [
    { id: 1, name: "Project 1", imageUrl: "https://picsum.photos/300?random=1", size: "big", description: "This is a big project about AI." },
    { id: 2, name: "Project 2", imageUrl: "https://picsum.photos/300?random=2", size: "medium", description: "This is a medium project on web development." },
    { id: 3, name: "Project 3", imageUrl: "https://picsum.photos/300?random=3", size: "small", description: "This is a small project for mobile apps." },
    { id: 4, name: "Project 4", imageUrl: "https://picsum.photos/300?random=4", size: "medium", description: "This project focuses on UI/UX design." },
    { id: 5, name: "Project 5", imageUrl: "https://picsum.photos/300?random=5", size: "big", description: "An advanced project about machine learning.An advanced project about machine learning.An advanced project about machine learning.An advanced project about machine learning.An advanced project about machine learning.An advanced project about machine learning.An advanced project about machine learning.An advanced project about machine learning.An advanced project about machine learning.An advanced project about machine learning.An advanced project about machine learning." },
  ];

  return (
    <div>
      <Cursor />
      <audio ref={audioRef} src="/sound/773604__kreha__smallclick.wav" />
      <div className="bg-gradient-to-b">
        <header>
          <Header />
        </header>
        <h1 className="text-center text-2xl font-bold mt-8">Recent Projects</h1>
        <main className="w-full overflow-hidden relative">
          <motion.div
            className="parallax-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
          </motion.div>
          <div className="bento-grid grid grid-cols-1 gap-8 px-4">
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

function ProjectWithScroll({ project }: { project: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-50px 0px" });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className={`project-item ${project.size}`}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}
    >
      <ProjectItem project={project} />
    </motion.div>
  );
}
