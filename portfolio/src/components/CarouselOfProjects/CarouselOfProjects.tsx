import React, { useState, useEffect, useRef } from "react";
import "./CarouselOfProjects.css";
import ProjectItem from "../ProjectItem/ProjectItem";

type ProjectType = {
  id: number;
  name: string;
  imageUrl: string;
  size: string;
  description: string | null;
  tags: string[];
  tagIds: number[];
  itemCount: number;
};

type CarouselOfProjectsProps = {
  projects: ProjectType[];
};

export default function CarouselOfProjects({ projects }: CarouselOfProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManualControl, setIsManualControl] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const totalProjects = projects.length;

  const angleRef = useRef(0);
  const animationFrameId = useRef<number | null>(null);
  const manualControlTimeout = useRef<NodeJS.Timeout | null>(null);

  const rotationSpeed = 0.3;

  const rotateCarousel = () => {
    if (!isManualControl && !hoverPaused) {
      angleRef.current += rotationSpeed;
      if (angleRef.current >= 360) {
        angleRef.current = 0;
      }
      setCurrentIndex(Math.floor(angleRef.current / (360 / totalProjects)));
    }
    animationFrameId.current = requestAnimationFrame(rotateCarousel);
  };

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(rotateCarousel);
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [totalProjects, hoverPaused]);

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
    setIsManualControl(true);

    if (manualControlTimeout.current) {
      clearTimeout(manualControlTimeout.current);
    }
    manualControlTimeout.current = setTimeout(() => {
      setIsManualControl(false);
    }, 5000);
  };

  const prevSlide = () => {
    setIsManualControl(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalProjects - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setIsManualControl(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === totalProjects - 1 ? 0 : prevIndex + 1
    );
  };

  const handleMouseEnter = () => {
    setHoverPaused(true);
  };

  const handleMouseLeave = () => {
    setHoverPaused(false);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      prevSlide();
    } else if (event.key === "ArrowRight") {
      nextSlide();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className="carousel-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="carousel-button prev"
        onClick={prevSlide}
        aria-label="Previous Project"
      >
        &#10094;
      </button>

      <div className="carousel">
        {projects.map((project, index) => {
          const isActive = index === currentIndex;
          const translateX = (index - currentIndex) * 22;
          const scale = isActive ? 1.1 : 0.9;

          return (
            <div
              key={project.id}
              className={`card ${isActive ? 'active' : ''}`}
              style={{
                transform: `translateX(${translateX}px) scale(${scale})`,
                opacity: isActive ? 1 : 0.7,
                transition: 'transform 0.5s ease, opacity 0.5s ease',
              }}
              onClick={() => handleCardClick(index)}
              tabIndex={0}
              aria-hidden={!isActive}
            >
              <ProjectItem project={project} />
            </div>
          );
        })}
      </div>

      <button
        className="carousel-button next"
        onClick={nextSlide}
        aria-label="Next Project"
      >
        &#10095;
      </button>
    </div>
  );
}
