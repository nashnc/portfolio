import React, { useState } from "react";
import logo from "./assets/vite.svg"; // Update path as needed
import burger from "./assets/burger.svg"; // Use any burger icon

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="dark:bg-primary border-green-200 bg-white pt-3">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            nashnc.is-a.dev
          </span>
        </a>

        {/* Buttons */}
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="hilit-2 hilit-1 rounded-lg px-4 py-2 text-center text-sm font-medium focus:ring-4 focus:outline-none"
          >
            Soon...
          </button>

          {/* Toggle mobile menu */}
          <button
            onClick={toggleMenu}
            type="button"
            className="text-hilit-1 dark:hover:bg-primary-2 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm hover:bg-green-100 focus:ring-2 focus:ring-green-200 focus:outline-none md:hidden dark:text-green-400 dark:focus:ring-green-600"
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
          <ul className="dark:border-primary-2 dark:bg-primary-3 md:dark:bg-primary mt-4 flex flex-col rounded-lg border border-green-100 bg-green-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse">
            <li>
              <a href="/" className="navilink">
                <span className="text-hilit-1">#</span>home
              </a>
            </li>
            <li>
              <a href="/about" className="navilink">
                <span className="text-hilit-1">#</span>about
              </a>
            </li>
            <li>
              <a href="/projects" className="navilink">
                <span className="text-hilit-1">#</span>works
              </a>
            </li>
            <li>
              <a href="/contact" className="navilink">
                <span className="text-hilit-1">#</span>contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
