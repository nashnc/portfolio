import { mixVisibility, motion } from "motion/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import image from "./assets/sd.png";
<<<<<<< HEAD
import Dot from "./assets/Dots.svg";

=======
import image3 from "./assets/sdtra.png";
import image2 from "./assets/sd.png";
>>>>>>> 05a0e5ff44dc54036b6b054b3557dac80e740485
import Titles from "./elemts/Titles";
import ContactMini from "./elemts/ContactMini";
import SkillFront from "./elemts/SkillsFront";
import Footer from "./elemts/Footer";
import Projectmini from "./elemts/Projectmini";
import Navbar from "./Navbar";
import AboutMini from "./AboutMini";
import Quote from "./elemts/Quote";
import { delay } from "motion";

import "./Home.css";
import "./ButtonAnimation.css";
import Projectmini from "./elemts/Projectmini";

<<<<<<< HEAD
const Home = () => {
  const mern = ["MongoDB", "Express.js", "React.js", "Node.js"];
=======
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
>>>>>>> 7234fad3e89bca0104bbb8a03dd786e697cd9ed4

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
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  });
  const container2 = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  });
  return (
    <>
      {/* <div className="fixed top-0 z-10 h-full w-full"></div> */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Navbar />
      <div className="mycontainer">
<<<<<<< HEAD
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
=======
        <header className="">
          <div className="grid-col-2 grid items-center md:flex">
            <div className="relative pb-10 text-wrap">
              <div className="">
                <motion.h1
                  // framer
                  variants={container(0)}
                  initial="hidden"
                  animate="visible"
                  //framer
                  className="head1"
                >
                  Hey, I'm Avinash, an intuitive
                  {" web devloper".split("").map((char, index) => (
                    <motion.span
                      //
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.4 }}
                      //
                      className="texthilit1"
                      key={index}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.h1>
                <motion.h4
                  // framer
                  variants={container(0.5)}
                  initial="hidden"
                  animate="visible"
                  //framer
                  className="head4"
                >
                  who develops responsive and interactive websites that are
                  coherent to your needs.
                </motion.h4>
              </div>
              <motion.p
                // framer
                variants={container(1)}
                initial="hidden"
                animate="visible"
                //framer
                className="dark:text-2ndry-2 text-primary-2"
              >
                My Specialties
                <ul className="list-disc pl-10">
                  <li>Front End Development </li>
                  <li>Full Stack (trained in MERN stack development)</li>
                </ul>
              </motion.p>
              <motion.span
                // framer
                variants={container(1.5)}
                initial="hidden"
                animate="visible"
                //framer
                className="text-2ndry-1"
              >
                {" "}
                Let us craft user-friendly websites together!
              </motion.span>
            </div>
            <div className="col-span-1">
              <div className="hidden md:relative md:block">
                <motion.img
                  // framer
                  variants={container2(1.9)}
                  initial="hidden"
                  animate="visible"
                  //framer

                  className="absolute top-0 left-25 size-60 object-contain"
                  id="imgCover2dots"
                  src={Dot}
                  alt="Dot"
                />
                <div className="">
                  <motion.div
                    // framer
                    variants={container2(1.7)}
                    initial="hidden"
                    animate="visible"
                    //framer
                    id="imgCover2"
                    className="bg-lhilit-1 dark:bg-dhilit-1 relative size-60"
                  ></motion.div>
                  <motion.div
                    // framer
                    variants={container2(2.2)}
                    initial="hidden"
                    animate="visible"
                    //framer
                    id="imgCover3"
                    className="bg-2ndry-2 absolute top-0 size-60"
<<<<<<< HEAD
                  ></motion.div>
                  <motion.img
                    // framer
                    variants={container2(2.2)}
                    initial="hidden"
                    animate="visible"
                    //framer
                    className="absolute top-0 left-0 size-60 object-contain"
                    id="imgCover"
=======
                  ></div>
>>>>>>> 05a0e5ff44dc54036b6b054b3557dac80e740485
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
>>>>>>> 42916b9fd4faf5ea150ea570120a4d114be10fa1
                    src={image}
                    alt="profilepic2"
                  />
                  <motion.img
                    // framer
                    variants={container2(2.2)}
                    initial="hidden"
                    animate="visible"
                    //framer
                    className="absolute top-0 left-0 size-60 object-contain"
                    id="imgCoverTp"
                    src={image3}
                    alt="profilepic"
                  />
                </div>
<<<<<<< HEAD
              </div>
              <div className="smallimage relative md:hidden">
                <img
                  className="border-2ndry-2 relative top-1 left-1/4 size-60 border-1 border-dashed object-contain"
                  id=""
                  src={image2}
                  alt="profilepic2"
                />
              </div>
=======
              </motion.div>
>>>>>>> 7234fad3e89bca0104bbb8a03dd786e697cd9ed4
            </div>
<<<<<<< HEAD
          </AnimatedSection>

          <motion.div
            className="contactmebutton relative pt-10 pb-5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="border-hilit-1 group relative inline-block border-2 text-sm font-medium">
=======
          </div>
<<<<<<< HEAD
=======
          {/* <div className="contactmebutton relative pt-10 pb-5">
            <div className="border-lhilit-1 group relative inline-block border-2 text-sm font-medium">
>>>>>>> 05a0e5ff44dc54036b6b054b3557dac80e740485
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

<<<<<<< HEAD
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
=======
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
>>>>>>> 42916b9fd4faf5ea150ea570120a4d114be10fa1
        </header>
        <br />
        <br />
        <br />
        <div id="aboutme py-5">
          <header className="headsectdiv">
            <Titles htitle="about" />
<<<<<<< HEAD
            <div className="col-span-1"></div>
          </header>
          <AboutMini htitle="homeabout" />
          <div className="contactmebutton relative">
            <motion.div
              //
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              //

              className="border-lhilit-1 dark:border-dhilit-1 group relative left-3/4 inline-block border-2 text-sm font-medium"
            >
              <Link to="/about#about" className="size-4">
                <span className="line dark:bg-primary bg-2ndry-1 size-3"></span>
                <div className="dark:bg-primary px-3 py-3"> Read more ...</div>
              </Link>
            </motion.div>
=======
            <div className="col-span-1">
              <button className="btn2b absolute right-1/6">
                <a href="#" className="border-2ndry-2 btn2 border-2 p-1">
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
            <div className="border-hilit-1 group relative inline-block border-2 text-sm font-medium">
              <a href="#" className="size-4">
                <span className="line bg-primary size-3"></span>
                <div className="bg-primary px-3 py-3"> Read more ...</div>
              </a>
            </div>
>>>>>>> 42916b9fd4faf5ea150ea570120a4d114be10fa1
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
              <button className="btn2b absolute right-1/6">
                <a href="#" className="border-2ndry-2 btn2 border-2 p-1">
                  <span className="spn2">
                    {" "}
                    view
                    <span className="texthilit1 pr-1">~&gt;</span>
                  </span>
                </Link>
              </button>
            </div>
          </header>
<<<<<<< HEAD
          <Projectmini  />
=======
          <Projectmini />
>>>>>>> 7234fad3e89bca0104bbb8a03dd786e697cd9ed4
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
                    see
                    <span className="texthilit1 pr-1">~&gt;</span>
                  </span>
                </Link>
              </button>
            </div>
          </header>
          <div>
>>>>>>> 05a0e5ff44dc54036b6b054b3557dac80e740485
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

<<<<<<< HEAD
        <div id="contact" className="py-10">
          <header className="headsectdiv">
            <Titles htitle="contact" />
          </header>

          <ContactMini />
        </div>
=======
>>>>>>> 42916b9fd4faf5ea150ea570120a4d114be10fa1
        <hr />
        <br />
        <Footer />
      </div>
    </>
  );
};

export default Home;
