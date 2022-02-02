import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";

export const services = [
  {
    Icon: RiComputerLine,
    title: "WEB 3 Devloper",
    about:
      "Decentralized app development using ETHERIUM blockhain, metamask.",
  },
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable websites using <b> NEST JS</b>,<b>REACT JS</b>   and <b>Tailwind CSS</b> ",
  },

  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>Express js</b>  ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>Codechef</b> ,<b> GeeksForGeeks</b>  and <b> Leet Code</b> ",
  },
  // {
  //   Icon: AiOutlineAntDesign,
  //   title: "UI/UX designer",
  //   about:
  //     "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  // },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },

];


export const languages = [
  {
    Icon: BsCircleFill,
    name: "C++",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Next JS",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Solidity",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind CSS",
    level: "80",
  },
];

export const tools = [
  {
    Icon: BsCircleFill,
    name: "VS Code",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "After Effects, Preimier Pro",
    level: "60",
  },

];

export const projects = [

  {
    name: "Realtime Decentralised Chat App",
    image_path: "/web3-chat.png",
    deployed_url: "http://web-3-chat-app.vercel.app/",
    github_url: "https://github.com/Priyanshu1609/Web-3-chat-app",
    category: ["Web3"],
    description:
      "Basic Realtime Decentralised Chat App using Moralis where user is connected decentrally",
    key_techs: ["React", "Tailwind", "Solidity"],
  },
  {
    name: "Linkedin  Clone",
    image_path: "/linkedin.png",
    deployed_url: "https://linkedin-clone-4b75b.web.app/",
    github_url: "https://github.com/Priyanshu1609/Linked-clone",
    category: ["react"],
    description:
      "Linkedin clone | One can signin , comment , post .",
    key_techs: ["redux", "react", "firebase"],
  },
  {
    name: "Task Scheduler App",
    image_path: "/task-scheduler.png",
    deployed_url: "https://happy-johnson-ecfcee.netlify.app/",
    github_url: "https://github.com/Priyanshu1609/Task-scheduler",
    category: ["react"],
    description:
      "Task scheduler app | One can create task , edit and delete",
    key_techs: ["react", "firebase", "tailwind",],
  },
  {
    name: "Google  Clone",
    image_path: "/google.png",
    deployed_url: "http://google-clone-drab-nu.vercel.app/",
    github_url: "https://github.com/Priyanshu1609/Google-clone",
    category: ["react"],
    description:
      "Google clone using google api",
    key_techs: ["react", "tailwind", "api"],
  },
  {
    name: "Anime Search",
    image_path: "/anime-search.png",
    deployed_url: "https://anime-search-tawny.vercel.app/",
    github_url: "https://github.com/Priyanshu1609/Anime-search",
    category: ["react"],
    description:
      "Anime search app where one can search animes, know more about it",
    key_techs: ["react", "tailwind", "api"],
  },
  {
    name: "Spoitfy  Clone",
    image_path: "/spotify.png",
    deployed_url: "http://spotify-clone-sigma-puce.vercel.app/",
    github_url: "https://github.com/Priyanshu1609/Spotify-clone",
    category: ["react"],
    description:
      "Spotify clone using spotify api. Play , pause , skip , change volume",
    key_techs: ["react", "tailwind", "api"],
  },
  {
    name: "Climate change api",
    image_path: "/",
    deployed_url: "https://via.placeholder.com/150x300.png?text=Climate+change+api",
    github_url: "https://github.com/Priyanshu1609/climate-change-news-api",
    category: ["node"],
    description:
      "An api for fetching climate change news",
    key_techs: ["node", "api", "axios"],
  },
  {
    name: "BlackJacks game",
    image_path: "/blackjacks.png",
    deployed_url: "https://priyanshu1609.github.io/BLACK-JACKS.github.io/",
    github_url: "https://github.com/Priyanshu1609/BLACK-JACKS.github.io",
    category: ["Javascript"],
    description:
      "Black jacks game using vanila javascript",
    key_techs: ["javascript", "html", "css"],
  },
  {
    name: "Quiz app",
    image_path: "/quiz.png",
    deployed_url: "https://github.com/Priyanshu1609/Quiz-App.github.io",
    github_url: "https://github.com/Priyanshu1609/Quiz-App.github.io",
    category: ["Javascript"],
    description:
      "Quiz app using vanila javascript",
    key_techs: ["javascript", "html", "css"],
  },
  {
    name: "Text analyser",
    image_path: "/text.png",
    deployed_url: "https://github.com/Priyanshu1609/Text-analyser",
    github_url: "hhttps://github.com/Priyanshu1609/Text-analyser",
    category: ["Javascript"],
    description:
      "Text analyser app for counting words, length, size, capatilize etc",
    key_techs: ["javascript", "html", "css"],
  },
  {
    name: "Food ordering app",
    image_path: "/food.png",
    deployed_url: "https://github.com/Priyanshu1609/OnGree.github.io",
    github_url: "https://github.com/Priyanshu1609/OnGree.github.io",
    category: ["Javascript"],
    description:
      "Food ordering app ui",
    key_techs: ["javascript", "html", "css"],
  },


];
