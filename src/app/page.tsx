'use client';

import { ParticlesBackground } from "./components/ParticlesBackground";
import Grid from "./components/grid/Grid";
import { TextEffect } from "./components/TextEffect";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { FiUser, FiCode, FiGrid, FiMail } from "react-icons/fi";
import Dock from "./components/Dock";


const Home = () => {

  const dockItems = [
    {
      label: "About",
      icon: <FiUser className="size-6 text-black dark:text-white" />,
      onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "Skills",
      icon: <FiCode className="size-6 text-black dark:text-white" />,
      onClick: () => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "Projects",
      icon: <FiGrid className="size-6 text-black dark:text-white" />,
      onClick: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "Contact",
      icon: <FiMail className="size-6 text-black dark:text-white" />,
      onClick: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
    },
  ];

  return (
    <>
      <div className="min-h-screen flex justify-center items-center text-center">
        <ParticlesBackground />
        <header className="relative">
          <span className="uppercase tracking-widest text-xs text-center text-lightGray">Welcome to my portfolio</span>
          <TextEffect
            words="Hello, World. I'm Bahar"
          />
        </header>
      </div>
      <Dock items={dockItems} />
      <Grid />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
