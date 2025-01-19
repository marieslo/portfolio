import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTags } from "../../context/TagsProvider";
import "./ProjectItem.css";

type Project = {
  id: number;
  name: string;
  imageUrl: string;
  description: string | null;
  tagIds: number[];
};

type ProjectItemProps = {
  project: Project;
};

export default function ProjectItem({ project }: ProjectItemProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { tags } = useTags();

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

  const projectTags = tags.filter((tag) => project.tagIds.includes(tag.id));

  return (
    <motion.div
    ref={ref}
    className="project-item"
    initial={{ opacity: 0, y: 50 }}
    animate={controls}
    exit={{ opacity: 0 }}
  >
    <div className="card">
      <img src={project.imageUrl} alt={project.name} className="project-image" />
      <div className="project-name-overlay mt-6">{project.name}</div>
      {project.description && (
        <div className="card-description-overlay">{project.description}</div>
      )}
      <div className="tags">
        {projectTags.map((tag) => (
          <span key={tag.id} className="tag">
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  </motion.div>  
  );
}