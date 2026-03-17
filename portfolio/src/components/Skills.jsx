import React from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt 
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiJavascript } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact className="w-8 h-8 text-[#61DAFB]" /> },
    { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8 text-[#339933]" /> },
    { name: 'Express', icon: <SiExpress className="w-8 h-8 text-slate-800 dark:text-slate-200" /> },
    { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8 text-[#47A248]" /> },
    { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" /> },
    { name: 'HTML', icon: <FaHtml5 className="w-8 h-8 text-[#E34F26]" /> },
    { name: 'CSS', icon: <FaCss3Alt className="w-8 h-8 text-[#1572B6]" /> },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="card flex flex-col items-center justify-center p-6 gap-4 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                {skill.icon}
              </div>
              <span className="font-medium text-slate-800 dark:text-slate-200">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
