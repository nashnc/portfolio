import React from "react";
import warehouse from "./Images/projectPics/warehouse.png";
import weight from "./Images/projectPics/weight.jpg";
import ott from "./Images/projectPics/ott.png";

const Projectmini = () => {
  const projects = [
    {
      id: "002",
      softUsed: ["react.js", "css", "tailwind css"],
      title: "Portfolio 2.0",
      description: "The portfolio you are viewing right now ",
      image: weight,
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
      description: "Admin can upload movies, delete them, block users",
      image: ott,
    },

    {
      id: "003",
      softUsed: ["bootstrap", "react.js", "css"],
      title: "Warehouse Stocking",
      description: "A website to save and display Stock ",
      image: warehouse,
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
          </table>
        </div>
      ))}
    </div>
  );
};

export default Projectmini;
