import React from "react";
import { Card, CardMedia, CardActions, CardContent, Link } from "@mui/material";
import { motion } from "framer-motion";
import Carousel from "react-material-ui-carousel";

type Project = {
  id: number;
  imageUrls: string[];
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
      className={`carousel-container bg-transparent text-xs sm:text-sm w-full ${isDarkMode ? "text-dark-text" : "text-light-text"}`}
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
                display: "flex",
                flexDirection: "column",
                height: 400,
              }}
            >
              <CardContent
                className={`font-bodytext ${
                  isDarkMode ? "bg-dark-bg text-light-text" : "bg-light-bg text-dark-text"
                }`}
                sx={{
                  flexGrow: 1,
                  padding: "8px 16px",
                }}
              >
                {project.name && (
                  <h3 className="text-color3 font-bold text-md mb-2 uppercase">
                    {project.name}
                  </h3>
                )}
              </CardContent>
              <CardMedia sx={{ height: "60%" }}>
                <Carousel
                  autoPlay={false}
                  navButtonsAlwaysVisible={true}
                  indicatorIconButtonProps={{
                    style: {
                      visibility: "hidden",
                    },
                  }}
                >
                  {project.imageUrls.map((imageUrl, index) => (
                    <img
                      key={index}
                      src={imageUrl}
                      alt={`${project.name}-image-${index}`}
                      style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "cover",
                        zIndex: 1,
                      }}
                    />
                  ))}
                </Carousel>
              </CardMedia>
              <CardContent
                className={`font-bodytext px-6 py-2 z-10 bg-opacity-30 backdrop-blur-md mt-2 ${
                  isDarkMode ? "bg-dark-bg text-light-text" : "bg-light-bg text-dark-text"
                }`}
                sx={{
                  flexGrow: 1,
                  paddingBottom: "60px", 
                  maxHeight: "120px",
                  overflowY: "auto",
                }}
              >
                <p style={{ fontSize: "14px", lineHeight: "1.6" }} className="font-thin mb-4">
                  {project.description}
                </p>
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
                  zIndex: 10,
                  padding: "10px",
                  gap: "10px",
                }}
              >
                {project.appUrl && (
                  <Link
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
                  </Link>
                )}
                {project.codeUrl && (
                  <Link
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
                  </Link>
                )}
              </CardActions>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}