import React, { useState } from "react";
import "./CarouselOfProjects.css";
import ProjectItem from "../ProjectItem/ProjectItem";

type ProjectType = {
  id: number;
  name: string;
  imageUrl: string;
  size: string;
  description: string | null;
  tags: string[];
  itemCount: number;
};

type CarouselOfProjectsProps = {
  projects: ProjectType[];
};

export default function CarouselOfProjects({ projects }: CarouselOfProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="custom-carousel">
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="carousel-slides">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
          >
            <ProjectItem project={project} />
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}
