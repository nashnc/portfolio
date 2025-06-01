import React, { useCallback } from "react";
import { motion } from "framer-motion";
import DesktopCard from "./DesktopCard";
import MobileCard from "./MobileCard";

const INITIAL_VARIANTS = [
  { opacity: 0, x: -50 },
  { opacity: 0, x: 50 },
  { opacity: 0, y: -50 },
];

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

export default ProjectCard;