import React, { useRef } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cursor from "./components/Cursor/Cursor";
import ProjectItem from "./components/ProjectItem/ProjectItem";

import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";

export default function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

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
        <h1>Recent Projects</h1>
        <main className="w-full overflow-hidden">
          <motion.div
            className="parallax-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <ParallaxBackground />
          </motion.div>
          <div ref={projectsRef} className="bento-grid">
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
  const inView = useInView(ref, { once: true, margin: "0px 0px -50% 0px" });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className="project"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: "100%" },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}
    >
      <ProjectItem project={project} />
    </motion.div>
  );
}

function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <motion.div
      ref={ref}
      className="parallax-background"
      style={{
        y, // Apply the parallax effect to the Y-axis
        backgroundImage: "url('https://picsum.photos/1920/1080?random=10')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        width: "100%",
        position: "absolute",
        top: 0,
        zIndex: -1,
      }}
    />
  );
}
