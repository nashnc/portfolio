import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import image from "./assets/sd.png";
import Dot from "./assets/Dots.svg";

import Titles from "./elemts/Titles";
import ContactMini from "./elemts/ContactMini";
import SkillFront from "./elemts/SkillsFront";
import Footer from "./elemts/Footer";
import Projectmini from "./elemts/Projectmini";
import Navbar from "./Navbar";
import AboutMini from "./AboutMini";

import "./Home.css";
import "./ButtonAnimation.css";

const AnimatedSection = ({ children, direction = "left", delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mycontainer">
        <header>
          <AnimatedSection direction="left">
            <div className="grid-col-2 grid items-center md:flex">
              <div className="relative pb-10 text-wrap">
                <div>
                  <h1 className="head1">
                    Hey, I'm Avinash, an intuitive
                    <span className="text-hilit-1"> web developer </span>
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
              <motion.div className="col-span-1" whileHover={{ scale: 1.05 }}>
                <div className="hidden md:relative md:block">
                  <img
                    className="absolute top-0 left-25 size-60 object-contain"
                    id="imgCover2dots"
                    src={Dot}
                    alt="Dot"
                  />
                  <div>
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
                    className="border-2ndry-2 relative top-1 left-1/4 size-60 border-1 border-dashed object-contain"
                    src={image}
                    alt="profilepic2"
                  />
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          <motion.div
            className="contactmebutton relative pt-10 pb-5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="border-hilit-1 group relative inline-block border-2 text-sm font-medium">
              <a href="#contact" className="size-4">
                <span className="line dark:bg-primary bg-2ndry-1 size-3"></span>
                <div className="dark:bg-primary px-3 py-3">
                  contact me
                  <img
                    src="https://img.icons8.com/?size=100&id=Sh7F47sHSyUT&format=png&color=be0eec"
                    alt="contactme"
                    className="inline size-6"
                  />
                </div>
              </a>
            </div>
          </motion.div>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative text-right">
              <div className="quote dark:border-2ndry-2 border-2ndry-3 border-1 lg:border-2 lg:pt-2 lg:pb-2 lg:text-right lg:text-2xl">
                <h3>
                  <span>
                    Dedication, perseverance, patience, and focus, are basics
                    to&nbsp;
                  </span>
                  <span className="lg:dark:border-2ndry-2 border-2ndry-3 lg:block lg:border-t-2 lg:indent-[50%]">
                    achieve anything in life &nbsp;
                  </span>
                </h3>
              </div>
              <h4 className="dark:border-2ndry-2 border-2ndry-3 lg:text-l absolute right-0 border-1 pb-1 lg:right-0 lg:border-r-2 lg:border-b-2 lg:border-l-2">
                &nbsp; ___By Nash&nbsp;
              </h4>
            </div>
          </AnimatedSection>
        </header>

        <AnimatedSection delay={0.3}>
          <div id="aboutme" className="py-5">
            <header className="headsectdiv">
              <Titles htitle="about" />
              <div className="col-span-1">
                <button className="btn2b absolute right-1/6">
                  <a
                    href="/about"
                    className="dark:border-2ndry-2 border-2ndry-3 btn2 bg-2ndry-1 border-2 p-1"
                  >
                    <span className="spn2">
                      info<span className="text-hilit-1 pr-1">~&gt;</span>
                    </span>
                  </a>
                </button>
              </div>
            </header>
            <AboutMini htitle="homeabout" />
            <div className="contactmebutton relative">
              <div className="border-hilit-1 group relative inline-block border-2 text-sm font-medium">
                <a href="/about" className="size-4">
                  <span className="line dark:bg-primary bg-2ndry-1 size-3"></span>
                  <div className="dark:bg-primary px-3 py-3">
                    {" "}
                    Read more ...
                  </div>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="left" delay={0.4}>
          <div id="projects">
            <header className="headsectdiv">
              <Titles htitle="works" />
              <div>
                <button className="btn2b absolute right-1/6">
                  <a
                    href="/projects"
                    className="border-2ndry-2 btn2 border-2 p-1"
                  >
                    <span className="spn2">
                      view<span className="text-hilit-1 pr-1">~&gt;</span>
                    </span>
                  </a>
                </button>
              </div>
            </header>
            <Projectmini />
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.5}>
          <div id="skills" className="py-10">
            <header className="headsectdiv">
              <Titles htitle="skills" />
              <div>
                <button className="btn2b absolute right-1/6">
                  <Link
                    to="/about#skillset"
                    className="border-2ndry-2 btn2 border-2 p-1"
                  >
                    <span className="spn2">
                      see<span className="text-hilit-1 pr-1">~&gt;</span>
                    </span>
                  </Link>
                </button>
              </div>
            </header>
            <SkillFront />
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.6}>
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
        </AnimatedSection>

        <hr />
        <br />
        <Footer />
      </div>
    </>
  );
};

export default Home;
