import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import me from "../assets/imgs/me2.jpg";
import "../App.css"
const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-600" /> },
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
  { name: "SQL", icon: <FaDatabase className="text-gray-500" /> },
];

const About = () => {
  return (
    <div className="colorChange">
    <section className="py-12 " id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg hover:scale-105 transition duration-300">
            <img src={me} alt="Me" className="w-full h-full object-cover" />
          </div>

          {/* About Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold  ">About Me</h1>
            <h2 className="text-xl mt-2">
              An ambitious Full Stack Developer, passionate about coding 🎓
            </h2>
            <p className="mt-4   leading-relaxed">
              I am a creative and analytical programmer with a problem-solving mindset, eager to 
              build functional and scalable applications. My ability to learn quickly and collaborate 
              effectively makes me a valuable asset in any development team.
            </p>

            {/* Skills Section */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold  ">Skills</h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-6 mt-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="text-4xl">{skill.icon}</div>
                    <p className="mt-2 text-sm font-medium  ">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;
