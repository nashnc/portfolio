import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "./assets/vite.svg"; // Update path as needed
import burger from "./assets/burger.svg"; // Use any burger icon
import LightBulb from "./LightBulb";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="dark:bg-primary bg-2ndry-1 border-green-200 pt-3 shadow-sm">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Logo" />
          <span className="dark:text-2ndry-1 self-center whitespace-nowrap text-2xl font-semibold">
            nashnc
          </span>
        </a>
        {/* Buttons */}
        {/* Buttons */}
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <div className="group relative inline-block">
            <LightBulb />

            {/* Tooltip */}
            <div
              className="text-2ndry-1 pointer-events-none absolute right-full top-1/2 mr-2 -translate-y-1/2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              // no style attribute here - no delay
            >
              pull the chord!
              <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-full rotate-45 bg-gray-900"></div>
            </div>
          </div>

          {/* Toggle mobile menu */}

          <button
            onClick={toggleMenu}
            type="button"
            className="text-hilit-1 dark:hover:bg-primary-2 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-200 md:hidden dark:text-green-400 dark:focus:ring-green-600"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <img src={burger} alt="menu toggle" className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation links */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } w-full items-center justify-between md:order-1 md:flex md:w-auto`}
          id="navbar-cta"
        >
          <ul className="dark:border-primary-2 dark:bg-primary-3 md:dark:bg-primary mt-4 flex flex-col rounded-lg border border-green-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
            <li>
              <Link to="/" className="navilink">
                <span className="text-hilit-1">#</span>home
              </Link>
            </li>
            <li>
              <Link to="/about" className="navilink">
                <span className="text-hilit-1">#</span>about
              </Link>
            </li>
            <li>
              <Link to="/projects" className="navilink">
                <span className="text-hilit-1">#</span>works
              </Link>
            </li>
            <li>
              <Link to="/contact" className="navilink">
                <span className="text-hilit-1">#</span>contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
