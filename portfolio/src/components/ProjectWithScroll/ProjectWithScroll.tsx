import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import ProjectItem from "../ProjectItem/ProjectItem";

export default function ProjectWithScroll({ project }: { project: any }) {
  const [hovered, setHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const { clientX, clientY } = e;
      const { offsetWidth, offsetHeight } = cardRef.current;
      const centerX = offsetWidth / 2;
      const centerY = offsetHeight / 2;


      const deltaX = (clientX - centerX) / centerX;
      const deltaY = (clientY - centerY) / centerY;

      setRotateX(deltaY * 10); 
      setRotateY(deltaX * 10); 
    }
  };

  return (
    <motion.div
      className="project-item"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      ref={cardRef}
    >
      <div
        className="project-card"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: hovered ? "transform 0.1s ease" : "none",
        }}
      >
        <ProjectItem project={project} />
      </div>
    </motion.div>
  );
}
