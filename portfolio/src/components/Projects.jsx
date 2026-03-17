import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product management, shopping cart functionality, and integrated Stripe payments.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management System',
      description: 'A responsive web application to organize tasks and projects. Features include drag-and-drop boards, real-time updates, and team collaboration.',
      tech: ['React', 'Redux', 'Node.js', 'Socket.io', 'MongoDB'],
      github: '#',
      live: '#'
    },
    {
      title: 'AI Chat Assistant',
      description: 'An intelligent chatbot integrated with Gemini LLM for natural language processing, context-aware responses, and conversation memory.',
      tech: ['React', 'Node.js', 'Express', 'Gemini API'],
      github: '#',
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
