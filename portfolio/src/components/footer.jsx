import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  // Responsive footer for mobile and desktop

  return (
    <footer className="px-4 py-8 text-black bg-gradient-to-tr from-slate-100 to-white dark:text-white dark:from-black dark:via-slate-950 dark:to-emerald-900 sm:px-6 md:px-8 sm:py-10">
      <div className="container grid items-start grid-cols-1 gap-6 mx-auto md:grid-cols-3 md:gap-12 sm:gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-extrabold tracking-wider text-black dark:text-emerald-200 sm:text-2xl">
            SUPUN THARINDU
          </h3>
          <p className="max-w-sm text-xs text-black dark:text-emerald-100/80 sm:text-sm">
            Full-stack developer focused on modern, scalable web applications.
            Open to internships &amp; freelance work. React, .NET, Django, and
            cloud services.
          </p>
          <div className="flex items-center gap-2 mt-2 sm:gap-3">
            <a
              href="https://github.com/supuntharindu123"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-lg transition-all duration-300 border-2 rounded-full border-emerald-500 text-emerald-700 hover:bg-emerald-500 hover:text-black dark:border-emerald-600 dark:text-emerald-200 sm:p-2 sm:text-xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/supun-tharindu/"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-lg transition-all duration-300 border-2 rounded-full border-emerald-500 text-emerald-700 hover:bg-emerald-500 hover:text-black dark:border-emerald-600 dark:text-emerald-200 sm:p-2 sm:text-xl"
              aria-label="LinkedIn"
            >
              <CiLinkedin />
            </a>
            <a
              href="https://www.facebook.com/share/1EsxvWXBEj/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-lg transition-all duration-300 border-2 rounded-full border-emerald-500 text-emerald-700 hover:bg-emerald-500 hover:text-black dark:border-emerald-600 dark:text-emerald-200 sm:p-2 sm:text-xl"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/supun__tharindu?igsh=ajhzaGhlMDVrc2Zx&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-lg transition-all duration-300 border-2 rounded-full border-emerald-500 text-emerald-700 hover:bg-emerald-500 hover:text-black dark:border-emerald-600 dark:text-emerald-200 sm:p-2 sm:text-xl"
              aria-label="Instagram"
            >
              <FaInstagramSquare />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-base font-bold text-black dark:text-emerald-200 sm:mb-4 sm:text-lg">
            Quick Links
          </h4>
          <ul className="space-y-1.5 text-xs sm:space-y-2 sm:text-sm">
            <li>
              <a
                href="#about"
                className="text-black transition-colors dark:text-slate-100 hover:text-emerald-700 dark:hover:text-emerald-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="text-black transition-colors dark:text-slate-100 hover:text-emerald-700 dark:hover:text-emerald-300"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-black transition-colors dark:text-slate-100 hover:text-emerald-700 dark:hover:text-emerald-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-black transition-colors dark:text-slate-100 hover:text-emerald-700 dark:hover:text-emerald-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-black transition-colors dark:text-slate-100 hover:text-emerald-700 dark:hover:text-emerald-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-base font-bold text-black dark:text-emerald-200 sm:mb-4 sm:text-lg">
            Contact
          </h4>
          <p className="text-xs text-black dark:text-slate-100 sm:text-sm">
            +94 76 0426423
          </p>
          <p className="text-xs text-black dark:text-slate-100 sm:text-sm">
            supuntharindu1125@gmail.com
          </p>
        </div>
      </div>

      <div className="pt-4 mt-6 border-t border-emerald-300 dark:border-emerald-800 sm:pt-6 sm:mt-10">
        <p className="text-xs text-center text-black dark:text-emerald-200 sm:text-sm">
          © {year} Supun Tharindu Kumarasena — Built with care. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
