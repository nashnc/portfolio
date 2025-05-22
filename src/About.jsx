import React from "react";
import Navbar from "./Navbar";
import AboutMini from "./AboutMini";
import Skillset from "./elemts/Skillset";

const About = () => {
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
      <div className="mycontainer pb-10">
        <h1 className="head1 pb-3">
          <span className="text-hilit-1">/</span>about
        </h1>
        <p>Quick about me...</p>
        <AboutMini />
        <h4 className="head4">
          <span className="text-hilit-1">#</span>
          skills
        </h4>
        <Skillset />
        <h4 className="head4">
          <span className="text-hilit-1">#</span>
          funfacts
        </h4>
        <div>
          {funfacts.map((funfact, index) => (
            <p className="text-base/10">
              <span className="border-primary-3 border-1 p-1" key={index}>
                {funfact}
              </span>
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
