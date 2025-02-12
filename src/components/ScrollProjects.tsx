import React from "react";
import Carousel from "react-material-ui-carousel";
import { Card, CardMedia, Typography, Button } from "@mui/material";

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
        <Card
          key={project.id}
          className="group relative w-full m-4 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:-translate-y-1"
        >
          {/* Image */}
          <CardMedia
            component="img"
            image={project.imageUrl}
            alt={project.name ?? "Project Image"}
            className="w-full h-1/2 object-cover rounded-t-lg filter grayscale transition-all duration-300 group-hover:filter-none group-hover:scale-105"
          />

          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-70 text-white font-sans text-center transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            {/* Project Name */}
            {project.name && (
              <Typography variant="h5" className="text-lg font-bold mb-2">
                {project.name}
              </Typography>
            )}

            {/* Project Skills */}
            {project.skills.length > 0 && (
              <Typography variant="body2" className="text-sm mb-2">
                <strong>Skills:</strong> {project.skills.join(", ")}
              </Typography>
            )}

            {/* Links - Appear on hover */}
            <div className="flex justify-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.appUrl && (
                <Button
                  variant="contained"
                  className="bg-green-500 text-white rounded-lg px-4 py-2 text-sm flex items-center gap-2"
                  href={project.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View App
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/glyph-neue/64/domain.png"
                    alt="domain"
                  />
                </Button>
              )}
              {project.codeUrl && (
                <Button
                  variant="contained"
                  className="text-white rounded-lg px-4 py-2 text-sm flex items-center gap-2"
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/pastel-glyph/64/code--v2.png"
                    alt="code"
                  />
                </Button>
              )}
            </div>
          </div>
        </Card>
      ))}
    </Carousel>
  );
}
