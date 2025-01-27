import React from "react";
import Carousel from "react-material-ui-carousel";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
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
      duration={1000}
      navButtonsAlwaysVisible={true}
    >
      {projects.map((project) => (
        <Card key={project.id} className="project-card">
          {/* Image */}
          <CardMedia
            component="img"
            height="200"
            image={project.imageUrl}
            alt={project.name ?? "Project Image"}
            className="project-image"
          />

          {/* Content */}
          <CardContent>
            {/* Project Name */}
            {project.name && (
              <Typography variant="h5" component="div" className="project-name">
                {project.name}
              </Typography>
            )}

            {/* Project Description */}
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>

            {/* Skills */}
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
                  color="primary"
                  href={project.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View App
                </Button>
              )}
              {project.codeUrl && (
                <Button
                  variant="outlined"
                  color="secondary"
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </Carousel>
  );
}