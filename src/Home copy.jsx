import React from "react";
import image from "./assets/sd.png";

const Home = () => {
  const projects = [
    {
      id: "001",
      techStack: [
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
      techStack: ["react.js", "css", "tailwind css"],
      title: "Portfolio 2.0",
      description: "The portfolio you are viewing right now",
    },
    {
      id: "003",
      techStack: ["bootstrap", "react.js", "css"],
      title: "Bookmarking",
      description: "A website to save and display bookmarks",
    },
  ];

  return (
    <>
      <div className="container sm:pl-10 md:pl-24 lg:pl-40 xl:pl-80">
        <header className="">
          <div className="flex items-center">
            <div className="relative text-wrap">
              <h1 className="text-2xl font-bold sm:text-5xl">
                Avinash is a<span className="text-hilit-1"> Node.js</span> and{" "}
                <span className="text-hilit-1"> React.js </span>
                full-stack developer
              </h1>
              <p className="text-2ndry-2">
                He crafts responsive and interactive websites where the
                technologies and creativity finds new perspectives
              </p>
            </div>
            <div>
              <img className=" " src={image} alt="profilepic" />
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
          <header className="grid grid-cols-5 gap-4">
            <h2 className="col-span-1 text-3xl font-bold">
              <span className="text-hilit-1">#</span>projects
            </h2>
            <div className="col-span-3 pt-4">
              <div className="bg-hilit-1 h-1 w-auto"></div>
            </div>
          </header>
          <div id="projecttable">
            {" "}
          </div>
        </div>
        <div id="skills">
          <table id="lang">
            <tr>
              <th>Languages</th>
            </tr>
            <tr>
              <td>Javascript </td>
              <td>Node.js </td>
            </tr>
          </table>
          <table id="database">
            <tr>
              <th>Database</th>
            </tr>
            <tr>
              <td>MongoDB</td>
            </tr>
          </table>
          <table id="tools">
            <tr>
              <th>Tools </th>
            </tr>
            <tr>
              <td>VS code</td>
              <td>atom editor</td>
              <td>git</td>
              <td>github</td>
              <td>postman</td>
            </tr>
          </table>
          <table id="framework">
            <tr>
              <th>Frameworks</th>
            </tr>
            <tr>
              <td>React.js</td>
              <td>Express.js</td>
              <td>TailwindCSS 4</td>
              <td>Bootstrap</td>
            </tr>
          </table>
          <table id="others">
            <tr>
              <th>Other</th>
            </tr>
            <tr>
              <td>HTML</td>
              <td>CSS</td>
              <td>EJS</td>
              <td>RESTAPI</td>
            </tr>
          </table>
        </div>
        <div id="aboutme">
          <p>Hey! Am Avinash , you can call me Nash!!</p>
          <p>
            I'm a web developer , i prefer front end development but i have been
            trained for fullstack in MERN stack development. I can develop
            responsive and user friendly websites for you.
          </p>
          <p>
            Transforming my creativity and knowledge into awesome websites .I am
            looking forward to work with you, to show my skills also to sharpen
            them .
          </p>
          <p>I also try to keep me up-to-date with technologies</p>
          <a href="#">Read more ...</a>
        </div>
        <div id="contact">
          <p>
            I'm looking to be hire as a part in a company , to and an
            opportunity to share and show my skills ,if you are interested
            contact me
          </p>
          <table>
            <tr>
              <td>Telegram</td>
              <td>@nashnc11</td>
            </tr>
            <tr>
              <td>Discord</td>
              <td>nashnc11</td>
            </tr>
            <tr>
              <td>e-mail</td>
              <td>nash.nc@gmail.com</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
