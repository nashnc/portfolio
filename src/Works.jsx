import React from "react";
import warehouse from "./elemts/Images/projectPics/warehouse.png";
import port from "./elemts/Images/projectPics/port.png";
import ott from "./elemts/Images/projectPics/ott.png";
import Navbar from "./Navbar";
import Footer from "./elemts/Footer";
import { motion } from "motion/react";

const Projectmini = () => {
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

  return (
    <>
      <Navbar />
      <div className="mycontainer">
        <h1 id="projects" className="head1 py-3">
          <span className="texthilit1 py-3">/</span>works
        </h1>
        <motion.p initial={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          All my works ...
        </motion.p>
        <h4 className="head4 py-3">
          <span className="texthilit1">#</span>
          fullstack
        </h4>
        <div id="projecttable" className="gap-6 md:grid md:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              //
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
              //
              className="w-80 pb-4 sm:left-1/4 md:w-auto"
            >
              <table className="">
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
              </table>
            </motion.div>
          ))}
        </div>
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

export default Projectmini;
