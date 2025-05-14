import React from "react";
import image from "./assets/sd.png";
import Titles from "./elemts/Titles";
import "./Home.css";
import ContactMini from "./elemts/ContactMini";
import Footer from "./elemts/Footer";

const Home = () => {
  const projects = [
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
    },
    {
      id: "002",
      softUsed: ["react.js", "css", "tailwind css"],
      title: "Portfolio 2.0",
      description: "The portfolio you are viewing right now",
    },
    {
      id: "003",
      softUsed: ["bootstrap", "react.js", "css"],
      title: "Bookmarking",
      description: "A website to save and display bookmarks",
    },
  ];
  const skillsets = [
    {
      id: "languages",
      softUsed: ["JavaScript", "Node.js"],
      title: "Languages",
    },
    {
      id: "database",
      softUsed: ["MongoDB"],
      title: "Database",
    },
    {
      id: "tools",
      softUsed: ["VS Code", "Atom Editor", "Git", "GitHub", "Postman"],
      title: "Tools",
    },
    {
      id: "frameworks",
      softUsed: ["React.js", "Express.js", "TailwindCSS 4", "Bootstrap"],
      title: "Frameworks",
    },
    {
      id: "others",
      softUsed: ["HTML", "CSS", "EJS", "REST API", "Markdown"],
      title: "Others",
    },
  ];
  const mern = ["MongoDB", "Express.js", "React.js", "Node.js"];

  return (
    <>
      <div className="container sm:mx-auto sm:px-10 md:mx-auto md:px-24 lg:mx-auto lg:px-40 xl:mx-auto xl:px-60">
        <header className="">
          <div className="flex items-center">
            <div className="relative text-wrap">
              <h1 className="text-2xl font-bold sm:text-5xl">
                Avinash is a<span className="text-hilit-1"> Node.js</span> and
                <span className="text-hilit-1"> React.js </span>
                full-stack developer
              </h1>
              <p className="text-2ndry-2">
                He crafts responsive and interactive websites where the
                technologies and creativity finds new perspectives
              </p>
            </div>
            <div className="relative">
              <div className="">
                <div
                  id="imgCover2"
                  className="bg-hilit-1 relative size-60"
                ></div>
                <div
                  id="imgCover3"
                  className="bg-2ndry-2 absolute top-0 size-60"
                ></div>
                <img
                  className="absolute top-0 left-0 size-60 object-contain"
                  id="imgCover"
                  src={image}
                  alt="profilepic"
                />
              </div>
            </div>
          </div>
          <div className="conatmebutton pb-6 sm:pt-4">
            <a href="#" className="border-hilit-1 bottom-0 border-2 px-2 py-1">
              contact me!
            </a>
          </div>

          <div className="relative text-right">
            <div className="quote lg:border-2ndry-2 lg:border-2 lg:pt-2 lg:pb-2 lg:text-right lg:text-2xl">
              <h3 className="">
                <span className="">
                  Dedication, perseverance, patience, and focus, are basics
                  to&nbsp;
                </span>
                <span className="lg:border-2ndry-2 lg:block lg:border-t-2 lg:indent-[50%]">
                  achieve anything in life &nbsp;
                </span>
              </h3>
            </div>
            <h4 className="lg:text-l absolute pb-1 lg:right-0 lg:border-r-2 lg:border-b-2 lg:border-l-2">
              &nbsp; ___By Nash&nbsp;
            </h4>
          </div>
        </header>
        <br />
        <br />
        <br />
        {/* projects */}
        <div id="projects ">
          <header className="grid grid-cols-6 gap-4 py-10">
            <Titles htitle="projects" />
            <div>
              <a href="#" className="border-2ndry-2 border-2 p-1">
                View <span className="text-hilit-1 pr-1">~~&gt;</span>
              </a>
            </div>
          </header>
          <div id="projecttable" className="flex gap-2">
            {projects.map((project) => (
              <table id={project.id} className="border-2ndry-2 border-2 pl-2">
                <tr className="border-2ndry-2 border-b-1">
                  <td>{project.softUsed.join(", ")}</td>
                </tr>
                <tr className="border-2ndry-2 border-b-1">
                  <th> {project.title}</th>
                </tr>
                <tr className="">
                  <td>{project.description}</td>
                </tr>
              </table>
            ))}
          </div>
        </div>
        {/* skills */}
        <div id="skills">
          <header className="grid grid-cols-6 gap-4 py-10">
            <Titles htitle="skills" />
            <div>
              <a href="#" className="border-2ndry-2 border-2 p-1">
                See <span className="text-hilit-1 pr-1">~~&gt;</span>
              </a>
            </div>
          </header>
          <div id="skillset">
            <div id="skillst" className="grid grid-cols-3 grid-rows-2 gap-2">
              {skillsets.map((skillset) => (
                <table id={skillset.id} className="border-2ndry-2 border-2">
                  <tr className="border-2ndry-2 border-b-1">
                    <th>{skillset.title}</th>
                  </tr>
                  <tr className="border-2ndry-2 border-b-1 p-3">
                    <td> {skillset.softUsed.join(", ")}</td>
                  </tr>
                </table>
              ))}
            </div>
          </div>
        </div>
        <div id="aboutme py-5">
          <header className="grid grid-cols-6 gap-4 py-10">
            <Titles htitle="about" />
            <div>
              <a href="#" className="border-2ndry-2 border-2 p-1">
                info <span className="text-hilit-1 pr-1">~~&gt;</span>
              </a>
            </div>
          </header>
          <masala className="text-lg">
            <p className="py-5">
              Hey! Am Avinash , you can call me
              <span className="text-hilit-1"> Nash</span>!!
            </p>
            <p className="relative py-5">
              I'm a <span className="text-hilit-1"> web developer</span>. I
              prefer front end development, I have been trained for full-stack
              in &nbsp;
              <span className="xplain decoration-hilit-1 relative underline underline-offset-4">
                MERN stack
              </span>
              <div className="hide text-hilit-1 bg-primary absolute p-3">
                MERN stands for <span className="">{mern.join(", ")}</span>
              </div>
              &nbsp; development. I can develope responsive and user friendly
              websites for you.
            </p>
            <p className="py-5">
              Transforming my creativity and knowledge into awesome websites. I
              am looking forward to work with you, to show my skills also to
              sharpen them .
            </p>
            <p className="py-5">
              I also try to keep me up-to-date with technologies
            </p>
          </masala>
          <a href="#" className="border-hilit-1 border-2 p-1 text-sm">
            Read more ...
          </a>
        </div>
        <div id="contact " className="py-10">
          <header className="grid grid-cols-6 gap-4 py-10">
            <Titles htitle="contact" />
          </header>
          <p className="py-5 text-lg">
            I'm looking forward to be hired as a part in a company, to receive
            an interesting opportunity to share and show my skills, if you are
            interested contact me.
          </p>
          <ContactMini />
          {/* <table>
            <tr>
              <td>Telegram</td>
              <td>@nashnc11</td>
            </tr>
            <tr>
              <td>Discord</td>
              <td></td>
            </tr>
            <tr>
              <td>e-mail</td>
              <td></td>
            </tr>
          </table> */}
        </div>
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

export default Home;
