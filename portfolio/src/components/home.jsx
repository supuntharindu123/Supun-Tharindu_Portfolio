import { useState, useEffect } from "react";
import "../../src/App.css";
import NavBar from "./nav";
import Footer from "./footer";
import { useTheme } from "../contexts/ThemeContext";
import Me from "../images/me.png";
import HTML from "../images/html.png";
import CSS from "../images/css.png";
import Django from "../images/django.png";
import Java from "../images/java.png";
import Js from "../images/js.png";
import Docker from "../images/docker.png";
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
import SchoolProj from "../images/schoolmanagement.png";
import TshirtProj from "../images/TshirtProj.png";
import MediHouseProj from "../images/medihouse.png";
import DjangoCert from "../images/Djano_Web_Framework_Certificate.png";
import JSFullCert from "../images/Learn_JavaScript_FullStack_Cretificate.jpg";
import MongoCert from "../images/UdemyMongoDb.jpg";
import WebDesignCert from "../images/Web_Design_Course_Certificate.png";
import AWSCert from "../images/AWS_Badge.png";
import { FaDownload } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
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
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusType, setStatusType] = useState("");
  const [activeSkillFilter, setActiveSkillFilter] = useState("webDevelopment");
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [activeEducationFilter, setActiveEducationFilter] = useState("all");

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

  const heroStats = [
    { value: "20+", label: "Projects Completed" },
    { value: "5+", label: "Certificates Earned" },
    { value: "4+", label: "Years in IT" },
    { value: "6 Months", label: "Industry Internship" },
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
      title: "E-Commerce System For T-Shirt Business",
      description:
        "TShirts E-Commerce Platform is a full-stack web app for browsing products, managing carts, and placing orders with secure JWT-based authentication.",
      image: `${TshirtProj}`,
      github: "https://github.com/supuntharindu123/ECommenceTShirts",
      skills: [
        "React.js",
        ".NET Web API",
        "SQL Server",
        "Tailwind Css",
        "AWS S3",
      ],
    },
    // {
    //   title: "Advance Task Manegement App",
    //   description:
    //     " Developed a full-stack Task Management System with advanced features for efficient workflow and collaboration.",
    //   image: `${TaskApp}`,
    //   github: "https://github.com/supuntharindu123/Task-Management-WebApp",
    //   skills: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    // },
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
    // {
    //   title: "Task Management App",
    //   description:
    //     "Created a task management app with CRUD operations using Kotlin.",
    //   image: `${ToDo}`,
    //   github: "https://github.com/supuntharindu123/TaskmanagementApp",
    //   skills: ["Kotlin", "Android", "SQLite", "XML"],
    // },
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
      institution:
        "Sri Lanka Institute of Information Technology (SLIIT) | Malabe",
      degree: "BSc (Hons) in Information Technology (Specialized in IT)",
      specialization: "Information Technology",
      period: "Oct 2022 - Present",
      status: "Year 4 Completed",
      gpa: "Higher Diploma in IT - Completed",
      description:
        "Successfully completed Year 4, Semester 1 without repeats. Specialized in full-stack development with expertise in ASP.NET Core, React.js, SQL Server, and cloud technologies. Strong focus on clean architecture, RESTful APIs, and secure authentication systems.",
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
          name: "AWS Educate Introduction To Cloud 101 - AWS",
          link: AWSCert,
          image: AWSCert,
          type: "certificate",
        },

        {
          name: "Learn JavaScripts:Full-Stack from Scratch - Udemy",
          link: JSFullCert,
          image: JSFullCert,
          type: "certificate",
        },
        {
          name: "Django Web Framework - Meta",
          link: DjangoCert,
          image: DjangoCert,
          type: "certificate",
        },
        {
          name: "The Complete MongoDB Course - Udemy",
          link: MongoCert,
          image: MongoCert,
          type: "certificate",
        },

        {
          name: "Web Design For Beginners - CODL",
          link: WebDesignCert,
          image: WebDesignCert,
          type: "certificate",
        },
      ],
    },
    {
      institution: "Rajapaksha Central College | Weeraketiya",
      degree: "G.C.E Advanced Level",
      specialization: "Chemistry (B), Physics (B), Combined Mathematics (C)",
      period: "2019 - 2021",
      status: "Completed",
      gpa: "B, B, C Passes",
      description:
        "Successfully completed Advanced Level examination with strong foundation in Science and Mathematics disciplines.",
      certificates: [],
    },
  ];

  const experience = [
    {
      position: "QA / Development Intern",
      company: "ABI Systems (Pvt) Ltd",
      period: "Aug 2025 - Feb 2026",
      description:
        "Contributed to software quality assurance and development in an Agile environment, leading QA activities and improving product quality.",
      responsibilities: [
        "Lead QA activities in Agile environment ensuring high-quality releases",
        "Performed manual and automated testing improving defect detection efficiency",
        "Maintained and enhanced automation scripts for mobile applications",
        "Collaborated with developers for debugging and issue resolution",
        "Contributed to Software Development Life Cycle (SDLC) processes",
      ],
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
      { name: ".NET Core", icon: NET },
      { name: "Node.js", icon: Nodejs },
      { name: "Python", icon: Python },
      { name: "Django", icon: Django },
      { name: "Java", icon: Java },
      { name: "Spring-Boot", icon: Spring },
    ],
    mobileAndDesktop: [
      { name: "MySQL", icon: Mysql },
      { name: "MongoDB", icon: MongoDb },
      { name: "SQLite", icon: Sqlite },
    ],
    developmentTools: [
      { name: "Github", icon: Github },
      { name: "Docker", icon: Docker },
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
    // Basic client-side validation before sending
    const nameVal = name.trim();
    const emailVal = email.trim();
    const messageVal = message.trim();
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (nameVal.length < 2) {
      setMsg("Please enter your full name.");
      setVisible(true);
      return;
    }

    if (!emailRegex.test(emailVal)) {
      setMsg("Please enter a valid email address.");
      setVisible(true);
      return;
    }

    if (messageVal.length < 10) {
      setMsg("Message must be at least 10 characters.");
      setVisible(true);
      return;
    }

    // basic honeypot check
    const botField = event.target.botcheck && event.target.botcheck.value;
    if (botField) {
      // silently drop spam submissions
      return;
    }

    setStatusType("");

    setLoading(true);

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
      setSubject("");
      setEmail("");
      setMessage("");
      setMsg("Your message was sent successfully.");
      setStatusType("success");
      setVisible(true);
      // focus name for next input
      const nameEl = document.getElementById("name");
      if (nameEl) nameEl.focus();
    } else {
      console.error("Error", res);
      setMsg("Failed to send your message. Please try again later.");
      setStatusType("error");
      setVisible(true);
    }
    setLoading(false);
  };

  return (
    <>
      <div className={isDarkMode ? "dark" : ""}>
        <NavBar></NavBar>

        <div className="">
          <div className="flex flex-col items-center justify-center w-full min-h-screen px-4 bg-gray-200 lg:flex-row lg:px-2 dark:bg-gradient-to-tr dark:from-gray-800 dark:via-black dark:to-gray-900 ">
            <div className="flex items-center justify-center w-full lg:w-1/3 xl:-mt-28">
              <img
                src={Me}
                className="w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[480px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[650px] brightness-95 contrast-125 transition-transform duration-300 object-cover"
                alt="Supun Tharindu"
              />
            </div>
            <div className="flex flex-col justify-center w-full max-w-2xl px-2 mt-6 lg:mt-4 lg:w-1/2 lg:pr-8 sm:px-0 ">
              <h1 className="text-4xl font-black tracking-wide text-center text-transparent font-display bg-clip-text bg-gradient-to-r from-emerald-950 to-stone-950 hello md:text-6xl lg:text-7xl xl:text-8xl dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-500 dark:to-emerald-700">
                Welcome
              </h1>
              <h2 className="my-3 text-lg font-semibold text-center text-black transition-colors duration-300 font-heading hello sm:my-4 sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl dark:text-white">
                I'm Supun Tharindu Kumarasena
              </h2>
              <h3 className="text-sm font-medium tracking-wide text-center transition-colors duration-300 font-body sm:text-base md:text-lg lg:text-2xl xl:text-3xl hello typing-container">
                <span className="text-emerald-700 dark:text-emerald-400">
                  {typedText}
                </span>
              </h3>
              <div className="flex flex-wrap justify-center gap-3 mt-8 hello">
                <a
                  href="https://github.com/supuntharindu123"
                  className="p-2 text-xl text-gray-700 transition-all duration-200 border border-gray-400 rounded-full sm:p-3 sm:text-2xl dark:border-gray-500 dark:text-gray-300 hover:border-emerald-600 hover:text-emerald-700 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
                >
                  <FaGithub></FaGithub>
                </a>
                <a
                  href="https://www.linkedin.com/in/supun-tharindu/"
                  className="p-2 text-xl text-gray-700 transition-all duration-200 border border-gray-400 rounded-full sm:p-3 sm:text-2xl dark:border-gray-500 dark:text-gray-300 hover:border-emerald-600 hover:text-emerald-700 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
                >
                  <CiLinkedin></CiLinkedin>
                </a>
                <a
                  href="https://www.facebook.com/share/1EsxvWXBEj/?mibextid=wwXIfr "
                  className="p-2 text-xl text-gray-700 transition-all duration-200 border border-gray-400 rounded-full sm:p-3 sm:text-2xl dark:border-gray-500 dark:text-gray-300 hover:border-emerald-600 hover:text-emerald-700 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
                >
                  <FaFacebook></FaFacebook>
                </a>
                <a
                  href="https://www.instagram.com/supun__tharindu?igsh=ajhzaGhlMDVrc2Zx&utm_source=qr "
                  className="p-2 text-xl text-gray-700 transition-all duration-200 border border-gray-400 rounded-full sm:p-3 sm:text-2xl dark:border-gray-500 dark:text-gray-300 hover:border-emerald-600 hover:text-emerald-700 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
                >
                  <FaInstagramSquare></FaInstagramSquare>
                </a>
              </div>
              <div className="flex flex-col items-center w-full gap-3 mt-8 sm:flex-row sm:justify-center">
                <a
                  href={myCv}
                  download={myCv}
                  className="w-full px-6 py-3 text-base font-semibold text-white transition-all duration-200 bg-gray-900 border border-gray-800 rounded-md shadow-sm hello sm:w-auto sm:px-8 sm:text-lg dark:border-gray-600 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <span className="flex items-center justify-center gap-2">
                    Download CV
                    <FaDownload className="text-sm sm:text-base" />
                  </span>
                </a>{" "}
                <a
                  href="#contact"
                  className="w-full px-4 py-2.5 text-sm font-semibold text-center text-white transition-all duration-200 border border-emerald-700 rounded-md shadow-sm bg-emerald-700 hello sm:w-auto sm:px-6 sm:py-3 sm:text-base md:px-8 md:text-lg dark:border-emerald-500 dark:bg-emerald-700 hover:bg-emerald-800 dark:hover:bg-emerald-600 active:scale-95"
                >
                  Contact Me
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-8 sm:grid-cols-4 hello">
                {heroStats.map((stat, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-center justify-center px-4 text-center transition-all duration-300  text-slate-900 shadow-emerald-500/10 backdrop-blur-md rounded-2xl hover:-translate-y-1 hover:scale-[1.03] hover:border-emerald-400 dark:text-white overflow-hidden"
                    style={{ animationDelay: `${index * 0.12}s` }}
                  >
                    <div className="absolute top-0 left-0 w-full opacity-80 dark:opacity-100"></div>
                    <span className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl dark:text-emerald-300">
                      {stat.value}
                    </span>
                    <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-900 sm:text-xs dark:text-emerald-100/80">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
              {/* <div className="flex justify-center mt-8 mb-5 lg:justify-center slide-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase border rounded-full shadow-lg text-emerald-700 bg-gradient-to-r from-emerald-50 to-white border-emerald-300 shadow-emerald-500/10 backdrop-blur-md dark:bg-gradient-to-r dark:from-emerald-950/70 dark:to-black dark:text-emerald-300 dark:border-emerald-400/40 dark:shadow-emerald-500/20">
                  Available for Opportunities
                </div>
              </div> */}
            </div>
          </div>
          <div
            className="px-4 py-16 bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:via-black dark:to-gray-800"
            id="about"
          >
            <div className="w-full mb-8 lg:mb-0 lg:pr-8">
              <h1 className="mb-12 text-3xl font-bold text-center transition-colors duration-300 text-emerald-950 sm:text-4xl md:text-5xl lg:text-6xl dark:text-emerald-400">
                About Me
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center w-3/4 m-auto ">
              <p className="p-4 mb-8 text-base font-medium leading-7 text-gray-800 transition-all duration-300 border border-gray-200 shadow-sm select-none bg-gray-50 font-body sm:p-6 md:p-8 sm:text-lg md:text-xl rounded-xl dark:text-gray-100 dark:bg-gray-900 dark:border-gray-800">
                I am a Full Stack Developer and undergraduate at Sri Lanka
                Institute of Information Technology, specializing in modern web
                application development. I work with React.js, ASP.NET Core Web
                API, Node.js, SQL Server, MongoDB, and Redux Toolkit to build
                secure, scalable, and user-focused applications.
                <br />
                <br /> My experience includes e-commerce systems, healthcare
                platforms, school management solutions, and AI-based projects. I
                also completed a QA / Development internship at ABI Systems,
                which strengthened my skills in software development, testing,
                debugging, and teamwork.
              </p>
              <div className="flex justify-end w-full">
                <a
                  href="#contact"
                  className="px-6 py-3 text-base font-semibold text-white transition-all duration-200 border rounded-md shadow-sm border-emerald-700 bg-emerald-700 hello sm:px-8 sm:text-lg dark:border-emerald-500 dark:bg-emerald-700 hover:bg-emerald-800 dark:hover:bg-emerald-600"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
          <div
            className="px-4 py-16 bg-gray-100 dark:bg-gradient-to-br dark:from-gray-800 dark:via-black dark:to-gray-800"
            id="education"
          >
            <div className="container mx-auto">
              <h1 className="mb-12 text-3xl font-bold text-center transition-colors duration-300 text-emerald-950 sm:text-4xl md:text-5xl lg:text-6xl dark:text-emerald-400">
                Education & Certifications
              </h1>

              {/* Education Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-12 sm:gap-3 md:gap-4">
                <button
                  onClick={() => setActiveEducationFilter("all")}
                  className={`px-3 py-2 text-xs font-semibold rounded-full transition-all duration-300 border-2 hover:scale-105 sm:px-4 sm:py-3 sm:text-sm md:px-6 ${
                    activeEducationFilter === "all"
                      ? "bg-black dark:bg-emerald-600 text-white shadow-lg"
                      : "bg-white dark:bg-slate-700 text-gray-700 dark:text-white border-gray-300 dark:border-slate-600 hover:bg-blue-50 dark:hover:bg-slate-600"
                  }`}
                >
                  All Education
                </button>
                <button
                  onClick={() => setActiveEducationFilter("university")}
                  className={`px-3 py-2 text-xs font-semibold rounded-full transition-all duration-300 border-2 hover:scale-105 sm:px-4 sm:py-3 sm:text-sm md:px-6 ${
                    activeEducationFilter === "university"
                      ? "bg-black dark:bg-emerald-600 text-white shadow-lg"
                      : "bg-white dark:bg-slate-700 text-gray-700 dark:text-white border-gray-300 dark:border-slate-600 hover:bg-blue-50 dark:hover:bg-slate-600"
                  }`}
                >
                  University
                </button>
                <button
                  onClick={() => setActiveEducationFilter("certifications")}
                  className={`px-3 py-2 text-xs font-semibold rounded-full transition-all duration-300 border-2 hover:scale-105 sm:px-4 sm:py-3 sm:text-sm md:px-6 ${
                    activeEducationFilter === "certifications"
                      ? "bg-black dark:bg-emerald-600 text-white shadow-lg"
                      : "bg-white dark:bg-slate-700 text-gray-700 dark:text-white border-gray-300 dark:border-slate-600 hover:bg-blue-50 dark:hover:bg-slate-600"
                  }`}
                >
                  Certifications
                </button>
              </div>

              {/* Education List */}
              <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
                {education
                  .filter((edu) => {
                    if (activeEducationFilter === "all") return true;
                    if (activeEducationFilter === "university")
                      return (
                        edu.institution.includes("SLIIT") ||
                        edu.institution.includes("Rajapaksha")
                      );
                    if (activeEducationFilter === "certifications")
                      return edu.institution.includes("Online");
                    return true;
                  })
                  .map((edu, index) => (
                    <div
                      key={index}
                      className="relative pb-6 pl-6 transition-all duration-300 border-l-4 border-gray-300 md:pl-8 md:pb-8 dark:border-emerald-600 myblock hover:shadow-lg dark:hover:shadow-emerald-900/30"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-[-10px] top-0">
                        <div className="flex items-center justify-center w-4 h-4 bg-black rounded-full shadow-lg md:w-5 md:h-5 dark:bg-gradient-to-br dark:from-emerald-500 dark:to-emerald-700">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                        </div>
                      </div>

                      {/* Education Content */}
                      <div className="ml-2 md:ml-4">
                        {/* Institution and Period */}
                        <div className="flex flex-col gap-2 mb-3 md:flex-row md:items-center md:justify-between">
                          <div className="flex items-center flex-1 gap-3">
                            <span className="px-2 py-1 text-lg font-bold rounded-full bg-emerald-500 dark:bg-emerald-600">
                              {edu.institution.includes("Online") ? "📜" : "🎓"}
                            </span>
                            <h2 className="text-lg font-bold text-black md:text-xl lg:text-2xl dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-400 dark:to-slate-400 bg-clip-text">
                              {edu.institution}
                            </h2>
                          </div>
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
                            <strong>Specialization:</strong>{" "}
                            {edu.specialization}
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
                              <FaCertificate className="text-gray-500 dark:text-emerald-400" />
                              <span className="text-sm font-medium text-black md:text-base dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-400 dark:to-slate-400 bg-clip-text">
                                Certificates ({edu.certificates.length}):
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {edu.certificates.map((cert, certIndex) => (
                                <button
                                  key={certIndex}
                                  onClick={() => setSelectedCertificate(cert)}
                                  className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-black transition-all duration-200 bg-gray-100 rounded-md hover:scale-105 hover:bg-gray-200 dark:bg-gradient-to-r dark:from-emerald-700 dark:to-emerald-600 dark:text-white dark:hover:from-emerald-600 dark:hover:to-emerald-500"
                                >
                                  <span className="max-w-xs truncate">
                                    {cert.name}
                                  </span>
                                  <FaExternalLinkAlt className="text-xs text-gray-600 dark:text-emerald-200" />
                                </button>
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

          {/* Professional Experience Section */}
          <div
            className="px-4 py-16 bg-gray-200 dark:bg-gradient-to-br dark:from-gray-800 dark:via-black dark:to-gray-800"
            id="experience"
          >
            <div className="container mx-auto">
              <h1 className="mb-12 text-3xl font-bold text-center transition-colors duration-300 text-emerald-950 sm:text-4xl md:text-5xl lg:text-6xl dark:text-emerald-400">
                Professional Experience
              </h1>

              {/* Experience List */}
              <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pb-6 pl-6 border-l-4 border-gray-300 md:pl-8 md:pb-8 dark:border-emerald-600 myblock"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-[-10px] top-0">
                      <div className="flex items-center justify-center w-4 h-4 bg-black rounded-full shadow-lg md:w-5 md:h-5 dark:bg-gradient-to-br dark:from-emerald-500 dark:to-emerald-700">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                      </div>
                    </div>

                    {/* Experience Content */}
                    <div className="ml-2 md:ml-4">
                      {/* Position and Company */}
                      <div className="flex flex-col gap-2 mb-3 md:flex-row md:items-center md:justify-between">
                        <h2 className="text-lg font-bold text-black md:text-xl lg:text-2xl dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-400 dark:to-slate-400 bg-clip-text">
                          {exp.position}
                        </h2>
                        <span className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full md:px-3 md:text-sm dark:text-emerald-300 dark:bg-emerald-900">
                          {exp.period}
                        </span>
                      </div>

                      {/* Company Name */}
                      <h3 className="mb-2 text-base font-semibold text-black md:text-lg dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-400 dark:to-slate-400 bg-clip-text">
                        {exp.company}
                      </h3>

                      {/* Description */}
                      <p className="mb-4 text-sm text-black md:text-base dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-400 dark:to-slate-400 bg-clip-text">
                        {exp.description}
                      </p>

                      {/* Responsibilities */}
                      {exp.responsibilities &&
                        exp.responsibilities.length > 0 && (
                          <ul className="ml-4 space-y-2">
                            {exp.responsibilities.map((resp, respIndex) => (
                              <li
                                key={respIndex}
                                className="text-sm text-black list-disc md:text-base dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-400 dark:to-slate-400 bg-clip-text"
                              >
                                {resp}
                              </li>
                            ))}
                          </ul>
                        )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="px-3 py-8 bg-white sm:px-4 sm:py-12 lg:px-8 dark:bg-gradient-to-br dark:from-gray-800 dark:via-black dark:to-gray-800"
            id="projects"
          >
            <h1 className="mb-8 text-2xl font-bold text-center transition-colors duration-300 text-emerald-950 sm:mb-12 sm:text-3xl md:text-4xl lg:text-6xl dark:text-emerald-400">
              Projects
            </h1>
            <div className="container mx-auto">
              <div className="flex gap-3 pb-6 overflow-x-auto sm:gap-4 md:gap-6 lg:gap-8 projects-scroll snap-x snap-mandatory">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex flex-col flex-shrink-0 w-64 transition-all duration-300 bg-gray-300 border-2 rounded-lg shadow-md dark:border-emerald-900 dark:hover:border-emerald-700 sm:w-72 md:w-80 lg:w-96 myblock dark:bg-black hover:shadow-lg hover:border-gray-400 snap-center"
                  >
                    <img
                      src={project.image}
                      className="object-cover w-full h-40 transition-transform duration-300 rounded-t-lg sm:h-44 md:h-48 hover:scale-105"
                      alt={project.title}
                    />
                    <div className="flex flex-col justify-between h-full p-3 sm:p-4 md:p-5 lg:p-6">
                      <div>
                        <h2 className="text-base font-bold text-center text-gray-900 font-heading dark:text-emerald-100 sm:text-lg md:text-xl">
                          {project.title}
                        </h2>
                        <p className="mt-2 mb-3 text-xs font-normal leading-6 text-center text-gray-700 font-body dark:text-gray-300 sm:text-sm sm:mt-3 sm:mb-4 md:text-base">
                          {project.description}
                        </p>

                        {/* Skills Tags */}
                        <div className="flex flex-wrap justify-center gap-1.5 mb-3 sm:gap-2 sm:mb-4">
                          {project.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-1.5 py-0.5 text-[10px] font-semibold text-white bg-gray-800 rounded-full dark:bg-emerald-600 dark:text-white sm:px-2 sm:py-1 sm:text-xs md:text-sm"
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
                          className="flex items-center justify-center w-full py-1.5 text-xs font-semibold text-center transition-colors duration-200 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 dark:bg-emerald-700 dark:border-emerald-700 dark:text-white sm:py-2 sm:text-sm md:text-base hover:bg-gray-100 dark:hover:bg-emerald-600 active:scale-95"
                        >
                          GitHub{" "}
                          <FaGithub className="ml-2 text-lg sm:text-xl" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll Indicator */}
              <div className="flex justify-center mt-4">
                <p className="text-[10px] text-gray-600 sm:text-xs md:text-sm dark:text-gray-400">
                  ← Scroll horizontally to see more projects →
                </p>
              </div>
            </div>
          </div>
          <div
            id="skills"
            className="px-4 py-16 bg-gray-100 dark:bg-gradient-to-br dark:from-gray-800 dark:via-black dark:to-gray-800"
          >
            <div className="container mx-auto">
              <h1 className="mb-12 text-3xl font-bold text-center transition-colors duration-300 text-emerald-950 sm:text-4xl md:text-5xl lg:text-6xl dark:text-emerald-400">
                Skills
              </h1>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-2 mb-12 sm:gap-4">
                {Object.entries(skillCategories).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setActiveSkillFilter(key)}
                    className={`px-3 py-2 text-xs font-semibold rounded-full transition-all duration-200 border-2 hover:scale-105 sm:px-4 sm:py-3 sm:text-sm md:px-6 ${
                      activeSkillFilter === key
                        ? "bg-emerald-700 dark:bg-emerald-600 text-white shadow-md border-emerald-700 dark:border-emerald-500"
                        : "bg-white dark:bg-slate-700 text-gray-700 dark:text-white border-gray-300 dark:border-slate-600 hover:bg-emerald-50 dark:hover:bg-slate-600 "
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
                        animation: "",
                      },
                      fullStackProjects: {
                        title: "Backend Technologies",
                        color: "text-green-600 dark:text-green-400",
                        animation: "",
                      },
                      mobileAndDesktop: {
                        title: "Databases Technologies",
                        color: "text-purple-600 dark:text-purple-400",
                        animation: "",
                      },
                      developmentTools: {
                        title: "Development Tools",
                        color: "text-orange-600 dark:text-orange-400",
                        animation: "",
                      },
                    };

                    const config = categoryConfig[categoryKey];

                    return (
                      <div
                        key={categoryKey}
                        className={`myblock ${config.animation} w-full max-w-4xl `}
                      >
                        <div className="p-4 transition-shadow duration-300 bg-white shadow-lg sm:p-6 md:p-8 dark:bg-black rounded-xl hover:shadow-xl">
                          <h2
                            className={`mb-6 text-xl font-bold text-center sm:text-2xl md:text-3xl text-emerald-900 dark:text-emerald-100`}
                          >
                            {config.title}
                          </h2>
                          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 sm:gap-4 justify-items-center">
                            {skills.map((skill, index) => (
                              <div
                                key={index}
                                className="flex flex-col items-center p-3 transition-transform duration-300 rounded-lg sm:p-4 bg-gray-50 dark:bg-slate-600 hover:scale-105 group"
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
                  },
                )}
              </div>
            </div>
          </div>

          {/* Contact Content Section */}
          <div
            id="contact"
            className="px-4 py-16 bg-gray-200 dark:bg-gradient-to-br dark:from-gray-800 dark:via-black dark:to-gray-800"
          >
            <div className="flex flex-row mb-16">
              <div className="container mx-auto text-center">
                <h1 className="mb-4 text-3xl font-bold text-center transition-colors duration-300 text-emerald-950 sm:text-4xl md:text-5xl lg:text-6xl dark:text-emerald-400">
                  Contact Me
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center lg:flex-row ">
              <div className="w-full mb-8 lg:w-1/2 lg:mb-0 lg:pr-8">
                <div className="flex flex-col items-center justify-center">
                  <p className="max-w-md text-lg leading-8 text-center text-gray-800 font-body sm:text-xl dark:text-gray-100 lg:text-left">
                    Let’s discuss opportunities, projects, or ideas. I’m open to
                    collaborations and professional inquiries.
                  </p>

                  <div className="mt-6 space-y-3 lg:space-y-4">
                    <div className="flex items-center justify-center gap-3 lg:justify-start">
                      <div className="w-2 h-2 bg-black rounded-full dark:bg-emerald-500"></div>
                      <span className="text-base text-black sm:text-lg dark:text-gray-200">
                        Open to internships and freelance opportunities
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-3 lg:justify-start">
                      <div className="w-2 h-2 bg-black rounded-full dark:bg-emerald-500"></div>
                      <span className="text-base text-black sm:text-lg dark:text-gray-200">
                        Typical response within 24 hours
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
                        className="text-base text-black transition-all duration-300 sm:text-lg dark:text-gray-200 hover:underline"
                      >
                        supuntharindu1125@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex justify-center gap-6 mt-10 lg:justify-start sm:gap-8">
                    <a
                      href="https://www.facebook.com/share/1EsxvWXBEj/?mibextid=wwXIfr "
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-black transition-all duration-200 border-2 border-gray-300 rounded-full shadow-sm dark:border-emerald-300 dark:text-emerald-300 hover:text-blue-500 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                    >
                      <FaFacebook className="text-2xl"></FaFacebook>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/supun-tharindu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-black transition-all duration-200 border-2 border-gray-300 rounded-full shadow-sm dark:border-emerald-300 dark:text-emerald-300 hover:text-blue-700 hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                    >
                      <CiLinkedin className="text-2xl"></CiLinkedin>
                    </a>
                    <a
                      href="https://github.com/supuntharindu123"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-black transition-all duration-200 border-2 border-gray-300 rounded-full shadow-sm dark:border-emerald-300 dark:text-emerald-300 hover:text-gray-800 hover:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <FaGithub className="text-2xl"></FaGithub>
                    </a>
                    <a
                      href="https://www.instagram.com/supun__tharindu?igsh=ajhzaGhlMDVrc2Zx&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-black transition-all duration-200 border-2 border-gray-300 rounded-full shadow-sm dark:border-emerald-300 dark:text-emerald-300 hover:text-pink-600 hover:border-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/30"
                    >
                      <FaInstagramSquare className="text-2xl"></FaInstagramSquare>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl blur opacity-20"></div>
                  <form
                    onSubmit={onSubmit}
                    role="form"
                    aria-label="Contact form"
                    className="relative p-6 bg-gray-300 border-2 border-gray-400 shadow-2xl sm:p-8 dark:bg-black dark:border-emerald-300 rounded-xl"
                  >
                    {visible && msg && (
                      <div
                        className="w-full px-6 py-4 mb-6 text-lg font-bold text-center transition-all duration-300 rounded-lg sm:text-xl "
                        role="status"
                        aria-live="polite"
                      >
                        <div
                          className={`flex items-center justify-center gap-3 ${
                            statusType === "success"
                              ? "text-emerald-900 bg-emerald-100 border-2 border-emerald-300 dark:text-white dark:bg-emerald-700 dark:border-emerald-600"
                              : "text-red-900 bg-red-100 border-2 border-red-300 dark:text-white dark:bg-red-700 dark:border-red-600"
                          } rounded-lg p-4`}
                        >
                          {statusType === "success" ? (
                            <svg
                              className="w-6 h-6 text-emerald-700"
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
                              className="w-6 h-6 text-red-700"
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
                          <span className="ml-2">{msg}</span>
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
                        id="name"
                        type="text"
                        name="name"
                        value={name}
                        aria-required="true"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        required
                        placeholder="Enter Your Full Name"
                        className="w-full h-10 pl-4 mt-2 transition-all duration-300 bg-white border-2 border-gray-300 rounded-lg shadow-md sm:text-lg dark:bg-emerald-950 dark:border-emerald-900 dark:text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-700 dark:hover:border-emerald-400"
                      />
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
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        aria-required="true"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        required
                        placeholder="Enter Your Email Address"
                        className="w-full h-10 pl-4 mt-4 text-sm transition-all duration-300 bg-white border-2 border-gray-300 rounded-lg shadow-md sm:text-lg dark:bg-emerald-950 dark:border-emerald-900 dark:text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-700 dark:hover:border-emerald-400"
                      />
                    </div>
                    <div
                      className="mb-3 fade-in-stagger"
                      style={{ animationDelay: "0.15s" }}
                    >
                      <label
                        className="text-lg font-bold text-black dark:text-transparent dark:bg-gradient-to-br dark:from-emerald-400 dark:to-slate-400 bg-clip-text"
                        htmlFor="subject"
                      >
                        Subject&nbsp;
                      </label>
                      <br />
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Brief subject (optional)"
                        className="w-full h-10 pl-4 mt-2 transition-all duration-300 bg-white border-2 border-gray-300 rounded-lg shadow-md sm:text-lg dark:bg-emerald-950 dark:border-emerald-900 dark:text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-700 dark:hover:border-emerald-400"
                      />
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
                      <br />
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={message}
                        aria-required="true"
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        placeholder="Tell me about your project, ideas, or just say hello..."
                        className="w-full p-4 mt-4 text-lg transition-all duration-300 bg-white border-2 border-gray-300 rounded-lg shadow-md resize-none dark:border-emerald-900 dark:bg-emerald-950 dark:text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-700 dark:hover:border-emerald-400"
                      />
                      <input
                        type="text"
                        name="botcheck"
                        tabIndex="-1"
                        autoComplete="off"
                        style={{ display: "none" }}
                      />
                      <div className="mt-4">
                        <button
                          type="submit"
                          disabled={loading}
                          aria-disabled={loading}
                          className={`px-8 py-2 text-lg font-bold text-white transition-all duration-300 bg-black border-2 rounded-lg shadow-lg dark:border-emerald-500 dark:bg-gradient-to-r dark:text-black dark:from-emerald-800 dark:to-emerald-700 dark:hover:from-emerald-600 dark:hover:to-emerald-700 hover:scale-105 hover:shadow-xl sm:px-12 sm:text-xl md:text-xl focus:ring-4 focus:ring-emerald-200 dark:focus:ring-emerald-700 ${loading ? "opacity-70 cursor-wait" : ""}`}
                        >
                          <span className="flex items-center justify-center gap-3">
                            {loading ? (
                              <svg
                                className="w-5 h-5 animate-spin"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <circle
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                  strokeOpacity="0.25"
                                ></circle>
                                <path
                                  d="M22 12a10 10 0 00-10-10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                  strokeLinecap="round"
                                ></path>
                              </svg>
                            ) : (
                              "Send"
                            )}
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl dark:bg-black dark:border dark:border-emerald-700">
              {/* Close Button */}
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute p-2 text-gray-600 transition-all rounded-full top-4 right-4 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <FaX className="text-2xl" />
              </button>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                <h2 className="mb-4 text-xl font-bold text-center text-black md:text-2xl dark:text-white">
                  {selectedCertificate.name}
                </h2>
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.name}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
