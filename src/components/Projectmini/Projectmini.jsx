import React, { useState, useEffect, useCallback, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { fullstack, frontend } from "./ProjectData";
import warehouse from "../Images/projectPics/warehouse.png";
import port from "../Images/projectPics/port.png";
import ott from "../Images/projectPics/ott.png";
import soon from "../../assets/soon.webp";

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

const Projectmini = ({ title }) => {
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

  const hasHoverCapability = useHoverCapability();
  const [hoveredProject, setHoveredProject] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isImageVisible, setIsImageVisible] = useState(false);
  const animationFrameRef = useRef(null);
  const targetPosition = useRef({ x: 0, y: 0 });

  const projectsToDisplay =
    title === "fullstack"
      ? fullstack
      : title === "frontend"
        ? frontend
        : PROJECTS;

  const handleMouseMove = useCallback(
    (e) => {
      targetPosition.current = {
        x: e.clientX,
        y: e.clientY,
      };

      if (!isImageVisible) {
        setCursorPosition(targetPosition.current);
        setIsImageVisible(true);
      }
    },
    [isImageVisible],
  );

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

  useEffect(() => {
    if (!hoveredProject) {
      setIsImageVisible(false);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }
  }, [hoveredProject]);

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
