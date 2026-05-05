import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 py-10 text-white bg-gradient-to-tr from-emerald-900 to-black dark:from-black dark:to-emerald-900">
      <div className="container grid items-start grid-cols-1 gap-8 mx-auto md:grid-cols-3 md:gap-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-extrabold tracking-wider text-emerald-200">
            SUPUN THARINDU
          </h3>
          <p className="max-w-sm text-sm text-emerald-100/80">
            Full-stack developer focused on modern, scalable web applications —
            open to internships and freelance work. Built projects using React,
            .NET, Django and cloud services.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <a
              href="https://github.com/supuntharindu123"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-xl transition-all duration-300 border-2 rounded-full border-emerald-600 hover:bg-emerald-500 hover:text-black"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/supun-tharindu/"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-xl transition-all duration-300 border-2 rounded-full border-emerald-600 hover:bg-emerald-500 hover:text-black"
              aria-label="LinkedIn"
            >
              <CiLinkedin />
            </a>
            <a
              href="https://www.facebook.com/share/1EsxvWXBEj/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-xl transition-all duration-300 border-2 rounded-full border-emerald-600 hover:bg-emerald-500 hover:text-black"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/supun__tharindu?igsh=ajhzaGhlMDVrc2Zx&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-xl transition-all duration-300 border-2 rounded-full border-emerald-600 hover:bg-emerald-500 hover:text-black"
              aria-label="Instagram"
            >
              <FaInstagramSquare />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold text-emerald-200">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-emerald-300">
                About
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-emerald-300">
                Education
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-emerald-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-emerald-300">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-emerald-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold text-emerald-200">Contact</h4>
          <p className="text-sm">+94 76 0426423</p>
          <p className="text-sm">supuntharindu1125@gmail.com</p>
          <div className="mt-4">
            <p className="text-sm font-semibold text-emerald-200">Office</p>
            <p className="text-xs">Malabe, Sri Lanka</p>
          </div>
        </div>
      </div>

      <div className="pt-6 mt-10 border-t border-emerald-800">
        <p className="text-sm text-center text-emerald-200">
          © {year} Supun Tharindu Kumarasena — Built with care. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
