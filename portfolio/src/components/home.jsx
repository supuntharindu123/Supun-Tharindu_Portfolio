import { useState, useEffect } from "react";
import "../../src/App.css";
import NavBar from "./nav";
import Footer from "./footer";
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

function Home() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");
  const [visible, setVisible] = useState(false);

  // Typing animation state
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const words = [
    "Undergraduate at SLIIT",

    "Specialized in Information Technology",
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
    },
    {
      title: "Resume Analyzer",
      description:
        "Developed a full-stack AI-powered Resume Analysis system designed to revolutionize hiring by precisely matching resumes to job descriptions, optimizing recruitment processes, and assisting job seekers",
      image: `${Resume}`,
      github: "https://github.com/supuntharindu123/AIResumeAnalyzer",
    },
    {
      title: "Advance Task Manegement App",
      description:
        " Developed a full-stack Task Management System with advanced features for efficient workflow and collaboration.",
      image: `${TaskApp}`,
      github: "https://github.com/supuntharindu123/Task-Management-WebApp",
    },
    {
      title: "Vehicle Advertisement System",
      description:
        "Developed a web-based Vehicle Advertisement system with filter ads, post ads (with validations), user authentication, and a responsive UI.",
      image: `${Image1}`,
      github: "https://github.com/supuntharindu123/Vehical-Ads",
    },
    {
      title: "My Portfolio",
      description:
        "I am Supun Tharindu Kumarasena, a third-year undergraduate student at SLIIT, pursuing a degree in Information Technology.",
      image: `${Image}`,
      github: "#",
    },
    {
      title: "Social Media Platform",
      description:
        "User authentication (live validations), Messaging, Post creation, Following & Followers, and Profile management.",
      image: `${Social}`,
      github: "https://github.com/supuntharindu123/MYAPP",
    },
    {
      title: "Live Chat Application",
      description:
        "Developed a live chat application with send, delete, and edit messages, along with user authentication.",
      image: `${Livechat}`,
      github: "https://github.com/supuntharindu123/livechat_web_application",
    },
    // {
    //   title: "User Management System",
    //   description:
    //     "Developed a user record management system with full CRUD operations using Django.",
    //   image: `${Djangopython}`,
    //   github: "https://github.com/supuntharindu123/Django",
    // },
    {
      title: "Task Management App",
      description:
        "Created a task management app with CRUD operations using Kotlin.",
      image: `${ToDo}`,
      github: "https://github.com/supuntharindu123/TaskmanagementApp",
    },
    {
      title: "YouTube Clone",
      description: "Created YouTube Clone using YouTube Data Api and React.",
      image: `${MyTube}`,
      github: "https://github.com/supuntharindu123/mytube",
    },
  ];

  const themeChange = () => {
    setTheme(!theme);
    localStorage.setItem("theme", !theme);
  };
  const mytheme = localStorage.getItem("theme");
  console.log("mytheme", mytheme);

  const skillsData = [
    { name: "HTML", icon: HTML },
    { name: "CSS", icon: CSS },
    { name: "JavaScript", icon: Js },
    { name: "Java", icon: Java },
    { name: "React", icon: Reactimg },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Django", icon: Django },
    { name: "SQLite", icon: Sqlite },
    { name: "MySQL", icon: Mysql },
    { name: "MongoDB", icon: MongoDb },
    { name: "Tailwind CSS", icon: Tailwind },
    { name: "Bootstrap", icon: Bootstrap },
    { name: "Kotlin", icon: Kotlin },
    { name: "Socket.io", icon: Socket },
    { name: ".NET Core", icon: NET },
    { name: "Spring-Boot", icon: Spring },
  ];

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
      <button
        onClick={themeChange}
        className={`absolute ms-80 border-5 border-black border my-3 p-2 mt-5 rounded-md font-bold shadow text-2 xl ${
          mytheme === "true" ? "bg-slate-100 font-bold border " : "bg-gray-50"
        }`}
      >
        {mytheme === "true" ? <MdLightMode /> : <MdDarkMode></MdDarkMode>}
      </button>
      <div className={`${mytheme === "true" && "dark"} `}>
        <NavBar></NavBar>

        <div className="bg-gray-300 dark:bg-slate-900">
          <div className="flex flex-col items-center justify-center h-auto lg:flex-row ">
            <div className="flex flex-col justify-center m-6 lg:items-center lg:-mr-80 lg:ml-[200px]">
              <h1 className="text-4xl font-extrabold text-black hello bounce-in sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl dark:text-white animate-bounce">
                Welcome !
              </h1>
              <h2 className="my-4 text-2xl font-bold hello slide-in-left sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl dark:text-white lg:text-center">
                I'm Supun Tharindu Kumarasena
              </h2>
              <h3 className="text-lg sm:text-xl md:text-2xl dark:text-white lg:text-center hello typing-container slide-in-right">
                <span className="text-transparent text-gradient bg-gradient-to-r from-blue-800 to-purple-800 dark:from-gray-200 dark:to-purple-800 bg-clip-text ">
                  {typedText}
                </span>
                <span className="ml-1 text-blue-500 blinking-cursor">|</span>
              </h3>
              <div className="flex flex-row items-center mt-8 hello lg:justify-center slide-in-up">
                <a
                  href="https://github.com/supuntharindu123"
                  className="p-3 mx-3 text-2xl border border-black rounded-full dark:border-white dark:text-white hover:bg-slate-700 hover:text-white rotate-hover glow-hover"
                >
                  <FaGithub className="hover:animate-bounce"></FaGithub>
                </a>
                <a
                  href="https://www.linkedin.com/in/supun-tharindu/"
                  className="p-3 mx-3 text-2xl border border-black rounded-full dark:border-white dark:text-white hover:bg-slate-700 hover:text-white rotate-hover glow-hover"
                >
                  <CiLinkedin className="hover:animate-bounce"></CiLinkedin>
                </a>
                <a
                  href="https://www.facebook.com/share/1EsxvWXBEj/?mibextid=wwXIfr "
                  className="p-3 mx-3 text-2xl border border-black rounded-full dark:border-white dark:text-white hover:bg-slate-700 hover:text-white rotate-hover glow-hover"
                >
                  <FaFacebook className="hover:animate-bounce"></FaFacebook>
                </a>
                <a
                  href="https://www.instagram.com/supun__tharindu?igsh=ajhzaGhlMDVrc2Zx&utm_source=qr "
                  className="p-3 mx-3 text-2xl border border-black rounded-full dark:border-white dark:text-white hover:bg-slate-700 hover:text-white rotate-hover glow-hover"
                >
                  <FaInstagramSquare className="hover:animate-bounce"></FaInstagramSquare>
                </a>
              </div>
              <a
                href={myCv}
                download={myCv}
                className="w-48 px-8 py-2 mt-6 text-lg font-semibold border-2 border-gray-500 shadow hello sm:px-16 sm:text-2xl sm:w-80 dark:border-white rounded-xl dark:text-white hover:bg-slate-600 hover:text-white zoom-in pulse-glow"
              >
                <span className="flex items-center justify-center gap-2">
                  Download CV
                  <FaDownload className="text-lg sm:text-xl hover:animate-bounce wiggle" />
                </span>
              </a>
            </div>
            <div className="hello flex flex-row items-center justify-center lg:ml-[300px] float">
              <img
                src={Me}
                className="lg:w-[600px] lg:h-[750px] brightness-95 contrast-125 hover:scale-105 transition-transform duration-300"
              ></img>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center pt-10 pb-10 bg-gray-400 lg:columns-2 lg:flex-row dark:bg-slate-800 md:columns-1 "
            id="about"
          >
            <div className="lg:w-[50%] justify-center flex myblock slide-in-left">
              <h1 className="mb-5 font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-8xl lg:text-7xl dark:text-white lg:w-[30%] text-center bounce-in">
                About Me
              </h1>
            </div>
            <div className="lg:w-[50%] flex flex-col justify-center myblock slide-in-right">
              <p className="p-6 mr-4 text-lg font-semibold transition-transform duration-300 border shadow select-none sm:p-12 sm:mr-16 sm:text-lg md:text-lg rounded-xl lg:text-lg/10 ms-9 dark:text-white lg:-ms-24 text-slate-800 dark:bg-slate-800 bg-slate-100 zoom-in hover:scale-105">
                I am Supun Tharindu Kumarasena, a highly motivated Full Stack
                Developer and third-year undergraduate pursuing a BSc (Hons) in
                Information Technology at SLIIT, Sri Lanka. With a strong
                foundation in software engineering principles and
                object-oriented programming, I specialize in building dynamic,
                end-to-end web and mobile applications that solve real-world
                problems.
                <br />
                I am proficient in a broad range of technologies, including
                React.js, Node.js, Django, Spring Boot, and Kotlin, and I have
                hands-on experience working with both SQL and NoSQL databases.
                <br />
                I am currently seeking a Software Engineer Internship where I
                can contribute my technical expertise, creativity, and
                dedication to impactful projects. I am passionate about learning
                new tools and frameworks—especially cloud technologies such as
                AWS—and committed to delivering clean, efficient code that
                aligns with best practices.
                <br />
                Thank you!
              </p>
              <a
                href="#contact"
                className="w-64 px-8 py-3 mt-8 ml-10 text-xl font-bold text-center text-white transition-colors duration-300 border rounded-lg shadow-lg myblock border-slate-900 dark:bg-slate-800 lg:-ms-24 hover:bg-slate-950 bg-sky-800 hover:border-white pulse-glow glow-hover"
              >
                Let's Connect!
              </a>
            </div>
          </div>
          <div className="py-12 bg-gray-200 dark:bg-slate-900">
            <h1 className="mb-10 text-4xl font-extrabold text-center sm:text-5xl md:text-6xl lg:text-7xl text-slate-800 dark:text-white bounce-in">
              My Projects
            </h1>
            <div className="container grid grid-cols-1 gap-8 px-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="transition-shadow duration-300 bg-gray-300 border-4 rounded-lg shadow-lg myblock dark:bg-slate-800 hover:shadow-none hover:border-neutral-600 zoom-in "
                >
                  <img
                    src={project.image}
                    className="object-cover w-full transition-transform duration-300 rounded-t-lg h-52 hover:scale-110"
                    alt={project.title}
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-center dark:text-white slide-in-up">
                      {project.title}
                    </h2>
                    <p className="mt-3 mb-5 text-lg text-center dark:text-white fade-in-stagger">
                      {project.description}
                    </p>
                    <div className="flex justify-center">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full py-2 font-bold text-center transition-colors duration-300 bg-white border rounded-lg shadow-md hover:bg-slate-900 hover:text-white glow-hover pulse-glow"
                      >
                        GitHub{" "}
                        <FaGithub className="ml-2 text-xl rotate-hover" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            id="skills"
            className="flex flex-col items-center justify-center py-12 bg-gray-400 lg:flex-row dark:bg-slate-800"
          >
            <div className="lg:w-[40%] justify-center flex animate-slide-in">
              <h1 className="text-4xl font-extrabold text-center myblock sm:text-5xl md:text-6xl lg:text-8xl dark:text-white text-slate-800 lg:ml-60 bounce-in ">
                <span className="block mb-3 lg:mx-4 slide-in-left">My</span>
                <span className="bg-clip-text slide-in-right">Skills</span>
              </h1>
            </div>
            <div className="lg:w-[60%] flex flex-wrap justify-center pr-6 lg:mr-40 animate-fade-in">
              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  className="relative m-5 transition-transform duration-300 transform myblock group hover:scale-110 zoom-in rotate-hover heartbeat"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="object-contain w-28 h-28 float glow-hover"
                  />

                  <div className="absolute hidden px-2 py-1 mb-2 text-sm text-white bg-black rounded-md bottom-full group-hover:block fade-in-stagger">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            id="contact"
            className="flex flex-col items-center justify-center py-12 bg-gray-200 lg:columns-2 lg:flex-row dark:bg-slate-700 md:columns-1"
          >
            <div className="lg:w-[50%] justify-center flex flex-col items-center slide-in-left">
              <h1 className="myblock shadow-slate-900 text-gray-800 font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-8xl lg:text-7xl dark:text-white lg:w-[30%] text-center lg:mr-56 xl:mr-88 bounce-in">
                Contact
              </h1>
              <div className="flex flex-col justify-start ">
                <p className="max-w-md mt-6 text-xl text-center text-gray-600 myblock lg:text-center dark:text-gray-300 fade-in-stagger">
                  Have a question? Contact
                </p>

                <div className="flex justify-center mt-8 space-x-6 myblock lg:justify-start slide-in-up">
                  <a
                    href="https://www.facebook.com/share/1EsxvWXBEj/?mibextid=wwXIfr "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 rotate-hover glow-hover float"
                  >
                    <FaFacebook className="text-6xl heartbeat"></FaFacebook>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/supun-tharindu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 transition-colors duration-300 dark:text-gray-300 hover:text-blue-800 rotate-hover glow-hover float"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <CiLinkedin className="text-7xl heartbeat"></CiLinkedin>
                  </a>
                  <a
                    href="https://github.com/supuntharindu123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 transition-colors duration-300 dark:text-gray-300 hover:text-gray-950 rotate-hover glow-hover float"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <FaGithub className="text-6xl heartbeat"></FaGithub>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-[40%] w-[80%] mt-6 slide-in-right">
              <form
                onSubmit={onSubmit}
                className="p-6 bg-white border shadow-xl myblock shadow-grey-500 lg:-ml-24 lg:mr-24 dark:bg-slate-700 rounded-xl zoom-in glow-hover"
              >
                {visible && msg && (
                  <p className="w-full px-4 py-2 mb-3 text-xl font-bold text-center bg-white rounded-sm bounce-in pulse-glow">
                    {msg}
                  </p>
                )}
                <div className="mb-10 fade-in-stagger">
                  <label
                    className="text-2xl font-bold text-gray-600 dark:text-white"
                    for="name"
                  >
                    Your Name&nbsp;
                    <span className="text-lg text-red-600">*</span>
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
                    placeholder="Enter Your Name"
                    className="w-full h-10 pl-3 mt-4 text-2xl transition-transform duration-300 border rounded shadow-md dark:shadow-white "
                  ></input>
                </div>
                <div
                  className="mb-10 fade-in-stagger"
                  style={{ animationDelay: "0.1s" }}
                >
                  <label
                    className="text-2xl font-bold text-gray-600 dark:text-white"
                    for="name"
                  >
                    Your Email&nbsp;
                    <span className="text-lg text-red-600">*</span>
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
                    className="w-full h-10 pl-3 mt-4 text-2xl transition-transform duration-300 border rounded shadow-md dark:shadow-white "
                  ></input>
                </div>
                <div className="mb-4 fade-in-stagger">
                  <label
                    className="text-2xl font-bold text-gray-600 dark:text-white"
                    for="name"
                  >
                    Message&nbsp;
                    <span className="text-lg text-red-600">*</span>
                  </label>
                  <br></br>
                  <textarea
                    type="text"
                    name="message"
                    rows={5}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    required
                    placeholder="Enter Your Message..."
                    className="w-full pl-3 mt-4 text-2xl transition-transform duration-300 bg-white border rounded shadow-md dark:shadow-white "
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-16 py-2 text-2xl font-bold text-white bg-gray-600 rounded-md shadow-md shadow-white hover:bg-slate-700 hover:text-white pulse-glow glow-hover "
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
