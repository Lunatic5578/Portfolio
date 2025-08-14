import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useRef } from "react";
import { motion } from "framer-motion";
import gdsc from "../assets/gdsc.jpg";
import pinnacle from "../assets/pinnacle.jpeg"
import lithium from "../assets/lithium.jpg";

const Work = () => {
  const { isDark } = useTheme();
  const worksData = [
    {
      title: "Web Development Intern",
      company: "Pinnacle Labs",
      duration: "May 2024 - June 2024",
      link: "https://drive.google.com/file/d/170jxCP3bMe-fwwMk4MtkAr3zIapr3GnX/view",
      image: pinnacle,
      location: "Hybrid",
      description: `Solved several tasks.
      Built two basic projects as a part of internship.`,
      role: ["Developer"],
    },
    {
      title: "Core-Member for Web Development Team",
      company: "GDSC-BIT",
      duration: "July 2023 - Feb 2024",
      link:"https://drive.google.com/file/d/18Xa399ScVzle55Z7QrES8hlE_yoLRdRY/view",
      image: gdsc,
      location: "Hybrid",
      description: `Conducted seminars guiding students on various topics of web development explaining complex topics and answering various queries of new learners.
      Helpled in developing website for the club.`,
      role: ["Mentor, Developer"],
    },
    {
      title: "Core-Member for Data-Structures and Algorithms Team",
      company: "GDSC-BIT",
      duration: "July 2023 - Feb 2024",
      link:"https://drive.google.com/file/d/18Xa399ScVzle55Z7QrES8hlE_yoLRdRY/view",
      image: gdsc,
      location: "Hybrid",
      description: `Conducted a webinar making students understand the importance of DSA and provided them with a custom roadmap guiding them for their studies. 
      Designed a custom DSA sheet for the club to help new learners get started in a structured and organized path with ease.`,
      role: ["Mentor, Instructor"],
    },
    {
      title: "Frontend Developer",
      company: "Lithium",
      duration: "Nov 2022 - Jan 2023",
      link:"https://priyotakundu.github.io/LITHIUM-2K23/",
      image: lithium,
      location: "Hybrid",
      description:
        "Collaborated with a team and worked on designing and developing an event website for the annual fresher's event of Bengal Institute of Technology.",
      role: ["Team Management, Event Mangement, Developer, Designer"],
    },
  ];
  const ref = useRef(null);

  return (
    <div
      className={`${
        isDark
          ? "bg-gradient-to-br  from-zinc-900 via-black to-gray-800"
          : "bg-gradient-to-br  from-zinc-200 via-white/80 to-gray-400"
      } py-12 px-4 sm:px-6 min-h-screen`}
    >
      <h1
        className={`text-center font-bold ${
          isDark ? "text-white" : "text-zinc-900"
        } mb-2`}
      >
        Work Timeline
      </h1>
      <motion.div
        id="works"
        ref={ref}
        className="w-full min-h-screen flex flex-col items-center py-20 justify-center"
      >
        <div className="max-w-4xl w-full relative">
          

          {worksData.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="relative flex flex-col md:flex-row items-start mb-12"
            >
              

              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`w-full md:w-3/4 m-auto relative p-6 rounded-lg shadow-lg border bg-opacity-50 text-white transition-all duration-300 ${
                  isDark ? "bg-gray-800" : "bg-blue-50"
                }`}
              >
                <div className="relative z-10">
                  <div className="flex justify-center items-center flex-col">
                    <img
                      src={work.image}
                      alt={`${work.company} logo`}
                      className={`h-30 w-60 object-contain m-2 p-1 ${work.image===pinnacle ?"border-2 rounded-full": ""}`}
                    />
                  </div>
                  <h3
                    className={`${
                      isDark ? "text-blue-400 " : "text-blue-600"
                    } font-bold text-xl mb-2 flex items-center justify-between flex-row`}
                  >
                    {work.title} <a href={work.link} target="_blank" rel="noopener noreferrer" className="text-2xl no-underline transform hover:rotate-45 transition-all duration-200 inline-block">🔗</a>
                  </h3>
                  <h4
                    className={`${
                      isDark ? "text-yellow-200 " : "text-yellow-600"
                    } font-sm text-xl mb-2`}
                  >
                    {work.company} 
                  </h4>
                  <p
                    className={`${
                      isDark ? "text-blue-50" : "text-zinc-600"
                    } text-sm mb-4`}
                  >
                    {work.duration} - {work.location}
                  </p>
                  {work.description && (
                    <p
                      className={`${
                        isDark ? "text-blue-50" : "text-zinc-600"
                      } text-sm mb-4`}
                    >
                      {work.description}
                    </p>
                  )}
                  {work.technologies && (
                    <div className="mt-3 flex flex-wrap gap-2 boast font-semibold">
                      {work.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.1 }}
                          className=" bg-gray-800 text-white px-3 py-1 rounded-full text-sm transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
