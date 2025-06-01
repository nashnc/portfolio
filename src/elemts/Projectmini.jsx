import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./ProjectCard.css";
import { fullstack, frontend } from "./ProjectData"; // Import the data
// imageimports
import warehouse from "./Images/projectPics/warehouse.png";
import port from "./Images/projectPics/port.png";
import ott from "./Images/projectPics/ott.png";
// import soon from "../assets/soon.webp";
// Constants
const PROJECTS = [
  {
    id: "002",
    softUsed: ["react.js", "css", "tailwind css"],
    title: "Portfolio 2.0",
    description: "The portfolio you are viewing right now",
    image: port,
    link: "https://github.com/nashnc/portfolio",
  },
  {
    id: "001",
    softUsed: [
      "express.js",
      "node.js",
      "mongodb",
      "html (ejs template)",
      "bootstrap",
      "react.js",
      "css",
    ],
    title: "OTT Streaming Platform",
    description: "Users can stream movies",
    image: ott,
    link: "https://github.com/nashnc/ottStreamingPlatform",
  },
  {
    id: "003",
    softUsed: ["bootstrap", "react.js", "css"],
    title: "Warehouse Stocking",
    description: "A website to save and display Stock",
    image: warehouse,
    link: "https://github.com/nashnc/medical_store",
  },
];

