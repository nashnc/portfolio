import React, { useEffect } from "react";
import Titles from "./elemts/TitlesOther";
import TitlesS from "./elemts/TitlesSlash";

import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import AboutMini from "./AboutMini";
import Skillset from "./elemts/Skillset";
import Footer from "./elemts/Footer";
import { motion } from "framer-motion";
import MouseHover from "./MouseHover";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Delay to ensure DOM is ready
      const scrollToHash = () => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };

      // Wait one animation frame before scrolling
      requestAnimationFrame(scrollToHash);
    }
  }, [location]);

  const funfacts = [
    "A cup of coffee is a ticket to heaven",
    "Speak English Malayalam and Tamil",
    "Self taught in MS Office",
    "Likes to explore tech",
    "Ready to take on a challenge",
  ];

  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });
  const container2 = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  // Helper to get a random duration between 0.5 and 1.5
  const getRandomDuration = () => 1.5 + Math.random();

  return (
    <>
      <div className="fixed inset-0 z-[-2] bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      {/* Main content wrapper */}
      <div className="relative z-0"></div>
      <MouseHover />
      <Navbar />
      <div className="mycontainer scroll-smooth pb-10">
        <TitlesS htitle="about" />
        <motion.p variants={container2(0.5)} initial="hidden" animate="visible">
          Quick about me...
        </motion.p>
        <AboutMini container={container} container2={container2} />
        <section className="headsectdiv">
          <Titles htitle="skills" />
        </section>
        <Skillset />
        <section className="headsectdiv py-5">
          <Titles htitle="funfact" />
        </section>
        <div>
          {funfacts.map((funfact, index) => (
            <div
              className="mt-2 mr-2 inline-flex text-base/10 last:mr-0"
              key={index}
            >
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: getRandomDuration() }}
                className="dark:border-primary-3 border-2ndry-2 border-1 px-2"
              >
                <p>{funfact}</p>
              </motion.div>
            </div>
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

export default About;
