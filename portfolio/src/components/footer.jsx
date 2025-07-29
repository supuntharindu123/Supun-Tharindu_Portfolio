import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="px-4 py-8 bg-black border-t-2 sm:px-6 md:px-8 lg:px-12 xl:px-16 to-black dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800 dark:border-emerald-300">
        {/* Navigation Links */}
        <div className="flex flex-col items-center justify-center gap-4 mb-8 sm:flex-row sm:flex-wrap sm:gap-6 md:gap-8 lg:gap-10">
          <a
            className="text-lg font-black text-white transition-colors duration-300 font-heading sm:text-xl md:text-2xl hover:underline hover:text-emerald-300 dark:text-emerald-200 dark:hover:text-emerald-300"
            href="#about"
          >
            ABOUT
          </a>
          <a
            className="text-lg font-black text-white transition-colors duration-300 font-heading sm:text-xl md:text-2xl hover:underline hover:text-emerald-300 dark:text-emerald-200 dark:hover:text-emerald-300"
            href="#education"
          >
            EDUCATION
          </a>
          <a
            className="text-lg font-black text-white transition-colors duration-300 font-heading sm:text-xl md:text-2xl hover:underline hover:text-emerald-300 dark:text-emerald-200 dark:hover:text-emerald-300"
            href="#skills"
          >
            SKILLS
          </a>
          <a
            className="text-lg font-black text-white transition-colors duration-300 font-heading sm:text-xl md:text-2xl hover:underline hover:text-emerald-300 dark:text-emerald-200 dark:hover:text-emerald-300"
            href="#projects"
          >
            PROJECTS
          </a>
          <a
            className="text-lg font-black text-white transition-colors duration-300 font-heading sm:text-xl md:text-2xl hover:underline hover:text-emerald-300 dark:text-emerald-200 dark:hover:text-emerald-300"
            href="#contact"
          >
            CONTACT
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
            <a
              target="_blank"
              href="https://github.com/supuntharindu123"
              className="p-2 text-xl text-white transition-all duration-300 border-2 border-white rounded-full sm:p-3 sm:text-2xl md:p-4 hover:bg-white hover:text-black hover:scale-110 hover:shadow-lg dark:border-emerald-300 dark:hover:bg-emerald-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/supun-tharindu/"
              className="p-2 text-xl text-white transition-all duration-300 border-2 border-white rounded-full sm:p-3 sm:text-2xl md:p-4 hover:bg-white hover:text-black hover:scale-110 hover:shadow-lg dark:border-emerald-300 dark:hover:bg-emerald-300"
              aria-label="LinkedIn"
            >
              <CiLinkedin />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/share/1EsxvWXBEj/?mibextid=wwXIfr"
              className="p-2 text-xl text-white transition-all duration-300 border-2 border-white rounded-full sm:p-3 sm:text-2xl md:p-4 hover:bg-white hover:text-black hover:scale-110 hover:shadow-lg dark:border-emerald-300 dark:hover:bg-emerald-300"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/supun__tharindu?igsh=ajhzaGhlMDVrc2Zx&utm_source=qr"
              className="p-2 text-xl text-white transition-all duration-300 border-2 border-white rounded-full sm:p-3 sm:text-2xl md:p-4 hover:bg-white hover:text-black hover:scale-110 hover:shadow-lg dark:border-emerald-300 dark:hover:bg-emerald-300"
              aria-label="Instagram"
            >
              <FaInstagramSquare />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-gray-700 dark:border-emerald-300">
          <p className="text-sm font-bold text-center text-white font-body sm:text-base md:text-lg">
            COPYRIGHT © 2025 SUPUN THARINDU PORTFOLIO. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
