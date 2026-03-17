import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Hi, I'm <span className="text-blue-600">Prem Nanda</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-600 dark:text-slate-400 mb-6">
          MERN Stack Developer (Fresher)
        </h2>
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          I am a passionate aspiring developer focused on building clean, responsive, and scalable web applications. 
          Ready to turn ideas into modern digital experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="btn-primary w-full sm:w-auto text-center">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary w-full sm:w-auto text-center">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
