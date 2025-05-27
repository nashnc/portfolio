import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import AboutMini from "./AboutMini";
import Skillset from "./elemts/Skillset";
import Footer from "./elemts/Footer";
import { motion } from "motion/react";

const About = () => {
  const location = useLocation();

  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  });
  const container2 = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  });
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

  return (
    <>
      <Navbar />
      <div className=" mycontainer scroll-smooth pb-10">
        <h1 id="about" className="head1 pb-3">
          <span className="texthilit1">/</span>about
        </h1>
        <motion.p
          //
          variants={container(0)}
          initial="hidden"
          animate="visible"
          //
        >
          Quick about me...
        </motion.p>
        <AboutMini />
        <h4 className="head4">
          <span className="texthilit1">#</span>
          skills
        </h4>
        <Skillset />
        <h4 className="head4">
          <span className="texthilit1">#</span>
          funfacts
        </h4>
        <div>
          {funfacts.map((funfact, index) => (
            <motion.div
              //
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="mt-2 mr-2 inline-flex text-base/10 last:mr-0"
            >
              <div
                className="dark:border-primary-3 border-2ndry-2 border-1 px-2"
                key={index}
              >
                <p> {funfact}</p>
              </div>
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

export default About;
