import React, { createContext, useState } from "react";
import VeeSeeImg from "./assets/img/portImages/veesee.png";
import DevsMeetImg from "./assets/img/portImages/devsmeet.png";
import ChatOPImg from "./assets/img/portImages/chatop.png";
import RoomLocatorImg from "./assets/img/portImages/roomlocator.png";

const PortfolioContext = createContext();

const ContextProvider = ({ children }) => {
  const [navToggle, setNavToggle] = useState(false);

  const [state] = useState({
    name: "Shivansh Pahwa",
    description: "Full-Stack Developer",
    linkedin: "https://www.linkedin.com/in/shivansh-pahwa-38b3b2192/",
    github: "https://github.com/shivanshpahwa24",
    email: "shivanshpahwa24@gmail.com",
    phone: "+91 9643941765",
    address1: "G-7/18, Sector-11, Rohini",
    address2: "New Delhi, India",
    screenshots:
      "https://drive.google.com/drive/folders/1MH3ZrkB5XSGrCvCCOj40sTiQJydCDFzU?usp=sharing",
    about: {
      full_name: "Shivansh Pahwa",
      description: `Currently pursuing B.Tech (IT) from Bharati Vidyapeeth's College of Engineering, I am a passionate full-stack web developer using web technologies to build amazing products and focusing on solving problems for different niches and different industries using the power of technology.\n
      I would love to hear from you, whether it's a project, job opportunity, or just a chat. Feel free to contact me.`,
      age: "21",
      location: "New Delhi, India",
      nationality: "Indian",
      languages: "English (Conversational), Hindi (Native)",
      role: "Full-Stack Developer",
    },
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Node.js",
      "Redux",
      "Typescript",
      "MongoDB",
      "SQL",
      "Docker",
      "C",
      "C++",
      "Figma",
      "Microsoft Office",
    ],
    work_experience: [
      {
        company_name: "Neilko Ventures Pvt. Ltd.",
        position: "Web Development Intern",
        from: "01/2020",
        to: "07/2020",
        tasks: [
          "Developed the complete frontend of two big projects using React and Redux and other necessary libraries and frameworks including materialUI, bootstrap, chartjs etc. and some part of backend using Node.",
          "One of the projects was to develop a keyword ideas tool for platforms like google, yahoo, bing, pinterest and youtube. Also made a content research tool, a url analyzer tool, the whole dashboard and a help section.",
        ],
        link: "https://drive.google.com/drive/folders/153SWLqfQ-cKXdLskLr7DUaomofXjM0N_",
      },
      {
        company_name: "Solera Life Sciences",
        position: "Full Stack Developer",
        from: "09/2020",
        to: "10/2020",
        tasks: [
          "Developed the functionality of real time video calling and messaging using Node.js, Socket.IO and webRTC for its implementation in the native mobile application of the company.",
        ],
      },
    ],
    education: [
      {
        degree: "Bachelor of Technology",
        school: "BHARATI VIDYAPEETH'S COLLEGE OF ENGINEERING",
        from: "2018",
        to: "2022",
        grade: "",
        specialization: "INFORMATION TECHNOLOGY",
        extra_curricular_activities: [
          "Web Head, MLSC BVP",
          "EM Executive, DSC BVP",
        ],
      },
      {
        degree: "12th",
        school: "ST. MARGARET SR. SEC. SCHOOL",
        from: "2017",
        to: "2018",
        grade: "95.3",
        specialization: "PCM with Computer Science",
        extra_curricular_activities: [
          "Astronomy Club (SPACE India)",
          "Photography Club",
        ],
      },
      {
        degree: "10th",
        school: "ST. MARGARET SR. SEC. SCHOOL",
        from: "2016",
        to: "2015",
        grade: "9.4",
      },
    ],
    awards: [
      "Cash Prize and a certificate for scoring highest marks in Physics in class 12th",
      "Cash Prize and a certificate for being in top 5 (class 11th)",
      "Scholarship (A2 grade for 3 consecutive years)",
    ],
    organizations: [
      {
        name: "Microsoft Learn Student Chapter (MLSC) BVP",
        position: "Web Lead",
        duration: "(2020 - 2021)",
      },
      {
        name: "Developer Student Clubs (DSC) BVP",
        position: "EM Executive",
        duration: "(2019 - 2020)",
      },
    ],
    extra_curricular_activities: [
      "Organized Hacktoberfest 2019 and Arduino Day 2020 in college",
      "Got selected as the top 2 teams to go for SIH 2020 Hardware",
      "Participated in eYantra Robotics Competition 2019-20 and 2020-21 and went till stage 4",
    ],
    projects: [
      {
        name: "VeeSee",
        description: [
          "A video-calling web application that provides peer-to-peer video and audio communication in a web browser with no plugins or extensions required.",
          "You can call a friend and even share your screen if you want to show some presentation.",
          "The app is a PWA (Progressive Web App) and thus can be downloaded on a mobile phone too.",
        ],
        link: "http://veesee.herokuapp.com/",
        source_code: "https://github.com/shivanshpahwa24/VeeSee",
        image: VeeSeeImg,
        stack_used: ["React", "Node.js", "webRTC", "Socket.IO", "MaterialUI"],
      },
      {
        name: "ChatOP",
        description: [
          "A chat application that can be used to interact with anybody by creating specific rooms.",
          "NOTE : The room name is case sensitive",
          "This app is also a PWA.",
        ],
        link: "http://chatopp.herokuapp.com/",
        source_code: "https://github.com/shivanshpahwa24/chatOP-react",
        image: ChatOPImg,
        stack_used: ["React", "Node.js", "Socket.IO", "Bootstrap"],
      },
      {
        name: "DevsMeet",
        description: [
          "A social network web app for developers made using MERN stack.",
          "One can create profiles, posts and comment on other people's posts.",
          "They can show their bio, skills, experience, education, github profile and repos and all the other handles all at a single place.",
          "This app is also a PWA.",
        ],
        link: "http://devs-meet.herokuapp.com/",
        source_code: "https://github.com/shivanshpahwa24/DevsMeet",
        image: DevsMeetImg,
        stack_used: ["React", "Node.js", "MongoDB", "Redux", "Bootstrap"],
      },
      {
        name: "DSC BVP Room Locator",
        description: [
          "A room locator app for my college mates to check which room is empty at a particular day and time so they can work there on their skills.",
          "The whole database was created by me and also the app is a PWA.",
        ],
        link: "http://rooms.dscbvp.dev/",
        source_code: "",
        image: RoomLocatorImg,
        stack_used: ["VanillaJS", "Bootstrap"],
      },
    ],
  });

  const {
    name,
    linkedin,
    email,
    phone,
    github,
    address1,
    address2,
    about,
    skills,
    description,
    work_experience,
    education,
    awards,
    organizations,
    extra_curricular_activities,
    projects,
    screenshots,
  } = state;

  return (
    <PortfolioContext.Provider
      value={{
        name,
        linkedin,
        email,
        phone,
        github,
        address1,
        address2,
        about,
        skills,
        description,
        work_experience,
        education,
        awards,
        organizations,
        extra_curricular_activities,
        projects,
        screenshots,
        navToggle,
        setNavToggle,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export { ContextProvider, PortfolioContext };
