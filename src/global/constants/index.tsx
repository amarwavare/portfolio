import { IconSchool } from "@tabler/icons-react";

import {
  PortfolioAboutPageRoute,
  PortfolioBlogsPageRoute,
  PortfolioHomePageRoute,
  PortfolioJourneyPageRoute,
  PortfolioProjectsPageRoute,
} from "@/router/routes";
import { JOURNEYROADMAP, MENUPAGES } from "../types";

const LINKEDIN_PROFILE_URL = process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL;
const GITHUB_PROFILE_URL = process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL;
const TWITTER_PROFILE_URL = process.env.NEXT_PUBLIC_TWITTER_PROFILE_URL;
const globalNamePattern1 = "AMARNATH";
const portfolioHomeReducer = "portfolioHomeReducer";
const leftNumbers = {
  ZERO: "00",
  ONE: "01",
  TWO: "02",
  THREE: "03",
  FOUR: "04",
  FIVE: "05",
};
const leftTitles = {
  PORTFOLIO: "PORTFOLIO",
  INTRODUCE: "INTRODUCE",
  JOURNEY: "JOURNEY",
  PROJECTS: "PROJECTS",
  BLOGS: "BLOGS",
  ABOUT: "ABOUT",
};
const introductionParagraphLines = [
  `My name is Amarnath Wavare, I'm from India`,
  `living in Pune, where I work as a Fullstack`,
  `Software Engineer at Axis Bank. With passionate,`,
  `enthusiastic & intuitive problem solving skills,`,
  `I like contributing in growth oriented projects`,
  `by translating business requirement into`,
  `technical solutions with Agile methodology.`,
];
const menuPages: MENUPAGES[] = [
  { route: PortfolioHomePageRoute, label: "H O M E" },
  { route: PortfolioJourneyPageRoute, label: "J O U R N E Y" },
  { route: PortfolioProjectsPageRoute, label: "P R O J E C T S" },
  { route: PortfolioBlogsPageRoute, label: "B L O G S" },
  { route: PortfolioAboutPageRoute, label: "A B O U T" },
];
const journeyDescription = [
  `I'm a Full Stack`,
  [
    "Software Engineer",
    "Web Developer",
    "Mobile (Flutter & React Native) Developer",
  ],
  "Having overall experience of 3 years in Fin-tech, Ed-Tech, Med-Tech, E-Commerce.",
  "As a developer I highly value Ethics, Transparency, Integrity, Passion, Team work above all else.",
  "These ideals guide my approach to problem solving and life in general.",
  "I collaborate with business team to design & develop impactful mission focused application",
  "& softwares that drive results & achieve business goals.",
];
const journeyRoadmap: JOURNEYROADMAP = [
  {
    fromTo: "March 2014",
    at: `ASM's A.V.E.M.S.`,
    description: [
      `10<sup>th</sup> grade with first class - Maharashtra State Board - Abhinava Vidyalaya English Medium School.`,
    ],
    icon: <IconSchool color="black" />,
    url: process?.env?.NEXT_PUBLIC_AVEMS_URL,
  },
  {
    fromTo: "February 2016",
    at: `D.E.S. Ramanbaug Jr. College`,
    description: [
      `12<sup>th</sup> grade Bi-focal Science with first class grade - Maharashtra State Board.`,
    ],
    icon: <IconSchool color="black" />,
    url: process.env.NEXT_PUBLIC_RAMANBAUG_URL,
  },
  {
    fromTo: "March 2021",
    at: `M.E.S. Wadia College of Engineering - Pune University (SPPU)`,
    as: `Bachelors of Engineering`,
    description: [
      `Electronics & Telecommunication Engineering - 7.2 CGPA.`,
      "Participated in ETSA and many other technical, non-technical & industrial activities",
    ],
    icon: <IconSchool color="black" />,
    url: process.env.NEXT_PUBLIC_MESCOE_URL,
  },
  {
    fromTo: "April 2021 - January 2022",
    at: `Toppr Technologies`,
    as: `Internship - Programming Instructor`,
    description: [
      `Hands-on with both client & server side cutting edge full stack web development technologies.`,
    ],
    url: process.env.NEXT_PUBLIC_TOPPR_URL,
  },
  {
    fromTo: "January 2022 - July 2022",
    at: `NV Tech Business Solutions`,
    as: `Software Engineer`,
    description: [
      `At NV I had a great opportunity to transform my technical skills & exposure to multiple domains.`,
      `Contributed in multiple growth oriented projects in a very short time span which were developed from scratch in domains like E-commerce, OMS, Med-Tech.`,
      `Taking ownership of code and meeting business requirements by following Agile Scrum methodologies & setting up project architectures.`,
    ],
    url: process.env.NEXT_PUBLIC_NVTECH_URL,
  },
  {
    fromTo: "September 2022 - Present",
    at: "Axis Bank",
    as: "Deputy Manager - Tech Engineer Development",
    description: [
      `As a fullstack developer, have played a pivotal role in all aspects & phases throughout the development process.`,
      `Setting up development architecture & application security with cutting edge technologies & smooth development experience, Optimizing system performance for reduced operational costs & timely deliverables of multiple modules.`,
    ],
    url: process.env.NEXT_PUBLIC_AXIS_URL,
  },
];
export {
  portfolioHomeReducer,
  globalNamePattern1,
  leftNumbers,
  leftTitles,
  introductionParagraphLines,
  menuPages,
  journeyDescription,
  journeyRoadmap,
  LINKEDIN_PROFILE_URL,
  GITHUB_PROFILE_URL,
  TWITTER_PROFILE_URL,
};
