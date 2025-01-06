import React, { useEffect } from "react";
import "./ProjectItem.css";
import gsap from "gsap";

type Project = {
  id: number;
  name: string;
  imageUrl: string ;
  size: string | null;
  description: string | null;
};

type ProjectItemProps = {
  project: Project;
};

export default function ProjectItem({ project }: ProjectItemProps) {
  useEffect(() => {
    gsap.fromTo(
      `.project-item-${project.id}`,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: `.project-item-${project.id}`,
          start: "top bottom",
          end: "top center",
          scrub: true,
          once: true,
        },
      }
    );
  }, [project.id]);

  return (
    <div className={`project-item project-item-${project.id} ${project.size}`}>
          <div className="card-front">
            <img src={project.imageUrl} alt={project.name} className="project-image" />
          </div>
          <div className="card-front">
            <p>{project.name}</p>
          </div>
        {project.description && (
          <div className="card-back">
            <p>{project.description}</p>
          </div>
        )}
     
    </div>
  );
}