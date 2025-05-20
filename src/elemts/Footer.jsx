import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="relative container grid hidden px-20 lg:mx-auto lg:grid lg:grid-cols-2 lg:content-between">
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
      <div className="mx-auto grid size-70 grid-cols-2 gap-10 px-15 pt-10 lg:hidden">
        <div class="group relative col-span-1">
          <button>
            <a className="" href="https://github.com/nashnc" target="blank">
              <img src="https://img.icons8.com/?size=100&id=12598&format=png&color=e5e7eb" />
            </a>
          </button>
          <span class="bg-primary absolute -top-14 left-[50%] z-20 origin-left -translate-x-[50%] scale-0 rounded-lg border border-gray-300 px-3 py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
            GitHub<span></span>
          </span>
        </div>
        <div class="group relative col-span-1">
          <button>
            <a
              className=""
              href="https://www.linkedin.com/in/nashnc/"
              target="blank"
            >
              <img src="https://img.icons8.com/?size=100&id=447&format=png&color=e5e7eb" />
            </a>
          </button>
          <span class="bg-primary absolute -top-14 left-[50%] z-20 origin-left -translate-x-[50%] scale-0 rounded-lg border border-gray-300 px-3 py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
            Linkedin<span></span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
