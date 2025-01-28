import React from "react";
import Carousel from "react-material-ui-carousel";
import { Card, CardMedia, Typography, Button } from "@mui/material";
import './ScrollProjects.scss'

type Project = {
  id: number;
  imageUrl: string;
  name: string | null;
  description: string;
  skills: string[];
  appUrl: string | null;
  codeUrl: string | null;
};

type ScrollProjectsProps = {
  projects: Project[];
};

export default function ScrollProjects({ projects }: ScrollProjectsProps) {
  return (
    <Carousel
    indicators={true}
    autoPlay={true}
    animation="slide"
    duration={800}
    navButtonsAlwaysVisible={true}
    className="carousel-container"
  >
    {projects.map((project) => (
      <Card key={project.id} className="project-card">
        {/* Image */}
        <CardMedia
          component="img"
          image={project.imageUrl}
          alt={project.name ?? "Project Image"}
          className="project-image"
        />
  
        {/* Content */}
        <div className="project-content">
          {/* Project Name */}
          {project.name && (
            <Typography variant="h5" className="project-name">
              {project.name}
            </Typography>
          )}
  
          {/* Project Skills */}
          {project.skills.length > 0 && (
            <Typography variant="body2" className="project-skills">
              <strong>Skills:</strong> {project.skills.join(", ")}
            </Typography>
          )}
  
          {/* Links */}
     
            <div className="project-links">
            {project.appUrl && (
              <Button
                variant="contained"
                className="custom-button custom-button-viewApp"
                href={project.appUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View App
                <img width="40" height="40" src="https://img.icons8.com/glyph-neue/64/domain.png" alt="domain"/>
              </Button>
            )}
            {project.codeUrl && (
              <Button
                variant="contained"
                className="custom-button custom-button-viewCode"
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code 
                <img width="40" height="40" src="https://img.icons8.com/pastel-glyph/64/code--v2.png" alt="code"/>
              </Button>
            )}
          </div>
      
        </div>
      </Card>
    ))}
  </Carousel>  
  );
}