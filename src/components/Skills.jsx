import React from 'react';
import {FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaJava, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython, FaFigma} from "react-icons/fa";
import {SiTailwindcss, SiJquery, SiExpress, SiMongodb, SiMysql, SiVercel, SiRender, SiPostgresql, SiPostman  } from "react-icons/si";
import { useTheme } from '../context/ThemeContext';
import FloatingShape from './FloatingShape';
import { VscVscode } from "react-icons/vsc";



export default function SkillsGrid() {
  const {isDark}=useTheme();
  const skills = [
    {
      title: "Programming Languages",
      description: "Core programming languages I work with",
      skills: [
        { name: "JavaScript", logo: <FaJs className="text-yellow-400 text-2xl" /> },
        { name: "Java", logo: <FaJava className="text-red-600 text-2xl" /> },
        { name: "Python", logo: <FaPython className="text-blue-500 text-2xl" /> },
      ],
    },
    {
      title: "Frontend",
      description: "Frontend development technologies I use to build modern responsive websites",
      skills: [
        { name: "HTML", logo: <FaHtml5 className="text-orange-600 text-2xl" /> },
        { name: "CSS", logo: <FaCss3Alt className="text-blue-600 text-2xl" /> },
        { name: "Tailwind CSS", logo: <SiTailwindcss className="text-cyan-500 text-2xl" /> },
        { name: "Bootstrap", logo: <FaBootstrap className="text-purple-600 text-2xl" /> },
        { name: "jQuery", logo: <SiJquery className="text-blue-500 text-2xl" /> },
        { name: "React.js", logo: <FaReact className="text-cyan-400 text-2xl" /> },
      ],
    },
    {
      title: "Backend & Databases",
      description: "Server-side technologies and database management services I use for developing production level services",
      skills: [
        { name: "Node.js", logo: <FaNodeJs className="text-green-600 text-2xl" /> },
        { name: "Express.js", logo: <SiExpress className=" text-2xl" /> },
        { name: "MongoDB", logo: <SiMongodb className="text-green-600 text-2xl" /> },
        { name: "MySQL", logo: <SiMysql className="text-3xl" /> },
        // { name: "PostgreSQL", logo: <SiPostgresql className=" text-2xl" /> },
      ],
    },
    {
      title: "Tools & Platforms",
      description: "Development tools and deployment platforms I work with",
      skills: [
        { name: "Git", logo: <FaGitAlt className="text-orange-500 text-2xl" /> },
        { name: "GitHub", logo: <FaGithub className="text-2xl" /> },
        { name: "Vercel", logo: <SiVercel className="text-2xl" /> },
        { name: "Render", logo: <SiRender className="text-indigo-500 text-2xl" /> },
        { name: "Figma", logo: <FaFigma className="text-pink-500 text-2xl" /> },
        { name: "Visual Studio Code", logo: <VscVscode className="text-blue-500 text-2xl" /> },
        { name: "Postman", logo:<SiPostman  className="text-orange-500 text-2xl" /> },
      ],
    },
  ];
  return (
    <>
      <FloatingShape
        color="bg-blue-500"
        size="w-32 h-32"
        top="70%"
        left="10%"
        delay={2}
      />
    <div className={`${isDark?'bg-gradient-to-br  from-black via-gray-800 to-zinc-900':'bg-gradient-to-br  from-white/80 via-gray-400 to-zinc-200'} py-12 px-4 sm:px-6 min-h-screen`}>
      <h1 className={`text-center font-bold ${isDark?'text-white':'text-zinc-900'} mb-5`}>Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto align-middle">
        {skills.map((section, idx) => (
          <div
            key={idx}
            className={`${isDark?'bg-gray-900/70':'bg-white/70'} p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-700`}
          >
            <h2 className={`${isDark?'text-blue-400 ':'text-blue-600'} font-bold text-xl mb-2 text-center`}>
              {section.title}
            </h2>
            <p className={`${isDark?'text-blue-50':'text-zinc-600'} text-sm mb-4 text-center`}>
              {section.description}
            </p>
            <div className="flex flex-wrap gap-3 items-center justify-center md:items-start md:justify-start">
              {section.skills.map((skill, i) => (
                <div
                  key={i}
                  className={`${isDark?'bg-gray-100 text-gray-800':'bg-gray-700 text-gray-200'} px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-medium hover:scale-105 transition-transform justify-center`}
                >
                  <div className={`${isDark?'text-gray-800':'text-gray-200'}`}>{skill.logo}</div>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div data-aos="zoom-out" className="flex justify-center mt-5 mx-5">
        <img
          src={`${isDark?'https://leetcard.jacoblin.cool/zeedan55?theme=nord&font=Kanit&ext=heatmap':'https://leetcard.jacoblin.cool/zeedan55?theme=unicorn&font=Kanit&ext=heatmap'}`}
          alt="LeetCode Stats"
          className="w-full max-w-[500px] h-auto"
        />
      </div>
    </div>
     
    </>
  );
}