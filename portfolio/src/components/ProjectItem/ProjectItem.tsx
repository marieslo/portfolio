import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./ProjectItem.css";

type Project = {
  id: number;
  name: string;
  imageUrl: string;
  description: string | null;
};

type ProjectItemProps = {
  project: Project;
};

export default function ProjectItem({ project }: ProjectItemProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.1, 
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 50,
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className="project-item"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <div className="card">
        <img src={project.imageUrl} alt={project.name} className="project-image" />
        <div className="project-name-overlay">{project.name}</div>
        {project.description && (
          <div className="card-description-overlay">{project.description}</div>
        )}
      </div>
    </motion.div>
  );
}