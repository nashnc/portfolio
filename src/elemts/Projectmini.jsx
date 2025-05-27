import React from "react";
import warehouse from "./Images/projectPics/warehouse.png";
<<<<<<< HEAD
import weight from "./Images/projectPics/weight.jpg";
=======
import port from "./Images/projectPics/port.png";
>>>>>>> 7234fad3e89bca0104bbb8a03dd786e697cd9ed4
import ott from "./Images/projectPics/ott.png";

const Projectmini = () => {
  const projects = [
    {
      id: "002",
      softUsed: ["react.js", "css", "tailwind css"],
      title: "Portfolio 2.0",
      description: "The portfolio you are viewing right now ",
<<<<<<< HEAD
      image: weight,
=======
      image: port,
      link: "https://github.com/nashnc/portfolio",
>>>>>>> 7234fad3e89bca0104bbb8a03dd786e697cd9ed4
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
<<<<<<< HEAD
      description: "Admin can upload movies, delete them, block users",
      image: ott,
    },

=======
      description: "Users can stream movies",
      image: ott,
      link: "https://github.com/nashnc/ottStreamingPlatform",
    },
>>>>>>> 7234fad3e89bca0104bbb8a03dd786e697cd9ed4
    {
      id: "003",
      softUsed: ["bootstrap", "react.js", "css"],
      title: "Warehouse Stocking",
      description: "A website to save and display Stock ",
      image: warehouse,
<<<<<<< HEAD
    },
  ];
  return (
    <div id="projecttable" className="gap-6 md:grid md:grid-cols-3">
      {projects.map((project) => (
        <div key={project.id} className="py-2">
          <table id={project.id} className="border-2ndry-2 border-2 pl-2">
            <tbody>
              <tr>
                <td className="mx-auto px-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mt-2 h-auto w-full"
                  />
                </td>
              </tr>
              <tr className="border-2ndry-2 border-b-1">
                <td className="mx-auto px-2">{project.softUsed.join(", ")}</td>
              </tr>
              <tr className="border-2ndry-2 border-b-1">
                <th>{project.title}</th>
              </tr>
              <tr>
                <td className="mx-auto px-2">{project.description}</td>
              </tr>
            </tbody>
=======
      link: "https://github.com/nashnc/medical_store",
    },
  ];

  return (
    <div id="projecttable" className="gap-6 md:grid md:grid-cols-3">
      {projects.map((project) => (
        <div className="relative w-80 pb-4 sm:left-1/4 md:w-auto">
          <table className="">
            <div id={project.id} className="projecttable ">
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
>>>>>>> 7234fad3e89bca0104bbb8a03dd786e697cd9ed4
          </table>
        </div>
      ))}
    </div>
  );
};

export default Projectmini;
