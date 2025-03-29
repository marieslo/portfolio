import React, { useState } from "react";
import { Card, CardMedia, CardActions, CardContent, Tooltip, Modal} from "@mui/material";
import { motion } from "framer-motion";
import Carousel from "react-material-ui-carousel";
import ProjectLink from "./ProjectLink";
import SkillItem from "./SkillItem";


type Project = {
  id: number;
  imageUrls: string[];
  name: string | null;
  description: string;
  skills: string[];
  appUrl: string | null;
  codeUrlFrontend: string | null;
  codeUrlBackend: string | null;
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
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const handleOpen = (project: Project, imageUrl: string, index: number) => {
    setCurrentProject(project);
    setSelectedImage(imageUrl);
    setCurrentImageIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
    setCurrentImageIndex(null);
    setCurrentProject(null);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`carousel-container bg-transparent text-xs sm:text-sm w-full ${isDarkMode ? "text-dark-text" : "text-light-text"}`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 p-4 justify-center items-center mx-auto">
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
                height: 450,
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <CardContent
                className={`font-bodytext ${isDarkMode ? "bg-dark-bg text-light-text" : "bg-light-bg text-dark-text"}`}
                sx={{
                  flexGrow: 1,
                  padding: "8px 16px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {project.name && (
                  <Tooltip
                    title={<div style={{ maxWidth: "100%", fontSize: "14px", whiteSpace: "pre-wrap", overflowWrap: "break-word" }}>{project.description}</div>}
                    placement="bottom-start"
                    arrow
                    enterDelay={300}
                    leaveDelay={200}
                    PopperProps={{
                      modifiers: [
                        { name: "preventOverflow", options: { boundary: "viewport" } },
                      ],
                    }}
                  >
                    <h3 className="text-color3 font-bold uppercase cursor-pointer">
                      {project.name}
                    </h3>
                  </Tooltip>
                )}

                <CardActions
                  sx={{
                    bottom: 0,
                    left: 0,
                    width: "50%",
                    justifyContent: "end",
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                  }}
                >
                  {project.appUrl && (
                    <ProjectLink href={project.appUrl} text="View App" iconSrc="https://img.icons8.com/glyph-neue/7692ff/64/domain.png" altText="domain" variant="link" />
                  )}
                  {(project.codeUrlFrontend || project.codeUrlBackend) && (
                    <ProjectLink
                      text="View Code"
                      iconSrc="https://img.icons8.com/pastel-glyph/7692ff/64/code--v2.png"
                      altText="domain"
                      variant="button"
                      menuItems={[
                        { label: "frontend", onClick: () => { if (project.codeUrlFrontend) window.open(project.codeUrlFrontend, "_blank"); }},
                        { label: "backend", onClick: () => { if (project.codeUrlBackend) window.open(project.codeUrlBackend, "_blank"); }},
                      ]}
                    />
                  )}
                </CardActions>
              </CardContent>

              <CardMedia sx={{ height: "60%" }}>
                <Carousel
                  autoPlay={false}
                  navButtonsAlwaysVisible={true}
                  indicatorIconButtonProps={{ style: { visibility: "hidden" } }}
                  sx={{ position: "relative" }}
                >
                  {project.imageUrls.map((imageUrl, index) => (
                    <div key={index} style={{ position: "relative" }}>
                      <img
                        src={imageUrl}
                        alt={`${project.name}-image-${index}`}
                        style={{ width: "100%", height: "400px", objectFit: "cover", zIndex: 1 }}
                        onClick={() => handleOpen(project, imageUrl, index)} // Fullscreen on image click
                      />
                    </div>
                  ))}
                </Carousel>
              </CardMedia>

              <CardContent
                className={`font-bodytext px-6 py-2 z-10 bg-opacity-30 backdrop-blur-md mt-2 ${isDarkMode ? "bg-dark-bg text-light-text" : "bg-light-bg text-dark-text"}`}
                sx={{
                  flexGrow: 1,
                  paddingBottom: "60px",
                  maxHeight: "120px",
                  overflowY: "auto",
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                {project.skills.length > 0 && (
                  <div className="flex gap-2 flex-wrap">
                    {project.skills.map((skill, index) => (
                      <SkillItem key={index} skill={skill} isDarkMode={isDarkMode} />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Modal open={open} onClose={handleClose}>
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center p-4"
          onClick={handleClose} // Close the modal when clicking outside the image
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            {/* Fullscreen Modal Carousel */}
            {currentProject?.imageUrls && (
              <Carousel
                index={currentImageIndex || 0}
                autoPlay={false}
                navButtonsAlwaysVisible={true}
                indicatorIconButtonProps={{ style: { visibility: "hidden" } }}
                onChange={(index) => {
                  if (index !== undefined) {
                    setCurrentImageIndex(index);
                    setSelectedImage(currentProject.imageUrls[index]);
                  }
                }}
                sx={{
                  position: "relative",
                }}
              >
                {currentProject.imageUrls.map((imageUrl, index) => (
                  <div key={index} style={{ position: "relative" }}>
                    <img
                      src={imageUrl}
                      alt={`${currentProject?.name}-image-${index}`}
                      style={{ height: "90vh", borderRadius: '30px', objectFit: "cover", zIndex: 1 }}
                    />
                  </div>
                ))}
              </Carousel>
            )}
          </div>
        </div>
      </Modal>
    </motion.div>
  );
}