// Custom hook for hover capability detection
const useHoverCapability = () => {
  const [hasHoverCapability, setHasHoverCapability] = useState(true);

  const checkHoverCapability = useCallback(() => {
    const hasHover = window.matchMedia("(hover: hover)").matches;
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    return hasHover && hasPointer;
  }, []);

  useEffect(() => {
    setHasHoverCapability(checkHoverCapability());

    const mediaQuery = window.matchMedia("(hover: hover)");
    const handleChange = () => setHasHoverCapability(checkHoverCapability());

    mediaQuery.addEventListener?.("change", handleChange) ||
      mediaQuery.addListener?.(handleChange);

    return () => {
      mediaQuery.removeEventListener?.("change", handleChange) ||
        mediaQuery.removeListener?.(handleChange);
    };
  }, [checkHoverCapability]);

  return hasHoverCapability;
};
// Define ANIMATION_CONFIG at the top of the file
const ANIMATION_CONFIG = { duration: 0.5, ease: "easeInOut" };
// Desktop Card Component
const DesktopCard = ({ project, isHovered, onMouseMove }) => {
  const cardRef = useRef(null);

  // Handle mouse move and pass coordinates to parent
  const handleMouseMove = useCallback(
    (e) => {
      if (!cardRef.current || !isHovered) return;
      onMouseMove(e);
    },
    [isHovered, onMouseMove],
  );

  return (
    <AnimatePresence mode="wait">
      {isHovered ? (
        <motion.div
          ref={cardRef}
          key="hover"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            height: ANIMATION_CONFIG,
            opacity: ANIMATION_CONFIG,
          }}
          style={{ position: "relative" }}
          className="cursor-none"
          onMouseMove={handleMouseMove}
        >
          {/* Card content */}
          <div className="notification">
            <div className="notiglow"></div>
            <div className="notiborderglow"></div>
            <div className="notititle texthilit1 text-center">
              {project.title}
            </div>
            <div className="categories">
              {project.softUsed.map((tech, index) => (
                <span
                  key={index}
                  className="text-primary2 dark:text-2ndry-1 ml-2 rounded-full border text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="default"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            height: { duration: 1, ease: "easeInOut" },
            opacity: { duration: 1, ease: "easeInOut" },
          }}
          style={{ overflow: "hidden" }}
        >
          <div className="bg-2ndry-2 dark:bg-primary-4 relative isolate my-8 flex flex-col items-center overflow-hidden rounded-xl [unicode-bidi:isolate]">
            <div className="relative w-full py-6 pr-4 pl-12 before:absolute before:left-6 before:z-[10] before:h-4/5 before:w-1 before:bg-[#373c3d] before:content-['']">
              <p className="whitespace-pre-wrap [&:not(:first-child)]:mt-3">
                <span className="block text-center font-bold">
                  {project.title}
                </span>{" "}
                <span className="text-primary-3 dark:text-primary-5">
                  {project.description}
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const INITIAL_VARIANTS = [
  { opacity: 0, x: -50 }, // Example variant for the first card
  { opacity: 0, x: 50 }, // Example variant for the second card
  { opacity: 0, y: -50 }, // Example variant for the third card
  // Add more variants as needed
];
// Project Card Component
const ProjectCard = ({
  project,
  index,
  hasHoverCapability,
  hoveredProject,
  setHoveredProject,
  onMouseMove,
}) => {
  const handleMouseEnter = useCallback(() => {
    if (hasHoverCapability) {
      setHoveredProject(project.id);
    }
  }, [hasHoverCapability, project.id, setHoveredProject]);

  const handleMouseLeave = useCallback(() => {
    if (hasHoverCapability) {
      setHoveredProject(null);
    }
  }, [hasHoverCapability, setHoveredProject]);

  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      initial={INITIAL_VARIANTS[index] || { opacity: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative w-80 pb-4 sm:left-1/4 md:w-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`View ${project.title} project on GitHub`}
      >
        {!hasHoverCapability ? (
          <MobileCard project={project} />
        ) : (
          <DesktopCard
            project={project}
            isHovered={hoveredProject === project.id}
            onMouseMove={onMouseMove}
          />
        )}
      </a>
    </motion.div>
  );
};

// Mobile Card Component
const MobileCard = ({ project }) => (
  <div className="card">
    <div className="main-content">
      <div className="categories">
        <img
          src={project.image}
          alt={project.title}
          className="card-image"
          loading="lazy"
        />
        {project.softUsed.map((tech, index) => (
          <span key={index} className="text-2ndry-1 dark:text-2ndry-1">
            {tech}
          </span>
        ))}
      </div>
      <p className="heading text-primary dark:text-2ndry-1">{project.title}</p>
      <div className="footer text-primary-3 dark:text-2ndry-2">
        {project.description}
      </div>
    </div>
  </div>
);

// Main Component
const Projectmini = ({ title }) => {
  const hasHoverCapability = useHoverCapability();
  const [hoveredProject, setHoveredProject] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isImageVisible, setIsImageVisible] = useState(false);
  const animationFrameRef = useRef(null);
  const targetPosition = useRef({ x: 0, y: 0 });

  // Determine which projects to display based on the title
  const projectsToDisplay =
    title === "fullstack"
      ? fullstack
      : title === "frontend"
        ? frontend
        : PROJECTS;

  // Handle mouse move at the parent level
  const handleMouseMove = useCallback(
    (e) => {
      targetPosition.current = {
        x: e.clientX,
        y: e.clientY,
      };

      // Show image after first mouse move
      if (!isImageVisible) {
        setCursorPosition(targetPosition.current);
        setIsImageVisible(true);
      }
    },
    [isImageVisible],
  );

  // Animation loop
  useEffect(() => {
    if (!hoveredProject || !isImageVisible) return;

    const animate = () => {
      setCursorPosition((prev) => {
        const dx = targetPosition.current.x - prev.x;
        const dy = targetPosition.current.y - prev.y;
        const ease = 0.2;

        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease,
        };
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [hoveredProject, isImageVisible]);

  // Reset when hover ends
  useEffect(() => {
    if (!hoveredProject) {
      setIsImageVisible(false);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }
  }, [hoveredProject]);

  // Get the current hovered project
  const currentProject = projectsToDisplay.find((p) => p.id === hoveredProject);

  return (
    <div className="relative">
      <div id="projecttable" className="gap-6 md:grid md:grid-cols-3">
        {projectsToDisplay.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            hasHoverCapability={hasHoverCapability}
            hoveredProject={hoveredProject}
            setHoveredProject={setHoveredProject}
            onMouseMove={handleMouseMove}
          />
        ))}
      </div>

      {/* Following cursor image - rendered at parent level */}
      {isImageVisible && currentProject && (
        <div
          style={{
            position: "fixed",
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: "translate(-50%, calc(-50% - 100%))",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        >
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="h-60 w-80 rounded-lg border-2 border-white object-cover shadow-xl"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};

export default Projectmini;
