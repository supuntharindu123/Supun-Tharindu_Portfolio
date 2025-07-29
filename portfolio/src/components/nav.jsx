import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../contexts/ThemeContext";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 p-2 transition-colors duration-300 bg-white border-gray-800 shadow-md dark:border-b-2 dark:shadow-lg dark:bg-black">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="px-6 py-2 text-2xl font-black text-black font-display hover:text-zinc-600 dark:text-transparent dark:bg-gradient-to-br bg-clip-text dark:from-emerald-800 dark:to-emerald-200 sm:text-3xl">
            <a href="/" onClick={closeMenu}>
              SUPUN THARINDU
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden space-x-2 lg:flex lg:items-center">
            <a
              href="/"
              className="px-4 py-2 text-lg font-black text-black transition duration-150 ease-in-out font-heading dark:text-transparent dark:bg-gradient-to-br bg-clip-text dark:from-emerald-700 dark:to-emerald-200 hover:scale-105 hover:text-zinc-600 xl:text-xl"
            >
              HOME
            </a>
            <a
              href="#about"
              className="px-4 py-2 text-lg font-black text-black transition duration-150 ease-in-out font-heading dark:text-transparent dark:bg-gradient-to-br bg-clip-text dark:from-emerald-700 dark:to-emerald-200 hover:scale-105 hover:text-zinc-600 xl:text-xl"
            >
              ABOUT
            </a>
            <a
              href="#education"
              className="px-4 py-2 text-lg font-black text-black transition duration-150 ease-in-out font-heading dark:text-transparent dark:bg-gradient-to-br bg-clip-text dark:from-emerald-700 dark:to-emerald-200 hover:scale-105 hover:text-zinc-600 xl:text-xl"
            >
              EDUCATION
            </a>
            <a
              href="#projects"
              className="px-4 py-2 text-lg font-black text-black transition duration-150 ease-in-out font-heading dark:text-transparent dark:bg-gradient-to-br bg-clip-text dark:from-emerald-700 dark:to-emerald-200 hover:scale-105 hover:text-zinc-600 xl:text-xl"
            >
              PROJECTS
            </a>
            <a
              href="#skills"
              className="px-4 py-2 text-lg font-black text-black transition duration-150 ease-in-out font-heading dark:text-transparent dark:bg-gradient-to-br bg-clip-text dark:from-emerald-700 dark:to-emerald-200 hover:scale-105 hover:text-zinc-600 xl:text-xl"
            >
              SKILLS
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-lg font-black text-black transition duration-150 ease-in-out font-heading dark:text-transparent dark:bg-gradient-to-br bg-clip-text dark:from-emerald-700 dark:to-emerald-200 hover:scale-105 hover:text-zinc-600 xl:text-xl"
            >
              CONTACT
            </a>

            {/* Theme Toggle Button - Desktop */}
            <button
              onClick={toggleTheme}
              className={`ml-4 p-2 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isDarkMode
                  ? "bg-gray-700 text-emerald-300 hover:bg-gray-600 focus:ring-emerald-400"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400 border border-gray-300"
              }`}
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <MdLightMode className="text-xl" />
              ) : (
                <MdDarkMode className="text-xl" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Theme Toggle Button - Mobile */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isDarkMode
                  ? "bg-gray-700 text-emerald-400 hover:bg-gray-600 focus:ring-emerald-400"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400 border border-gray-300"
              }`}
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <MdLightMode className="text-lg" />
              ) : (
                <MdDarkMode className="text-lg" />
              )}
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 text-2xl text-black transition-colors duration-300 dark:text-white hover:text-zinc-600 dark:hover:text-emerald-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 dark:bg-black dark:border-gray-700">
            <a
              href="/"
              onClick={closeMenu}
              className="block px-4 py-3 text-lg font-black text-black transition duration-150 ease-in-out rounded-md font-heading dark:text-transparent dark:bg-gradient-to-br bg-clip-text dark:from-emerald-300 dark:to-slate-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              HOME
            </a>
            <a
              href="#about"
              onClick={closeMenu}
              className="block px-4 py-3 text-lg font-black text-black transition duration-150 ease-in-out rounded-md font-heading dark:text-transparent dark:bg-gradient-to-br bg-clip-text dark:from-emerald-300 dark:to-slate-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              ABOUT
            </a>
            <a
              href="#education"
              onClick={closeMenu}
              className="block px-4 py-3 text-lg font-black text-black transition duration-150 ease-in-out rounded-md font-heading dark:text-transparent dark:bg-gradient-to-br bg-clip-text dark:from-emerald-300 dark:to-slate-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              EDUCATION
            </a>
            <a
              href="#projects"
              onClick={closeMenu}
              className="block px-4 py-3 text-lg font-black text-black transition duration-150 ease-in-out rounded-md font-heading dark:text-transparent dark:bg-gradient-to-br bg-clip-text dark:from-emerald-300 dark:to-slate-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              PROJECTS
            </a>
            <a
              href="#skills"
              onClick={closeMenu}
              className="block px-4 py-3 text-lg font-black text-black transition duration-150 ease-in-out rounded-md font-heading dark:text-transparent dark:bg-gradient-to-br bg-clip-text dark:from-emerald-300 dark:to-slate-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              SKILLS
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block px-4 py-3 text-lg font-black text-black transition duration-150 ease-in-out rounded-md font-heading dark:text-transparent dark:bg-gradient-to-br bg-clip-text dark:from-emerald-300 dark:to-slate-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
