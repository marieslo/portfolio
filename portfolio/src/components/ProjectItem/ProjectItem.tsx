import React from "react";
import "./ProjectItem.scss";

type Project = {
  id: number;
  imageUrl: string;
  name: string | null;
  description: string;
  skills: string[] | null;
  appUrl: string | null;
  codeUrl: string | null;
};

type ProjectItemProps = {
  project: Project;
};

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <article className="card">
      {/* Image */}
      <img 
        src={project.imageUrl || '/images/default-image.png'} 
        alt={project.name ?? "Project Image"} 
        className="project-image" 
      />

      {/* Project Name */}
      {project.name && (
        <h2 className="project-name-overlay mt-6">{project.name}</h2>
      )}

      {/* Project Description */}
      {project.description && (
        <p className="card-description-overlay">{project.description}</p>
      )}

      {/* Skills */}
      {project.skills && project.skills.length > 0 && (
        <div className="project-skills">
          <strong>Skills:</strong> {project.skills.join(", ")}
        </div>
      )}

      {/* Links */}
      <div className="project-links">
        {project.appUrl && (
          <a 
            href={project.appUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            View App
          </a>
        )}
        {project.codeUrl && (
          <a 
            href={project.codeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            View Code
          </a>
        )}
      </div>
    </article>
  );
}