import React, { useEffect, useRef, useState } from 'react';
import ProjectItem from '../ProjectItem/ProjectItem'; 
import './ScrollProjects.css'
import projectData from './projects.json';

// interface ProjectType {
//   id: number;
//   name: string;
//   imageUrl: string;
//   description: string;
//   tags: string[];
//   tagIds: number[];
//   itemCount: number;
//   url: string;
// }



const ScrollProjects: React.FC = () => {
  const soundButtonRef = useRef<HTMLImageElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const framesRef = useRef<HTMLDivElement[]>([]);
//   const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);


  useEffect(() => {
    const zSpacing = -1000;
    let lastPos = zSpacing / 5;
    let zVals: number[] = [];

    const handleScroll = () => {
      let top = document.documentElement.scrollTop;
      let delta = lastPos - top;
      lastPos = top;

      framesRef.current.forEach((frame, i) => {
        zVals.push(i * zSpacing + zSpacing);
        zVals[i] += delta * -5.5;

        const scale = 1 + zVals[i] / 1000; // scaling effect based on Z position
        const rotation = `rotateY(${zVals[i] / 10}deg)`; // rotation based on Z position

        const transform = `translateZ(${zVals[i]}px) ${rotation} scale(${scale})`;
        const opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;

        frame.style.transform = transform;
        frame.style.opacity = String(opacity);
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 1);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleWindowFocus = () => {
    if (soundButtonRef.current && audioRef.current) {
      if (soundButtonRef.current.classList.contains('sound-button_paused')) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const handleWindowBlur = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    window.onfocus = handleWindowFocus;
    window.onblur = handleWindowBlur;

    return () => {
      window.onfocus = null;
      window.onblur = null;
    };
  }, []);


//   const handleProjectClick = (project: ProjectType) => {
//     setSelectedProject(project);
//   };

  return (
    <div className="container">
      <div className="gallery">
        {projectData.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (framesRef.current[index] = el!)} 
            className="project-frame"
            // onClick={() => handleProjectClick(project)} 
          >
            <ProjectItem project={project} />
          </div>
        ))}
      </div>

{/* 
      {selectedProject && (
        <div className="project-details">
          <h2>{selectedProject.name}</h2>
          <img src={selectedProject.url} alt={selectedProject.name} />
          <p>{selectedProject.description}</p>
          <p><strong>Tags:</strong> {selectedProject.tags.join(", ")}</p>
        </div>
      )} */}
    </div>
  );
};

export default ScrollProjects;
