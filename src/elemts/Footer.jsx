import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="relative container grid px-20 lg:mx-auto lg:grid lg:grid-cols-2 lg:content-between">
        {/* <div className="col-span-2"></div> */}
        <div className="py-2">
          <div className="button-icon lg:col-span-1">
            <div className="icon">
              <img
                className="size-8"
                src="https://img.icons8.com/?size=100&id=12598&format=png&color=000000"
                alt=""
              />
            </div>
            <a href="https://github.com/nashnc" target="blank" className="cube">
              <span className="side front">GitHub</span>
              <span className="side top">check me on github</span>
            </a>
          </div>
        </div>
        <div className="py-2">
          <div className="button-icon lg:col-span-1">
            <div className="icon">
              <img
                className="size-8"
                src="https://img.icons8.com/?size=100&id=16166&format=png&color=000000"
                alt=""
              />
            </div>
            <a
              className="cube"
              href="https://www.linkedin.com/in/nashnc/"
              target="blank"
            >
              <span className="side front">LinkedIn</span>
              <span className="side top">check me on linkedin</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
