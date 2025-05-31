import warehouse from "./Images/projectPics/warehouse.png";
import port from "./Images/projectPics/port.png";
import ott from "./Images/projectPics/ott.png";
import "./ProjectCard.css"; // Make sure to import the CSS file
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projectmini = () => {
  const [hasHoverCapability, setHasHoverCapability] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null);

  // Function to check if device supports hover
  const checkHoverCapability = () => {
    // Check if the device has hover capability using CSS media query
    const hasHover = window.matchMedia("(hover: hover)").matches;
    // Also check for pointer precision
    const hasPointer = window.matchMedia("(pointer: fine)").matches;

    // Device has hover if it has both hover capability and fine pointer
    return hasHover && hasPointer;
  };

  useEffect(() => {
    // Initial check
    setHasHoverCapability(checkHoverCapability());

    // Listen for changes (e.g., when connecting/disconnecting mouse)
    const mediaQuery = window.matchMedia("(hover: hover)");
    const handleChange = () => {
      setHasHoverCapability(checkHoverCapability());
    };

    // Add event listener for media query changes
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    // Cleanup
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  const projects = [
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

  // Define initial animation for each card
  const initialVariants = [
    { opacity: 0, x: -100, y: 0 }, // First card: from right
    { opacity: 0, x: 0, y: 100 }, // Second card: from top
    { opacity: 0, x: 100, y: 0 }, // Third card: from left
  ];

  return (
    <div id="projecttable" className="gap-6 md:grid md:grid-cols-3">
      {!hasHoverCapability
        ? // Mobile/Tablet layout (no hover capability)
          projects.map((project, idx) => (
            <motion.div
              key={project.id}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              initial={initialVariants[idx] || { opacity: 0 }}
              transition={{ duration: 1 }}
              className="relative w-80 pb-4 sm:left-1/4 md:w-auto"
            >
              <a href={project.link} target="_blank" className="block">
                <div className="card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-image"
                  />
                  <div className="main-content">
                    <div className="categories">
                      {project.softUsed.map((tech, index) => (
                        <span
                          key={index}
                          className="text-2ndry-1 dark:text-2ndry-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="heading text-primary dark:text-2ndry-1">
                      {project.title}
                    </p>
                    <div className="footer text-primary-3 dark:text-2ndry-2">
                      {project.description}
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))
        : // Desktop layout (has hover capability)
          projects.map((project, idx) => (
            <motion.div
              key={project.id}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              initial={initialVariants[idx] || { opacity: 0 }}
              transition={{ duration: 1 }}
              className="relative w-80 pb-4 sm:left-1/4 md:w-auto"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <a href={project.link} target="_blank" className="block">
                <AnimatePresence mode="wait">
                  {hoveredProject === project.id ? (
                    <motion.div
                      key="hover"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: {
                          duration: 0.5,
                          ease: "easeInOut",
                        },
                        opacity: {
                          duration: 0.5,
                          ease: "easeInOut",
                        },
                      }}
                      style={{ overflow: "hidden" }}
                    >
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
                        height: {
                          duration: 1,
                          ease: "easeInOut",
                        },
                        opacity: {
                          duration: 1,
                          ease: "easeInOut",
                        },
                      }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="bg-2ndry-2 dark:bg-primary-4 relative isolate my-8 flex flex-row items-center rounded-xl py-6 pr-4 pl-12 [unicode-bidi:isolate] before:absolute before:left-6 before:z-[10] before:h-4/5 before:w-1 before:bg-[#373c3d] before:content-['']">
                        <p className="white-space-pre-wrap [&:not(:first-child)]:mt-3">
                          <span className="block text-center font-bold">
                            {project.title}
                          </span>{" "}
                          <span className="text-primary-3 dark:text-primary-5">
                            {project.description}
                          </span>
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </a>
            </motion.div>
          ))}
    </div>
  );
};

export default Projectmini;
