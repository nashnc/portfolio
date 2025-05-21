import React from "react";
import image from "./assets/sd.png";
import image2 from "./assets/sd.png";
import Titles from "./elemts/Titles";
import "./Home.css";
import ContactMini from "./elemts/ContactMini";
import SkillFront from "./elemts/SkillsFront";
import Dot from "./assets/Dots.svg";
import Footer from "./elemts/Footer";
import "./ButtonAnimation.css";

const Home = () => {
  const projects = [
    {
      id: "002",
      softUsed: ["react.js", "css", "tailwind css"],
      title: "Portfolio 2.0",
      description: "The portfolio you are viewing right now ",
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
    },

    {
      id: "003",
      softUsed: ["bootstrap", "react.js", "css"],
      title: "Bookmarking",
      description: "A website to save and display bookmarks",
    },
  ];
  const mern = ["MongoDB", "Express.js", "React.js", "Node.js"];

  return (
    <>
      <div className="container mx-auto cursor-default px-5 py-15 text-sm sm:px-10 md:px-15 md:text-lg lg:px-40 xl:px-60">
        <header className="">
          <div className="grid-col-2 grid items-center md:flex">
            <div className="relative pb-10 text-wrap">
              <div className="">
                <h1 className="head1">
                  Hey, I'm Avinash, an intuitive
                  <span className="text-hilit-1"> web developer </span>
                </h1>
                <h4 className="head4">
                  who develops responsive and interactive websites that are
                  coherent to your needs.
                </h4>
              </div>
              <p className="text-2ndry-2">
                My Specialties
                <ul className="list-disc pl-10">
                  <li>Front End Development </li>
                  <li>Full Stack (trained in MERN stack development)</li>
                </ul>
              </p>
              Let us craft user-friendly websites together!
            </div>
            <div className="col-span-1">
              <div className="hidden md:relative md:block">
                <img
                  className="absolute top-0 left-25 size-60 object-contain"
                  id="imgCover2dots"
                  src={Dot}
                  alt="Dot"
                />
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
              <div className="smallimage relative md:hidden">
                <img
                  className="border-2ndry-2 relative top-1 left-36 size-60 border-1 border-dashed object-contain"
                  id=""
                  src={image2}
                  alt="profilepic2"
                />
              </div>
            </div>
          </div>
          <div className="contactmebutton relative pt-10 pb-5">
            <div className="border-hilit-1 group relative inline-block border-2 text-sm font-medium">
              <a href="#contact" className="size-4">
                <span className="line bg-primary size-3"></span>
                <div className="bg-primary px-3 py-3">
                  {" "}
                  contact me{" "}
                  <img
                    src="
                    https://img.icons8.com/?size=100&id=Sh7F47sHSyUT&format=png&color=be0eec
                 "
                    alt="contactme"
                    className="inline size-6"
                  />
                </div>
              </a>
            </div>
          </div>

          <div className="relative text-right">
            <div className="quote border-2ndry-2 lg:border-2ndry-2 border-1 lg:border-2 lg:pt-2 lg:pb-2 lg:text-right lg:text-2xl">
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
            <h4 className="border-2ndry-2 lg:text-l absolute right-0 border-1 pb-1 lg:right-0 lg:border-r-2 lg:border-b-2 lg:border-l-2">
              &nbsp; ___By Nash&nbsp;
            </h4>
          </div>
        </header>
        <br />
        <br />
        <br />
        <div id="aboutme py-5">
          <header className="headsectdiv">
            <Titles htitle="about" />
            <div className="col-span-1">
              <button className="btn2b absolute right-1/6">
                <a href="#" className="border-2ndry-2 btn2 border-2 p-1">
                  <span className="spn2">
                    info<span className="text-hilit-1 pr-1">~&gt;</span>
                  </span>
                </a>
              </button>
            </div>
          </header>
          <masala className="text-base md:text-lg">
            <p className="py-5">
              Hey! You can call me
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
          <div className="contactmebutton relative">
            <div className="border-hilit-1 group relative inline-block border-2 text-sm font-medium">
              <a href="#" className="size-4">
                <span className="line bg-primary size-3"></span>
                <div className="bg-primary px-3 py-3"> Read more ...</div>
              </a>
            </div>
          </div>
        </div>
        {/* projects */}

        <div id="projects ">
          <header className="headsectdiv">
            <Titles htitle="works" />
            <div>
              <button className="btn2b absolute right-1/6">
                <a href="#" className="border-2ndry-2 btn2 border-2 p-1">
                  <span className="spn2">
                    {" "}
                    view<span className="text-hilit-1 pr-1">~&gt;</span>
                  </span>
                </a>
              </button>
            </div>
          </header>
          <div id="projecttable" className="gap-6 md:grid md:grid-cols-3">
            {projects.map((project) => (
              <div className="py-2">
                <table id={project.id} className="border-2ndry-2 border-2 pl-2">
                  <tr className="border-2ndry-2 border-b-1">
                    <td className="mx-auto px-2">
                      {project.softUsed.join(", ")}
                    </td>
                  </tr>
                  <tr className="border-2ndry-2 border-b-1">
                    <th> {project.title}</th>
                  </tr>
                  <tr className="">
                    <td className="mx-auto px-2">{project.description}</td>
                  </tr>
                </table>
              </div>
            ))}
          </div>
        </div>
        {/* skills */}
        <div id="skills">
          <header className="headsectdiv">
            <Titles htitle="skills" />
            <div className="">
              <button className="btn2b absolute right-1/6">
                <a href="#" className="border-2ndry-2 btn2 border-2 p-1">
                  <span className="spn2">
                    {" "}
                    see<span className="text-hilit-1 pr-1">~&gt;</span>
                  </span>
                </a>
              </button>
            </div>
          </header>
          <div>
            <SkillFront />
          </div>
        </div>

        <div id="contact" className="py-10">
          <header className="headsectdiv">
            <Titles htitle="contact" />
          </header>
          <p className="py-5 text-lg">
            I'm looking forward to being a part of your team! Let me help you
            develop your ideas into an internet reality.
          </p>
          <ContactMini />
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
