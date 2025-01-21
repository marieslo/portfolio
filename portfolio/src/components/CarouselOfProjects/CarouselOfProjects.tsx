import React, { useState, useEffect, useRef } from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ProjectType = {
  id: number;
  name: string;
  imageUrl: string;
  size: string;
  description: string;
  tags: string[];
  tagIds: number[];
  itemCount: number;
};

type CarouselOfProjectsProps = {
  projects: ProjectType[];
};

gsap.registerPlugin(ScrollTrigger);

export default function CarouselOfProjects({ projects }: CarouselOfProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProjects = projects.length;
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const items = carouselRef.current.children;
      const zSpacing = 1000; // Controls the depth of the 3D effect
      let zVals: number[] = [];
      let delta = 0;

      // Initialize zVals for each project
      Array.from(items).forEach((_, i) => {
        zVals.push(i * zSpacing);
      });

      const updateCarousel = () => {
        delta = window.scrollY / zSpacing;
        Array.from(items).forEach((_, i) => {
          const zPosition = zVals[i] - delta * 5.5;
          const transform = `translateZ(${zPosition}px)`;
          const opacity = zPosition < Math.abs(zSpacing) / 1.8 ? 1 : 0;
          items[i].setAttribute("style", `transform: ${transform}; opacity: ${opacity}`);
        });
      };

      // ScrollTrigger: Trigger to handle scroll
      ScrollTrigger.create({
        trigger: carouselRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: updateCarousel,
        scrub: 1, // Smooth transition during scroll
      });
    }
  }, []);

  return (
    <div className="carousel-container" ref={carouselRef}>
      <div className="carousel">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card project-${index}`}
            style={{
              transform: `translateX(${(index - currentIndex) * 22}px) scale(${index === currentIndex ? 1.1 : 0.9})`,
              opacity: index === currentIndex ? 1 : 0.7,
              transition: "transform 0.5s",
            }}
          >
            <ProjectItem project={project} />
          </div>
        ))}
      </div>

      <button
        className="carousel-button prev"
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalProjects - 1 : prevIndex - 1))}
        aria-label="Previous Project"
      >
        &#10094;
      </button>

      <button
        className="carousel-button next"
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex === totalProjects - 1 ? 0 : prevIndex + 1))}
        aria-label="Next Project"
      >
        &#10095;
      </button>
    </div>
  );
}
