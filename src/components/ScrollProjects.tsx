import React from "react";
import { Card, CardMedia, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

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
  isDarkMode: boolean;
};

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 100,
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: [0, -5, 5, 0],
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function ScrollProjects({ projects, isDarkMode }: ScrollProjectsProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`carousel-container ${isDarkMode ? "bg-dark-bg text-dark-text" : "bg-light text-light-text"}`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 justify-center items-center">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className="group relative w-full rounded-lg shadow-md overflow-hidden"
          >
            <Card
              className={`rounded-lg shadow-md overflow-hidden ${
                isDarkMode ? "bg-dark-card" : "bg-light-card"
              }`}
              sx={{ position: "relative", height: 400 }}
            >
              <CardMedia
                component="img"
                image={project.imageUrl}
                alt={project.name ?? "Project Image"}
                className="w-full h-1/2 object-cover rounded-t-lg"
              />
              <div
                className={`absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-70 text-white font-sans text-center transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 ${
                  isDarkMode ? "bg-dark-overlay" : "bg-light-overlay"
                }`}
              >
                {project.name && (
                  <Typography variant="h5" className="text-lg font-bold mb-2">
                    {project.name}
                  </Typography>
                )}
                {project.skills.length > 0 && (
                  <Typography variant="body2" className="text-sm mb-2">
                    <strong>Skills:</strong> {project.skills.join(", ")}
                  </Typography>
                )}
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
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}