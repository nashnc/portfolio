import React from "react";
import { Link } from "react-router-dom";
import image from "./assets/sd.png";
import image2 from "./assets/sd.png";
import Titles from "./elemts/Titles";
import "./Home.css";
import ContactMini from "./elemts/ContactMini";
import SkillFront from "./elemts/SkillsFront";
import Dot from "./assets/Dots.svg";
import Footer from "./elemts/Footer";
import "./ButtonAnimation.css";
import Projectmini from "./elemts/Projectmini";
import Navbar from "./Navbar";
import AboutMini from "./AboutMini";
import Quote from "./elemts/Quote";

const Home = () => {
  return (
    <>
      {/* <div className="fixed top-0 z-10 h-full w-full"></div> */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Navbar />
      <div className="mycontainer">
        <header className="">
          <div className="grid-col-2 grid items-center md:flex">
            <div className="relative pb-10 text-wrap">
              <div className="">
                <h1 className="head1">
                  Hey, I'm Avinash, an intuitive
                  <span className="texthilit1"> web developer </span>
                </h1>
                <h4 className="head4">
                  who develops responsive and interactive websites that are
                  coherent to your needs.
                </h4>
              </div>
              <p className="dark:text-2ndry-2 text-primary-2">
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
                    className="bg-lhilit-1 dark:bg-dhilit-1 relative size-60"
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
                  className="border-2ndry-2 relative top-1 left-1/4 size-60 border-1 border-dashed object-contain"
                  id=""
                  src={image2}
                  alt="profilepic2"
                />
              </div>
            </div>
          </div>
          {/* <div className="contactmebutton relative pt-10 pb-5">
            <div className="border-lhilit-1 group relative inline-block border-2 text-sm font-medium">
              <a href="#contact" className="size-4">
                <span className="line dark:bg-primary bg-2ndry-1 size-3"></span>
                <div className="dark:bg-primary px-3 py-3">
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
          </div> */}
        </header>
        <br />
        <br />
        <br />
        <div id="aboutme py-5">
          <header className="headsectdiv">
            <Titles htitle="about" />
            <div className="col-span-1">
              {/* <button className="btn2b absolute right-1/6">
                <a
                  href="/about"
                  className="dark:border-2ndry-2 border-2ndry-3 btn2 bg-2ndry-1 border-2 p-1"
                >
                  <span className="spn2">
                    info
                    <span className="texthilit1 pr-1">
                      ~&gt;
                    </span>
                  </span>
                </a>
              </button> */}
            </div>
          </header>
          <AboutMini htitle="homeabout" />
          <div className="contactmebutton relative">
            <div className="border-lhilit-1 dark:border-dhilit-1 group relative inline-block border-2 text-sm font-medium">
              <Link to="/about#about" className="size-4">
                <span className="line dark:bg-primary bg-2ndry-1 size-3"></span>
                <div className="dark:bg-primary px-3 py-3"> Read more ...</div>
              </Link>
            </div>
          </div>
          {/* quote */}
          <Quote />
          {/* quote */}
        </div>
        {/* projects */}

        <div id="projects ">
          <header className="headsectdiv">
            <Titles htitle="works" />
            <div>
              <button className="btn2b right relative left-50">
                <Link
                  to="/projects#projects"
                  className="border-2ndry-2 btn2 border-2 p-1"
                >
                  <span className="spn2">
                    {" "}
                    view
                    <span className="texthilit1 pr-1">~&gt;</span>
                  </span>
                </Link>
              </button>
            </div>
          </header>
          <Projectmini />
        </div>
        {/* skills */}
        <div id="skills">
          <header className="headsectdiv">
            <Titles htitle="skills" />
            <div className="">
              <button className="btn2b right relative left-50">
                <Link
                  to="/about#skillset"
                  className="border-2ndry-2 btn2 border-2 p-1"
                >
                  <span className="spn2">
                    {" "}
                    see
                    <span className="texthilit1 pr-1">~&gt;</span>
                  </span>
                </Link>
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
