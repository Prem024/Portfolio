import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Grocery Stock Management System',
      description: `Built a full-stack inventory management system using the MERN stack (MongoDB, Express.js, React, Node.js) and Tailwind CSS. Developed robust APIs to automate stock adjustments during transactions and created a responsive dashboard with Redux Toolkit for real-time inventory tracking and analytics. Implemented secure JWT-based admin authentication, low-stock automated alerts, and full CRUD operations for seamless management of products, categories, and suppliers.`,
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/Prem024/Grocery-Project',
      live: '#'
    },
    {
      title: 'DataFlow REST API',
      description: `Engineered a secure and scalable backend REST API utilizing Node.js and the Express.js framework. Designed and implemented complex CRUD workflows to manage business entities including Customers and Courses. Leveraged MongoDB and Mongoose for advanced database modeling, ensuring high-performance data validation, structured schemas, and clean API routing to support seamless frontend integration.`,
      tech: ['Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/Prem024/MongoDBCrud',
      live: '#'
    },
    {
      title: 'TechTales',
      description: `Developed a full-stack blogging application using React (Vite), Node.js, Express, and MongoDB with secure user  authentication using JWT and bcrypt.Built a personalized dashboard with full CRUD functionality, dynamic URL slug generation, and a commenting system for enhanced user engagement.Managed global state using Redux Toolkit and designed a responsive, mobile-first UI using Tailwind CSS.`,
      tech: ['React', 'Node.js', 'Express'],
      github: 'https://github.com/Prem024/TechTales',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-darkCard transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card flex flex-col h-full group">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2.5 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium hover:text-blue-600 transition-colors"
                >
                  <FiGithub className="w-4 h-4" /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium hover:text-blue-600 transition-colors ml-auto"
                >
                  <FiExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
