import React from "react";
import { Card, CardMedia, Button, CardActions, CardContent } from "@mui/material";
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

type SectionRecentProjectsProps = {
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

export default function SectionRecentProjects({ projects, isDarkMode }: SectionRecentProjectsProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`carousel-container bg-transparent ${isDarkMode ? "text-dark-text" : "text-light-text"}`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 justify-center items-center">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className="group relative w-full border rounded-3xl shadow-md overflow-hidden"
          >
            <Card
              sx={{
                position: "relative",
                height: 360,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                sx={{ height: "60%" }}
                image={project.imageUrl}
                alt={project.name ?? "Project Image"}
                component="img"
              />
              <CardContent 
              className={`font-bodytext px-6 py-2 ${
                isDarkMode ? "bg-dark-bg text-light-text" : "bg-light-bg text-dark-text"
                }`}
              sx={{ flexGrow: 1 }}>
                {project.name && (
                  <h3 className="text-color3 font-bold mb-2">
                    {project.name}
                  </h3>
                )}
              <p style={{ fontSize: "12px" }} className="font-thin">
                {project.description}
              </p>
                {/* {project.skills.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-2">
                    {project.skills.map((skill, index) => (
                      <SkillItem
                        key={index}
                        name={skill}
                        skill={skill}
                        isDarkMode={isDarkMode}
                      />
                    ))}
                  </div>
                )} */}
              </CardContent>
              <CardActions
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    justifyContent: "start",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {project.appUrl && (
                    <Button
                      sx={{
                        textTransform: "uppercase",
                        fontSize: "12px",
                        color: "#4895ef",
                        textAlign: "start",
                        display: "flex",
                        gap: "10px",
                        justifyContent: "flex-start",
                      }}
                      href={project.appUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://img.icons8.com/glyph-neue/4895ef/64/domain.png"
                        alt="domain"
                        style={{ width: "18px", height: "18px", marginLeft: "6px" }}
                      />
                      View App
                    </Button>
                  )}
                  {project.codeUrl && (
                    <Button
                      sx={{
                        textTransform: "uppercase",
                        fontSize: "12px",
                        color: "#4895ef",
                        display: "flex",
                        gap: "10px",
                        justifyContent: "flex-start",
                      }}
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://img.icons8.com/pastel-glyph/4895ef/64/code--v2.png"
                        alt="code"
                        style={{ width: "18px", height: "18px", marginLeft: "6px" }}
                      />
                      View Code
                    </Button>
                  )}
                </CardActions>

  
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}