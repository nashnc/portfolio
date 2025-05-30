import warehouse from "./elemts/Images/projectPics/warehouse.png";
import port from "./elemts/Images/projectPics/port.png";
import ott from "./elemts/Images/projectPics/ott.png";
import "./elemts/ProjectCard.css"; // Make sure to import the CSS file
import React, { useState, useEffect, useCallback, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./elemts/Footer";
import TitlesS from "./elemts/TitlesSlash";
import Titles from "./elemts/TitlesOther"; // Added missing import
import MouseHover from "./MouseHover";

//

const Works = () => {
  const [hasHoverCapability, setHasHoverCapability] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isImageVisible, setIsImageVisible] = useState(false);
  const animationFrameRef = useRef(null);
  const targetPosition = useRef({ x: 0, y: 0 });

  // Function to check if device supports hover
  const checkHoverCapability = () => {
    const hasHover = window.matchMedia("(hover: hover)").matches;
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    return hasHover && hasPointer;
  };

  useEffect(() => {
    setHasHoverCapability(checkHoverCapability());

    const mediaQuery = window.matchMedia("(hover: hover)");
    const handleChange = () => {
      setHasHoverCapability(checkHoverCapability());
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  // Handle mouse move for cursor tracking
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

  // Animation loop for smooth cursor following
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

  const container = (delay) => ({
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  const initialVariants = [
    { opacity: 0, x: -100, y: 0 },
    { opacity: 0, x: 0, y: 100 },
    { opacity: 0, x: 100, y: 0 },
  ];

  const currentProject = projects.find((p) => p.id === hoveredProject);

  return (
    <>
      <div className="fixed inset-0 z-[-2] bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      {/* Main content wrapper */}
      <div className="relative z-0"></div>
      <MouseHover />
      <Navbar />
      <div className="mycontainer">
        <TitlesS htitle="works" />
        <motion.p variants={container(0.5)} initial="hidden" animate="visible">
          All my works ...
        </motion.p>
        <section className="headsectdiv">
          <Titles htitle="fullstack" />
        </section>
        <div id="projecttable" className="gap-6 md:grid md:grid-cols-3">
          {!hasHoverCapability
            ? // Mobile/Tablet layout
              projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  initial={initialVariants[idx] || { opacity: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="relative w-80 pb-4 sm:left-1/4 md:w-auto"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
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
            : // Desktop layout
              projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={initialVariants[idx] || { opacity: 0 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 1 }}
                  className="relative w-80 pb-4 sm:left-1/4 md:w-auto"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onMouseMove={handleMouseMove}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <AnimatePresence mode="wait">
                      {hoveredProject === project.id ? (
                        <motion.div
                          key="hover"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: 0.5, ease: "easeInOut" },
                            opacity: { duration: 0.5, ease: "easeInOut" },
                          }}
                          style={{ position: "relative" }}
                          className="cursor-none"
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
                  </a>
                </motion.div>
              ))}
        </div>
        {/* Following cursor image */}
        {isImageVisible && currentProject && hasHoverCapability && (
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
        &nbsp;
        <hr />
        <br />
        <Footer />
      </div>
      &nbsp;
      <br />
      &nbsp;
    </>
  );
};

export default Works;
