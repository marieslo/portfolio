import React, { useState, useEffect, useRef } from 'react';
import'./CarouselOfProjects.css'
import ProjectItem from '../ProjectItem/ProjectItem';

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
  const [isManualControl, setIsManualControl] = useState(false); 
  const rotationSpeed = 0.05; 
  const totalProjects = projects.length;

  const angleRef = useRef(0); 
  const animationFrameId = useRef<number | null>(null); 

  const rotateCarousel = (timestamp: number) => {
    if (!isManualControl) {
      angleRef.current += rotationSpeed;
      if (angleRef.current >= 360) {
        angleRef.current = 0; // Reset the angle for continuous loop
      }
      setCurrentIndex(Math.floor(angleRef.current / (360 / totalProjects))); 
    }
    animationFrameId.current = requestAnimationFrame(rotateCarousel); 
  };

  // Start the rotation when the component mounts
  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(rotateCarousel);
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current); 
      }
    };
  }, [totalProjects]);


  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
    setIsManualControl(true); 
  };


  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalProjects - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalProjects - 1 ? 0 : prevIndex + 1));
  };


  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      prevSlide();
    } else if (event.key === 'ArrowRight') {
      nextSlide();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="card-stack-container">
      <button className="card-stack-button prev" onClick={prevSlide}>
        &#10094;
      </button>

      <div className="card-stack">
        {projects.map((project, index) => {
          const zIndex = totalProjects - Math.abs(index - currentIndex);
          const rotationAngle = index === currentIndex ? 0 : (index < currentIndex ? -10 : 10); 
          const translateZ = zIndex * 30; 
          const scale = index === currentIndex ? 1.1 : 1; 

          return (
            <div
              key={project.id}
              className="card"
              style={{
                zIndex,
                transform: `rotateY(${rotationAngle}deg) translateZ(${translateZ}px) scale(${scale})`,
                cursor: 'pointer',
                transition: 'transform 0.5s ease, opacity 0.5s ease',
              }}
              onClick={() => handleCardClick(index)}
            >
              <ProjectItem project={project} />
            </div>
          );
        })}
      </div>

      <button className="card-stack-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}
