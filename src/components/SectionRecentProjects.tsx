import React from "react";
import { Card, CardMedia, Button } from "@mui/material";
import { motion } from "framer-motion";
import SkillItem from "./SkillItem";

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
            className="group relative w-full rounded-3xl shadow-md overflow-hidden"
          >
            <Card
              className={`rounded-3xl shadow-md overflow-hidden ${
                isDarkMode ? "bg-dark-card" : "bg-light-card"
              }`}
              sx={{ position: "relative", height: 400 }}
            >
              <CardMedia
              component="img"
              image={project.imageUrl}
              alt={project.name ?? "Project Image"}
              className="w-full h-full object-cover rounded-3xl"
              sx={{
                objectFit: "cover", 
                height: "100%",
              }}
            />
              <div
                className={`absolute bottom-0 left-0 w-full p-4 font-sans text-center transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 bg-opacity-10 backdrop-blur-md rounded-3xl ${
                  isDarkMode ? "bg-dark-bg text-dark-text" : "bg-light-bg text-light-text"
                }`}
              >
                {project.name && (
                  <div className="font-header text-color-dark mb-2">
                    {project.name}
                  </div>
                )}
                {project.skills.length > 0 && (
                  <div className="flex justify-center items-center gap-4 mb-2 font-bodytext">
                    {project.skills.map((skill, index) => (
                      <SkillItem
                        key={index}
                        name={skill}
                        skill={skill}
                        isDarkMode={isDarkMode}
                      />
                    ))}
                  </div>
                )}
                <div className="flex justify-center gap-2 mt-4 font-bodytext opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.appUrl && (
                    <Button
                      sx={{
                        backgroundColor: "transparent",
                        padding: "8px 16px",
                        fontSize: "14px",
                        border: "2px",
                        borderRadius: "30px",
                        borderColor: "#fe4a49",
                        fontWeight: 200,
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        transition: "background-color 0.3s ease, transform 0.3s ease",
                        color: "#fff",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        "&:hover": {
                          backgroundColor: "#00bcd4",
                          transform: "translateY(-2px)",
                        },
                        "& img": {
                          width: "20px",
                          height: "20px",
                        },
                        "&:focus": {
                          outline: "none",
                        },
                      }}
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
                      sx={{
                        backgroundColor: "fe4a49",
                        padding: "8px 16px",
                        fontSize: "14px",
                        borderRadius: "30px",
                        fontWeight: 200,
                        display: "flex",
                        alignItems: "center",
                        gap: "30px",
                        transition: "background-color 0.3s ease, transform 0.3s ease",
                        color: "#fff",
                        border: "none",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        "&:hover": {
                          backgroundColor: "#00bcd4",
                          transform: "translateY(-2px)",
                        },
                        "& img": {
                          width: "20px",
                          height: "20px",
                        },
                        "&:focus": {
                          outline: "none",
                        },
                      }}
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