import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-darkCard transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              Hello! I'm Prem Nanda, an enthusiastic MERN stack developer stepping into the tech world. 
              I love creating visually appealing and highly functional web applications that solve real-world problems.
            </p>
            <p className="font-medium text-slate-900 dark:text-slate-200">
              My Goal: As a fresher, my primary objective is to learn continuously, contribute to meaningful projects, 
              and grow alongside a dynamic team in a challenging and creative environment.
            </p>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold mb-6 text-blue-600">Education Details</h3>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-blue-500">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1.5 ring-4 ring-white dark:ring-darkCard"></div>
                <h4 className="font-bold text-lg">Bachelor of Technology</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Computer Science & Engineering</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Graduated in 2026</p>
              </div>
              
              <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-700">
                <div className="absolute w-3 h-3 bg-slate-300 dark:bg-slate-600 rounded-full -left-[7px] top-1.5 ring-4 ring-white dark:ring-darkCard"></div>
                <h4 className="font-bold text-lg">High School</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Science Stream</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Completed in 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
