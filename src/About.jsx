import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import AboutMini from "./AboutMini";
import Skillset from "./elemts/Skillset";
import Footer from "./elemts/Footer";

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

  return (
    <>
      <Navbar />
      <div className="mycontainer scroll-smooth pb-10">
        <h1 id="about" className="head1 pb-3">
          <span className="texthilit1">/</span>about
        </h1>
        <p>Quick about me...</p>
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
            <p className="text-base/10">
              <span
                className="dark:border-primary-3 border-2ndry-2 border-1 p-1"
                key={index}
              >
                {funfact}
              </span>
            </p>
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
