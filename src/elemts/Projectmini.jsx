import React from "react";
import warehouse from "./Images/projectPics/warehouse.png";
import port from "./Images/projectPics/port.png";
import ott from "./Images/projectPics/ott.png";
import { motion } from "framer-motion";

const Projectmini = ({ container, container2 }) => {
  const projects = [
    {
      id: "002",
      softUsed: ["react.js", "css", "tailwind css"],
      title: "Portfolio 2.0",
      description: "The portfolio you are viewing right now ",
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
      description: "A website to save and display Stock ",
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
      {projects.map((project, idx) => (
        <motion.div
          key={project.id}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          initial={initialVariants[idx] || { opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative w-80 pb-4 sm:left-1/4 md:w-auto"
        >
          <div id={project.id} className="projecttable">
            <a href={project.link} target="blank">
              <img
                src={project.image}
                alt={project.title}
                className="md:60 h-48 w-full object-cover pb-2"
              />
              <div className="mx-4">
                <p className="border-2ndry-2 mx-auto border-t-1 border-b-1">
                  {project.softUsed.join(", ")}
                </p>
                <h3 className="border-2ndry-2 border-b-1 font-bold">
                  {project.title}
                </h3>
                <p className="mx-auto">{project.description}</p>
              </div>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projectmini;
