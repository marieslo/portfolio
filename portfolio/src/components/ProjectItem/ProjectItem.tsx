import React from "react";
import "./ProjectItem.css"; 

type Project = {
  id: number;
  name: string;
  imageUrl: string;
  size: string;
  description: string;
};

type ProjectItemProps = {
  project: Project;
};

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <div className={`project-item ${project.size}`}>
      <div className="project-card">
        {/* Front Side */}
        <div className="card-front">
          <img src={project.imageUrl} alt={project.name} className="project-image" />
          <p>{project.name}</p>
        </div>
        {/* Back Side */}
        <div className="card-back">
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
}