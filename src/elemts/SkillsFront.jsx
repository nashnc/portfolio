import React from "react";

import mongologo from "./Images/mognologo.png";
import expresslogo from "./Images/expresslogo.png";
import reactlogo from "./Images/reactlogo.svg";
import nodelogo from "./Images/nodelogo.png";
import postmanlogo from "./Images/postmanlogo.png";
import tailwindlogo from "./Images/tailwindlogo.png";

const SkillsFront = () => {
  const logos = [
    {
      tool: "MongoDB",
      image: mongologo,
      tooltip: "MongoDB - NoSQL database used to store application data",
    },
    {
      tool: "Express.js",
      image: expresslogo,
      tooltip: "Express.js - Backend framework used to build APIs",
    },
    {
      tool: "React",
      image: reactlogo,
      tooltip: "React - JavaScript library for building user interfaces",
    },
    {
      tool: "Node.js",
      image: nodelogo,
      tooltip: "Node.js - JavaScript runtime to run backend code",
    },
    {
      tool: "Postman",
      image: postmanlogo,
      tooltip: "Postman - Tool used to test APIs and inspect responses",
    },
    {
      tool: "Tailwind CSS",
      image: tailwindlogo,
      tooltip: "Tailwind CSS - Utility-first CSS framework for styling UIs",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
        {logos.map((logo, index) => (
          <section className="skillLogo">
            <div className="group relative" key={index}>
              <img
                src={logo.image}
                alt={logo.tool}
                className="hover:bg-primary-3 rounded-md"
              />
              {/* Tooltip */}
              <div className="dark:border-primary-3 dark:bg-primary-2 border-2ndry-2 bg-2ndry-1 dark:text-2ndry-1 text-primary-2 invisible absolute bottom-full left-1/2 z-10 mb-2 w-max max-w-[200px] -translate-x-1/2 transform rounded-lg border-1 px-3 py-2 text-center text-sm font-medium opacity-0 shadow-lg transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
                {logo.tooltip}
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default SkillsFront;
