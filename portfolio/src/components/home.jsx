import { useState, useEffect } from "react";
import "../../src/App.css";
import NavBar from "./nav";
import Footer from "./footer";
import { useTheme } from "../contexts/ThemeContext";
import Me from "../images/me8.png";
import HTML from "../images/html.png";
import CSS from "../images/css.png";
import Django from "../images/django.png";
import Java from "../images/java.png";
import Js from "../images/js.png";
import Kotlin from "../images/kotlin.png";
import MongoDb from "../images/mongodb.png";
import Nodejs from "../images/nodejs.png";
import Python from "../images/python.png";
import Reactimg from "../images/react.png";
import Tailwind from "../images/tailwind.png";
import Bootstrap from "../images/bootrap.png";
import Mysql from "../images/mysqlpng.png";
import Sqlite from "../images/sqllite.png";
import Socket from "../images/socket.png";
import NET from "../images/NET.png";
import Spring from "../images/Spring.png";
import AWS from "../images/aws.png";
import Vscode from "../images/vscode.png";
import Github from "../images/github.png";
import Postman from "../images/postman.png";
import Figma from "../images/figma.png";
import Livechat from "../images/livechat.png";
import Djangopython from "../images/djangopython.png";
import Image from "../images/portfolio.png";
import Image1 from "../images/Image02.png";
import Social from "../images/social01.png";
import ToDo from "../images/todo.png";
import MyTube from "../images/mytube.png";
import myCv from "../images/Supun_Tharindu_Kumarasena_CV_SE.pdf";
import MallApp from "../images/MallApp.png";
import Resume from "../images/Resume.png";
import TaskApp from "../images/TaskApp.png";
import { FaDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Home() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");
  const [visible, setVisible] = useState(false);
  const [activeSkillFilter, setActiveSkillFilter] = useState("webDevelopment");

  // Typing animation state
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const words = [
    "Undergraduate at SLIIT",
    "Specialized in Information Technology",
    "Software Enginner",
    "Full Stack Developer",
  ];

  // Typing animation effect
  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (isTyping) {
      if (typedText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setTypedText(currentWord.slice(0, typedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (typedText.length > 0) {
        const timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }
  }, [typedText, currentWordIndex, isTyping, words]);

  useEffect(() => {
    if (msg) {
      setVisible(true);
      setTimeout(() => setVisible(false), 10000);
    }
  }, [msg]);

  const projects = [
    {
      title: "Shopping Mall Management System",
      description:
        "Built a comprehensive Shopping Mall Management System to streamline operations and enhance user engagement",
      image: `${MallApp}`,
      github: "https://github.com/supuntharindu123/ITPM",
      skills: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind Css"],
    },
    {
      title: "Resume Analyzer",
      description:
        "Developed a full-stack AI-powered Resume Analysis system designed to revolutionize hiring by precisely matching resumes to job descriptions, optimizing recruitment processes, and assisting job seekers",
      image: `${Resume}`,
      github: "https://github.com/supuntharindu123/AIResumeAnalyzer",
      skills: ["React", "Node.js", "MongoDB", "Express.js", "Flask", "NLP"],
    },
    {
      title: "Advance Task Manegement App",
      description:
        " Developed a full-stack Task Management System with advanced features for efficient workflow and collaboration.",
      image: `${TaskApp}`,
      github: "https://github.com/supuntharindu123/Task-Management-WebApp",
      skills: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    },
    {
      title: "Vehicle Advertisement System",
      description:
        "Developed a web-based Vehicle Advertisement system with filter ads, post ads (with validations), user authentication, and a responsive UI.",
      image: `${Image1}`,
      github: "https://github.com/supuntharindu123/Vehical-Ads",
      skills: ["Django", "HTML", "Bootstrap", "JavaScript", "MySQL"],
    },
    {
      title: "My Portfolio",
      description:
        "I am Supun Tharindu Kumarasena, a third-year undergraduate student at SLIIT, pursuing a degree in Information Technology.",
      image: `${Image}`,
      github: "#",
      skills: ["React.js", "Tailwind CSS", "Vite", "JavaScript"],
    },
    {
      title: "Social Media Platform",
      description:
        "User authentication (live validations), Messaging, Post creation, Following & Followers, and Profile management.",
      image: `${Social}`,
      github: "https://github.com/supuntharindu123/MYAPP",
      skills: ["HTML", "Node.js", "MongoDB", "Socket.io", "Bootstrap"],
    },
    {
      title: "Live Chat Application",
      description:
        "Developed a live chat application with send, delete, and edit messages, along with user authentication.",
      image: `${Livechat}`,
      github: "https://github.com/supuntharindu123/livechat_web_application",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "Socket.io",
        "MongoDB",
        "Tailwind Css",
      ],
    },
    // {
    //   title: "User Management System",
    //   description:
    //     "Developed a user record management system with full CRUD operations using Django.",
    //   image: `${Djangopython}`,
    //   github: "https://github.com/supuntharindu123/Django",
    //   skills: ["Python", "Django", "SQLite", "HTML", "CSS"],
    // },
    {
      title: "Task Management App",
      description:
        "Created a task management app with CRUD operations using Kotlin.",
      image: `${ToDo}`,
      github: "https://github.com/supuntharindu123/TaskmanagementApp",
      skills: ["Kotlin", "Android", "SQLite", "XML"],
    },
    {
      title: "YouTube Clone",
      description: "Created YouTube Clone using YouTube Data Api and React.",
      image: `${MyTube}`,
      github: "https://github.com/supuntharindu123/mytube",
      skills: ["React.js", "YouTube API", "CSS", "JavaScript"],
    },
  ];

  const education = [
    {
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      degree: "BSc (Hons) in Information Technology",
      specialization: "Information Technology",
      period: "2022 - Present",
      status: "Fourth Year Undergraduate",
      gpa: "",
      description:
        "Specialized in Information Technology with focus on full-stack development, database management, and software architecture.",
      certificates: [],
    },
    {
      institution: "Online Platforms & Certifications",
      degree: "Professional Certifications",
      specialization: "Web Development & Programming",
      period: "2024 - Present",
      status: "Continuous Learning",
      description:
        "Completed various online courses and earned certifications in modern web technologies and programming languages.",
      certificates: [
        {
          name: "AWS Eduacate Indroduction To Cloud 101 - AWS",
          link: "#",
          type: "certificate",
        },

        {
          name: "Learn JavaScripts:Full-Stack from Scratch - Udemy",
          link: "#",
          type: "certificate",
        },
        {
          name: "Django Web Framework - Meta",
          link: "#",
          type: "certificate",
        },
        {
          name: "The Complete MongoDB Course - Udemy",
          link: "#",
          type: "certificate",
        },

        {
          name: "Web Design For Beginners - CODL",
          link: "#",
          type: "certificate",
        },
      ],
    },
    {
      institution: "Rajapaksha Central College | Weeraketiya",
      degree: "G.C.E Advanced Level",
      specialization: "Maths",
      period: "2019 - 2021",
      status: "Completed",
      gpa: "B,B,C Passes",
      description:
        "Completed Advanced Level examination with Maths at Rajapaksha Central College, Weeraketiya, achieving 3 passes.",
      certificates: [],
    },
  ];

  const skillsData = {
    webDevelopment: [
      { name: "React", icon: Reactimg },

      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS },
      { name: "JavaScript", icon: Js },
      { name: "Tailwind CSS", icon: Tailwind },
      { name: "Bootstrap", icon: Bootstrap },
      { name: "Socket.io", icon: Socket },
    ],
    fullStackProjects: [
      { name: "Node.js", icon: Nodejs },
      { name: "Python", icon: Python },
      { name: "Django", icon: Django },
      { name: "Java", icon: Java },
      { name: ".NET Core", icon: NET },
      { name: "Spring-Boot", icon: Spring },
    ],
    mobileAndDesktop: [
      { name: "MySQL", icon: Mysql },
      { name: "MongoDB", icon: MongoDb },
      { name: "SQLite", icon: Sqlite },
    ],
    developmentTools: [
      { name: "Github", icon: Github },
      { name: "Vscode", icon: Vscode },
      { name: "Postman", icon: Postman },
      { name: "AWS", icon: AWS },
      { name: "Figma", icon: Figma },
    ],
  };

  const skillCategories = {
    webDevelopment: "Frontend",
    fullStackProjects: "Backend",
    mobileAndDesktop: "Databases",
    developmentTools: "Development Tools",
  };

  const getFilteredSkills = () => {
    return { [activeSkillFilter]: skillsData[activeSkillFilter] };
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5f15c21f-5b4b-4858-91ba-ade90e882c8c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setName("");
      setEmail("");
      setMessage("");
      setMsg("Your Message Sending Success!");
    } else {
      console.error("Error", res);
      setMsg("Failed to Send Your Message!");
    }
  };

  return (
    <>
      <div className={isDarkMode ? "dark" : ""}>
        <NavBar></NavBar>

        <div className="">
          <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-200 lg:flex-row lg:px-8 dark:bg-gradient-to-tr dark:from-gray-800 dark:via-black dark:to-gray-900 ">
            <div className="flex flex-col justify-center w-full max-w-2xl lg:w-1/2 lg:pr-8 lg:-mr-12">
              <h1 className="text-4xl font-black text-center text-transparent font-display bg-clip-text bg-gradient-to-r from-emerald-950 to-stone-950 hello bounce-in sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-500 dark:to-emerald-700 animate-bounce">
                WELCOME !
              </h1>
              <h2 className="my-4 text-2xl font-bold text-center text-black transition-colors duration-300 font-heading hello slide-in-left bg-clip-text sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-600 dark:to-slate-400">
                I'm Supun Tharindu Kumarasena
              </h2>
              <h3 className="text-base font-medium text-center transition-colors duration-300 font-body sm:text-lg md:text-xl lg:text-2xl xl:text-3xl hello typing-container slide-in-right">
                <span className="text-black dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-400 dark:to-slate-400 bg-clip-text">
                  {typedText}
                </span>
              </h3>
              <div className="flex flex-wrap justify-center gap-3 mt-8 hello slide-in-up">
                <a
                  href="https://github.com/supuntharindu123"
                  className="p-2 text-xl transition-all duration-300 border border-black rounded-full sm:p-3 sm:text-2xl dark:border-emerald-300 dark:text-emerald-300 hover:bg-slate-700 hover:text-white rotate-hover glow-hover"
                >
                  <FaGithub className="hover:animate-bounce"></FaGithub>
                </a>
                <a
                  href="https://www.linkedin.com/in/supun-tharindu/"
                  className="p-2 text-xl transition-all duration-300 border border-black rounded-full sm:p-3 sm:text-2xl dark:border-emerald-300 dark:text-emerald-300 hover:bg-slate-700 hover:text-white rotate-hover glow-hover"
                >
                  <CiLinkedin className="hover:animate-bounce"></CiLinkedin>
                </a>
                <a
                  href="https://www.facebook.com/share/1EsxvWXBEj/?mibextid=wwXIfr "
                  className="p-2 text-xl transition-all duration-300 border border-black rounded-full sm:p-3 sm:text-2xl dark:border-emerald-300 dark:text-emerald-300 hover:bg-slate-700 hover:text-white rotate-hover glow-hover"
                >
                  <FaFacebook className="hover:animate-bounce"></FaFacebook>
                </a>
                <a
                  href="https://www.instagram.com/supun__tharindu?igsh=ajhzaGhlMDVrc2Zx&utm_source=qr "
                  className="p-2 text-xl transition-all duration-300 border border-black rounded-full sm:p-3 sm:text-2xl dark:border-emerald-300 dark:text-emerald-300 hover:bg-slate-700 hover:text-white rotate-hover glow-hover"
                >
                  <FaInstagramSquare className="hover:animate-bounce"></FaInstagramSquare>
                </a>
              </div>
              <div className="flex flex-col items-center w-full gap-3 mt-8 sm:flex-row sm:justify-center">
                <a
                  href={myCv}
                  download={myCv}
                  className="w-full px-6 py-3 text-base font-semibold text-white transition-all duration-300 border-2 border-gray-500 rounded-full shadow bg-slate-900 hello sm:w-auto sm:px-8 sm:text-lg dark:border-emerald-300 dark:text-emerald-300 dark:hover:text-black hover:bg-white hover:text-black dark:hover:bg-emerald-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    Download CV
                    <FaDownload className="text-sm sm:text-base hover:animate-bounce wiggle" />
                  </span>
                </a>{" "}
                <a
                  href="#contact"
                  className="w-full px-6 py-3 text-base font-semibold text-center text-black transition-all duration-300 border-2 border-gray-500 rounded-full shadow hover:bg-stone-900 bg-slate-100 hello sm:w-auto sm:px-8 sm:text-lg dark:border-emerald-300 dark:text-emerald-300 dark:bg-slate-800 dark:hover:bg-emerald-300 dark:hover:text-black hover:text-white"
                >
                  Let's Connect!
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center w-full mt-8 lg:-mr-32 lg:w-1/2 lg:mt-0">
              <img
                src={Me}
                className="w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[480px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[750px] brightness-95 contrast-125 transition-transform duration-300 object-cover"
                alt="Supun Tharindu"
              />
            </div>
          </div>
          <div
            className="flex-col items-center justify-center px-4 py-10 bg-white lg:px-8 dark:bg-gradient-to-br dark:from-gray-800 dark:via-black dark:to-gray-800 "
            id="about"
          >
            <div className="w-full mb-8 lg:mb-0 lg:pr-8">
              <h1 className="mb-16 text-3xl font-black text-center text-transparent transition-colors duration-300 font-display bg-clip-text bg-gradient-to-r from-emerald-950 to-stone-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-700 dark:to-emerald-500 bounce-in">
                ABOUT ME
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center w-3/4 m-auto ">
              <p className="p-4 mb-8 text-base font-semibold transition-transform duration-300 bg-gray-100 border shadow select-none font-body sm:p-6 md:p-8 sm:text-lg md:text-xl rounded-xl text-slate-800 dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-500 dark:to-slate-300 bg-clip-text dark:bg-black zoom-in hover:scale-105">
                Hi, I’m Supun Tharindu — a dedicated fourth-year undergraduate
                at SLIIT, specializing in Information Technology. I’m passionate
                about full-stack development and skilled in modern technologies
                like React.js, Node.js, Django, and Spring Boot.
                <br /> Currently, I’m expanding my expertise in AWS cloud
                services and .NET development to become a more versatile
                software engineer.
                <br /> I enjoy solving real-world problems, continuously
                learning, and building meaningful, user-focused applications.
                I’m actively seeking an <b>internship opportunity</b> to grow my
                experience and contribute to a dynamic development team.
                <br />
                Thank you!
              </p>
              <div className="flex justify-end w-full">
                <a
                  href="#contact"
                  className="px-6 py-3 text-base font-semibold text-white transition-all duration-300 border-2 border-gray-500 rounded-full shadow bg-slate-900 hello sm:px-8 sm:text-lg dark:border-emerald-300 dark:text-emerald-300 dark:hover:text-black hover:bg-white hover:text-black dark:hover:bg-emerald-300"
                >
                  Let's Connect!
                </a>
              </div>
            </div>
          </div>
          <div
            className="px-4 py-16 bg-gray-200 dark:bg-gradient-to-tr dark:from-gray-800 dark:via-black dark:to-gray-800"
            id="education"
          >
            <div className="container mx-auto">
              <h1 className="mb-16 text-3xl font-black text-center text-transparent transition-colors duration-300 font-display bg-clip-text bg-gradient-to-r from-emerald-950 to-stone-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-700 dark:to-emerald-500 bounce-in">
                EDUCATION
              </h1>

              {/* Education List */}
              <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`relative pl-6 md:pl-8 pb-6 md:pb-8 border-l-4 border-gray-300 dark:border-gray-600 myblock ${
                      index === 0
                        ? "slide-in-left"
                        : index === 1
                        ? "slide-in-up"
                        : "slide-in-right"
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-[-10px] top-0">
                      <div className="flex items-center justify-center w-4 h-4 bg-black rounded-full shadow-lg md:w-5 md:h-5 dark:bg-emerald-800">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                      </div>
                    </div>

                    {/* Education Content */}
                    <div className="ml-2 md:ml-4">
                      {/* Institution and Period */}
                      <div className="flex flex-col gap-2 mb-3 md:flex-row md:items-center md:justify-between">
                        <h2 className="text-lg font-bold text-black md:text-xl lg:text-2xl dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-400 dark:to-slate-400 bg-clip-text">
                          {edu.institution}
                        </h2>
                        <span className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full md:px-3 md:text-sm dark:text-emerald-300 dark:bg-emerald-900">
                          <FaCalendarAlt className="inline mr-1" />
                          {edu.period}
                        </span>
                      </div>

                      {/* Degree and Specialization */}
                      <h3 className="mb-2 text-base font-semibold text-black md:text-lg dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-400 dark:to-slate-400 bg-clip-text">
                        {edu.degree}
                      </h3>
                      {edu.specialization && (
                        <p className="mb-3 text-sm text-black md:text-base dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-400 dark:to-slate-400 bg-clip-text">
                          <strong>Specialization:</strong> {edu.specialization}
                        </p>
                      )}

                      {/* Status and GPA */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-2 py-1 text-xs font-medium text-white bg-black rounded-full dark:bg-green-500 md:px-3 md:text-sm">
                          {edu.status}
                        </span>
                        {edu.gpa && (
                          <span className="px-2 py-1 text-xs font-medium text-white rounded-full bg-stone-800 dark:bg-emerald-600 md:px-3 md:text-sm">
                            {edu.gpa}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="mb-4 text-sm text-black md:text-base dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-400 dark:to-slate-400 bg-clip-text">
                        {edu.description}
                      </p>

                      {/* Certificates */}
                      {edu.certificates && edu.certificates.length > 0 && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 mb-2">
                            <FaCertificate className="text-gray-500" />
                            <span className="text-sm font-medium text-black md:text-base dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-400 dark:to-slate-400 bg-clip-text">
                              Certificates ({edu.certificates.length}):
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {edu.certificates.map((cert, certIndex) => (
                              <a
                                key={certIndex}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-white transition-all duration-300 bg-black rounded-full md:px-3 md:text-sm dark:bg-gradient-to-r dark:from-emerald-700 dark:to-emerald-600 hover:from-gray-600 hover:to-emerald-700 hover:scale-105"
                              >
                                <span>{cert.name}</span>&nbsp;
                                <FaExternalLinkAlt className="text-xs" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="px-4 py-12 bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:via-black dark:to-gray-800"
            id="projects"
          >
            <h1 className="mb-16 text-3xl font-black text-center text-transparent transition-colors duration-300 font-display bg-clip-text bg-gradient-to-r from-emerald-950 to-stone-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-700 dark:to-emerald-500 bounce-in">
              MY PROJECTS
            </h1>
            <div className="container mx-auto">
              <div className="flex gap-4 pb-6 overflow-x-auto md:gap-6 lg:gap-8 projects-scroll snap-x snap-mandatory">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex flex-col flex-shrink-0 transition-shadow duration-300 bg-gray-300 border-4 rounded-lg shadow-lg dark:border-emerald-950 dark:hover:border-emerald-800 w-72 sm:w-80 md:w-96 myblock dark:bg-black hover:shadow-none hover:border-neutral-600 zoom-in snap-center"
                  >
                    <img
                      src={project.image}
                      className="object-cover w-full transition-transform duration-300 rounded-t-lg h-44 sm:h-48 md:h-52 hover:scale-110"
                      alt={project.title}
                    />
                    <div className="flex flex-col justify-between h-full p-4 md:p-6">
                      <div>
                        <h2 className="text-lg font-black text-center font-heading dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-400 dark:to-slate-400 bg-clip-text slide-in-up sm:text-xl md:text-2xl">
                          {project.title}
                        </h2>
                        <p className="mt-3 mb-4 text-sm font-medium text-center font-body dark:text-emerald-200 fade-in-stagger sm:text-base md:text-lg">
                          {project.description}
                        </p>

                        {/* Skills Tags */}
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                          {project.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 text-xs font-semibold text-white bg-black rounded-full dark:bg-emerald-400 dark:text-gray-700 sm:text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-center mt-auto">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full py-2 text-sm font-bold text-center transition-colors duration-300 bg-white border rounded-lg shadow-md dark:bg-emerald-700 sm:text-base hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black"
                        >
                          GitHub{" "}
                          <FaGithub className="ml-2 text-lg sm:text-xl rotate-hover" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll Indicator */}
              <div className="flex justify-center mt-4">
                <p className="text-xs text-gray-600 sm:text-sm dark:text-gray-400 animate-pulse">
                  ← Scroll horizontally to see more projects →
                </p>
              </div>
            </div>
          </div>
          <div
            id="skills"
            className="px-4 py-16 bg-gray-200 dark:bg-gradient-to-tr dark:from-gray-800 dark:via-black dark:to-gray-800"
          >
            <div className="container mx-auto">
              <h1 className="mb-16 text-3xl font-black text-center text-transparent transition-colors duration-300 font-display bg-clip-text bg-gradient-to-r from-emerald-950 to-stone-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-700 dark:to-emerald-500 bounce-in">
                MY SKILLS
              </h1>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-2 mb-12 sm:gap-4">
                {Object.entries(skillCategories).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setActiveSkillFilter(key)}
                    className={`px-3 py-2 text-xs font-semibold rounded-full transition-all duration-300 border-2 hover:scale-105 sm:px-4 sm:py-3 sm:text-sm md:px-6 ${
                      activeSkillFilter === key
                        ? "bg-black dark:bg-emerald-600 text-white  shadow-lg"
                        : "bg-white dark:bg-slate-700 text-gray-700 dark:text-white border-gray-300 dark:border-slate-600 hover:bg-blue-50 dark:hover:bg-slate-600 "
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="flex flex-row items-center justify-center ">
                {Object.entries(getFilteredSkills()).map(
                  ([categoryKey, skills]) => {
                    const categoryConfig = {
                      webDevelopment: {
                        title: "Frontend Technologies",
                        color: "text-blue-600 dark:text-blue-400",
                        animation: "slide-in-left",
                      },
                      fullStackProjects: {
                        title: "Backend Technologies",
                        color: "text-green-600 dark:text-green-400",
                        animation: "slide-in-up",
                      },
                      mobileAndDesktop: {
                        title: "Databases Technologies",
                        color: "text-purple-600 dark:text-purple-400",
                        animation: "slide-in-right",
                      },
                      developmentTools: {
                        title: "Development Tools",
                        color: "text-orange-600 dark:text-orange-400",
                        animation: "slide-in-left",
                      },
                    };

                    const config = categoryConfig[categoryKey];

                    return (
                      <div
                        key={categoryKey}
                        className={`myblock ${config.animation} w-full max-w-4xl `}
                      >
                        <div className="p-4 transition-shadow duration-300 bg-white shadow-xl sm:p-6 md:p-8 dark:bg-black rounded-xl hover:shadow-2xl">
                          <h2
                            className={`mb-6 text-xl font-bold text-center sm:text-2xl md:text-3xl text-black dark:text-emerald-100 bounce-in`}
                          >
                            {config.title}
                          </h2>
                          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 sm:gap-4 justify-items-center">
                            {skills.map((skill, index) => (
                              <div
                                key={index}
                                className="flex flex-col items-center p-3 transition-transform duration-300 rounded-lg sm:p-4 bg-gray-50 dark:bg-slate-600 hover:scale-105 group zoom-in"
                                style={{
                                  animationDelay: `${index * 0.1}s`,
                                }}
                              >
                                <img
                                  src={skill.icon}
                                  alt={skill.name}
                                  className="object-contain w-12 h-12 mb-2 sm:w-16 sm:h-16 md:w-20 md:h-20"
                                />
                                <span className="text-xs font-semibold text-center text-gray-800 sm:text-sm md:text-base dark:text-white">
                                  {skill.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          {/* Contact Content Section */}
          <div
            id="contact"
            className="flex flex-col px-4 py-16 bg-gray-100 dark:bg-gradient-to-br dark:from-gray-800 dark:via-black dark:to-gray-800"
          >
            <div className="flex flex-row mb-16">
              <div className="container mx-auto text-center">
                <h1 className="mb-4 text-3xl font-black text-center text-transparent transition-colors duration-300 font-display bg-clip-text bg-gradient-to-r from-emerald-950 to-stone-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-700 dark:to-emerald-500 bounce-in">
                  CONTACT ME
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center lg:flex-row ">
              <div className="w-full mb-8 lg:w-1/2 lg:mb-0 lg:pr-8">
                <div className="flex flex-col items-center justify-center">
                  <p className="max-w-md text-lg text-center text-black font-body sm:text-xl dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-400 dark:to-slate-400 bg-clip-text fade-in-stagger lg:text-left">
                    Let's collaborate and bring your ideas to life! Reach out
                    for opportunities, projects, or just to say hello.
                  </p>

                  <div className="mt-6 space-y-3 lg:space-y-4">
                    <div className="flex items-center justify-center gap-3 lg:justify-start">
                      <div className="w-2 h-2 bg-black rounded-full dark:bg-emerald-500"></div>
                      <span className="text-base text-black sm:text-lg dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-400 dark:to-slate-400 bg-clip-text">
                        Available for internships & freelance projects
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-3 lg:justify-start">
                      <div className="w-2 h-2 bg-black rounded-full dark:bg-emerald-500"></div>
                      <span className="text-base text-black sm:text-lg dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-400 dark:to-slate-400 bg-clip-text">
                        Quick response within 24 hours
                      </span>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center justify-center gap-3 lg:justify-start">
                      <FaPhone className="text-lg text-black dark:text-emerald-500" />
                      <a
                        href="tel:+94701234567"
                        className="text-base text-black transition-all duration-300 sm:text-lg dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-400 dark:to-slate-400 bg-clip-text hover:underline"
                      >
                        +94 76 0426423
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-3 lg:justify-start">
                      <FaEnvelope className="text-lg text-black dark:text-emerald-500" />
                      <a
                        href="mailto:supuntharindu1125@gmail.com"
                        className="text-base text-black transition-all duration-300 sm:text-lg dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-400 dark:to-slate-400 bg-clip-text hover:underline"
                      >
                        supuntharindu1125@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex justify-center gap-6 mt-10 lg:justify-start slide-in-up sm:gap-8">
                    <a
                      href="https://www.facebook.com/share/1EsxvWXBEj/?mibextid=wwXIfr "
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-black transition-all duration-300 border-2 border-gray-300 rounded-full shadow-lg dark:border-emerald-300 dark:text-emerald-300 hover:text-blue-500 hover:border-blue-500 hover:scale-110 hover:shadow-xl rotate-hover glow-hover float"
                    >
                      <FaFacebook className="text-2xl heartbeat"></FaFacebook>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/supun-tharindu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-black transition-all duration-300 border-2 border-gray-300 rounded-full shadow-lg dark:border-emerald-300 dark:text-emerald-300 hover:text-blue-700 hover:border-blue-700 hover:scale-110 hover:shadow-xl rotate-hover glow-hover float"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <CiLinkedin className="text-2xl heartbeat"></CiLinkedin>
                    </a>
                    <a
                      href="https://github.com/supuntharindu123"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-black transition-all duration-300 border-2 border-gray-300 rounded-full shadow-lg dark:border-emerald-300 dark:text-emerald-300 hover:text-gray-800 hover:border-gray-800 hover:scale-110 hover:shadow-xl rotate-hover glow-hover float"
                      style={{ animationDelay: "0.4s" }}
                    >
                      <FaGithub className="text-2xl heartbeat"></FaGithub>
                    </a>
                    <a
                      href="ttps://www.instagram.com/supun__tharindu?igsh=ajhzaGhlMDVrc2Zx&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-black transition-all duration-300 border-2 border-gray-300 rounded-full shadow-lg dark:border-emerald-300 dark:text-emerald-300 hover:text-gray-800 hover:border-gray-800 hover:scale-110 hover:shadow-xl rotate-hover glow-hover float"
                      style={{ animationDelay: "0.4s" }}
                    >
                      <FaInstagramSquare className="text-2xl heartbeat"></FaInstagramSquare>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl blur opacity-20"></div>
                  <form
                    onSubmit={onSubmit}
                    className="relative p-6 bg-gray-300 border-2 border-gray-400 shadow-2xl sm:p-8 dark:bg-black dark:border-emerald-300 rounded-xl"
                  >
                    {visible && msg && (
                      <div className="w-full px-6 py-4 mb-6 text-lg font-bold text-center transition-all duration-300 rounded-lg sm:text-xl ">
                        <div
                          className={`flex items-center justify-center gap-3 ${
                            msg.includes("Success")
                              ? "text-emerald-700 bg-emerald-100 border-2 border-emerald-300 dark:text-emerald-300 dark:bg-emerald-900 dark:border-emerald-600"
                              : "text-red-700 bg-red-100 border-2 border-red-300 dark:text-red-300 dark:bg-red-900 dark:border-red-600"
                          } rounded-lg p-4`}
                        >
                          {msg.includes("Success") ? (
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          )}
                          {msg}
                        </div>
                      </div>
                    )}
                    <div className="mb-3 sm:mb-8 fade-in-stagger">
                      <label
                        className="text-lg font-bold text-black dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-400 dark:to-slate-400 bg-clip-text"
                        htmlFor="name"
                      >
                        Your Name&nbsp;
                        <span className="text-base dark:text-green-500 sm:text-lg">
                          *
                        </span>
                      </label>
                      <br></br>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        required
                        placeholder="Enter Your Full Name"
                        className="w-full h-10 pl-4 mt-2 transition-all duration-300 bg-white border-2 border-gray-300 rounded-lg shadow-md sm:text-lg dark:bg-emerald-950 dark:border-emerald-900 dark:text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-700 dark:hover:border-emerald-400"
                      ></input>
                    </div>
                    <div
                      className="mb-3 sm:mb-8 fade-in-stagger"
                      style={{ animationDelay: "0.1s" }}
                    >
                      <label
                        className="text-lg font-bold text-black dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-400 dark:to-slate-400 bg-clip-text"
                        htmlFor="email"
                      >
                        Your Email&nbsp;
                        <span className="text-base dark:text-green-500 sm:text-lg">
                          *
                        </span>
                      </label>
                      <br></br>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        required
                        placeholder="Enter Your Email Address"
                        className="w-full h-10 pl-4 mt-4 text-sm transition-all duration-300 bg-white border-2 border-gray-300 rounded-lg shadow-md sm:text-lg dark:bg-emerald-950 dark:border-emerald-900 dark:text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-700 dark:hover:border-emerald-400"
                      ></input>
                    </div>
                    <div
                      className="mb-3 fade-in-stagger"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <label
                        className="text-lg font-bold text-black dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-400 dark:to-slate-400 bg-clip-text"
                        htmlFor="message"
                      >
                        Your Message&nbsp;
                        <span className="text-base dark:text-green-500 sm:text-lg">
                          *
                        </span>
                      </label>
                      <br></br>
                      <textarea
                        name="message"
                        rows={5}
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                        required
                        placeholder="Tell me about your project, ideas, or just say hello..."
                        className="w-full p-4 mt-4 text-lg transition-all duration-300 bg-white border-2 border-gray-300 rounded-lg shadow-md resize-none dark:border-emerald-900 dark:bg-emerald-950 dark:text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-700 dark:hover:border-emerald-400"
                      ></textarea>
                    </div>
                    <div className="flex justify-end mt-8">
                      <button
                        type="submit"
                        className="px-8 py-2 text-lg font-bold text-white transition-all duration-300 bg-black border-2 rounded-lg shadow-lg dark:border-emerald-500 dark:bg-gradient-to-r dark:text-black dark:from-emerald-800 dark:to-emerald-700 dark:hover:from-emerald-600 dark:hover:to-emerald-700 hover:scale-105 hover:shadow-xl sm:px-12 sm:text-xl md:text-xl focus:ring-4 focus:ring-emerald-200 dark:focus:ring-emerald-700 "
                      >
                        <span className="flex items-center justify-center gap-3">
                          Send
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
